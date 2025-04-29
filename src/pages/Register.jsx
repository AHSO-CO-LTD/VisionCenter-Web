import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api";

export default function Register() {
  const [username, setUsername] = useState(""); // đổi tên biến từ name → username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    API.post("/auth/register", { username, email, password }) // chú ý đường dẫn: /auth/register
      .then(() => {
        alert("Đăng ký thành công! Bạn có thể đăng nhập.");
        navigate("/login");
      })
      .catch((err) => {
        alert("Đăng ký thất bại.");
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Đăng ký</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Tên đăng nhập"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Mật khẩu"
        type="password"
        required
      />
      <button type="submit">Đăng ký</button>
    </form>
  );
}
