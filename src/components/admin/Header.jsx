import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const {  logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <header style={styles.header}>
      <h1>🛠️ Trang quản trị</h1>

      <button style={styles.logoutButton} onClick={handleLogout}>
        Đăng xuất
      </button>
    </header>
  );
}

const styles = {
  header: {
    padding: "1rem 2rem",
    backgroundColor: "#eee",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoutButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  },
};
