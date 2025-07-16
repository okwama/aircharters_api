# Booking & Payment Integration Tests

## 🔄 Updated Payment Flow

The booking and payment system has been updated with seamless Stripe integration. Here's the new flow:

1. **Create Booking with Payment Intent** → Returns booking + Stripe payment intent
2. **Complete Payment** → Confirm payment + process booking in one call
3. **Alternative Flow** → Create booking → Create payment intent → Process payment

## 📋 Postman Test Collection

### 1. **Create Booking with Payment Intent**

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
  "specialRequirements": "Vegetarian meal for passenger 1",
  "billingRegion": "US",
  "paymentMethod": "CARD",
  "passengers": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "age": 35,
      "nationality": "US",
      "idPassportNumber": "US123456789"
    },
    {
      "firstName": "Jane",
      "lastName": "Doe",
      "age": 32,
      "nationality": "US",
      "idPassportNumber": "US987654321"
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
      "id": "BK-16JUL25-131023-LPX01",
      "referenceNumber": "AC123456ABC",
      "userId": "user123",
      "dealId": 1,
      "companyId": 1,
      "totalPrice": 1500.00,
      "bookingStatus": "PENDING",
      "paymentStatus": "PENDING",
      "loyaltyPointsEarned": 0,
      "passengers": [...],
      "deal": {...}
    },
    "paymentIntent": {
      "id": "pi_3OqX8Y2eZvKYlo2C1gQ12345",
      "clientSecret": "pi_3OqX8Y2eZvKYlo2C1gQ12345_secret_abc123",
      "status": "requires_payment_method",
      "requiresAction": false,
      "nextAction": null
    },
    "paymentInstructions": {
      "amount": 1500.00,
      "currency": "USD",
      "paymentMethods": ["card", "apple_pay", "google_pay", "bank_transfer"],
      "nextSteps": [
        "Complete payment using the client secret",
        "Confirm payment using /payments/confirm",
        "Process booking using /bookings/BK-16JUL25-131023-LPX01/process-payment"
      ],
      "apiEndpoints": {
        "confirmPayment": "/payments/confirm",
        "processBooking": "/bookings/BK-16JUL25-131023-LPX01/process-payment",
        "paymentStatus": "/payments/status/pi_3OqX8Y2eZvKYlo2C1gQ12345"
      }
    }
  }
}
```

### 2. **Complete Payment (Unified Endpoint)**

**Endpoint**: `POST /bookings/{{bookingId}}/pay`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "paymentIntentId": "pi_3OqX8Y2eZvKYlo2C1gQ12345",
  "paymentMethodId": "pm_1OqX8Y2eZvKYlo2C1gQ12345"
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Payment completed and booking confirmed",
  "data": {
    "booking": {
      "id": "BK-16JUL25-131023-LPX01",
      "referenceNumber": "AC123456ABC",
      "bookingStatus": "CONFIRMED",
      "paymentStatus": "PAID",
      "loyaltyPointsEarned": 7500,
      "paymentTransactionId": "txn_3OqX8Y2eZvKYlo2C1gQ12345"
    },
    "payment": {
      "id": "payment_1731689423123_abc123def",
      "transactionId": "txn_3OqX8Y2eZvKYlo2C1gQ12345",
      "amount": 1500.00,
      "status": "COMPLETED",
      "paymentMethod": "CARD"
    }
  }
}
```

### 3. **Alternative: Create Payment Intent Separately**

**Endpoint**: `POST /payments/create-intent`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "amount": 1500.00,
  "currency": "USD",
  "bookingId": "BK-16JUL25-131023-LPX01",
  "userId": "user123",
  "description": "Payment for booking AC123456ABC",
  "metadata": {
    "bookingId": "BK-16JUL25-131023-LPX01",
    "referenceNumber": "AC123456ABC"
  }
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Payment intent created successfully",
  "data": {
    "id": "pi_3OqX8Y2eZvKYlo2C1gQ12345",
    "clientSecret": "pi_3OqX8Y2eZvKYlo2C1gQ12345_secret_abc123",
    "status": "requires_payment_method",
    "requiresAction": false,
    "nextAction": null,
    "amount": 1500.00,
    "currency": "USD"
  }
}
```

### 4. **Process Payment (Legacy Endpoint)**

**Endpoint**: `POST /bookings/{{bookingId}}/process-payment`

**Headers**:
```
Authorization: Bearer {{authToken}}
Content-Type: application/json
```

**Body**:
```json
{
  "paymentTransactionId": "txn_3OqX8Y2eZvKYlo2C1gQ12345",
  "paymentMethod": "card",
  "amount": 1500.00
}
```

**Expected Response**:
```json
{
  "success": true,
  "message": "Payment processed successfully. Booking confirmed and loyalty points earned.",
  "data": {
    "id": "BK-16JUL25-131023-LPX01",
    "referenceNumber": "AC123456ABC",
    "bookingStatus": "CONFIRMED",
    "paymentStatus": "PAID",
    "loyaltyPointsEarned": 7500,
    "paymentTransactionId": "txn_3OqX8Y2eZvKYlo2C1gQ12345"
  }
}
```

## 🔄 Flutter Integration Flow

### 1. **Create Booking with Payment Intent**
```dart
// Create booking and get payment intent
final response = await http.post(
  Uri.parse('$baseUrl/bookings'),
  headers: {
    'Authorization': 'Bearer $token',
    'Content-Type': 'application/json',
  },
  body: jsonEncode(bookingData),
);

final data = jsonDecode(response.body)['data'];
final booking = data['booking'];
final paymentIntent = data['paymentIntent'];
```

### 2. **Process Payment with Stripe**
```dart
// Use Stripe to process payment
final paymentResult = await Stripe.instance.confirmPayment(
  paymentIntent['clientSecret'],
  PaymentMethodParams.card(
    paymentMethodData: PaymentMethodData(
      billingDetails: billingDetails,
    ),
  ),
);
```

### 3. **Complete Booking Payment**
```dart
// Complete the booking payment
final completeResponse = await http.post(
  Uri.parse('$baseUrl/bookings/${booking['id']}/pay'),
  headers: {
    'Authorization': 'Bearer $token',
    'Content-Type': 'application/json',
  },
  body: jsonEncode({
    'paymentIntentId': paymentIntent['id'],
    'paymentMethodId': paymentResult.paymentMethodId,
  }),
);
```

## 🧪 Test Scenarios

### **Scenario 1: Successful Payment Flow**
1. Create booking with payment intent ✅
2. Process payment with Stripe ✅
3. Complete booking payment ✅
4. Verify booking status is CONFIRMED ✅
5. Verify loyalty points earned ✅

### **Scenario 2: Payment Intent Creation Failure**
1. Create booking with payment intent ❌ (payment intent fails)
2. Verify booking is still created ✅
3. Create payment intent separately ✅
4. Complete payment flow ✅

### **Scenario 3: Payment Confirmation Failure**
1. Create booking with payment intent ✅
2. Process payment with Stripe ❌ (payment fails)
3. Verify booking remains PENDING ✅
4. Retry payment ✅

### **Scenario 4: Duplicate Booking Prevention**
1. Create booking for same deal ✅
2. Try to create another booking for same deal ❌
3. Verify error message about existing booking ✅

## 🔍 Validation Points

### **Booking Creation**
- ✅ Booking ID format: `BK-16JUL25-131023-LPX01`
- ✅ Reference number format: `AC123456ABC`
- ✅ Company ID populated from deal
- ✅ Passengers created and linked
- ✅ Available seats updated
- ✅ Timeline event created

### **Payment Processing**
- ✅ Payment intent created with correct amount
- ✅ Client secret provided for Stripe
- ✅ Payment record created in database
- ✅ User trip record created
- ✅ Loyalty points calculated (1 USD = 5 miles)
- ✅ Timeline events for payment and confirmation

### **Database Consistency**
- ✅ All foreign key relationships maintained
- ✅ Transaction rollback on errors
- ✅ No duplicate bookings for same user/deal
- ✅ Proper status transitions

## 🚀 Environment Variables

Set these in your Postman environment:

```
baseUrl: http://localhost:3000
authToken: {{loginResponse.access_token}}
bookingId: {{createBookingResponse.data.booking.id}}
paymentIntentId: {{createBookingResponse.data.paymentIntent.id}}
```

## 📊 Expected Database State After Tests

### **bookings table**
- Status: CONFIRMED
- Payment Status: PAID
- Loyalty Points Earned: 7500 (for $1500 payment)
- Payment Transaction ID: populated

### **payments table**
- Payment record created
- Status: COMPLETED
- Platform fee calculated (5%)
- Company amount calculated

### **user_trips table**
- Trip record created
- Status: UPCOMING
- Linked to booking

### **wallet_transactions table**
- Loyalty points transaction created
- Type: LOYALTY_EARNED
- Amount: 7500 points

### **booking_timeline table**
- Booking created event
- Payment processed event
- Booking confirmed event

This updated flow provides seamless integration between booking creation and Stripe payment processing, with proper error handling and fallback options. 