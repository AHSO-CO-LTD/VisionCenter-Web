import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import "../../style/ProductCategory.css";
import API from "../../utils/api";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCode,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCategory() {
  const [highlightedProducts, setHighlightedProducts] = useState({
    cameras: [],
    softwares: [],
    hardwares: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/products/highlighted");
        setHighlightedProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm nổi bật:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <div className="category-container">
        <h1 className="category-title">✨ Chọn danh mục sản phẩm</h1>
        <div className="category-list">
          <Link to="/product/cameras" className="category-card">
            <div className="category-icon camera">
              <FontAwesomeIcon icon={faCamera} />
            </div>
            <div className="category-name">Cameras</div>
          </Link>
          <Link to="/product/softwares" className="category-card">
            <div className="category-icon software">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div className="category-name">Phần mềm</div>
          </Link>
          <Link to="/product/hardwares" className="category-card">
            <div className="category-icon hardware">
              <FontAwesomeIcon icon={faMicrochip} />
            </div>
            <div className="category-name">Phần cứng</div>
          </Link>
        </div>

        {/* Hiển thị Sản phẩm nổi bật */}
        <div className="featured-products-section">
          <h2>Sản phẩm nổi bật</h2>

          <h3 className="category-label">📷 Cameras</h3>
          <div className="featured-products-list">
            {highlightedProducts.cameras.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <h3 className="category-label">💻 Phần mềm</h3>
          <div className="featured-products-list">
            {highlightedProducts.softwares.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <h3 className="category-label">🧩 Phần cứng</h3>
          <div className="featured-products-list">
            {highlightedProducts.hardwares.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
