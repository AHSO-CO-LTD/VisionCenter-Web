import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/AppRoutes"; // 👈 file mới chứa tất cả Routes
import { CartProvider } from "./context/CartContext";
import "./style/App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Toaster position="top-right" />
        <AppRoutes />
      </Router>
    </CartProvider>
  );
}

export default App;
