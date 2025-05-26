import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import API from "../../utils/api";
import ProductCard from "../../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import AOS from "aos";
import "aos/dist/aos.css";
import "../../style/ListCamera.css";

export default function Cameras() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    API.get("/products/cameras")
      .then((res) => setCameras(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm phần mềm:", err));
  }, []);

  return (
    <PageWrapper>
      <div className="cameras-page">
        <div className="page-header">
          <FontAwesomeIcon icon={faCameraRetro} className="header-icon" />
          <h1 className="page-title">Danh sách Camera thông minh</h1>
        </div>

        <div className="products-grid">
          {cameras.map((p, index) => (
            <div data-aos="fade-up" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
