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
import moment from "moment-timezone";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
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
import PageWrapper from "../components/PageWrapper";

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
        .then((res) => {
          const data = res.data;
          if (data.birthday) {
            // Chuyển đổi ngày sinh từ UTC sang múi giờ địa phương (Asia/Ho_Chi_Minh)
            data.birthday = moment
              .utc(data.birthday)
              .tz("Asia/Ho_Chi_Minh")
              .format("YYYY-MM-DD");
          }
          setFormData(data);
        })
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //   const handleAvatarUpload = (e) => {
  //     const file = e.target.files[0];
  //     console.log(file);
  //     if (file) {
  //       setAvatarFile(file);

  //       // Xem trước ảnh
  //       const reader = new FileReader();
  //       reader.onloadend = () => {
  //         setFormData((prev) => ({
  //           ...prev,
  //           avatar: reader.result,
  //         }));
  //       };
  //       console.log("File avartar sản phẩm: ", formData.avatar);
  //       reader.readAsDataURL(file);
  //     }
  //   };
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file); // giữ lại ảnh dạng file để upload

      // Xem trước ảnh (chỉ để hiển thị, không đưa vào dữ liệu gửi đi)
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          avatarPreview: reader.result, // chỉ để hiển thị
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const data = new FormData();
  //       Object.entries(formData).forEach(([key, value]) => {
  //         if (value !== null && value !== undefined) {
  //           // Xử lý ngày sinh khi gửi lên server
  //           if (key === "birthday") {
  //             const dateOnly = moment(value)
  //               .tz("Asia/Ho_Chi_Minh")
  //               .format("YYYY-MM-DD"); // Sử dụng moment-timezone
  //             data.append(key, dateOnly);
  //           } else {
  //             data.append(key, value);
  //           }
  //         }
  //       });

  //       await API.put(`/user/${user.id}`, data, {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       });
  //       toast.success("Cập nhật thành công.");
  //     } catch (error) {
  //       console.error(error);
  //       toast.error("Cập nhật thất bại!");
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();

      // Gửi các trường dữ liệu văn bản
      Object.entries(formData).forEach(([key, value]) => {
        if (
          key !== "avatarPreview" && // loại bỏ avatarPreview (dùng chỉ để preview ảnh)
          value !== null &&
          value !== undefined
        ) {
          const finalValue =
            key === "birthday"
              ? moment(value).tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD")
              : value;
          data.append(key, finalValue);
        }
      });

      // Thêm ảnh vào FormData nếu người dùng chọn
      if (avatarFile) {
        data.append("avatar", avatarFile);
      }

      await API.put(`/user/${user.id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Cập nhật thành công.");
    } catch (error) {
      console.error(error);
      toast.error("Cập nhật thất bại!");
    }
  };

  return (
    <PageWrapper>
      <div className="profile-wrapper">
        <div className="profile-card glass">
          <div className="left-column">
            {/* <img
              src={
                formData.avatar?.startsWith("data:")
                  ? formData.avatar
                  : `http://localhost:8000${formData.avatar}`
              }
              alt="Avatar"
              className="profile-avatar"
            /> */}
            <img
              src={
                formData.avatarPreview
                  ? formData.avatarPreview
                  : `http://localhost:8000${formData.avatar}`
              }
              alt="Avatar"
              className="profile-avatar"
            />

            <div className="form-group">
              <label style={{ color: "white", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faCamera} /> Chọn ảnh từ thiết bị
              </label>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarUpload}
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
    </PageWrapper>
  );
}
