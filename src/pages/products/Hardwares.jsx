import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/api";

export default function Hardwares() {
  const [hardwares, setHardwares] = useState([]);

  useEffect(() => {
    API.get("/products/hardwares")
      .then((res) => setHardwares(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm  phần cứng:", err));
  }, []);
  return (
    <PageWrapper>
      <div style={{ padding: 20 }}>
        <h1>Sản phẩm phần cứng</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 20,
            marginTop: 20,
          }}
        >
          {hardwares.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
