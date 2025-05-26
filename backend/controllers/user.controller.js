const User = require("../models/user.model");

exports.getAllUser = async (req, res) => {
  try {
    const rows = await User.getAll();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Lỗi server khi lấy danh sách người dùng: ", err });
  }
};
exports.createUser = async (req, res) => {
  const {
    username,
    email,
    password,
    full_name,
    birthday,
    phone,
    gender,
    address,
    avatar,
    status,
    role, 
  } = req.body;
  await User.create({
    username,
    email,
    password,
    full_name,
    birthday,
    phone,
    gender,
    address,
    avatar,
    status,
    role,
  });
  res.json({ message: "Tạo user thành công." });
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
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
  } = req.body;

  const sanitize = (value) => (value === undefined ? null : value);

  const avatarFromFile = req.file ? `/uploads/${req.file.filename}` : undefined;

  try {
    await User.update({
      id: parseInt(id),
      username: sanitize(username),
      email: sanitize(email),
      password: sanitize(password),
      full_name: sanitize(full_name),
      phone: sanitize(phone),
      address: sanitize(address),
      avatar: sanitize(avatarFromFile || avatar), // 👈 Ưu tiên file upload
      role: sanitize(role),
      birthday: sanitize(birthday),
      gender: sanitize(gender),
    });

    res.json({ message: "Cập nhật thành công." });
  } catch (error) {
    console.error("Lỗi cập nhật người dùng:", error.message);
    res.status(500).json({ error: "Lỗi cập nhật người dùng." });
  }
};


exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.remove(id);
  res.json({ message: "Xóa thành công" });
};
exports.profield = async (req, res) => {
  const { id } = req.params;

  try {
    const profield = await User.getProfield(id);
    res.json(profield);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
