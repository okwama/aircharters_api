# 🛩️ Booking Inquiry Implementation Plan

## 📋 **Overview**

This plan outlines the implementation of a new booking inquiry system that allows users to:
1. Create inquiries for specific aircraft
2. Add multiple stops with coordinates
3. Integrate with Google Earth Engine for location services
4. Get pricing from admin and confirm bookings
5. Convert confirmed inquiries to actual bookings

## 🗄️ **Database Schema Changes**

### **1. Modified `booking_inquiries` Table**
```sql
-- Drop existing table
DROP TABLE IF EXISTS `booking_inquiries`;

-- Create new table for aircraft inquiries
CREATE TABLE `booking_inquiries` (
  `id` varchar(255) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `aircraftId` int(11) NOT NULL, -- Changed from dealId to aircraftId
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
  `cancelledAt` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`userId`),
  KEY `idx_aircraft_id` (`aircraftId`),
  KEY `idx_status` (`inquiryStatus`),
  KEY `idx_reference_number` (`referenceNumber`),
  CONSTRAINT `fk_booking_inquiries_aircraft` FOREIGN KEY (`aircraftId`) REFERENCES `aircrafts`(`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_booking_inquiries_user` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE
);
```

### **2. New `inquiry_stops` Table**
```sql
CREATE TABLE `inquiry_stops` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bookingInquiryId` varchar(255) NOT NULL,
  `stopName` varchar(255) NOT NULL,
  `longitude` decimal(11,8) NOT NULL, -- Compatible with Google Earth Engine
  `latitude` decimal(10,8) NOT NULL,  -- Compatible with Google Earth Engine
  `price` decimal(10,2) DEFAULT NULL,
  `datetime` datetime DEFAULT NULL,
  `stopOrder` int(11) NOT NULL DEFAULT 1,
  `locationType` enum('airport','city','custom') DEFAULT 'custom',
  `locationCode` varchar(10) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`),
  KEY `idx_booking_inquiry_id` (`bookingInquiryId`),
  KEY `idx_stop_order` (`stopOrder`),
  CONSTRAINT `fk_inquiry_stops_booking_inquiry` FOREIGN KEY (`bookingInquiryId`) REFERENCES `booking_inquiries`(`id`) ON DELETE CASCADE
);
```

## 🔧 **Backend Implementation**

### **1. New Entities Created**
- ✅ `BookingInquiry` - Main inquiry entity
- ✅ `InquiryStop` - Stop locations for inquiries
- ✅ `GoogleEarthEngineService` - Location services

### **2. DTOs Created**
- ✅ `CreateBookingInquiryDto` - Create inquiry with stops
- ✅ `UpdateBookingInquiryDto` - Update inquiry (admin pricing)
- ✅ `GoogleEarthEngineLocationDto` - Location data structure
- ✅ `GoogleEarthEngineSearchDto` - Search parameters
- ✅ `GoogleEarthEngineReverseGeocodeDto` - Reverse geocoding
- ✅ `GoogleEarthEngineDistanceDto` - Distance calculation

### **3. Services Created**
- ✅ `BookingInquiriesService` - Core inquiry management
- ✅ `GoogleEarthEngineService` - Google Maps integration

### **4. Controllers Created**
- ✅ `BookingInquiriesController` - API endpoints

## 🌍 **Google Earth Engine Integration**

### **Coordinate Compatibility**
Both `locations` table and `inquiry_stops` table use the same coordinate format:
- `latitude` decimal(10,8) - 8 decimal places precision
- `longitude` decimal(11,8) - 8 decimal places precision

This ensures full compatibility with Google Earth Engine data.

### **Google Earth Engine Features**
1. **Location Search** - Search for airports, cities, landmarks
2. **Reverse Geocoding** - Convert coordinates to location names
3. **Distance Calculation** - Calculate flight distances and durations
4. **Flight Estimation** - Estimate flight times based on aircraft type

### **API Endpoints**
```
GET /api/booking-inquiries/search/locations
GET /api/booking-inquiries/geocode/reverse
GET /api/booking-inquiries/distance/calculate
GET /api/booking-inquiries/distance/flight
```

## 🔄 **Booking Flow**

### **1. User Creates Inquiry**
```
POST /api/booking-inquiries
{
  "aircraftId": 5,
  "requestedSeats": 4,
  "specialRequirements": "Luxury service",
  "onboardDining": true,
  "groundTransportation": false,
  "billingRegion": "United States",
  "userNotes": "Business trip",
  "stops": [
    {
      "stopName": "Wilson Airport",
      "longitude": 36.8147,
      "latitude": -1.3217,
      "datetime": "2024-01-15T10:00:00Z",
      "stopOrder": 1
    },
    {
      "stopName": "Mombasa Airport",
      "longitude": 39.5945,
      "latitude": -4.0348,
      "datetime": "2024-01-15T12:00:00Z",
      "stopOrder": 2
    }
  ]
}
```

### **2. Admin Reviews and Prices**
```
PUT /api/booking-inquiries/{id}
{
  "inquiryStatus": "priced",
  "proposedPrice": 5000.00,
  "proposedPriceType": "total",
  "adminNotes": "Price includes fuel and landing fees"
}
```

### **3. User Confirms Inquiry**
```
PUT /api/booking-inquiries/{id}/confirm
```

### **4. Convert to Booking**
When user confirms, the inquiry can be converted to a booking with payment processing.

## 🚀 **Implementation Steps**

### **Phase 1: Database Setup** ✅
1. ✅ Run migration script
2. ✅ Update app.module.ts with new entities
3. ✅ Test database connections

### **Phase 2: Backend Development** ✅
1. ✅ Create entities and DTOs
2. ✅ Implement services
3. ✅ Create controllers
4. ✅ Add Google Earth Engine integration

### **Phase 3: Testing**
1. Test API endpoints
2. Test Google Earth Engine integration
3. Test coordinate validation
4. Test distance calculations

### **Phase 4: Frontend Integration**
1. Create inquiry form
2. Add location search with Google Earth Engine
3. Add stop management
4. Add inquiry confirmation flow

### **Phase 5: Payment Integration**
1. Connect confirmed inquiries to payment system
2. Convert inquiries to bookings
3. Handle payment processing

## 🔐 **Security & Validation**

### **Coordinate Validation**
- Latitude: -90 to +90
- Longitude: -180 to +180
- 8 decimal places precision for accuracy

### **Input Validation**
- Aircraft availability check
- Seat capacity validation
- Required fields validation
- Coordinate format validation

### **API Security**
- JWT authentication required
- User can only access their own inquiries
- Admin endpoints for pricing

## 📊 **What's Compatible**

### **✅ Existing Systems**
- Payment processing (Stripe/Flutterwave)
- User authentication
- Aircraft management
- Booking system
- Passenger management

### **✅ Google Earth Engine**
- Coordinate format compatibility
- Location search integration
- Distance calculation
- Reverse geocoding

### **✅ Database**
- Existing locations table
- Aircraft table
- Users table
- Payments table

## 🧪 **Testing Plan**

### **Backend Testing**
```bash
# Test booking inquiry creation
curl -X POST http://localhost:3000/api/booking-inquiries \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "aircraftId": 5,
    "requestedSeats": 4,
    "stops": [
      {
        "stopName": "Wilson Airport",
        "longitude": 36.8147,
        "latitude": -1.3217
      }
    ]
  }'

# Test Google Earth Engine search
curl "http://localhost:3000/api/booking-inquiries/search/locations?query=Wilson%20Airport"
```

### **Coordinate Testing**
```bash
# Test reverse geocoding
curl "http://localhost:3000/api/booking-inquiries/geocode/reverse?latitude=-1.3217&longitude=36.8147"

# Test distance calculation
curl "http://localhost:3000/api/booking-inquiries/distance/flight?lat1=-1.3217&lon1=36.8147&lat2=-4.0348&lon2=39.5945&aircraftType=jet"
```

## 🔧 **Environment Configuration**

### **Required Environment Variables**
```env
# Google Maps API Key for Earth Engine integration
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here

# Existing variables remain the same
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=your_password
DB_DATABASE=citlogis_air_charters
```

## 📈 **Next Steps**

1. **Test the backend implementation**
2. **Create frontend components**
3. **Integrate with payment system**
4. **Add admin interface for pricing**
5. **Implement inquiry-to-booking conversion**

## 🎯 **Key Benefits**

1. **Flexible Routing** - Multiple stops with custom coordinates
2. **Google Earth Engine Integration** - Advanced location services
3. **Backward Compatibility** - Works with existing systems
4. **Admin Control** - Pricing and approval workflow
5. **Payment Ready** - Seamless integration with payment system

---

*Implementation Status: Backend Complete ✅*
*Next Phase: Frontend Development* 