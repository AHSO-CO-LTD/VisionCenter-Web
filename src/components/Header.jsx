import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="glass-header">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="header-left">
          <Link to="/" className="brand">
            <img src="/logo192.png" alt="logo" className="logo-icon" />
            <span>Vision Center</span>
          </Link>
        </div>

        {/* Center: Main navigation */}
        <div className="header-center">
          <Link to="/products" className="nav-item">
            Sản phẩm
          </Link>
          <Link to="/solutions" className="nav-item">
            Giải pháp
          </Link>
          <Link to="/support" className="nav-item">
            Hỗ trợ
          </Link>
          <Link to="/contact" className="nav-item">
            Liên hệ
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="header-right">
          <Link to="/search" className="nav-icon">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/cart" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>

          {user ? (
            <div className="user-area">
              <div
                className="user-icon-wrapper"
                onClick={() => setShowMenu(!showMenu)}
              >
                <i className="fas fa-user-circle"></i>
              </div>
              {showMenu && (
                <div className="user-dropdown">
                  <div className="dropdown-header">👋 Xin chào</div>
                  <div className="dropdown-email">{user.email}</div>
                  <Link to="/profield" className="dropdown-link">
                    <i className="fas fa-user-cog"></i> Thông tin cá nhân
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="dropdown-link logout"
                  >
                    <i className="fas fa-sign-out-alt"></i> Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="nav-icon">
              <i className="fas fa-sign-in-alt"></i>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
