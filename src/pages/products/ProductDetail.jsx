import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "../../style/ProductDetail.css";
import API from "../../utils/api";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faMoneyBillWave,
  faFileAlt,
  faCartPlus,
  faMicrochip,
  faCamera,
  faCogs,
  faRulerCombined,
  faBolt,
  faIndustry,
  faShieldAlt,
  faCodeBranch,
  faCalendarAlt,
  faLaptopCode,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductDetail() {
  const { id, type } = useParams(); // Lấy id và type từ URL
  const [productDetail, setProductDetail] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    let endpoint;
    if (type === "camera") {
      endpoint = `/camera/${id}`;
    } else if (type === "hardware") {
      endpoint = `/hardware/${id}`;
    } else if (type === "software") {
      endpoint = `/software/${id}`;
    }

    API.get("/products" + endpoint)
      .then((res) => setProductDetail(res.data))
      .catch((err) => console.error("Lỗi khi lấy chi tiết sản phẩm:", err));
  }, [id, type]);

  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      await API.post("/cart", {
        user_id: user.id,
        product_id: productDetail.id,
        product_type: productDetail.type,
        quantity: 1,
      });
      addToCart(productDetail);
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng: ", error);
    }
  };

  if (!productDetail) return <div>Loading...</div>;

  return (
    <PageWrapper>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img
            src={`http://localhost:8000${productDetail.avatar}`}
            alt={productDetail.name}
            className="product-detail-image-1"
          />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">
            <FontAwesomeIcon icon={faBox} /> {productDetail.name}
          </h1>
          <p className="product-detail-price">
            <FontAwesomeIcon icon={faMoneyBillWave} />{" "}
            {productDetail.price.toLocaleString()} đ
          </p>
          <p className="product-detail-description">
            <FontAwesomeIcon icon={faFileAlt} /> {productDetail.description}
          </p>

          {/* Chi tiết sản phẩm */}
          {productDetail.type === "camera" && (
            <div className="product-detail-details">
              <p>
                <FontAwesomeIcon icon={faCamera} /> <strong>Model:</strong>{" "}
                {productDetail.model}
              </p>
              <p>
                <FontAwesomeIcon icon={faCodeBranch} /> <strong>Series:</strong>{" "}
                {productDetail.series}
              </p>
              <p>
                <FontAwesomeIcon icon={faMicrochip} />{" "}
                <strong>Sensor Type:</strong> {productDetail.sensor_type}
              </p>
              <p>
                <FontAwesomeIcon icon={faBolt} /> <strong>Resolution:</strong>{" "}
                {productDetail.resolution}
              </p>
              <p>
                <FontAwesomeIcon icon={faBolt} /> <strong>FPS:</strong>{" "}
                {productDetail.fps}
              </p>
              <p>
                <FontAwesomeIcon icon={faRulerCombined} />{" "}
                <strong>Sensor Width:</strong> {productDetail.sensor_width} mm
              </p>
              <p>
                <FontAwesomeIcon icon={faRulerCombined} />{" "}
                <strong>Sensor Height:</strong> {productDetail.sensor_height} mm
              </p>
              <p>
                <FontAwesomeIcon icon={faCogs} /> <strong>Interface:</strong>{" "}
                {productDetail.interface}
              </p>
              <p>
                <FontAwesomeIcon icon={faIndustry} />{" "}
                <strong>Manufacturer:</strong> {productDetail.manufacturer}
              </p>
            </div>
          )}

          {productDetail.type === "hardware" && (
            <div className="product-detail-details">
              <p>
                <FontAwesomeIcon icon={faCamera} /> <strong>Model:</strong>{" "}
                {productDetail.model}
              </p>
              <p>
                <FontAwesomeIcon icon={faShieldAlt} />{" "}
                <strong>Warranty:</strong> {productDetail.warranty}
              </p>
              <p>
                <FontAwesomeIcon icon={faIndustry} />{" "}
                <strong>Manufacturer:</strong> {productDetail.manufacturer}
              </p>
            </div>
          )}

          {productDetail.type === "software" && (
            <div className="product-detail-details">
              <p>
                <FontAwesomeIcon icon={faCodeBranch} />{" "}
                <strong>Version:</strong> {productDetail.version}
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} />{" "}
                <strong>Release Date:</strong>{" "}
                {new Date(productDetail.release_date).toLocaleDateString()}
              </p>
              <p>
                <FontAwesomeIcon icon={faLaptopCode} />{" "}
                <strong>OS Supported:</strong> {productDetail.os_supported}
              </p>
              <p>
                <FontAwesomeIcon icon={faUserTie} /> <strong>Publisher:</strong>{" "}
                {productDetail.publisher}
              </p>
            </div>
          )}

          <button
            className="product-detail-add-to-cart-btn"
            onClick={handleAddToCart}
          >
            <FontAwesomeIcon icon={faCartPlus} /> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
