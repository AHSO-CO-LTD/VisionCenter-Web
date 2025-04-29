const express = require("express");
const router = express.Router();
const CartController = require("../controllers/cart.controller");
// Lấy giỏ hàng theo ID
router.get("/user/:userId", CartController.getCartByUserId);
// Thêm sản phẩm vào giỏ hàng
router.post('/', CartController.addToCart);
// Cập nhật số lượng sản phẩm trong giỏ hàng
router.put('/:id', CartController.updateQuantity);
// Xóa sản phẩm khỏi giỏ hàng
router.delete("/:id", CartController.deleteFromCart);


module.exports = router;
