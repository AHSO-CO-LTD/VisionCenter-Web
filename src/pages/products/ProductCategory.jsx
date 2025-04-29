import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import "../../style/ProductCategory.css"; // Nhớ import CSS nhé!

export default function ProductCategory() {
  return (
    <PageWrapper>
      <div className="category-container">
        <h1 className="category-title">Chọn danh mục sản phẩm</h1>
        <div className="category-list">
          <Link to="/product/cameras" className="category-card">
            <div className="category-icon">📷</div>
            <div className="category-name">Cameras</div>
          </Link>
          <Link to="/product/softwares" className="category-card">
            <div className="category-icon">🖥️</div>
            <div className="category-name">Phần mềm</div>
          </Link>
          <Link to="/product/hardwares" className="category-card">
            <div className="category-icon">🛠️</div>
            <div className="category-name">Phần cứng</div>
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
