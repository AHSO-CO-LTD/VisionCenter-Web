// const express = require("express");
// const {
//   register,
//   login,
//   forgotPassword,
//   resetPassword,
//   checkEmail,
//   verifyCode, // 👈 Thêm chức năng xác minh mã
// } = require("../controllers/auth.controller");

// const router = express.Router();

// // Đăng ký
// router.post("/register", register);

// // Đăng nhập
// router.post("/login", login);

// // Kiểm tra email đã tồn tại
// router.post("/check-email", checkEmail);

// // Quên mật khẩu - gửi mã 6 số
// router.post("/forgot-password", forgotPassword);
// router.post("/reset-password", resetPassword);


// // Xác minh mã 6 số
// router.post("/verify-code", verifyCode);

// // Đặt lại mật khẩu mới
// router.post("/reset-password", resetPassword);

// module.exports = router;

const express = require("express");
const {
  register,
  login,
  checkEmail,
  forgotPassword,
  verifyCode,
  resetPassword,
  sendVerificationCode,
  verifyRegisterCode,
} = require("../controllers/auth.controller");

const router = express.Router();

// Đăng ký tài khoản
router.post("/register", register);

// Đăng nhập
router.post("/login", login);

// Kiểm tra email đã tồn tại
router.post("/check-email", checkEmail);

// Quên mật khẩu - gửi mã 6 số
router.post("/forgot-password", forgotPassword);

// Xác minh mã 6 số khôi phục mật khẩu
router.post("/verify-reset-code", verifyCode);

// Đặt lại mật khẩu sau khi xác minh mã
router.post("/reset-password", resetPassword);

// Gửi mã xác thực đến email
router.post("/send-verification-code", sendVerificationCode);

// Xác minh mã 6 số cho email (kích hoạt tài khoản)
router.post("/verify-email-code", verifyRegisterCode);

module.exports = router;
