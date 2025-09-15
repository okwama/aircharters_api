-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 12, 2025 at 04:37 PM
-- Server version: 10.6.23-MariaDB-cll-lve
-- PHP Version: 8.4.11

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
-- Table structure for table `charter_bookings`
--

CREATE TABLE `charter_bookings` (
  `id` int(11) NOT NULL,
  `userId` varchar(255) NOT NULL COMMENT 'ID of the user who made the booking',
  `companyId` int(11) NOT NULL,
  `aircraftId` int(11) DEFAULT NULL COMMENT 'ID of the aircraft if it is a direct charter',
  `bookingType` enum('direct','deal','experience') NOT NULL COMMENT 'Determines whether it is a direct charter, deal, or experience',
  `dealId` int(11) DEFAULT NULL COMMENT 'ID of the deal if it is a deal booking',
  `experienceScheduleId` int(11) DEFAULT NULL COMMENT 'ID of the experience schedule if it is an experience booking',
  `totalPrice` decimal(10,2) DEFAULT NULL COMMENT 'Total price of the booking including tax',
  `taxType` varchar(50) DEFAULT NULL COMMENT 'e.g., VAT, GST, Sales Tax, etc.',
  `taxAmount` decimal(10,2) DEFAULT NULL COMMENT 'Tax amount for the booking',
  `subtotal` decimal(10,2) DEFAULT NULL COMMENT 'Subtotal of the booking before tax',
  `bookingStatus` enum('pending','priced','confirmed','completed','cancelled') NOT NULL DEFAULT 'pending',
  `paymentStatus` enum('pending','paid','failed','refunded') NOT NULL DEFAULT 'pending',
  `referenceNumber` varchar(50) NOT NULL,
  `specialRequirements` text DEFAULT NULL,
  `adminNotes` text DEFAULT NULL COMMENT 'Notes or feedback from the admin regarding this booking',
  `originName` varchar(255) DEFAULT NULL COMMENT 'Name of the origin',
  `originLatitude` decimal(10,7) DEFAULT NULL,
  `originLongitude` decimal(10,7) DEFAULT NULL,
  `destinationName` varchar(255) DEFAULT NULL COMMENT 'Name of the destination',
  `destinationLatitude` decimal(10,7) DEFAULT NULL COMMENT 'Latitude of the destination',
  `destinationLongitude` decimal(10,7) DEFAULT NULL COMMENT 'Longitude of the destination',
  `departureDateTime` datetime DEFAULT NULL COMMENT 'Scheduled departure date and time of the flight if its a direct charter null if its a deal or experience',
  `estimatedFlightHours` decimal(5,2) DEFAULT NULL COMMENT 'Estimated duration of the flight in hours',
  `estimatedArrivalTime` datetime DEFAULT NULL COMMENT 'Estimated arrival date and time of the flight',
  `createdAt` datetime NOT NULL,
  `totalAdults` int(11) DEFAULT 0 COMMENT 'Number of adult passengers for the booking',
  `totalChildren` int(11) DEFAULT 0 COMMENT 'Number of child passengers for the booking',
  `onboardDining` tinyint(1) NOT NULL DEFAULT 0 COMMENT 'Indicates if onboard dining is included in the booking',
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `charter_bookings`
--

INSERT INTO `charter_bookings` (`id`, `userId`, `companyId`, `aircraftId`, `bookingType`, `dealId`, `experienceScheduleId`, `totalPrice`, `taxType`, `taxAmount`, `subtotal`, `bookingStatus`, `paymentStatus`, `referenceNumber`, `specialRequirements`, `adminNotes`, `originName`, `originLatitude`, `originLongitude`, `destinationName`, `destinationLatitude`, `destinationLongitude`, `departureDateTime`, `estimatedFlightHours`, `estimatedArrivalTime`, `createdAt`, `totalAdults`, `totalChildren`, `onboardDining`, `updatedAt`) VALUES
(1, 'user_1752097521091_cq7emunyt', 11, 5, 'direct', NULL, NULL, 1392.00, 'VAT', 192.00, 1200.00, 'priced', 'pending', 'REF_600095225', '', 'NOTES..', 'Nanyuki Airport', -0.0626442, 37.0416831, 'Jomo Kenyatta International Airport', -1.3169486, 36.9278000, '2025-09-01 10:30:00', 1.25, '2025-09-01 11:45:00', '2025-08-22 13:05:09', 2, 1, 0, '2025-09-12 08:00:33'),
(2, 'user_1752097521091_cq7emunyt', 11, 5, 'direct', NULL, NULL, 34000.00, 'gst', 4000.00, 30000.00, 'confirmed', 'paid', 'REF_590761880', 'Include onboard dining and extra luggage allowance', 'notes comes here', 'Nairobi Wilson Airport', -1.3186000, 36.8148000, 'Mombasa Moi International', -4.0348000, 39.5942000, '2025-09-20 10:30:00', 1.75, '2025-09-20 12:15:00', '2025-08-22 13:06:53', 3, 2, 0, '2025-08-22 15:53:03'),
(3, 'user_1752093294468_5lug3jt2p', 11, NULL, 'deal', 6, NULL, NULL, NULL, NULL, NULL, 'confirmed', 'paid', 'REF_840280914', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-08-25 09:58:09', 1, 0, 0, '2025-08-25 09:58:09'),
(4, 'user_1752097521091_cq7emunyt', 11, NULL, 'deal', 8, NULL, NULL, NULL, NULL, NULL, 'confirmed', 'paid', 'REF_658421316', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-08-25 09:58:10', 1, 0, 0, '2025-08-25 09:58:10'),
(5, 'user_1752533042834_nsyj4iqyf', 11, NULL, 'deal', 5, NULL, NULL, NULL, NULL, NULL, 'confirmed', 'paid', 'REF_771263871', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-08-25 09:58:11', 1, 0, 0, '2025-08-25 09:58:11'),
(6, 'user_1752097521091_cq7emunyt', 11, 9, 'direct', NULL, NULL, NULL, NULL, NULL, NULL, 'cancelled', 'pending', 'REF_346029185', NULL, NULL, 'Nairobi Wilson Airport', -1.3186000, 36.8148000, 'Mombasa Moi International', -4.0348000, 39.5942000, '2025-09-05 09:00:00', 1.50, '2025-09-05 10:30:00', '2025-08-26 11:54:13', 2, 0, 0, '2025-08-26 11:54:13'),
(7, 'user_1752097521091_cq7emunyt', 11, 9, 'direct', NULL, NULL, 7000.00, 'vat', 3000.00, 4000.00, 'priced', 'pending', 'REF_298069394', NULL, '', 'Nanyuki Airport', -0.0626442, 37.0416831, 'Jomo Kenyatta International Airport', -1.3169486, 36.9278000, '2025-09-12 14:30:00', 2.00, '2025-09-13 16:30:00', '2025-09-12 11:54:13', 2, 0, 0, '2025-09-12 08:33:19'),
(8, 'user_1752097521091_cq7emunyt', 11, NULL, 'experience', NULL, 4, NULL, NULL, NULL, NULL, 'confirmed', 'paid', 'REF_18424992', 'Special dietary requirements: vegetarian meals needed', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-08-28 13:32:00', 2, 1, 0, '2025-08-28 13:32:00'),
(12, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, 300.00, NULL, NULL, NULL, 'pending', 'pending', 'AC531548L62', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 0, 1, 0, '0000-00-00 00:00:00'),
(13, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, 300.00, NULL, NULL, NULL, 'pending', 'pending', 'AC980436Q4H', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 0, 1, 0, '0000-00-00 00:00:00'),
(14, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, 300.00, NULL, NULL, NULL, 'pending', 'pending', 'AC2592793V5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 0, 1, 0, '0000-00-00 00:00:00'),
(15, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, 300.00, NULL, NULL, NULL, 'pending', 'pending', 'AC466204BNF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(16, 'user_1752093294468_5lug3jt2p', 12, 32, 'deal', 2, NULL, 300.00, NULL, NULL, 300.00, 'pending', 'pending', 'AC5188527BE', NULL, NULL, 'wilson airport', -1.3241213, 36.8112497, 'Pwani university', -3.6199601, 39.8462317, '2025-08-12 16:42:00', NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(17, 'user_1752093294468_5lug3jt2p', 12, 32, 'deal', 2, NULL, 300.00, NULL, NULL, 300.00, 'pending', 'pending', 'AC551447M1W', NULL, NULL, 'wilson airport', -1.3241213, 36.8112497, 'Pwani university', -3.6199601, 39.8462317, '2025-08-12 16:42:00', NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(18, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, 300.00, NULL, NULL, NULL, 'pending', 'pending', 'AC635418GDN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(19, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC719863XM2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(20, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC746099QED', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(21, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC9831848XS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(22, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC156924YCP', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(23, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC281269OTX', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(24, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC30356220T', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(25, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC4632153VZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(26, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC548647AQZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(27, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC583200GL4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(28, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC6500812NE', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(29, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC675784FHN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(30, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC710787NEJ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', 1, 0, 0, '0000-00-00 00:00:00'),
(31, 'user_1752093294468_5lug3jt2p', 12, NULL, 'deal', 2, NULL, NULL, NULL, NULL, NULL, 'pending', 'pending', 'AC812168MZS', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-09-12 17:36:52', 1, 0, 0, '2025-09-12 17:36:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `charter_bookings`
--
ALTER TABLE `charter_bookings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `referenceNumber` (`referenceNumber`),
  ADD KEY `userId` (`userId`),
  ADD KEY `companyId` (`companyId`),
  ADD KEY `aircraftId` (`aircraftId`),
  ADD KEY `dealId` (`dealId`),
  ADD KEY `experienceScheduleId` (`experienceScheduleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `charter_bookings`
--
ALTER TABLE `charter_bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `charter_bookings`
--
ALTER TABLE `charter_bookings`
  ADD CONSTRAINT `charter_bookings_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_bookings_ibfk_2` FOREIGN KEY (`companyId`) REFERENCES `charters_companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_bookings_ibfk_3` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_bookings_ibfk_4` FOREIGN KEY (`dealId`) REFERENCES `charter_deals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `charter_bookings_ibfk_5` FOREIGN KEY (`experienceScheduleId`) REFERENCES `experience_schedules` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
