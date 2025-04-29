-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th4 29, 2025 lúc 04:05 AM
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
  `avartar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `images` json DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cameras`
--

INSERT INTO `cameras` (`id`, `name`, `model`, `series`, `sensor_type`, `resolution`, `fps`, `sensor_width`, `sensor_height`, `interface`, `price`, `description`, `manufacturer`, `avartar`, `type`, `images`) VALUES
(1, 'Basler acA2440-35um', 'acA2440-35um', 'ace', 'CMOS', '2448x2048', 35, 2448, 2048, 'USB 3.0', 1049.00, 'High-resolution camera for detailed inspections.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(2, 'Basler a2A1920-160umPRO', 'a2A1920-160umPRO', 'ace 2 Pro', 'CMOS', '1920x1200', 160, 1920, 1200, 'USB 3.0', 1399.00, 'ace 2 PRO series camera optimized for demanding machine vision tasks.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(3, 'Basler boost baA4096-72cc', 'baA4096-72cc', 'boost', 'CMOS', '4096x3000', 72, 4096, 3000, 'CoaXPress 2.0', 2999.00, 'High-speed CoaXPress camera for advanced industrial applications.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1tvtqBYbfjvjYJ3V7bTwip/6d96478c6c179f006eb665b1a498eb5a/109485_a2A5060-4gcbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(4, 'Basler pilot piA2400-17gm', 'piA2400-17gm', 'pilot', 'CCD', '2456x2058', 17, 2456, 2058, 'GigE', 1799.00, 'CCD sensor camera for scientific imaging.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2ZxrLD5ZoYaUhNpEcs6KqR/b19cba6064b47d4013e979a5bf131c72/109484_a2A5060-4gmbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(5, 'Basler ace acA640-750um', 'acA640-750um', 'ace', 'CMOS', '640x480', 750, 640, 480, 'USB 3.0', 649.00, 'Ultra high frame rate camera suitable for fast motion capture.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/7d1hvEVuVAA0lRWC4n0MLn/dca62054f9ad58cc1abbdcf5269f4efb/109344_r2l-2048-172g5m-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(6, 'Basler MED ace aMEDacA1920-50um', 'MEDacA1920-50um', 'MED ace', 'CMOS', '1920x1200', 50, 1920, 1200, 'USB 3.0', 1899.00, 'Medical-grade camera ideal for microscopy.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/6tSfuHHYNH35DPMRak3gDC/da601b66ba6d1f5e653e54ea387d858e/109349_r2l-4096-84cm-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(7, 'Basler ace 2 a2A5328-15ucBAS', 'a2A5328-15ucBAS', 'ace 2', 'CMOS', '5328x3032', 15, 5328, 3032, 'USB 3.0', 1999.00, 'High-resolution 5K camera for electronics inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5zRBYOVFqUCMWdgRr5pcpR/4e74ef6d77ca016e684a5a5936e13de3/109348_r2l-2048-172cm-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(8, 'Basler racer raL4096-8gm', 'raL4096-8gm', 'racer', 'CMOS', '4096x1', 8, 4096, 1, 'GigE', 2599.00, 'Line scan camera for surface inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3SiZOQ7i46sw1Lb0c3MbKK/b08f7405458eafabeb5e2588fb1cf867/109350_r2l-2048-62cc-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(9, 'Basler boost baA3072-72cc', 'baA3072-72cc', 'boost', 'CMOS', '3072x2048', 72, 3072, 2048, 'CoaXPress 2.0', 2799.00, 'High throughput camera for 3D inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1qhSLsyfl2Ig35ypfkEQQM/14ab7c9185935d7ddb0e154e7554d9f0/109351_r2l-4096-62cc-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL),
(10, 'Basler ace acA720-520uc', 'acA720-520uc', 'ace', 'CMOS', '1280x720', 520, 1280, 720, 'USB 3.0', 799.00, 'High-speed HD camera for sports and science applications.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/55pw6gajZ8hmQF2Wxa736s/d895a817ceb65f1ebfbfd62c83e43f51/108853_r2l16384-120cm_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  `product_type` varchar(50) NOT NULL,
  `quantity` int NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `product_id`, `product_type`, `quantity`) VALUES
(33, 22, 1, 'software', 1),
(34, 21, 2, 'software', 1),
(35, 21, 1, 'software', 1);

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
  `avartar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `hardwares`
--

INSERT INTO `hardwares` (`id`, `name`, `model`, `price`, `description`, `manufacturer`, `warranty`, `avartar`, `type`) VALUES
(1, 'Dell XPS 15 Laptop', 'XPS159520', 1899.99, 'High performance laptop with OLED screen.', 'Dell', '24 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/RMwZyT4TBXgEFWc7yZYbd/7bdd6a337c9806e5ebaf816a448bc681/fixed-focal-lenses.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware'),
(2, 'Asus ROG Strix Gaming Laptop', 'G533ZW', 2499.99, 'Gaming laptop with RTX 3080 GPU.', 'Asus', '24 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/L4lCwsESjtYT15d6ja0CV/f5adf6e108f214c72f4253bd2c04ccd2/telecentric-lences.webp?fm=webp&f=top_left&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware'),
(3, 'Logitech MX Master 3S', 'MX3S', 99.99, 'Advanced ergonomic wireless mouse.', 'Logitech', '12 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5Z24bfvyNdjyvCXtefs6BO/327978a739d9f0620174a97d4d7e8565/racer-2-l-linescan-camera-lens-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware'),
(4, 'Corsair Vengeance RAM 32GB', 'CMK32GX4M2E3200C16', 129.99, 'High-speed DDR4 RAM kit.', 'Corsair', '60 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/4KXZw6HNDM1yzpGiq24zMP/624526b78c5ab7e00dc7da743e12bb82/2200001665_basler-lens-c12-5024-25m-50mm_lens_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'hardware'),
(5, 'Samsung 980 Pro SSD 1TB', 'MZ-V8P1T0BW', 149.99, 'High-speed NVMe SSD.', 'Samsung', '60 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/44si9RzH1UqFXVmfDwfyky/390ee2c4c4a6b8b85c07b1c3c2754c54/2200001664_basler-lens-c12-3524-25m-35mm_lens_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'hardware');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `image`) VALUES
(2, 'Quần Jeans Nữ Cá Tính', 240000, 'https://via.placeholder.com/150'),
(6, 'A', 1, 'bbbbbb');

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
  `avartar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `softwares`
--

INSERT INTO `softwares` (`id`, `name`, `version`, `price`, `description`, `release_date`, `os_supported`, `publisher`, `avartar`, `type`) VALUES
(1, 'Microsoft Office 2021', 'v2021', 249.99, 'Office suite for productivity.', '2021-10-05', 'Windows, Mac', 'Microsoft', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3wV5soVGv0frtfWni3QeUo/14e1b29e3bfd6787c0ae70bf74f2d4bf/pylon-ai-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software'),
(2, 'Adobe Photoshop 2024', 'v25.0', 299.99, 'Professional photo editing software.', '2024-02-15', 'Windows, Mac', 'Adobe Inc.', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/74s8NRG1UyyWceCBQEqKPO/0e4a5e03cb286487d8bb63e3d737f270/pylon-vtools-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software'),
(3, 'Visual Studio 2022', 'v17.4', 0.00, 'Free IDE for developers.', '2022-03-10', 'Windows', 'Microsoft', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/4kiMSCnJG94GWmkOga7X1t/cae0300fbc8bc03726af8ea057df5bce/visual-applets-02-t.webp?fm=webp&f=right&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software'),
(4, 'AutoCAD 2025', 'v2025', 1450.00, 'Professional CAD design software.', '2025-01-10', 'Windows', 'Autodesk', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2uj4vQZ50S7W4lDUoljgq6/d24e0f7ac54534cd7b2a2a98d99c866a/pylon-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software'),
(5, 'VMware Workstation 17', 'v17', 199.00, 'Virtualization software.', '2023-11-01', 'Windows, Linux', 'VMware', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1b59hQjbxewUL9g93KcIY6/0834f04c8263b9f67b58468ef813e5da/software-tof-camera-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','user') DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`, `created_at`) VALUES
(2, 'Test Usersss', 'test@example.com', '$2b$10$H.Plp8vnLEAnvGfkVT6lfOkpEN8kQE2h8EzhUdui8Q7PWJjWwpmcG', 'admin', '2025-04-24 16:32:46'),
(4, 'admin', 'admin@gmail.com', '$2b$10$D3FPLnBgTHV.1W0OkBe5Le8hX0nAC817T9qsSf3a.H4b3B1A7iynG', 'admin', '2025-04-25 02:01:49'),
(21, 'huyen', 'huyen@gmail.com', '$2b$10$LER3k/3USvJzE2qAmmoF.OsNvFcav9Lyeuc3ttDh7DjXRv/6MEYFy', 'user', '2025-04-26 09:21:10'),
(22, 'c', 'c@gmail.com', '$2b$10$gPt9OxJyBIfts2G0Y4PmFuhMTSi8fYo8BkatGaGdPV0syHdy/iM/K', 'user', '2025-04-26 09:26:49');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cameras`
--
ALTER TABLE `cameras`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hardwares`
--
ALTER TABLE `hardwares`
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
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cameras`
--
ALTER TABLE `cameras`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `softwares`
--
ALTER TABLE `softwares`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
