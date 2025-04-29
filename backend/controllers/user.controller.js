const User = require("../models/user.model");

exports.getAllUser = async (req, res) => {
  const [rows] = await User.getAll();
  res.json(rows);
};
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  await User.create({ username, email, password });
  res.json({ message: "Tạo user thành công." });
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role } = req.body;
  await User.update(id, { username, email, password, role });
  res.json({ message: "Cập nhật thành công." });
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.remove(id);
  res.json({ message: "Xóa thành công" });
};
