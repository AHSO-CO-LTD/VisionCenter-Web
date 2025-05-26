import {
  faBirthdayCake,
  faCheckCircle,
  faEdit,
  faEnvelope,
  faIdCard,
  faImage,
  faLock,
  faMapMarkerAlt,
  faPhone,
  faPlusCircle,
  faTrash,
  faUser,
  faUserShield,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "../../style/ManagerUser.css";
import API from "../../utils/api";

const ManagerUser = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    full_name: "",
    birthday: "",
    phone: "",
    gender: "male",
    address: "",
    avatar: "",
    role: "user",
    status: "active",
  });
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    API.get("/user").then((res) => {
      setUsers(Array.isArray(res.data) ? res.data : []);
    });
  };

  const handleAddUser = () => {
    const {
      username,
      email,
      password,
      full_name,
      birthday,
      phone,
      gender,
      address,
      avatar,
      role,
      status,
    } = newUser;

    if (
      !username ||
      !email ||
      !password ||
      !full_name ||
      !birthday ||
      !phone ||
      !gender ||
      !address ||
      !avatar ||
      !status ||
      !role
    ) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc.");
      return;
    }

    const apiCall = editingUser
      ? API.put(`/user/${editingUser.id}`, newUser)
      : API.post("/user", newUser);

    apiCall.then(() => {
      fetchUsers();
      resetForm();
      setShowForm(false);
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa người dùng này?")) {
      API.delete(`/user/${id}`).then(() => fetchUsers());
    }
  };

  const handleEditUser = (user) => {
    setNewUser(user);
    setEditingUser(user);
    setShowForm(true);
  };

  const resetForm = () => {
    setNewUser({
      username: "",
      email: "",
      password: "",
      full_name: "",
      birthday: "",
      phone: "",
      gender: "male",
      address: "",
      avatar: "",
      role: "user",
      status: "active",
    });
    setEditingUser(null);
  };

  return (
    <div className="manager-container">
      <h2>QUẢN LÝ NGƯỜI DÙNG</h2>

      {!showForm && (
        <button
          className="add-btn"
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} style={{ marginRight: 8 }} />
          Thêm người dùng
        </button>
      )}

      {showForm && (
        <div className="user-form">
          <h3>{editingUser ? "Sửa người dùng" : "Thêm người dùng"}</h3>

          <div className="input-group">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input
              type="text"
              placeholder="Tên người dùng"
              value={newUser.username}
              onChange={(e) =>
                setNewUser({ ...newUser, username: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="icon" />
            <input
              type="password"
              placeholder="Mật khẩu"
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faIdCard} className="icon" />
            <input
              type="text"
              placeholder="Họ và tên"
              value={newUser.full_name}
              onChange={(e) =>
                setNewUser({ ...newUser, full_name: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faBirthdayCake} className="icon" />
            <input
              type="date"
              value={newUser.birthday}
              onChange={(e) =>
                setNewUser({ ...newUser, birthday: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={newUser.phone}
              onChange={(e) =>
                setNewUser({ ...newUser, phone: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faVenusMars} className="icon" />
            <select
              value={newUser.gender}
              onChange={(e) =>
                setNewUser({ ...newUser, gender: e.target.value })
              }
            >
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="other">Khác</option>
            </select>
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <input
              type="text"
              placeholder="Địa chỉ"
              value={newUser.address}
              onChange={(e) =>
                setNewUser({ ...newUser, address: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faImage} className="icon" />
            <input
              type="text"
              placeholder="Link ảnh đại diện"
              value={newUser.avatar}
              onChange={(e) =>
                setNewUser({ ...newUser, avatar: e.target.value })
              }
            />
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faUserShield} className="icon" />
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="user">Người dùng</option>
              <option value="admin">Quản trị viên</option>
            </select>
          </div>

          <div className="input-group">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <select
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
            >
              <option value="active">Hoạt động</option>
              <option value="inactive">Vô hiệu</option>
            </select>
          </div>

          <div className="form-actions">
            <button onClick={handleAddUser}>
              <FontAwesomeIcon
                icon={faPlusCircle}
                style={{ marginRight: "8px" }}
              />
              {editingUser ? "Cập nhật" : "Lưu người dùng"}
            </button>
            <button
              onClick={() => {
                resetForm();
                setShowForm(false);
              }}
            >
              Hủy
            </button>
          </div>
        </div>
      )}

      <table className="user-table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Giới tính</th>
            <th>Trạng thái</th>
            <th>Vai trò</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <img
                  src={u.avatar || "https://via.placeholder.com/40"}
                  alt="avatar"
                  width="40"
                  height="40"
                />
              </td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.gender}</td>
              <td>{u.status}</td>
              <td>{u.role}</td>
              <td>
                <button onClick={() => handleEditUser(u)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button onClick={() => handleDelete(u.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerUser;
