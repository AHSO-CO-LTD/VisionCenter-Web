const db = require("../config/db");

const User = {
  // Lấy toàn bộ người dùng
  async getAll() {
    const [rows] = await db.execute("SELECT * FROM users");

    return rows;
  },

  // Tạo người dùng mới (mặc định chưa xác thực email)
  async create({
    username,
    email,
    password,
  }) {
    return db.execute(
      `INSERT INTO users 
       (username, email, password)
       VALUES (?, ?, ?)`,
      [
        username,
        email,
        password,
        
      ]
    );
  },
  // Cập nhật người dùng
  // Cập nhật người dùng (đã sửa)
  async update({
    id,
    username,
    email,
    password,
    full_name,
    phone,
    address,
    avatar,
    role,
    birthday,
    gender,
  }) {
    console.log(avatar);
    return db.execute(
      `UPDATE users 
     SET 
       username = ?, 
       email = ?, 
       password = ?, 
       full_name = ?, 
       phone = ?, 
       address = ?, 
       avatar = ?, 
       role = ?, 
       birthday = ?, 
       gender = ? 
     WHERE id = ?`,
      [
        username ?? null,
        email ?? null,
        password ?? null,
        full_name ?? null,
        phone ?? null,
        address ?? null,
        avatar ?? null,
        role ?? null,
        birthday ?? null,
        gender ?? null,
        id,
      ]
    );
  },

  // Tìm người dùng theo email
  async findByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },

  // Lấy thông tin người dùng
  async getProfield(id) {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },

  // Kiểm tra email đã tồn tại
  async isEmailExist(email) {
    const [rows] = await db.execute(
      "SELECT 1 FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    return rows.length > 0;
  },

  // Xóa người dùng
  async remove(id) {
    return db.execute("DELETE FROM users WHERE id = ?", [id]);
  },

  // Lưu mã khôi phục mật khẩu
  async insertResetCode(email, code, expireAt) {
    await db.execute("DELETE FROM password_reset_codes WHERE email = ?", [
      email,
    ]);
    return db.execute(
      "INSERT INTO password_reset_codes (email, code, expires_at) VALUES (?, ?, ?)",
      [email, code, expireAt]
    );
  },

  // Kiểm tra mã khôi phục hợp lệ
  async verifyResetCode(email, code) {
    const [rows] = await db.execute(
      `SELECT * FROM password_reset_codes
       WHERE email = ? AND code = ? AND expires_at > NOW()
       ORDER BY created_at DESC 
       LIMIT 1`,
      [email, code]
    );
    return rows[0];
  },

  // Xóa mã khôi phục đã hết hạn
  async deleteResetCodeExpired() {
    return db.execute(
      "DELETE FROM password_reset_codes WHERE expires_at < NOW()"
    );
  },

  // Đổi mật khẩu người dùng
  async updatePasswordByEmail(email, password) {
    return db.execute("UPDATE users SET password = ? WHERE email = ?", [
      password,
      email,
    ]);
  },

  // Xác minh email (khi người dùng bấm vào link xác thực)
  async verifyEmail(email) {
    return db.execute("UPDATE users SET is_verified = 1 WHERE email = ?", [
      email,
    ]);
  },

  // Kiểm tra email đã xác thực chưa
  async isVerifiedEmail(email) {
    const [rows] = await db.execute(
      "SELECT is_verified FROM users WHERE email = ?",
      [email]
    );
    return rows.length > 0 && rows[0].is_verified === 1;
  },

  // (tuỳ chọn) Lưu code xác thực email nếu bạn muốn quản lý qua bảng riêng
  async saveVerificationCode(email, code, expiresAt) {
    await db.execute("DELETE FROM email_verifications WHERE email = ?", [
      email,
    ]);
    return db.execute(
      "INSERT INTO email_verifications (email, code, expires_at) VALUES (?, ?, ?)",
      [email, code, expiresAt]
    );
  },

  async verifyRegisterCode(email, code) {
    const [rows] = await db.execute(
      `SELECT * FROM email_verifications
       WHERE email = ? AND code = ? AND expires_at > NOW()
       ORDER BY created_at DESC 
       LIMIT 1`,
      [email, code]
    );
    return rows[0];
  },
  // Xóa mã xác thực email đã hết hạn
  async deleteVerificationCodeExpired() {
    return db.execute(
      "DELETE FROM email_verifications WHERE expires_at < NOW()"
    );
  },
};

module.exports = User;
