import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import "../style/ProductCard.css";
import API from "../utils/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faEye } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      await API.post("/cart", {
        user_id: user.id,
        product_id: product.id,
        product_type: product.type,
        quantity: 1,
        name: product.name,
        avatar: product.avatar,
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
    <div className="product-card" data-aos="zoom-in">
      <div className="product-image-container">
        <img
          src={`http://localhost:8000${product.avatar}`}
          alt={product.name}
          className="product-image-card"
        />
        <div className="product-image-overlay">
          <FontAwesomeIcon
            icon={faEye}
            className="view-icon"
            onClick={handleViewDetails}
          />
        </div>
        <div className="product-badge">Mới</div>
      </div>

      <div className="product-details-card">
        <h3 className="product-name-card">{product.name}</h3>
        <p className="product-price-card">{product.price.toLocaleString()} đ</p>

        <button className="add-to-cart-btn-card" onClick={handleAddToCart}>
          <FontAwesomeIcon icon={faCartPlus} className="icon" />
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
}
