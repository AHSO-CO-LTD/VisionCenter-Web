// import { useState } from "react";
// import toast from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import PageWrapper from "../components/PageWrapper";
// import "../style/Register.css";
// import API from "../utils/api";

// export default function RegisterPage() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [emailReadyForRegister, setEmailReadyForRegister] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleCheckEmail = async () => {
//     if (!validateEmail(email)) {
//       toast.error("Email không hợp lệ!");
//       setEmailReadyForRegister(false);
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await API.post("/auth/check-email", { email });

//       if (res.data.exists) {
//         toast.success("Email đã tồn tại, bạn có thể dùng chức năng quên mật khẩu.");
//         setEmailReadyForRegister(false); // Email tồn tại → không cho đăng ký tiếp
//       } else {
//         toast.success("Email hợp lệ, tiếp tục đăng ký.");
//         setEmailReadyForRegister(true); // Email hợp lệ và chưa tồn tại
//       }
//     } catch (err) {
//       toast.error("Lỗi kiểm tra email!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!emailReadyForRegister) {
//       toast.error("Vui lòng kiểm tra email trước khi đăng ký!");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Mật khẩu xác nhận không khớp!");
//       return;
//     }

//     try {
//       await API.post("/auth/register", { username, email, password });
//       toast.success("Đăng ký thành công, vui lòng đăng nhập!");
//       navigate("/login");
//     } catch (error) {
//       toast.error("Lỗi khi đăng ký, vui lòng thử lại!");
//       console.error(error);
//     }
//   };

//   return (
//     <PageWrapper>
//       <div className="form-container">
//         <form onSubmit={handleRegister} className="form-register">
//           <div className="logo-container">
//             <img
//               src="/assets/logo/VISION CENTER LOGOMAIN LOGO - HORIZONTAL.png"
//               alt="Logo"
//               className="logo"
//             />
//           </div>
//           <h2>Đăng ký</h2>

//           {/* Giai đoạn 1: nhập email và username */}
//           {!emailReadyForRegister && (
//             <>
//               <input
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Tên đăng nhập"
//                 required
//               />
//               <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//                 <input
//                   value={email}
//                   type="email"
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                     setEmailReadyForRegister(false);
//                   }}
//                   placeholder="Email"
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={handleCheckEmail}
//                   disabled={loading}
//                 >
//                   {loading ? "Đang kiểm tra..." : "Tiếp tục"}
//                 </button>
//               </div>
//             </>
//           )}

//           {/* Giai đoạn 2: nhập mật khẩu */}
//           {emailReadyForRegister && (
//             <>
//               <input
//                 value={password}
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Mật khẩu"
//                 required
//               />
//               <input
//                 value={confirmPassword}
//                 type="password"
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 placeholder="Xác nhận mật khẩu"
//                 required
//               />
//               <button type="submit">Đăng ký</button>
//             </>
//           )}

//           <p>
//             Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
//           </p>
//         </form>
//       </div>
//     </PageWrapper>
//   );
// }
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import API from "../../utils/api";
import "../../style/Register.css";

// ... phần import giữ nguyên ...

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [emailReadyForRegister, setEmailReadyForRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Bước 1: Kiểm tra email đã tồn tại
  const handleCheckEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Email không hợp lệ!");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/auth/check-email", { email });
      if (res.data.exists) {
        toast.error("Email đã tồn tại!");
      } else {
        toast.success("Email hợp lệ, đang gửi mã xác minh...");
        const codeSent = await handleSendVerificationCode(); // Gửi mã xác minh
        if (codeSent) {
          setIsCodeSent(true);
          setEmailReadyForRegister(true);
        }
      }
    } catch (error) {
      toast.error("Lỗi kiểm tra email!");
    } finally {
      setLoading(false);
    }
  };

  // Bước 2: Gửi mã xác minh email
  const handleSendVerificationCode = async () => {
    try {
      const res = await API.post("/auth/send-verification-code", { email });
      toast.success("Mã xác thực đã được gửi!");
      return true;
    } catch (err) {
      toast.error("Không thể gửi mã xác thực!");
      return false;
    }
  };

  // Bước 3: Xác minh mã
  const handleVerifyCode = async () => {
    try {
      const res = await API.post("/auth/verify-email-code", {
        email,
        code: verificationCode,
      });

      if (res.data.valid) {
        // <- sửa chỗ này
        toast.success("Xác minh thành công!");
        setEmailVerified(true);
      } else {
        toast.error("Mã xác minh không chính xác!");
      }
    } catch (err) {
      toast.error("Lỗi khi xác minh mã!");
    }
  };

  // Bước 4: Đăng ký tài khoản
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      toast.error("Vui lòng xác minh email trước!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Mật khẩu không khớp!");
      return;
    }

    try {
      await API.post("/auth/register", { username, email, password });
      toast.success("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      toast.error("Lỗi khi đăng ký!");
    }
  };

  return (
    <PageWrapper>
      <div className="form-container">
        <form onSubmit={handleRegister} className="form-register">
          <div className="logo-container">
            <img
              src="/assets/logo/VISION CENTER LOGOMAIN LOGO - HORIZONTAL.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <h2>Đăng ký</h2>

          {/* Bước 1: nhập email + tên đăng nhập */}
          {!emailReadyForRegister && (
            <>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tên đăng nhập"
                required
              />
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
              <button
                type="button"
                onClick={handleCheckEmail}
                disabled={loading}
              >
                {loading ? "Đang xử lý..." : "Tiếp tục"}
              </button>
            </>
          )}

          {/* Bước 2: xác minh mã */}
          {emailReadyForRegister && !emailVerified && isCodeSent && (
            <>
              <input
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Nhập mã xác thực"
              />
              <button type="button" onClick={handleVerifyCode}>
                Xác minh
              </button>
            </>
          )}

          {/* Bước 3: nhập mật khẩu và xác nhận */}
          {emailVerified && (
            <>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
                required
              />
              <button type="submit">Đăng ký</button>
            </>
          )}

          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}
