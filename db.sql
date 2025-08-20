-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 16, 2025 at 07:56 PM
-- Server version: 10.6.22-MariaDB-cll-lve
-- PHP Version: 8.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `impulsep_air_charters`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminNotifications`
--

CREATE TABLE `adminNotifications` (
  `id` int(11) NOT NULL,
  `target` enum('superadmin','citAdmin','companyAdmin','agent') NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `read` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `adminNotifications`
--

INSERT INTO `adminNotifications` (`id`, `target`, `title`, `message`, `read`, `createdAt`, `updatedAt`, `userId`) VALUES
(40, 'agent', 'Company approved', 'Company \"aib company\" you onboarded has been approved', 0, '2025-07-07 08:02:01', '2025-07-07 08:02:01', 3),
(58, 'companyAdmin', 'Company reactivated', 'Your company \"company b\" has been reactivated', 0, '2025-07-14 13:28:38', '2025-07-14 13:28:38', 25),
(59, 'agent', 'Company terminated', 'Company \"AIB flight\" you onboarded has been terminated', 1, '2025-07-14 13:36:58', '2025-07-14 13:38:03', 20),
(60, 'agent', 'Company reactivated', 'Company \"AIB flight\" you onboarded has been reactivated', 0, '2025-07-14 13:46:30', '2025-07-14 13:46:30', 20),
(61, 'agent', 'Company terminated', 'Company \"AIB flight\" you onboarded has been terminated', 0, '2025-07-14 13:47:42', '2025-07-14 13:47:42', 20),
(62, 'agent', 'Company terminated', 'Company \"Flight abc\" you onboarded has been terminated', 0, '2025-07-15 07:25:39', '2025-07-15 07:25:39', 20),
(63, 'agent', 'Company reactivated', 'Company \"AIB flight\" you onboarded has been reactivated', 0, '2025-07-15 07:29:13', '2025-07-15 07:29:13', 20),
(71, 'companyAdmin', 'Company approved', 'Your company \"Entebbe Airways\" has been approved', 1, '2025-07-23 06:45:41', '2025-07-23 06:53:53', 30),
(77, '', 'Vehicle company approved', 'Your vehicle company \"Example Vehicle Co.\" has been approved', 0, '2025-07-23 11:39:15', '2025-07-23 11:39:15', 33),
(83, '', 'Vehicle company approved', 'Your vehicle company \"Aston executive\" has been approved', 0, '2025-08-04 13:09:45', '2025-08-04 13:09:45', 35),
(85, '', 'Vehicle company approved', 'Your vehicle company \"Company 1\" has been approved', 0, '2025-08-06 08:37:49', '2025-08-06 08:37:49', 36),
(86, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Yellow Wings\" has been submitted for review.', 0, '2025-08-07 08:20:01', '2025-08-07 08:20:01', 37),
(88, 'citAdmin', 'Company approved', 'Company \"Yellow Wings\" you onboarded has been approved', 0, '2025-08-07 08:21:08', '2025-08-07 08:21:08', 37),
(89, 'companyAdmin', 'Company approved', 'Your company \"Yellow Wings\" has been approved', 0, '2025-08-07 08:21:08', '2025-08-07 08:21:08', 38),
(90, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Transonic Aviation\" has been submitted for review.', 0, '2025-08-07 09:18:24', '2025-08-07 09:18:24', 37),
(92, 'citAdmin', 'Company approved', 'Company \"Transonic Aviation\" you onboarded has been approved', 0, '2025-08-07 09:19:00', '2025-08-07 09:19:00', 37),
(93, 'companyAdmin', 'Company approved', 'Your company \"Transonic Aviation\" has been approved', 0, '2025-08-07 09:19:00', '2025-08-07 09:19:00', 39),
(94, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Scenic Air Safaris\" has been submitted for review.', 0, '2025-08-07 10:11:53', '2025-08-07 10:11:53', 37),
(96, 'citAdmin', 'Company approved', 'Company \"Scenic Air Safaris\" you onboarded has been approved', 0, '2025-08-07 10:13:23', '2025-08-07 10:13:23', 37),
(97, 'companyAdmin', 'Company approved', 'Your company \"Scenic Air Safaris\" has been approved', 0, '2025-08-07 10:13:23', '2025-08-07 10:13:23', 40),
(98, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Aberdair Aviation\" has been submitted for review.', 0, '2025-08-07 12:28:01', '2025-08-07 12:28:01', 37),
(100, 'citAdmin', 'Company approved', 'Company \"Aberdair Aviation\" you onboarded has been approved', 0, '2025-08-07 12:28:34', '2025-08-07 12:28:34', 37),
(101, 'companyAdmin', 'Company approved', 'Your company \"Aberdair Aviation\" has been approved', 0, '2025-08-07 12:28:34', '2025-08-07 12:28:34', 41),
(102, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Tropicair\" has been submitted for review.', 0, '2025-08-07 14:00:52', '2025-08-07 14:00:52', 37),
(104, 'citAdmin', 'Company approved', 'Company \"Tropicair\" you onboarded has been approved', 0, '2025-08-07 14:01:39', '2025-08-07 14:01:39', 37),
(105, 'companyAdmin', 'Company approved', 'Your company \"Tropicair\" has been approved', 0, '2025-08-07 14:01:39', '2025-08-07 14:01:39', 42),
(106, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"AirKenya\" has been submitted for review.', 0, '2025-08-08 07:51:50', '2025-08-08 07:51:50', 37),
(108, 'citAdmin', 'Company approved', 'Company \"AirKenya\" you onboarded has been approved', 0, '2025-08-08 07:52:19', '2025-08-08 07:52:19', 37),
(109, 'companyAdmin', 'Company approved', 'Your company \"AirKenya\" has been approved', 0, '2025-08-08 07:52:19', '2025-08-08 07:52:19', 43),
(110, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Aero Link\" has been submitted for review.', 0, '2025-08-08 09:40:58', '2025-08-08 09:40:58', 37),
(112, 'citAdmin', 'Company approved', 'Company \"Aero Link\" you onboarded has been approved', 0, '2025-08-08 09:42:00', '2025-08-08 09:42:00', 37),
(113, 'companyAdmin', 'Company approved', 'Your company \"Aero Link\" has been approved', 0, '2025-08-08 09:42:00', '2025-08-08 09:42:00', 44),
(114, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Safarilink\" has been submitted for review.', 0, '2025-08-08 10:26:23', '2025-08-08 10:26:23', 37),
(116, 'citAdmin', 'Company approved', 'Company \"Safarilink\" you onboarded has been approved', 0, '2025-08-08 10:26:59', '2025-08-08 10:26:59', 37),
(117, 'companyAdmin', 'Company approved', 'Your company \"Safarilink\" has been approved', 0, '2025-08-08 10:26:59', '2025-08-08 10:26:59', 45),
(118, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"AMREF Aviation\" has been submitted for review.', 0, '2025-08-08 11:36:43', '2025-08-08 11:36:43', 37),
(120, 'citAdmin', 'Company approved', 'Company \"AMREF Aviation\" you onboarded has been approved', 0, '2025-08-08 11:37:10', '2025-08-08 11:37:10', 37),
(121, 'companyAdmin', 'Company approved', 'Your company \"AMREF Aviation\" has been approved', 0, '2025-08-08 11:37:10', '2025-08-08 11:37:10', 46),
(122, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"748 Air Services\" has been submitted for review.', 0, '2025-08-08 12:03:47', '2025-08-08 12:03:47', 37),
(124, 'citAdmin', 'Company approved', 'Company \"748 Air Services\" you onboarded has been approved', 0, '2025-08-08 12:04:12', '2025-08-08 12:04:12', 37),
(125, 'companyAdmin', 'Company approved', 'Your company \"748 Air Services\" has been approved', 0, '2025-08-08 12:04:12', '2025-08-08 12:04:12', 47),
(126, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Phoenix Aviation\" has been submitted for review.', 0, '2025-08-11 06:57:32', '2025-08-11 06:57:32', 37),
(128, 'citAdmin', 'Company approved', 'Company \"Phoenix Aviation\" you onboarded has been approved', 0, '2025-08-11 06:58:16', '2025-08-11 06:58:16', 37),
(129, 'companyAdmin', 'Company approved', 'Your company \"Phoenix Aviation\" has been approved', 0, '2025-08-11 06:58:16', '2025-08-11 06:58:16', 48),
(130, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Misk Air\" has been submitted for review.', 0, '2025-08-11 07:37:34', '2025-08-11 07:37:34', 37),
(132, 'citAdmin', 'Company approved', 'Company \"Misk Air\" you onboarded has been approved', 0, '2025-08-11 07:38:05', '2025-08-11 07:38:05', 37),
(133, 'companyAdmin', 'Company approved', 'Your company \"Misk Air\" has been approved', 0, '2025-08-11 07:38:05', '2025-08-11 07:38:05', 49),
(134, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Bar Aviation\" has been submitted for review.', 0, '2025-08-11 08:28:55', '2025-08-11 08:28:55', 37),
(136, 'citAdmin', 'Company approved', 'Company \"Bar Aviation\" you onboarded has been approved', 0, '2025-08-11 08:31:22', '2025-08-11 08:31:22', 37),
(137, 'companyAdmin', 'Company approved', 'Your company \"Bar Aviation\" has been approved', 0, '2025-08-11 08:31:22', '2025-08-11 08:31:22', 50),
(138, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Fly KEA\" has been submitted for review.', 0, '2025-08-11 08:58:45', '2025-08-11 08:58:45', 37),
(140, 'citAdmin', 'Company approved', 'Company \"Fly KEA\" you onboarded has been approved', 0, '2025-08-11 09:24:13', '2025-08-11 09:24:13', 37),
(141, 'companyAdmin', 'Company approved', 'Your company \"Fly KEA\" has been approved', 0, '2025-08-11 09:24:13', '2025-08-11 09:24:13', 51),
(142, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Eagle Air\" has been submitted for review.', 0, '2025-08-11 10:44:13', '2025-08-11 10:44:13', 37),
(144, 'citAdmin', 'Company approved', 'Company \"Eagle Air\" you onboarded has been approved', 0, '2025-08-11 10:45:34', '2025-08-11 10:45:34', 37),
(145, 'companyAdmin', 'Company approved', 'Your company \"Eagle Air\" has been approved', 0, '2025-08-11 10:45:34', '2025-08-11 10:45:34', 52),
(146, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Skyward Express\" has been submitted for review.', 0, '2025-08-11 13:36:09', '2025-08-11 13:36:09', 37),
(148, 'citAdmin', 'Company approved', 'Company \"Skyward Express\" you onboarded has been approved', 0, '2025-08-11 13:41:33', '2025-08-11 13:41:33', 37),
(149, 'companyAdmin', 'Company approved', 'Your company \"Skyward Express\" has been approved', 0, '2025-08-11 13:41:33', '2025-08-11 13:41:33', 58),
(150, 'companyAdmin', 'Company terminated', 'Company \"Aib Aviation\" you onboarded has been terminated', 0, '2025-08-11 14:10:03', '2025-08-11 14:10:03', 34),
(151, 'companyAdmin', 'Company approved', 'Company \"Aib Aviation\" you onboarded has been approved', 0, '2025-08-11 14:23:32', '2025-08-11 14:23:32', 34),
(152, 'companyAdmin', 'Company approved', 'Your company \"Aib Aviation\" has been approved', 0, '2025-08-11 14:23:32', '2025-08-11 14:23:32', 60),
(153, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Helicopters Charter\" has been submitted for review.', 0, '2025-08-12 10:04:23', '2025-08-12 10:04:23', 37),
(154, 'superadmin', 'New charter company awaiting review', 'Company \"Helicopters Charter\" has been submitted by Jane.', 1, '2025-08-12 10:04:23', '2025-08-13 10:33:58', NULL),
(155, 'citAdmin', 'Company approved', 'Company \"Helicopters Charter\" you onboarded has been approved', 0, '2025-08-12 10:05:16', '2025-08-12 10:05:16', 37),
(156, 'companyAdmin', 'Company approved', 'Your company \"Helicopters Charter\" has been approved', 0, '2025-08-12 10:05:16', '2025-08-12 10:05:16', 61),
(157, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Bukhaavia\" has been submitted for review.', 0, '2025-08-13 11:22:58', '2025-08-13 11:22:58', 37),
(158, 'superadmin', 'New charter company awaiting review', 'Company \"Bukhaavia\" has been submitted by Jane.', 0, '2025-08-13 11:22:58', '2025-08-13 11:22:58', NULL),
(159, 'citAdmin', 'Company approved', 'Company \"Bukhaavia\" you onboarded has been approved', 0, '2025-08-13 11:23:52', '2025-08-13 11:23:52', 37),
(160, 'companyAdmin', 'Company approved', 'Your company \"Bukhaavia\" has been approved', 0, '2025-08-13 11:23:52', '2025-08-13 11:23:52', 62),
(161, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Astral Aviation\" has been submitted for review.', 0, '2025-08-13 12:06:34', '2025-08-13 12:06:34', 37),
(162, 'superadmin', 'New charter company awaiting review', 'Company \"Astral Aviation\" has been submitted by Jane.', 0, '2025-08-13 12:06:34', '2025-08-13 12:06:34', NULL),
(163, 'citAdmin', 'Company approved', 'Company \"Astral Aviation\" you onboarded has been approved', 0, '2025-08-13 12:07:03', '2025-08-13 12:07:03', 37),
(164, 'companyAdmin', 'Company approved', 'Your company \"Astral Aviation\" has been approved', 0, '2025-08-13 12:07:03', '2025-08-13 12:07:03', 63),
(165, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Africa Eco Adventures\" has been submitted for review.', 0, '2025-08-14 06:48:08', '2025-08-14 06:48:08', 37),
(166, 'superadmin', 'New charter company awaiting review', 'Company \"Africa Eco Adventures\" has been submitted by Jane.', 0, '2025-08-14 06:48:08', '2025-08-14 06:48:08', NULL),
(167, 'citAdmin', 'Company approved', 'Company \"Africa Eco Adventures\" you onboarded has been approved', 0, '2025-08-14 06:48:49', '2025-08-14 06:48:49', 37),
(168, 'companyAdmin', 'Company approved', 'Your company \"Africa Eco Adventures\" has been approved', 0, '2025-08-14 06:48:49', '2025-08-14 06:48:49', 64),
(169, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Balloon Safaris Ltd\" has been submitted for review.', 0, '2025-08-14 07:03:56', '2025-08-14 07:03:56', 37),
(170, 'superadmin', 'New charter company awaiting review', 'Company \"Balloon Safaris Ltd\" has been submitted by Jane.', 0, '2025-08-14 07:03:56', '2025-08-14 07:03:56', NULL),
(171, 'citAdmin', 'Company approved', 'Company \"Balloon Safaris Ltd\" you onboarded has been approved', 0, '2025-08-14 07:04:46', '2025-08-14 07:04:46', 37),
(172, 'companyAdmin', 'Company approved', 'Your company \"Balloon Safaris Ltd\" has been approved', 0, '2025-08-14 07:04:46', '2025-08-14 07:04:46', 65),
(173, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Kilimanjaro Balloon Safaris\" has been submitted for review.', 0, '2025-08-14 07:08:23', '2025-08-14 07:08:23', 37),
(174, 'superadmin', 'New charter company awaiting review', 'Company \"Kilimanjaro Balloon Safaris\" has been submitted by Jane.', 0, '2025-08-14 07:08:23', '2025-08-14 07:08:23', NULL),
(175, 'citAdmin', 'Company approved', 'Company \"Kilimanjaro Balloon Safaris\" you onboarded has been approved', 0, '2025-08-14 07:08:55', '2025-08-14 07:08:55', 37),
(176, 'companyAdmin', 'Company approved', 'Your company \"Kilimanjaro Balloon Safaris\" has been approved', 0, '2025-08-14 07:08:55', '2025-08-14 07:08:55', 66),
(177, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Governor\'s Balloon Safaris\" has been submitted for review.', 0, '2025-08-14 07:13:12', '2025-08-14 07:13:12', 37),
(178, 'superadmin', 'New charter company awaiting review', 'Company \"Governor\'s Balloon Safaris\" has been submitted by Jane.', 0, '2025-08-14 07:13:12', '2025-08-14 07:13:12', NULL),
(179, 'citAdmin', 'Company approved', 'Company \"Governor\'s Balloon Safaris\" you onboarded has been approved', 0, '2025-08-14 07:14:45', '2025-08-14 07:14:45', 37),
(180, 'companyAdmin', 'Company approved', 'Your company \"Governor\'s Balloon Safaris\" has been approved', 0, '2025-08-14 07:14:45', '2025-08-14 07:14:45', 67),
(181, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Adventures Aloft\" has been submitted for review.', 0, '2025-08-14 07:19:20', '2025-08-14 07:19:20', 37),
(182, 'superadmin', 'New charter company awaiting review', 'Company \"Adventures Aloft\" has been submitted by Jane.', 0, '2025-08-14 07:19:20', '2025-08-14 07:19:20', NULL),
(183, 'citAdmin', 'Company approved', 'Company \"Adventures Aloft\" you onboarded has been approved', 0, '2025-08-14 07:19:51', '2025-08-14 07:19:51', 37),
(184, 'companyAdmin', 'Company approved', 'Your company \"Adventures Aloft\" has been approved', 0, '2025-08-14 07:19:51', '2025-08-14 07:19:51', 68),
(185, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Masai Mara Balloon Safaris \" has been submitted for review.', 0, '2025-08-14 07:23:44', '2025-08-14 07:23:44', 37),
(186, 'superadmin', 'New charter company awaiting review', 'Company \"Masai Mara Balloon Safaris \" has been submitted by Jane.', 0, '2025-08-14 07:23:44', '2025-08-14 07:23:44', NULL),
(187, 'citAdmin', 'Company approved', 'Company \"Masai Mara Balloon Safaris \" you onboarded has been approved', 0, '2025-08-14 07:24:10', '2025-08-14 07:24:10', 37),
(188, 'companyAdmin', 'Company approved', 'Your company \"Masai Mara Balloon Safaris \" has been approved', 0, '2025-08-14 07:24:10', '2025-08-14 07:24:10', 69),
(189, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"Skyship\" has been submitted for review.', 0, '2025-08-14 07:31:26', '2025-08-14 07:31:26', 37),
(190, 'superadmin', 'New charter company awaiting review', 'Company \"Skyship\" has been submitted by Jane.', 0, '2025-08-14 07:31:26', '2025-08-14 07:31:26', NULL),
(191, 'citAdmin', 'Company approved', 'Company \"Skyship\" you onboarded has been approved', 0, '2025-08-14 07:31:57', '2025-08-14 07:31:57', 37),
(192, 'companyAdmin', 'Company approved', 'Your company \"Skyship\" has been approved', 0, '2025-08-14 07:31:57', '2025-08-14 07:31:57', 70),
(193, 'citAdmin', 'Company submitted for review', 'Jane, your charter company \"East African Charters\" has been submitted for review.', 0, '2025-08-14 07:37:24', '2025-08-14 07:37:24', 37),
(194, 'superadmin', 'New charter company awaiting review', 'Company \"East African Charters\" has been submitted by Jane.', 0, '2025-08-14 07:37:24', '2025-08-14 07:37:24', NULL),
(195, 'citAdmin', 'Company approved', 'Company \"East African Charters\" you onboarded has been approved', 0, '2025-08-14 07:38:07', '2025-08-14 07:38:07', 37),
(196, 'companyAdmin', 'Company approved', 'Your company \"East African Charters\" has been approved', 0, '2025-08-14 07:38:07', '2025-08-14 07:38:07', 71);

-- --------------------------------------------------------

--
-- Table structure for table `agent_details`
--

CREATE TABLE `agent_details` (
  `id` int(11) NOT NULL,
  `adminId` int(11) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `imagePublicIdUrl` varchar(255) DEFAULT NULL,
  `licenseUrl` varchar(255) DEFAULT NULL,
  `licensePublicIdUrl` varchar(255) DEFAULT NULL,
  `agreementFormUrl` varchar(255) DEFAULT NULL,
  `agreementFormPublicIdUrl` varchar(255) DEFAULT NULL,
  `idPassportNumber` varchar(255) DEFAULT NULL,
  `mobileNumber` varchar(255) DEFAULT NULL,
  `aocNumber` varchar(255) DEFAULT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `agent_details`
--

INSERT INTO `agent_details` (`id`, `adminId`, `imageUrl`, `imagePublicIdUrl`, `licenseUrl`, `licensePublicIdUrl`, `agreementFormUrl`, `agreementFormPublicIdUrl`, `idPassportNumber`, `mobileNumber`, `aocNumber`, `companyName`, `country`, `createdAt`, `updatedAt`) VALUES
(4, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1751949896/charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/profile/dblxnd3x3aeadzovx9j1.png', 'charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/profile/dblxnd3x3aeadzovx9j1', 'https://res.cloudinary.com/otienobryan/image/upload/v1751949897/charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/license/jyajs91agov4kpkly7pn.pdf', 'charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/license/jyajs91agov4kpkly7pn', 'https://res.cloudinary.com/otienobryan/image/upload/v1751949898/charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/agreement/ekmvbp1wewe7upychttm.pdf', 'charters_agents/ag_0bfcc53b-293e-44f6-9039-6b01e0f095f1/agreement/ekmvbp1wewe7upychttm', '46464664', '0746466464', 'GDGGD46', 'Flight 54', 'Uganda', '2025-07-08 04:44:59', '2025-07-08 04:44:59'),
(5, 20, 'https://res.cloudinary.com/otienobryan/image/upload/v1751966114/charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/profile/wkgcny5ltg4jii6anofn.jpg', 'charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/profile/wkgcny5ltg4jii6anofn', 'https://res.cloudinary.com/otienobryan/image/upload/v1751966115/charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/license/u9gbptkaju7q8ry4mqfw.pdf', 'charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/license/u9gbptkaju7q8ry4mqfw', 'https://res.cloudinary.com/otienobryan/image/upload/v1751966116/charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/agreement/qvnnpkwuzg5rmelnnnsy.pdf', 'charters_agents/ag_67c4cdf9-fe40-4da2-a7a3-e819ed03a4c1/agreement/qvnnpkwuzg5rmelnnnsy', '44646464', '575757575', '46464et', 'flight54', 'Uganda', '2025-07-08 09:15:17', '2025-07-08 09:15:17');

-- --------------------------------------------------------

--
-- Table structure for table `aircrafts`
--

CREATE TABLE `aircrafts` (
  `id` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `registrationNumber` varchar(20) NOT NULL,
  `type` enum('helicopter','fixedWing','jet','glider','seaplane','ultralight','balloon','tiltrotor','gyroplane','airship') NOT NULL,
  `model` varchar(100) DEFAULT NULL,
  `manufacturer` varchar(100) DEFAULT NULL,
  `yearManufactured` int(11) DEFAULT NULL,
  `capacity` int(11) NOT NULL,
  `isAvailable` tinyint(4) NOT NULL DEFAULT 1,
  `maintenanceStatus` enum('operational','maintenance','out_of_service') NOT NULL DEFAULT 'operational',
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `pricePerHour` decimal(10,2) DEFAULT NULL,
  `baseAirport` varchar(100) DEFAULT NULL COMMENT 'Specific airport or airstrip where the aircraft is stationed',
  `baseCity` varchar(100) DEFAULT NULL COMMENT 'City or town associated with the base airport',
  `aircraftTypeImagePlaceholderId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aircrafts`
--

INSERT INTO `aircrafts` (`id`, `companyId`, `name`, `registrationNumber`, `type`, `model`, `manufacturer`, `yearManufactured`, `capacity`, `isAvailable`, `maintenanceStatus`, `createdAt`, `updatedAt`, `pricePerHour`, `baseAirport`, `baseCity`, `aircraftTypeImagePlaceholderId`) VALUES
(5, 11, 'Bell 206B JetRanger', 'N206JR', 'helicopter', '206B', 'Bell Helicopter', 2005, 5, 1, 'operational', '2025-07-17 06:28:03.000000', '2025-08-10 03:09:23.320791', 4300.00, 'Wilson Airport', 'Nairobi', 3),
(6, 11, 'Airbus H125', '5Y-HLI', 'helicopter', 'AS350 B3', 'Airbus Helicopters', 2018, 6, 1, 'operational', '2025-07-17 06:30:26.000000', '2025-08-10 03:09:23.320791', 3800.00, 'Wilson Airport', 'Nairobi', 3),
(7, 11, 'DASSAULT FALCON 200', 'A4353-576', 'jet', 'Falcon 200', 'Dassault Aviation', 2011, 10, 1, 'operational', '2025-07-17 07:09:42.000000', '2025-08-10 03:09:23.320791', 9000.00, 'Wilson Airport', 'Nairobi', 5),
(8, 11, 'Beechcraft King Air', 'ERWTW45-4', 'jet', 'King Air B200GT', 'Beechcraft ', 2009, 8, 1, 'operational', '2025-07-17 07:14:21.000000', '2025-08-10 03:09:23.320791', 3500.00, 'Wilson Airport', 'Nairobi', 5),
(9, 11, 'Airbus H125', 'EREY-57', 'helicopter', 'H125 ', 'Airbus Helicopters', 2014, 8, 1, 'operational', '2025-07-17 07:19:28.000000', '2025-08-10 03:09:23.320791', 2498.00, 'Wilson Airport', 'Nairobi', 3),
(10, 11, 'Bell 407', 'DFER8-7', 'helicopter', '407', 'Bell Helicopter', 2014, 6, 1, 'operational', '2025-07-17 07:34:20.000000', '2025-08-10 03:09:23.320791', 3300.00, 'Wilson Airport', 'Nairobi', 3),
(11, 11, 'Cessna 208B Grand', 'DGDG-57GH', 'fixedWing', '208B', 'Cessna Aircraft', 2008, 14, 1, 'operational', '2025-07-17 11:43:43.000000', '2025-08-10 03:09:23.320791', 1200.00, 'Northlands Airport', 'Nairobi', 4),
(12, 11, 'Airbus H125', 'SGSGS635', 'helicopter', 'EC130', 'Airbus', 2017, 5, 1, 'operational', '2025-07-17 15:53:01.000000', '2025-08-10 03:09:23.320791', 1900.00, 'Wilson Airport', 'Nairobi', 3),
(13, 12, 'Airbus A320', 'ADSF64', 'jet', 'A320-200', 'Airbus', 2011, 140, 1, 'operational', '2025-07-23 07:29:26.000000', '2025-08-10 03:09:23.320791', 9500.00, 'Entebbe Airport', 'Kampala', 5),
(14, 13, 'Cessna Caravan', 'AHDY5656', 'fixedWing', 'Cessna 208B Grand Caravan', 'Textron Aviation', 2011, 14, 1, 'operational', '2025-07-23 08:03:09.000000', '2025-08-10 03:09:23.320791', 3500.00, 'wilson airport', 'Nairobi', 4),
(15, 5, 'Cessna 208B Grand Caravan EX', '5Y-AIB1', 'fixedWing', '208B Grand Caravan EX', 'Cessna', 2012, 4, 1, 'operational', '2025-07-24 07:51:07.000000', '2025-08-10 03:09:23.320791', 3000.00, 'Wilson Airport', 'Nairobi', 4),
(16, 5, 'Beechcraft 1900C Freighter', '5Y-AIB2', 'fixedWing', '1900C', 'Beechcraft', 2013, 7, 1, 'operational', '2025-07-24 07:59:39.000000', '2025-08-10 03:09:23.320791', 5000.00, 'Wilson Airport', 'Nairobi', 4),
(17, 15, 'Cessna 208B ', '5Y-ELO', 'fixedWing', '', '', 0, 12, 1, 'operational', '2025-08-07 08:30:36.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(18, 15, 'Cessna 208B ', '5Y-YWB', 'fixedWing', '', '', 0, 12, 1, 'operational', '2025-08-07 08:49:08.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(19, 17, 'Cessna 208B Grand Caravan', '000', 'fixedWing', '', '', 0, 11, 1, 'operational', '2025-08-07 10:26:10.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(20, 17, 'Cessna 206 Stationair', '001', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-07 10:28:50.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(21, 17, 'Cessna 208B Grand Caravan', '003', 'fixedWing', '', '', 0, 10, 1, 'operational', '2025-08-07 10:33:40.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(22, 17, 'Beechcraft Kingair 250', '004', 'fixedWing', '', '', 0, 8, 1, 'operational', '2025-08-07 10:36:19.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(23, 17, 'Cessna 208B Grand Caravan', '005', 'fixedWing', '', '', 0, 12, 1, 'operational', '2025-08-07 10:45:52.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(24, 17, 'Cessna 208B Grand Caravan', '006', 'fixedWing', '', '', 0, 11, 1, 'operational', '2025-08-07 10:50:41.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(25, 17, 'Cessna 208B Grand Caravan', '007', 'fixedWing', '', '', 0, 11, 1, 'operational', '2025-08-07 10:57:18.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(26, 16, 'Cessna 206', '111', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-07 12:14:09.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(27, 16, 'Cessna 182', '222', 'fixedWing', '', '', 0, 3, 1, 'operational', '2025-08-07 12:19:09.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(28, 18, 'Bell 412', '22214', 'fixedWing', '', '', 0, 15, 1, 'operational', '2025-08-07 12:48:23.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(29, 18, 'Eurocopter AS350B2', '6789', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-07 12:54:22.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(30, 18, 'Bell 505', '34567', 'helicopter', '', '', 0, 4, 1, 'operational', '2025-08-07 13:10:14.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(31, 12, '737-5 ', '1234', 'jet', '', '', 0, 132, 1, 'operational', '2025-08-07 13:48:16.000000', '2025-08-11 11:52:18.000000', 0.00, 'Entebbe International Airport', 'Entebbe', 5),
(32, 12, '777-200ER', '99990', 'jet', '', '', 0, 341, 1, 'operational', '2025-08-07 13:53:44.000000', '2025-08-11 11:52:01.000000', 9000.00, 'Entebbe International Airport', 'Entebbe', 5),
(33, 19, 'Airbus H125', '5Y-CCP', 'helicopter', '', '', 0, 5, 1, 'operational', '2025-08-07 14:14:17.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(34, 19, 'Airbus H125', '5Y-BMV', 'helicopter', '', '', 0, 7, 1, 'operational', '2025-08-07 14:20:48.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(35, 19, 'Airbus H125', '5Y-BXE', 'helicopter', '', '', 0, 5, 1, 'operational', '2025-08-08 03:40:23.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(36, 19, 'Airbus H130', '5Y-CIJ', 'helicopter', '', '', 0, 6, 1, 'operational', '2025-08-08 03:45:26.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(37, 19, 'Grand Caravan', '5Y-BRT', 'helicopter', '', '', 0, 12, 1, 'operational', '2025-08-08 07:18:36.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(38, 19, 'Baby Caravan', '5Y-CCJ', 'helicopter', '', '', 0, 6, 1, 'operational', '2025-08-08 07:25:46.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(39, 19, 'Airbus H125', '5Y-CLO', 'helicopter', '', '', 0, 6, 1, 'operational', '2025-08-08 07:40:44.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(40, 20, 'Cessna Grand Caravan C208B', '5Y-CGZ', 'helicopter', '', '', 0, 12, 1, 'operational', '2025-08-08 08:29:17.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(41, 20, 'De Havilland Canada DHC-6-300 Twin Otter', '5Y-BIO', 'helicopter', '', '', 0, 18, 1, 'operational', '2025-08-08 08:35:43.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(42, 20, 'De Havilland Canada Dash 7-100', '5Y-BMP', 'helicopter', '', '', 0, 49, 1, 'operational', '2025-08-08 08:39:52.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(43, 20, 'Bombardier DHC 8-202 (Dash 8)', '5Y-BTZ', 'helicopter', '', '', 0, 39, 1, 'operational', '2025-08-08 08:44:21.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(44, 20, 'Cessna Grand Caravan C208B', '5Y-CCV', 'helicopter', '', '', 0, 11, 1, 'operational', '2025-08-08 08:50:43.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(45, 20, 'Cessna 208B Grand Caravan', '5Y-BZJ', 'helicopter', '', '', 0, 11, 1, 'operational', '2025-08-08 08:53:03.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(46, 20, 'Cessna 208B Grand Caravan', '5Y-CDL', 'helicopter', '', '', 0, 33, 1, 'operational', '2025-08-08 08:55:31.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 3),
(47, 21, 'Aero Link', '5X-BAZ', 'fixedWing', '', '', 0, 11, 1, 'operational', '2025-08-08 09:45:32.000000', '2025-08-10 03:09:23.320791', 0.00, 'Entebbe International Airport', 'Entebbe', 4),
(48, 22, 'DeHavilland Dash 8 - 106 (5Y-SLD)', '5Y-SLD', 'fixedWing', '', '', 0, 37, 1, 'operational', '2025-08-08 10:35:35.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(49, 22, 'DeHavilland Dash 8 - 315 ', '5Y-SLK', 'fixedWing', '', '', 0, 52, 1, 'operational', '2025-08-08 10:41:57.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(50, 22, 'DeHavilland Dash 8 - 311 ', '5Y-SLC', 'fixedWing', '', '', 0, 50, 1, 'operational', '2025-08-08 11:17:18.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(51, 22, 'DeHavilland Dash 8 - 202', '5Y-SLO', 'fixedWing', '', '', 0, 37, 1, 'operational', '2025-08-08 11:20:34.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(52, 22, 'Cessna Caravan C208B\'s', '5Y-SLH', 'fixedWing', '', '', 0, 12, 1, 'operational', '2025-08-08 11:31:52.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(53, 23, 'Citation', 'XLS C560', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-08 11:48:42.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(54, 23, 'Pilatus PC 12', '5Y-FDP', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-08 11:53:24.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(55, 23, 'Citation Sovereign', '5Y-FDN', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-08 11:57:22.000000', '2025-08-10 03:09:23.320791', 0.00, 'Wilson Airport', 'Nairobi', 4),
(56, 25, 'Citation Bravo', '5Y-SIR', 'fixedWing', '', '', 0, 4, 1, 'operational', '2025-08-11 07:07:57.000000', '2025-08-11 07:07:57.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(57, 25, 'Beechcraft King Air 200', '5Y-RJA', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-11 07:15:39.000000', '2025-08-11 07:15:39.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(58, 25, 'Citation Excel (C560XL)', '5Y-WHB', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-11 07:20:33.000000', '2025-08-11 07:20:33.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(59, 25, 'Cessna C208 Caravan', '5Y-FPB', 'jet', '', '', 0, 12, 1, 'operational', '2025-08-11 07:30:20.000000', '2025-08-11 07:30:20.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(60, 25, 'Citation C680', '5Y-PAB', 'jet', '', '', 0, 6, 1, 'operational', '2025-08-11 07:34:07.000000', '2025-08-11 07:34:07.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(61, 27, 'Bar Aviation', '5X-MAU', 'fixedWing', '', '', 0, 5, 1, 'operational', '2025-08-11 08:52:51.000000', '2025-08-11 08:52:51.000000', 0.00, 'Entebbe International Airport', 'Entebbe', 4),
(62, 5, 'test', 'test', 'fixedWing', 'test', 'test', 2020, 12, 1, 'operational', '2025-08-11 10:30:46.000000', '2025-08-11 10:30:46.000000', 300.00, 'wilson', 'nairobi', 4),
(63, 28, 'Bell 412', '5X-KEG', 'helicopter', '', '', 0, 7, 1, 'operational', '2025-08-11 11:16:25.000000', '2025-08-11 11:16:25.000000', 0.00, 'Entebbe International Airport', 'Nairobi', 3),
(64, 24, 'Bombardier Dehavilland Dash 8-Q400', '554554', 'jet', '', '', 0, 72, 1, 'operational', '2025-08-11 11:58:49.000000', '2025-08-11 11:58:49.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(65, 24, 'Bombardier Dehavilland Dash 8-100', '778667', 'jet', '', '', 0, 35, 1, 'operational', '2025-08-11 12:02:28.000000', '2025-08-11 12:02:28.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(66, 24, 'Cessna Grand Caravan', '00023', 'fixedWing', '', '', 0, 22, 1, 'operational', '2025-08-11 12:06:02.000000', '2025-08-11 12:06:02.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(67, 30, 'DHC 8 100', 'CX222790', 'jet', '', '', 0, 37, 1, 'operational', '2025-08-11 13:48:12.000000', '2025-08-11 13:48:12.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(68, 30, 'Fokker 100', 'RE336785', 'jet', '', '', 0, 105, 1, 'operational', '2025-08-11 13:52:49.000000', '2025-08-11 13:52:49.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(69, 31, 'Robinson R44', '776584', 'helicopter', '', '', 0, 3, 1, 'operational', '2025-08-12 10:10:20.000000', '2025-08-12 10:20:12.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(70, 31, 'Airbus AS 350 Ecureuil', '00567432', 'helicopter', '', '', 0, 3, 1, 'operational', '2025-08-12 10:15:05.000000', '2025-08-12 10:15:05.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(71, 31, 'Airbus EC 120 Colibri', '776543', 'helicopter', '', '', 0, 5, 1, 'operational', '2025-08-12 10:19:49.000000', '2025-08-12 10:19:49.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(72, 31, 'Airbus EC 130', '44321098', 'helicopter', '', '', 0, 6, 1, 'operational', '2025-08-12 10:24:21.000000', '2025-08-12 10:24:21.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(73, 31, 'AgustaWestland AW 109', '44406781', 'helicopter', '', '', 0, 6, 1, 'operational', '2025-08-12 10:28:14.000000', '2025-08-12 10:28:14.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(74, 31, 'Airbus AS 365', '556274', 'helicopter', '', '', 0, 5, 1, 'operational', '2025-08-12 10:32:25.000000', '2025-08-12 10:32:25.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(75, 31, 'Eurocopter Dauphin AS 365 N3', '667832', 'helicopter', '', '', 0, 7, 1, 'operational', '2025-08-12 11:48:20.000000', '2025-08-12 11:49:48.000000', 0.00, 'Wilson Airport', 'Nairobi', 3),
(76, 32, 'DC 9', '7705674', 'jet', '', '', 0, 89, 1, 'operational', '2025-08-13 11:40:01.000000', '2025-08-13 11:40:01.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(77, 32, 'Fokker 50', '8829615', 'jet', '', '', 0, 80, 1, 'operational', '2025-08-13 11:43:21.000000', '2025-08-13 11:43:21.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(78, 32, 'L-410 UVP-E20', '77824153', 'jet', '', '', 0, 80, 1, 'operational', '2025-08-13 11:48:45.000000', '2025-08-13 11:50:19.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(79, 33, 'Boeing 737-400F', '0033GHK', 'jet', '', '', 0, 80, 1, 'operational', '2025-08-13 12:11:17.000000', '2025-08-13 12:11:17.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(80, 33, 'Boeing 767-200F', 'OPP35672', 'jet', '', '', 0, 78, 1, 'operational', '2025-08-13 12:14:45.000000', '2025-08-13 12:14:45.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(81, 33, 'Boeing 767-300F', 'WER33241', 'jet', '', '', 0, 80, 1, 'operational', '2025-08-13 12:17:14.000000', '2025-08-13 12:17:14.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(82, 41, 'Cessna 206H Stationair', '5Y-CHJ', 'fixedWing', '', '', 0, 8, 1, 'operational', '2025-08-14 07:44:06.000000', '2025-08-14 07:44:06.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(83, 41, 'Cessna Grand Caravan', '5Y-BOX', 'fixedWing', '', '', 0, 12, 1, 'operational', '2025-08-14 07:48:16.000000', '2025-08-14 07:48:16.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(84, 41, 'Pilatus PC-12', '5Y-LLL', 'fixedWing', '', '', 0, 14, 1, 'operational', '2025-08-14 07:51:38.000000', '2025-08-14 07:51:38.000000', 0.00, 'Wilson Airport', 'Nairobi', 4),
(85, 41, 'Citation Bravo Business Jet ', '5Y-CCB', 'jet', '', '', 0, 5, 1, 'operational', '2025-08-14 07:56:22.000000', '2025-08-14 07:56:22.000000', 0.00, 'Wilson Airport', 'Nairobi', 5),
(86, 40, 'Hot Air Ballon', '1111111', 'balloon', '', '', 0, 5, 1, 'operational', '2025-08-14 08:20:56.000000', '2025-08-14 08:20:56.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(87, 39, 'Hot Air Ballon', '22222', 'balloon', '', '', 0, 5, 1, 'operational', '2025-08-14 08:25:44.000000', '2025-08-14 08:25:44.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(88, 38, 'Hot Air Balloon', '333333', 'balloon', '', '', 0, 5, 1, 'operational', '2025-08-14 08:28:43.000000', '2025-08-14 08:28:43.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(89, 35, 'Hot Air Balloon', '444444', 'balloon', '', '', 0, 7, 1, 'operational', '2025-08-14 08:37:36.000000', '2025-08-14 08:37:36.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(90, 34, 'Hot Air Balloon', '666666', 'balloon', '', '', 0, 5, 1, 'operational', '2025-08-14 08:43:24.000000', '2025-08-14 08:43:24.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(91, 36, 'Hot Air Balloon', '7777777', 'balloon', '', '', 0, 5, 1, 'operational', '2025-08-14 08:47:30.000000', '2025-08-14 08:47:30.000000', 0.00, 'Maasai Mara', 'Nairobi', 7),
(92, 37, 'Hot Air Balloon', '9999999', 'balloon', '', '', 0, 3, 1, 'operational', '2025-08-14 09:44:45.000000', '2025-08-14 09:44:45.000000', 0.00, 'Maasai Mara', 'Nairobi', 7);

-- --------------------------------------------------------

--
-- Table structure for table `aircraft_amenities`
--

CREATE TABLE `aircraft_amenities` (
  `id` int(11) NOT NULL,
  `aircraftId` int(11) DEFAULT NULL,
  `amenityId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aircraft_amenities`
--

INSERT INTO `aircraft_amenities` (`id`, `aircraftId`, `amenityId`) VALUES
(1, 62, 16),
(2, 62, 4),
(3, 62, 14),
(4, 62, 24),
(5, 62, 12),
(6, 63, 1),
(7, 32, 6),
(8, 32, 4),
(9, 32, 16),
(10, 31, 4),
(11, 31, 16),
(12, 31, 24),
(13, 31, 14),
(14, 13, 4),
(15, 13, 16),
(16, 13, 5),
(17, 13, 22),
(18, 64, 1),
(19, 65, 1),
(20, 66, 1),
(21, 12, 16),
(22, 12, 4),
(23, 12, 24),
(24, 67, 1),
(25, 68, 1),
(26, 69, 1),
(27, 70, 1),
(28, 71, 1),
(29, 72, 1),
(30, 73, 1),
(31, 74, 1),
(32, 75, 1),
(33, 76, 1),
(34, 77, 1),
(35, 78, 1),
(36, 79, 1),
(37, 80, 1),
(38, 81, 1),
(39, 82, 1),
(40, 83, 1),
(41, 84, 1),
(42, 85, 1),
(43, 86, 23),
(44, 87, 23),
(45, 88, 23),
(46, 89, 23),
(47, 90, 23),
(48, 91, 23),
(49, 92, 23);

-- --------------------------------------------------------

--
-- Table structure for table `aircraft_calendar`
--

CREATE TABLE `aircraft_calendar` (
  `id` int(11) NOT NULL,
  `aircraftId` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `startDateTime` datetime NOT NULL,
  `endDateTime` datetime NOT NULL,
  `eventType` enum('available','booked','maintenance','blocked') NOT NULL DEFAULT 'available',
  `bookingId` varchar(255) DEFAULT NULL,
  `originAirport` varchar(100) DEFAULT NULL,
  `destinationAirport` varchar(100) DEFAULT NULL,
  `passengerCount` int(11) DEFAULT NULL,
  `totalPrice` decimal(10,2) DEFAULT NULL,
  `pricePerHour` decimal(10,2) DEFAULT NULL,
  `repositioningCost` decimal(10,2) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `aircraft_calendar`
--

INSERT INTO `aircraft_calendar` (`id`, `aircraftId`, `companyId`, `startDateTime`, `endDateTime`, `eventType`, `bookingId`, `originAirport`, `destinationAirport`, `passengerCount`, `totalPrice`, `pricePerHour`, `repositioningCost`, `createdAt`, `updatedAt`) VALUES
(1, 12, 11, '2025-08-27 00:00:00', '2025-08-27 00:00:00', 'booked', 'BK-20250806-112505-GVL', 'Kisumu International Airport', 'Moi International Airport', 2, 5700.00, 1900.00, 950.00, '2025-08-06 08:25:05', '2025-08-06 08:25:05');

-- --------------------------------------------------------

--
-- Table structure for table `aircraft_images`
--

CREATE TABLE `aircraft_images` (
  `id` int(11) NOT NULL,
  `aircraftId` int(11) NOT NULL,
  `category` varchar(50) NOT NULL,
  `url` text NOT NULL,
  `publicId` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aircraft_images`
--

INSERT INTO `aircraft_images` (`id`, `aircraftId`, `category`, `url`, `publicId`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752123297/aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/exterior/cojlt2bxrbmpom5fwl7k.webp', 'aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/exterior/cojlt2bxrbmpom5fwl7k', '2025-07-10 04:55:02', '2025-07-10 04:55:02'),
(2, 1, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752123299/aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/interior/zsbvcr1bzrlroocdgu7a.webp', 'aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/interior/zsbvcr1bzrlroocdgu7a', '2025-07-10 04:55:02', '2025-07-10 04:55:02'),
(3, 1, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752123300/aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/cockpit/dr0i6rq8hcnjrqzqmrni.jpg', 'aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/cockpit/dr0i6rq8hcnjrqzqmrni', '2025-07-10 04:55:02', '2025-07-10 04:55:02'),
(4, 1, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752123301/aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/seating/itdwbgtmussibtgfbdtr.webp', 'aircrafts/ac_44f57c7c-7412-41e5-8bea-55cfe9977269/seating/itdwbgtmussibtgfbdtr', '2025-07-10 04:55:02', '2025-07-10 04:55:02'),
(5, 2, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752156932/aircrafts/ac_f8ef8e88-5c6b-4690-8642-0cee097b6f75/exterior/stqajhzqpjygw9jknkak.webp', 'aircrafts/ac_f8ef8e88-5c6b-4690-8642-0cee097b6f75/exterior/stqajhzqpjygw9jknkak', '2025-07-10 08:23:25', '2025-07-10 14:15:33'),
(6, 2, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752135802/aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/interior/g4kzcutqqhzxbdiawlnt.webp', 'aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/interior/g4kzcutqqhzxbdiawlnt', '2025-07-10 08:23:25', '2025-07-10 08:23:25'),
(7, 2, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752135803/aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/cockpit/wrqqlxsjoyj8fbswmf5u.webp', 'aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/cockpit/wrqqlxsjoyj8fbswmf5u', '2025-07-10 08:23:25', '2025-07-10 08:23:25'),
(8, 2, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752135804/aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/seating/uhfve2v6h6mxd4icsvho.webp', 'aircrafts/ac_5f3d877b-8f91-4d97-9c14-205257dc54fa/seating/uhfve2v6h6mxd4icsvho', '2025-07-10 08:23:25', '2025-07-10 08:23:25'),
(9, 3, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752136020/aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/exterior/mtxaws74dp4mijodadil.webp', 'aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/exterior/mtxaws74dp4mijodadil', '2025-07-10 08:27:04', '2025-07-10 08:27:04'),
(10, 3, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752136021/aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/interior/ur5ucaj8ncxxhmj01ysw.webp', 'aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/interior/ur5ucaj8ncxxhmj01ysw', '2025-07-10 08:27:04', '2025-07-10 08:27:04'),
(11, 3, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752136022/aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/cockpit/i5nuyllgto5ryjjaeklx.webp', 'aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/cockpit/i5nuyllgto5ryjjaeklx', '2025-07-10 08:27:04', '2025-07-10 08:27:04'),
(12, 3, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752136023/aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/seating/n3at2jycybkcxixwdmza.webp', 'aircrafts/ac_b5db5cb0-82b2-4e64-b51a-806863d24c19/seating/n3at2jycybkcxixwdmza', '2025-07-10 08:27:04', '2025-07-10 08:27:04'),
(13, 4, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752218309/aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/exterior/lqfbkaorsxkidlaqr6v3.webp', 'aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/exterior/lqfbkaorsxkidlaqr6v3', '2025-07-11 07:18:32', '2025-07-11 07:18:32'),
(14, 4, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752218310/aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/interior/vhqjqmtsqbutufjqgx7c.webp', 'aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/interior/vhqjqmtsqbutufjqgx7c', '2025-07-11 07:18:32', '2025-07-11 07:18:32'),
(15, 4, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752218311/aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/cockpit/l3meqp5gih7nenhuqqio.webp', 'aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/cockpit/l3meqp5gih7nenhuqqio', '2025-07-11 07:18:32', '2025-07-11 07:18:32'),
(16, 4, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752218312/aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/seating/wxabqlq0cgjzqwgcqxox.webp', 'aircrafts/ac_41f47b6e-d731-4288-a4c9-7a29951fcd9c/seating/wxabqlq0cgjzqwgcqxox', '2025-07-11 07:18:32', '2025-07-11 07:18:32'),
(17, 5, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733681/aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/exterior/j7joqfycue7hghzri5ci.webp', 'aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/exterior/j7joqfycue7hghzri5ci', '2025-07-17 06:28:03', '2025-07-17 06:28:03'),
(18, 5, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733681/aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/interior/dcv46nverzfyuoncbhwf.webp', 'aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/interior/dcv46nverzfyuoncbhwf', '2025-07-17 06:28:03', '2025-07-17 06:28:03'),
(19, 5, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733682/aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/cockpit/qste7emwrxuffqlndsy8.webp', 'aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/cockpit/qste7emwrxuffqlndsy8', '2025-07-17 06:28:03', '2025-07-17 06:28:03'),
(20, 5, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733683/aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/seating/lukd3xu7oahb06fwgsco.jpg', 'aircrafts/ac_55e409b8-ccba-4798-a1ee-6e09fdce47fa/seating/lukd3xu7oahb06fwgsco', '2025-07-17 06:28:03', '2025-07-17 06:28:03'),
(21, 6, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733823/aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/exterior/oqf8zt5320j8d5ixbobb.jpg', 'aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/exterior/oqf8zt5320j8d5ixbobb', '2025-07-17 06:30:26', '2025-07-17 06:30:26'),
(22, 6, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733825/aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/interior/h048tialeu7cvzphnelr.webp', 'aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/interior/h048tialeu7cvzphnelr', '2025-07-17 06:30:26', '2025-07-17 06:30:26'),
(23, 6, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733825/aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/cockpit/dmiylas9cipkwp2d4ggx.webp', 'aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/cockpit/dmiylas9cipkwp2d4ggx', '2025-07-17 06:30:26', '2025-07-17 06:30:26'),
(24, 6, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752733826/aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/seating/leonmrfll56xvfleu3eb.webp', 'aircrafts/ac_21a3ee7d-1be1-45e0-80c3-febb173f0274/seating/leonmrfll56xvfleu3eb', '2025-07-17 06:30:26', '2025-07-17 06:30:26'),
(25, 7, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736178/aircrafts/ac_74d667e8-0261-4786-99e5-53f408ddab90/exterior/pvuuhpfmtf2tnyb8tij4.jpg', 'aircrafts/ac_74d667e8-0261-4786-99e5-53f408ddab90/exterior/pvuuhpfmtf2tnyb8tij4', '2025-07-17 07:09:42', '2025-07-17 07:09:42'),
(26, 7, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752766880/aircrafts/ac_b9ef6790-c1f7-4fca-9269-3a8443879c9d/interior/gvz0wpejzrqxm0an03hv.jpg', 'aircrafts/ac_b9ef6790-c1f7-4fca-9269-3a8443879c9d/interior/gvz0wpejzrqxm0an03hv', '2025-07-17 07:09:42', '2025-07-17 15:41:18'),
(27, 7, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752766995/aircrafts/ac_5238b541-c187-4287-abe2-38e949785ef9/cockpit/hoklpucxpyxtzinrifzc.jpg', 'aircrafts/ac_5238b541-c187-4287-abe2-38e949785ef9/cockpit/hoklpucxpyxtzinrifzc', '2025-07-17 07:09:42', '2025-07-17 15:43:14'),
(28, 7, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736181/aircrafts/ac_74d667e8-0261-4786-99e5-53f408ddab90/seating/icygk4djsgyn8khl5ug2.jpg', 'aircrafts/ac_74d667e8-0261-4786-99e5-53f408ddab90/seating/icygk4djsgyn8khl5ug2', '2025-07-17 07:09:42', '2025-07-17 07:09:42'),
(29, 8, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736459/aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/exterior/gkfklvzizmhlquqtok0f.jpg', 'aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/exterior/gkfklvzizmhlquqtok0f', '2025-07-17 07:14:21', '2025-07-17 07:14:21'),
(30, 8, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736460/aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/interior/jqizvyl1ev3hfazmxuca.jpg', 'aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/interior/jqizvyl1ev3hfazmxuca', '2025-07-17 07:14:21', '2025-07-17 07:14:21'),
(31, 8, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736461/aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/cockpit/merau9op3m8wt1drpjii.jpg', 'aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/cockpit/merau9op3m8wt1drpjii', '2025-07-17 07:14:21', '2025-07-17 07:14:21'),
(32, 8, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736461/aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/seating/guinrtrnjl0ela7nzamo.jpg', 'aircrafts/ac_23474aef-fcda-4fd0-9631-6a7790bfd13b/seating/guinrtrnjl0ela7nzamo', '2025-07-17 07:14:21', '2025-07-17 07:14:21'),
(33, 9, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736765/aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/exterior/ldu0zreg1hugy3dru2ys.jpg', 'aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/exterior/ldu0zreg1hugy3dru2ys', '2025-07-17 07:19:28', '2025-07-17 07:19:28'),
(34, 9, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736766/aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/interior/g5izxkgxrfomfpeb2dcp.jpg', 'aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/interior/g5izxkgxrfomfpeb2dcp', '2025-07-17 07:19:28', '2025-07-17 07:19:28'),
(35, 9, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736767/aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/cockpit/unzcjqfnuijt7drsnqhl.jpg', 'aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/cockpit/unzcjqfnuijt7drsnqhl', '2025-07-17 07:19:28', '2025-07-17 07:19:28'),
(36, 9, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752736768/aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/seating/rixhhaa4x1afmiicmvvn.jpg', 'aircrafts/ac_efd48456-35f6-4ca5-879e-fa5a84ad7be9/seating/rixhhaa4x1afmiicmvvn', '2025-07-17 07:19:28', '2025-07-17 07:19:28'),
(37, 10, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752737881/aircrafts/ac_1625af7d-6c8c-4578-acd8-7bdc32b96d4f/exterior/sud2bvhkb0hc45h0ayn1.webp', 'aircrafts/ac_1625af7d-6c8c-4578-acd8-7bdc32b96d4f/exterior/sud2bvhkb0hc45h0ayn1', '2025-07-17 07:34:21', '2025-07-17 07:38:01'),
(38, 10, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752737660/aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/interior/p39rnzrzfjy0u7zhfbtr.jpg', 'aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/interior/p39rnzrzfjy0u7zhfbtr', '2025-07-17 07:34:21', '2025-07-17 07:34:21'),
(39, 10, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752737660/aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/cockpit/xt6fxsqgi1jj047nqy4c.jpg', 'aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/cockpit/xt6fxsqgi1jj047nqy4c', '2025-07-17 07:34:21', '2025-07-17 07:34:21'),
(40, 10, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752737661/aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/seating/p8hesnk1vofkrlcp0mit.jpg', 'aircrafts/ac_be88a1d2-f148-4c2b-b498-d5591f0a5ef5/seating/p8hesnk1vofkrlcp0mit', '2025-07-17 07:34:21', '2025-07-17 07:34:21'),
(41, 11, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752752620/aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/exterior/qwobc6ksdftrvt49hqpt.jpg', 'aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/exterior/qwobc6ksdftrvt49hqpt', '2025-07-17 11:43:43', '2025-07-17 11:43:43'),
(42, 11, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752752621/aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/interior/aiwetrsijqjdnen06n62.jpg', 'aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/interior/aiwetrsijqjdnen06n62', '2025-07-17 11:43:43', '2025-07-17 11:43:43'),
(43, 11, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752752622/aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/cockpit/bme7q59fixi7ok4umwv1.jpg', 'aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/cockpit/bme7q59fixi7ok4umwv1', '2025-07-17 11:43:43', '2025-07-17 11:43:43'),
(44, 11, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752752623/aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/seating/hlqs5fykfgweisns8bx9.jpg', 'aircrafts/ac_12ef86bd-644d-4a9f-931c-0899bba129b0/seating/hlqs5fykfgweisns8bx9', '2025-07-17 11:43:43', '2025-07-17 11:43:43'),
(45, 12, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752767682/aircrafts/ac_1f143276-f586-45fd-9b1b-324e7f59eb0a/exterior/laxufcfzpr1fcwzvkd0i.jpg', 'aircrafts/ac_1f143276-f586-45fd-9b1b-324e7f59eb0a/exterior/laxufcfzpr1fcwzvkd0i', '2025-07-17 15:53:01', '2025-07-17 15:54:41'),
(46, 12, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1752767580/aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/interior/ms26obchzmq568bp3tpt.jpg', 'aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/interior/ms26obchzmq568bp3tpt', '2025-07-17 15:53:01', '2025-07-17 15:53:01'),
(47, 12, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1752767581/aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/cockpit/i0kuetoesne0rgacdblw.jpg', 'aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/cockpit/i0kuetoesne0rgacdblw', '2025-07-17 15:53:01', '2025-07-17 15:53:01'),
(48, 12, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1752767582/aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/seating/krlwi3snnjv3rn0f0kpn.jpg', 'aircrafts/ac_c3be316d-8ac7-42f8-b500-22c2db6f1b84/seating/krlwi3snnjv3rn0f0kpn', '2025-07-17 15:53:01', '2025-07-17 15:53:01'),
(49, 13, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753255763/aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/exterior/pca6dgcmibcjzkfiklha.jpg', 'aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/exterior/pca6dgcmibcjzkfiklha', '2025-07-23 07:29:26', '2025-07-23 07:29:26'),
(50, 13, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753255763/aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/interior/afylfdors5xqamz7nbyh.jpg', 'aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/interior/afylfdors5xqamz7nbyh', '2025-07-23 07:29:26', '2025-07-23 07:29:26'),
(51, 13, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1753255764/aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/cockpit/fnis3ektd05prdacdxhi.jpg', 'aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/cockpit/fnis3ektd05prdacdxhi', '2025-07-23 07:29:26', '2025-07-23 07:29:26'),
(52, 13, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1753255765/aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/seating/jgqkqatkam6suta1g78a.jpg', 'aircrafts/ac_c491ad3b-5387-4ea7-a659-97aa299c6a4e/seating/jgqkqatkam6suta1g78a', '2025-07-23 07:29:26', '2025-07-23 07:29:26'),
(53, 14, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257785/aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/exterior/gmxhl0g4dxfr9dobkiet.jpg', 'aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/exterior/gmxhl0g4dxfr9dobkiet', '2025-07-23 08:03:09', '2025-07-23 08:03:09'),
(54, 14, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257786/aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/interior/qtwb8gf4w6m9zq43gfcx.jpg', 'aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/interior/qtwb8gf4w6m9zq43gfcx', '2025-07-23 08:03:09', '2025-07-23 08:03:09'),
(55, 14, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257787/aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/cockpit/jfpmoundfc9a0kom86ah.jpg', 'aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/cockpit/jfpmoundfc9a0kom86ah', '2025-07-23 08:03:09', '2025-07-23 08:03:09'),
(56, 14, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257788/aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/seating/qfxstx3lvd2v7xjg697h.jpg', 'aircrafts/ac_cc463ef5-1e42-4d94-aa9a-38ff8f4c35de/seating/qfxstx3lvd2v7xjg697h', '2025-07-23 08:03:09', '2025-07-23 08:03:09'),
(57, 15, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343462/aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/exterior/mag4fcpu9tuscffe0ckv.webp', 'aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/exterior/mag4fcpu9tuscffe0ckv', '2025-07-24 07:51:07', '2025-07-24 07:51:07'),
(58, 15, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343464/aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/interior/knjnvd8grxgi5qrkgacx.webp', 'aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/interior/knjnvd8grxgi5qrkgacx', '2025-07-24 07:51:07', '2025-07-24 07:51:07'),
(59, 15, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343465/aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/cockpit/eofr5dhfbjkm6bu3lvdq.webp', 'aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/cockpit/eofr5dhfbjkm6bu3lvdq', '2025-07-24 07:51:07', '2025-07-24 07:51:07'),
(60, 15, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343466/aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/seating/fi9nd3ygrxrku5ingpbo.webp', 'aircrafts/ac_a7781b63-cd50-4238-8894-f5a8c527243e/seating/fi9nd3ygrxrku5ingpbo', '2025-07-24 07:51:07', '2025-07-24 07:51:07'),
(61, 16, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343975/aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/exterior/qhswkk4ss9ocxdkbzsdb.jpg', 'aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/exterior/qhswkk4ss9ocxdkbzsdb', '2025-07-24 07:59:40', '2025-07-24 07:59:40'),
(62, 16, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343976/aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/interior/xnjxiggezsrwvvxllzh2.jpg', 'aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/interior/xnjxiggezsrwvvxllzh2', '2025-07-24 07:59:40', '2025-07-24 07:59:40'),
(63, 16, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343977/aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/cockpit/rrpg5d9g0fzvreto7bhw.jpg', 'aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/cockpit/rrpg5d9g0fzvreto7bhw', '2025-07-24 07:59:40', '2025-07-24 07:59:40'),
(64, 16, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343978/aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/seating/xbclbt1xrjkuyo3k4vgz.jpg', 'aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/seating/xbclbt1xrjkuyo3k4vgz', '2025-07-24 07:59:40', '2025-07-24 07:59:40'),
(65, 17, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754556013/aircrafts/ac_09a40050-9956-409a-90b1-9fc71517dcf5/exterior/qoiczohijyw7ssmztw1c.jpg', 'aircrafts/ac_09a40050-9956-409a-90b1-9fc71517dcf5/exterior/qoiczohijyw7ssmztw1c', '2025-08-07 08:30:36', '2025-08-07 08:40:15'),
(66, 17, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754555940/aircrafts/ac_61ecfd4f-f053-4627-9d7c-3e0b59498181/interior/trsxngg3iztejevtoej4.webp', 'aircrafts/ac_61ecfd4f-f053-4627-9d7c-3e0b59498181/interior/trsxngg3iztejevtoej4', '2025-08-07 08:30:36', '2025-08-07 08:39:02'),
(67, 17, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754555433/aircrafts/ac_85b79952-9100-4b8a-beaa-5cf3d5bf9658/cockpit/as8xz3vbdiiffxgbhurs.webp', 'aircrafts/ac_85b79952-9100-4b8a-beaa-5cf3d5bf9658/cockpit/as8xz3vbdiiffxgbhurs', '2025-08-07 08:30:36', '2025-08-07 08:30:36'),
(68, 17, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754555434/aircrafts/ac_85b79952-9100-4b8a-beaa-5cf3d5bf9658/seating/zjbdngf6sea1qva4t2cb.webp', 'aircrafts/ac_85b79952-9100-4b8a-beaa-5cf3d5bf9658/seating/zjbdngf6sea1qva4t2cb', '2025-08-07 08:30:36', '2025-08-07 08:30:36'),
(69, 18, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754556543/aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/exterior/vns7v8qwuc3w5uiqg5e2.webp', 'aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/exterior/vns7v8qwuc3w5uiqg5e2', '2025-08-07 08:49:09', '2025-08-07 08:49:09'),
(70, 18, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754556544/aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/interior/pqoppn24mnuhjixqg58k.avif', 'aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/interior/pqoppn24mnuhjixqg58k', '2025-08-07 08:49:09', '2025-08-07 08:49:09'),
(71, 18, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754556545/aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/cockpit/wxssz50hqclddm4byozx.webp', 'aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/cockpit/wxssz50hqclddm4byozx', '2025-08-07 08:49:09', '2025-08-07 08:49:09'),
(72, 18, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754556546/aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/seating/nbl95v5ar3msfzqxpyvg.webp', 'aircrafts/ac_6df07b92-2212-4f73-bab0-9d8743fc0320/seating/nbl95v5ar3msfzqxpyvg', '2025-08-07 08:49:09', '2025-08-07 08:49:09'),
(73, 19, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562366/aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/exterior/xk06bp42lxauvtoz3lcl.jpg', 'aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/exterior/xk06bp42lxauvtoz3lcl', '2025-08-07 10:26:11', '2025-08-07 10:26:11'),
(74, 19, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562367/aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/interior/ci2e2cloqkeqx4kqala9.jpg', 'aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/interior/ci2e2cloqkeqx4kqala9', '2025-08-07 10:26:11', '2025-08-07 10:26:11'),
(75, 19, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562368/aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/cockpit/mtv8mjbkdfewpvjbdlup.jpg', 'aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/cockpit/mtv8mjbkdfewpvjbdlup', '2025-08-07 10:26:11', '2025-08-07 10:26:11'),
(76, 19, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562368/aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/seating/ygamurkfmm70jvf73squ.jpg', 'aircrafts/ac_ba53e993-9641-44be-93de-fa7f58cc13f6/seating/ygamurkfmm70jvf73squ', '2025-08-07 10:26:11', '2025-08-07 10:26:11'),
(77, 20, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562525/aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/exterior/dx3fj7kt2ysprqsxurhf.jpg', 'aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/exterior/dx3fj7kt2ysprqsxurhf', '2025-08-07 10:28:50', '2025-08-07 10:28:50'),
(78, 20, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562526/aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/interior/gcxxrzk9n0zppzmlsgz7.jpg', 'aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/interior/gcxxrzk9n0zppzmlsgz7', '2025-08-07 10:28:50', '2025-08-07 10:28:50'),
(79, 20, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562527/aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/cockpit/m0y5j9a2yljtnhkq4xti.jpg', 'aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/cockpit/m0y5j9a2yljtnhkq4xti', '2025-08-07 10:28:50', '2025-08-07 10:28:50'),
(80, 20, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562528/aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/seating/csfzieuggyboh2g2nmzu.jpg', 'aircrafts/ac_a11b50b4-fbba-45d5-baca-443297e5f126/seating/csfzieuggyboh2g2nmzu', '2025-08-07 10:28:50', '2025-08-07 10:28:50'),
(81, 21, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562815/aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/exterior/l02bc3qcajkddevu8ncm.jpg', 'aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/exterior/l02bc3qcajkddevu8ncm', '2025-08-07 10:33:40', '2025-08-07 10:33:40'),
(82, 21, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562815/aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/interior/hgmrqjxgxconh0aseomk.jpg', 'aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/interior/hgmrqjxgxconh0aseomk', '2025-08-07 10:33:40', '2025-08-07 10:33:40'),
(83, 21, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562816/aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/cockpit/jxl1xhxvuazgcwvjbv3y.jpg', 'aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/cockpit/jxl1xhxvuazgcwvjbv3y', '2025-08-07 10:33:40', '2025-08-07 10:33:40'),
(84, 21, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562817/aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/seating/romxcocui1ogrttlj66o.jpg', 'aircrafts/ac_8f91c87e-f80e-45a8-ad29-16982d5d3600/seating/romxcocui1ogrttlj66o', '2025-08-07 10:33:40', '2025-08-07 10:33:40'),
(85, 22, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562974/aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/exterior/vgaksqzmwbulcqhfsese.jpg', 'aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/exterior/vgaksqzmwbulcqhfsese', '2025-08-07 10:36:19', '2025-08-07 10:36:19'),
(86, 22, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562975/aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/interior/egrb4fqsopdf3yekjfm8.jpg', 'aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/interior/egrb4fqsopdf3yekjfm8', '2025-08-07 10:36:19', '2025-08-07 10:36:19'),
(87, 22, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562975/aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/cockpit/lt53qdij16irzwhvstwz.jpg', 'aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/cockpit/lt53qdij16irzwhvstwz', '2025-08-07 10:36:19', '2025-08-07 10:36:19'),
(88, 22, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754562976/aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/seating/avwjdvcqzctypc2v0rmw.jpg', 'aircrafts/ac_67c06ff6-3543-48c2-bca5-25249d32236b/seating/avwjdvcqzctypc2v0rmw', '2025-08-07 10:36:19', '2025-08-07 10:36:19'),
(89, 23, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563548/aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/exterior/ud0nu4srqiziy1gbzjo8.jpg', 'aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/exterior/ud0nu4srqiziy1gbzjo8', '2025-08-07 10:45:52', '2025-08-07 10:45:52'),
(90, 23, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563549/aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/interior/mlbgvhawwfjyvjodtqo9.jpg', 'aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/interior/mlbgvhawwfjyvjodtqo9', '2025-08-07 10:45:52', '2025-08-07 10:45:52'),
(91, 23, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563549/aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/cockpit/n2jf8e3tqgmrjjuouvfn.jpg', 'aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/cockpit/n2jf8e3tqgmrjjuouvfn', '2025-08-07 10:45:52', '2025-08-07 10:45:52'),
(92, 23, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563550/aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/seating/ijszegoxyj5anjdgx7qd.jpg', 'aircrafts/ac_250b8792-7e29-4cf6-a3ed-f14103ee8571/seating/ijszegoxyj5anjdgx7qd', '2025-08-07 10:45:52', '2025-08-07 10:45:52'),
(93, 24, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563837/aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/exterior/u32s8pqllycye1kgm8pm.jpg', 'aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/exterior/u32s8pqllycye1kgm8pm', '2025-08-07 10:50:42', '2025-08-07 10:50:42'),
(94, 24, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563837/aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/interior/w5tcahnsxqutrtuav10b.jpg', 'aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/interior/w5tcahnsxqutrtuav10b', '2025-08-07 10:50:42', '2025-08-07 10:50:42'),
(95, 24, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563838/aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/cockpit/ky66gmdydnbl0nuc1fg5.jpg', 'aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/cockpit/ky66gmdydnbl0nuc1fg5', '2025-08-07 10:50:42', '2025-08-07 10:50:42'),
(96, 24, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754563839/aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/seating/ubi4rp5rbemqzpsmbqq8.jpg', 'aircrafts/ac_313ed918-c36e-4462-bc38-868b31d97dd6/seating/ubi4rp5rbemqzpsmbqq8', '2025-08-07 10:50:42', '2025-08-07 10:50:42'),
(97, 25, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754564234/aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/exterior/rrnok0gtpdane1guv31i.jpg', 'aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/exterior/rrnok0gtpdane1guv31i', '2025-08-07 10:57:18', '2025-08-07 10:57:18'),
(98, 25, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754564234/aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/interior/c1fcrqclnogveawmfxnc.jpg', 'aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/interior/c1fcrqclnogveawmfxnc', '2025-08-07 10:57:18', '2025-08-07 10:57:18'),
(99, 25, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754564235/aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/cockpit/yaccvvmaij1c1nubzmka.jpg', 'aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/cockpit/yaccvvmaij1c1nubzmka', '2025-08-07 10:57:18', '2025-08-07 10:57:18'),
(100, 25, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754564236/aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/seating/gdrp7vymgetdbn1gqa7b.jpg', 'aircrafts/ac_9a458344-c0e1-4f9d-80bb-1260501256f9/seating/gdrp7vymgetdbn1gqa7b', '2025-08-07 10:57:18', '2025-08-07 10:57:18'),
(101, 26, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754568844/aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/exterior/fnnl8cfbnwjlgjtgnesl.jpg', 'aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/exterior/fnnl8cfbnwjlgjtgnesl', '2025-08-07 12:14:09', '2025-08-07 12:14:09'),
(102, 26, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754568845/aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/interior/cteiluwhejn2xbkuxtyu.jpg', 'aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/interior/cteiluwhejn2xbkuxtyu', '2025-08-07 12:14:09', '2025-08-07 12:14:09'),
(103, 26, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754568846/aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/cockpit/f6cptow2wxwdlkziupcv.jpg', 'aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/cockpit/f6cptow2wxwdlkziupcv', '2025-08-07 12:14:09', '2025-08-07 12:14:09'),
(104, 26, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754568847/aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/seating/evyqlblcowtvn9pjg25h.jpg', 'aircrafts/ac_fb13e856-628d-4d3d-98ad-5ae42222b172/seating/evyqlblcowtvn9pjg25h', '2025-08-07 12:14:09', '2025-08-07 12:14:09'),
(105, 27, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754569145/aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/exterior/qh94kugklaaa3f00vuut.jpg', 'aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/exterior/qh94kugklaaa3f00vuut', '2025-08-07 12:19:10', '2025-08-07 12:19:10'),
(106, 27, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754569146/aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/interior/dpww2xsij7c1darcvb0j.jpg', 'aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/interior/dpww2xsij7c1darcvb0j', '2025-08-07 12:19:10', '2025-08-07 12:19:10'),
(107, 27, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754569147/aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/cockpit/blkml8ej56mobrncfxkw.jpg', 'aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/cockpit/blkml8ej56mobrncfxkw', '2025-08-07 12:19:10', '2025-08-07 12:19:10'),
(108, 27, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754569147/aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/seating/tdclivzboya8jh4qdjbl.jpg', 'aircrafts/ac_c116a8bc-43e4-476d-b5d3-9bd6da972b52/seating/tdclivzboya8jh4qdjbl', '2025-08-07 12:19:10', '2025-08-07 12:19:10'),
(109, 28, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754570899/aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/exterior/t592mxdw4ow9slkaqvqg.jpg', 'aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/exterior/t592mxdw4ow9slkaqvqg', '2025-08-07 12:48:24', '2025-08-07 12:48:24'),
(110, 28, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754570900/aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/interior/vp2jvau2p3xiegceatrr.jpg', 'aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/interior/vp2jvau2p3xiegceatrr', '2025-08-07 12:48:24', '2025-08-07 12:48:24'),
(111, 28, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754570901/aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/cockpit/xcoi7a2cabi1ltqe80pj.jpg', 'aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/cockpit/xcoi7a2cabi1ltqe80pj', '2025-08-07 12:48:24', '2025-08-07 12:48:24'),
(112, 28, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754570901/aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/seating/zrdseirfod1spfonm8kx.jpg', 'aircrafts/ac_91d67e3b-0f9e-44f5-a010-05ea145a23b0/seating/zrdseirfod1spfonm8kx', '2025-08-07 12:48:24', '2025-08-07 12:48:24'),
(113, 29, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754571257/aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/exterior/vlqeavglgk9mneazzy06.jpg', 'aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/exterior/vlqeavglgk9mneazzy06', '2025-08-07 12:54:22', '2025-08-07 12:54:22'),
(114, 29, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754571257/aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/interior/cugtt3qqezbkguizsr7c.jpg', 'aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/interior/cugtt3qqezbkguizsr7c', '2025-08-07 12:54:22', '2025-08-07 12:54:22'),
(115, 29, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754571258/aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/cockpit/yr634fvlibihfd78ktaa.jpg', 'aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/cockpit/yr634fvlibihfd78ktaa', '2025-08-07 12:54:22', '2025-08-07 12:54:22'),
(116, 29, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754571259/aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/seating/vx13o60zwiuc9d4axfsf.jpg', 'aircrafts/ac_1286dd48-8237-42d0-9965-24fae337d082/seating/vx13o60zwiuc9d4axfsf', '2025-08-07 12:54:22', '2025-08-07 12:54:22'),
(117, 30, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754572210/aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/exterior/jzdyzatatyp2fp6mkcs7.jpg', 'aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/exterior/jzdyzatatyp2fp6mkcs7', '2025-08-07 13:10:14', '2025-08-07 13:10:14'),
(118, 30, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754572211/aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/interior/ex3pvknfr8cj7qcsbmrp.jpg', 'aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/interior/ex3pvknfr8cj7qcsbmrp', '2025-08-07 13:10:14', '2025-08-07 13:10:14'),
(119, 30, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754572211/aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/cockpit/oe3dty4ucgkulhrqkeps.jpg', 'aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/cockpit/oe3dty4ucgkulhrqkeps', '2025-08-07 13:10:14', '2025-08-07 13:10:14'),
(120, 30, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754572212/aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/seating/hvaasfhxz00gqb4xgs3b.jpg', 'aircrafts/ac_408716dc-aed8-467b-8679-4f9ac3d091d3/seating/hvaasfhxz00gqb4xgs3b', '2025-08-07 13:10:14', '2025-08-07 13:10:14'),
(121, 31, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574539/aircrafts/ac_6c3c3c02-d037-439a-85b1-d5b066320aa6/exterior/pne04b4ud6faii9uhc70.jpg', 'aircrafts/ac_6c3c3c02-d037-439a-85b1-d5b066320aa6/exterior/pne04b4ud6faii9uhc70', '2025-08-07 13:48:16', '2025-08-07 13:49:01'),
(122, 31, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574491/aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/interior/xh14lfocoevwqe6bznmi.jpg', 'aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/interior/xh14lfocoevwqe6bznmi', '2025-08-07 13:48:16', '2025-08-07 13:48:16'),
(123, 31, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574492/aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/cockpit/fqfubwnozxbgekdovto7.jpg', 'aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/cockpit/fqfubwnozxbgekdovto7', '2025-08-07 13:48:16', '2025-08-07 13:48:16'),
(124, 31, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574493/aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/seating/zzrcca8eskim3ok4hsy6.jpg', 'aircrafts/ac_64506ad0-956d-4ce6-bdfd-21844135d327/seating/zzrcca8eskim3ok4hsy6', '2025-08-07 13:48:16', '2025-08-07 13:48:16'),
(125, 32, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574974/aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/exterior/ooedb1r9ib3n7nkbtz7r.jpg', 'aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/exterior/ooedb1r9ib3n7nkbtz7r', '2025-08-07 13:53:44', '2025-08-07 13:56:18'),
(126, 32, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574975/aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/interior/db2bxqn5xftf1lko28m2.jpg', 'aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/interior/db2bxqn5xftf1lko28m2', '2025-08-07 13:53:44', '2025-08-07 13:56:18'),
(127, 32, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574819/aircrafts/ac_8ad3554e-63d2-4d9c-a073-816aebe02bfe/cockpit/i3rxrvfjil7korava2yv.jpg', 'aircrafts/ac_8ad3554e-63d2-4d9c-a073-816aebe02bfe/cockpit/i3rxrvfjil7korava2yv', '2025-08-07 13:53:44', '2025-08-07 13:53:44'),
(128, 32, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754574976/aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/seating/pm5gdguqxjyxhddlbgjb.jpg', 'aircrafts/ac_c5652539-8434-44d5-8f49-7b17f37abf3c/seating/pm5gdguqxjyxhddlbgjb', '2025-08-07 13:53:44', '2025-08-07 13:56:18'),
(129, 33, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576052/aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/exterior/dmtpcfbyfbf3nl9miubg.jpg', 'aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/exterior/dmtpcfbyfbf3nl9miubg', '2025-08-07 14:14:17', '2025-08-07 14:14:17'),
(130, 33, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576053/aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/interior/evm0stfklt8oudglvrqp.jpg', 'aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/interior/evm0stfklt8oudglvrqp', '2025-08-07 14:14:17', '2025-08-07 14:14:17'),
(131, 33, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576054/aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/cockpit/x8ev5r1vgp2eiky2zyc8.jpg', 'aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/cockpit/x8ev5r1vgp2eiky2zyc8', '2025-08-07 14:14:17', '2025-08-07 14:14:17'),
(132, 33, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576055/aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/seating/ge1gopttpp88wjkhbfc5.jpg', 'aircrafts/ac_e72741b6-31d7-495d-98a1-bc2fa1a8d84f/seating/ge1gopttpp88wjkhbfc5', '2025-08-07 14:14:17', '2025-08-07 14:14:17'),
(133, 34, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576444/aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/exterior/lgjilj15ljybjzewlfyh.webp', 'aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/exterior/lgjilj15ljybjzewlfyh', '2025-08-07 14:20:49', '2025-08-07 14:20:49'),
(134, 34, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576444/aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/interior/nyki6xmnlg9baerig3ut.jpg', 'aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/interior/nyki6xmnlg9baerig3ut', '2025-08-07 14:20:49', '2025-08-07 14:20:49'),
(135, 34, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576445/aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/cockpit/fixbe7dgsha2thstongh.jpg', 'aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/cockpit/fixbe7dgsha2thstongh', '2025-08-07 14:20:49', '2025-08-07 14:20:49'),
(136, 34, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754576446/aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/seating/ejssqx0hgag3oxziga7h.jpg', 'aircrafts/ac_af1e001c-eb31-4158-8002-94740c34577a/seating/ejssqx0hgag3oxziga7h', '2025-08-07 14:20:49', '2025-08-07 14:20:49'),
(137, 35, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754625039/aircrafts/ac_721c8768-073e-48b1-b3de-0b54c2bb59c1/exterior/ecxmom2zferkgkjrusuf.jpg', 'aircrafts/ac_721c8768-073e-48b1-b3de-0b54c2bb59c1/exterior/ecxmom2zferkgkjrusuf', '2025-08-08 03:40:24', '2025-08-08 03:50:40'),
(138, 35, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754624420/aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/interior/scjigip6gxtjvaygxhw9.jpg', 'aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/interior/scjigip6gxtjvaygxhw9', '2025-08-08 03:40:24', '2025-08-08 03:40:24'),
(139, 35, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754624421/aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/cockpit/gekpnlbds9lea81lswbj.jpg', 'aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/cockpit/gekpnlbds9lea81lswbj', '2025-08-08 03:40:24', '2025-08-08 03:40:24'),
(140, 35, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754624421/aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/seating/qcqwabmw5z8lec5cyous.jpg', 'aircrafts/ac_ebad5970-d07b-4b40-81c6-0011fe6cce5c/seating/qcqwabmw5z8lec5cyous', '2025-08-08 03:40:24', '2025-08-08 03:40:24'),
(141, 36, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754636439/aircrafts/ac_cd7c323c-4e39-49bc-b601-d1be41c94d67/exterior/ayo0yvkvds35wwjz1tzb.jpg', 'aircrafts/ac_cd7c323c-4e39-49bc-b601-d1be41c94d67/exterior/ayo0yvkvds35wwjz1tzb', '2025-08-08 03:45:26', '2025-08-08 07:00:41'),
(142, 36, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754636365/aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/interior/gxxzxi2cro4mqjkqoswy.jpg', 'aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/interior/gxxzxi2cro4mqjkqoswy', '2025-08-08 03:45:26', '2025-08-08 06:59:29'),
(143, 36, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754636366/aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/cockpit/o5gvkgzltdtlaeocebiv.jpg', 'aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/cockpit/o5gvkgzltdtlaeocebiv', '2025-08-08 03:45:26', '2025-08-08 06:59:29'),
(144, 36, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754636367/aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/seating/bnywi9yarmluph5pdzpf.jpg', 'aircrafts/ac_bf804770-9df0-45a4-9b29-fa6944518496/seating/bnywi9yarmluph5pdzpf', '2025-08-08 03:45:26', '2025-08-08 06:59:29'),
(145, 37, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637511/aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/exterior/yomf9fiuf1pljcpnjfei.webp', 'aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/exterior/yomf9fiuf1pljcpnjfei', '2025-08-08 07:18:37', '2025-08-08 07:18:37'),
(146, 37, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637513/aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/interior/ocvapyqmibtrd8nnxs3c.jpg', 'aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/interior/ocvapyqmibtrd8nnxs3c', '2025-08-08 07:18:37', '2025-08-08 07:18:37'),
(147, 37, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637514/aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/cockpit/ejsdkz72y8bvfxunjfhd.jpg', 'aircrafts/ac_2588756f-c2f6-436c-a50f-16419395f217/cockpit/ejsdkz72y8bvfxunjfhd', '2025-08-08 07:18:37', '2025-08-08 07:18:37'),
(148, 37, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637962/aircrafts/ac_8535b397-405d-46ea-8834-b8ed3265d54d/seating/gffbdtutry1tftr9h9m2.jpg', 'aircrafts/ac_8535b397-405d-46ea-8834-b8ed3265d54d/seating/gffbdtutry1tftr9h9m2', '2025-08-08 07:18:37', '2025-08-08 07:26:04'),
(149, 38, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637942/aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/exterior/frdxh2gmynfhekyvvmkq.jpg', 'aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/exterior/frdxh2gmynfhekyvvmkq', '2025-08-08 07:25:47', '2025-08-08 07:25:47'),
(150, 38, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637943/aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/interior/xnsmln0ovfsigo6ayi7e.jpg', 'aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/interior/xnsmln0ovfsigo6ayi7e', '2025-08-08 07:25:47', '2025-08-08 07:25:47'),
(151, 38, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637944/aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/cockpit/qabrpzrc4ziekzh1esr7.jpg', 'aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/cockpit/qabrpzrc4ziekzh1esr7', '2025-08-08 07:25:47', '2025-08-08 07:25:47'),
(152, 38, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754637944/aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/seating/x8zx7akofizkyglkumbk.jpg', 'aircrafts/ac_59e0d471-f489-4704-a63d-a1e72ad018bd/seating/x8zx7akofizkyglkumbk', '2025-08-08 07:25:47', '2025-08-08 07:25:47'),
(153, 39, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754638840/aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/exterior/qntwialzth5p5a8halaf.jpg', 'aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/exterior/qntwialzth5p5a8halaf', '2025-08-08 07:40:44', '2025-08-08 07:40:44'),
(154, 39, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754638840/aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/interior/xnziwpqdx0ace4a0sfyr.jpg', 'aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/interior/xnziwpqdx0ace4a0sfyr', '2025-08-08 07:40:44', '2025-08-08 07:40:44'),
(155, 39, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754638841/aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/cockpit/wqtrb17byoldka3l0tqa.jpg', 'aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/cockpit/wqtrb17byoldka3l0tqa', '2025-08-08 07:40:44', '2025-08-08 07:40:44'),
(156, 39, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754638841/aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/seating/th5xy4zvh06oe7spwwxa.jpg', 'aircrafts/ac_b1691a7c-7bea-49f8-9c3b-5d9656bf8f95/seating/th5xy4zvh06oe7spwwxa', '2025-08-08 07:40:44', '2025-08-08 07:40:44'),
(157, 40, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754641752/aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/exterior/kfu6p0rfy25g5kw9keqg.jpg', 'aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/exterior/kfu6p0rfy25g5kw9keqg', '2025-08-08 08:29:17', '2025-08-08 08:29:17'),
(158, 40, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754641753/aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/interior/xmns5rh5w5who5tqlyqs.webp', 'aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/interior/xmns5rh5w5who5tqlyqs', '2025-08-08 08:29:17', '2025-08-08 08:29:17'),
(159, 40, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754641754/aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/cockpit/qq7fuxw3q08vrkrrpgjy.jpg', 'aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/cockpit/qq7fuxw3q08vrkrrpgjy', '2025-08-08 08:29:17', '2025-08-08 08:29:17'),
(160, 40, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754641755/aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/seating/j02hzxfm0dlldjrhgrsl.webp', 'aircrafts/ac_ad839ae0-d19c-488a-9e95-ad363423119a/seating/j02hzxfm0dlldjrhgrsl', '2025-08-08 08:29:17', '2025-08-08 08:29:17'),
(161, 41, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642138/aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/exterior/uikbjfgyuk6kbl3m5nol.jpg', 'aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/exterior/uikbjfgyuk6kbl3m5nol', '2025-08-08 08:35:43', '2025-08-08 08:35:43'),
(162, 41, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642139/aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/interior/hktlgf51f4ljsxeln8dr.jpg', 'aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/interior/hktlgf51f4ljsxeln8dr', '2025-08-08 08:35:43', '2025-08-08 08:35:43'),
(163, 41, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642140/aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/cockpit/k8jkn0d527micy616ufu.jpg', 'aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/cockpit/k8jkn0d527micy616ufu', '2025-08-08 08:35:43', '2025-08-08 08:35:43'),
(164, 41, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642140/aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/seating/wkw49cmbmj4tu2c5r5jc.webp', 'aircrafts/ac_83073454-7c4b-4a07-b083-197a13d8ddc8/seating/wkw49cmbmj4tu2c5r5jc', '2025-08-08 08:35:43', '2025-08-08 08:35:43'),
(165, 42, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642388/aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/exterior/gcqruexsxc7kihxwtgyd.jpg', 'aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/exterior/gcqruexsxc7kihxwtgyd', '2025-08-08 08:39:52', '2025-08-08 08:39:52'),
(166, 42, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642388/aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/interior/g7cp1o5casu3bpajebgx.jpg', 'aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/interior/g7cp1o5casu3bpajebgx', '2025-08-08 08:39:52', '2025-08-08 08:39:52');
INSERT INTO `aircraft_images` (`id`, `aircraftId`, `category`, `url`, `publicId`, `createdAt`, `updatedAt`) VALUES
(167, 42, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642389/aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/cockpit/ucsokeuhnoqvpqueamgm.jpg', 'aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/cockpit/ucsokeuhnoqvpqueamgm', '2025-08-08 08:39:52', '2025-08-08 08:39:52'),
(168, 42, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642390/aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/seating/nzodf2r0xczvo12tmppy.png', 'aircrafts/ac_0272b771-dea6-4533-92ed-0cf42e84ad53/seating/nzodf2r0xczvo12tmppy', '2025-08-08 08:39:52', '2025-08-08 08:39:52'),
(169, 43, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642656/aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/exterior/ts9jwppsumgrtu9mmphb.jpg', 'aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/exterior/ts9jwppsumgrtu9mmphb', '2025-08-08 08:44:21', '2025-08-08 08:44:21'),
(170, 43, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642657/aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/interior/fftg6ldpsxqrodenehkb.jpg', 'aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/interior/fftg6ldpsxqrodenehkb', '2025-08-08 08:44:21', '2025-08-08 08:44:21'),
(171, 43, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642658/aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/cockpit/hzy3kg1kxcbtfo8elbf6.jpg', 'aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/cockpit/hzy3kg1kxcbtfo8elbf6', '2025-08-08 08:44:21', '2025-08-08 08:44:21'),
(172, 43, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754642659/aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/seating/qmfxwbe9yl2oyhjqgv70.jpg', 'aircrafts/ac_b4b163f4-c7a1-469f-adc5-af5ae0be45f1/seating/qmfxwbe9yl2oyhjqgv70', '2025-08-08 08:44:21', '2025-08-08 08:44:21'),
(173, 44, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643038/aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/exterior/gtflgceurautmtndnutb.jpg', 'aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/exterior/gtflgceurautmtndnutb', '2025-08-08 08:50:43', '2025-08-08 08:50:43'),
(174, 44, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643039/aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/interior/dvhmpymgnqeshe0v9xkg.jpg', 'aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/interior/dvhmpymgnqeshe0v9xkg', '2025-08-08 08:50:43', '2025-08-08 08:50:43'),
(175, 44, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643040/aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/cockpit/weauax8x7s3xbnanzboc.jpg', 'aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/cockpit/weauax8x7s3xbnanzboc', '2025-08-08 08:50:43', '2025-08-08 08:50:43'),
(176, 44, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643041/aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/seating/sa6uh4bacjc97pixblmt.jpg', 'aircrafts/ac_62854d13-c2df-4f83-b769-57d724cb0b6e/seating/sa6uh4bacjc97pixblmt', '2025-08-08 08:50:43', '2025-08-08 08:50:43'),
(177, 45, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643178/aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/exterior/cfkx9zwi4tf5y8nwwwuy.jpg', 'aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/exterior/cfkx9zwi4tf5y8nwwwuy', '2025-08-08 08:53:03', '2025-08-08 08:53:03'),
(178, 45, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643178/aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/interior/hls0ybschkruouxxolmf.jpg', 'aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/interior/hls0ybschkruouxxolmf', '2025-08-08 08:53:03', '2025-08-08 08:53:03'),
(179, 45, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643179/aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/cockpit/q3mxyuh0cpescdcper0x.jpg', 'aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/cockpit/q3mxyuh0cpescdcper0x', '2025-08-08 08:53:03', '2025-08-08 08:53:03'),
(180, 45, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643181/aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/seating/f0qw4c1venesfqidypna.jpg', 'aircrafts/ac_3bcc0162-1f42-417d-966e-17e42b1ab7c9/seating/f0qw4c1venesfqidypna', '2025-08-08 08:53:03', '2025-08-08 08:53:03'),
(181, 46, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643327/aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/exterior/kt8mi4gaicvk574e820w.jpg', 'aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/exterior/kt8mi4gaicvk574e820w', '2025-08-08 08:55:31', '2025-08-08 08:55:31'),
(182, 46, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643327/aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/interior/vnv9obv46gjaezww32ac.jpg', 'aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/interior/vnv9obv46gjaezww32ac', '2025-08-08 08:55:31', '2025-08-08 08:55:31'),
(183, 46, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643328/aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/cockpit/hsyh9u7mizxrpn0fljm9.jpg', 'aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/cockpit/hsyh9u7mizxrpn0fljm9', '2025-08-08 08:55:31', '2025-08-08 08:55:31'),
(184, 46, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754643329/aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/seating/bc7wrhzbplsy4a6mlvfj.jpg', 'aircrafts/ac_a0601580-886e-4830-b8a1-a4c48f679eaa/seating/bc7wrhzbplsy4a6mlvfj', '2025-08-08 08:55:31', '2025-08-08 08:55:31'),
(185, 47, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754646328/aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/exterior/lwnateictybkuxje0u1v.jpg', 'aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/exterior/lwnateictybkuxje0u1v', '2025-08-08 09:45:32', '2025-08-08 09:45:32'),
(186, 47, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754646329/aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/interior/iref12vtvhiyaeemdnsy.jpg', 'aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/interior/iref12vtvhiyaeemdnsy', '2025-08-08 09:45:32', '2025-08-08 09:45:32'),
(187, 47, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754646329/aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/cockpit/elcfekxdigiudaawpfqt.jpg', 'aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/cockpit/elcfekxdigiudaawpfqt', '2025-08-08 09:45:32', '2025-08-08 09:45:32'),
(188, 47, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754646330/aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/seating/umhrnm9q4habtkea9wsk.jpg', 'aircrafts/ac_eeb66b68-1c23-4152-8a91-1db02da54835/seating/umhrnm9q4habtkea9wsk', '2025-08-08 09:45:32', '2025-08-08 09:45:32'),
(189, 48, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649330/aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/exterior/oh522fwwksyb37ho18gf.jpg', 'aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/exterior/oh522fwwksyb37ho18gf', '2025-08-08 10:35:35', '2025-08-08 10:35:35'),
(190, 48, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649331/aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/interior/wayzqg2xdwfq3c6fwbkg.jpg', 'aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/interior/wayzqg2xdwfq3c6fwbkg', '2025-08-08 10:35:35', '2025-08-08 10:35:35'),
(191, 48, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649332/aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/cockpit/fftrvw5mea4snulipntb.jpg', 'aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/cockpit/fftrvw5mea4snulipntb', '2025-08-08 10:35:35', '2025-08-08 10:35:35'),
(192, 48, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649333/aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/seating/zvlmnvdvdwlgik4itwuq.jpg', 'aircrafts/ac_b28d74bb-cf2e-4a90-9159-83375ce9ad69/seating/zvlmnvdvdwlgik4itwuq', '2025-08-08 10:35:35', '2025-08-08 10:35:35'),
(193, 49, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652079/aircrafts/ac_2cc2d5ee-48cf-4e69-a532-504fda707fe8/exterior/yek27lgly5wetpkctszc.jpg', 'aircrafts/ac_2cc2d5ee-48cf-4e69-a532-504fda707fe8/exterior/yek27lgly5wetpkctszc', '2025-08-08 10:41:58', '2025-08-08 11:21:21'),
(194, 49, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649713/aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/interior/svuf1rwbji726byyvpyl.jpg', 'aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/interior/svuf1rwbji726byyvpyl', '2025-08-08 10:41:58', '2025-08-08 10:41:58'),
(195, 49, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649714/aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/cockpit/jqanr9f10qsicydlffci.jpg', 'aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/cockpit/jqanr9f10qsicydlffci', '2025-08-08 10:41:58', '2025-08-08 10:41:58'),
(196, 49, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754649715/aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/seating/whyggl3u0r6o1aqekb0b.jpg', 'aircrafts/ac_60044b84-023e-40b6-8528-e6f5e8a13e30/seating/whyggl3u0r6o1aqekb0b', '2025-08-08 10:41:58', '2025-08-08 10:41:58'),
(197, 50, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754651833/aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/exterior/nuuxhrbhvltswspbp8xa.jpg', 'aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/exterior/nuuxhrbhvltswspbp8xa', '2025-08-08 11:17:18', '2025-08-08 11:17:18'),
(198, 50, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754651834/aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/interior/r6senj0xvp9cpceshnmq.jpg', 'aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/interior/r6senj0xvp9cpceshnmq', '2025-08-08 11:17:18', '2025-08-08 11:17:18'),
(199, 50, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754651835/aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/cockpit/nvqjugquorq6buy6af5h.jpg', 'aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/cockpit/nvqjugquorq6buy6af5h', '2025-08-08 11:17:18', '2025-08-08 11:17:18'),
(200, 50, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754651836/aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/seating/gxfbgb48bypkrtd9nlxt.jpg', 'aircrafts/ac_80a0e829-1024-49f8-bd65-5523a261f156/seating/gxfbgb48bypkrtd9nlxt', '2025-08-08 11:17:18', '2025-08-08 11:17:18'),
(201, 51, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652030/aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/exterior/rvj6vsqcrwsluck6420n.jpg', 'aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/exterior/rvj6vsqcrwsluck6420n', '2025-08-08 11:20:35', '2025-08-08 11:20:35'),
(202, 51, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652031/aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/interior/zvdkdfoceequllhyedze.jpg', 'aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/interior/zvdkdfoceequllhyedze', '2025-08-08 11:20:35', '2025-08-08 11:20:35'),
(203, 51, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652032/aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/cockpit/epilqdxemyk6pvudzeao.jpg', 'aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/cockpit/epilqdxemyk6pvudzeao', '2025-08-08 11:20:35', '2025-08-08 11:20:35'),
(204, 51, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652032/aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/seating/satcdcxh9f19ha6fn7o8.jpg', 'aircrafts/ac_b4d5d507-f6ae-4430-972b-fa5ec244dc12/seating/satcdcxh9f19ha6fn7o8', '2025-08-08 11:20:35', '2025-08-08 11:20:35'),
(205, 52, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652708/aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/exterior/zycdntklfc6z1bogfixi.jpg', 'aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/exterior/zycdntklfc6z1bogfixi', '2025-08-08 11:31:53', '2025-08-08 11:31:53'),
(206, 52, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652709/aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/interior/zehdowu6cjucqroqvrwe.jpg', 'aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/interior/zehdowu6cjucqroqvrwe', '2025-08-08 11:31:53', '2025-08-08 11:31:53'),
(207, 52, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652709/aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/cockpit/i1ier27e1ykshvx83kkm.jpg', 'aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/cockpit/i1ier27e1ykshvx83kkm', '2025-08-08 11:31:53', '2025-08-08 11:31:53'),
(208, 52, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652710/aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/seating/p6gkveytmii1lkd2y3w2.jpg', 'aircrafts/ac_a48948ac-d6ea-4727-9a4b-2ad6204d4549/seating/p6gkveytmii1lkd2y3w2', '2025-08-08 11:31:53', '2025-08-08 11:31:53'),
(209, 53, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754653717/aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/exterior/dobba0chggiajplbfp3d.jpg', 'aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/exterior/dobba0chggiajplbfp3d', '2025-08-08 11:48:42', '2025-08-08 11:48:42'),
(210, 53, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754653718/aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/interior/fzbbfdazs3sgthsvchll.jpg', 'aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/interior/fzbbfdazs3sgthsvchll', '2025-08-08 11:48:42', '2025-08-08 11:48:42'),
(211, 53, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754653719/aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/cockpit/c6s2jmvqdrbrfg02zwsn.jpg', 'aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/cockpit/c6s2jmvqdrbrfg02zwsn', '2025-08-08 11:48:42', '2025-08-08 11:48:42'),
(212, 53, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754653720/aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/seating/b3ohgmyli4zq1x8ovfih.jpg', 'aircrafts/ac_76008814-47b9-4b83-ba75-b6291b832a5f/seating/b3ohgmyli4zq1x8ovfih', '2025-08-08 11:48:42', '2025-08-08 11:48:42'),
(213, 54, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654000/aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/exterior/si5flqclmr89xifadec8.jpg', 'aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/exterior/si5flqclmr89xifadec8', '2025-08-08 11:53:25', '2025-08-08 11:53:25'),
(214, 54, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654001/aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/interior/bdaa567sfkzgdyzh4rbl.jpg', 'aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/interior/bdaa567sfkzgdyzh4rbl', '2025-08-08 11:53:25', '2025-08-08 11:53:25'),
(215, 54, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654002/aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/cockpit/k1chxqczenl2ydqghjln.jpg', 'aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/cockpit/k1chxqczenl2ydqghjln', '2025-08-08 11:53:25', '2025-08-08 11:53:25'),
(216, 54, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654002/aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/seating/i0ynryr0vbvhcwnk9tsn.jpg', 'aircrafts/ac_553c8bf1-b58e-486c-8e19-fd5a4337385e/seating/i0ynryr0vbvhcwnk9tsn', '2025-08-08 11:53:25', '2025-08-08 11:53:25'),
(217, 55, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654237/aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/exterior/t2nfgabmdjybbhnonwjt.jpg', 'aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/exterior/t2nfgabmdjybbhnonwjt', '2025-08-08 11:57:22', '2025-08-08 11:57:22'),
(218, 55, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654238/aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/interior/kgf20ahuhkpjpdv9z1gg.jpg', 'aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/interior/kgf20ahuhkpjpdv9z1gg', '2025-08-08 11:57:22', '2025-08-08 11:57:22'),
(219, 55, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654238/aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/cockpit/ymf7dtdgbu57ziazl9hb.jpg', 'aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/cockpit/ymf7dtdgbu57ziazl9hb', '2025-08-08 11:57:22', '2025-08-08 11:57:22'),
(220, 55, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654239/aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/seating/k01unjke81a2ukmpftbf.jpg', 'aircrafts/ac_d588643f-c00c-4972-8313-6fda09afe4cc/seating/k01unjke81a2ukmpftbf', '2025-08-08 11:57:22', '2025-08-08 11:57:22'),
(221, 56, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896074/aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/exterior/txvbr5fdtmxlfmj1vacr.jpg', 'aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/exterior/txvbr5fdtmxlfmj1vacr', '2025-08-11 07:07:58', '2025-08-11 07:07:58'),
(222, 56, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896074/aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/interior/g9gdrvursogi2wol77en.jpg', 'aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/interior/g9gdrvursogi2wol77en', '2025-08-11 07:07:58', '2025-08-11 07:07:58'),
(223, 56, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896075/aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/cockpit/z7ojiel8dnhv0asbgda5.jpg', 'aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/cockpit/z7ojiel8dnhv0asbgda5', '2025-08-11 07:07:58', '2025-08-11 07:07:58'),
(224, 56, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896076/aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/seating/k9gltmug6jtpavxxs0g0.jpg', 'aircrafts/ac_08124a62-1f3e-4a1d-a2a1-687aefd16040/seating/k9gltmug6jtpavxxs0g0', '2025-08-11 07:07:58', '2025-08-11 07:07:58'),
(225, 57, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896534/aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/exterior/zeamqys5i3pcimtg514d.jpg', 'aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/exterior/zeamqys5i3pcimtg514d', '2025-08-11 07:15:39', '2025-08-11 07:15:39'),
(226, 57, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896535/aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/interior/q8xozkyqltrt066xylrl.jpg', 'aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/interior/q8xozkyqltrt066xylrl', '2025-08-11 07:15:39', '2025-08-11 07:15:39'),
(227, 57, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896536/aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/cockpit/jfor6gsh5kjqkeb0yjmm.jpg', 'aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/cockpit/jfor6gsh5kjqkeb0yjmm', '2025-08-11 07:15:39', '2025-08-11 07:15:39'),
(228, 57, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896536/aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/seating/gu7rrtzpl98rmko88u1r.jpg', 'aircrafts/ac_99d2e662-3354-4f3c-a0a9-6b5a4befde9e/seating/gu7rrtzpl98rmko88u1r', '2025-08-11 07:15:39', '2025-08-11 07:15:39'),
(229, 58, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896829/aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/exterior/lhz0ueidvt2e0ixjzr1s.jpg', 'aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/exterior/lhz0ueidvt2e0ixjzr1s', '2025-08-11 07:20:33', '2025-08-11 07:20:33'),
(230, 58, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896829/aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/interior/r6iivvgqczkwqhdqkurh.jpg', 'aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/interior/r6iivvgqczkwqhdqkurh', '2025-08-11 07:20:33', '2025-08-11 07:20:33'),
(231, 58, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896830/aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/cockpit/vjwnguwlxrriorak66al.jpg', 'aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/cockpit/vjwnguwlxrriorak66al', '2025-08-11 07:20:33', '2025-08-11 07:20:33'),
(232, 58, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754896831/aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/seating/kfpkj34yqkjaqpuhfocq.jpg', 'aircrafts/ac_b8c2dcbb-e1aa-4d24-8588-8c35768e2227/seating/kfpkj34yqkjaqpuhfocq', '2025-08-11 07:20:33', '2025-08-11 07:20:33'),
(233, 59, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897415/aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/exterior/ctivhvef84nryul5tqzp.jpg', 'aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/exterior/ctivhvef84nryul5tqzp', '2025-08-11 07:30:20', '2025-08-11 07:30:20'),
(234, 59, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897416/aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/interior/mbplvesaxvy7hwujgmgc.jpg', 'aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/interior/mbplvesaxvy7hwujgmgc', '2025-08-11 07:30:20', '2025-08-11 07:30:20'),
(235, 59, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897417/aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/cockpit/n5ahhvjyoumfpvdiyonv.jpg', 'aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/cockpit/n5ahhvjyoumfpvdiyonv', '2025-08-11 07:30:20', '2025-08-11 07:30:20'),
(236, 59, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897418/aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/seating/v8bvrbcftnhyyxruhwdk.jpg', 'aircrafts/ac_e7dda771-7863-4ca2-926a-ecbe521ca0ea/seating/v8bvrbcftnhyyxruhwdk', '2025-08-11 07:30:20', '2025-08-11 07:30:20'),
(237, 60, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897642/aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/exterior/c2vqnkswnzeuhfmchjux.jpg', 'aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/exterior/c2vqnkswnzeuhfmchjux', '2025-08-11 07:34:07', '2025-08-11 07:34:07'),
(238, 60, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897643/aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/interior/ehyzimfcvtiixfape80u.jpg', 'aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/interior/ehyzimfcvtiixfape80u', '2025-08-11 07:34:07', '2025-08-11 07:34:07'),
(239, 60, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897643/aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/cockpit/unedwo4ystwgk6jxcra7.jpg', 'aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/cockpit/unedwo4ystwgk6jxcra7', '2025-08-11 07:34:07', '2025-08-11 07:34:07'),
(240, 60, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897644/aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/seating/v7uwkrjb2bqvjbq69w7y.jpg', 'aircrafts/ac_060972a1-5470-4b07-a297-09d9c763a4bd/seating/v7uwkrjb2bqvjbq69w7y', '2025-08-11 07:34:07', '2025-08-11 07:34:07'),
(241, 61, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754902366/aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/exterior/nkp3uw8jnodbzmonatty.jpg', 'aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/exterior/nkp3uw8jnodbzmonatty', '2025-08-11 08:52:51', '2025-08-11 08:52:51'),
(242, 61, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754902367/aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/interior/kt8lndgugdfulzcabviz.jpg', 'aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/interior/kt8lndgugdfulzcabviz', '2025-08-11 08:52:51', '2025-08-11 08:52:51'),
(243, 61, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754902368/aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/cockpit/dw1lqrcwftkqi1yvk3l4.jpg', 'aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/cockpit/dw1lqrcwftkqi1yvk3l4', '2025-08-11 08:52:51', '2025-08-11 08:52:51'),
(244, 61, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754902369/aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/seating/ud9fljqy8lbkljpttena.jpg', 'aircrafts/ac_bbcab83b-413a-45e6-aa1b-9c834b6cc603/seating/ud9fljqy8lbkljpttena', '2025-08-11 08:52:51', '2025-08-11 08:52:51'),
(245, 62, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754908234/aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/exterior/ameeakf0qyetznlev3ep.webp', 'aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/exterior/ameeakf0qyetznlev3ep', '2025-08-11 10:30:46', '2025-08-11 10:30:46'),
(246, 62, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754908237/aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/interior/kkvv9mp1uvj3qukcpejg.jpg', 'aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/interior/kkvv9mp1uvj3qukcpejg', '2025-08-11 10:30:46', '2025-08-11 10:30:46'),
(247, 62, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754908240/aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/cockpit/pv4nvsfw5ue9egsyp6yj.webp', 'aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/cockpit/pv4nvsfw5ue9egsyp6yj', '2025-08-11 10:30:46', '2025-08-11 10:30:46'),
(248, 62, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754908245/aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/seating/aktvc7umpneku2wtxbdu.webp', 'aircrafts/ac_58e66e2c-9ab2-4e59-8da5-604aed0dfaaa/seating/aktvc7umpneku2wtxbdu', '2025-08-11 10:30:46', '2025-08-11 10:30:46'),
(249, 63, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754910980/aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/exterior/n8i2hsovzajevj5szirf.jpg', 'aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/exterior/n8i2hsovzajevj5szirf', '2025-08-11 11:16:25', '2025-08-11 11:16:25'),
(250, 63, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754910981/aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/interior/tqlmnxcrekscyqorgj6n.jpg', 'aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/interior/tqlmnxcrekscyqorgj6n', '2025-08-11 11:16:25', '2025-08-11 11:16:25'),
(251, 63, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754910982/aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/cockpit/ndi37rker8imjikwirza.jpg', 'aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/cockpit/ndi37rker8imjikwirza', '2025-08-11 11:16:25', '2025-08-11 11:16:25'),
(252, 63, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754910982/aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/seating/o6pyv14ggfg0lrncendm.jpg', 'aircrafts/ac_a8aea7bb-d662-4a69-8ee2-dc15d4dd1a1c/seating/o6pyv14ggfg0lrncendm', '2025-08-11 11:16:25', '2025-08-11 11:16:25'),
(253, 64, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913525/aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/exterior/lnhkssmiaefnknwudkmh.jpg', 'aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/exterior/lnhkssmiaefnknwudkmh', '2025-08-11 11:58:50', '2025-08-11 11:58:50'),
(254, 64, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913526/aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/interior/bujypte55ibudovkgyey.jpg', 'aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/interior/bujypte55ibudovkgyey', '2025-08-11 11:58:50', '2025-08-11 11:58:50'),
(255, 64, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913526/aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/cockpit/gjorcvftvxg6smuw88om.jpg', 'aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/cockpit/gjorcvftvxg6smuw88om', '2025-08-11 11:58:50', '2025-08-11 11:58:50'),
(256, 64, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913527/aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/seating/xna9l2j8txsrydgzrkwa.jpg', 'aircrafts/ac_dabbc43b-4ffe-4d8a-ba15-ac6b6d37a32d/seating/xna9l2j8txsrydgzrkwa', '2025-08-11 11:58:50', '2025-08-11 11:58:50'),
(257, 65, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913743/aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/exterior/fqlitpsdxs7mh5lmoube.jpg', 'aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/exterior/fqlitpsdxs7mh5lmoube', '2025-08-11 12:02:28', '2025-08-11 12:02:28'),
(258, 65, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913744/aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/interior/brqlyjpwudrbyl7pw1wj.jpg', 'aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/interior/brqlyjpwudrbyl7pw1wj', '2025-08-11 12:02:28', '2025-08-11 12:02:28'),
(259, 65, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913745/aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/cockpit/p8h2tqez4tfz0hvoauaw.jpg', 'aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/cockpit/p8h2tqez4tfz0hvoauaw', '2025-08-11 12:02:28', '2025-08-11 12:02:28'),
(260, 65, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913746/aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/seating/iggvzwimt6rizgb0gtyv.jpg', 'aircrafts/ac_d6475d02-c98f-46e2-8792-7553f129df93/seating/iggvzwimt6rizgb0gtyv', '2025-08-11 12:02:28', '2025-08-11 12:02:28'),
(261, 66, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913957/aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/exterior/des2asgwftvxhjcccidg.jpg', 'aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/exterior/des2asgwftvxhjcccidg', '2025-08-11 12:06:02', '2025-08-11 12:06:02'),
(262, 66, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913958/aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/interior/bkadeivtfvh0xezsdl2c.jpg', 'aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/interior/bkadeivtfvh0xezsdl2c', '2025-08-11 12:06:02', '2025-08-11 12:06:02'),
(263, 66, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913958/aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/cockpit/l2efplqspxcdmzgmgd1h.jpg', 'aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/cockpit/l2efplqspxcdmzgmgd1h', '2025-08-11 12:06:02', '2025-08-11 12:06:02'),
(264, 66, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754913959/aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/seating/x9rtck6en5t1i6mvbl2j.jpg', 'aircrafts/ac_18737571-f7b1-4996-9484-e95e0a744329/seating/x9rtck6en5t1i6mvbl2j', '2025-08-11 12:06:02', '2025-08-11 12:06:02'),
(265, 67, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920085/aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/exterior/gz2d1gmdgcpoxmabjzja.jpg', 'aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/exterior/gz2d1gmdgcpoxmabjzja', '2025-08-11 13:48:13', '2025-08-11 13:48:13'),
(266, 67, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920087/aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/interior/tvbvw8wsiqvofxtpoeqt.jpg', 'aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/interior/tvbvw8wsiqvofxtpoeqt', '2025-08-11 13:48:13', '2025-08-11 13:48:13'),
(267, 67, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920088/aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/cockpit/uufarhoikau7rhaorvg1.jpg', 'aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/cockpit/uufarhoikau7rhaorvg1', '2025-08-11 13:48:13', '2025-08-11 13:48:13'),
(268, 67, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920089/aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/seating/k4fd2xw0j8zd7fo54fjq.jpg', 'aircrafts/ac_17a1a3b7-29fc-43d8-8b28-d04b514003fe/seating/k4fd2xw0j8zd7fo54fjq', '2025-08-11 13:48:13', '2025-08-11 13:48:13'),
(269, 68, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920365/aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/exterior/krv8nnipmkbht3lqkbui.jpg', 'aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/exterior/krv8nnipmkbht3lqkbui', '2025-08-11 13:52:50', '2025-08-11 13:52:50'),
(270, 68, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920366/aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/interior/ym9bzalyn229hfp9y1mn.jpg', 'aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/interior/ym9bzalyn229hfp9y1mn', '2025-08-11 13:52:50', '2025-08-11 13:52:50'),
(271, 68, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920366/aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/cockpit/vcqkb4sxuun1r30bl4ug.jpg', 'aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/cockpit/vcqkb4sxuun1r30bl4ug', '2025-08-11 13:52:50', '2025-08-11 13:52:50'),
(272, 68, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754920367/aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/seating/bfh6glegxddb4nm5tuz6.jpg', 'aircrafts/ac_43e7ec18-3130-4686-b253-c4fcd91f0278/seating/bfh6glegxddb4nm5tuz6', '2025-08-11 13:52:50', '2025-08-11 13:52:50'),
(273, 69, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993416/aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/exterior/z6xpwjzmpu7uogqvaktl.jpg', 'aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/exterior/z6xpwjzmpu7uogqvaktl', '2025-08-12 10:10:21', '2025-08-12 10:10:21'),
(274, 69, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993417/aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/interior/t89ejswvtlnrhg7cdx8w.jpg', 'aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/interior/t89ejswvtlnrhg7cdx8w', '2025-08-12 10:10:21', '2025-08-12 10:10:21'),
(275, 69, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993418/aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/cockpit/cvomurleeuagh2gjkd9k.jpg', 'aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/cockpit/cvomurleeuagh2gjkd9k', '2025-08-12 10:10:21', '2025-08-12 10:10:21'),
(276, 69, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993418/aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/seating/cc90to4zdwb73qsxgwlp.jpg', 'aircrafts/ac_897fc929-cb25-458a-80cd-9e71226e183c/seating/cc90to4zdwb73qsxgwlp', '2025-08-12 10:10:21', '2025-08-12 10:10:21'),
(277, 70, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993699/aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/exterior/zjvy50syny8lwf44qi6h.jpg', 'aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/exterior/zjvy50syny8lwf44qi6h', '2025-08-12 10:15:06', '2025-08-12 10:15:06'),
(278, 70, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993701/aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/interior/fyc0iwq19psn9ykrostn.jpg', 'aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/interior/fyc0iwq19psn9ykrostn', '2025-08-12 10:15:06', '2025-08-12 10:15:06'),
(279, 70, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993702/aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/cockpit/cfxdokvizmb6ipnt57z3.jpg', 'aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/cockpit/cfxdokvizmb6ipnt57z3', '2025-08-12 10:15:06', '2025-08-12 10:15:06'),
(280, 70, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993703/aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/seating/pqss77ckzfbpzkvlnfjs.jpg', 'aircrafts/ac_6773dbae-e84a-4730-b696-3170602f94a5/seating/pqss77ckzfbpzkvlnfjs', '2025-08-12 10:15:06', '2025-08-12 10:15:06'),
(281, 71, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993985/aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/exterior/zt00jpt97qgacuy1ezeq.jpg', 'aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/exterior/zt00jpt97qgacuy1ezeq', '2025-08-12 10:19:50', '2025-08-12 10:19:50'),
(282, 71, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993986/aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/interior/scwi7qgrercfwnl2dt4a.jpg', 'aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/interior/scwi7qgrercfwnl2dt4a', '2025-08-12 10:19:50', '2025-08-12 10:19:50'),
(283, 71, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993987/aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/cockpit/go2hku5tl6qus63jzzqx.jpg', 'aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/cockpit/go2hku5tl6qus63jzzqx', '2025-08-12 10:19:50', '2025-08-12 10:19:50'),
(284, 71, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993987/aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/seating/mkqcbtdexxcnr2uxgx2w.jpg', 'aircrafts/ac_b857c6ea-cd9d-488f-ac58-c3c948854dc9/seating/mkqcbtdexxcnr2uxgx2w', '2025-08-12 10:19:50', '2025-08-12 10:19:50'),
(285, 72, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994256/aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/exterior/wbx0fvzop5edgsoabqzh.jpg', 'aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/exterior/wbx0fvzop5edgsoabqzh', '2025-08-12 10:24:21', '2025-08-12 10:24:21'),
(286, 72, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994257/aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/interior/pelxqty6pfxbvyelsxgb.jpg', 'aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/interior/pelxqty6pfxbvyelsxgb', '2025-08-12 10:24:21', '2025-08-12 10:24:21'),
(287, 72, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994258/aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/cockpit/e7x4kavgxaaykavy0ggq.jpg', 'aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/cockpit/e7x4kavgxaaykavy0ggq', '2025-08-12 10:24:21', '2025-08-12 10:24:21'),
(288, 72, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994259/aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/seating/vp3etg9nw3d7srhrvyc0.jpg', 'aircrafts/ac_3ed94698-e27c-450d-85a2-3c37afabd832/seating/vp3etg9nw3d7srhrvyc0', '2025-08-12 10:24:21', '2025-08-12 10:24:21'),
(289, 73, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994486/aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/exterior/iogblyhtu9gj0gmbttxc.jpg', 'aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/exterior/iogblyhtu9gj0gmbttxc', '2025-08-12 10:28:14', '2025-08-12 10:28:14'),
(290, 73, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994488/aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/interior/aoajoxszyxuamm4zunhh.jpg', 'aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/interior/aoajoxszyxuamm4zunhh', '2025-08-12 10:28:14', '2025-08-12 10:28:14'),
(291, 73, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994489/aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/cockpit/mwupecf8eafxebbx5evq.jpg', 'aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/cockpit/mwupecf8eafxebbx5evq', '2025-08-12 10:28:14', '2025-08-12 10:28:14'),
(292, 73, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994490/aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/seating/v2zkqvhbekjlhkyps6po.jpg', 'aircrafts/ac_a79fd61e-a8db-43a0-8ff8-e187a17d201b/seating/v2zkqvhbekjlhkyps6po', '2025-08-12 10:28:14', '2025-08-12 10:28:14'),
(293, 74, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994741/aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/exterior/babcke0l0fmlfny9bnh5.jpg', 'aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/exterior/babcke0l0fmlfny9bnh5', '2025-08-12 10:32:25', '2025-08-12 10:32:25'),
(294, 74, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994741/aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/interior/l423v2koxhms0zchrl7j.jpg', 'aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/interior/l423v2koxhms0zchrl7j', '2025-08-12 10:32:25', '2025-08-12 10:32:25'),
(295, 74, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994742/aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/cockpit/qgzln4doa1qjna45zumd.jpg', 'aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/cockpit/qgzln4doa1qjna45zumd', '2025-08-12 10:32:25', '2025-08-12 10:32:25'),
(296, 74, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754994743/aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/seating/jmdnkmdyhgdtkutghcu3.jpg', 'aircrafts/ac_d975bcda-275f-4cfb-982f-862abebc2a6b/seating/jmdnkmdyhgdtkutghcu3', '2025-08-12 10:32:25', '2025-08-12 10:32:25'),
(297, 75, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754999315/aircrafts/ac_11303792-9749-49b5-8a01-c07a1549fd4b/exterior/k7zlctibq5ksk8aqh8yl.jpg', 'aircrafts/ac_11303792-9749-49b5-8a01-c07a1549fd4b/exterior/k7zlctibq5ksk8aqh8yl', '2025-08-12 11:48:21', '2025-08-12 11:48:37'),
(298, 75, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1754999386/aircrafts/ac_d6edf3a4-37fb-47bb-9e8c-035fddfd485d/interior/wrt07tym2x3esoj7xscv.jpg', 'aircrafts/ac_d6edf3a4-37fb-47bb-9e8c-035fddfd485d/interior/wrt07tym2x3esoj7xscv', '2025-08-12 11:48:21', '2025-08-12 11:49:48'),
(299, 75, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1754999298/aircrafts/ac_599db14d-3721-4979-9edb-2214dfebb6f2/cockpit/llwaufgdweuuyddnn7kw.jpg', 'aircrafts/ac_599db14d-3721-4979-9edb-2214dfebb6f2/cockpit/llwaufgdweuuyddnn7kw', '2025-08-12 11:48:21', '2025-08-12 11:48:21'),
(300, 75, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1754999298/aircrafts/ac_599db14d-3721-4979-9edb-2214dfebb6f2/seating/erbsc1qnqww4mdoipxun.jpg', 'aircrafts/ac_599db14d-3721-4979-9edb-2214dfebb6f2/seating/erbsc1qnqww4mdoipxun', '2025-08-12 11:48:21', '2025-08-12 11:48:21'),
(301, 76, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085193/aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/exterior/zspgr4lwzfggdrjlnwgw.jpg', 'aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/exterior/zspgr4lwzfggdrjlnwgw', '2025-08-13 11:40:01', '2025-08-13 11:40:01'),
(302, 76, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085194/aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/interior/d7lg2l7dqhj8aiset5gm.jpg', 'aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/interior/d7lg2l7dqhj8aiset5gm', '2025-08-13 11:40:01', '2025-08-13 11:40:01'),
(303, 76, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085195/aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/cockpit/u2paoyzurpqy9dfscnmd.jpg', 'aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/cockpit/u2paoyzurpqy9dfscnmd', '2025-08-13 11:40:01', '2025-08-13 11:40:01'),
(304, 76, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085198/aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/seating/uqovtsgapfgwyqjgeyoj.jpg', 'aircrafts/ac_1b92b6e5-7be2-4d01-99b6-ed53d3aa89f8/seating/uqovtsgapfgwyqjgeyoj', '2025-08-13 11:40:01', '2025-08-13 11:40:01'),
(305, 77, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085396/aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/exterior/r9iodb2mvqmnvykreiww.jpg', 'aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/exterior/r9iodb2mvqmnvykreiww', '2025-08-13 11:43:21', '2025-08-13 11:43:21'),
(306, 77, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085397/aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/interior/bxaflxzep5zqjq9nr0bl.jpg', 'aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/interior/bxaflxzep5zqjq9nr0bl', '2025-08-13 11:43:21', '2025-08-13 11:43:21'),
(307, 77, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085398/aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/cockpit/amnu5fqoneuretfd4nav.jpg', 'aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/cockpit/amnu5fqoneuretfd4nav', '2025-08-13 11:43:21', '2025-08-13 11:43:21'),
(308, 77, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085399/aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/seating/iz1hfy3wktxqlxfwimd2.jpg', 'aircrafts/ac_136c9973-d4c5-4766-bb29-31bafae9ee8f/seating/iz1hfy3wktxqlxfwimd2', '2025-08-13 11:43:21', '2025-08-13 11:43:21'),
(309, 78, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085721/aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/exterior/h8tztoou6ppcsjtz34dj.jpg', 'aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/exterior/h8tztoou6ppcsjtz34dj', '2025-08-13 11:48:46', '2025-08-13 11:48:46'),
(310, 78, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085722/aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/interior/scpvz7e1cnrgafv9qka8.jpg', 'aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/interior/scpvz7e1cnrgafv9qka8', '2025-08-13 11:48:46', '2025-08-13 11:48:46'),
(311, 78, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085722/aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/cockpit/tihahdqmnmsrwcp1rt3j.jpg', 'aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/cockpit/tihahdqmnmsrwcp1rt3j', '2025-08-13 11:48:46', '2025-08-13 11:48:46'),
(312, 78, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755085723/aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/seating/lytrnqxaif9mv8rmkoqf.jpg', 'aircrafts/ac_9dfa404e-012e-425a-9032-07884af93bc1/seating/lytrnqxaif9mv8rmkoqf', '2025-08-13 11:48:46', '2025-08-13 11:48:46'),
(313, 79, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087072/aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/exterior/epy8ir3jwbteqkzardn4.jpg', 'aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/exterior/epy8ir3jwbteqkzardn4', '2025-08-13 12:11:17', '2025-08-13 12:11:17'),
(314, 79, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087073/aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/interior/urw2wtcgcenuuwyka760.jpg', 'aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/interior/urw2wtcgcenuuwyka760', '2025-08-13 12:11:17', '2025-08-13 12:11:17'),
(315, 79, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087074/aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/cockpit/dn6q7a16rnhi51pz9trn.jpg', 'aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/cockpit/dn6q7a16rnhi51pz9trn', '2025-08-13 12:11:17', '2025-08-13 12:11:17'),
(316, 79, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087075/aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/seating/jyrd7wvm8i6szxbubzax.jpg', 'aircrafts/ac_a21fbe3d-7280-40f4-8e68-a2bb7db3f0ea/seating/jyrd7wvm8i6szxbubzax', '2025-08-13 12:11:17', '2025-08-13 12:11:17'),
(317, 80, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087280/aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/exterior/phh9jwgk8hovdgy6xz4v.jpg', 'aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/exterior/phh9jwgk8hovdgy6xz4v', '2025-08-13 12:14:45', '2025-08-13 12:14:45'),
(318, 80, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087280/aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/interior/ctqcwtng5wr1yoeahauu.jpg', 'aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/interior/ctqcwtng5wr1yoeahauu', '2025-08-13 12:14:45', '2025-08-13 12:14:45'),
(319, 80, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087281/aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/cockpit/ugj7osu3v1ongyx231ew.jpg', 'aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/cockpit/ugj7osu3v1ongyx231ew', '2025-08-13 12:14:45', '2025-08-13 12:14:45'),
(320, 80, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087282/aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/seating/uttiahwwbg0cqaqaaywp.jpg', 'aircrafts/ac_03928fd9-8a8c-4223-b3f8-17fe795f858d/seating/uttiahwwbg0cqaqaaywp', '2025-08-13 12:14:45', '2025-08-13 12:14:45'),
(321, 81, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087429/aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/exterior/bmdp5ou4nfpoiifc6y6i.jpg', 'aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/exterior/bmdp5ou4nfpoiifc6y6i', '2025-08-13 12:17:14', '2025-08-13 12:17:14'),
(322, 81, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087430/aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/interior/bdtqftyuogquptf4phvz.jpg', 'aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/interior/bdtqftyuogquptf4phvz', '2025-08-13 12:17:14', '2025-08-13 12:17:14'),
(323, 81, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087430/aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/cockpit/cxrmoexb5zdvnixgixlk.jpg', 'aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/cockpit/cxrmoexb5zdvnixgixlk', '2025-08-13 12:17:14', '2025-08-13 12:17:14'),
(324, 81, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755087431/aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/seating/yjfru5g8ftaqvsuvtiiq.jpg', 'aircrafts/ac_84c5a5db-c5f9-4124-b435-8def53d9b05e/seating/yjfru5g8ftaqvsuvtiiq', '2025-08-13 12:17:14', '2025-08-13 12:17:14'),
(325, 82, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157440/aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/exterior/jzldxnlgfsnewkd0axpr.jpg', 'aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/exterior/jzldxnlgfsnewkd0axpr', '2025-08-14 07:44:06', '2025-08-14 07:44:06'),
(326, 82, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157441/aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/interior/zkcuyhpbpegtnlskorv4.jpg', 'aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/interior/zkcuyhpbpegtnlskorv4', '2025-08-14 07:44:06', '2025-08-14 07:44:06'),
(327, 82, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157442/aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/cockpit/xyk5oo9lc0akm2m5h6ai.jpg', 'aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/cockpit/xyk5oo9lc0akm2m5h6ai', '2025-08-14 07:44:06', '2025-08-14 07:44:06'),
(328, 82, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157443/aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/seating/kfnllans6a7rfzmvdzzi.png', 'aircrafts/ac_db8ccdb4-3689-4543-8ec8-82acb24491f5/seating/kfnllans6a7rfzmvdzzi', '2025-08-14 07:44:06', '2025-08-14 07:44:06'),
(329, 83, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157690/aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/exterior/cbtufawffokp7xaubwah.jpg', 'aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/exterior/cbtufawffokp7xaubwah', '2025-08-14 07:48:16', '2025-08-14 07:48:16'),
(330, 83, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157692/aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/interior/gwlugo8pnpbi5k5o459p.jpg', 'aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/interior/gwlugo8pnpbi5k5o459p', '2025-08-14 07:48:16', '2025-08-14 07:48:16'),
(331, 83, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157692/aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/cockpit/cgp6gjptzzezyv66ln1i.jpg', 'aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/cockpit/cgp6gjptzzezyv66ln1i', '2025-08-14 07:48:16', '2025-08-14 07:48:16'),
(332, 83, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157693/aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/seating/faalvoue4hefm5zrdjz4.jpg', 'aircrafts/ac_4f2b0613-d6bb-469a-a6cb-84b7fdfc6a02/seating/faalvoue4hefm5zrdjz4', '2025-08-14 07:48:16', '2025-08-14 07:48:16');
INSERT INTO `aircraft_images` (`id`, `aircraftId`, `category`, `url`, `publicId`, `createdAt`, `updatedAt`) VALUES
(333, 84, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157893/aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/exterior/d7b9w6o4kjdqz2ling7m.jpg', 'aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/exterior/d7b9w6o4kjdqz2ling7m', '2025-08-14 07:51:38', '2025-08-14 07:51:38'),
(334, 84, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157893/aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/interior/pv2asuyyd6m5npf1a2s1.jpg', 'aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/interior/pv2asuyyd6m5npf1a2s1', '2025-08-14 07:51:38', '2025-08-14 07:51:38'),
(335, 84, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157894/aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/cockpit/rmghmx1upljkecwpa7ga.jpg', 'aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/cockpit/rmghmx1upljkecwpa7ga', '2025-08-14 07:51:38', '2025-08-14 07:51:38'),
(336, 84, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755157895/aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/seating/ufvlc95njrjiqwcopqzn.jpg', 'aircrafts/ac_670a9ee9-d59f-45ff-a63b-ffbfeb8cda2e/seating/ufvlc95njrjiqwcopqzn', '2025-08-14 07:51:38', '2025-08-14 07:51:38'),
(337, 85, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755158178/aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/exterior/tunkvjkxkot6e4cnm22w.jpg', 'aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/exterior/tunkvjkxkot6e4cnm22w', '2025-08-14 07:56:22', '2025-08-14 07:56:22'),
(338, 85, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755158178/aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/interior/sw9kutpjzias1dkct6h3.jpg', 'aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/interior/sw9kutpjzias1dkct6h3', '2025-08-14 07:56:22', '2025-08-14 07:56:22'),
(339, 85, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755158179/aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/cockpit/ydk2rbipsogddm4lztip.jpg', 'aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/cockpit/ydk2rbipsogddm4lztip', '2025-08-14 07:56:22', '2025-08-14 07:56:22'),
(340, 85, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755158180/aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/seating/ewzlcdpsrxk20y76xqtn.jpg', 'aircrafts/ac_bfbfce84-b34e-4159-8af7-08a803fdd38d/seating/ewzlcdpsrxk20y76xqtn', '2025-08-14 07:56:22', '2025-08-14 07:56:22'),
(341, 86, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159652/aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/exterior/b6ffjfkmbil1fbbvjrjh.webp', 'aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/exterior/b6ffjfkmbil1fbbvjrjh', '2025-08-14 08:20:56', '2025-08-14 08:20:56'),
(342, 86, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159652/aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/interior/idkfiw1netudmyxqkwbp.webp', 'aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/interior/idkfiw1netudmyxqkwbp', '2025-08-14 08:20:56', '2025-08-14 08:20:56'),
(343, 86, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159653/aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/cockpit/u7yzc2tjhlstela4qwxm.webp', 'aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/cockpit/u7yzc2tjhlstela4qwxm', '2025-08-14 08:20:56', '2025-08-14 08:20:56'),
(344, 86, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159654/aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/seating/hhrpmzkxdmfjy9z0mnc5.webp', 'aircrafts/ac_f3485c9f-090e-466a-b3c1-25b939f4d6cb/seating/hhrpmzkxdmfjy9z0mnc5', '2025-08-14 08:20:56', '2025-08-14 08:20:56'),
(345, 87, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159933/aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/exterior/xy8yux12ppkv5lil10jd.jpg', 'aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/exterior/xy8yux12ppkv5lil10jd', '2025-08-14 08:25:45', '2025-08-14 08:25:45'),
(346, 87, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159933/aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/interior/y70og7d8apbn2wois1fu.jpg', 'aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/interior/y70og7d8apbn2wois1fu', '2025-08-14 08:25:45', '2025-08-14 08:25:45'),
(347, 87, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159938/aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/cockpit/l72o8nb7rj9wb7lmvg7y.jpg', 'aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/cockpit/l72o8nb7rj9wb7lmvg7y', '2025-08-14 08:25:45', '2025-08-14 08:25:45'),
(348, 87, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755159940/aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/seating/g3bpt16er9wvamrh708n.jpg', 'aircrafts/ac_8775bc44-eb15-42a8-b20a-0581f7b9de31/seating/g3bpt16er9wvamrh708n', '2025-08-14 08:25:45', '2025-08-14 08:25:45'),
(349, 88, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160117/aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/exterior/pkljmkxuc5nvb9vc53wb.webp', 'aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/exterior/pkljmkxuc5nvb9vc53wb', '2025-08-14 08:28:44', '2025-08-14 08:28:44'),
(350, 88, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160118/aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/interior/ovvgs5mmhsttztqnjv8d.webp', 'aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/interior/ovvgs5mmhsttztqnjv8d', '2025-08-14 08:28:44', '2025-08-14 08:28:44'),
(351, 88, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160119/aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/cockpit/h9u8emtbfefm0zcpjxsv.webp', 'aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/cockpit/h9u8emtbfefm0zcpjxsv', '2025-08-14 08:28:44', '2025-08-14 08:28:44'),
(352, 88, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160121/aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/seating/qtp9l3nm3tyo4qxa0p0j.webp', 'aircrafts/ac_6de7285b-3c94-4a9a-b536-2e3a3e1c6ca4/seating/qtp9l3nm3tyo4qxa0p0j', '2025-08-14 08:28:44', '2025-08-14 08:28:44'),
(353, 89, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160649/aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/exterior/pwu46yziu9m8gy4dcsp4.jpg', 'aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/exterior/pwu46yziu9m8gy4dcsp4', '2025-08-14 08:37:36', '2025-08-14 08:37:36'),
(354, 89, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160650/aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/interior/jouzojha4ecxdcuhpw0i.jpg', 'aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/interior/jouzojha4ecxdcuhpw0i', '2025-08-14 08:37:36', '2025-08-14 08:37:36'),
(355, 89, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160651/aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/cockpit/vquaehreavhqpix1swyb.jpg', 'aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/cockpit/vquaehreavhqpix1swyb', '2025-08-14 08:37:36', '2025-08-14 08:37:36'),
(356, 89, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160652/aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/seating/y9rancnahb5vvfjk0xbc.jpg', 'aircrafts/ac_f1c91e5c-cdd6-4f01-91fc-2ec8be60e1ed/seating/y9rancnahb5vvfjk0xbc', '2025-08-14 08:37:36', '2025-08-14 08:37:36'),
(357, 90, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755160998/aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/exterior/uljbomynmuycku6hlt8u.jpg', 'aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/exterior/uljbomynmuycku6hlt8u', '2025-08-14 08:43:24', '2025-08-14 08:43:24'),
(358, 90, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161000/aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/interior/lmlswytebcrwlumj6owj.jpg', 'aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/interior/lmlswytebcrwlumj6owj', '2025-08-14 08:43:24', '2025-08-14 08:43:24'),
(359, 90, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161001/aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/cockpit/aa0uvvzvmxkz98cgbrcs.jpg', 'aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/cockpit/aa0uvvzvmxkz98cgbrcs', '2025-08-14 08:43:24', '2025-08-14 08:43:24'),
(360, 90, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161002/aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/seating/as9jcyj1u8k3qceyersx.jpg', 'aircrafts/ac_9e4f10bb-d81c-4ff9-a094-c9301ce2d950/seating/as9jcyj1u8k3qceyersx', '2025-08-14 08:43:24', '2025-08-14 08:43:24'),
(361, 91, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161245/aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/exterior/qxg6vyecvpc6cl8efdil.webp', 'aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/exterior/qxg6vyecvpc6cl8efdil', '2025-08-14 08:47:31', '2025-08-14 08:47:31'),
(362, 91, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161246/aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/interior/q3crlpovu0ollzvvjfqq.jpg', 'aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/interior/q3crlpovu0ollzvvjfqq', '2025-08-14 08:47:31', '2025-08-14 08:47:31'),
(363, 91, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161247/aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/cockpit/givgdymcxhqvmpw7kjv2.webp', 'aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/cockpit/givgdymcxhqvmpw7kjv2', '2025-08-14 08:47:31', '2025-08-14 08:47:31'),
(364, 91, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755161248/aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/seating/re3ympfg2lehppk9sbp3.jpg', 'aircrafts/ac_552e9fad-4879-4841-8e55-bfd513fce8ef/seating/re3ympfg2lehppk9sbp3', '2025-08-14 08:47:31', '2025-08-14 08:47:31'),
(365, 92, 'exterior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755164680/aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/exterior/ltt9lskhymef54y5k79d.webp', 'aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/exterior/ltt9lskhymef54y5k79d', '2025-08-14 09:44:45', '2025-08-14 09:44:45'),
(366, 92, 'interior', 'https://res.cloudinary.com/otienobryan/image/upload/v1755164681/aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/interior/di6b8joejr5604egyiy1.webp', 'aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/interior/di6b8joejr5604egyiy1', '2025-08-14 09:44:45', '2025-08-14 09:44:45'),
(367, 92, 'cockpit', 'https://res.cloudinary.com/otienobryan/image/upload/v1755164682/aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/cockpit/peh38wb0obrppbnv6cv8.webp', 'aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/cockpit/peh38wb0obrppbnv6cv8', '2025-08-14 09:44:45', '2025-08-14 09:44:45'),
(368, 92, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1755164682/aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/seating/pypron9r9jfjuyp4vhjt.webp', 'aircrafts/ac_fe6bf6a9-2cfe-4760-88a3-621eb3455a0b/seating/pypron9r9jfjuyp4vhjt', '2025-08-14 09:44:45', '2025-08-14 09:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `aircraft_type_image_placeholders`
--

CREATE TABLE `aircraft_type_image_placeholders` (
  `id` int(11) NOT NULL,
  `type` enum('helicopter','fixedWing','jet','glider','seaplane','ultralight','balloon','tiltrotor','gyroplane','airship') NOT NULL,
  `placeholderImageUrl` varchar(255) NOT NULL COMMENT 'Full URL to the placeholder image',
  `placeholderImagePublicId` varchar(255) NOT NULL COMMENT 'Cloud storage public ID (e.g., Cloudinary public_id)',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aircraft_type_image_placeholders`
--

INSERT INTO `aircraft_type_image_placeholders` (`id`, `type`, `placeholderImageUrl`, `placeholderImagePublicId`, `createdAt`, `updatedAt`) VALUES
(3, 'helicopter', 'https://res.cloudinary.com/otienobryan/image/upload/v1754914607/aircraft_type_placeholders/vsu9xkg9xez01jepenhy.webp', 'aircraft_type_placeholders/vsu9xkg9xez01jepenhy', '2025-08-10 00:27:39', '2025-08-11 12:16:48'),
(4, 'fixedWing', 'https://res.cloudinary.com/otienobryan/image/upload/v1754917424/aircraft_type_placeholders/vmb7dw5riiogrrqztsgs.png', 'aircraft_type_placeholders/vmb7dw5riiogrrqztsgs', '2025-08-10 00:34:04', '2025-08-11 13:03:52'),
(5, 'jet', 'https://res.cloudinary.com/otienobryan/image/upload/v1754916890/aircraft_type_placeholders/blznleu2e2ckcexxxqr5.jpg', 'aircraft_type_placeholders/blznleu2e2ckcexxxqr5', '2025-08-10 00:39:11', '2025-08-11 12:54:50'),
(6, 'seaplane', 'https://res.cloudinary.com/otienobryan/image/upload/v1754918547/aircraft_type_placeholders/u25bl1uraoutcm2odsxx.jpg', 'aircraft_type_placeholders/u25bl1uraoutcm2odsxx', '2025-08-10 00:46:39', '2025-08-11 13:22:28'),
(7, 'balloon', 'https://res.cloudinary.com/otienobryan/image/upload/v1754787153/aircraft_type_placeholders/vx2oprqzkxottln3ivrp.webp', 'aircraft_type_placeholders/vx2oprqzkxottln3ivrp', '2025-08-10 00:52:33', '2025-08-10 00:52:33'),
(8, 'airship', 'https://res.cloudinary.com/otienobryan/image/upload/v1754787361/aircraft_type_placeholders/dqjypkv3icgc4kykvhfe.webp', 'aircraft_type_placeholders/dqjypkv3icgc4kykvhfe', '2025-08-10 00:56:01', '2025-08-10 00:56:01'),
(9, 'gyroplane', 'https://res.cloudinary.com/otienobryan/image/upload/v1754787532/aircraft_type_placeholders/o5tyfim4wztfdhdaz5ci.webp', 'aircraft_type_placeholders/o5tyfim4wztfdhdaz5ci', '2025-08-10 00:58:53', '2025-08-10 00:58:53'),
(10, 'tiltrotor', 'https://res.cloudinary.com/otienobryan/image/upload/v1754787699/aircraft_type_placeholders/laiw8nw2c0nwi7ypt1kh.webp', 'aircraft_type_placeholders/laiw8nw2c0nwi7ypt1kh', '2025-08-10 01:01:40', '2025-08-10 01:01:40');

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `name`) VALUES
(16, '360° Views'),
(22, 'Bartender Service'),
(4, 'Bluetooth Audio'),
(14, 'Cabin Storage'),
(6, 'Climate Control'),
(24, 'Concierge Service'),
(5, 'Entertainment System'),
(12, 'Galley/Kitchen'),
(23, 'Gourmet Dining'),
(11, 'Lavatory'),
(10, 'Legroom+ (Extra Space)'),
(19, 'Lie-Flat Seats'),
(15, 'Noise-Cancelling Headsets'),
(21, 'Onboard Shower'),
(2, 'Power Outlets'),
(20, 'Private Suite'),
(17, 'Quick Boarding'),
(7, 'Reading Lights'),
(9, 'Reclining Seats'),
(18, 'Sightseeing Windows'),
(13, 'Standing Room'),
(3, 'USB Charging Ports'),
(1, 'WiFi'),
(8, 'Window Shades');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `dealId` int(11) NOT NULL,
  `company_id` int(10) NOT NULL,
  `totalPrice` decimal(10,2) NOT NULL,
  `onboardDining` tinyint(1) DEFAULT 0,
  `groundTransportation` tinyint(1) DEFAULT 0,
  `billingRegion` varchar(100) DEFAULT NULL,
  `paymentMethod` enum('card','mpesa','wallet') DEFAULT NULL,
  `bookingStatus` enum('pending','confirmed','cancelled','completed') NOT NULL DEFAULT 'pending',
  `paymentStatus` enum('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending',
  `referenceNumber` varchar(50) NOT NULL,
  `paymentTransactionId` varchar(255) DEFAULT NULL,
  `loyalty_points_earned` int(11) DEFAULT 0,
  `loyalty_points_redeemed` int(11) DEFAULT 0,
  `wallet_amount_used` decimal(10,2) DEFAULT 0.00,
  `specialRequirements` text DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `userId`, `dealId`, `company_id`, `totalPrice`, `onboardDining`, `groundTransportation`, `billingRegion`, `paymentMethod`, `bookingStatus`, `paymentStatus`, `referenceNumber`, `paymentTransactionId`, `loyalty_points_earned`, `loyalty_points_redeemed`, `wallet_amount_used`, `specialRequirements`, `createdAt`, `updatedAt`) VALUES
('BK-06AUG25-121530-86I01', '', 13, 0, 0.00, 0, 0, 'United States', 'card', 'pending', 'pending', 'AC730481JY9', NULL, 0, 0, 0.00, NULL, '2025-08-06 11:15:30.273468', '2025-08-06 11:15:30.273468'),
('BK-17JUL25-142809-QLO07', 'user_1752533042834_nsyj4iqyf', 11, 11, 336.00, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC689944M7Z', 'ch_3Rlpz2Io90LS4Ah42qkvCS1J', 1680, 0, 0.00, NULL, '2025-07-17 13:28:06.801023', '2025-07-17 13:28:51.000000'),
('BK-17JUL25-144502-PFB08', 'user_1752533042834_nsyj4iqyf', 4, 9, 84.00, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC702787U7M', 'ch_3RlqFMIo90LS4Ah41OULraR6', 420, 0, 0.00, NULL, '2025-07-17 13:44:59.481124', '2025-07-17 13:45:28.000000'),
('BK-17JUL25-144932-03109', 'user_1752533042834_nsyj4iqyf', 8, 9, 95.20, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC973122K2I', 'ch_3RlqJuIo90LS4Ah418hOpzYM', 476, 0, 0.00, NULL, '2025-07-17 13:49:29.754321', '2025-07-17 13:50:29.000000'),
('BK-20250806-112505-GVL', 'user_1752093294468_5lug3jt2p', 0, 11, 5700.00, 0, 0, NULL, NULL, 'pending', 'pending', 'ACT693ELH2', NULL, 0, 0, 0.00, NULL, '2025-08-06 10:25:05.434403', '2025-08-06 10:25:05.434403'),
('BK-24JUL25-190952-RM401', 'user_1752093294468_5lug3jt2p', 10, 0, 560.00, 0, 1, 'United States', 'card', 'pending', 'pending', 'AC392916XK9', NULL, 0, 0, 0.00, NULL, '2025-07-24 18:09:52.372292', '2025-07-24 18:09:52.372292');

-- --------------------------------------------------------

--
-- Table structure for table `booking_inquiries`
--

CREATE TABLE `booking_inquiries` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `aircraftId` int(11) NOT NULL,
  `company_id` int(10) NOT NULL,
  `inquiryStatus` enum('pending','priced','confirmed','cancelled') NOT NULL DEFAULT 'pending',
  `requestedSeats` int(11) NOT NULL DEFAULT 1,
  `specialRequirements` text DEFAULT NULL,
  `onboardDining` tinyint(1) DEFAULT 0,
  `groundTransportation` tinyint(1) DEFAULT 0,
  `billingRegion` varchar(100) DEFAULT NULL,
  `proposedPrice` decimal(10,2) DEFAULT NULL,
  `proposedPriceType` enum('per_seat','per_hour','total') DEFAULT NULL,
  `adminNotes` text DEFAULT NULL,
  `userNotes` text DEFAULT NULL,
  `referenceNumber` varchar(50) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `pricedAt` datetime(6) DEFAULT NULL,
  `confirmedAt` datetime(6) DEFAULT NULL,
  `cancelledAt` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `booking_inquiries`
--

INSERT INTO `booking_inquiries` (`id`, `userId`, `aircraftId`, `company_id`, `inquiryStatus`, `requestedSeats`, `specialRequirements`, `onboardDining`, `groundTransportation`, `billingRegion`, `proposedPrice`, `proposedPriceType`, `adminNotes`, `userNotes`, `referenceNumber`, `createdAt`, `updatedAt`, `pricedAt`, `confirmedAt`, `cancelledAt`) VALUES
(1, 'user_1752093294468_5lug3jt2p', 5, 11, 'pending', 2, 'Window seats preferred', 1, 0, 'Nairobi', NULL, NULL, NULL, 'Test with integer IDs', 'AC60284798MNJ8', '2025-08-06 08:04:44.859689', '2025-08-06 08:04:44.859689', NULL, NULL, NULL),
(2, 'user_1752093294468_5lug3jt2p', 5, 11, 'pending', 3, 'VIP service', 1, 1, 'Mombasa', NULL, NULL, NULL, 'Test with stops and integer IDs', 'AC60285738RBYV', '2025-08-06 08:04:45.587460', '2025-08-06 08:04:45.587460', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `booking_timeline`
--

CREATE TABLE `booking_timeline` (
  `id` int(11) NOT NULL,
  `bookingId` varchar(255) NOT NULL,
  `eventType` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `oldValue` varchar(255) DEFAULT NULL,
  `newValue` varchar(255) DEFAULT NULL,
  `metadata` longtext DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `booking_timeline`
--

INSERT INTO `booking_timeline` (`id`, `bookingId`, `eventType`, `title`, `description`, `oldValue`, `newValue`, `metadata`, `createdAt`) VALUES
(1, 'BK#16JUL25-130401-7DJ01', 'booking_created', 'Booking Created', 'Booking AC241914KPL has been created successfully. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":2,\"companyId\":9,\"referenceNumber\":\"AC241914KPL\",\"totalPrice\":1500}', '2025-07-16 12:04:04.432168'),
(2, 'BK-16JUL25-131023-LPX01', 'booking_created', 'Booking Created', 'Booking AC623789U9S has been created successfully. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":2,\"companyId\":9,\"referenceNumber\":\"AC623789U9S\",\"totalPrice\":1500}', '2025-07-16 12:10:26.579969'),
(3, 'BK-16JUL25-131023-LPX01', 'payment_status_changed', 'Payment Processed', 'Payment of $1500 processed successfully. 7500 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"TXN_20250716_131023_ABC123\",\"paymentMethod\":\"card\",\"amount\":1500,\"loyaltyPointsEarned\":7500,\"referenceNumber\":\"AC623789U9S\"}', '2025-07-16 12:20:41.632496'),
(4, 'BK-16JUL25-131023-LPX01', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC623789U9S', NULL, NULL, '{\"paymentTransactionId\":\"TXN_20250716_131023_ABC123\",\"referenceNumber\":\"AC623789U9S\"}', '2025-07-16 12:20:42.009417'),
(5, 'BK-16JUL25-132625-7R201', 'booking_created', 'Booking Created', 'Booking AC585641W6G has been created successfully. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":2,\"companyId\":9,\"referenceNumber\":\"AC585641W6G\",\"totalPrice\":1500}', '2025-07-16 12:26:28.412446'),
(6, 'BK-16JUL25-132625-7R201', 'payment_status_changed', 'Payment Processed', 'Payment of $1500 processed successfully. 7500 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"TXN_20250716_131023_ABC124\",\"paymentMethod\":\"card\",\"amount\":1500,\"loyaltyPointsEarned\":7500,\"referenceNumber\":\"AC585641W6G\"}', '2025-07-16 13:35:12.006000'),
(7, 'BK-16JUL25-132625-7R201', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC585641W6G', NULL, NULL, '{\"paymentTransactionId\":\"TXN_20250716_131023_ABC124\",\"referenceNumber\":\"AC585641W6G\"}', '2025-07-16 13:35:12.525000'),
(8, 'BK-16JUL25-201943-1X603', 'booking_created', 'Booking Created', 'Booking AC3835319OK has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC3835319OK\",\"totalPrice\":100.8,\"userIncluded\":false}', '2025-07-16 19:19:39.697427'),
(9, 'BK-16JUL25-202229-TH902', 'booking_created', 'Booking Created', 'Booking AC549830D7X has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC549830D7X\",\"totalPrice\":100.8,\"userIncluded\":false}', '2025-07-16 19:22:25.951280'),
(10, 'BK-16JUL25-210225-BKY05', 'booking_created', 'Booking Created', 'Booking AC9455056X1 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC9455056X1\",\"totalPrice\":100.8,\"userIncluded\":false}', '2025-07-16 20:02:21.384368'),
(11, 'BK-16JUL25-210432-IA506', 'booking_created', 'Booking Created', 'Booking AC073281C2N has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC073281C2N\",\"totalPrice\":782.88,\"userIncluded\":false}', '2025-07-16 20:04:28.997131'),
(12, 'BK-17JUL25-000838-H9G01', 'booking_created', 'Booking Created', 'Booking AC118643AG7 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC118643AG7\",\"totalPrice\":84,\"userIncluded\":false}', '2025-07-16 23:08:33.855773'),
(13, 'BK-17JUL25-001142-M3C02', 'booking_created', 'Booking Created', 'Booking AC3026461WH has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC3026461WH\",\"totalPrice\":95.2,\"userIncluded\":false}', '2025-07-16 23:11:37.697893'),
(14, 'BK-17JUL25-020542-VYM03', 'booking_created', 'Booking Created', 'Booking AC143079TLH has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC143079TLH\",\"totalPrice\":1174.88,\"userIncluded\":false}', '2025-07-17 01:05:37.437829'),
(15, 'BK-17JUL25-020542-VYM03', 'payment_status_changed', 'Payment Processed', 'Payment of $1174.88 processed successfully. 5874 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"ch_3RleOTIo90LS4Ah42vO1hbeH\",\"paymentMethod\":\"card\",\"amount\":1174.88,\"loyaltyPointsEarned\":5874,\"referenceNumber\":\"AC143079TLH\"}', '2025-07-17 02:06:35.181000'),
(16, 'BK-17JUL25-020542-VYM03', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC143079TLH', NULL, NULL, '{\"paymentTransactionId\":\"ch_3RleOTIo90LS4Ah42vO1hbeH\",\"referenceNumber\":\"AC143079TLH\"}', '2025-07-17 02:06:35.338000'),
(17, 'BK-17JUL25-095447-C7C07', 'booking_created', 'Booking Created', 'Booking AC287943M4Y has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC287943M4Y\",\"totalPrice\":84,\"userIncluded\":false}', '2025-07-17 08:54:47.616801'),
(18, 'BK-17JUL25-100038-JXQ08', 'booking_created', 'Booking Created', 'Booking AC638606KA1 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC638606KA1\",\"totalPrice\":95.2,\"userIncluded\":false}', '2025-07-17 09:00:37.901940'),
(19, 'BK-17JUL25-101633-HXV09', 'booking_created', 'Booking Created', 'Booking AC59356926Y has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC59356926Y\",\"totalPrice\":78.4,\"userIncluded\":false}', '2025-07-17 09:16:32.822973'),
(20, 'BK-17JUL25-141001-QSB03', 'booking_created', 'Booking Created', 'Booking AC601993YL5 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC601993YL5\",\"totalPrice\":782.88,\"userIncluded\":false}', '2025-07-17 13:09:59.732127'),
(21, 'BK-17JUL25-142014-31604', 'booking_created', 'Booking Created', 'Booking AC214727GKF has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC214727GKF\",\"totalPrice\":84,\"userIncluded\":false}', '2025-07-17 13:20:12.586114'),
(22, 'BK-17JUL25-142809-QLO07', 'booking_created', 'Booking Created', 'Booking AC689944M7Z has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":11,\"referenceNumber\":\"AC689944M7Z\",\"totalPrice\":336,\"userIncluded\":false}', '2025-07-17 13:28:07.564271'),
(23, 'BK-17JUL25-142809-QLO07', 'payment_status_changed', 'Payment Processed', 'Payment of $336 processed successfully. 1680 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"ch_3Rlpz2Io90LS4Ah42qkvCS1J\",\"paymentMethod\":\"card\",\"amount\":336,\"loyaltyPointsEarned\":1680,\"referenceNumber\":\"AC689944M7Z\"}', '2025-07-17 14:28:55.230000'),
(24, 'BK-17JUL25-142809-QLO07', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC689944M7Z', NULL, NULL, '{\"paymentTransactionId\":\"ch_3Rlpz2Io90LS4Ah42qkvCS1J\",\"referenceNumber\":\"AC689944M7Z\"}', '2025-07-17 14:28:55.362000'),
(25, 'BK-17JUL25-144502-PFB08', 'booking_created', 'Booking Created', 'Booking AC702787U7M has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":9,\"referenceNumber\":\"AC702787U7M\",\"totalPrice\":84,\"userIncluded\":false}', '2025-07-17 13:45:00.204787'),
(26, 'BK-17JUL25-144502-PFB08', 'payment_status_changed', 'Payment Processed', 'Payment of $84 processed successfully. 420 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"ch_3RlqFMIo90LS4Ah41OULraR6\",\"paymentMethod\":\"card\",\"amount\":84,\"loyaltyPointsEarned\":420,\"referenceNumber\":\"AC702787U7M\"}', '2025-07-17 14:45:32.525000'),
(27, 'BK-17JUL25-144502-PFB08', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC702787U7M', NULL, NULL, '{\"paymentTransactionId\":\"ch_3RlqFMIo90LS4Ah41OULraR6\",\"referenceNumber\":\"AC702787U7M\"}', '2025-07-17 14:45:32.657000'),
(28, 'BK-17JUL25-144932-03109', 'booking_created', 'Booking Created', 'Booking AC973122K2I has been created successfully with 2 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":2,\"companyId\":9,\"referenceNumber\":\"AC973122K2I\",\"totalPrice\":95.2,\"userIncluded\":false}', '2025-07-17 13:49:30.538910'),
(29, 'BK-17JUL25-144932-03109', 'payment_status_changed', 'Payment Processed', 'Payment of $95.2 processed successfully. 476 loyalty points earned.', NULL, 'paid', '{\"paymentTransactionId\":\"ch_3RlqJuIo90LS4Ah418hOpzYM\",\"paymentMethod\":\"card\",\"amount\":95.2,\"loyaltyPointsEarned\":476,\"referenceNumber\":\"AC973122K2I\"}', '2025-07-17 14:50:33.129000'),
(30, 'BK-17JUL25-144932-03109', 'booking_confirmed', 'Booking Confirmed', 'Booking confirmed after successful payment. Reference: AC973122K2I', NULL, NULL, '{\"paymentTransactionId\":\"ch_3RlqJuIo90LS4Ah418hOpzYM\",\"referenceNumber\":\"AC973122K2I\"}', '2025-07-17 14:50:33.280000'),
(31, 'BK-24JUL25-190952-RM401', 'booking_created', 'Booking Created', 'Booking AC392916XK9 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":11,\"referenceNumber\":\"AC392916XK9\",\"totalPrice\":560,\"userIncluded\":false}', '2025-07-24 18:09:53.095621'),
(32, 'BK-06AUG25-121530-86I01', 'booking_created', 'Booking Created', 'Booking AC730481JY9 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":12,\"referenceNumber\":\"AC730481JY9\",\"totalPrice\":0,\"userIncluded\":false}', '2025-08-06 11:15:31.086395');

-- --------------------------------------------------------

--
-- Table structure for table `charters_admins`
--

CREATE TABLE `charters_admins` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isDefaultPassword` tinyint(1) NOT NULL DEFAULT 1,
  `role` enum('citAdmin','superadmin','companyAdmin','agent','vehicleCompanyAdmin') DEFAULT 'citAdmin' COMMENT 'Role of the admin',
  `companyId` int(11) DEFAULT NULL,
  `agentDetailsId` int(11) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `vehicleCompanyId` int(11) DEFAULT NULL COMMENT 'Reference to vehicle company for vehicle admins'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charters_admins`
--

INSERT INTO `charters_admins` (`id`, `firstName`, `middleName`, `lastName`, `email`, `password`, `isDefaultPassword`, `role`, `companyId`, `agentDetailsId`, `status`, `createdAt`, `updatedAt`, `vehicleCompanyId`) VALUES
(1, 'charters', NULL, 'SuperAdmin', 'admin@charters.com', '$2b$10$vva6in6Pz0bOBfm/THPZpOjX0zsFMWoKijd0HqAN2o4qlPVydS6R.', 0, 'superadmin', NULL, NULL, 'active', '2025-07-04 06:43:47', '2025-07-08 10:56:49', NULL),
(2, 'Alice', NULL, 'Cit', 'alice.citadmin@example.com', '$2b$10$BH6v7fHXPhfiv5v4k5jpJOWqKUuw6ePqmIcugKLxmb/FROUa2EVzO', 0, 'citAdmin', NULL, NULL, 'active', '2025-07-04 06:49:19', '2025-07-14 13:31:21', NULL),
(3, 'Dave', NULL, 'Agent', 'dave.agent@example.com', '$2b$10$Fmd5QbY.0DA1g3nwnSLt2u0l3D4j0U5fkkIfITk3tLoIsttHNbs/y', 1, 'agent', NULL, NULL, 'active', '2025-07-04 06:49:39', '2025-07-04 06:49:39', NULL),
(29, 'spAir', NULL, 'Admin', 'admin@spairservices.co.ke', '$2b$10$oqfqjHtiDiy8oMdUuBTxX.6hux87P2QHDZ7LCwvXXIK4SxVHbrpNe', 0, 'companyAdmin', 11, NULL, 'active', '2025-07-17 04:33:37', '2025-07-17 04:35:04', NULL),
(31, 'Jimmy', NULL, 'Entebbe', 'info@entebbeairways.com', '$2b$10$OncuuozQft9WJxWdNP3m5O1eabtWYzB3oPXob3S2e4Gtwxplz084.', 0, 'companyAdmin', 12, NULL, 'active', '2025-07-23 07:20:21', '2025-07-23 07:20:21', NULL),
(32, 'Ralex', NULL, 'admin', 'info@ralexllc.com', '$2b$10$3hWpgUisLsTmevsSpIkaQu4iWrnjycXl2PSlhv4c2aJhgwlRjUwte', 0, 'companyAdmin', 13, NULL, 'active', '2025-07-23 08:00:00', '2025-07-23 08:00:00', NULL),
(33, 'John', NULL, 'Mwangi', 'contact@jamesgiteredev.site', '$2b$10$3uc4scOnuULoIhCxBtT/AeQ1M7UzOe9IMBYnP/PbIhf9ZXY7qFFwS', 0, 'vehicleCompanyAdmin', NULL, NULL, 'active', '2025-07-23 11:39:15', '2025-07-23 11:46:51', 1),
(34, 'Aib', NULL, 'Admin', 'aib@gmail.com', '$2b$10$CtJMMN8zZrQj2pBL5GCsWenbYeq8.4igteK03cAPmLzR8Xf6i4bQG', 0, 'companyAdmin', 5, NULL, 'inactive', '2025-07-24 07:29:46', '2025-08-11 14:10:03', NULL),
(35, 'jimmy', NULL, 'peter', 'giterejames10@gmail.com', '$2b$10$RGHJH1EDgZhjq9bvH2RnneZcFgdcFQ25OFVh3lTM.J.4L7Ho6mtkm', 0, 'vehicleCompanyAdmin', NULL, NULL, 'active', '2025-08-04 13:09:45', '2025-08-04 13:11:20', 3),
(36, 'jimy', NULL, 'Kalu', 'sasmypwa@gmail.com', '$2b$10$eTJKDRxRuwdTgA196KIFQuMYS./c/zxEjo6ApxfmuH8Zq9q0CtGsq', 1, 'vehicleCompanyAdmin', NULL, NULL, 'active', '2025-08-06 08:37:49', '2025-08-06 08:37:49', 2),
(37, 'Jane', '', 'Owino', 'jane@citlogisticssystems.com', '$2b$10$XUEIgywLooz3hQvtzzji3Oylbkzfl89LQEhiWKORrGPZ8R/2zWMZ2', 0, 'citAdmin', NULL, NULL, 'active', '2025-08-06 08:39:30', '2025-08-06 08:41:32', NULL),
(38, 'Mary', NULL, 'Warren', 'admin@yellowwing.com', '$2b$10$jCvCrIjzQyxqpVt8JKjUB.H88b4KpgOSZ6i5Ld5ShIJkNsDjoSkaq', 0, 'companyAdmin', 15, NULL, 'active', '2025-08-07 08:21:08', '2025-08-07 08:22:56', NULL),
(39, 'Alice', NULL, 'Fern', 'admin@transonic.com', '$2b$10$Y1GLR7LMPEt2VrdKmF8R3.ZcataPvxBffU172/0D5XSU5GyZeGQtq', 0, 'companyAdmin', 16, NULL, 'active', '2025-08-07 09:19:00', '2025-08-07 09:20:23', NULL),
(40, 'John', NULL, 'Green', 'admin@scenicairsafari.com', '$2b$10$evoLZNszrs61q7I0//BRUOLrW6/293vMbbMqt4r4HFv/adI95MtNO', 0, 'companyAdmin', 17, NULL, 'active', '2025-08-07 10:13:22', '2025-08-07 10:14:17', NULL),
(41, 'Cole', NULL, 'Lee', 'admin@aberdair.com', '$2b$10$NXHEedYWT4AdAjKOggWZ3eBJ2Yz1VEyH68J/ALSwoehvOTVkHpGIq', 0, 'companyAdmin', 18, NULL, 'active', '2025-08-07 12:28:33', '2025-08-07 12:33:39', NULL),
(42, 'Eric', NULL, 'Mwangi', 'admin@tropicair.com', '$2b$10$HL8Ebnin.xVDbAEZAPz0cOPzpHvnNjbsLtBF9BLX0y5d.FblDguXa', 0, 'companyAdmin', 19, NULL, 'active', '2025-08-07 14:01:38', '2025-08-07 14:02:31', NULL),
(43, 'Lisa', NULL, 'Talk', 'admin@airkenya.com', '$2b$10$mvVpsBl0K.yalFioYYgXF.F5lozA2bFRA4HGqPzcji51RJGvcZheW', 0, 'companyAdmin', 20, NULL, 'active', '2025-08-08 07:52:18', '2025-08-08 07:53:28', NULL),
(44, 'Aero', NULL, 'Link', 'admin@aerolink.com', '$2b$10$Qh/2oGS68xFFI81/CeJzDeZpcfIwHPMf1DhK/5JzYgW1/9/iGdCsG', 0, 'companyAdmin', 21, NULL, 'active', '2025-08-08 09:41:59', '2025-08-08 09:43:04', NULL),
(45, 'Saaf', NULL, 'Link', 'admin@safarilink.com', '$2b$10$xr1.IF42U0iMIJfh7hhNZey0xNukHWjBdGd9VL1xt/ih6XHVxDehq', 0, 'companyAdmin', 22, NULL, 'active', '2025-08-08 10:26:59', '2025-08-08 10:28:13', NULL),
(46, 'Amy', NULL, 'Rev', 'admin@amref.com', '$2b$10$ki5aKf75d0gheMS7sxmO1.f4JLs6EfRL4cxF2NUMjsoSre.hYl92a', 0, 'companyAdmin', 23, NULL, 'active', '2025-08-08 11:37:09', '2025-08-08 11:38:11', NULL),
(47, 'Air', NULL, 'Serv', 'admin@748air.com', '$2b$10$WDZ.DPrS5jQz7pdWtQn4DO1QShjQVrUAfElwg7EU.bbBlURLNP/Ae', 0, 'companyAdmin', 24, NULL, 'active', '2025-08-08 12:04:12', '2025-08-08 12:05:46', NULL),
(48, 'Felix', NULL, 'Good', 'admin@phoenixaviation.com', '$2b$10$g0QPM0be5xqfJ6.Fn.2QM.5COa6yZA/CQd5j562e7xdFqw/TBOt4G', 0, 'companyAdmin', 25, NULL, 'active', '2025-08-11 06:58:15', '2025-08-11 06:59:04', NULL),
(49, 'Milly', NULL, 'Aire', 'admin@miskair.com', '$2b$10$.jjx/1Qsdfr54t8LtZ93HOP/KtqPxAwcShPwYANGTGklB2R.A1k3G', 0, 'companyAdmin', 26, NULL, 'active', '2025-08-11 07:38:04', '2025-08-11 07:39:21', NULL),
(50, 'Bear', NULL, 'Ave', 'admin@baraviation.com', '$2b$10$Klk6VVQCbsF69TzwoZqfue.AH2w9NCl1vH5pBQC4cgl5DuD4lCm5C', 0, 'companyAdmin', 27, NULL, 'active', '2025-08-11 08:31:22', '2025-08-11 08:32:27', NULL),
(51, 'Fred', NULL, 'Keo', 'admin@flykea.com', '$2b$10$7dntVMVtSNmdWJ/DjkbKpufOnaPmNNt4vJOldZ2.zl8wndX8TiHbW', 0, 'companyAdmin', 28, NULL, 'active', '2025-08-11 09:24:13', '2025-08-11 09:25:00', NULL),
(52, 'Earl', NULL, 'Air', 'admin@eagleair.com', '$2b$10$AUaXa2ENIjI.jzKXXWx9eO9UbdS15OilSHq/J5LmMb3KAKfb3WXkq', 0, 'companyAdmin', 29, NULL, 'active', '2025-08-11 10:45:33', '2025-08-11 10:46:38', NULL),
(58, 'Sky', NULL, 'Ward', 'admin@skyward.com', '$2b$10$topC9W1arbpTi2fpJ4ZJP.StFTSPQZUWZuhN/wRiXxiy4aMZP9AVW', 0, 'companyAdmin', 30, NULL, 'active', '2025-08-11 13:41:33', '2025-08-11 13:42:23', NULL),
(60, 'Alice', NULL, 'Kamau', 'gitere.dev@gmail.com', '$2b$10$nusjVx.kuXYtNMtHSlaCSu..w/M8Z74ZbKHVnbTxLIYSar3AsjNqS', 1, 'companyAdmin', 5, NULL, 'active', '2025-08-11 14:23:32', '2025-08-11 14:23:32', NULL),
(61, 'Heli', NULL, 'Charlie', 'admin@helicoptercharters.com', '$2b$10$mTe5VW6HsKe475HAAKoIi.TwP97VZS0uDptGV2ZxXqHzsLKnazRR2', 0, 'companyAdmin', 31, NULL, 'active', '2025-08-12 10:05:15', '2025-08-12 10:05:56', NULL),
(62, 'Ba', NULL, 'Kia', 'admin@bukhaavia.com', '$2b$10$mlzKAeL/7xOLDQmKI7Nk8eqvGxyk5I6N/w9vj.mAC2s6cPd7wUtGe', 0, 'companyAdmin', 32, NULL, 'active', '2025-08-13 11:23:52', '2025-08-13 11:24:45', NULL),
(63, 'Astra', NULL, 'Lo', 'admin@astrolaviation.com', '$2b$10$BktGgGeRld.rYBcj/lnbre8qv3CgMyFNBQgyeWmVuZoanUU9YlilK', 0, 'companyAdmin', 33, NULL, 'active', '2025-08-13 12:07:03', '2025-08-13 12:07:40', NULL),
(64, 'Afr', NULL, 'Core', 'admin@africaecoadventures.com', '$2b$10$3.2OSLOH0DbJ.Jc.oCsTlu1PCzcTnoAdiBnPCylk/DeUVsikHPmD.', 0, 'companyAdmin', 34, NULL, 'active', '2025-08-14 06:48:48', '2025-08-14 06:49:26', NULL),
(65, 'Bale', NULL, 'Safi', 'admin@balloonssafarisltd.com', '$2b$10$CEJPhyWfX.bmIhnvTeLBSe6wM7hwm3o6IkzmiXreoIAmjdwWSLsWe', 0, 'companyAdmin', 35, NULL, 'active', '2025-08-14 07:04:45', '2025-08-14 07:05:29', NULL),
(66, 'Kili', NULL, 'Jaro', 'admin@kilimanjaroballonsafaris.com', '$2b$10$.YtpyGHQxnxXty/5OEcD5.0/HJ4tKS5iGEpYCQN5xFOUE5eSiuCT.', 0, 'companyAdmin', 36, NULL, 'active', '2025-08-14 07:08:55', '2025-08-14 07:09:41', NULL),
(68, 'Advent', NULL, 'Loft', 'admin@adventuresaloft.com', '$2b$10$DOcr44F9gYH4D9cxWCMVfe9kjVg8H4ym/MnACDbjL0keR2NgTrYfC', 0, 'companyAdmin', 38, NULL, 'active', '2025-08-14 07:19:51', '2025-08-14 07:20:28', NULL),
(69, 'Hot', NULL, 'Maa', 'admin@masaimaraballonsafaris.com', '$2b$10$FizoCMdLbUrDv4YFOD7Sr.84o4AZZrYTw4/iB2k3m49apoFv9NzsG', 0, 'companyAdmin', 39, NULL, 'active', '2025-08-14 07:24:10', '2025-08-14 07:24:49', NULL),
(70, 'Sky', NULL, 'Hale', 'admin@skyshipsky.com', '$2b$10$N8bnQ3BWzaqZmlxHCSpqI.mddeZ6ncCrWsQfcUwnsf53Se55VBnnu', 0, 'companyAdmin', 40, NULL, 'active', '2025-08-14 07:31:56', '2025-08-14 07:32:49', NULL),
(71, 'East', NULL, 'Ria', 'admin@eastafricancharters.com', '$2b$10$F3DNi0ML8nXwDc5tsp.WZOB8/0jmLbSaoRdcYLFjXuUN2D33MgbS.', 0, 'companyAdmin', 41, NULL, 'active', '2025-08-14 07:38:06', '2025-08-14 07:38:48', NULL),
(72, 'gov', NULL, 'admin', 'admin@governorsballoonsafaris.com', '$2b$10$.J9l4gs6tmSbC8ivzon/Vu9JoOuAKnsETakPBN0d.ZYc.MPRfYgi2', 0, 'companyAdmin', 37, NULL, 'active', '2025-08-14 08:54:07', '2025-08-14 08:54:07', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `charters_companies`
--

CREATE TABLE `charters_companies` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactPersonFirstName` varchar(255) NOT NULL,
  `contactPersonLastName` varchar(255) NOT NULL,
  `mobileNumber` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `licenseNumber` varchar(255) NOT NULL,
  `license` varchar(255) DEFAULT NULL,
  `licensePublicId` varchar(255) DEFAULT NULL,
  `logoPublicId` varchar(255) DEFAULT NULL,
  `onboardedBy` varchar(255) NOT NULL,
  `adminId` int(11) NOT NULL,
  `status` enum('pendingReview','active','inactive','rejected','draft') NOT NULL DEFAULT 'draft',
  `agreementForm` varchar(255) DEFAULT NULL,
  `agreementFormPublicId` varchar(255) DEFAULT NULL,
  `approvedBy` varchar(255) DEFAULT NULL,
  `approvedAt` datetime DEFAULT NULL,
  `reviewRemarks` text DEFAULT NULL,
  `revenueShareRate` decimal(5,2) NOT NULL DEFAULT 0.00,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charters_companies`
--

INSERT INTO `charters_companies` (`id`, `companyName`, `email`, `contactPersonFirstName`, `contactPersonLastName`, `mobileNumber`, `logo`, `country`, `licenseNumber`, `license`, `licensePublicId`, `logoPublicId`, `onboardedBy`, `adminId`, `status`, `agreementForm`, `agreementFormPublicId`, `approvedBy`, `approvedAt`, `reviewRemarks`, `revenueShareRate`, `createdAt`, `updatedAt`) VALUES
(5, 'Aib Aviation', 'gitere.dev@gmail.com', 'Alice', 'Kamau', '+254723456789', 'https://res.cloudinary.com/otienobryan/image/upload/v1751798157/charters_logos/sh7ytvzvaze7t9zsnljm.jpg', 'Kenya', 'GDGD4646', NULL, NULL, 'charters_logos/sh7ytvzvaze7t9zsnljm', '', 34, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1751808498/charters_documents/aib/aib_agreementForm.pdf', 'charters_documents/aib/aib_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 14:23:31', 'Successfully approved', 12.00, '2025-07-06 10:35:56.000000', '2025-08-11 14:23:31.000000'),
(11, 'SPAir Services', 'admin@spairservices.co.ke', 'spAir', 'Admin', '+254717815601', 'https://res.cloudinary.com/otienobryan/image/upload/v1752726601/charters_logos/pk4wp8rphog8dbphi30i.png', 'Kenya', ' K/CAA/004', NULL, NULL, 'charters_logos/pk4wp8rphog8dbphi30i', 'Alice Cit', 2, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1752726626/charters_documents/spair_services/spair_services_agreementForm.pdf', 'charters_documents/spair_services/spair_services_agreementForm.pdf', 'Bob Super', '2025-07-17 04:33:37', 'Successfully approved', 0.00, '2025-07-17 04:29:59.000000', '2025-08-01 15:29:31.448480'),
(12, 'Entebbe Airways', 'info@entebbeairways.com', 'joe', 'Doe', '+256763001287', 'https://res.cloudinary.com/otienobryan/image/upload/v1753253075/charters_logos/tzkavlkvcrkxu8diqvb8.png', 'Uganda', 'AGDGD464', NULL, NULL, 'charters_logos/tzkavlkvcrkxu8diqvb8', 'Alice Cit', 31, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753253102/charters_documents/entebbe_airways/entebbe_airways_agreementForm.pdf', 'charters_documents/entebbe_airways/entebbe_airways_agreementForm.pdf', 'Bob Super', '2025-07-23 06:45:40', 'Successfully approved', 0.00, '2025-07-23 06:44:35.000000', '2025-07-23 07:20:21.000000'),
(13, 'Ralex Aviation', 'info@ralexllc.com', 'Jimmy', 'Kamau', '+971566427742', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257095/charters_logos/xjhlzhq6j6ca7dwdrfnf.png', 'Kenya', '3535F555', NULL, NULL, 'charters_logos/xjhlzhq6j6ca7dwdrfnf', 'Alice Cit', 32, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753257390/charters_documents/ralex_aviation/ralex_aviation_agreementForm.pdf', 'charters_documents/ralex_aviation/ralex_aviation_agreementForm.pdf', 'Bob superadmin', '2025-07-23 10:57:17', 'Approved successfully', 0.00, '2025-07-23 07:51:35.000000', '2025-07-23 10:00:44.939626'),
(14, 'Flex Flight', 'info@flexflight.com', 'Brian', 'Ogutu', '0796588432', 'https://res.cloudinary.com/otienobryan/image/upload/v1754469926/charters_logos/msllfqa4qeemglnerbof.png', 'Kenya', '123', NULL, NULL, 'charters_logos/msllfqa4qeemglnerbof', 'Jane Owino', 37, 'draft', NULL, NULL, NULL, NULL, NULL, 0.00, '2025-08-06 08:45:28.000000', '2025-08-06 08:45:28.000000'),
(15, 'Yellow Wings', 'admin@yellowwing.com', 'Mary', 'Warren', '0722435678', 'https://res.cloudinary.com/otienobryan/image/upload/v1754554640/charters_logos/orbcfnuvektcuvjcvo6m.webp', 'Kenya', '456', NULL, NULL, 'charters_logos/orbcfnuvektcuvjcvo6m', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754554786/charters_documents/yellow_wings/yellow_wings_agreementForm.pdf', 'charters_documents/yellow_wings/yellow_wings_agreementForm.pdf', 'charters SuperAdmin', '2025-08-07 08:21:07', 'Successfully approved', 0.00, '2025-08-07 08:17:20.000000', '2025-08-07 10:27:59.446848'),
(16, 'Transonic Aviation', 'admin@transonic.com', 'Alice', 'Fern', '0768567432', 'https://res.cloudinary.com/otienobryan/image/upload/v1754558275/charters_logos/r0uy1ujqvbzbtyymoznn.jpg', 'Kenya', '987', NULL, NULL, 'charters_logos/r0uy1ujqvbzbtyymoznn', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754558297/charters_documents/transonic_aviation/transonic_aviation_agreementForm.pdf', 'charters_documents/transonic_aviation/transonic_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-07 09:18:59', 'Successfully approved', 0.00, '2025-08-07 09:17:56.000000', '2025-08-07 11:41:17.800913'),
(17, 'Scenic Air Safaris', 'admin@scenicairsafari.com', 'John', 'Green', '0743887654', 'https://res.cloudinary.com/otienobryan/image/upload/v1754561489/charters_logos/z4h9yphix6uepnozgu3f.jpg', 'Kenya', '004', NULL, NULL, 'charters_logos/z4h9yphix6uepnozgu3f', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754561504/charters_documents/scenic_air_safaris/scenic_air_safaris_agreementForm.pdf', 'charters_documents/scenic_air_safaris/scenic_air_safaris_agreementForm.pdf', 'charters SuperAdmin', '2025-08-07 10:13:22', 'Successfully approved', 0.00, '2025-08-07 10:11:29.000000', '2025-08-07 14:24:45.277225'),
(18, 'Aberdair Aviation', 'admin@aberdair.com', 'Cole', 'Lee', '0766587965', 'https://res.cloudinary.com/otienobryan/image/upload/v1754569658/charters_logos/ke6jgezb4slbu1jvfxaa.jpg', 'Kenya', '666', NULL, NULL, 'charters_logos/ke6jgezb4slbu1jvfxaa', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754569673/charters_documents/aberdair_aviation/aberdair_aviation_agreementForm.pdf', 'charters_documents/aberdair_aviation/aberdair_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-07 12:28:33', 'Successfully approved', 0.00, '2025-08-07 12:27:38.000000', '2025-08-07 14:35:22.050387'),
(19, 'Tropicair', 'admin@tropicair.com', 'Eric', 'Mwangi', '0766543213', 'https://res.cloudinary.com/otienobryan/image/upload/v1754575172/charters_logos/onf4aahu8wbmzmbjuvcc.png', 'Kenya', '7770', NULL, NULL, 'charters_logos/onf4aahu8wbmzmbjuvcc', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754575242/charters_documents/tropicair/tropicair_agreementForm.pdf', 'charters_documents/tropicair/tropicair_agreementForm.pdf', 'charters SuperAdmin', '2025-08-07 14:01:38', 'Successfully approved', 0.00, '2025-08-07 13:59:32.000000', '2025-08-07 16:04:09.434898'),
(20, 'AirKenya', 'admin@airkenya.com', 'Lisa', 'Talk', '0788967543', 'https://res.cloudinary.com/otienobryan/image/upload/v1754639486/charters_logos/v7w1vyzhcoc3xyscvrm4.png', 'Kenya', '59900', NULL, NULL, 'charters_logos/v7w1vyzhcoc3xyscvrm4', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754639501/charters_documents/airkenya/airkenya_agreementForm.pdf', 'charters_documents/airkenya/airkenya_agreementForm.pdf', 'charters SuperAdmin', '2025-08-08 07:52:18', 'Successfully approved', 0.00, '2025-08-08 07:51:26.000000', '2025-08-08 09:55:55.552942'),
(21, 'Aero Link', 'admin@aerolink.com', 'Aero', 'Link', '0756457896', 'https://res.cloudinary.com/otienobryan/image/upload/v1754646022/charters_logos/cfbgwzhip7fzpeso8mfk.png', 'Kenya', '44567', NULL, NULL, 'charters_logos/cfbgwzhip7fzpeso8mfk', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754646047/charters_documents/aero_link/aero_link_agreementForm.pdf', 'charters_documents/aero_link/aero_link_agreementForm.pdf', 'charters SuperAdmin', '2025-08-08 09:41:59', 'Successfully approved', 0.00, '2025-08-08 09:40:23.000000', '2025-08-08 12:24:15.083146'),
(22, 'Safarilink', 'admin@safarilink.com', 'Saaf', 'Link', '0733124907', 'https://res.cloudinary.com/otienobryan/image/upload/v1754648753/charters_logos/lvy0lfg0wb4kczktpssw.jpg', 'Kenya', '777774', NULL, NULL, 'charters_logos/lvy0lfg0wb4kczktpssw', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754648774/charters_documents/safarilink/safarilink_agreementForm.pdf', 'charters_documents/safarilink/safarilink_agreementForm.pdf', 'charters SuperAdmin', '2025-08-08 10:26:58', 'Successfully approved', 0.00, '2025-08-08 10:25:54.000000', '2025-08-08 13:36:08.800358'),
(23, 'AMREF Aviation', 'admin@amref.com', 'Amy', 'Rev', '0799324571', 'https://res.cloudinary.com/otienobryan/image/upload/v1754652979/charters_logos/o2un3fpszw39xnqzpvhu.png', 'Kenya', '5531709', NULL, NULL, 'charters_logos/o2un3fpszw39xnqzpvhu', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754652994/charters_documents/amref_aviation/amref_aviation_agreementForm.pdf', 'charters_documents/amref_aviation/amref_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-08 11:37:09', 'Successfully approved', 0.00, '2025-08-08 11:36:19.000000', '2025-08-08 13:39:07.152677'),
(24, '748 Air Services', 'admin@748air.com', 'Air', 'Serv', '0766987341', 'https://res.cloudinary.com/otienobryan/image/upload/v1754654606/charters_logos/y4wfxmnon2togmksdkcz.png', 'Kenya', '1115672', NULL, NULL, 'charters_logos/y4wfxmnon2togmksdkcz', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754654620/charters_documents/748_air_services/748_air_services_agreementForm.pdf', 'charters_documents/748_air_services/748_air_services_agreementForm.pdf', 'charters SuperAdmin', '2025-08-08 12:04:11', 'Successfully approved', 0.00, '2025-08-08 12:03:27.000000', '2025-08-08 14:07:54.650875'),
(25, 'Phoenix Aviation', 'admin@phoenixaviation.com', 'Felix', 'Good', '0722156789', 'https://res.cloudinary.com/otienobryan/image/upload/v1754895423/charters_logos/u5cltlojwk10uezqvqfv.png', 'Kenya', '665780', NULL, NULL, 'charters_logos/u5cltlojwk10uezqvqfv', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754895441/charters_documents/phoenix_aviation/phoenix_aviation_agreementForm.pdf', 'charters_documents/phoenix_aviation/phoenix_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 06:58:15', 'Successfully approved', 0.00, '2025-08-11 06:57:04.000000', '2025-08-11 09:26:39.434180'),
(26, 'Misk Air', 'admin@miskair.com', 'Milly', 'Aire', '0789653412', 'https://res.cloudinary.com/otienobryan/image/upload/v1754897822/charters_logos/dhhkwwfgxtjukaibkfjh.png', 'Kenya', '8845673', NULL, NULL, 'charters_logos/dhhkwwfgxtjukaibkfjh', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754897838/charters_documents/misk_air/misk_air_agreementForm.pdf', 'charters_documents/misk_air/misk_air_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 07:38:04', 'Successfully approved', 0.00, '2025-08-11 07:37:02.000000', '2025-08-11 09:58:17.338630'),
(27, 'Bar Aviation', 'admin@baraviation.com', 'Bear', 'Ave', '0765107432', 'https://res.cloudinary.com/otienobryan/image/upload/v1754900552/charters_logos/zgx72coaudykzbh64b3t.png', 'Kenya', '7110243', NULL, NULL, 'charters_logos/zgx72coaudykzbh64b3t', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754900926/charters_documents/bar_aviation/bar_aviation_agreementForm.pdf', 'charters_documents/bar_aviation/bar_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 08:31:21', 'Successfully approved', 0.00, '2025-08-11 08:22:33.000000', '2025-08-11 10:54:38.037482'),
(28, 'Fly KEA', 'admin@flykea.com', 'Fred', 'Keo', '0799445566', 'https://res.cloudinary.com/otienobryan/image/upload/v1754902684/charters_logos/godw34bthmznny3ycx8l.jpg', 'Uganda', '7765483', NULL, NULL, 'charters_logos/godw34bthmznny3ycx8l', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754902719/charters_documents/fly_kea/fly_kea_agreementForm.pdf', 'charters_documents/fly_kea/fly_kea_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 09:24:12', 'Successfully approved', 0.00, '2025-08-11 08:58:04.000000', '2025-08-11 12:17:33.312186'),
(29, 'Eagle Air', 'admin@eagleair.com', 'Earl', 'Air', '0799654321', 'https://res.cloudinary.com/otienobryan/image/upload/v1754909017/charters_logos/pzthcui73ueebrpbhqzv.png', 'Uganda', '118905', NULL, NULL, 'charters_logos/pzthcui73ueebrpbhqzv', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754909045/charters_documents/eagle_air/eagle_air_agreementForm.pdf', 'charters_documents/eagle_air/eagle_air_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 10:45:33', 'Successfully approved', 0.00, '2025-08-11 10:43:38.000000', '2025-08-11 12:59:09.245840'),
(30, 'Skyward Express', 'admin@skyward.com', 'Sky', 'Ward', '0766321456', 'https://res.cloudinary.com/otienobryan/image/upload/v1754919350/charters_logos/j0tyvskhdrt2jjiuptyj.png', 'Kenya', '770354', NULL, NULL, 'charters_logos/j0tyvskhdrt2jjiuptyj', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754919364/charters_documents/skyward_express/skyward_express_agreementForm.pdf', 'charters_documents/skyward_express/skyward_express_agreementForm.pdf', 'charters SuperAdmin', '2025-08-11 13:41:32', 'Successfully approved', 10.00, '2025-08-11 13:35:50.000000', '2025-08-11 14:20:50.000000'),
(31, 'Helicopters Charter', 'admin@helicoptercharters.com', 'Heli', 'Charlie', '0765899327', 'https://res.cloudinary.com/otienobryan/image/upload/v1754993018/charters_logos/ngkyyhighltr5udaiwhw.png', 'Kenya', '0098234', NULL, NULL, 'charters_logos/ngkyyhighltr5udaiwhw', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1754993056/charters_documents/helicopters_charter/helicopters_charter_agreementForm.pdf', 'charters_documents/helicopters_charter/helicopters_charter_agreementForm.pdf', 'charters SuperAdmin', '2025-08-12 10:05:15', 'Successfully approved', 10.00, '2025-08-12 10:03:38.000000', '2025-08-12 12:33:51.897861'),
(32, 'Bukhaavia', 'admin@bukhaavia.com', 'Ba', 'Kia', '0794521763', 'https://res.cloudinary.com/otienobryan/image/upload/v1755084153/charters_logos/glceoiejykjqh2nxx3hi.jpg', 'Kenya', '66004613', NULL, NULL, 'charters_logos/glceoiejykjqh2nxx3hi', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755084173/charters_documents/bukhaavia/bukhaavia_agreementForm.pdf', 'charters_documents/bukhaavia/bukhaavia_agreementForm.pdf', 'charters SuperAdmin', '2025-08-13 11:23:51', 'Successfully approved', 10.00, '2025-08-13 11:22:33.000000', '2025-08-13 14:04:51.129498'),
(33, 'Astral Aviation', 'admin@astrolaviation.com', 'Astra', 'Lo', '0766590341', 'https://res.cloudinary.com/otienobryan/image/upload/v1755086771/charters_logos/j1yj9quohjdsetscjfod.jpg', 'Kenya', '77330298X', NULL, NULL, 'charters_logos/j1yj9quohjdsetscjfod', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755086789/charters_documents/astral_aviation/astral_aviation_agreementForm.pdf', 'charters_documents/astral_aviation/astral_aviation_agreementForm.pdf', 'charters SuperAdmin', '2025-08-13 12:07:02', 'Successfully approved', 10.00, '2025-08-13 12:06:12.000000', '2025-08-14 08:46:06.027760'),
(34, 'Africa Eco Adventures', 'admin@africaecoadventures.com', 'Afr', 'Core', '0722398657', 'https://res.cloudinary.com/otienobryan/image/upload/v1755154061/charters_logos/i1wunl8elyhhbjibt5bu.webp', 'Kenya', '6617253', NULL, NULL, 'charters_logos/i1wunl8elyhhbjibt5bu', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755154082/charters_documents/africa_eco_adventures/africa_eco_adventures_agreementForm.pdf', 'charters_documents/africa_eco_adventures/africa_eco_adventures_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 06:48:48', 'Successfully approved', 10.00, '2025-08-14 06:47:42.000000', '2025-08-14 08:51:26.493562'),
(35, 'Balloon Safaris Ltd', 'admin@balloonssafarisltd.com', 'Bale', 'Safi', '0733267986', 'https://res.cloudinary.com/otienobryan/image/upload/v1755155016/charters_logos/mwbrbwww9tj9awczuczd.jpg', 'Kenya', '8900125', NULL, NULL, 'charters_logos/mwbrbwww9tj9awczuczd', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755155031/charters_documents/balloon_safaris_ltd/balloon_safaris_ltd_agreementForm.pdf', 'charters_documents/balloon_safaris_ltd/balloon_safaris_ltd_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:04:45', 'Successfully approved', 10.00, '2025-08-14 07:03:37.000000', '2025-08-14 09:06:40.668869'),
(36, 'Kilimanjaro Balloon Safaris', 'admin@kilimanjaroballonsafaris.com', 'Kili', 'Jaro', '0711224455', 'https://res.cloudinary.com/otienobryan/image/upload/v1755155281/charters_logos/csvisxf9iegxpf4b3kvm.jpg', 'Kenya', '667023', NULL, NULL, 'charters_logos/csvisxf9iegxpf4b3kvm', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755155296/charters_documents/kilimanjaro_balloon_safaris/kilimanjaro_balloon_safaris_agreementForm.pdf', 'charters_documents/kilimanjaro_balloon_safaris/kilimanjaro_balloon_safaris_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:08:54', 'Successfully approved', 10.00, '2025-08-14 07:08:01.000000', '2025-08-14 09:10:46.118770'),
(37, 'Governor\'s Balloon Safaris', 'admin@governorsballoonsafaris.com', 'Gov', 'Bell', '0766957845', 'https://res.cloudinary.com/otienobryan/image/upload/v1755155569/charters_logos/rp0cwskkrqgfwqlbctce.png', 'Kenya', '4350687', NULL, NULL, 'charters_logos/rp0cwskkrqgfwqlbctce', 'Jane Owino', 72, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755155587/charters_documents/governors_balloon_safaris/governors_balloon_safaris_agreementForm.pdf', 'charters_documents/governors_balloon_safaris/governors_balloon_safaris_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:14:44', 'Successfully approved', 10.00, '2025-08-14 07:12:50.000000', '2025-08-14 08:54:07.000000'),
(38, 'Adventures Aloft', 'admin@adventuresaloft.com', 'Advent', 'Loft', '0799834762', 'https://res.cloudinary.com/otienobryan/image/upload/v1755155940/charters_logos/oilemsonkkolz7qkgnaq.jpg', 'Kenya', '7820374', NULL, NULL, 'charters_logos/oilemsonkkolz7qkgnaq', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755155954/charters_documents/adventures_aloft/adventures_aloft_agreementForm.pdf', 'charters_documents/adventures_aloft/adventures_aloft_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:19:50', 'Successfully approved', 10.00, '2025-08-14 07:19:00.000000', '2025-08-14 09:21:57.396822'),
(39, 'Masai Mara Balloon Safaris ', 'admin@masaimaraballonsafaris.com', 'Hot', 'Maa', '0756894354', 'https://res.cloudinary.com/otienobryan/image/upload/v1755156204/charters_logos/qweg14yniruclkgmdbdb.png', 'Kenya', '4678923', NULL, NULL, 'charters_logos/qweg14yniruclkgmdbdb', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755156219/charters_documents/masai_mara_balloon_safaris_/masai_mara_balloon_safaris__agreementForm.pdf', 'charters_documents/masai_mara_balloon_safaris_/masai_mara_balloon_safaris__agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:24:09', 'Successfully approved', 10.00, '2025-08-14 07:23:24.000000', '2025-08-14 09:27:08.319185'),
(40, 'Skyship', 'admin@skyshipsky.com', 'Sky', 'Hale', '0756432987', 'https://res.cloudinary.com/otienobryan/image/upload/v1755156653/charters_logos/l93webeaouho12mfn7un.webp', 'Kenya', '4890355', NULL, NULL, 'charters_logos/l93webeaouho12mfn7un', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755156681/charters_documents/skyship/skyship_agreementForm.pdf', 'charters_documents/skyship/skyship_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:31:56', 'Successfully approved', 10.00, '2025-08-14 07:30:53.000000', '2025-08-14 09:33:53.556365'),
(41, 'East African Charters', 'admin@eastafricancharters.com', 'East', 'Ria', '0789567321', 'https://res.cloudinary.com/otienobryan/image/upload/v1755156937/charters_logos/wt6de899ureblwqppddg.png', 'Kenya', '3900045', NULL, NULL, 'charters_logos/wt6de899ureblwqppddg', 'Jane Owino', 37, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1755156960/charters_documents/east_african_charters/east_african_charters_agreementForm.pdf', 'charters_documents/east_african_charters/east_african_charters_agreementForm.pdf', 'charters SuperAdmin', '2025-08-14 07:38:06', 'Successfully approved', 10.00, '2025-08-14 07:35:37.000000', '2025-08-14 09:40:11.878774');

-- --------------------------------------------------------

--
-- Table structure for table `charter_deals`
--

CREATE TABLE `charter_deals` (
  `id` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `aircraftId` int(11) NOT NULL,
  `originName` varchar(255) NOT NULL,
  `originLatitude` decimal(10,7) NOT NULL,
  `originLongitude` decimal(10,7) NOT NULL,
  `destinationName` varchar(255) NOT NULL,
  `destinationLatitude` decimal(10,7) NOT NULL,
  `destinationLongitude` decimal(10,7) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `pricePerSeat` decimal(10,2) NOT NULL,
  `discountPerSeat` int(11) DEFAULT 0,
  `availableSeats` int(11) NOT NULL,
  `pilotId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `fixedRouteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charter_deals`
--

INSERT INTO `charter_deals` (`id`, `companyId`, `aircraftId`, `originName`, `originLatitude`, `originLongitude`, `destinationName`, `destinationLatitude`, `destinationLongitude`, `date`, `time`, `pricePerSeat`, `discountPerSeat`, `availableSeats`, `pilotId`, `createdAt`, `updatedAt`, `fixedRouteId`) VALUES
(2, 12, 32, 'wilson airport', -1.3241213, 36.8112497, 'Pwani university', -3.6199601, 39.8462317, '2025-08-12', '16:42:00', 300.00, 5, 300, 20, '2025-08-11 11:43:16', '2025-08-11 11:43:16', NULL),
(3, 11, 10, 'moi international airport', -4.0265226, 39.6007207, 'wilson airport', -1.3241213, 36.8112497, '2025-08-15', '17:00:00', 400.00, 5, 6, 12, '2025-08-11 11:58:06', '2025-08-11 13:36:22', NULL),
(4, 11, 11, 'Pwani university', -3.6199601, 39.8462317, 'wilson airport', -1.3241213, 36.8112497, '2025-08-21', '19:00:00', 500.00, 4, 14, 9, '2025-08-11 11:59:18', '2025-08-11 11:59:18', NULL),
(5, 11, 8, 'pwani university', -3.6199601, 39.8462317, 'wilson airport', 29.1589961, -98.1251465, '2025-09-06', '19:00:00', 500.00, 5, 8, 10, '2025-08-11 13:35:35', '2025-08-11 13:35:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `charter_deal_amenities`
--

CREATE TABLE `charter_deal_amenities` (
  `id` int(11) NOT NULL,
  `dealId` int(11) DEFAULT NULL,
  `amenityId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charter_deal_amenities`
--

INSERT INTO `charter_deal_amenities` (`id`, `dealId`, `amenityId`) VALUES
(1, 6, 1),
(2, 6, 16),
(3, 6, 4),
(4, 6, 14),
(5, 6, 11),
(6, 6, 18),
(15, 3, 4),
(16, 3, 14),
(17, 3, 6),
(18, 3, 24),
(19, 3, 1),
(20, 3, 13),
(31, 4, 4),
(32, 4, 1),
(33, 4, 8),
(34, 4, 7),
(45, 1, 1),
(46, 1, 9),
(47, 1, 3),
(48, 1, 8),
(49, 1, 14),
(50, 1, 21),
(59, 8, 4),
(60, 8, 14),
(61, 8, 1),
(62, 8, 9),
(88, 2, 16),
(89, 2, 4),
(90, 2, 14),
(91, 2, 22),
(92, 2, 1),
(93, 9, 16),
(94, 9, 4),
(95, 9, 13),
(96, 9, 1),
(97, 5, 4),
(98, 5, 23),
(99, 7, 10),
(100, 7, 1),
(101, 7, 9),
(102, 7, 3),
(103, 10, 16),
(104, 10, 1),
(105, 10, 9),
(118, 12, 4),
(119, 12, 2),
(120, 12, 1),
(125, 11, 4),
(126, 11, 1),
(127, 11, 6),
(128, 11, 7),
(129, 13, 16),
(130, 13, 4),
(131, 13, 14),
(132, 13, 24);

-- --------------------------------------------------------

--
-- Table structure for table `drivers`
--

CREATE TABLE `drivers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `idNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `imagePublicId` varchar(255) DEFAULT NULL,
  `rate` float NOT NULL DEFAULT 0,
  `companyId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `drivers`
--

INSERT INTO `drivers` (`id`, `name`, `idNumber`, `email`, `phone`, `imageUrl`, `imagePublicId`, `rate`, `companyId`, `createdAt`, `updatedAt`) VALUES
(1, 'Jim', 'Tim', 'jim.tim@gmail.com', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1753363728/vehicle_drivers_images/p6o83qrey6bs0tmm4rwm.jpg', 'vehicle_drivers_images/p6o83qrey6bs0tmm4rwm', 300, 1, '2025-07-24 13:28:48', '2025-07-24 13:32:16');

-- --------------------------------------------------------

--
-- Table structure for table `fixed_routes`
--

CREATE TABLE `fixed_routes` (
  `id` int(11) NOT NULL,
  `origin` varchar(50) NOT NULL,
  `destination` varchar(50) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `fixed_routes`
--

INSERT INTO `fixed_routes` (`id`, `origin`, `destination`, `createdAt`, `updatedAt`) VALUES
(17, 'Nairobi', 'Kisumu', '2025-07-14 12:25:35.000000', '2025-07-15 12:49:13.626994'),
(18, 'Kisumu', 'Nairobi', '2025-07-14 12:25:35.000000', '2025-07-15 12:48:21.091700'),
(19, 'Mombasa', 'Nairobi', '2025-07-14 12:26:49.000000', '2025-07-15 12:48:56.185319'),
(20, 'Nairobi', 'Mombasa', '2025-07-14 12:26:49.000000', '2025-07-15 12:49:00.775455'),
(21, 'Nairobi', 'Kilifi', '2025-07-15 07:35:48.000000', '2025-07-15 12:49:04.839342'),
(22, 'Kilifi', 'Nairobi', '2025-07-15 07:35:49.000000', '2025-07-15 12:49:08.867041'),
(23, 'Entebbe', 'Kariadusi', '2025-08-09 22:52:50.000000', '2025-08-09 22:52:50.000000'),
(24, 'Kariadusi', 'Entebbe', '2025-08-09 22:52:50.000000', '2025-08-09 22:52:50.000000');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry_stops`
--

CREATE TABLE `inquiry_stops` (
  `id` int(11) NOT NULL,
  `bookingInquiryId` int(11) NOT NULL,
  `stopName` varchar(255) NOT NULL,
  `longitude` decimal(11,8) NOT NULL,
  `latitude` decimal(10,8) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `stopOrder` int(11) NOT NULL DEFAULT 1,
  `locationType` enum('airport','city','custom') DEFAULT 'custom',
  `locationCode` varchar(10) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `inquiry_stops`
--

INSERT INTO `inquiry_stops` (`id`, `bookingInquiryId`, `stopName`, `longitude`, `latitude`, `price`, `datetime`, `stopOrder`, `locationType`, `locationCode`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'Wilson Airport', 36.81470000, -1.32170000, 50000.00, '2024-01-15 13:00:00', 1, 'custom', 'WIL', '2025-08-06 08:04:45.706871', '2025-08-06 08:04:45.706871'),
(2, 2, 'Mombasa Airport', 39.59450000, -4.03480000, 75000.00, '2024-01-15 15:00:00', 2, 'custom', 'MBA', '2025-08-06 08:04:45.827025', '2025-08-06 08:04:45.827025');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(10) NOT NULL,
  `country` varchar(100) NOT NULL,
  `type` enum('airport','city','region') NOT NULL DEFAULT 'city',
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `name`, `code`, `country`, `type`, `latitude`, `longitude`, `createdAt`, `updatedAt`) VALUES
(1, 'Jomo Kenyatta International Airport', 'NBO', 'Kenya', 'airport', -1.31910000, 36.92770000, '2025-07-15 15:50:00.411054', '2025-07-17 14:25:47.315293'),
(2, 'Kisumu International Airport', 'KIS', 'Kenya', 'airport', -0.08610000, 34.72890000, '2025-07-15 15:50:00.411054', '2025-07-17 14:25:47.330439'),
(3, 'Moi International Airport', 'MBA', 'Kenya', 'airport', -4.03480000, 39.59450000, '2025-07-15 15:50:00.411054', '2025-07-17 14:25:47.336727'),
(4, 'Kilifi Airport', 'KLF', 'Kenya', 'airport', -3.51070000, 39.90930000, '2025-07-15 15:50:00.411054', '2025-07-17 14:25:47.347698'),
(5, 'Wilson Airport', 'WIL', 'Kenya', 'airport', -1.32170000, 36.81470000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(6, 'Eldoret International Airport', 'EDL', 'Kenya', 'airport', 0.40440000, 35.23890000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(7, 'Malindi Airport', 'MYD', 'Kenya', 'airport', -3.22930000, 40.10170000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(8, 'Lamu Airport', 'LAU', 'Kenya', 'airport', -2.25240000, 40.91310000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(9, 'Nakuru Airport', 'NUU', 'Kenya', 'airport', -0.29810000, 36.15940000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(10, 'Kakamega Airport', 'GGM', 'Kenya', 'airport', 0.27130000, 34.78730000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(11, 'Nairobi City', 'NBO_CITY', 'Kenya', 'city', -1.29210000, 36.82190000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(12, 'Mombasa City', 'MBA_CITY', 'Kenya', 'city', -4.04350000, 39.66820000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(13, 'Kisumu City', 'KIS_CITY', 'Kenya', 'city', -0.09170000, 34.76800000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(14, 'Nakuru City', 'NUU_CITY', 'Kenya', 'city', -0.30310000, 36.08000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(15, 'Eldoret City', 'EDL_CITY', 'Kenya', 'city', 0.52040000, 35.26990000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(16, 'Thika City', 'THK_CITY', 'Kenya', 'city', -1.03330000, 37.08330000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(17, 'Nyeri City', 'NYR_CITY', 'Kenya', 'city', -0.42010000, 36.94760000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(18, 'Machakos City', 'MCK_CITY', 'Kenya', 'city', -1.51670000, 37.26670000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(19, 'Diani Beach', 'DIA', 'Kenya', 'region', -4.30000000, 39.58330000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(20, 'Watamu Beach', 'WAT', 'Kenya', 'region', -3.36670000, 40.01670000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(21, 'Lamu Island', 'LAM', 'Kenya', 'region', -2.27190000, 40.90220000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(22, 'Amboseli National Park', 'AMB', 'Kenya', 'region', -2.65000000, 37.25000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(23, 'Masai Mara', 'MAA', 'Kenya', 'region', -1.50000000, 35.00000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(24, 'Tsavo East National Park', 'TSE', 'Kenya', 'region', -2.78330000, 38.75000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(25, 'Tsavo West National Park', 'TSW', 'Kenya', 'region', -2.91670000, 38.25000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000'),
(26, 'Samburu National Reserve', 'SAM', 'Kenya', 'region', 0.50000000, 37.50000000, '2025-07-17 14:25:47.000000', '2025-07-17 14:25:47.000000');

-- --------------------------------------------------------

--
-- Table structure for table `monetary_transactions_view`
--

CREATE TABLE `monetary_transactions_view` (
  `id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `booking_id` varchar(255) DEFAULT NULL,
  `transaction_type` enum('deposit','withdrawal','payment','refund','bonus','fee','loyalty_earned','loyalty_redeemed','loyalty_expired','loyalty_adjustment') DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `currency` varchar(3) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `balance_before` decimal(10,2) DEFAULT NULL,
  `balance_after` decimal(10,2) DEFAULT NULL,
  `payment_method` enum('card','mpesa','wallet','loyalty_points') DEFAULT NULL,
  `payment_reference` varchar(255) DEFAULT NULL,
  `status` enum('pending','completed','failed','cancelled') DEFAULT NULL,
  `metadata` longtext DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `completed_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `passengers`
--

CREATE TABLE `passengers` (
  `id` int(11) NOT NULL,
  `booking_id` varchar(255) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `id_passport_number` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `is_user` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `passengers`
--

INSERT INTO `passengers` (`id`, `booking_id`, `first_name`, `last_name`, `age`, `nationality`, `id_passport_number`, `created_at`, `is_user`) VALUES
(18, 'BK-17JUL25-095447-C7C07', 'John', 'Doe', 35, 'US', 'US123456789', '2025-07-16 08:04:02', 0),
(19, 'BK-17JUL25-020542-VYM03', 'Jane', 'Doe', 32, 'US', 'US987654321', '2025-07-16 08:04:02', 0),
(20, 'BK-16JUL25-131023-LPX01', 'John', 'Doe', 35, 'US', 'US123456789', '2025-07-16 08:10:24', 0),
(21, 'BK-16JUL25-131023-LPX01', 'Jane', 'Doe', 32, 'US', 'US987654321', '2025-07-16 08:10:24', 0),
(22, 'BK-16JUL25-132625-7R201', 'John', 'Doe', 35, 'US', 'US123456789', '2025-07-16 08:26:26', 0),
(23, 'BK-16JUL25-132625-7R201', 'Jane', 'Doe', 32, 'US', 'US987654321', '2025-07-16 08:26:26', 0),
(24, 'BK-16JUL25-201943-1X603', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 17:19:38', 0),
(25, 'BK-16JUL25-202229-TH902', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 17:22:25', 0),
(26, 'BK-16JUL25-210225-BKY05', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 18:02:20', 0),
(27, 'BK-16JUL25-210432-IA506', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 18:04:28', 0),
(28, 'BK-17JUL25-000838-H9G01', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 21:08:33', 0),
(29, 'BK-17JUL25-001142-M3C02', 'Test', 'User', NULL, NULL, NULL, '2025-07-16 21:11:36', 0),
(31, 'BK-17JUL25-095447-C7C07', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 06:54:46', 0),
(32, 'BK-17JUL25-100038-JXQ08', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 07:00:37', 0),
(33, 'BK-17JUL25-101633-HXV09', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 07:16:32', 0),
(34, 'BK-17JUL25-141001-QSB03', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 11:09:59', 0),
(35, 'BK-17JUL25-142014-31604', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 11:20:11', 0),
(36, 'BK-17JUL25-142809-QLO07', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 11:28:06', 0),
(37, 'BK-17JUL25-144502-PFB08', 'Test', 'User', NULL, NULL, NULL, '2025-07-17 11:44:59', 0),
(38, 'BK-17JUL25-144932-03109', 'jack', 'Peter', 27, 'kenyan', '452727', '2025-07-17 11:49:29', 0),
(39, 'BK-17JUL25-144932-03109', 'Test', 'User', 28, 'Kenyan', '326272', '2025-07-17 11:49:30', 0),
(40, 'BK-24JUL25-190952-RM401', 'Benjamin', 'Okwama', NULL, NULL, NULL, '2025-07-24 16:09:52', 0),
(41, 'BK-20250806-112505-GVL', 'Benjamin', 'Okwama', 25, 'Kenyan', 'N/A', '2025-08-06 08:25:05', 1),
(42, 'BK-06AUG25-121530-86I01', 'Benjamin', 'Okwama', NULL, NULL, NULL, '2025-08-06 09:15:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` varchar(255) NOT NULL,
  `booking_id` varchar(255) DEFAULT NULL,
  `bookingId` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `paymentMethod` enum('card','mpesa','wallet') NOT NULL,
  `totalAmount` decimal(10,2) NOT NULL,
  `platformFee` decimal(10,2) NOT NULL DEFAULT 0.00,
  `companyAmount` decimal(10,2) NOT NULL,
  `currency` varchar(3) NOT NULL DEFAULT 'USD',
  `transactionId` varchar(255) DEFAULT NULL,
  `paymentStatus` enum('pending','completed','failed','refunded') NOT NULL DEFAULT 'pending',
  `paymentGatewayResponse` text DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `payment_method` enum('card','mpesa','wallet') NOT NULL DEFAULT 'card',
  `payment_status` enum('pending','completed','failed','refunded') DEFAULT 'pending',
  `platform_fee` decimal(10,2) DEFAULT 0.00,
  `company_amount` decimal(10,2) DEFAULT 0.00,
  `transaction_id` varchar(255) DEFAULT NULL,
  `payment_gateway_response` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`payment_gateway_response`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `booking_id`, `bookingId`, `userId`, `company_id`, `paymentMethod`, `totalAmount`, `platformFee`, `companyAmount`, `currency`, `transactionId`, `paymentStatus`, `paymentGatewayResponse`, `createdAt`, `updatedAt`, `payment_method`, `payment_status`, `platform_fee`, `company_amount`, `transaction_id`, `payment_gateway_response`, `created_at`, `updated_at`) VALUES
('payment_1752751734830_9cjwtpjvv', NULL, 'BK-17JUL25-142809-QLO07', 'user_1752533042834_nsyj4iqyf', 11, 'card', 336.00, 16.00, 320.00, 'USD', 'ch_3Rlpz2Io90LS4Ah42qkvCS1J', 'completed', NULL, '2025-07-17 13:28:51.662724', '2025-07-17 13:28:51.662724', 'card', 'pending', 0.00, 0.00, NULL, NULL, '2025-07-17 11:28:51', '2025-07-17 11:28:51'),
('payment_1752752732125_4kikbujm3', NULL, 'BK-17JUL25-144502-PFB08', 'user_1752533042834_nsyj4iqyf', 9, 'card', 84.00, 4.00, 80.00, 'USD', 'ch_3RlqFMIo90LS4Ah41OULraR6', 'completed', NULL, '2025-07-17 13:45:28.765141', '2025-07-17 13:45:28.765141', 'card', 'pending', 0.00, 0.00, NULL, NULL, '2025-07-17 11:45:28', '2025-07-17 11:45:28'),
('payment_1752753032702_sb6xfs7bp', NULL, 'BK-17JUL25-144932-03109', 'user_1752533042834_nsyj4iqyf', 9, 'card', 95.20, 4.00, 91.20, 'USD', 'ch_3RlqJuIo90LS4Ah418hOpzYM', 'completed', NULL, '2025-07-17 13:50:29.308880', '2025-07-17 13:50:29.308880', 'card', 'pending', 0.00, 0.00, NULL, NULL, '2025-07-17 11:50:29', '2025-07-17 11:50:29');

-- --------------------------------------------------------

--
-- Table structure for table `pilots`
--

CREATE TABLE `pilots` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `idNumber` varchar(255) NOT NULL,
  `license` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `rate` float NOT NULL DEFAULT 0,
  `imagePublicId` varchar(255) DEFAULT NULL,
  `companyId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `pilots`
--

INSERT INTO `pilots` (`id`, `name`, `idNumber`, `license`, `email`, `phone`, `imageUrl`, `rate`, `imagePublicId`, `companyId`, `createdAt`, `updatedAt`) VALUES
(7, 'Jimmy Kamau', '46464646', 'License33', 'a@b.c', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1752584025/charter_pilots_images/i62par3ld8ca5cbghl27.webp', 70, 'charter_pilots_images/i62par3ld8ca5cbghl27', 9, '2025-07-15 12:53:44', '2025-07-15 12:53:44'),
(8, 'Omondi Njue', '33874296', '44eyeh', 'ab@gmail.com', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1752589348/charter_pilots_images/im0tftgku2xt6pp0ibdr.jpg', 100, 'charter_pilots_images/im0tftgku2xt6pp0ibdr', 9, '2025-07-15 14:22:27', '2025-07-16 06:13:37'),
(9, 'John Otieno', '23156872', 'KCAA/HPL/065198', 'john.otieno@rotorlink.co.ke', '+254733112233', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734792/aib_pilots_images/hkxgkmszvc7ajv49gbxh.jpg', 300, 'aib_pilots_images/hkxgkmszvc7ajv49gbxh', 11, '2025-07-17 06:38:13', '2025-07-17 11:04:06'),
(10, 'Faith Korir', '30587914', 'KCAA/HPL/091522', 'faith.korir@heliservice.co.ke', '+254710556677', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734560/charter_pilots_images/uwec8m2kape7rjdguptq.webp', 450, 'charter_pilots_images/uwec8m2kape7rjdguptq', 11, '2025-07-17 06:42:39', '2025-07-17 11:03:43'),
(11, 'Aisha Njeri', '29765431', 'KCAA/HPL/082174', 'aisha.njeri@skyrotors.co.ke', '+254721987654', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734730/charter_pilots_images/uyhxcqxo737uwlgqoduq.webp', 250, 'charter_pilots_images/uyhxcqxo737uwlgqoduq', 11, '2025-07-17 06:45:29', '2025-07-17 06:45:29'),
(12, 'Daniel Mwangi', '24578146', 'KCAA/HPL/073256', 'daniel.m@heliaviation.co.ke', '+254712345678', 'https://res.cloudinary.com/otienobryan/image/upload/v1752735492/aib_pilots_images/ycszrwqpmygbwf8zwrj6.jpg', 150, 'aib_pilots_images/ycszrwqpmygbwf8zwrj6', 11, '2025-07-17 06:48:19', '2025-07-18 13:22:51'),
(13, 'Jimmy Kamau', '46464646', 'License33', 'a@b.c', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1752584025/charter_pilots_images/i62par3ld8ca5cbghl27.webp', 70, 'charter_pilots_images/i62par3ld8ca5cbghl27', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(14, 'Omondi Njue', '33874296', '44eyeh', 'ab@gmail.com', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1752589348/charter_pilots_images/im0tftgku2xt6pp0ibdr.jpg', 100, 'charter_pilots_images/im0tftgku2xt6pp0ibdr', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(15, 'John Otieno', '23156872', 'KCAA/HPL/065198', 'john.otieno@rotorlink.co.ke', '+254733112233', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734792/aib_pilots_images/hkxgkmszvc7ajv49gbxh.jpg', 300, 'aib_pilots_images/hkxgkmszvc7ajv49gbxh', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(16, 'Faith Korir', '30587914', 'KCAA/HPL/091522', 'faith.korir@heliservice.co.ke', '+254710556677', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734560/charter_pilots_images/uwec8m2kape7rjdguptq.webp', 450, 'charter_pilots_images/uwec8m2kape7rjdguptq', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(17, 'Aisha Njeri', '29765431', 'KCAA/HPL/082174', 'aisha.njeri@skyrotors.co.ke', '+254721987654', 'https://res.cloudinary.com/otienobryan/image/upload/v1752734730/charter_pilots_images/uyhxcqxo737uwlgqoduq.webp', 250, 'charter_pilots_images/uyhxcqxo737uwlgqoduq', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(18, 'Daniel Mwangi', '24578146', 'KCAA/HPL/073256', 'daniel.m@heliaviation.co.ke', '+254712345678', 'https://res.cloudinary.com/otienobryan/image/upload/v1752735492/aib_pilots_images/ycszrwqpmygbwf8zwrj6.jpg', 150, 'aib_pilots_images/ycszrwqpmygbwf8zwrj6', 5, '2025-07-24 09:45:42', '2025-07-24 09:45:42'),
(19, 'Jimmy karauri', '33874296ffff', 'DDGG474747', 'ab@cit.com', '0715647474', 'https://res.cloudinary.com/otienobryan/image/upload/v1754036586/charter_pilots_images/fo0vaf63gkw2d35cmdyc.jpg', 150, 'charter_pilots_images/fo0vaf63gkw2d35cmdyc', 11, '2025-08-01 08:23:07', '2025-08-01 08:23:07'),
(20, 'peter', '272727272', 'AHFHDHD', 'peter@gmail.com', '0716266262', 'https://res.cloudinary.com/otienobryan/image/upload/v1754376044/charter_pilots_images/ajjm0ivaq7jlzwqdi2oj.jpg', 150, 'charter_pilots_images/ajjm0ivaq7jlzwqdi2oj', 12, '2025-08-05 06:40:44', '2025-08-05 06:40:44');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `country_code` varchar(5) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `language` varchar(50) DEFAULT 'en',
  `currency` varchar(20) DEFAULT 'USD',
  `timezone` varchar(50) DEFAULT 'UTC',
  `theme` enum('light','dark','auto') DEFAULT 'auto',
  `profile_image_url` text DEFAULT NULL,
  `profile_image_public_id` varchar(255) DEFAULT NULL,
  `loyalty_points` int(11) NOT NULL DEFAULT 0,
  `loyalty_tier` enum('bronze','silver','gold','platinum') DEFAULT 'bronze',
  `wallet_balance` decimal(10,2) NOT NULL DEFAULT 0.00,
  `is_active` tinyint(4) NOT NULL DEFAULT 1,
  `email_verified` tinyint(4) NOT NULL DEFAULT 0,
  `phone_verified` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `password` varchar(255) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `deletion_reason` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `phone_number`, `first_name`, `last_name`, `country_code`, `date_of_birth`, `nationality`, `language`, `currency`, `timezone`, `theme`, `profile_image_url`, `profile_image_public_id`, `loyalty_points`, `loyalty_tier`, `wallet_balance`, `is_active`, `email_verified`, `phone_verified`, `created_at`, `updated_at`, `password`, `deleted_at`, `deletion_reason`) VALUES
('user_1752093294468_5lug3jt2p', 'bennjiokwama@gmail.com', NULL, 'Benjamin', 'Okwama', NULL, NULL, NULL, 'en', 'USD', 'UTC', 'auto', NULL, NULL, 0, 'bronze', 0.00, 1, 0, 0, '2025-07-09 22:34:53.214162', '2025-07-09 22:34:53.214162', '$2b$10$YG/eQ.GQqLJVO6RMWfTNre5xdJYw83bLPfDVGnB6.igvAj9Mv03YG', NULL, NULL),
('user_1752097521091_cq7emunyt', 'test@example.com', '+1234567890', 'Updated', 'User', '+1', NULL, NULL, 'en', 'USD', 'UTC', 'auto', NULL, NULL, 0, 'bronze', 0.00, 1, 0, 0, '2025-07-09 23:45:19.955132', '2025-07-10 17:47:29.000000', '$2b$10$xoQehBjWpEra4v11su6nretZwxNySNq4NkUgG1bpNTmmq5n6qJTbC', NULL, NULL),
('user_1752533042834_nsyj4iqyf', 'test@aircharters.com', NULL, 'Test', 'User', NULL, NULL, NULL, 'en', 'USD', 'UTC', 'auto', NULL, NULL, 45950, 'bronze', 0.00, 1, 0, 0, '2025-07-15 00:44:01.000000', '2025-07-17 13:50:30.000000', '$2b$12$089Czgr6rL.R7dZEhJBGDuGOhnqna.f.2BD1k4eA8qbCf3J9SwyHS', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_events`
--

CREATE TABLE `user_events` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `booking_id` varchar(255) DEFAULT NULL,
  `type` enum('flight','reminder','personal') NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `event_date` datetime NOT NULL,
  `end_date` datetime DEFAULT NULL,
  `is_all_day` tinyint(1) DEFAULT 0,
  `location` varchar(255) DEFAULT NULL,
  `reminder_minutes` int(11) DEFAULT 60,
  `reminder_sent` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_event_summary`
--

CREATE TABLE `user_event_summary` (
  `user_id` varchar(255) DEFAULT NULL,
  `total_events` bigint(21) DEFAULT NULL,
  `flight_events` bigint(21) DEFAULT NULL,
  `reminders` bigint(21) DEFAULT NULL,
  `personal_events` bigint(21) DEFAULT NULL,
  `upcoming_events` bigint(21) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_files`
--

CREATE TABLE `user_files` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `booking_id` varchar(255) DEFAULT NULL,
  `type` enum('receipt','ticket','invoice','boarding_pass','itinerary','other') NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` text NOT NULL,
  `public_id` varchar(255) NOT NULL,
  `file_size` int(11) DEFAULT NULL,
  `file_format` varchar(10) DEFAULT NULL,
  `is_favorite` tinyint(1) DEFAULT 0,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_file_summary`
--

CREATE TABLE `user_file_summary` (
  `user_id` varchar(255) DEFAULT NULL,
  `total_files` bigint(21) DEFAULT NULL,
  `receipts` bigint(21) DEFAULT NULL,
  `tickets` bigint(21) DEFAULT NULL,
  `boarding_passes` bigint(21) DEFAULT NULL,
  `favorite_files` bigint(21) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `user_id` varchar(255) NOT NULL,
  `seat_preference` enum('window','aisle','any') DEFAULT 'any',
  `meal_preference` text DEFAULT NULL,
  `special_assistance` text DEFAULT NULL,
  `email_notifications` tinyint(1) DEFAULT 1,
  `sms_notifications` tinyint(1) DEFAULT 1,
  `push_notifications` tinyint(1) DEFAULT 1,
  `marketing_emails` tinyint(1) DEFAULT 1,
  `profile_visible` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `data_sharing` tinyint(1) DEFAULT 0,
  `location_tracking` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_trips`
--

CREATE TABLE `user_trips` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `booking_id` varchar(255) NOT NULL,
  `status` enum('upcoming','completed','cancelled') NOT NULL,
  `rating` int(11) DEFAULT NULL CHECK (`rating` >= 1 and `rating` <= 5),
  `review` text DEFAULT NULL,
  `review_date` timestamp NULL DEFAULT NULL,
  `photos` text DEFAULT NULL,
  `videos` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `completed_at` timestamp NULL DEFAULT NULL,
  `cancelled_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_trips`
--

INSERT INTO `user_trips` (`id`, `user_id`, `booking_id`, `status`, `rating`, `review`, `review_date`, `photos`, `videos`, `created_at`, `completed_at`, `cancelled_at`) VALUES
('trip_1752751735029_1nvxwo0mi', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-142809-QLO07', 'upcoming', NULL, NULL, NULL, NULL, NULL, '2025-07-17 11:28:51', NULL, NULL),
('trip_1752752732328_8p0mpef3q', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-144502-PFB08', 'upcoming', NULL, NULL, NULL, NULL, NULL, '2025-07-17 11:45:28', NULL, NULL),
('trip_1752753032900_0cdrjy11b', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-144932-03109', 'upcoming', NULL, NULL, NULL, NULL, NULL, '2025-07-17 11:50:29', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `vehicles`
--

CREATE TABLE `vehicles` (
  `id` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `name` varchar(100) NOT NULL COMMENT 'Display name for the vehicle (e.g., "Executive Sedan")',
  `registrationNumber` varchar(20) NOT NULL COMMENT 'License plate number',
  `type` enum('sedan','suv','luxury','minivan','limousine','executive_van','coach','electric','hybrid','motorcycle') NOT NULL,
  `make` varchar(100) NOT NULL COMMENT 'Vehicle brand (e.g., Mercedes-Benz)',
  `model` varchar(100) NOT NULL COMMENT 'Vehicle model (e.g., S-Class)',
  `year` int(11) NOT NULL,
  `capacity` int(11) NOT NULL COMMENT 'Passenger capacity including driver',
  `luggageCapacity` int(11) NOT NULL DEFAULT 2 COMMENT 'Number of standard suitcases',
  `isAvailable` tinyint(1) NOT NULL DEFAULT 1,
  `pricePerDay` decimal(10,2) DEFAULT NULL COMMENT 'Optional daily pricing',
  `description` text DEFAULT NULL COMMENT 'Description of the vehicle',
  `maintenanceStatus` enum('operational','maintenance','out_of_service') DEFAULT 'operational',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci COMMENT='Ground transportation vehicles for chauffer services';

--
-- Dumping data for table `vehicles`
--

INSERT INTO `vehicles` (`id`, `companyId`, `name`, `registrationNumber`, `type`, `make`, `model`, `year`, `capacity`, `luggageCapacity`, `isAvailable`, `pricePerDay`, `description`, `maintenanceStatus`, `createdAt`, `updatedAt`) VALUES
(6, 1, 'Range Rover Vogue TDV6', 'KDS 445Y', 'suv', 'Land Rover', 'Vogue TDV6', 2017, 5, 3, 1, 100.00, '3.0L TDV6 diesel engine, full-time 4WD, panoramic sunroof, premium Windsor leather seats, 10-inch dual touchscreen, Terrain Response 2, adaptive cruise control, and 825W Meridian sound system.', 'operational', '2025-07-24 12:14:26', '2025-07-24 12:14:26'),
(7, 1, 'Toyota Prado J250', 'KD 74774', 'suv', 'Toyota', 'Land Cruiser Prado J250', 2024, 4, 2, 1, 100.00, '2.8L turbo diesel engine, full-time 4WD, 10.3-inch infotainment touchscreen, multi-terrain select, adaptive variable suspension, ventilated leather seats, 360° camera, and Toyota Safety Sense suite.', 'operational', '2025-07-24 12:21:26', '2025-07-24 12:21:26'),
(8, 1, 'Porsche Cayenne GTS', 'KDK 135Y', 'luxury', 'Porsche', 'Cayenne GTS', 2020, 4, 2, 1, 150.00, '4.0L twin-turbo V8 engine, 453 hp, 8-speed Tiptronic S, adaptive air suspension with Porsche Active Suspension Management (PASM), 21-inch RS Spyder wheels, BOSE® surround sound, leather/Alcantara interior, and sport exhaust system.', 'operational', '2025-07-24 12:28:00', '2025-07-24 12:28:00'),
(9, 1, 'Volvo V60 T5', 'KDN 928X', 'sedan', 'Volvo', 'V60 T5', 2021, 4, 2, 1, 150.00, '2.0L turbocharged inline-4 engine delivering 250 hp, 8-speed Geartronic automatic transmission, AWD, panoramic sunroof, Harman Kardon premium sound system, leather seats, Pilot Assist semi-autonomous drive system, Apple CarPlay & Android Auto integration.', 'operational', '2025-07-24 12:36:10', '2025-07-24 12:36:10'),
(11, 3, 'Toyota Landcruiser V8', 'KDS 445Y-C3', 'suv', 'v8', 'Vogue TDV6', 2017, 5, 3, 1, 100.00, '3.0L TDV6 diesel engine, full-time 4WD, panoramic sunroof, premium Windsor leather seats, 10-inch dual touchscreen, Terrain Response 2, adaptive cruise control, and 825W Meridian sound system.', 'operational', '2025-08-05 16:10:18', '2025-08-06 07:15:21'),
(12, 3, 'Toyota Prado', 'KD 74774-C3', 'suv', 'Toyota', 'Land Cruiser Prado J250', 2024, 4, 2, 1, 100.00, '2.8L turbo diesel engine, full-time 4WD, 10.3-inch infotainment touchscreen, multi-terrain select, adaptive variable suspension, ventilated leather seats, 360° camera, and Toyota Safety Sense suite.', 'operational', '2025-08-05 16:10:18', '2025-08-06 07:15:54'),
(13, 3, 'Lexus LX450D', 'KDK 135Y-C3', 'luxury', 'Lexus', 'lexus', 2020, 4, 2, 1, 150.00, '4.0L twin-turbo V8 engine, 453 hp, 8-speed Tiptronic S, adaptive air suspension with Porsche Active Suspension Management (PASM), 21-inch RS Spyder wheels, BOSE® surround sound, leather/Alcantara interior, and sport exhaust system.', 'operational', '2025-08-05 16:10:18', '2025-08-06 07:20:20'),
(14, 3, 'Range Rover Vogue', 'KDN 928X-C3', 'luxury', 'Range rover', 'V60 T5', 2021, 4, 2, 1, 150.00, '2.0L turbocharged inline-4 engine delivering 250 hp, 8-speed Geartronic automatic transmission, AWD, panoramic sunroof, Harman Kardon premium sound system, leather seats, Pilot Assist semi-autonomous drive system, Apple CarPlay & Android Auto integration.', 'operational', '2025-08-05 16:10:18', '2025-08-06 07:24:03');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_companies`
--

CREATE TABLE `vehicle_companies` (
  `id` int(11) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contactPersonFirstName` varchar(255) NOT NULL,
  `contactPersonLastName` varchar(255) NOT NULL,
  `mobileNumber` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `logoPublicId` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `onboardedBy` varchar(255) NOT NULL,
  `adminId` int(11) NOT NULL,
  `status` enum('pendingReview','active','inactive','rejected','draft') NOT NULL DEFAULT 'draft',
  `licenseDocument` varchar(255) DEFAULT NULL,
  `licenseDocumentPublicId` varchar(255) DEFAULT NULL,
  `agreementForm` varchar(255) DEFAULT NULL,
  `agreementFormPublicId` varchar(255) DEFAULT NULL,
  `approvedBy` varchar(255) DEFAULT NULL,
  `approvedAt` datetime DEFAULT NULL,
  `reviewRemarks` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vehicle_companies`
--

INSERT INTO `vehicle_companies` (`id`, `companyName`, `email`, `contactPersonFirstName`, `contactPersonLastName`, `mobileNumber`, `logo`, `logoPublicId`, `country`, `city`, `onboardedBy`, `adminId`, `status`, `licenseDocument`, `licenseDocumentPublicId`, `agreementForm`, `agreementFormPublicId`, `approvedBy`, `approvedAt`, `reviewRemarks`, `createdAt`, `updatedAt`) VALUES
(1, 'Example Vehicle Co.', 'contact@jamesgiteredev.site', 'John', 'Mwangi', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1753265419/vehicle_companies/logos/mlhozntoaykdivm4x8yw.png', 'vehicle_companies/logos/mlhozntoaykdivm4x8yw', 'Kenya', 'Nairobi', 'Alice Cit', 2, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753270150/vehicle_companies/documents/example_vehicle_co/example_vehicle_co_license.pdf', 'vehicle_companies/documents/example_vehicle_co/example_vehicle_co_license.pdf', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753269796/vehicle_companies/documents/example_vehicle_co/example_vehicle_co_agreementForm.pdf', 'vehicle_companies/documents/example_vehicle_co/example_vehicle_co_agreementForm.pdf', 'Bob Super', '2025-07-23 11:39:14', 'Successfully approved', '2025-07-23 10:10:19', '2025-07-23 11:39:14'),
(2, 'Company 1', 'sasmypwa@gmail.com', 'jimy', 'Kalu', '071535353', 'https://res.cloudinary.com/otienobryan/image/upload/v1753267406/vehicle_companies/logos/pyqykmj99djgktldfbt9.png', 'vehicle_companies/logos/pyqykmj99djgktldfbt9', 'Kenya', 'Nairobi', 'Alice Cit', 2, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753271072/vehicle_companies/documents/company_1/company_1_license.pdf', 'vehicle_companies/documents/company_1/company_1_license.pdf', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753271059/vehicle_companies/documents/company_1/company_1_agreementForm.pdf', 'vehicle_companies/documents/company_1/company_1_agreementForm.pdf', 'charters SuperAdmin', '2025-08-06 08:37:48', 'Successfully approved', '2025-07-23 10:43:26', '2025-08-06 08:37:48'),
(3, 'Aston executive', 'giterejames10@gmail.com', 'jimmy', 'peter', '0714584667', 'https://res.cloudinary.com/otienobryan/image/upload/v1754312865/vehicle_companies/logos/ldb9izv7on5ed8vxpdja.jpg', 'vehicle_companies/logos/ldb9izv7on5ed8vxpdja', 'Kenya', 'Nairobi', 'Alice Cit', 2, 'active', NULL, NULL, 'https://res.cloudinary.com/otienobryan/raw/upload/v1754312888/vehicle_companies/documents/aston_executive/aston_executive_agreementForm.pdf', 'vehicle_companies/documents/aston_executive/aston_executive_agreementForm.pdf', 'Bob Super', '2025-08-04 13:09:44', 'Successfully approved', '2025-08-04 13:07:45', '2025-08-04 13:09:44');

-- --------------------------------------------------------

--
-- Table structure for table `vehicle_images`
--

CREATE TABLE `vehicle_images` (
  `id` int(11) NOT NULL,
  `vehicleId` int(11) NOT NULL,
  `url` text NOT NULL,
  `publicId` varchar(255) NOT NULL,
  `imageSlot` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `vehicle_images`
--

INSERT INTO `vehicle_images` (`id`, `vehicleId`, `url`, `publicId`, `imageSlot`, `createdAt`, `updatedAt`) VALUES
(29, 6, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359262/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image1/je1z0tldin4ubzp4obvn.webp', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image1/je1z0tldin4ubzp4obvn', 'image1', '2025-07-24 12:14:26', '2025-07-24 12:14:26'),
(30, 6, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359263/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image2/r84nso3pa2yfn9jvc7l2.jpg', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image2/r84nso3pa2yfn9jvc7l2', 'image2', '2025-07-24 12:14:26', '2025-07-24 12:14:26'),
(31, 6, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359264/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p.webp', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p', 'image3', '2025-07-24 12:14:26', '2025-07-24 12:14:26'),
(32, 6, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359265/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc.jpg', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc', 'image4', '2025-07-24 12:14:26', '2025-07-24 12:14:26'),
(33, 7, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359683/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image1/sp0maydj2jbjm6r8q9x5.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image1/sp0maydj2jbjm6r8q9x5', 'image1', '2025-07-24 12:21:26', '2025-07-24 12:21:26'),
(34, 7, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359683/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image2/riq3ytf5zywauxzbkand.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image2/riq3ytf5zywauxzbkand', 'image2', '2025-07-24 12:21:26', '2025-07-24 12:21:26'),
(35, 7, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359684/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh', 'image3', '2025-07-24 12:21:26', '2025-07-24 12:21:26'),
(36, 7, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359685/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl', 'image4', '2025-07-24 12:21:26', '2025-07-24 12:21:26'),
(37, 8, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360077/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image1/e222mmdoxt2v1y5rjw8x.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image1/e222mmdoxt2v1y5rjw8x', 'image1', '2025-07-24 12:28:00', '2025-07-24 12:28:00'),
(38, 8, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360078/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image2/xosphxwxzngmbb50ktap.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image2/xosphxwxzngmbb50ktap', 'image2', '2025-07-24 12:28:00', '2025-07-24 12:28:00'),
(39, 8, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360078/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image3/reiq3tzrkviwpwybuyxn.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image3/reiq3tzrkviwpwybuyxn', 'image3', '2025-07-24 12:28:00', '2025-07-24 12:28:00'),
(40, 8, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360079/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image4/rjksqz5aldbpd6qsc6ji.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image4/rjksqz5aldbpd6qsc6ji', 'image4', '2025-07-24 12:28:00', '2025-07-24 12:28:00'),
(41, 9, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360566/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image1/bzwbddo09ajekczpt5rq.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image1/bzwbddo09ajekczpt5rq', 'image1', '2025-07-24 12:36:10', '2025-07-24 12:36:10'),
(42, 9, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360567/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image2/sc3pffrhbnrkggi0yqe7.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image2/sc3pffrhbnrkggi0yqe7', 'image2', '2025-07-24 12:36:10', '2025-07-24 12:36:10'),
(43, 9, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360568/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image3/mng0yjdcnvrxn9zb3crj.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image3/mng0yjdcnvrxn9zb3crj', 'image3', '2025-07-24 12:36:10', '2025-07-24 12:36:10'),
(44, 9, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360569/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image4/vr2iw4x9vhqhlpejtk6l.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image4/vr2iw4x9vhqhlpejtk6l', 'image4', '2025-07-24 12:36:10', '2025-07-24 12:36:10'),
(45, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465257/vehicles/vh_138855cb-f069-4250-9da4-4e30d2463ffb/image1/wwzlgrsoclimj4vx0fpb.jpg', 'vehicles/vh_138855cb-f069-4250-9da4-4e30d2463ffb/image1/wwzlgrsoclimj4vx0fpb', 'image1', '2025-08-05 16:21:08', '2025-08-06 07:27:40'),
(46, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465258/vehicles/vh_138855cb-f069-4250-9da4-4e30d2463ffb/image2/z8wce9g13fhld06igrs0.jpg', 'vehicles/vh_138855cb-f069-4250-9da4-4e30d2463ffb/image2/z8wce9g13fhld06igrs0', 'image2', '2025-08-05 16:21:08', '2025-08-06 07:27:40'),
(47, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359264/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p.webp', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(48, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359265/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc.jpg', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(52, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464260/vehicles/vh_2366c7f6-eb65-4dd8-bcf7-2f3aff7948a9/image1/xqa2zmjcqhayazxeahpl.jpg', 'vehicles/vh_2366c7f6-eb65-4dd8-bcf7-2f3aff7948a9/image1/xqa2zmjcqhayazxeahpl', 'image1', '2025-08-05 16:21:08', '2025-08-06 07:11:03'),
(53, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464261/vehicles/vh_2366c7f6-eb65-4dd8-bcf7-2f3aff7948a9/image2/kquhaxhlx6vtiljbtsvj.jpg', 'vehicles/vh_2366c7f6-eb65-4dd8-bcf7-2f3aff7948a9/image2/kquhaxhlx6vtiljbtsvj', 'image2', '2025-08-05 16:21:08', '2025-08-06 07:11:03'),
(54, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359684/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(55, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359685/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(59, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464816/vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image1/yzbzcqvfkhhe3fod70br.jpg', 'vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image1/yzbzcqvfkhhe3fod70br', 'image1', '2025-08-05 16:21:08', '2025-08-06 07:20:21'),
(60, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464817/vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image2/eqonb0wlsrl9qtzbsiws.jpg', 'vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image2/eqonb0wlsrl9qtzbsiws', 'image2', '2025-08-05 16:21:08', '2025-08-06 07:20:21'),
(61, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464818/vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image3/vdopo3if1woq0do62byy.jpg', 'vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image3/vdopo3if1woq0do62byy', 'image3', '2025-08-05 16:21:08', '2025-08-06 07:20:21'),
(62, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1754464818/vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image4/sg5opnszbqrqliakjuf7.jpg', 'vehicles/vh_c09e76e2-4065-4155-bd24-3a06a39180e9/image4/sg5opnszbqrqliakjuf7', 'image4', '2025-08-05 16:21:08', '2025-08-06 07:20:21'),
(66, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465039/vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image1/y8u1pwtbq548knh6zrmy.jpg', 'vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image1/y8u1pwtbq548knh6zrmy', 'image1', '2025-08-05 16:21:08', '2025-08-06 07:24:04'),
(67, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465040/vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image2/zgyg0nyczu5ohoqhncp8.jpg', 'vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image2/zgyg0nyczu5ohoqhncp8', 'image2', '2025-08-05 16:21:08', '2025-08-06 07:24:04'),
(68, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465041/vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image3/oboltd2ej9vjp65i05af.jpg', 'vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image3/oboltd2ej9vjp65i05af', 'image3', '2025-08-05 16:21:08', '2025-08-06 07:24:04'),
(69, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1754465041/vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image4/scmtfc9sh2wxekhi8bpj.jpg', 'vehicles/vh_1fe6116e-6ca9-4eae-8aeb-734cec7d064a/image4/scmtfc9sh2wxekhi8bpj', 'image4', '2025-08-05 16:21:08', '2025-08-06 07:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `wallet_transactions`
--

CREATE TABLE `wallet_transactions` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `booking_id` varchar(255) DEFAULT NULL,
  `transaction_type` enum('deposit','withdrawal','payment','refund','bonus','fee','loyalty_earned','loyalty_redeemed','loyalty_expired','loyalty_adjustment') NOT NULL,
  `amount` decimal(10,2) NOT NULL DEFAULT 0.00,
  `points_amount` int(11) NOT NULL DEFAULT 0,
  `currency` varchar(3) DEFAULT 'USD',
  `description` varchar(255) NOT NULL,
  `reference` varchar(100) DEFAULT NULL,
  `balance_before` decimal(10,2) NOT NULL DEFAULT 0.00,
  `balance_after` decimal(10,2) NOT NULL DEFAULT 0.00,
  `points_before` int(11) NOT NULL DEFAULT 0,
  `points_after` int(11) NOT NULL DEFAULT 0,
  `payment_method` enum('card','mpesa','wallet','loyalty_points') DEFAULT NULL,
  `payment_reference` varchar(255) DEFAULT NULL,
  `status` enum('pending','completed','failed','cancelled') DEFAULT 'pending',
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `completed_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `wallet_transactions`
--

INSERT INTO `wallet_transactions` (`id`, `user_id`, `booking_id`, `transaction_type`, `amount`, `points_amount`, `currency`, `description`, `reference`, `balance_before`, `balance_after`, `points_before`, `points_after`, `payment_method`, `payment_reference`, `status`, `metadata`, `expires_at`, `created_at`, `completed_at`) VALUES
('tx_1752661243825_0gsgavy7o', 'user_1752533042834_nsyj4iqyf', 'BK-16JUL25-131023-LPX01', 'loyalty_earned', 0.00, 7500, 'USD', 'Booking AC623789U9S - Earned 7500 miles from $1500 payment', NULL, 0.00, 0.00, 22500, 30000, NULL, NULL, 'completed', NULL, NULL, '2025-07-16 08:20:44', '2025-07-16 09:20:43'),
('tx_1752662114056_8k3difomf', 'user_1752533042834_nsyj4iqyf', 'BK-16JUL25-132625-7R201', 'loyalty_earned', 0.00, 7500, 'USD', 'Booking AC585641W6G - Earned 7500 miles from $1500 payment', NULL, 0.00, 0.00, 30000, 37500, NULL, NULL, 'completed', NULL, NULL, '2025-07-16 08:35:14', '2025-07-16 09:35:14'),
('tx_1752707195728_w6f62lyb3', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-020542-VYM03', 'loyalty_earned', 0.00, 5874, 'USD', 'Booking AC143079TLH - Earned 5874 miles from $1174.88 payment', NULL, 0.00, 0.00, 37500, 43374, NULL, NULL, 'completed', NULL, NULL, '2025-07-16 23:06:29', '2025-07-17 00:06:35'),
('tx_1752751735694_x6x6dos1l', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-142809-QLO07', 'loyalty_earned', 0.00, 1680, 'USD', 'Booking AC689944M7Z - Earned 1680 miles from $336 payment', NULL, 0.00, 0.00, 43374, 45054, NULL, NULL, 'completed', NULL, NULL, '2025-07-17 11:28:52', '2025-07-17 12:28:55'),
('tx_1752752732987_hel96nt0c', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-144502-PFB08', 'loyalty_earned', 0.00, 420, 'USD', 'Booking AC702787U7M - Earned 420 miles from $84 payment', NULL, 0.00, 0.00, 45054, 45474, NULL, NULL, 'completed', NULL, NULL, '2025-07-17 11:45:29', '2025-07-17 12:45:32'),
('tx_1752753033626_qdykgzeng', 'user_1752533042834_nsyj4iqyf', 'BK-17JUL25-144932-03109', 'loyalty_earned', 0.00, 476, 'USD', 'Booking AC973122K2I - Earned 476 miles from $95.2 payment', NULL, 0.00, 0.00, 45474, 45950, NULL, NULL, 'completed', NULL, NULL, '2025-07-17 11:50:30', '2025-07-17 12:50:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminNotifications`
--
ALTER TABLE `adminNotifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `agent_details`
--
ALTER TABLE `agent_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `adminId` (`adminId`);

--
-- Indexes for table `aircrafts`
--
ALTER TABLE `aircrafts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_f07333b2229059cc039b6bc2c8` (`registrationNumber`);

--
-- Indexes for table `aircraft_amenities`
--
ALTER TABLE `aircraft_amenities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aircraftId` (`aircraftId`),
  ADD KEY `amenityId` (`amenityId`);

--
-- Indexes for table `aircraft_calendar`
--
ALTER TABLE `aircraft_calendar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_aircraft_time` (`aircraftId`,`startDateTime`,`endDateTime`),
  ADD KEY `idx_event_type` (`eventType`),
  ADD KEY `idx_booking` (`bookingId`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `idx_aircraft_calendar_search` (`aircraftId`,`startDateTime`,`endDateTime`,`eventType`),
  ADD KEY `idx_aircraft_calendar_availability` (`eventType`,`startDateTime`,`endDateTime`);

--
-- Indexes for table `aircraft_images`
--
ALTER TABLE `aircraft_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `aircraftId` (`aircraftId`);

--
-- Indexes for table `aircraft_type_image_placeholders`
--
ALTER TABLE `aircraft_type_image_placeholders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dealId` (`dealId`),
  ADD KEY `booking_status` (`bookingStatus`),
  ADD KEY `payment_status` (`paymentStatus`),
  ADD KEY `idx_bookings_payment_transaction_id` (`paymentTransactionId`),
  ADD KEY `idx_bookings_loyalty_earned` (`loyalty_points_earned`),
  ADD KEY `idx_bookings_loyalty_redeemed` (`loyalty_points_redeemed`),
  ADD KEY `idx_bookings_company_id` (`company_id`);

--
-- Indexes for table `booking_inquiries`
--
ALTER TABLE `booking_inquiries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`userId`),
  ADD KEY `idx_aircraft_id` (`aircraftId`),
  ADD KEY `idx_status` (`inquiryStatus`);

--
-- Indexes for table `booking_timeline`
--
ALTER TABLE `booking_timeline`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookingId` (`bookingId`);

--
-- Indexes for table `charters_admins`
--
ALTER TABLE `charters_admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `charters_companies`
--
ALTER TABLE `charters_companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `charter_deals`
--
ALTER TABLE `charter_deals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `aircraftId` (`aircraftId`),
  ADD KEY `pilotId` (`pilotId`),
  ADD KEY `fixedRouteId` (`fixedRouteId`);

--
-- Indexes for table `charter_deal_amenities`
--
ALTER TABLE `charter_deal_amenities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dealId` (`dealId`),
  ADD KEY `amenityId` (`amenityId`);

--
-- Indexes for table `drivers`
--
ALTER TABLE `drivers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `fixed_routes`
--
ALTER TABLE `fixed_routes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `inquiry_stops`
--
ALTER TABLE `inquiry_stops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_booking_inquiry_id` (`bookingInquiryId`),
  ADD KEY `idx_stop_order` (`stopOrder`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD KEY `idx_locations_type` (`type`),
  ADD KEY `idx_locations_country` (`country`),
  ADD KEY `idx_locations_coordinates` (`latitude`,`longitude`),
  ADD KEY `idx_locations_search` (`name`,`code`,`country`);

--
-- Indexes for table `passengers`
--
ALTER TABLE `passengers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`),
  ADD KEY `idx_passengers_is_user` (`is_user`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookingId` (`bookingId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `payment_status` (`paymentStatus`),
  ADD KEY `idx_payments_booking_id` (`booking_id`),
  ADD KEY `idx_payments_user_id` (`userId`),
  ADD KEY `idx_payments_company_id` (`company_id`),
  ADD KEY `idx_payments_status` (`paymentStatus`);

--
-- Indexes for table `pilots`
--
ALTER TABLE `pilots`
  ADD PRIMARY KEY (`id`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD UNIQUE KEY `IDX_17d1817f241f10a3dbafb169fd` (`phone_number`),
  ADD KEY `idx_users_loyalty_tier` (`loyalty_tier`),
  ADD KEY `idx_users_loyalty_points` (`loyalty_points`),
  ADD KEY `idx_users_deleted_at` (`deleted_at`),
  ADD KEY `idx_users_is_active` (`is_active`);

--
-- Indexes for table `user_events`
--
ALTER TABLE `user_events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_events_booking` (`booking_id`),
  ADD KEY `idx_user_events_user_date` (`user_id`,`event_date`),
  ADD KEY `idx_user_events_type` (`type`);

--
-- Indexes for table `user_files`
--
ALTER TABLE `user_files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_files_booking` (`booking_id`),
  ADD KEY `idx_user_files_user_type` (`user_id`,`type`),
  ADD KEY `idx_user_files_favorite` (`is_favorite`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `idx_user_profile_visible` (`profile_visible`),
  ADD KEY `idx_user_profile_data_sharing` (`data_sharing`);

--
-- Indexes for table `user_trips`
--
ALTER TABLE `user_trips`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_trips_booking` (`booking_id`),
  ADD KEY `idx_user_trips_user_status` (`user_id`,`status`),
  ADD KEY `idx_user_trips_rating` (`rating`),
  ADD KEY `idx_user_trips_created` (`created_at`);

--
-- Indexes for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `registrationNumber` (`registrationNumber`),
  ADD KEY `companyId` (`companyId`);

--
-- Indexes for table `vehicle_companies`
--
ALTER TABLE `vehicle_companies`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `vehicle_images`
--
ALTER TABLE `vehicle_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicleId` (`vehicleId`);

--
-- Indexes for table `wallet_transactions`
--
ALTER TABLE `wallet_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_wallet_user_type` (`user_id`,`transaction_type`),
  ADD KEY `idx_wallet_status` (`status`),
  ADD KEY `idx_wallet_created` (`created_at`),
  ADD KEY `idx_wallet_booking` (`booking_id`),
  ADD KEY `idx_wallet_payment_method` (`payment_method`),
  ADD KEY `idx_wallet_expires` (`expires_at`),
  ADD KEY `idx_wallet_loyalty` (`transaction_type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminNotifications`
--
ALTER TABLE `adminNotifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `agent_details`
--
ALTER TABLE `agent_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `aircrafts`
--
ALTER TABLE `aircrafts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT for table `aircraft_amenities`
--
ALTER TABLE `aircraft_amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `aircraft_calendar`
--
ALTER TABLE `aircraft_calendar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `aircraft_images`
--
ALTER TABLE `aircraft_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=369;

--
-- AUTO_INCREMENT for table `aircraft_type_image_placeholders`
--
ALTER TABLE `aircraft_type_image_placeholders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `booking_inquiries`
--
ALTER TABLE `booking_inquiries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `booking_timeline`
--
ALTER TABLE `booking_timeline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `charters_admins`
--
ALTER TABLE `charters_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `charters_companies`
--
ALTER TABLE `charters_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `charter_deals`
--
ALTER TABLE `charter_deals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `charter_deal_amenities`
--
ALTER TABLE `charter_deal_amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT for table `drivers`
--
ALTER TABLE `drivers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `fixed_routes`
--
ALTER TABLE `fixed_routes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `inquiry_stops`
--
ALTER TABLE `inquiry_stops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `passengers`
--
ALTER TABLE `passengers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `pilots`
--
ALTER TABLE `pilots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `vehicle_companies`
--
ALTER TABLE `vehicle_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vehicle_images`
--
ALTER TABLE `vehicle_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `aircraft_amenities`
--
ALTER TABLE `aircraft_amenities`
  ADD CONSTRAINT `aircraft_amenities_ibfk_1` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `aircraft_amenities_ibfk_2` FOREIGN KEY (`amenityId`) REFERENCES `amenities` (`id`);

--
-- Constraints for table `aircraft_calendar`
--
ALTER TABLE `aircraft_calendar`
  ADD CONSTRAINT `aircraft_calendar_ibfk_1` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `aircraft_calendar_ibfk_2` FOREIGN KEY (`companyId`) REFERENCES `charters_companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `booking_inquiries`
--
ALTER TABLE `booking_inquiries`
  ADD CONSTRAINT `booking_inquiries_ibfk_1` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `booking_inquiries_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `charter_deals`
--
ALTER TABLE `charter_deals`
  ADD CONSTRAINT `charter_deals_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `charters_companies` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_deals_ibfk_2` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_deals_ibfk_3` FOREIGN KEY (`pilotId`) REFERENCES `pilots` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_deals_ibfk_4` FOREIGN KEY (`fixedRouteId`) REFERENCES `fixed_routes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `drivers`
--
ALTER TABLE `drivers`
  ADD CONSTRAINT `drivers_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `vehicle_companies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `inquiry_stops`
--
ALTER TABLE `inquiry_stops`
  ADD CONSTRAINT `inquiry_stops_ibfk_1` FOREIGN KEY (`bookingInquiryId`) REFERENCES `booking_inquiries` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `vehicles`
--
ALTER TABLE `vehicles`
  ADD CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`companyId`) REFERENCES `vehicle_companies` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `vehicle_images`
--
ALTER TABLE `vehicle_images`
  ADD CONSTRAINT `vehicle_images_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
