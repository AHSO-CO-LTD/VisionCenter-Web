// src/components/ProductForm.jsx
import {
  faCamera,
  faCode,
  faMicrochip,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ProductForm({
  isEditing,
  newProduct,
  setNewProduct,
  onSubmit,
  onCancel,
  isSubmitting,
  handleAvatarUpload
}) {
   // Render Files
  const renderAdditionalFields = () => {
    switch (newProduct.productType) {
      case "camera":
        return (
          <>
            <input
              type="text"
              placeholder="Model"
              value={newProduct.model}
              onChange={(e) =>
                setNewProduct({ ...newProduct, model: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Series"
              value={newProduct.series}
              onChange={(e) =>
                setNewProduct({ ...newProduct, series: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Series"
              value={newProduct.sensor_type}
              onChange={(e) =>
                setNewProduct({ ...newProduct, sensor_type: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Độ phân giải"
              value={newProduct.resolution}
              onChange={(e) =>
                setNewProduct({ ...newProduct, resolution: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Fps"
              value={newProduct.fps}
              onChange={(e) =>
                setNewProduct({ ...newProduct, fps: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Sensor width"
              value={newProduct.sensor_width}
              onChange={(e) =>
                setNewProduct({ ...newProduct, sensor_width: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Sensor height"
              value={newProduct.sensor_height}
              onChange={(e) =>
                setNewProduct({ ...newProduct, sensor_height: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Interface"
              value={newProduct.interface}
              onChange={(e) =>
                setNewProduct({ ...newProduct, interface: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Manufacturer"
              value={newProduct.manufacturer}
              onChange={(e) =>
                setNewProduct({ ...newProduct, manufacturer: e.target.value })
              }
              className="manager-product-input"
            />
          </>
        );
      case "software":
        return (
          <>
            <input
              type="text"
              placeholder="Phiên bản"
              value={newProduct.version}
              onChange={(e) =>
                setNewProduct({ ...newProduct, version: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="date"
              placeholder="Ngày phát hành"
              value={newProduct.release_date}
              onChange={(e) =>
                setNewProduct({ ...newProduct, release_date: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Hệ điều hành hỗ trợ"
              value={newProduct.os_supported}
              onChange={(e) =>
                setNewProduct({ ...newProduct, os_supported: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Nhà xuất bản"
              value={newProduct.publisher}
              onChange={(e) =>
                setNewProduct({ ...newProduct, publisher: e.target.value })
              }
              className="manager-product-input"
            />
          </>
        );
      case "hardware":
        return (
          <>
            <input
              type="text"
              placeholder="Model"
              value={newProduct.model}
              onChange={(e) =>
                setNewProduct({ ...newProduct, model: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nhà sản xuất"
              value={newProduct.manufacturer}
              onChange={(e) =>
                setNewProduct({ ...newProduct, manufacturer: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Bảo hành"
              value={newProduct.warranty}
              onChange={(e) =>
                setNewProduct({ ...newProduct, warranty: e.target.value })
              }
            />
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="manager-product-modal">
      <div className="manager-product-modal-content">
        <h3>
          <FontAwesomeIcon icon={isEditing ? faPen : faPlus} />{" "}
          {isEditing ? "Sửa sản phẩm" : "Thêm sản phẩm mới"}
        </h3>

        <div className="manager-product-form-grid">
          {/* Cột trái: chọn loại sản phẩm */}
          <div className="manager-product-left-panel">
            <div className="manager-product-radio-group">
              <label>
                <input
                  type="radio"
                  value="hardware"
                  checked={newProduct.productType === "hardware"}
                  onChange={() =>
                    setNewProduct({ ...newProduct, productType: "hardware" })
                  }
                  className="manager-product-radio"
                />
                <FontAwesomeIcon icon={faMicrochip} /> Phần cứng
              </label>
              <label>
                <input
                  type="radio"
                  value="software"
                  checked={newProduct.productType === "software"}
                  onChange={() =>
                    setNewProduct({ ...newProduct, productType: "software" })
                  }
                  className="manager-product-radio"
                />
                <FontAwesomeIcon icon={faCode} /> Phần mềm
              </label>
              <label>
                <input
                  type="radio"
                  value="camera"
                  checked={newProduct.productType === "camera"}
                  onChange={() =>
                    setNewProduct({ ...newProduct, productType: "camera" })
                  }
                  className="manager-product-radio"
                />
                <FontAwesomeIcon icon={faCamera} /> Camera
              </label>
            </div>
          </div>

          {/* Cột phải: thông tin sản phẩm */}
          <div className="manager-product-right-panel">
            <input
              type="text"
              placeholder="Tên sản phẩm"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className="manager-product-input"
            />
            <input
              type="text"
              placeholder="Giá"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className="manager-product-input"
            />
            {/* <input
              type="text"
              placeholder="Ảnh"
              value={newProduct.avatar}
              onChange={(e) =>
                setNewProduct({ ...newProduct, avatar: e.target.value })
              }
              className="manager-product-input"
            /> */}
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleAvatarUpload} // <-- SỬ DỤNG props truyền vào
              className="manager-product-input"
            />
            {newProduct.avatar && (
              <img
                src={newProduct.avatar}
                alt={newProduct.avatar}
                style={{
                  maxWidth: "100%",
                  marginTop: "8px",
                  borderRadius: "8px",
                }}
              />
            )}

            <input
              type="text"
              placeholder="Mô tả"
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className="manager-product-input"
            />

            {/* Thêm các field tuỳ loại */}
            {renderAdditionalFields()}
          </div>
        </div>

        <div className="manager-product-form-buttons">
          <button
            className="manager-product-button"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isEditing
              ? "Cập nhật"
              : isSubmitting
              ? "Đang thêm..."
              : "Thêm mới"}
          </button>
          <button className="manager-product-button cancel" onClick={onCancel}>
            Huỷ
          </button>
        </div>
      </div>
    </div>
  );
}
