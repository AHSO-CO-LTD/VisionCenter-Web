import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import "../../style/ProductDetail.css";
import API from "../../utils/api";

export default function ProductDetail() {
  const { id, type } = useParams(); // Lấy id và type từ URL
  const [productDetail, setProductDetail] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  useEffect(() => {
    // Tùy vào loại sản phẩm, gọi API tương ứng
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
  // Thêm vào giỏ hàng
  const handleAddToCart = async () => {
    if (!user) {
      navigate("/login");
      return;
    }
    try {
      // Gửi yêu cầu thêm vào giỏ hàng
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
        <div className="product-image">
          <img
            src={`${productDetail.avartar}`}
            alt={productDetail.name}
            className="product-image-1"
          />
          <img
            src={`${productDetail.avartar_2}`}
            alt={productDetail.name}
            className="product-image-2"
          />
        </div>
        <div className="product-info">
          <h1 className="product-name">{productDetail.name}</h1>
          <p className="product-price">
            {productDetail.price.toLocaleString()} đ
          </p>
          <p className="product-description">{productDetail.description}</p>

          {/* Các thuộc tính sản phẩm sẽ được hiển thị ở đây */}
          {productDetail.type === "camera" && (
            <div className="camera-details">
              <p>
                <strong>Model:</strong> {productDetail.model}
              </p>
              <p>
                <strong>Series:</strong> {productDetail.series}
              </p>
              <p>
                <strong>Sensor Type:</strong> {productDetail.sensor_type}
              </p>
              <p>
                <strong>Resolution:</strong> {productDetail.resolution}
              </p>
              <p>
                <strong>FPS:</strong> {productDetail.fps}
              </p>
              <p>
                <strong>Sensor Width:</strong> {productDetail.sensor_width} mm
              </p>
              <p>
                <strong>Sensor Height:</strong> {productDetail.sensor_height} mm
              </p>
              <p>
                <strong>Interface:</strong> {productDetail.interface}
              </p>
              <p>
                <strong>Manufacturer:</strong> {productDetail.manufacturer}
              </p>
            </div>
          )}

          {productDetail.type === "hardware" && (
            <div className="hardware-details">
              <p>
                <strong>Model:</strong> {productDetail.model}
              </p>
              <p>
                <strong>Warranty:</strong> {productDetail.warranty}
              </p>
              <p>
                <strong>Manufacturer:</strong> {productDetail.manufacturer}
              </p>
            </div>
          )}

          {productDetail.type === "software" && (
            <div className="software-details">
              <p>
                <strong>Version:</strong> {productDetail.version}
              </p>
              <p>
                <strong>Release Date:</strong>{" "}
                {new Date(productDetail.release_date).toLocaleDateString()}
              </p>
              <p>
                <strong>OS Supported:</strong> {productDetail.os_supported}
              </p>
              <p>
                <strong>Publisher:</strong> {productDetail.publisher}
              </p>
            </div>
          )}

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
