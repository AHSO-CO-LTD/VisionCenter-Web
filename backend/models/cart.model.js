const db = require("../config/db");

const CartModel = {
  async getCartByUserId(userId) {
    const sql = `
    SELECT cart.id, cart.quantity,
      CASE cart.product_type
        WHEN 'camera' THEN cameras.name
        WHEN 'hardware' THEN hardwares.name
        WHEN 'software' THEN softwares.name
      END AS name,
      CASE cart.product_type
        WHEN 'camera' THEN cameras.price
        WHEN 'hardware' THEN hardwares.price
        WHEN 'software' THEN softwares.price
      END AS price,
      CASE cart.product_type
        WHEN 'camera' THEN cameras.avartar
        WHEN 'hardware' THEN hardwares.avartar
        WHEN 'software' THEN softwares.avartar
      END AS avartar
      FROM cart
      LEFT JOIN cameras ON (cart.product_type = 'camera' AND cart.product_id = cameras.id)
      LEFT JOIN hardwares ON (cart.product_type = 'hardware' AND cart.product_id = hardwares.id)
      LEFT JOIN softwares ON (cart.product_type = 'software' AND cart.product_id = softwares.id)
      WHERE cart.user_id = ?
    `;
    const [rows] = await db.query(sql, [userId]);
    return rows;
  },

  async findCartItem(user_id, product_id, product_type) {
    const [rows] = await db.query(
      "SELECT * FROM cart WHERE user_id = ? AND product_id = ? AND product_type = ?",
      [user_id, product_id, product_type]
    );
    return rows;
  },

  async addQuantity(user_id, product_id, product_type, quantity) {
    return db.query(
      "UPDATE cart SET quantity = quantity + ? WHERE user_id = ? AND product_id = ? AND product_type = ?",
      [quantity, user_id, product_id, product_type]
    );
  },

  async insertItem(user_id, product_id, product_type, quantity) {
    return db.query(
      "INSERT INTO cart (user_id, product_id, product_type, quantity) VALUES (?, ?, ?, ?)",
      [user_id, product_id, product_type, quantity]
    );
  },

  async updateQuantity(cartId, quantity) {
    return db.query("UPDATE cart SET quantity = ? WHERE id = ?", [
      quantity,
      cartId,
    ]);
  },

  async delete(cartId) {
    return db.query("DELETE FROM cart WHERE id = ?", [cartId]);
  },
};

module.exports = CartModel;
