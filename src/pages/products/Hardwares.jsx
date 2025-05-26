import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../style/ListHardware.css"; // bạn tạo file CSS riêng tương tự ListCamera.css

export default function Hardwares() {
  const [hardwares, setHardwares] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    API.get("/products/hardwares")
      .then((res) => setHardwares(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm phần cứng:", err));
  }, []);

  return (
    <PageWrapper>
      <div className="hardwares-page">
        <div className="page-header">
          <FontAwesomeIcon icon={faMicrochip} className="header-icon" />
          <h1 className="page-title">Danh sách sản phẩm phần cứng</h1>
        </div>

        <div className="products-grid">
          {hardwares.map((p) => (
            <div data-aos="fade-up" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
