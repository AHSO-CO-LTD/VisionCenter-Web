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
import PageWrapper from "../components/PageWrapper";
import "../style/Register.css";
import API from "../utils/api";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [emailReadyForRegister, setEmailReadyForRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false); // Trạng thái kiểm tra xem mã xác thực đã được gửi hay chưa

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCheckEmail = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error("Email không hợp lệ!");
      return;
    }

    setLoading(true);
    try {
      const res = await API.post("/auth/check-email", { email });
      toast.success("Đã gửi mã khôi phục! Vui lòng kiểm tra email.");
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
      setLoading(false);
    }
  };

  const handleSendVerificationCode = async () => {
    setLoading(true);
    try {
      const res = await API.post("/auth/send-verification-code", { email });
      toast.success("Mã xác thực đã được gửi về email!");
      return true; // Trả về true nếu gửi thành công
    } catch (err) {
      toast.error("Không thể gửi mã xác minh!");
      return false; // Trả về false nếu gửi thất bại
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const res = await API.post("/auth/verify-code", {
        email,
        code: verificationCode,
      });
      if (res.data.success) {
        toast.success("Email đã được xác thực!");
        setEmailVerified(true);
        setEmailReadyForRegister(true);
      } else {
        toast.error("Mã xác thực không đúng!");
      }
    } catch (err) {
      toast.error("Lỗi khi xác minh mã!");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!emailReadyForRegister) {
      toast.error("Vui lòng kiểm tra email trước khi đăng ký!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      await API.post("/auth/register", { username, email, password });
      toast.success("Đăng ký thành công, vui lòng đăng nhập!");
      navigate("/login");
    } catch (error) {
      toast.error("Lỗi khi đăng ký, vui lòng thử lại!");
      console.error(error);
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

          {/* Giai đoạn 1: nhập email và username */}
          {!emailReadyForRegister && (
            <>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tên đăng nhập"
                required
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <input
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailReadyForRegister(false);
                  }}
                  placeholder="Email"
                  required
                />
                <button
                  type="button"
                  onClick={handleCheckEmail}
                  disabled={loading}
                >
                  {loading ? "Đang kiểm tra..." : "Tiếp tục"}
                </button>
              </div>
            </>
          )}

          {/* Giai đoạn 2: nhập mã xác thực */}
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

          {/* Giai đoạn 3: nhập mật khẩu */}
          {emailVerified && (
            <>
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mật khẩu"
                required
              />
              <input
                value={confirmPassword}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Xác nhận mật khẩu"
                required
              />
              <button type="submit">Đăng ký</button>
            </>
          )}

          <p>
            Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}
