# Booking System Tests - User as Passenger

## 🎯 Updated Booking Flow Tests

The booking system now automatically includes the user as a passenger. Here are comprehensive tests for all scenarios.

## 📋 Test Scenarios

### 1. **User Books Solo (No Additional Passengers)**

**Endpoint**: `POST /bookings`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "dealId": 1,
  "totalPrice": 1500.00,
  "onboardDining": true,
  "groundTransportation": false,
  "specialRequirements": "Vegetarian meal preference",
  "billingRegion": "US",
  "paymentMethod": "card"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking created successfully. Please complete payment to confirm.",
  "data": {
    "booking": {
      "id": "BK-15DEC24-143022-ABC01",
      "userId": "user_123",
      "referenceNumber": "AC123456XYZ",
      "totalPrice": 1500.00,
      "bookingStatus": "pending",
      "paymentStatus": "pending",
      "passengers": [
        {
          "id": 1,
          "firstName": "John",
          "lastName": "Smith",
          "age": 30,
          "nationality": "US",
          "isUser": true
        }
      ]
    },
    "paymentIntent": {
      "id": "pi_1234567890",
      "clientSecret": "pi_1234567890_secret_abc123",
      "status": "requires_payment_method"
    }
  }
}
```

**Validation Points**:
- ✅ User automatically added as passenger
- ✅ `isUser: true` for the user passenger
- ✅ Only 1 passenger in the list
- ✅ Booking status is pending
- ✅ Payment intent created

---

### 2. **User Books with Additional Passengers**

**Endpoint**: `POST /bookings`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "dealId": 1,
  "totalPrice": 3000.00,
  "onboardDining": true,
  "groundTransportation": true,
  "passengers": [
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 28,
      "nationality": "CA",
      "idPassportNumber": "CA123456789"
    },
    {
      "firstName": "Mike",
      "lastName": "Johnson",
      "age": 35,
      "nationality": "UK",
      "idPassportNumber": "UK987654321"
    }
  ]
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking created successfully. Please complete payment to confirm.",
  "data": {
    "booking": {
      "id": "BK-15DEC24-143023-DEF02",
      "userId": "user_123",
      "referenceNumber": "AC123457DEF",
      "totalPrice": 3000.00,
      "bookingStatus": "pending",
      "paymentStatus": "pending",
      "passengers": [
        {
          "id": 1,
          "firstName": "John",
          "lastName": "Smith",
          "age": 30,
          "nationality": "US",
          "isUser": true
        },
        {
          "id": 2,
          "firstName": "Jane",
          "lastName": "Doe",
          "age": 28,
          "nationality": "CA",
          "idPassportNumber": "CA123456789",
          "isUser": false
        },
        {
          "id": 3,
          "firstName": "Mike",
          "lastName": "Johnson",
          "age": 35,
          "nationality": "UK",
          "idPassportNumber": "UK987654321",
          "isUser": false
        }
      ]
    },
    "paymentIntent": {
      "id": "pi_1234567891",
      "clientSecret": "pi_1234567891_secret_def456",
      "status": "requires_payment_method"
    }
  }
}
```

**Validation Points**:
- ✅ User automatically added as first passenger
- ✅ Additional passengers added correctly
- ✅ `isUser: true` for user, `false` for others
- ✅ Total 3 passengers in the list

---

### 3. **User Already in Passengers List (No Duplicate)**

**Endpoint**: `POST /bookings`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "dealId": 1,
  "totalPrice": 1500.00,
  "passengers": [
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 30,
      "nationality": "US"
    }
  ]
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking created successfully. Please complete payment to confirm.",
  "data": {
    "booking": {
      "passengers": [
        {
          "id": 1,
          "firstName": "John",
          "lastName": "Smith",
          "age": 30,
          "nationality": "US",
          "isUser": true
        }
      ]
    }
  }
}
```

**Validation Points**:
- ✅ No duplicate user passenger
- ✅ User passenger marked with `isUser: true`
- ✅ Only 1 passenger in the list

---

### 4. **User with Missing Name Data (Fallback Values)**

**Endpoint**: `POST /bookings`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "dealId": 1,
  "totalPrice": 1500.00
}
```

**Expected Response** (if user has no name data):
```json
{
  "success": true,
  "message": "Booking created successfully. Please complete payment to confirm.",
  "data": {
    "booking": {
      "passengers": [
        {
          "id": 1,
          "firstName": "Unknown",
          "lastName": "User",
          "age": null,
          "nationality": null,
          "isUser": true
        }
      ]
    }
  }
}
```

**Validation Points**:
- ✅ Fallback names used when user data is missing
- ✅ Age calculated from date_of_birth if available
- ✅ User still marked as `isUser: true`

---

### 5. **Insufficient Seats Error**

**Endpoint**: `POST /bookings`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "dealId": 1,
  "totalPrice": 1500.00,
  "passengers": [
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 28,
      "nationality": "CA"
    },
    {
      "firstName": "Mike",
      "lastName": "Johnson",
      "age": 35,
      "nationality": "UK"
    },
    {
      "firstName": "Sarah",
      "lastName": "Wilson",
      "age": 29,
      "nationality": "AU"
    }
  ]
}
```

**Expected Response** (if deal only has 3 seats available):
```json
{
  "statusCode": 400,
  "message": "Insufficient seats available. Only 3 seats left, but 4 passengers requested.",
  "error": "Bad Request"
}
```

**Validation Points**:
- ✅ Error when total passengers exceed available seats
- ✅ Count includes user + additional passengers
- ✅ Clear error message with seat count

---

### 6. **Get Booking with Passengers**

**Endpoint**: `GET /bookings/{{bookingId}}`

**Headers**:
```
Authorization: Bearer {{authToken}}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking retrieved successfully",
  "data": {
    "id": "BK-15DEC24-143022-ABC01",
    "referenceNumber": "AC123456XYZ",
    "totalPrice": 1500.00,
    "bookingStatus": "pending",
    "paymentStatus": "pending",
    "passengers": [
      {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith",
        "age": 30,
        "nationality": "US",
        "isUser": true,
        "fullName": "John Smith"
      }
    ],
    "user": {
      "id": "user_123",
      "first_name": "John",
      "last_name": "Smith",
      "email": "john@example.com"
    },
    "deal": {
      "id": 1,
      "date": "2024-12-20",
      "time": "14:30:00"
    }
  }
}
```

**Validation Points**:
- ✅ User passenger marked with `isUser: true`
- ✅ Full passenger details included
- ✅ User relationship loaded
- ✅ Deal information included

---

### 7. **Get Booking Timeline (User Inclusion Event)**

**Endpoint**: `GET /bookings/{{bookingId}}/timeline`

**Headers**:
```
Authorization: Bearer {{authToken}}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Booking timeline retrieved successfully",
  "data": [
    {
      "id": 1,
      "eventType": "booking_created",
      "title": "Booking Created",
      "description": "Booking AC123456XYZ has been created successfully with 1 passengers. Loyalty points will be earned upon payment.",
      "metadata": {
        "passengerCount": 1,
        "companyId": 1,
        "referenceNumber": "AC123456XYZ",
        "totalPrice": 1500.00,
        "userIncluded": true
      },
      "createdAt": "2024-12-15T14:30:22.000Z"
    }
  ]
}
```

**Validation Points**:
- ✅ Timeline shows user inclusion status
- ✅ Passenger count includes user
- ✅ Metadata tracks if user was automatically added

---

## 🔧 Test Setup

### **Prerequisites:**
1. **User Authentication**: Valid JWT token
2. **Charter Deal**: Deal with ID 1 exists with sufficient seats
3. **User Profile**: User has name and nationality data
4. **Database**: `is_user` column added to passengers table

### **Test Data Setup:**
```sql
-- Ensure user has profile data
UPDATE users 
SET first_name = 'John', last_name = 'Smith', nationality = 'US', date_of_birth = '1994-01-15'
WHERE id = 'user_123';

-- Ensure deal has sufficient seats
UPDATE charter_deals 
SET available_seats = 10 
WHERE id = 1;
```

### **Cleanup:**
```sql
-- Clean up test bookings
DELETE FROM passengers WHERE booking_id LIKE 'BK-%';
DELETE FROM bookings WHERE id LIKE 'BK-%';
```

## 📊 Test Results Validation

### **Success Criteria:**
- ✅ User always included as passenger
- ✅ `isUser` flag set correctly
- ✅ No duplicate passengers
- ✅ Seat validation works
- ✅ Timeline events created
- ✅ Payment intent generated

### **Error Handling:**
- ✅ Insufficient seats error
- ✅ User not found error
- ✅ Deal not found error
- ✅ Invalid booking data error

This comprehensive test suite ensures the booking system correctly handles all scenarios for user-passenger alignment. 