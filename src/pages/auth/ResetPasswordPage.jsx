import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../utils/api";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { email, code } = location.state || {};

  if (!email || !code) {
    toast.error("Thiếu thông tin xác thực!");
    navigate("/forgot-password");
    return null;
  }

  const handleReset = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }
    if (password.length < 6)
      return toast.error("Mật khẩu phải từ 6 ký tự trở lên");

    try {
      await API.post("/auth/reset-password", {
        email,
        code,
        newPassword: password,
      });
      toast.success("Đổi mật khẩu thành công!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Đổi mật khẩu thất bại!");
    }
  };

  return (
    <div className="forgot-container">
      <form onSubmit={handleReset} className="forgot-form">
        <h2>Tạo mật khẩu mới</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu mới"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Xác nhận mật khẩu"
          required
        />
        <button type="submit">Đổi mật khẩu</button>
      </form>
    </div>
  );
}
