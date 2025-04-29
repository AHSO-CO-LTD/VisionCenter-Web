import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import API from "../../utils/api";
import ProductCard from "../../components/ProductCard";


export default function Cameras() {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    API.get("/products/cameras")
      .then((res) => setCameras(res.data))
      .catch((err) => console.error("Lỗi khi lấy sản phẩm  phần mềm:", err));
  }, []);
  return (
    <PageWrapper>
      <div style={{ padding: 20 }}>
        <h1>Sản phẩm phần mềm</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 20,
            marginTop: 20,
          }}
        >
         {cameras.map((p) => (
          <ProductCard key={p.id} product={p}/>
         ))}
        </div>
      </div>
    </PageWrapper>
  );
}
