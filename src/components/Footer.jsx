/* src/components/Footer.js */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "../style/Footer.css";
import { color } from "framer-motion";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section footer-about">
          <div className="footer-logo">
            <img
              src="/assets/logo/VISION CENTER LOGOMAIN LOGO - HORIZONTAL.png"
              alt=""
            />
          </div>
          <p>
            Vision Center cung cấp giải pháp thị giác máy móc tiên tiến, tích
            hợp công nghệ Basler để mang lại hiệu suất tối ưu cho doanh nghiệp.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h4>Liên kết nhanh</h4>
          <ul>
            <li>
              <a href="/">Trang chủ</a>
            </li>
            <li>
              <a href="/categorys">Sản phẩm</a>
            </li>
            <li>
              <a href="/solutions">Giải pháp</a>
            </li>
            <li>
              <a href="#">Tải xuống</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section footer-support">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>
              <a href="#">Tài liệu</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="/support">Liên hệ hỗ trợ</a>
            </li>
            <li>
              <a href="#">Điều khoản dịch vụ</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="footer-section footer-contact">
          <h4>Liên hệ</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@myshop.vn" style={{ color: "white" }}>
              support@myshop.vn
            </a>
          </p>
          <p>Địa chỉ: 123 Đường Công Nghệ, Quận 1, TP. HCM</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Vision Center. All rights reserved.</p>
      </div>
    </footer>
  );
}
