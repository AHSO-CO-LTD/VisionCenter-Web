const Order = require("../models/order.model");
const Cart = require("../models/cart.model");

// Tạo đơn hàng
exports.createOrder = async (req, res) => {
  const { user_id, item_ids } = req.body;

  if (
    !user_id ||
    !item_ids ||
    !Array.isArray(item_ids) ||
    item_ids.length === 0
  ) {
    return res.status(400).json({ message: "Thông tin không hợp lệ." });
  }

  try {
    // Lấy thông tin sản phẩm từ giỏ hàng
    const cartItems = await Cart.getCartByUserId(user_id);
    const selectedItems = cartItems.filter((item) =>
      item_ids.includes(item.id)
    );

    if (selectedItems.length === 0) {
      return res
        .status(400)
        .json({ message: "Không tìm thấy sản phẩm nào hợp lệ." });
    }

    // Tính tổng tiền
    const total = selectedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Tạo đơn hàng
    const [orderResult] = await Order.createOrder(user_id, total);
    const order_id = orderResult.insertId;

    // Lưu từng sản phẩm vào bảng order_items và xóa khỏi giỏ hàng
    for (const item of selectedItems) {
      await Order.addOrderItem({
        order_id,
        product_type: item.product_type,
        product_id: item.product_id,
        name: item.name,
        avartar: item.avartar,
        quantity: item.quantity,
        price: item.price,
      });

      await Cart.delete(item.id); // Xóa khỏi giỏ hàng
    }

    res.status(201).json({ message: "Đặt hàng thành công", order_id });
  } catch (err) {
    console.error("❌ Lỗi khi tạo đơn hàng:", err);
    res.status(500).json({ message: "Đã xảy ra lỗi khi đặt hàng" });
  }
};
