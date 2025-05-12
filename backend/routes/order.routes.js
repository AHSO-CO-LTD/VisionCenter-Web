const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order.controller");

router.post("/", orderController.createOrder);

// ✅ Lấy chi tiết đơn hàng
router.get("/:id/info", orderController.getOrderInfo);

module.exports = router;
