import { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import API from "../../utils/api";

export default function ManagerUser() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    API.get("/user")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  };
  
  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá người dùng này?")) {
      API.delete(`/user/${id}`)
        .then(() => fetchUsers())
        .catch((err) => console.error(err));
    }
  };
  const handleAddUser = () => {
    if (
      !newUser.username ||
      !newUser.email ||
      !newUser.password ||
      !newUser.role
    ) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    API.post("/user", newUser).then(() => {
      fetchUsers();
      setNewUser({ username: "", email: "", password: "", role: "user" });
    });
  };

  const handleEditUser = (users) => {
    setEditingUser(users);
    setNewUser({ ...users });
  };
  const handleUpdateUser = () => {
    if (
      !newUser.username ||
      !newUser.email ||
      !newUser.password ||
      !newUser.role
    ) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    API.put(`/user/${newUser.id}`, newUser).then(() => {
      fetchUsers();
      setEditingUser(null);
      setNewUser({ username: "", email: "", password: "", role: "" });
    });
  };

  return (
    <PageWrapper>
      <div style={styles.container}>
        <h2 style={styles.title}>👥 Danh sách người dùng</h2>
        {/* Form Thêm/ Sửa sản phẩm */}
        <div>
          <h3> {editingUser ? "Sửa người dùng" : "Thêm người dùng mới"}</h3>
          <input
            type="text"
            placeholder="Tên người dùng"
            value={newUser.username}
            onChange={(e) =>
              setNewUser({ ...newUser, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Mật khẩu"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button
            style={styles.addButton}
            onClick={editingUser ? handleUpdateUser : handleAddUser}
          >
            {editingUser ? "Cập nhật người dùng" : "Thêm người dùng"}
          </button>
        </div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{new Date(u.created_at).toLocaleDateString("vi-VN")}</td>
                <td>
                  <button onClick={() => handleDelete(u.id)}>🗑️ Xoá</button>
                  <button
                    style={{ marginLeft: 10 }}
                    onClick={() => handleEditUser(u)}
                  >
                    ✏️ Sửa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageWrapper>
  );
}

const styles = {
  container: {
    padding: "24px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  formContainer: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "10px 0",
  },
};
