const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
// Cart
app.use("/api/cart", cartRoutes);
// Auth
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 8000;
// User
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
