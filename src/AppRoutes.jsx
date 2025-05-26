import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import UserLayout from "./layouts/UserLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManagerProduct from "./pages/admin/ManagerProduct";
import ManagerUser from "./pages/admin/ManagerUser";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import VerifyCodePage from "./pages/auth/VerifyCodePage";
import Contact from "./pages/Contact";
import Cameras from "./pages/products/Cameras";
import Hardwares from "./pages/products/Hardwares";
import ProductDetail from "./pages/products/ProductDetail";
import Softwares from "./pages/products/Softwares";
import Solutions from "./pages/Solutions";
import Support from "./pages/Support";
import OrderInfor from "./pages/OrderInfor";

import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import ProductList from "./pages/products/ProductCategory";
import Profield from "./pages/Profield";



function AppRoutes() {
  // Cuộng về đầu trang
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const location = useLocation();
  const isAuthPage = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-code",
    "/reset-password",
  ].includes(location.pathname);
  const isAdminPage = location.pathname.startsWith("/admin");

  // Trang login/register không có layout
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Verify code */}
        <Route path="/verify-code" element={<VerifyCodePage />}></Route>
        {/* Reset password */}
        <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
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
        <Route path="/categorys" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Thông tin các nhân */}
        <Route path="/profield" element={<Profield />}></Route>
        {/* Danh mục sản phẩm */}
        <Route path="/product/cameras" element={<Cameras />}></Route>
        <Route path="/product/hardwares" element={<Hardwares />}></Route>
        <Route path="/product/softwares" element={<Softwares />}></Route>
        {/* Route cho chi tiết sản phẩm */}
        <Route path="/product/:type/:id" element={<ProductDetail />} />
        {/* giải pháp */}
        <Route path="/solutions" element={<Solutions />}></Route>
        {/* Hỗ trợ */}
        <Route path="/support" element={<Support />}></Route>
        {/* Liên hệ */}
        <Route path="/contact" element={<Contact />}></Route>
        {/* Thông tin đơn hàng */}
        <Route path="/order/:orderId/info" element={<OrderInfor/>}></Route>
      </Routes>
    </UserLayout>
  );
  
}

export default AppRoutes;
