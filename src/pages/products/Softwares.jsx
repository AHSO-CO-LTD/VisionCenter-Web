import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import ProductCard from "../../components/ProductCard";
import API from "../../utils/api";

export default function SoftwareList() {
  const [software, setSoftware] = useState([]);

  useEffect(() => {
    API.get("/products/softwares")
      .then((res) => setSoftware(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm phần mềm:", err));
  }, []);

  return (
    <PageWrapper>
      <div style={{ padding: 20 }}>
        <h1>🖥️ Sản phẩm phần mềm</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 20,
            marginTop: 20,
          }}
        >
          {software.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
