import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { useAuth } from "../../context/AuthContext";
import API from "../../utils/api";
import "../../style/Login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      const user = res.data.user;

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(user));

      login(user);
      toast.success("Đăng nhập thành công!");

      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error("Sai tài khoản hoặc mật khẩu");
      console.error(error);
    }
  };

  return (
    <PageWrapper>
      <div className="login-container">
        <div className="login-box">
          <div className="logo-container">
            <img
              src="/assets/logo/VISION CENTER LOGOMAIN LOGO - HORIZONTAL.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <h2>Đăng nhập</h2>
          <form onSubmit={handleLogin} className="login-form">
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="login-input"
              required
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              className="login-input"
              required
            />
            <div className="login-bottom-links">
              <Link to="/register" className="login-link">
                Chưa có tài khoản? Đăng ký ngay
              </Link>
            </div>
            <div className="login-actions">
              <Link to="/forgot-password" className="forgot-password-btn">
                Quên mật khẩu?
              </Link>
              <button type="submit" className="login-btn">
                Đăng nhập
              </button>
            </div>

            <Link to="/" className="home-link">
              Trang chủ
            </Link>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
