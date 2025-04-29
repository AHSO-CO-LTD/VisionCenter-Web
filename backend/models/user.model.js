const db = require("../config/db");

const User = {
  async getAll() {
    return db.execute("SELECT * FROM users");
  },
  async create({ username, email, password }) {
    return db.execute(
      "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, 'user')",
      [username, email, password]
    );
  },
  async update(id, { username, email, password, role }) {
    return db.execute(
      "UPDATE users SET username=?, email=?, password=?, role=? WHERE id=?",
      [username, email, password, role, id]
    );
  },

  async findByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  },

  async findById(id) {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },
  async remove(id) {
    return db.execute("DELETE FROM users WHERE id=?", [id]);
  },
};

module.exports = User;
