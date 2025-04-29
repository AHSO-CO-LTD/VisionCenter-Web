import { useEffect, useState } from "react";
import API from "../../utils/api";
import PageWrapper from "../../components/PageWrapper";

export default function ManagerProduct() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [editingProduct, setEditingProduct] = useState(null); // Thêm trạng thái cho sản phẩm đang sửa

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
      API.delete(`/products/${id}`)
        .then(() => fetchProducts())
        .catch((err) => console.error(err));
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    API.post("/products", newProduct)
      .then(() => {
        fetchProducts();
        setNewProduct({ name: "", price: "", image: "" }); // Clear form
      })
      .catch((err) => console.error(err));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product); // Đặt sản phẩm đang sửa vào trạng thái
    setNewProduct({ ...product }); // Điền thông tin sản phẩm vào form
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    API.put(`/products/${newProduct.id}`, newProduct)
      .then(() => {
        fetchProducts();
        setEditingProduct(null); // Reset trạng thái sau khi sửa xong
        setNewProduct({ name: "", price: "", image: "" }); // Clear form
      })
      .catch((err) => console.error(err));
  };

  return (
    <PageWrapper>
      <div style={styles.container}>
        <h2 style={styles.title}>📦 Danh sách sản phẩm</h2>

        {/* Form Thêm/Sửa sản phẩm */}
        <div style={styles.formContainer}>
          <h3>{editingProduct ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}</h3>
          <input
            type="text"
            placeholder="Tên sản phẩm"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Giá"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Link ảnh"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            style={styles.input}
          />
          <button
            onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
            style={styles.addButton}
          >
            {editingProduct ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
          </button>
        </div>

        {/* Bảng danh sách sản phẩm */}
        <table style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Ảnh</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.price.toLocaleString()}₫</td>
                <td>
                  <img src={p.image} alt={p.name} width="60" />
                </td>
                <td>
                  <button onClick={() => handleDelete(p.id)}>🗑️ Xoá</button>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => handleEditProduct(p)} // Sửa sản phẩm
                  >
                    ✏️ Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

const styles = {
  container: {
    padding: "24px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  formContainer: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
