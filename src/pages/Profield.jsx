// import { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import API from "../utils/api";
// import "../style/Profield.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faUser,
//   faPhone,
//   faMapMarkerAlt,
//   faBirthdayCake,
//   faVenusMars,
//   faCamera,
//   faSave,
// } from "@fortawesome/free-solid-svg-icons";

// export default function Profield() {
//   const { user } = useAuth();
//   const [formData, setFormData] = useState({
//     username: "",
//     full_name: "",
//     phone: "",
//     address: "",
//     birthday: "",
//     gender: "",
//     avatar: "",
//   });

//   // Sử dụng useEffect để gọi API khi component mount
//   useEffect(() => {
//     if (user) {
//       // Lấy dữ liệu người dùng từ server
//       API.get(`/user/profield/${user.id}`)
//         .then((res) => setFormData(res.data))
//         .catch((err) => console.error(err));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.put(`/user/${user.id}`, formData);
//       alert("✅ Cập nhật thành công!");
//     } catch (error) {
//       console.error(error);
//       alert("❌ Cập nhật thất bại!");
//     }
//   };

//   return (
//     <div className="profile-wrapper">
//       <div className="profile-card glass">
//         <div className="left-column">
//           <img src={formData.avatar} alt="Avatar" className="profile-avatar" />
//           <div className="form-group">
//             <label>
//               <FontAwesomeIcon icon={faCamera} /> Link Avatar
//             </label>
//             <input
//               type="text"
//               name="avatar"
//               value={formData.avatar}
//               onChange={handleChange}
//               className="avatar-input"
//             />
//           </div>
//         </div>

//         <form className="right-column" onSubmit={handleSubmit}>
//           <h2>Thông tin cá nhân</h2>
//           <div className="form-grid">
//             <div className="form-group">
//               <label>
//                 <FontAwesomeIcon icon={faUser} /> Tên đăng nhập
//               </label>
//               <input
//                 type="text"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 disabled
//               />
//             </div>

//             <div className="form-group">
//               <label>
//                 <FontAwesomeIcon icon={faUser} /> Họ tên
//               </label>
//               <input
//                 type="text"
//                 name="full_name"
//                 value={formData.full_name}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>
//                 <FontAwesomeIcon icon={faBirthdayCake} /> Ngày sinh
//               </label>
//               <input
//                 type="date"
//                 name="birthday"
//                 value={formData.birthday}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>
//                 <FontAwesomeIcon icon={faPhone} /> Điện thoại
//               </label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>
//                 <FontAwesomeIcon icon={faVenusMars} /> Giới tính
//               </label>
//               <select
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option value="">-- Chọn --</option>
//                 <option value="male">Nam</option>
//                 <option value="female">Nữ</option>
//                 <option value="other">Khác</option>
//               </select>
//             </div>

//             <div className="form-group full-width">
//               <label>
//                 <FontAwesomeIcon icon={faMapMarkerAlt} /> Địa chỉ
//               </label>
//               <textarea
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 rows={3}
//               />
//             </div>
//           </div>

//           <button type="submit" className="btn-save">
//             <FontAwesomeIcon icon={faSave} style={{ marginRight: "8px" }} />
//             Cập nhật
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../style/Profield.css";
import API from "../utils/api";

import {
  faBirthdayCake,
  faCamera,
  faMapMarkerAlt,
  faPhone,
  faSave,
  faUser,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profield() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    full_name: "",
    phone: "",
    address: "",
    birthday: "",
    gender: "",
    avatar: "", // dùng để preview ảnh
  });

  const [avatarFile, setAvatarFile] = useState(null); // dùng để upload ảnh

  // Gọi API khi component mount
  useEffect(() => {
    if (user) {
      API.get(`/user/profield/${user.id}`)
        .then((res) => setFormData(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);

      // Xem trước ảnh
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) data.append(key, value);
      });

      await API.put(`/user/${user.id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Cập nhật thành công!");
    } catch (error) {
      console.error(error);
      alert("❌ Cập nhật thất bại!");
    }
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card glass">
        <div className="left-column">
          <img
            src={`http://localhost:8000/api${formData.avatar}`}
            alt="Avatar"
            className="profile-avatar"
          />
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faCamera} /> Chọn ảnh từ thiết bị
            </label>
            <input
              type="file"
              name="avatar"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, avatar: e.target.files[0] }))
              }
              accept="image/*"
            />
          </div>
        </div>

        <form className="right-column" onSubmit={handleSubmit}>
          <h2>Thông tin cá nhân</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faUser} /> Tên đăng nhập
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                disabled
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faUser} /> Họ tên
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faBirthdayCake} /> Ngày sinh
              </label>
              <input
                type="date"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faPhone} /> Điện thoại
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>
                <FontAwesomeIcon icon={faVenusMars} /> Giới tính
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">-- Chọn --</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Địa chỉ
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
              />
            </div>
          </div>

          <button type="submit" className="btn-save">
            <FontAwesomeIcon icon={faSave} style={{ marginRight: "8px" }} />
            Cập nhật
          </button>
        </form>
      </div>
    </div>
  );
}
