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
  },
  content: {
    marginLeft: 200, // Bên trái cho sidebar
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mainContent: {
    backgroundColor: "#f9f9f9",
    margin: "0",
    padding: "0",
    flex: 1,
  },
};
