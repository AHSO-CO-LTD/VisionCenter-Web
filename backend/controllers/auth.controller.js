const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Gửi mail tới gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Đăng ký tài khoản
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashed });
    res.json({ message: "Đăng ký thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Đăng nhập
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user)
      return res.status(401).json({ message: "Tài khoản không tồn tại" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Sai mật khẩu" });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "your_secret_key",
      { expiresIn: "1d" }
    );
    res.json({
      token,
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
// Kiểm tra email đã đăng ký chưa
exports.checkEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const exists = await User.isEmailExist(email);
    res.json({ exists });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Quên mật khẩu- gửi mã 6 số
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) return res.status(404).json({ message: "Email không tồn tại." });

    const code = Math.floor(100000 + Math.random() * 900000).toString(); //Mã 6 số
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút

    await User.insertResetCode(email, code, expiresAt);

    // Cấu hình email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Mã khôi phục mật khẩu",
      html: ` <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f0f2f5; padding: 40px 0;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 16px rgba(0,0,0,0.08);">

      <!-- Header với logo -->
      <div style="background-color: #003366; padding: 24px; text-align: center;">
        <img src="https://i.imgur.com/MsZm7EG.png" alt="Logo" style="height: 60px; border-radius: 7px;" />
      </div>

      <!-- Nội dung chính -->
      <div style="padding: 36px 40px;">
        <h2 style="color: #003366; margin-bottom: 20px;">🔐 Khôi phục mật khẩu</h2>
        <p style="font-size: 15px; color: #333333;">Xin chào,</p>
        <p style="font-size: 15px; color: #333333; line-height: 1.6;">
          Bạn (hoặc ai đó) đã yêu cầu khôi phục mật khẩu cho tài khoản của bạn. Vui lòng sử dụng mã dưới đây để hoàn tất quy trình:
        </p>

        <!-- Mã khôi phục -->
        <div style="background-color: #0066b3; padding: 24px; margin: 30px 0; text-align: center; border-radius: 8px; border: 1px solid #cbd6e2;">
          <p style="font-size: 18px; margin-bottom: 12px; color: #ffffff;">Mã khôi phục của bạn:</p>
          <p style="font-size: 32px; font-weight: bold; color: #ffffff;">${code}</p>
        </div>

        <p style="font-size: 14px; color: #666;">
          <strong>Lưu ý:</strong> Mã chỉ có hiệu lực trong vòng <strong>10 phút</strong>. Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.
        </p>

        <p style="margin-top: 40px; font-size: 14px; color: #333;">Trân trọng,<br>Đội ngũ hỗ trợ</p>
      </div>

      <!-- Footer -->
      <div style="background-color: #f0f0f0; text-align: center; padding: 16px; font-size: 12px; color: #999;">
        © ${new Date().getFullYear()} VisionCenter. All rights reserved.
      </div>
    </div>
  </div>`,
    };
    await transporter.sendMail(mailOptions);
    res.json({ message: "Mã khôi phục đã được gửi đến email." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Xác thực mã
exports.verifyCode = async (req, res) => {
  const { email, code } = req.body;
  try {
    const isValid = await User.verifyResetCode(email, code);
    res.json({ valid: isValid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Đổi mật khẩu sau khi xác thực
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  try {
    const hashed = await bcrypt.hash(newPassword, 10);
    await User.updatePasswordByEmail(email, hashed);
    res.json({ message: "Đổi mật khẩu thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};







// Gửi mã xác minh khi đăng ký
exports.sendVerificationCode = async (req, res) => {
  const { email } = req.body;
  try {
    const exists = await User.isEmailExist(email);
   if (exists)
     return res.status(409).json({ message: "Email đã được đăng ký." });


    const code = Math.floor(100000 + Math.random() * 900000).toString(); //Mã 6 số
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Hết hạn sau 10 phút

    await User.saveVerificationCode(email, code, expiresAt);
    // Cấu hình email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Xác thực email",
      html: ` <div style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color: #f0f2f5; padding: 40px 0;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 16px rgba(0,0,0,0.08);">

      <!-- Header với logo -->
      <div style="background-color: #003366; padding: 24px; text-align: center;">
        <img src="https://i.imgur.com/MsZm7EG.png" alt="Logo" style="height: 60px; border-radius: 7px;" />
      </div>

      <!-- Nội dung chính -->
      <div style="padding: 36px 40px;">
        <h2 style="color: #003366; margin-bottom: 20px;">🔐Xác thực email</h2>
        <p style="font-size: 15px; color: #333333;">Xin chào,</p>
        <p style="font-size: 15px; color: #333333; line-height: 1.6;">
          Bạn (hoặc ai đó) đã yêu cầu khôi phục mật khẩu cho tài khoản của bạn. Vui lòng sử dụng mã dưới đây để hoàn tất quy trình:
        </p>

        <!-- Mã khôi phục -->
        <div style="background-color: #0066b3; padding: 24px; margin: 30px 0; text-align: center; border-radius: 8px; border: 1px solid #cbd6e2;">
          <p style="font-size: 18px; margin-bottom: 12px; color: #ffffff;">Mã khôi phục của bạn:</p>
          <p style="font-size: 32px; font-weight: bold; color: #ffffff;">${code}</p>
        </div>

        <p style="font-size: 14px; color: #666;">
          <strong>Lưu ý:</strong> Mã chỉ có hiệu lực trong vòng <strong>10 phút</strong>. Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua email.
        </p>

        <p style="margin-top: 40px; font-size: 14px; color: #333;">Trân trọng,<br>Đội ngũ hỗ trợ</p>
      </div>

      <!-- Footer -->
      <div style="background-color: #f0f0f0; text-align: center; padding: 16px; font-size: 12px; color: #999;">
        © ${new Date().getFullYear()} VisionCenter. All rights reserved.
      </div>
    </div>
  </div>`,
    };
    await transporter.sendMail(mailOptions);
    res.json({ message: "Mã khôi phục đã được gửi đến email." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.verifyRegisterCode = async (req, res) => {
  const { email, code } = req.body;
  try {
    const isValid = await User.verifyRegisterCode(email, code);
    res.json({ valid: isValid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.completeRegister = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const isValid = await User.isVerifiedRegisterCode(email);
    if (!isValid)
      return res
        .status(403)
        .json({ message: "Mã xác minh chưa hợp lệ hoặc đã hết hạn" });

    const hashed = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashed });
    res.json({ message: "Đăng ký thành công" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
