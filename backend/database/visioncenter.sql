-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 09, 2025 lúc 12:05 PM
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
  `avartar_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `cameras`
--

INSERT INTO `cameras` (`id`, `name`, `model`, `series`, `sensor_type`, `resolution`, `fps`, `sensor_width`, `sensor_height`, `interface`, `price`, `description`, `manufacturer`, `avartar`, `avartar_2`, `type`, `created_at`) VALUES
(1, 'Basler acA2440-35um', 'acA2440-35um', 'ace', 'CMOS', '2448x2048', 35, 2448, 2048, 'USB 3.0', 1049.00, 'High-resolution camera for detailed inspections.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5Mxjs0pRALHZ2bDCJJI3uR/60a79b5a7fde8d9c9368d31e331382c5/109477_a2A2048-114ucpro_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(2, 'Basler a2A1920-160umPRO', 'a2A1920-160umPRO', 'ace 2 Pro', 'CMOS', '1920x1200', 160, 1920, 1200, 'USB 3.0', 1399.00, 'ace 2 PRO series camera optimized for demanding machine vision tasks.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3Hq1KawGv9W8pMyH3jauVF/7018f254e1a49f45475068f5f4e584fb/109486_a2A5060-22g5mbas_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(3, 'Basler boost baA4096-72cc', 'baA4096-72cc', 'boost', 'CMOS', '4096x3000', 72, 4096, 3000, 'CoaXPress 2.0', 2999.00, 'High-speed CoaXPress camera for advanced industrial applications.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1tvtqBYbfjvjYJ3V7bTwip/6d96478c6c179f006eb665b1a498eb5a/109485_a2A5060-4gcbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/6sXQ2X9tVsRxDnkVBmGKqq/1581eb272f72303ea72ccd5a19948281/109485_a2A5060-4gcbas_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(4, 'Basler pilot piA2400-17gm', 'piA2400-17gm', 'pilot', 'CCD', '2456x2058', 17, 2456, 2058, 'GigE', 1799.00, 'CCD sensor camera for scientific imaging.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2ZxrLD5ZoYaUhNpEcs6KqR/b19cba6064b47d4013e979a5bf131c72/109484_a2A5060-4gmbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1xu1R2HZusmdTzHp288P79/838164237dac30f7b62e001f7c11c2d7/109484_a2A5060-4gmbas_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(5, 'Basler ace acA640-750um', 'acA640-750um', 'ace', 'CMOS', '640x480', 750, 640, 480, 'USB 3.0', 649.00, 'Ultra high frame rate camera suitable for fast motion capture.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/7d1hvEVuVAA0lRWC4n0MLn/dca62054f9ad58cc1abbdcf5269f4efb/109344_r2l-2048-172g5m-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3eP469L3jKRt60Cy1A4XLv/d08d9fd03f0e5d75d37e77fa279cbace/109234_a2a2440-98g5mbas_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(6, 'Basler MED ace aMEDacA1920-50um', 'MEDacA1920-50um', 'MED ace', 'CMOS', '1920x1200', 50, 1920, 1200, 'USB 3.0', 1899.00, 'Medical-grade camera ideal for microscopy.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/6tSfuHHYNH35DPMRak3gDC/da601b66ba6d1f5e653e54ea387d858e/109349_r2l-4096-84cm-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/RAhGsQEYDu9bQ0yVF47wu/1b415983ac029d5006318499a5b6fd4b/108417_a2a2448-75ucbas_area-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(7, 'Basler ace 2 a2A5328-15ucBAS', 'a2A5328-15ucBAS', 'ace 2', 'CMOS', '5328x3032', 15, 5328, 3032, 'USB 3.0', 1999.00, 'High-resolution 5K camera for electronics inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5zRBYOVFqUCMWdgRr5pcpR/4e74ef6d77ca016e684a5a5936e13de3/109348_r2l-2048-172cm-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2dJLK9P3vMkvk2f1JCUndl/67e7c4deb3efd1123fcdcf409233ff3a/109348_r2l-2048-172cm-3504_line-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(8, 'Basler racer raL4096-8gm', 'raL4096-8gm', 'racer', 'CMOS', '4096x1', 8, 4096, 1, 'GigE', 2599.00, 'Line scan camera for surface inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3SiZOQ7i46sw1Lb0c3MbKK/b08f7405458eafabeb5e2588fb1cf867/109350_r2l-2048-62cc-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/vfcRnNNNtVYnCeaCmAoO6/d3ef5523a99a5111ee7928de4923018c/109350_r2l-2048-62cc-3504_line-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(9, 'Basler boost baA3072-72cc', 'baA3072-72cc', 'boost', 'CMOS', '3072x2048', 72, 3072, 2048, 'CoaXPress 2.0', 2799.00, 'High throughput camera for 3D inspection.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1qhSLsyfl2Ig35ypfkEQQM/14ab7c9185935d7ddb0e154e7554d9f0/109351_r2l-4096-62cc-3504_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/B2wzOddNcvW0QqweUHHQu/a2ceefa6bfe35326673a723bbce6a2b9/109351_r2l-4096-62cc-3504_line-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19'),
(10, 'Basler ace acA720-520uc', 'acA720-520uc', 'ace', 'CMOS', '1280x720', 520, 1280, 720, 'USB 3.0', 799.00, 'High-speed HD camera for sports and science applications.', 'Basler AG', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/55pw6gajZ8hmQF2Wxa736s/d895a817ceb65f1ebfbfd62c83e43f51/108853_r2l16384-120cm_line-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/6OeO2EwbGcH6TVFzgC0FmH/0cfdba7e80a3838eb3e3bb0593356a06/108853_r2l16384-120cm_line-scan-camera_02.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'camera', '2025-05-03 03:40:19');

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
(50, 21, 3, 'camera', 1, NULL, NULL, NULL),
(51, 21, 3, 'software', 1, NULL, NULL, NULL),
(52, 21, 2, 'software', 1, NULL, NULL, NULL),
(60, 29, 1, 'camera', 1, 'Basler acA2440-35um', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1049),
(62, 34, 1, 'camera', 1, NULL, NULL, NULL),
(63, 35, 2, 'camera', 1, 'Basler a2A1920-160umPRO', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1399),
(64, 35, 3, 'camera', 1, 'Basler boost baA4096-72cc', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1tvtqBYbfjvjYJ3V7bTwip/6d96478c6c179f006eb665b1a498eb5a/109485_a2A5060-4gcbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 2999),
(67, 3, 3, 'camera', 1, 'Basler boost baA4096-72cc', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1tvtqBYbfjvjYJ3V7bTwip/6d96478c6c179f006eb665b1a498eb5a/109485_a2A5060-4gcbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 2999);

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
  `avartar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `hardwares`
--

INSERT INTO `hardwares` (`id`, `name`, `model`, `price`, `description`, `manufacturer`, `warranty`, `avartar`, `type`, `created_at`) VALUES
(1, 'Dell XPS 15 Laptop', 'XPS159520', 1899.99, 'High performance laptop with OLED screen.', 'Dell', '24 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/RMwZyT4TBXgEFWc7yZYbd/7bdd6a337c9806e5ebaf816a448bc681/fixed-focal-lenses.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware', '2025-05-03 03:40:19'),
(2, 'Asus ROG Strix Gaming Laptop', 'G533ZW', 2499.99, 'Gaming laptop with RTX 3080 GPU.', 'Asus', '24 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/L4lCwsESjtYT15d6ja0CV/f5adf6e108f214c72f4253bd2c04ccd2/telecentric-lences.webp?fm=webp&f=top_left&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware', '2025-05-03 03:40:19'),
(3, 'Logitech MX Master 3S', 'MX3S', 99.99, 'Advanced ergonomic wireless mouse.', 'Logitech', '12 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5Z24bfvyNdjyvCXtefs6BO/327978a739d9f0620174a97d4d7e8565/racer-2-l-linescan-camera-lens-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'hardware', '2025-05-03 03:40:19'),
(4, 'Corsair Vengeance RAM 32GB', 'CMK32GX4M2E3200C16', 129.99, 'High-speed DDR4 RAM kit.', 'Corsair', '60 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/4KXZw6HNDM1yzpGiq24zMP/624526b78c5ab7e00dc7da743e12bb82/2200001665_basler-lens-c12-5024-25m-50mm_lens_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'hardware', '2025-05-03 03:40:19'),
(5, 'Samsung 980 Pro SSD 1TB', 'MZ-V8P1T0BW', 149.99, 'High-speed NVMe SSD.', 'Samsung', '60 months', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/44si9RzH1UqFXVmfDwfyky/390ee2c4c4a6b8b85c07b1c3c2754c54/2200001664_basler-lens-c12-3524-25m-35mm_lens_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 'hardware', '2025-05-03 03:40:19');

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

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `total_price`, `create_at`, `status`) VALUES
(1, 29, 3497.00, '2025-05-06 22:54:02', 'pending'),
(2, 29, 1799.00, '2025-05-06 22:57:12', 'pending'),
(3, 3, 2448.00, '2025-05-08 10:06:18', 'pending'),
(4, 2, 3497.00, '2025-05-09 15:10:05', 'pending');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` int NOT NULL,
  `order_id` int NOT NULL,
  `product_type` varchar(50) NOT NULL,
  `product_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `avartar` varchar(255) DEFAULT NULL,
  `quantity` int NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_type`, `product_id`, `name`, `avartar`, `quantity`, `price`) VALUES
(1, 1, 'camera', 1, 'Basler acA2440-35um', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 2, 1049.00),
(2, 1, 'camera', 2, 'Basler a2A1920-160umPRO', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1, 1399.00),
(3, 2, 'camera', 4, 'Basler pilot piA2400-17gm', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2ZxrLD5ZoYaUhNpEcs6KqR/b19cba6064b47d4013e979a5bf131c72/109484_a2A5060-4gmbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1, 1799.00),
(4, 3, 'camera', 1, 'Basler acA2440-35um', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1, 1049.00),
(5, 3, 'camera', 2, 'Basler a2A1920-160umPRO', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1, 1399.00),
(6, 4, 'camera', 1, 'Basler acA2440-35um', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/5nmVf84JdJIEUhrINFe3Lo/00860bb76b2ae5770aaa3aed9158c21d/109477_a2A2048-114ucpro_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 2, 1049.00),
(7, 4, 'camera', 2, 'Basler a2A1920-160umPRO', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1bAOfmFSDOTW6F66iQ2JKT/03253cd2ec13b7bf3fb00d50404e806b/109486_a2A5060-22g5mbas_area-scan-camera_01.webp?fm=webp&f=center&w=800&h=600&q=80&fit=pad', 1, 1399.00);

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
  `type` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `softwares`
--

INSERT INTO `softwares` (`id`, `name`, `version`, `price`, `description`, `release_date`, `os_supported`, `publisher`, `avartar`, `type`, `created_at`) VALUES
(1, 'Microsoft Office 2021', 'v2021', 249.99, 'Office suite for productivity.', '2021-10-05', 'Windows, Mac', 'Microsoft', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/3wV5soVGv0frtfWni3QeUo/14e1b29e3bfd6787c0ae70bf74f2d4bf/pylon-ai-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software', '2025-05-03 03:40:19'),
(2, 'Adobe Photoshop 2024', 'v25.0', 299.99, 'Professional photo editing software.', '2024-02-15', 'Windows, Mac', 'Adobe Inc.', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/74s8NRG1UyyWceCBQEqKPO/0e4a5e03cb286487d8bb63e3d737f270/pylon-vtools-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software', '2025-05-03 03:40:19'),
(3, 'Visual Studio 2022', 'v17.4', 0.00, 'Free IDE for developers.', '2022-03-10', 'Windows', 'Microsoft', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/4kiMSCnJG94GWmkOga7X1t/cae0300fbc8bc03726af8ea057df5bce/visual-applets-02-t.webp?fm=webp&f=right&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software', '2025-05-03 03:40:19'),
(4, 'AutoCAD 2025', 'v2025', 1450.00, 'Professional CAD design software.', '2025-01-10', 'Windows', 'Autodesk', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/2uj4vQZ50S7W4lDUoljgq6/d24e0f7ac54534cd7b2a2a98d99c866a/pylon-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software', '2025-05-03 03:40:19'),
(5, 'VMware Workstation 17', 'v17', 199.00, 'Virtualization software.', '2023-11-01', 'Windows, Linux', 'VMware', 'https://images-ctf.baslerweb.com/dg51pdwahxgw/1b59hQjbxewUL9g93KcIY6/0834f04c8263b9f67b58468ef813e5da/software-tof-camera-02-t.webp?fm=webp&f=center&w=960&h=540&q=60&fit=pad&bg=rgb:ffffff', 'software', '2025-05-03 03:40:19');

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
  `gender` enum('male','female','other') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `full_name`, `phone`, `address`, `avatar`, `role`, `is_verified`, `created_at`, `updated_at`, `birthday`, `gender`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$PHo4PZ2iagcIEMLwVMAnFu8UluBfZ5sTBUrBULIP8e7FrAV9WzUxu', NULL, NULL, NULL, NULL, 'admin', 0, '2025-05-07 02:04:58', '2025-05-07 02:04:58', NULL, NULL),
(2, 'trieu', 'tranhotrieu20122002@gmail.com', '$2b$10$a1YGnabCzzPCc5/xy5N2Le.hGLT3dUS15jH3JHKOTwSFEoF2LBxG2', 'Trieu', '334340937', '22/1C Bùi Thị Cội, khu phố Đông An, phường Tân Đông Hiệp', '/uploads/avatar-1746756571045-972864415.png', 'user', 0, '2025-05-07 02:06:03', '2025-05-09 02:28:21', '2020-11-05', 'male'),
(4, 'helllo', 'trieuth.yame@gmail.com', '$2b$10$wm8Z9/lrlNjACGqEY5PXMu1I7YL1vuGxT/LUUy3tO.wdwf/g.Un.6', 'Trieu Ne', '334340937', '22/1C Bùi Thị Cội, khu phố Đông An, phường Tân Đông Hiệp', '/uploads/avatar-1746699020986-890995877.png', 'user', 0, '2025-05-08 09:29:04', '2025-05-08 10:10:20', NULL, 'male');

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
-- Chỉ mục cho bảng `email_verifications`
--
ALTER TABLE `email_verifications`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `email_verifications`
--
ALTER TABLE `email_verifications`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `hardwares`
--
ALTER TABLE `hardwares`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `password_reset_codes`
--
ALTER TABLE `password_reset_codes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
`