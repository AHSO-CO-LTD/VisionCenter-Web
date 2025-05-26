const Cart = require("../models/cart.model");

exports.getCartByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    const rows = await Cart.getCartByUserId(userId);
    res.json(rows);
  } catch (err) {
    console.error("❌ Lỗi khi lấy giỏ hàng:", err);
    res.status(500).json(err);
  }
};

exports.addToCart = async (req, res) => {
  const { user_id, product_id, product_type, quantity, name, avatar, price } =
    req.body;
 
  try {
    const rows = await Cart.findCartItem(user_id, product_id, product_type);

    if (rows.length > 0) {
      await Cart.addQuantity(
        user_id,
        product_id,
        product_type,
        quantity,
        name,
        avatar,
        price
      );
      res.json({ message: "Cập nhật số lượng giỏ hàng" });
    } else {
      await Cart.insertItem(
        user_id,
        product_id,
        product_type,
        quantity,
        name,
        avatar,
        price
      );
      res.json({ message: "Thêm vào giỏ hàng thành công" });
    }
  } catch (err) {
    console.error("❌ Lỗi thêm giỏ hàng:", err);
    res.status(500).json(err);
  }
};

exports.updateQuantity = async (req, res) => {
  const cartId = req.params.id;
  const { quantity } = req.body;
  try {
    await Cart.updateQuantity(cartId, quantity);
    res.json({ message: "Đã cập nhật số lượng" });
  } catch (err) {
    console.error("❌ Lỗi cập nhật số lượng:", err);
    res.status(500).json(err);
  }
};

exports.deleteFromCart = async (req, res) => {
  const cartId = req.params.id;
  try {
    await Cart.delete(cartId);
    res.json({ message: "Đã xóa sản phẩm khỏi giỏ" });
  } catch (err) {
    console.error("❌ Lỗi xóa sản phẩm:", err);
    res.status(500).json(err);
  }
};
