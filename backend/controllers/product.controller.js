const Product = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
  try {
    const [rows] = await Product.getAll();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi lấy sản phẩm: " + err.message });
  }
};

// Lấy tất cả sản phẩm trong bảng cameras
exports.getAllCameras = async (req, res) => {
  try {
    const [rows] = await Product.getAllCameras();
    res.json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi lấy danh sách cameras: " + err.message });
  }
};

// Lấy tất cả sản phẩm trong bảng hardwares
exports.getAllHardwares = async (req, res) => {
  try {
    const [rows] = await Product.getAllHardwares();
    res.json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi lấy danh sách hardwares: " + err.message });
  }
};
// Lấy tất cả sản phẩm trong bảng softwares
exports.getAllSoftwares = async (req, res) => {
  try {
    const [rows] = await Product.getAllSoftwares();
    res.json(rows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi lấy danh sách softwares: " + err.message });
  }
};
// Lấy chi tiết sản phẩm camera
exports.getCameraById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await Product.getCameraById(id);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
    }
    res.json(rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi lấy chi tiết camera: " + err.message });
  }
};

// Lấy chi tiết sản phẩm hardware
exports.getHardwareById = async (req, res) => {
   const { id } = req.params;
   try {
     const [rows] = await Product.getHardwareById(id);
     if (rows.length === 0) {
       return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
     }
     res.json(rows[0]);
   } catch (err) {
     res
       .status(500)
       .json({ message: "Lỗi khi lấy chi tiết hardware: " + err.message });
   }
};

// Lấy chi tiết sản phẩm software
exports.getSoftwareById = async (req, res) => {
   const { id } = req.params;
   try {
     const [rows] = await Product.getSoftwareById(id);
     if (rows.length === 0) {
       return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
     }
     res.json(rows[0]);
   } catch (err) {
     res
       .status(500)
       .json({ message: "Lỗi khi lấy chi tiết phần mềm: " + err.message });
   }
};

exports.createProduct = async (req, res) => {
  const { name, price, image, category } = req.body;
  try {
    await Product.create({ name, price, image, category });
    res.json({ message: "Tạo sản phẩm thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi tạo sản phẩm: " + err.message });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, image, category } = req.body;
  try {
    await Product.update(id, { name, price, image, category });
    res.json({ message: "Cập nhật thành công" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Lỗi khi cập nhật sản phẩm: " + err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.remove(id);
    res.json({ message: "Xóa thành công" });
  } catch (err) {
    res.status(500).json({ message: "Lỗi khi xóa sản phẩm: " + err.message });
  }
};
