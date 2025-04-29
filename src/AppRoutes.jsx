import { Route, Routes, useLocation } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerProduct from "./pages/admin/ManagerProduct";
import ManagerUser from "./pages/admin/ManagerUser";
import Cameras from "./pages/products/Cameras";
import Hardwares from "./pages/products/Hardwares";
import ProductDetail from "./pages/products/ProductDetail";
import Softwares from "./pages/products/Softwares";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/products/ProductCategory";
import Register from "./pages/Register";

function AppRoutes() {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);
  const isAdminPage = location.pathname.startsWith("/admin");

  // Trang login/register không có layout
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  // Layout admin riêng biệt
  if (isAdminPage) {
    return (
      <AdminLayout>
        <Routes>
          <Route path="/admin" element={<AdminDashboard />} />

          <Route path="/admin/products" element={<ManagerProduct />}></Route>
          <Route path="/admin/user" element={<ManagerUser />}></Route>
        </Routes>
      </AdminLayout>
    );
  }

  // Layout người dùng mặc định
  return (
    <UserLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Danh mục sản phẩm */}
        <Route path="/product/cameras" element={<Cameras />}></Route>
        <Route path="/product/hardwares" element={<Hardwares />}></Route>
        <Route path="/product/softwares" element={<Softwares />}></Route>
        {/* Route cho chi tiết sản phẩm */}
        <Route path="/product/:type/:id" element={<ProductDetail />} />
      </Routes>
    </UserLayout>
  );
}

export default AppRoutes;
