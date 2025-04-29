// const express = require('express');
// const router = express.Router();
// const {
//   getAllProducts,
//   createProduct,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/product.controller');

// router.get('/', getAllProducts);
// router.post('/', createProduct);
// router.put('/:id', updateProduct);
// router.delete('/:id', deleteProduct);

// module.exports = router;
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
} = require("../controllers/product.controller");


// Lấy tất cả sản phẩm
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
router.put("/:id", updateProduct);

// Xóa sản phẩm
router.delete("/:id", deleteProduct);

module.exports = router;
