import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../style/ManagerProduct.css";
import API from "../../utils/api";
// Import interface FormEditProduct
import ProductForm from "./FormEditProduct";

export default function ManagerProduct() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
  const [isSubmitting, setSubmitting] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    avatar: "",
    avatar_2: "",
    description: "",
    productType: "hardware",
    resolution: "",
    version: "",
    osSupport: "",
    model: "",
    series: "",
    sensor_type: "",
    fps: "",
    sensor_width: "",
    sensor_height: "",
    interface: "",
    manufacturer: "",
    release_date: "",
    os_supported: "",
    publisher: "",
    warranty: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    API.get("/products")
      .then((res) => setProducts(Array.isArray(res.data) ? res.data : []))
      .catch((err) => console.error(err));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);

      // Xem trước ảnh
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      console.log("File avartar sản phẩm: ", avatarFile);
      reader.readAsDataURL(file);
    }
  };
  const handleDelete = (id, type) => {
    if (window.confirm("Bạn có chắc muốn xoá sản phẩm này?")) {
      API.delete(`/products/${id}/${type}`)
        .then(() => fetchProducts())
        .catch((err) => console.error(err));
    }
  };

  // ManagerProduct.jsx
  const handleAddProduct = () => {
    // 1. Validate các trường bắt buộc
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.avatar ||
      !newProduct.description
    ) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // 2. Chuẩn hóa payload (nếu cần map productType → type)
    const payload = {
      ...newProduct,
      type: newProduct.productType,
    };

    // 3. Gọi API POST lên backend
    API.post("/products", payload)
      .then(() => {
        // 3.1 tải lại danh sách
        fetchProducts();
        // 3.2 đóng form và reset
        setFormVisible(false);
        resetForm();
      })
      .finally(() => setSubmitting(false))
      .catch((err) => {
        console.error(err);
        alert("Có lỗi khi thêm sản phẩm, vui lòng thử lại.");
      });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      ...product,
      productType: product.type, // <- mapping đúng
      avatar: product.avatar,
    });
    setAvatarFile(null); // reset file cũ
    setFormVisible(true);
  };
  const handleUpdateProduct = () => {
    // 1. Validate
    if (!newProduct.name || !newProduct.price || !newProduct.description) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // 2. Tạo form data
    const formData = new FormData();

    // Thêm các trường từ newProduct, trừ avatar và productType
    for (const key in newProduct) {
      if (key !== "avatar") {
        formData.append(key, newProduct[key]);
      }
    }

    // 3. Nếu có ảnh mới → gửi ảnh
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    } else {
      // Không có ảnh mới => giữ tên ảnh cũ
      formData.append("avatar", newProduct.avatar);
    }

    // 4. Gọi API PUT (với headers multipart/form-data)
    API.put(`/products/${newProduct.id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(() => {
        fetchProducts();
        setEditingProduct(null);
        setFormVisible(false);
        resetForm();
      })
      .catch((err) => {
        console.error("Lỗi cập nhật:", err);
        alert("Có lỗi khi cập nhật sản phẩm.");
      });
  };

  const resetForm = () => {
    setNewProduct({
      name: "",
      price: "",
      avatar: "",
      description: "",
      productType: "hardware",
      resolution: "",
      version: "",
      osSupport: "",
      model: "",
      series: "",
      sensor_type: "",
      fps: "",
      sensor_width: "",
      sensor_height: "",
      interface: "",
      manufacturer: "",
      release_date: "",
      os_supported: "",
      publisher: "",
      warranty: "",
    });
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="manager-product-container">
      <h2>Danh sách sản phẩm</h2>

      <button
        className="manager-product-button"
        onClick={() => setFormVisible(true)}
      >
        <FontAwesomeIcon icon={faPlus} /> Thêm sản phẩm
      </button>

      {isFormVisible && (
        <ProductForm
          isEditing={!!editingProduct}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
          onCancel={() => {
            setFormVisible(false);
            setEditingProduct(null);
            resetForm();
          }}
          handleAvatarUpload={handleAvatarUpload} // <-- TRUYỀN HÀM XUỐNG
        />
      )}

      <table className="manager-product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Ảnh</th>
            <th>Mô tả</th>
            <th>Loại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((p, index) => (
            <tr key={p.id}>
              <td>{index + 1}</td>
              <td>{p.name}</td>
              <td>{p.price.toLocaleString()}₫</td>
              <td>
                <img
                  src={`http://localhost:8000${p.avatar}`}
                  alt={p.name}
                  width="60"
                />
              </td>
              <td>{p.description}</td>
              <td>{p.type}</td>
              <td>
                <button
                  className="manager-product-button delete-button"
                  onClick={() => handleDelete(p.product_id, p.type)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Xoá
                </button>
                <button
                  className="manager-product-button edit-button"
                  style={{ marginLeft: 10 }}
                  onClick={() => handleEditProduct(p)}
                >
                  <FontAwesomeIcon icon={faPen} /> Sửa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt; Trước
        </button>
        <span>
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Tiếp &gt;
        </button>
      </div>
    </div>
  );
}
