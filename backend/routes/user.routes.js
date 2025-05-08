// const express = require("express");
// const router = express.Router();

// const {
//   getAllUser,
//   createUser,
//   updateUser,
//   deleteUser,
//   profield
// } = require("../controllers/user.controller");

// router.get("/", getAllUser);
// router.post("/", createUser);
// router.put("/:id", updateUser);
// router.delete("/:id", deleteUser);
// // Lấy thông tin người dùng
// router.get("/profield/:id", profield);

// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  profield,
} = require("../controllers/user.controller");

const upload = require("../middleware/upload"); // thêm dòng này

router.get("/", getAllUser);
router.post("/", createUser);
router.put("/:id", upload.single("avatar"), updateUser); // sửa tại đây
router.delete("/:id", deleteUser);
router.get("/profield/:id", profield);

module.exports = router;
