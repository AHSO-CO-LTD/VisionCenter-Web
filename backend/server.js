require("./cron");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const orderRoutes = require("./routes/order.routes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cho phép truy cập ảnh trong thư mục /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve image
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
// Products
app.use("/api/products", productRoutes);
// Cart
app.use("/api/cart", cartRoutes);
// Auth
app.use("/api/auth", authRoutes);
// User
app.use("/api/user", userRoutes);
// Order
app.use("/api/orders", orderRoutes);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
