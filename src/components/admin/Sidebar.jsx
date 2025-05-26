import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav style={styles.sidebar}>
      <ul>
        <li>
          <Link to="/admin" style={styles.link}>
            👨‍💼 Trang quản trị
          </Link>
        </li>

        <li>
          <Link to="/admin/user" style={styles.link}>
            📝 Người dùng
          </Link>
        </li>
        <li>
          <Link to="/admin/products" style={styles.link}>
            ➕ Sản phẩm
          </Link>
        </li>

        <li>
          <Link to="/admin/orders" style={styles.link}>
            📦 Quản lý đơn hàng
          </Link>
        </li>
        <li>
          <Link to="/admin/statistics" style={styles.link}>
            📊 Thống kê
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  sidebar: {
    width: 200,
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#333",
    color: "#fff",
    paddingTop: "1rem",
    paddingLeft: "1rem",
    boxShadow: "2px 0px 5px rgba(0,0,0,0.2)",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    display: "block",
    margin: "1rem 0",
  },
};
