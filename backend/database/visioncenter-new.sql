-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 19, 2025 lúc 05:02 PM
-- Phiên bản máy phục vụ: 9.2.0
-- Phiên bản PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `visioncenter`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cameras`
--

CREATE TABLE `cameras` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `series` varchar(100) DEFAULT NULL,
  `sensor_type` varchar(50) DEFAULT NULL,
  `resolution` varchar(50) DEFAULT NULL,
  `fps` int DEFAULT NULL,
  `sensor_width` int DEFAULT NULL,
  `sensor_height` int DEFAULT NULL,
  `interface` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `manufacturer` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `avatar_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cameras`
--

INSERT INTO `cameras` (`id`, `name`, `model`, `series`, `sensor_type`, `resolution`, `fps`, `sensor_width`, `sensor_height`, `interface`, `price`, `description`, `manufacturer`, `avatar`, `avatar_2`, `type`, `created_at`, `product_id`) VALUES
(1, 'Basler acA2440-35um ', '1', '1', '1', 's', 1, 1, 1, '1', 1000.00, 'Camera with high resolution', '1', '/uploads/avatar-1747664864970-563464341.webp', 'camera1_2.jpg', 'Camera', '2025-05-11 15:32:29', 1),
(2, 'Basler a2A1920-160umPROSSSS', 'a2A1920-160umPRO', 'Basler Series', 'CMOS', '1920x1080', 160, 1920, 1080, 'USB3', 1200.00, 'Professional camera for industrial use', 'Basler', '/uploads/avatar-1747664872116-355205790.webp', 'camera2_2.jpg', 'Camera', '2025-05-11 15:32:29', 2),
(3, 'Rasler boost baA4096-72cc', 'baA4096-72cc', 'Rasler Series', 'CMOS', '4096x4096', 72, 4096, 4096, 'Camera Link', 1500.00, 'High performance camera for research', 'Rasler', '/uploads/avatar-1747664880058-577741426.webp', 'camera3_2.jpg', 'Camera', '2025-05-11 15:32:29', 3),
(4, 'Jasler pilot piA2400-17gm', 'piA2400-17gm', 'Jasler Series', 'CCD', '2400x1800', 17, 2400, 1800, 'Ethernet', 800.00, 'Affordable camera for low light conditions', 'Jasler', '/uploads/avatar-1747664895944-186456072.webp', 'camera4_2.jpg', 'Camera', '2025-05-11 15:32:29', 4),
(5, 'Basler ace acA640-750um', 'acA640-750um', 'Basler Series', 'CMOS', '640x480', 750, 640, 480, 'USB3', 900.00, 'Camera for general purposes', 'Basler', '/uploads/avatar-1747664904883-437814092.webp', 'camera5_2.jpg', 'Camera', '2025-05-11 15:32:29', 5),
(6, 'Basler MED ace aMEDacA1920-50um', 'aMEDacA1920-50um', 'Basler Series', 'CMOS', '1920x1080', 50, 1920, 1080, 'USB3', 1100.00, 'Medical-grade camera for high precision', 'Basler', '/uploads/avatar-1747664914799-663226242.webp', 'camera6_2.jpg', 'Camera', '2025-05-11 15:35:06', 6),
(7, 'Basler ace 2 a2A5328-15ucBAS', 'a2A5328-15ucBAS', 'Basler Series', 'CMOS', '5328x4320', 15, 5328, 4320, 'GigE', 1600.00, 'Ultra high resolution camera', 'Basler', '/uploads/avatar-1747664923012-869058493.webp', 'camera7_2.jpg', 'Camera', '2025-05-11 15:35:06', 7),
(8, 'Basler racer raL4096-8gm', 'raL4096-8gm', 'Basler Series', 'CMOS', '4096x4096', 8, 4096, 4096, 'Camera Link', 1300.00, 'High-speed camera for motion analysis', 'Basler', '/uploads/avatar-1747664931318-304634837.webp', 'camera8_2.jpg', 'Camera', '2025-05-11 15:35:06', 8),
(9, 'Basler boost baA3072-72cc', 'baA3072-72cc', 'Basler Series', 'CMOS', '3072x2048', 72, 3072, 2048, 'USB3', 1200.00, 'High-speed camera for industrial use', 'Basler', '/uploads/avatar-1747664940805-570864559.webp', 'camera9_2.jpg', 'Camera', '2025-05-11 15:35:06', 9),
(10, 'Basler ace acA720-520uc', 'acA720-520uc', 'Basler Series', 'CMOS', '720x480', 520, 720, 480, 'USB3', 800.00, 'Camera for basic applications', 'Basler', '/uploads/avatar-1747664951476-929939889.webp', 'camera10_2.jpg', 'Camera', '2025-05-11 15:35:06', 10);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_type` varchar(50) NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `name` varchar(255) DEFAULT NULL,
  `avartar` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `product_type`, `quantity`, `name`, `avartar`, `price`) VALUES
(112, 7, 6, 'Camera', 1, 'Basler MED ace aMEDacA1920-50um', NULL, 1100);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `email_verifications`
--

CREATE TABLE `email_verifications` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT (now())
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `hardwares`
--

CREATE TABLE `hardwares` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `manufacturer` varchar(255) DEFAULT NULL,
  `warranty` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `hardwares`
--

INSERT INTO `hardwares` (`id`, `name`, `model`, `price`, `description`, `manufacturer`, `warranty`, `avatar`, `type`, `created_at`, `product_id`) VALUES
(1, 'Dell XPS 15 Laptop', 'XPS15-2022', 2000.00, 'Laptop with high processing power', 'Dell', '2 years', 'laptop1.jpg', 'Hardware', '2025-05-11 15:34:56', 11),
(3, 'Logitech MX Master 35', 'MXM35', 100.00, 'Wireless mouse for productivity', 'Logitech', '1 year', 'mouse1.jpg', 'Hardware', '2025-05-11 15:34:56', 13),
(4, 'Corsair Vengeance RAM 32GB', 'CORS-VEN32GB', 150.00, '32GB DDR4 RAM for high performance', 'Corsair', '2 years', 'ram1.jpg', 'Hardware', '2025-05-11 15:34:56', 14);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `create_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(50) DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_info`
--

CREATE TABLE `order_info` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `note` text,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_type` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_type`, `name`, `avatar`, `quantity`, `price`) VALUES
(1, 25, 2, 'Software', 'Adobe Photoshop 2024', 'photoshop2024.jpg', 1, 300.00),
(2, 26, 6, 'Camera', 'Basler MED ace aMEDacA1920-50um', 'camera6.jpg', 3, 1100.00),
(3, 27, 10, 'Camera', 'Basler ace acA720-520uc', 'camera10.jpg', 1, 800.00);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_reset_codes`
--

CREATE TABLE `password_reset_codes` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `expires_at` datetime NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `product_type` enum('camera','hardware','software') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `product_type`) VALUES
(1, 'Dell XPS 15 Laptop', 'hardware'),
(2, 'Basler a2A1920-160umPROSSSS', 'camera'),
(3, 'Rasler boost baA4096-72cc', 'camera'),
(4, 'AutoCAD 2025', 'software'),
(5, 'Basler ace acA640-750um', 'camera'),
(6, 'Basler MED ace aMEDacA1920-50um', 'camera'),
(7, 'Basler ace 2 a2A5328-15ucBAS', 'camera'),
(8, 'Basler racer raL4096-8gm', 'camera'),
(9, 'Basler boost baA3072-72cc', 'camera'),
(10, 'Basler ace acA720-520uc', 'camera'),
(11, 'Dell XPS 15 Laptop', 'hardware'),
(13, 'Logitech MX Master 3S', 'hardware'),
(14, 'Corsair Vengeance RAM 32GB', 'hardware'),
(15, 'Samsung 980 Pro SSD 1TB', 'hardware'),
(16, 'Microsoft Office 2021', 'software'),
(17, 'Adobe Photoshop 2024', 'software'),
(18, 'Visual Studio 2022', 'software'),
(19, 'AutoCAD 2025', 'software'),
(28, 'Phan Mem', 'software'),
(30, 'Cameras', 'camera');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `softwares`
--

CREATE TABLE `softwares` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `version` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `description` text,
  `release_date` date DEFAULT NULL,
  `os_supported` varchar(100) DEFAULT NULL,
  `publisher` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `product_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `softwares`
--

INSERT INTO `softwares` (`id`, `name`, `version`, `price`, `description`, `release_date`, `os_supported`, `publisher`, `avatar`, `type`, `created_at`, `product_id`) VALUES
(1, 'Microsoft Office 2021', '2021', 150.00, 'Office suite for productivity', '2021-01-01', 'Windows, Mac', 'Microsoft', 'office2021.jpg', 'Software', '2025-05-11 15:35:01', 16),
(2, 'Adobe Photoshop 2024', '2024', 300.00, 'Photo editing software', '2024-05-01', 'Windows, Mac', 'Adobe', 'photoshop2024.jpg', 'Software', '2025-05-11 15:35:01', 17),
(3, 'Visual Studio 2022', '2022', 500.00, 'IDE for developers', '2022-08-01', 'Windows, Mac', 'Microsoft', 'vs2022.jpg', 'Software', '2025-05-11 15:35:01', 18),
(4, 'AutoCAD 2025', '2025', 1000.00, 'Design and drafting software', '2025-02-28', 'Windows', 'Autodesk', '/uploads/avatar-1747666262737-17351195.webp', 'Software', '2025-05-11 15:35:01', 19);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `full_name` varchar(150) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `address` text,
  `avatar` varchar(255) DEFAULT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `is_verified` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `birthday` date DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `status` tinyint DEFAULT '1' COMMENT '1: active, 0: inactive, 2: banned, 3: pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `full_name`, `phone`, `address`, `avatar`, `role`, `is_verified`, `created_at`, `updated_at`, `birthday`, `gender`, `status`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$PHo4PZ2iagcIEMLwVMAnFu8UluBfZ5sTBUrBULIP8e7FrAV9WzUxu', NULL, NULL, NULL, NULL, 'admin', 0, '2025-05-07 02:04:58', '2025-05-07 02:04:58', NULL, NULL, 1),
(7, 'Trieu', 'tranhotrieu20122002@gmail.com', '$2b$10$.Fr1yynqE8S.MOmbJ.I6feKs04A6pl4yIM4HLLdEYX.kPG0V0007e', NULL, NULL, NULL, '/uploads/avatar-1747584484823-995146354.jpg', 'user', 0, '2025-05-18 15:16:49', '2025-05-18 16:08:04', NULL, NULL, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cameras`
--
ALTER TABLE `cameras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_ibfk_1` (`user_id`);

--
-- Chỉ mục cho bảng `email_verifications`
--
ALTER TABLE `email_verifications`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Chỉ mục cho bảng `order_info`
--
ALTER TABLE `order_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `password_reset_codes`
--
ALTER TABLE `password_reset_codes`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `softwares`
--
ALTER TABLE `softwares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cameras`
--
ALTER TABLE `cameras`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;

--
-- AUTO_INCREMENT cho bảng `email_verifications`
--
ALTER TABLE `email_verifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT cho bảng `order_info`
--
ALTER TABLE `order_info`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `password_reset_codes`
--
ALTER TABLE `password_reset_codes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT cho bảng `softwares`
--
ALTER TABLE `softwares`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cameras`
--
ALTER TABLE `cameras`
  ADD CONSTRAINT `cameras_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  ADD CONSTRAINT `hardwares_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `order_info`
--
ALTER TABLE `order_info`
  ADD CONSTRAINT `order_info_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `softwares`
--
ALTER TABLE `softwares`
  ADD CONSTRAINT `softwares_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
