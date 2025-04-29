import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

export default function AdminLayout({ children }) {
  return (
    <div style={styles.layout}>
      <Sidebar />
      <div style={styles.content}>
        <Header />
        <div style={styles.mainContent}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
  },
  content: {
    marginLeft: 250, // Bên trái cho sidebar
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mainContent: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    flex: 1,
  },
};
