const db = require("../config/db");

const OrderModel = {
  // Tạo đơn hàng mới
  async createOrder(user_id, total) {
    const sql = "INSERT INTO orders (user_id, total) VALUES (?, ?)";
    return db.query(sql, [user_id, total]);
  },

  // Thêm từng sản phẩm vào bảng order_items
  async addOrderItem({
    order_id,
    product_type,
    product_id,
    name,
    avartar,
    quantity,
    price,
  }) {
    const sql = `
      INSERT INTO order_items (order_id, product_type, product_id, name, avartar, quantity, price)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    return db.query(sql, [
      order_id,
      product_type,
      product_id,
      name,
      avartar,
      quantity,
      price,
    ]);
  },

  // Lấy danh sách đơn hàng của một người dùng
  async getOrdersByUser(user_id) {
    const sql =
      "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC";
    const [rows] = await db.query(sql, [user_id]);
    return rows;
  },

  // Lấy chi tiết sản phẩm trong một đơn hàng
  async getOrderItems(order_id) {
    const sql = "SELECT * FROM order_items WHERE order_id = ?";
    const [rows] = await db.query(sql, [order_id]);
    return rows;
  },
};

module.exports = OrderModel;
