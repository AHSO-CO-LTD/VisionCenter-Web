import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../style/ListSoftware.css"; // bạn tạo file CSS riêng theo kiểu ListCamera.css

export default function Softwares() {
  const [softwares, setSoftwares] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    API.get("/products/softwares")
      .then((res) => setSoftwares(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm phần mềm:", err));
  }, []);

  return (
    <PageWrapper>
      <div className="softwares-page">
        <div className="page-header">
          <FontAwesomeIcon icon={faDesktop} className="header-icon" />
          <h1 className="page-title">Danh sách sản phẩm phần mềm</h1>
        </div>

        <div className="products-grid">
          {softwares.map((p) => (
            <div data-aos="fade-up" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
