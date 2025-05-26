// const db = require("../config/db");

// const ProductModel = {
//   // Lấy tất cả sản phẩm từ các bảng
//   getAll: async () => {
//     const [cameras] = await db.query(
//       "SELECT *, 'cameras' as type FROM cameras"
//     );
//     const [hardwares] = await db.query(
//       "SELECT *, 'hardwares' as type FROM hardwares"
//     );
//     const [softwares] = await db.query(
//       "SELECT *, 'softwares' as type FROM softwares"
//     );
//     return [...cameras, ...hardwares, ...softwares];
//   },

//   // Tách theo bảng
//   getAllCameras: () => db.query("SELECT * FROM cameras"),
//   getAllHardwares: () => db.query("SELECT * FROM hardwares"),
//   getAllSoftwares: () => db.query("SELECT * FROM softwares"),

//   getCameraById: (id) => db.query("SELECT * FROM cameras WHERE id = ?", [id]),
//   getHardwareById: (id) =>
//     db.query("SELECT * FROM hardwares WHERE id = ?", [id]),
//   getSoftwareById: (id) =>
//     db.query("SELECT * FROM softwares WHERE id = ?", [id]),

//   // Sản phẩm nổi bật: lấy 3 sản phẩm mới nhất mỗi loại
//   getHighlightedProducts: async () => {
//     const [cameras] = await db.query(
//       "SELECT * FROM cameras ORDER BY created_at DESC LIMIT 4"
//     );
//     const [hardwares] = await db.query(
//       "SELECT * FROM hardwares ORDER BY created_at DESC LIMIT 4"
//     );
//     const [softwares] = await db.query(
//       "SELECT * FROM softwares ORDER BY created_at DESC LIMIT 4"
//     );

//     return {
//       cameras,
//       hardwares,
//       softwares,
//     };
//   },

// //   Thêm sản phẩm theo bảng (dynamic theo category)
//     create: async ({ name, price, image, category }) => {
//       const query = `INSERT INTO ?? (name, price, image) VALUES (?, ?, ?)`;
//       return db.query(query, [category, name, price, image]);
//     },

//   // Cập nhật sản phẩm
//   update: async (id, { name, price, image, category }) => {
//     const query = `UPDATE ?? SET name = ?, price = ?, image = ? WHERE id = ?`;
//     return db.query(query, [category, name, price, image, id]);
//   },

//   // Xóa sản phẩm
//   remove: async (id, category) => {
//     const query = `DELETE FROM ?? WHERE id = ?`;
//     return db.query(query, [category, id]);
//   },
// };

// module.exports = ProductModel;
// src/models/product.model.js
const db = require("../config/db");

const ProductModel = {
  // Lấy tất cả sản phẩm (ghép 3 bảng)
  getAll: async () => {
    const [cameras] = await db.query("SELECT *, 'camera' as type FROM cameras");
    const [hardwares] = await db.query(
      "SELECT *, 'hardware' as type FROM hardwares"
    );
    const [softwares] = await db.query(
      "SELECT *, 'software' as type FROM softwares"
    );
    return [...cameras, ...hardwares, ...softwares];
  },

  getAllCameras: () => db.query("SELECT * FROM cameras"),
  getAllHardwares: () => db.query("SELECT * FROM hardwares"),
  getAllSoftwares: () => db.query("SELECT * FROM softwares"),

  getCameraById: (id) => db.query("SELECT * FROM cameras WHERE id = ?", [id]),
  getHardwareById: (id) =>
    db.query("SELECT * FROM hardwares WHERE id = ?", [id]),
  getSoftwareById: (id) =>
    db.query("SELECT * FROM softwares WHERE id = ?", [id]),

  // Sản phẩm nổi bật
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
    return { cameras, hardwares, softwares };
  },

  create: async ({
    name,
    price,
    avatar,
    description,
    type, // category: 'cameras' | 'hardwares' | 'softwares'
    // các trường thêm theo type:
    model,
    series,
    sensor_type,
    resolution,
    fps,
    sensor_width,
    sensor_height,
    interface: iface,
    manufacturer,
    version,
    release_date,
    os_supported,
    publisher,
    warranty,
  }) => {
    // 1) Thêm vào bảng cha
    const sqlParent = `
     INSERT INTO products
       (name, product_type)
     VALUES (?, ?)
   `;
    const [res] = await db.query(sqlParent, [name, type]);
    const productId = res.insertId;

    // 2) Tạo record trong bảng con
    switch (type) {
      case "camera":
        await db.query(
          `INSERT INTO cameras
           (name, model, series,  sensor_type,
           resolution, fps, sensor_width, sensor_height,
           \`interface\`, price, description, manufacturer,
           type, product_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            name,
            model,
            series,
            sensor_type,
            resolution,
            fps,
            sensor_width,
            sensor_height,
            iface,
            price,
            description,
            manufacturer,
            type,
            productId,
          ]
        );
        break;

      case "hardware":
        await db.query(
          `INSERT INTO hardwares
           (name, model, price, description, manufacturer,
           warranty, type, product_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            name,
            model,
            price,
            description,
            manufacturer,
            warranty,
            type,
            productId,
          ]
        );
        break;

      case "software":
        await db.query(
          `INSERT INTO softwares
           (name, version, price, description, release_date, os_supported, 
           publisher, type, product_id)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            name,
            version,
            price,
            description,
            release_date,
            os_supported,
            publisher,
            type,
            productId,
          ]
        );
        break;

      default:
        throw new Error("Loại sản phẩm không hợp lệ");
    }

    return productId;
  },

  /**
   * Cập nhật: update bảng cha, rồi update bảng con theo product_id
   */
  update: async (
    productId,
    {
      name,
      price,
      avatar,
      description,
      type,
      model,
      series,
      sensor_type,
      resolution,
      fps,
      sensor_width,
      sensor_height,
      interface: iface,
      manufacturer,
      version,
      release_date,
      os_supported,
      publisher,
      warranty,
      product_id
    }
  ) => {
    try {
      // 1) Cập nhật bảng cha
      await db.query(
        `UPDATE products
        SET name = ?, product_type = ?
        WHERE id = ?`,
        [name, type, productId]
      );
      console.log(type);
      // 2) Cập nhật bảng con
      switch (type) {
        case "camera":
          await db.query(
            `UPDATE cameras
            SET name = ?, model = ?, series = ?, sensor_type = ?, resolution = ?,
                fps = ?, sensor_width = ?, sensor_height = ?, \`interface\` = ?,
                price = ?, description = ?, manufacturer = ?, avatar = ?
            WHERE product_id = ?`,
            [
              name,
              model,
              series,
              sensor_type,
              resolution,
              fps,
              sensor_width,
              sensor_height,
              iface,
              price,
              description,
              manufacturer,
              avatar,
              product_id,
            ]
          );
          break;

        case "hardware":
      
          await db.query(
            `UPDATE hardwares
            SET name = ?, model = ?, price = ?, description = ?, manufacturer = ?, warranty = ?, avatar = ?
            WHERE product_id = ?`,
            [
              name,
              model,
              price,
              description,
              manufacturer,
              warranty,
              avatar,
              product_id,
            ]
          );
          break;

        case "software":
          await db.query(
            `UPDATE softwares
            SET name = ?, version = ?, price = ?, description = ?, release_date = ?, os_supported = ?, publisher = ?, avatar = ?
            WHERE product_id = ?`,
            [
              name,
              version,
              price,
              description,
              release_date,
              os_supported,
              publisher,
              avatar,
              product_id,
            ]
          );
          break;

        default:
          throw new Error("Loại sản phẩm không hợp lệ");
      }

      return true;
    } catch (err) {
      console.error("Lỗi khi cập nhật sản phẩm:", err);
      throw err;
    }
  },

  /**
   * Xóa: trước xóa con, sau đó xóa cha
   */
  remove: async (productId, type) => {
    // 1) Xóa bảng con
    const table =
      type === "camera"
        ? "cameras"
        : type === "hardware"
        ? "hardwares"
        : "softwares";

    await db.query(`DELETE FROM ${table} WHERE product_id = ?`, [productId]);

    // 2) Xóa bảng cha
    await db.query("DELETE FROM products WHERE id = ?", [productId]);
  },
};

module.exports = ProductModel;
