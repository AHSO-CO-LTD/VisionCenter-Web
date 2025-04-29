const db = require("../config/db");

exports.getAll = () => db.query("SELECT * FROM products");

// Cameras
exports.getAllCameras = () => db.query("SELECT * FROM cameras");
exports.getCameraById = (id) =>
  db.query("SELECT * FROM cameras WHERE id = ?", [id]);

// Hardwares
exports.getAllHardwares = () => db.query("SELECT * FROM hardwares");
exports.getHardwareById = (id) =>
  db.query("SELECT * FROM hardwares WHERE id = ?", [id]);

// Softwares
exports.getAllSoftwares = () => db.query("SELECT * FROM softwares");
exports.getSoftwareById = (id) =>
  db.query("SELECT * FROM softwares WHERE id = ?", [id]);

exports.create = ({ name, price, image, category }) =>
  db.query(
    "INSERT INTO products (name, price, image, category) VALUES (?,?,?,?)",
    [name, price, image, category]
  );

exports.update = (id, { name, price, image, category }) =>
  db.query(
    "UPDATE products SET name=?, price=?, image=?, category=? WHERE id=?",
    [name, price, image, category, id]
  );

exports.remove = (id) => db.query("DELETE FROM products WHERE id=?", [id]);
