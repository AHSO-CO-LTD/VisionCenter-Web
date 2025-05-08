import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../../utils/api";
import "../../style/VerifyCodePage.css";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  if (!email) {
    toast.error("Thiếu email xác minh!");
    navigate("/forgot-password");
    return null;
  }

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!code) return toast.error("Vui lòng nhập mã");

    try {
      const res = await API.post("/auth/verify-reset-code", { email, code });
      toast.success("Mã hợp lệ! Vui lòng nhập mật khẩu mới.");
      navigate("/reset-password", { state: { email, code } });
    } catch (err) {
      toast.error(err.response?.data?.message || "Mã không hợp lệ!");
    }
  };

  const handleResendCode = async () => {
    try {
      await API.post("/auth/forgot-password", { email });
      toast.success("Mã mới đã được gửi đến email.");
    } catch (err) {
      toast.error("Không thể gửi lại mã.");
    }
  };

  return (
    <div className="forgot-container">
      <form onSubmit={handleVerify} className="forgot-form">
        <h2>Nhập mã xác thực</h2>
        <p>Chúng tôi đã gửi mã đến email: {email}</p>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Nhập mã xác thực"
        />
        <div className="verify-container-btn">
          <button type="button" onClick={handleResendCode}>
            Gửi lại mã
          </button>
          <button type="submit">Xác minh</button>
        </div>
        <p>
          Nhớ mật khẩu? <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
}
