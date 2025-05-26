import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/Header.css";

export default function Header() {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const location = useLocation(); // 👈 Lấy pathname hiện tại

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="glass-header">
      <div className="header-container">
        {/* Left: Logo */}
        <div className="header-left">
          <Link to="/" className="brand">
            <img
              src="/assets/logo/VISION CENTER LOGOMAIN LOGO - HORIZONTAL.png"
              alt="logo"
              className="logo-icon"
            />
          </Link>
        </div>

        {/* Center: Main navigation */}
        <div className="header-center">
          <Link
            to="/categorys"
            className={`nav-item ${
              location.pathname === "/categorys" ? "active" : ""
            }`}
          >
            Sản phẩm
          </Link>
          <Link
            to="/solutions"
            className={`nav-item ${
              location.pathname === "/solutions" ? "active" : ""
            }`}
          >
            Giải pháp
          </Link>
          <Link
            to="/support"
            className={`nav-item ${
              location.pathname === "/support" ? "active" : ""
            }`}
          >
            Hỗ trợ
          </Link>
          <Link
            to="/contact"
            className={`nav-item ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Liên hệ
          </Link>
        </div>

        {/* Right: Icons */}
        <div className="header-right">
          <div className="search-area" ref={searchRef}>
            <i className="fas fa-search nav-icon" onClick={toggleSearch}></i>
            <div className={`search-box ${showSearch ? "open" : ""}`}>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button onClick={() => console.log("Tìm kiếm:", searchQuery)}>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <Link to="/cart" className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
          </Link>

          {user ? (
            <div
              className={`user-area ${showMenu ? "active" : ""}`}
              onClick={() => setShowMenu(!showMenu)}
            >
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
