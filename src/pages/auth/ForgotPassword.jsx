import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import API from "../../utils/api";
import "../../style/ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error("Email không hợp lệ!");
      return;
    }

    setIsSending(true);

    try {
      const res = await API.post("/auth/forgot-password", { email });
      toast.success("Đã gửi mã khôi phục! Vui lòng kiểm tra email.");
      navigate("/verify-code", { state: { email } });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Lỗi khi gửi yêu cầu. Vui lòng thử lại!");
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageWrapper>
      <div className="forgot-container">
        <form onSubmit={handleSubmit} className="forgot-form">
          <h2>Quên mật khẩu</h2>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            required
          />
          <button type="submit" disabled={isSending}>
            {isSending ? "Đang gửi..." : "Gửi yêu cầu"}
          </button>
          <p>
            Nhớ mật khẩu? <Link to="/login">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}
