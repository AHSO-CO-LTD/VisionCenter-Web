const bcrypt = require("bcrypt");
const db = require("./config/db");

const seedAdmin = async () => {
  const hashedPassword = await bcrypt.hash("123456", 10);
  const [rows] = await db.execute(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    ["admin", "admin@gmail.com", hashedPassword, "admin"]
  );

  console.log("✅ Tài khoản admin đã được tạo!");
  process.exit();
};

seedAdmin();
