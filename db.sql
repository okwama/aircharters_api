-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 06, 2025 at 05:03 AM
-- Server version: 10.6.22-MariaDB-cll-lve
-- PHP Version: 8.3.23

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
(80, 'citAdmin', 'Vehicle company submitted for review', 'Alice, your vehicle company \"Aston executive\" has been submitted for review.', 0, '2025-08-04 13:08:15', '2025-08-04 13:08:15', 2),
(82, 'citAdmin', 'Vehicle company approved', 'Vehicle company \"Aston executive\" you onboarded has been approved', 0, '2025-08-04 13:09:45', '2025-08-04 13:09:45', 2),
(83, '', 'Vehicle company approved', 'Your vehicle company \"Aston executive\" has been approved', 0, '2025-08-04 13:09:45', '2025-08-04 13:09:45', 35);

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
  `baseCity` varchar(100) DEFAULT NULL COMMENT 'City or town associated with the base airport'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `aircrafts`
--

INSERT INTO `aircrafts` (`id`, `companyId`, `name`, `registrationNumber`, `type`, `model`, `manufacturer`, `yearManufactured`, `capacity`, `isAvailable`, `maintenanceStatus`, `createdAt`, `updatedAt`, `pricePerHour`, `baseAirport`, `baseCity`) VALUES
(5, 11, 'Bell 206B JetRanger', 'N206JR', 'helicopter', '206B', 'Bell Helicopter', 2005, 5, 1, 'operational', '2025-07-17 06:28:03.000000', '2025-07-17 14:58:48.000000', 4300.00, 'Wilson Airport', 'Nairobi'),
(6, 11, 'Airbus H125', '5Y-HLI', 'helicopter', 'AS350 B3', 'Airbus Helicopters', 2018, 6, 1, 'operational', '2025-07-17 06:30:26.000000', '2025-07-17 14:57:51.000000', 3800.00, 'Wilson Airport', 'Nairobi'),
(7, 11, 'DASSAULT FALCON 200', 'A4353-576', 'jet', 'Falcon 200', 'Dassault Aviation', 2011, 10, 1, 'operational', '2025-07-17 07:09:42.000000', '2025-07-17 14:58:23.000000', 9000.00, 'Wilson Airport', 'Nairobi'),
(8, 11, 'Beechcraft King Air', 'ERWTW45-4', 'jet', 'King Air B200GT', 'Beechcraft ', 2009, 8, 1, 'operational', '2025-07-17 07:14:21.000000', '2025-07-17 14:58:07.000000', 3500.00, 'Wilson Airport', 'Nairobi'),
(9, 11, 'Airbus H125', 'EREY-57', 'helicopter', 'H125 ', 'Airbus Helicopters', 2014, 8, 1, 'operational', '2025-07-17 07:19:28.000000', '2025-07-17 14:57:35.000000', 2498.00, 'Wilson Airport', 'Nairobi'),
(10, 11, 'Bell 407', 'DFER8-7', 'helicopter', '407', 'Bell Helicopter', 2014, 6, 1, 'operational', '2025-07-17 07:34:20.000000', '2025-07-18 13:14:01.000000', 3999.00, 'Wilson Airport', 'Nairobi'),
(11, 11, 'Cessna 208B Grand', 'DGDG-57GH', 'fixedWing', '208B', 'Cessna Aircraft', 2008, 14, 1, 'operational', '2025-07-17 11:43:43.000000', '2025-07-17 14:54:05.000000', 1200.00, 'Northlands Airport', 'Nairobi'),
(12, 11, 'Airbus H125', 'SGSGS635', 'helicopter', 'EC130', 'Airbus', 2017, 5, 1, 'operational', '2025-07-17 15:53:01.000000', '2025-07-18 13:42:20.000000', 1900.00, 'Wilson Airport', 'Nairobi'),
(13, 12, 'Airbus A320', 'ADSF64', 'jet', 'A320-200', 'Airbus', 2011, 140, 1, 'operational', '2025-07-23 07:29:26.000000', '2025-07-23 07:29:26.000000', 9500.00, 'Entebbe Airport', 'Kampala'),
(14, 13, 'Cessna Caravan', 'AHDY5656', 'fixedWing', 'Cessna 208B Grand Caravan', 'Textron Aviation', 2011, 14, 1, 'operational', '2025-07-23 08:03:09.000000', '2025-07-23 08:03:09.000000', 3500.00, 'wilson airport', 'Nairobi'),
(15, 5, 'Cessna 208B Grand Caravan EX', '5Y-AIB1', 'fixedWing', '208B Grand Caravan EX', 'Cessna', 2012, 4, 1, 'operational', '2025-07-24 07:51:07.000000', '2025-07-24 07:51:07.000000', 3000.00, 'Wilson Airport', 'Nairobi'),
(16, 5, 'Beechcraft 1900C Freighter', '5Y-AIB2', 'fixedWing', '1900C', 'Beechcraft', 2013, 7, 1, 'operational', '2025-07-24 07:59:39.000000', '2025-07-24 07:59:39.000000', 5000.00, 'Wilson Airport', 'Nairobi');

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
(64, 16, 'seating', 'https://res.cloudinary.com/otienobryan/image/upload/v1753343978/aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/seating/xbclbt1xrjkuyo3k4vgz.jpg', 'aircrafts/ac_3278fae8-1b3e-4e2d-83a7-282f5c551367/seating/xbclbt1xrjkuyo3k4vgz', '2025-07-24 07:59:40', '2025-07-24 07:59:40');

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
('BK-17JUL25-142809-QLO07', 'user_1752533042834_nsyj4iqyf', 11, 11, 336.00, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC689944M7Z', 'ch_3Rlpz2Io90LS4Ah42qkvCS1J', 1680, 0, 0.00, NULL, '2025-07-17 13:28:06.801023', '2025-07-17 13:28:51.000000'),
('BK-17JUL25-144502-PFB08', 'user_1752533042834_nsyj4iqyf', 4, 9, 84.00, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC702787U7M', 'ch_3RlqFMIo90LS4Ah41OULraR6', 420, 0, 0.00, NULL, '2025-07-17 13:44:59.481124', '2025-07-17 13:45:28.000000'),
('BK-17JUL25-144932-03109', 'user_1752533042834_nsyj4iqyf', 8, 9, 95.20, 0, 0, 'United States', 'card', 'confirmed', 'paid', 'AC973122K2I', 'ch_3RlqJuIo90LS4Ah418hOpzYM', 476, 0, 0.00, NULL, '2025-07-17 13:49:29.754321', '2025-07-17 13:50:29.000000'),
('BK-24JUL25-190952-RM401', 'user_1752093294468_5lug3jt2p', 10, 0, 560.00, 0, 1, 'United States', 'card', 'pending', 'pending', 'AC392916XK9', NULL, 0, 0, 0.00, NULL, '2025-07-24 18:09:52.372292', '2025-07-24 18:09:52.372292');

-- --------------------------------------------------------

--
-- Table structure for table `booking_inquiries`
--

CREATE TABLE `booking_inquiries` (
  `id` varchar(255) NOT NULL,
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
(31, 'BK-24JUL25-190952-RM401', 'booking_created', 'Booking Created', 'Booking AC392916XK9 has been created successfully with 1 passengers. Loyalty points will be earned upon payment.', NULL, NULL, '{\"passengerCount\":1,\"companyId\":11,\"referenceNumber\":\"AC392916XK9\",\"totalPrice\":560,\"userIncluded\":false}', '2025-07-24 18:09:53.095621');

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
(1, 'Bob', NULL, 'Super', 'bob.superadmin@example.com', '$2b$10$vva6in6Pz0bOBfm/THPZpOjX0zsFMWoKijd0HqAN2o4qlPVydS6R.', 0, 'superadmin', NULL, NULL, 'active', '2025-07-04 06:43:47', '2025-07-08 10:56:49', NULL),
(2, 'Alice', NULL, 'Cit', 'alice.citadmin@example.com', '$2b$10$BH6v7fHXPhfiv5v4k5jpJOWqKUuw6ePqmIcugKLxmb/FROUa2EVzO', 0, 'citAdmin', NULL, NULL, 'active', '2025-07-04 06:49:19', '2025-07-14 13:31:21', NULL),
(3, 'Dave', NULL, 'Agent', 'dave.agent@example.com', '$2b$10$Fmd5QbY.0DA1g3nwnSLt2u0l3D4j0U5fkkIfITk3tLoIsttHNbs/y', 1, 'agent', NULL, NULL, 'active', '2025-07-04 06:49:39', '2025-07-04 06:49:39', NULL),
(29, 'spAir', NULL, 'Admin', 'admin@spairservices.co.ke', '$2b$10$oqfqjHtiDiy8oMdUuBTxX.6hux87P2QHDZ7LCwvXXIK4SxVHbrpNe', 0, 'companyAdmin', 11, NULL, 'active', '2025-07-17 04:33:37', '2025-07-17 04:35:04', NULL),
(31, 'Jimmy', NULL, 'Entebbe', 'info@entebbeairways.com', '$2b$10$OncuuozQft9WJxWdNP3m5O1eabtWYzB3oPXob3S2e4Gtwxplz084.', 0, 'companyAdmin', 12, NULL, 'active', '2025-07-23 07:20:21', '2025-07-23 07:20:21', NULL),
(32, 'Ralex', NULL, 'admin', 'info@ralexllc.com', '$2b$10$3hWpgUisLsTmevsSpIkaQu4iWrnjycXl2PSlhv4c2aJhgwlRjUwte', 0, 'companyAdmin', 13, NULL, 'active', '2025-07-23 08:00:00', '2025-07-23 08:00:00', NULL),
(33, 'John', NULL, 'Mwangi', 'contact@jamesgiteredev.site', '$2b$10$3uc4scOnuULoIhCxBtT/AeQ1M7UzOe9IMBYnP/PbIhf9ZXY7qFFwS', 0, 'vehicleCompanyAdmin', NULL, NULL, 'active', '2025-07-23 11:39:15', '2025-07-23 11:46:51', 1),
(34, 'Aib', NULL, 'Admin', 'aib@gmail.com', '$2b$10$CtJMMN8zZrQj2pBL5GCsWenbYeq8.4igteK03cAPmLzR8Xf6i4bQG', 0, 'companyAdmin', 5, NULL, 'active', '2025-07-24 07:29:46', '2025-07-24 07:29:46', NULL),
(35, 'jimmy', NULL, 'peter', 'giterejames10@gmail.com', '$2b$10$RGHJH1EDgZhjq9bvH2RnneZcFgdcFQ25OFVh3lTM.J.4L7Ho6mtkm', 0, 'vehicleCompanyAdmin', NULL, NULL, 'active', '2025-08-04 13:09:45', '2025-08-04 13:11:20', 3);

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
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charters_companies`
--

INSERT INTO `charters_companies` (`id`, `companyName`, `email`, `contactPersonFirstName`, `contactPersonLastName`, `mobileNumber`, `logo`, `country`, `licenseNumber`, `license`, `licensePublicId`, `logoPublicId`, `onboardedBy`, `adminId`, `status`, `agreementForm`, `agreementFormPublicId`, `approvedBy`, `approvedAt`, `reviewRemarks`, `createdAt`, `updatedAt`) VALUES
(5, 'Aib Aviation', 'aib@gmail.com', 'Alice', 'Kamau', '+254723456789', 'https://res.cloudinary.com/otienobryan/image/upload/v1751798157/charters_logos/sh7ytvzvaze7t9zsnljm.jpg', 'Kenya', 'GDGD4646', NULL, NULL, 'charters_logos/sh7ytvzvaze7t9zsnljm', 'Alice Cit', 34, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1751808498/charters_documents/aib/aib_agreementForm.pdf', 'charters_documents/aib/aib_agreementForm.pdf', 'Bob Super', '2025-07-24 10:23:45', 'Successfully approved', '2025-07-06 10:35:56.000000', '2025-07-24 07:29:46.000000'),
(11, 'SPAir Services', 'admin@spairservices.co.ke', 'spAir', 'Admin', '+254717815601', 'https://res.cloudinary.com/otienobryan/image/upload/v1752726601/charters_logos/pk4wp8rphog8dbphi30i.png', 'Kenya', ' K/CAA/004', NULL, NULL, 'charters_logos/pk4wp8rphog8dbphi30i', 'Alice Cit', 2, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1752726626/charters_documents/spair_services/spair_services_agreementForm.pdf', 'charters_documents/spair_services/spair_services_agreementForm.pdf', 'Bob Super', '2025-07-17 04:33:37', 'Successfully approved', '2025-07-17 04:29:59.000000', '2025-08-01 15:29:31.448480'),
(12, 'Entebbe Airways', 'info@entebbeairways.com', 'joe', 'Doe', '+256763001287', 'https://res.cloudinary.com/otienobryan/image/upload/v1753253075/charters_logos/tzkavlkvcrkxu8diqvb8.png', 'Uganda', 'AGDGD464', NULL, NULL, 'charters_logos/tzkavlkvcrkxu8diqvb8', 'Alice Cit', 31, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753253102/charters_documents/entebbe_airways/entebbe_airways_agreementForm.pdf', 'charters_documents/entebbe_airways/entebbe_airways_agreementForm.pdf', 'Bob Super', '2025-07-23 06:45:40', 'Successfully approved', '2025-07-23 06:44:35.000000', '2025-07-23 07:20:21.000000'),
(13, 'Ralex Aviation', 'info@ralexllc.com', 'Jimmy', 'Kamau', '+971566427742', 'https://res.cloudinary.com/otienobryan/image/upload/v1753257095/charters_logos/xjhlzhq6j6ca7dwdrfnf.png', 'Kenya', '3535F555', NULL, NULL, 'charters_logos/xjhlzhq6j6ca7dwdrfnf', 'Alice Cit', 32, 'active', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753257390/charters_documents/ralex_aviation/ralex_aviation_agreementForm.pdf', 'charters_documents/ralex_aviation/ralex_aviation_agreementForm.pdf', 'Bob superadmin', '2025-07-23 10:57:17', 'Approved successfully', '2025-07-23 07:51:35.000000', '2025-07-23 10:00:44.939626');

-- --------------------------------------------------------

--
-- Table structure for table `charter_deals`
--

CREATE TABLE `charter_deals` (
  `id` int(11) NOT NULL,
  `companyId` int(11) NOT NULL,
  `fixedRouteId` int(11) NOT NULL,
  `aircraftId` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `pricePerSeat` decimal(10,2) DEFAULT NULL,
  `discountPerSeat` int(11) DEFAULT 0,
  `pricePerHour` decimal(10,2) DEFAULT NULL,
  `discountPerHour` int(11) DEFAULT 0,
  `availableSeats` int(11) NOT NULL,
  `dealType` enum('privateCharter','jetSharing') NOT NULL DEFAULT 'privateCharter',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `pilotId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charter_deals`
--

INSERT INTO `charter_deals` (`id`, `companyId`, `fixedRouteId`, `aircraftId`, `date`, `time`, `pricePerSeat`, `discountPerSeat`, `pricePerHour`, `discountPerHour`, `availableSeats`, `dealType`, `createdAt`, `updatedAt`, `pilotId`) VALUES
(1, 5, 20, 2, '2025-07-18', '07:25:00', NULL, NULL, 90.00, 0, 0, 'privateCharter', '2025-07-15 08:25:27', '2025-07-16 20:02:20', NULL),
(2, 5, 20, 2, '2025-07-16', '03:28:00', NULL, NULL, 80.00, 5, 7, 'privateCharter', '2025-07-15 08:28:51', '2025-07-16 11:29:56', 8),
(3, 5, 20, 2, '2025-07-18', '07:29:00', NULL, NULL, 70.00, 5, 1, 'privateCharter', '2025-07-15 08:29:21', '2025-07-17 09:16:32', NULL),
(4, 11, 20, 1, '2025-07-20', '00:30:00', NULL, NULL, 75.00, 5, 3, 'privateCharter', '2025-07-15 08:30:09', '2025-07-17 13:44:59', NULL),
(5, 11, 20, 2, '2025-08-01', '02:35:00', 300.00, 10, NULL, NULL, 5, 'jetSharing', '2025-07-15 08:35:31', '2025-07-16 13:06:51', 7),
(6, 11, 20, 3, '2025-07-24', '19:41:00', NULL, NULL, 298.00, 0, 13, 'privateCharter', '2025-07-15 12:41:48', '2025-07-15 12:41:48', NULL),
(7, 12, 21, 2, '2025-07-17', '19:06:00', NULL, NULL, 120.00, 0, 9, 'privateCharter', '2025-07-15 13:08:44', '2025-07-16 14:03:00', 7),
(8, 12, 22, 3, '2025-07-31', '02:01:00', NULL, NULL, NULL, 0, 9, 'privateCharter', '2025-07-16 07:01:26', '2025-07-17 13:49:30', 8),
(9, 13, 19, 3, '2025-07-18', '19:05:00', NULL, NULL, 699.00, 0, 10, 'privateCharter', '2025-07-16 13:06:17', '2025-07-17 13:09:59', NULL),
(10, 11, 20, 6, '2025-07-23', '11:00:00', 300.00, 0, NULL, NULL, 4, 'jetSharing', '2025-07-17 07:00:04', '2025-07-24 18:09:52', 11),
(11, 11, 17, 8, '2025-07-24', '16:00:00', 200.00, 4, 300.00, 0, 5, 'jetSharing', '2025-07-17 08:01:34', '2025-07-22 07:15:34', 9),
(12, 11, 19, 12, '2025-07-25', '19:19:00', 300.00, 5, NULL, NULL, 6, 'jetSharing', '2025-07-18 13:20:34', '2025-07-18 13:20:34', 12),
(13, 12, 19, 13, '2025-08-08', '00:41:00', NULL, 0, NULL, NULL, 135, 'jetSharing', '2025-08-05 06:41:38', '2025-08-05 06:41:38', 20);

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
  `imageUrl` varchar(255) NOT NULL,
  `imagePublicId` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `fixed_routes`
--

INSERT INTO `fixed_routes` (`id`, `origin`, `destination`, `imageUrl`, `imagePublicId`, `createdAt`, `updatedAt`) VALUES
(17, 'Nairobi', 'Kisumu', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/vn1krr8jcvu46gwwr8uo', '2025-07-14 12:25:35.000000', '2025-07-15 12:49:13.626994'),
(18, 'Kisumu', 'Nairobi', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/vn1krr8jcvu46gwwr8uo', '2025-07-14 12:25:35.000000', '2025-07-15 12:48:21.091700'),
(19, 'Mombasa', 'Nairobi', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/sqgakhavyv6xqgx1dzsp', '2025-07-14 12:26:49.000000', '2025-07-15 12:48:56.185319'),
(20, 'Nairobi', 'Mombasa', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/sqgakhavyv6xqgx1dzsp', '2025-07-14 12:26:49.000000', '2025-07-15 12:49:00.775455'),
(21, 'Nairobi', 'Kilifi', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/fawsxkwr3yhqim41z9tg', '2025-07-15 07:35:48.000000', '2025-07-15 12:49:04.839342'),
(22, 'Kilifi', 'Nairobi', 'https://ik.imagekit.io/bja2qwwdjjy/Aircharter/Light%20Jet%20Luxury%20Aircraft_ujia5zwbw.webp?updatedAt=1749146878253', 'fixed_route_images/fawsxkwr3yhqim41z9tg', '2025-07-15 07:35:49.000000', '2025-07-15 12:49:08.867041');

-- --------------------------------------------------------

--
-- Table structure for table `inquiry_stops`
--

CREATE TABLE `inquiry_stops` (
  `id` int(11) NOT NULL,
  `bookingInquiryId` varchar(255) NOT NULL,
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
(40, 'BK-24JUL25-190952-RM401', 'Benjamin', 'Okwama', NULL, NULL, NULL, '2025-07-24 16:09:52', 0);

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
(11, 3, 'Range Rover Vogue TDV6', 'KDS 445Y-C3', 'suv', 'Land Rover', 'Vogue TDV6', 2017, 5, 3, 1, 100.00, '3.0L TDV6 diesel engine, full-time 4WD, panoramic sunroof, premium Windsor leather seats, 10-inch dual touchscreen, Terrain Response 2, adaptive cruise control, and 825W Meridian sound system.', 'operational', '2025-08-05 16:10:18', '2025-08-05 16:10:18'),
(12, 3, 'Toyota Prado J250', 'KD 74774-C3', 'suv', 'Toyota', 'Land Cruiser Prado J250', 2024, 4, 2, 1, 100.00, '2.8L turbo diesel engine, full-time 4WD, 10.3-inch infotainment touchscreen, multi-terrain select, adaptive variable suspension, ventilated leather seats, 360° camera, and Toyota Safety Sense suite.', 'operational', '2025-08-05 16:10:18', '2025-08-05 16:10:18'),
(13, 3, 'Porsche Cayenne GTS', 'KDK 135Y-C3', 'luxury', 'Porsche', 'Cayenne GTS', 2020, 4, 2, 1, 150.00, '4.0L twin-turbo V8 engine, 453 hp, 8-speed Tiptronic S, adaptive air suspension with Porsche Active Suspension Management (PASM), 21-inch RS Spyder wheels, BOSE® surround sound, leather/Alcantara interior, and sport exhaust system.', 'operational', '2025-08-05 16:10:18', '2025-08-05 16:10:18'),
(14, 3, 'Volvo V60 T5', 'KDN 928X-C3', 'sedan', 'Volvo', 'V60 T5', 2021, 4, 2, 1, 150.00, '2.0L turbocharged inline-4 engine delivering 250 hp, 8-speed Geartronic automatic transmission, AWD, panoramic sunroof, Harman Kardon premium sound system, leather seats, Pilot Assist semi-autonomous drive system, Apple CarPlay & Android Auto integration.', 'operational', '2025-08-05 16:10:18', '2025-08-05 16:10:18');

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
(2, 'Company 1', 'sasmypwa@gmail.com', 'jimy', 'Kalu', '071535353', 'https://res.cloudinary.com/otienobryan/image/upload/v1753267406/vehicle_companies/logos/pyqykmj99djgktldfbt9.png', 'vehicle_companies/logos/pyqykmj99djgktldfbt9', 'Kenya', 'Nairobi', 'Alice Cit', 2, 'pendingReview', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753271072/vehicle_companies/documents/company_1/company_1_license.pdf', 'vehicle_companies/documents/company_1/company_1_license.pdf', 'https://res.cloudinary.com/otienobryan/raw/upload/v1753271059/vehicle_companies/documents/company_1/company_1_agreementForm.pdf', 'vehicle_companies/documents/company_1/company_1_agreementForm.pdf', NULL, NULL, NULL, '2025-07-23 10:43:26', '2025-07-23 11:44:35'),
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
(45, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359262/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image1/je1z0tldin4ubzp4obvn.webp', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image1/je1z0tldin4ubzp4obvn', 'image1', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(46, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359263/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image2/r84nso3pa2yfn9jvc7l2.jpg', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image2/r84nso3pa2yfn9jvc7l2', 'image2', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(47, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359264/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p.webp', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image3/xodgakckf94vgzfu2n6p', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(48, 11, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359265/vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc.jpg', 'vehicles/vh_380204c2-ea66-41f3-bc6f-99a433128b55/image4/ryj1lvxf9kwgiduq7dyc', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(52, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359683/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image1/sp0maydj2jbjm6r8q9x5.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image1/sp0maydj2jbjm6r8q9x5', 'image1', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(53, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359683/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image2/riq3ytf5zywauxzbkand.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image2/riq3ytf5zywauxzbkand', 'image2', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(54, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359684/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image3/m6yf1g0tycvxddbufclh', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(55, 12, 'https://res.cloudinary.com/otienobryan/image/upload/v1753359685/vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl.jpg', 'vehicles/vh_44a0d32d-682b-42a7-8721-a6ca2eb1780e/image4/wvp9qlo0kwg3ebd7eyjl', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(59, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360077/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image1/e222mmdoxt2v1y5rjw8x.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image1/e222mmdoxt2v1y5rjw8x', 'image1', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(60, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360078/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image2/xosphxwxzngmbb50ktap.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image2/xosphxwxzngmbb50ktap', 'image2', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(61, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360078/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image3/reiq3tzrkviwpwybuyxn.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image3/reiq3tzrkviwpwybuyxn', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(62, 13, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360079/vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image4/rjksqz5aldbpd6qsc6ji.jpg', 'vehicles/vh_27627ef2-18c3-4ad0-a493-daede8cc3a4c/image4/rjksqz5aldbpd6qsc6ji', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(66, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360566/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image1/bzwbddo09ajekczpt5rq.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image1/bzwbddo09ajekczpt5rq', 'image1', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(67, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360567/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image2/sc3pffrhbnrkggi0yqe7.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image2/sc3pffrhbnrkggi0yqe7', 'image2', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(68, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360568/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image3/mng0yjdcnvrxn9zb3crj.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image3/mng0yjdcnvrxn9zb3crj', 'image3', '2025-08-05 16:21:08', '2025-08-05 16:21:08'),
(69, 14, 'https://res.cloudinary.com/otienobryan/image/upload/v1753360569/vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image4/vr2iw4x9vhqhlpejtk6l.jpg', 'vehicles/vh_5d8fb8ef-93da-4952-b0bc-9517301ce1f7/image4/vr2iw4x9vhqhlpejtk6l', 'image4', '2025-08-05 16:21:08', '2025-08-05 16:21:08');

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
  ADD KEY `fixedRouteId` (`fixedRouteId`),
  ADD KEY `aircraftId` (`aircraftId`),
  ADD KEY `fk_charter_deals_pilot` (`pilotId`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `agent_details`
--
ALTER TABLE `agent_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `aircrafts`
--
ALTER TABLE `aircrafts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `aircraft_calendar`
--
ALTER TABLE `aircraft_calendar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `aircraft_images`
--
ALTER TABLE `aircraft_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `booking_timeline`
--
ALTER TABLE `booking_timeline`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `charters_admins`
--
ALTER TABLE `charters_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `charters_companies`
--
ALTER TABLE `charters_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `charter_deals`
--
ALTER TABLE `charter_deals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `inquiry_stops`
--
ALTER TABLE `inquiry_stops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `passengers`
--
ALTER TABLE `passengers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `pilots`
--
ALTER TABLE `pilots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `vehicles`
--
ALTER TABLE `vehicles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `vehicle_companies`
--
ALTER TABLE `vehicle_companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vehicle_images`
--
ALTER TABLE `vehicle_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- Constraints for dumped tables
--

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
  ADD CONSTRAINT `fk_charter_deals_company` FOREIGN KEY (`companyId`) REFERENCES `charters_companies` (`id`) ON DELETE CASCADE;

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
