import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../style/ProductCard.css";
import API from "../utils/api";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    // console.log(product);
    try {
      await API.post("/cart", {
        user_id: user.id,
        product_id: product.id,
        product_type: product.type,
        quantity: 1,
        name: product.name,
        avartar: product.avartar,
        price: product.price,
      });
      addToCart(product);
    } catch (error) {
      console.error("Lỗi khi thêm vào giỏ hàng:", error);
    }
  };

  const handleViewDetails = () => {
    navigate(`/product/${product.type}/${product.id}`);
  };

  return (
    <div className="product-card">
      <img
        src={`${product.avartar}`}
        alt={product.name}
        className="product-image-card"
      />
      <div className="product-details-card">
        <h3 className="product-name-card">{product.name}</h3>
        <p className="product-price-card">{product.price.toLocaleString()} đ</p>
        <button className="add-to-cart-btn-card" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </button>
        <button className="view-details-btn-card" onClick={handleViewDetails}>
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
