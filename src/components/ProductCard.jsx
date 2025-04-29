import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../style/ProductCard.css";
import API from "../utils/api";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useAuth(); // Kiểm tra người dùng đã đăng nhập hay chưa
  const { addToCart } = useCart(); // Để xử lý thêm vào giỏ hàng

  // Hàm xử lý thêm sản phẩm vào giỏ hàng
  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login"); // Nếu chưa đăng nhập, điều hướng đến trang đăng nhập
      return;
    }

    try {
      // Gửi yêu cầu POST để thêm sản phẩm vào giỏ hàng
      await API.post("/cart", {
        user_id: user.id,
        product_id: product.id,
        product_type: product.type,
        quantity: 1,
      });
      addToCart(product); // Thêm sản phẩm vào giỏ hàng trong context
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };
  // Hàm xử lý điều hướng đến trang chi tiết sản phẩm
  const handleViewDetails = () => {
    navigate(`/product/${product.type}/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        src={`${product.avartar}`}
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString()} đ</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </button>
        <button className="view-details-btn" onClick={handleViewDetails}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
