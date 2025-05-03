const db = require("../config/db");

const ProductModel = {
  // Lấy tất cả sản phẩm từ các bảng
  getAll: async () => {
    const [cameras] = await db.query(
      "SELECT *, 'cameras' as type FROM cameras"
    );
    const [hardwares] = await db.query(
      "SELECT *, 'hardwares' as type FROM hardwares"
    );
    const [softwares] = await db.query(
      "SELECT *, 'softwares' as type FROM softwares"
    );
    return [...cameras, ...hardwares, ...softwares];
  },

  // Tách theo bảng
  getAllCameras: () => db.query("SELECT * FROM cameras"),
  getAllHardwares: () => db.query("SELECT * FROM hardwares"),
  getAllSoftwares: () => db.query("SELECT * FROM softwares"),

  getCameraById: (id) => db.query("SELECT * FROM cameras WHERE id = ?", [id]),
  getHardwareById: (id) =>
    db.query("SELECT * FROM hardwares WHERE id = ?", [id]),
  getSoftwareById: (id) =>
    db.query("SELECT * FROM softwares WHERE id = ?", [id]),

  // Sản phẩm nổi bật: lấy 3 sản phẩm mới nhất mỗi loại
  getHighlightedProducts: async () => {
 
    const [cameras] = await db.query(
      "SELECT * FROM cameras ORDER BY created_at DESC LIMIT 4"
    );
    const [hardwares] = await db.query(
      "SELECT * FROM hardwares ORDER BY created_at DESC LIMIT 4"
    );
    const [softwares] = await db.query(
      "SELECT * FROM softwares ORDER BY created_at DESC LIMIT 4"
    );

    return {
      cameras,
      hardwares,
      softwares,
    };
  },

  // Thêm sản phẩm theo bảng (dynamic theo category)
  create: async ({ name, price, image, category }) => {
    const query = `INSERT INTO ?? (name, price, image) VALUES (?, ?, ?)`;
    return db.query(query, [category, name, price, image]);
  },

  // Cập nhật sản phẩm
  update: async (id, { name, price, image, category }) => {
    const query = `UPDATE ?? SET name = ?, price = ?, image = ? WHERE id = ?`;
    return db.query(query, [category, name, price, image, id]);
  },

  // Xóa sản phẩm
  remove: async (id, category) => {
    const query = `DELETE FROM ?? WHERE id = ?`;
    return db.query(query, [category, id]);
  },
};

module.exports = ProductModel;
