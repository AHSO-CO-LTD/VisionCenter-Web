const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllCameras,
  getAllHardwares,
  getAllSoftwares,
  getCameraById,
  getHardwareById,
  getSoftwareById,
  getHighlightedProducts, // thêm dòng này
} = require("../controllers/product.controller");
const upload = require("../middleware/upload");

// Tất cả sản phẩm
router.get("/", getAllProducts);

// Cameras
router.get("/cameras", getAllCameras);
router.get("/camera/:id", getCameraById);

// Hardwares
router.get("/hardwares", getAllHardwares);
router.get("/hardware/:id", getHardwareById);

// Softwares
router.get("/softwares", getAllSoftwares);
router.get("/software/:id", getSoftwareById);

// Thêm sản phẩm mới
router.post("/", createProduct);

// Cập nhật sản phẩm
router.put("/:id", upload.single("avatar"), updateProduct);

// Xóa sản phẩm
router.delete("/:id/:type", deleteProduct);

// Sản phẩm nổi bật
router.get("/highlighted", getHighlightedProducts);

module.exports = router;
