/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const auth_module_1 = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/modules/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./modules/users/users.module */ "./src/modules/users/users.module.ts");
const charter_deals_module_1 = __webpack_require__(/*! ./modules/charter-deals/charter-deals.module */ "./src/modules/charter-deals/charter-deals.module.ts");
const passengers_module_1 = __webpack_require__(/*! ./modules/passengers/passengers.module */ "./src/modules/passengers/passengers.module.ts");
const bookings_module_1 = __webpack_require__(/*! ./modules/bookings/bookings.module */ "./src/modules/bookings/bookings.module.ts");
const payments_module_1 = __webpack_require__(/*! ./modules/payments/payments.module */ "./src/modules/payments/payments.module.ts");
const wallet_module_1 = __webpack_require__(/*! ./modules/wallet/wallet.module */ "./src/modules/wallet/wallet.module.ts");
const trips_module_1 = __webpack_require__(/*! ./modules/trips/trips.module */ "./src/modules/trips/trips.module.ts");
const health_controller_1 = __webpack_require__(/*! ./health.controller */ "./src/health.controller.ts");
const user_entity_1 = __webpack_require__(/*! ./common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ./common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ./common/entities/charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ./common/entities/fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ./common/entities/aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
const aircraft_booking_entity_1 = __webpack_require__(/*! ./common/entities/aircraft-booking.entity */ "./src/common/entities/aircraft-booking.entity.ts");
const company_entity_1 = __webpack_require__(/*! ./common/entities/company.entity */ "./src/common/entities/company.entity.ts");
const passenger_entity_1 = __webpack_require__(/*! ./common/entities/passenger.entity */ "./src/common/entities/passenger.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ./common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const payment_entity_1 = __webpack_require__(/*! ./common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
const wallet_transaction_entity_1 = __webpack_require__(/*! ./common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_profile_entity_1 = __webpack_require__(/*! ./common/entities/user-profile.entity */ "./src/common/entities/user-profile.entity.ts");
const user_trips_entity_1 = __webpack_require__(/*! ./common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
const user_files_entity_1 = __webpack_require__(/*! ./common/entities/user-files.entity */ "./src/common/entities/user-files.entity.ts");
const user_events_entity_1 = __webpack_require__(/*! ./common/entities/user-events.entity */ "./src/common/entities/user-events.entity.ts");
const booking_timeline_entity_1 = __webpack_require__(/*! ./common/entities/booking-timeline.entity */ "./src/common/entities/booking-timeline.entity.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 3306,
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || '',
                database: process.env.DB_DATABASE || 'citlogis_air_charters',
                entities: [
                    user_entity_1.User,
                    charter_deal_entity_1.CharterDeal,
                    charters_company_entity_1.ChartersCompany,
                    fixed_route_entity_1.FixedRoute,
                    aircraft_entity_1.Aircraft,
                    aircraft_booking_entity_1.Aircraft,
                    company_entity_1.Company,
                    passenger_entity_1.Passenger,
                    booking_entity_1.Booking,
                    payment_entity_1.Payment,
                    wallet_transaction_entity_1.WalletTransaction,
                    user_profile_entity_1.UserProfile,
                    user_trips_entity_1.UserTrip,
                    user_files_entity_1.UserFile,
                    user_events_entity_1.UserEvent,
                    booking_timeline_entity_1.BookingTimeline,
                ],
                synchronize: false,
                logging: false,
                extra: {
                    connectionLimit: 20,
                    acquireTimeout: 60000,
                    timeout: 60000,
                    charset: 'utf8mb4_unicode_ci',
                    lockWaitTimeout: 10,
                    innodbLockWaitTimeout: 10,
                    transactionIsolation: 'READ_COMMITTED',
                    autocommit: false,
                    queryTimeout: 30000,
                    connectTimeout: 60000,
                    multipleStatements: false,
                    dateStrings: true,
                    supportBigNumbers: true,
                    bigNumberStrings: true,
                    deadlockRetryCount: 3,
                    deadlockRetryDelay: 1000,
                    enableKeepAlive: true,
                    keepAliveInitialDelay: 10000,
                },
                maxQueryExecutionTime: 30000,
                cache: {
                    duration: 30000,
                },
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            charter_deals_module_1.CharterDealsModule,
            passengers_module_1.PassengersModule,
            bookings_module_1.BookingsModule,
            payments_module_1.PaymentsModule,
            wallet_module_1.WalletModule,
            trips_module_1.TripsModule,
        ],
        controllers: [health_controller_1.HealthController],
    })
], AppModule);


/***/ }),

/***/ "./src/common/decorators/current-user.decorator.ts":
/*!*********************************************************!*\
  !*** ./src/common/decorators/current-user.decorator.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./src/common/entities/aircraft-booking.entity.ts":
/*!********************************************************!*\
  !*** ./src/common/entities/aircraft-booking.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Aircraft = exports.AircraftStatus = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var AircraftStatus;
(function (AircraftStatus) {
    AircraftStatus["ACTIVE"] = "active";
    AircraftStatus["INACTIVE"] = "inactive";
})(AircraftStatus || (exports.AircraftStatus = AircraftStatus = {}));
let Aircraft = class Aircraft {
};
exports.Aircraft = Aircraft;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aircraft.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Aircraft.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Aircraft.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Aircraft.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyId' }),
    __metadata("design:type", Number)
], Aircraft.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: AircraftStatus,
        default: AircraftStatus.ACTIVE
    }),
    __metadata("design:type", String)
], Aircraft.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Aircraft.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Aircraft.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)('Company', 'aircraft'),
    (0, typeorm_1.JoinColumn)({ name: 'companyId' }),
    __metadata("design:type", Object)
], Aircraft.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('Booking', 'aircraft'),
    __metadata("design:type", Array)
], Aircraft.prototype, "bookings", void 0);
exports.Aircraft = Aircraft = __decorate([
    (0, typeorm_1.Entity)('aircraft')
], Aircraft);


/***/ }),

/***/ "./src/common/entities/aircraft.entity.ts":
/*!************************************************!*\
  !*** ./src/common/entities/aircraft.entity.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Aircraft = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const charter_deal_entity_1 = __webpack_require__(/*! ./charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
let Aircraft = class Aircraft {
};
exports.Aircraft = Aircraft;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Aircraft.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyId', type: 'int' }),
    __metadata("design:type", Number)
], Aircraft.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Aircraft.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'registrationNumber', type: 'varchar', length: 20, unique: true }),
    __metadata("design:type", String)
], Aircraft.prototype, "registrationNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['helicopter', 'fixedWing', 'jet', 'glider', 'seaplane', 'ultralight', 'balloon', 'tiltrotor', 'gyroplane', 'airship']
    }),
    __metadata("design:type", String)
], Aircraft.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Aircraft.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Aircraft.prototype, "manufacturer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'yearManufactured', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Aircraft.prototype, "yearManufactured", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Aircraft.prototype, "capacity", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'isAvailable', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Aircraft.prototype, "isAvailable", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'maintenanceStatus',
        type: 'enum',
        enum: ['operational', 'maintenance', 'out_of_service'],
        default: 'operational'
    }),
    __metadata("design:type", String)
], Aircraft.prototype, "maintenanceStatus", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Aircraft.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Aircraft.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => charter_deal_entity_1.CharterDeal, deal => deal.aircraft),
    __metadata("design:type", Array)
], Aircraft.prototype, "deals", void 0);
exports.Aircraft = Aircraft = __decorate([
    (0, typeorm_1.Entity)('aircrafts')
], Aircraft);


/***/ }),

/***/ "./src/common/entities/booking-timeline.entity.ts":
/*!********************************************************!*\
  !*** ./src/common/entities/booking-timeline.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingTimeline = exports.TimelineEventType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
var TimelineEventType;
(function (TimelineEventType) {
    TimelineEventType["BOOKING_CREATED"] = "booking_created";
    TimelineEventType["STATUS_CHANGED"] = "status_changed";
    TimelineEventType["PAYMENT_STATUS_CHANGED"] = "payment_status_changed";
    TimelineEventType["PAYMENT_COMPLETED"] = "payment_completed";
    TimelineEventType["BOOKING_CANCELLED"] = "booking_cancelled";
    TimelineEventType["BOOKING_CONFIRMED"] = "booking_confirmed";
    TimelineEventType["REMINDER_SENT"] = "reminder_sent";
    TimelineEventType["CHECK_IN"] = "check_in";
    TimelineEventType["FLIGHT_COMPLETED"] = "flight_completed";
    TimelineEventType["LOYALTY_UPDATED"] = "loyalty_updated";
})(TimelineEventType || (exports.TimelineEventType = TimelineEventType = {}));
let BookingTimeline = class BookingTimeline {
};
exports.BookingTimeline = BookingTimeline;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BookingTimeline.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bookingId', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'eventType',
        type: 'enum',
        enum: TimelineEventType
    }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "eventType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'title', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description', type: 'text', nullable: true }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'oldValue', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "oldValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'newValue', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], BookingTimeline.prototype, "newValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'metadata', type: 'json', nullable: true }),
    __metadata("design:type", Object)
], BookingTimeline.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BookingTimeline.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'bookingId' }),
    __metadata("design:type", typeof (_b = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _b : Object)
], BookingTimeline.prototype, "booking", void 0);
exports.BookingTimeline = BookingTimeline = __decorate([
    (0, typeorm_1.Entity)('booking_timeline')
], BookingTimeline);


/***/ }),

/***/ "./src/common/entities/booking.entity.ts":
/*!***********************************************!*\
  !*** ./src/common/entities/booking.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Booking = exports.PaymentMethod = exports.PaymentStatus = exports.BookingStatus = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ./charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ./charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const passenger_entity_1 = __webpack_require__(/*! ./passenger.entity */ "./src/common/entities/passenger.entity.ts");
var BookingStatus;
(function (BookingStatus) {
    BookingStatus["PENDING"] = "pending";
    BookingStatus["CONFIRMED"] = "confirmed";
    BookingStatus["CANCELLED"] = "cancelled";
    BookingStatus["COMPLETED"] = "completed";
})(BookingStatus || (exports.BookingStatus = BookingStatus = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CARD"] = "card";
    PaymentMethod["MPESA"] = "mpesa";
    PaymentMethod["WALLET"] = "wallet";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
let Booking = class Booking {
    get formattedPrice() {
        return `$${this.totalPrice.toFixed(2)}`;
    }
    get isConfirmed() {
        return this.bookingStatus === BookingStatus.CONFIRMED ||
            this.bookingStatus === BookingStatus.COMPLETED;
    }
    get isPaid() {
        return this.paymentStatus === PaymentStatus.PAID;
    }
    get canBeCancelled() {
        return this.bookingStatus === BookingStatus.PENDING ||
            this.bookingStatus === BookingStatus.CONFIRMED;
    }
};
exports.Booking = Booking;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Booking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Booking.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'dealId' }),
    __metadata("design:type", Number)
], Booking.prototype, "dealId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'company_id', type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'totalPrice', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Booking.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'onboardDining', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Booking.prototype, "onboardDining", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'groundTransportation', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Booking.prototype, "groundTransportation", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'billingRegion', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "billingRegion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'paymentMethod',
        type: 'enum',
        enum: PaymentMethod,
        nullable: true
    }),
    __metadata("design:type", String)
], Booking.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'bookingStatus',
        type: 'enum',
        enum: BookingStatus,
        default: BookingStatus.PENDING
    }),
    __metadata("design:type", String)
], Booking.prototype, "bookingStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'paymentStatus',
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    }),
    __metadata("design:type", String)
], Booking.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'referenceNumber', type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Booking.prototype, "referenceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentTransactionId', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "paymentTransactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loyalty_points_earned', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Booking.prototype, "loyaltyPointsEarned", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loyalty_points_redeemed', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Booking.prototype, "loyaltyPointsRedeemed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'wallet_amount_used', type: 'decimal', precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], Booking.prototype, "walletAmountUsed", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'specialRequirements', type: 'text', nullable: true }),
    __metadata("design:type", String)
], Booking.prototype, "specialRequirements", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Booking.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Booking.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], Booking.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => charter_deal_entity_1.CharterDeal),
    (0, typeorm_1.JoinColumn)({ name: 'dealId' }),
    __metadata("design:type", typeof (_d = typeof charter_deal_entity_1.CharterDeal !== "undefined" && charter_deal_entity_1.CharterDeal) === "function" ? _d : Object)
], Booking.prototype, "deal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => charters_company_entity_1.ChartersCompany),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", typeof (_e = typeof charters_company_entity_1.ChartersCompany !== "undefined" && charters_company_entity_1.ChartersCompany) === "function" ? _e : Object)
], Booking.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => passenger_entity_1.Passenger, passenger => passenger.booking),
    __metadata("design:type", Array)
], Booking.prototype, "passengers", void 0);
exports.Booking = Booking = __decorate([
    (0, typeorm_1.Entity)('bookings')
], Booking);


/***/ }),

/***/ "./src/common/entities/charter-deal.entity.ts":
/*!****************************************************!*\
  !*** ./src/common/entities/charter-deal.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharterDeal = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const charters_company_entity_1 = __webpack_require__(/*! ./charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ./fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ./aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
let CharterDeal = class CharterDeal {
};
exports.CharterDeal = CharterDeal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CharterDeal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyId', type: 'int' }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fixedRouteId', type: 'int' }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "fixedRouteId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'aircraftId', type: 'int' }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "aircraftId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CharterDeal.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], CharterDeal.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "pricePerSeat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "discountPerSeat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "pricePerHour", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CharterDeal.prototype, "availableSeats", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['privateCharter', 'jetSharing'],
        default: 'privateCharter'
    }),
    __metadata("design:type", String)
], CharterDeal.prototype, "dealType", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CharterDeal.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CharterDeal.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => charters_company_entity_1.ChartersCompany, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'companyId' }),
    __metadata("design:type", typeof (_d = typeof charters_company_entity_1.ChartersCompany !== "undefined" && charters_company_entity_1.ChartersCompany) === "function" ? _d : Object)
], CharterDeal.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => fixed_route_entity_1.FixedRoute, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'fixedRouteId' }),
    __metadata("design:type", typeof (_e = typeof fixed_route_entity_1.FixedRoute !== "undefined" && fixed_route_entity_1.FixedRoute) === "function" ? _e : Object)
], CharterDeal.prototype, "fixedRoute", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => aircraft_entity_1.Aircraft, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'aircraftId' }),
    __metadata("design:type", typeof (_f = typeof aircraft_entity_1.Aircraft !== "undefined" && aircraft_entity_1.Aircraft) === "function" ? _f : Object)
], CharterDeal.prototype, "aircraft", void 0);
exports.CharterDeal = CharterDeal = __decorate([
    (0, typeorm_1.Entity)('charter_deals')
], CharterDeal);


/***/ }),

/***/ "./src/common/entities/charters-company.entity.ts":
/*!********************************************************!*\
  !*** ./src/common/entities/charters-company.entity.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChartersCompany = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const charter_deal_entity_1 = __webpack_require__(/*! ./charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
let ChartersCompany = class ChartersCompany {
};
exports.ChartersCompany = ChartersCompany;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ChartersCompany.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyName', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contactPersonFirstName', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "contactPersonFirstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contactPersonLastName', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "contactPersonLastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'mobileNumber', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "mobileNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'licenseNumber', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "licenseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'licensePublicId', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "licensePublicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'logoPublicId', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "logoPublicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'onboardedBy', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "onboardedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'adminId', type: 'int' }),
    __metadata("design:type", Number)
], ChartersCompany.prototype, "adminId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ['pendingReview', 'active', 'inactive', 'rejected', 'draft'],
        default: 'draft'
    }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'agreementForm', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "agreementForm", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'agreementFormPublicId', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "agreementFormPublicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'approvedBy', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "approvedBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'approvedAt', type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], ChartersCompany.prototype, "approvedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reviewRemarks', type: 'text', nullable: true }),
    __metadata("design:type", String)
], ChartersCompany.prototype, "reviewRemarks", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], ChartersCompany.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], ChartersCompany.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => charter_deal_entity_1.CharterDeal, deal => deal.company),
    __metadata("design:type", Array)
], ChartersCompany.prototype, "deals", void 0);
exports.ChartersCompany = ChartersCompany = __decorate([
    (0, typeorm_1.Entity)('charters_companies')
], ChartersCompany);


/***/ }),

/***/ "./src/common/entities/company.entity.ts":
/*!***********************************************!*\
  !*** ./src/common/entities/company.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Company = exports.CompanyStatus = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["ACTIVE"] = "active";
    CompanyStatus["INACTIVE"] = "inactive";
})(CompanyStatus || (exports.CompanyStatus = CompanyStatus = {}));
let Company = class Company {
};
exports.Company = Company;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Company.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], Company.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, unique: true }),
    __metadata("design:type", String)
], Company.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Company.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: CompanyStatus,
        default: CompanyStatus.ACTIVE
    }),
    __metadata("design:type", String)
], Company.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Company.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Company.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)('Booking', 'company'),
    __metadata("design:type", Array)
], Company.prototype, "bookings", void 0);
exports.Company = Company = __decorate([
    (0, typeorm_1.Entity)('companies')
], Company);


/***/ }),

/***/ "./src/common/entities/fixed-route.entity.ts":
/*!***************************************************!*\
  !*** ./src/common/entities/fixed-route.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FixedRoute = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const charter_deal_entity_1 = __webpack_require__(/*! ./charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
let FixedRoute = class FixedRoute {
};
exports.FixedRoute = FixedRoute;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FixedRoute.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FixedRoute.prototype, "origin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], FixedRoute.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'imageUrl', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], FixedRoute.prototype, "imageUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'imagePublicId', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], FixedRoute.prototype, "imagePublicId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], FixedRoute.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], FixedRoute.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => charter_deal_entity_1.CharterDeal, deal => deal.fixedRoute),
    __metadata("design:type", Array)
], FixedRoute.prototype, "deals", void 0);
exports.FixedRoute = FixedRoute = __decorate([
    (0, typeorm_1.Entity)('fixed_routes')
], FixedRoute);


/***/ }),

/***/ "./src/common/entities/passenger.entity.ts":
/*!*************************************************!*\
  !*** ./src/common/entities/passenger.entity.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Passenger = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
let Passenger = class Passenger {
    get fullName() {
        return `${this.firstName} ${this.lastName}`.trim();
    }
    get displayName() {
        return this.fullName || 'Unnamed Passenger';
    }
};
exports.Passenger = Passenger;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Passenger.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booking_id', type: 'varchar', length: 255 }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], Passenger.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Passenger.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name', type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Passenger.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Passenger.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Passenger.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'id_passport_number', type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], Passenger.prototype, "idPassportNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_user', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], Passenger.prototype, "isUser", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Passenger.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, booking => booking.passengers),
    (0, typeorm_1.JoinColumn)({ name: 'booking_id' }),
    __metadata("design:type", typeof (_b = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _b : Object)
], Passenger.prototype, "booking", void 0);
exports.Passenger = Passenger = __decorate([
    (0, typeorm_1.Entity)('passengers')
], Passenger);


/***/ }),

/***/ "./src/common/entities/payment.entity.ts":
/*!***********************************************!*\
  !*** ./src/common/entities/payment.entity.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Payment = exports.PaymentStatus = exports.PaymentMethod = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ./charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CARD"] = "card";
    PaymentMethod["MPESA"] = "mpesa";
    PaymentMethod["WALLET"] = "wallet";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["COMPLETED"] = "completed";
    PaymentStatus["FAILED"] = "failed";
    PaymentStatus["REFUNDED"] = "refunded";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
let Payment = class Payment {
    get formattedAmount() {
        return `${this.currency} ${this.totalAmount.toFixed(2)}`;
    }
    get isCompleted() {
        return this.paymentStatus === PaymentStatus.COMPLETED;
    }
    get canBeRefunded() {
        return this.paymentStatus === PaymentStatus.COMPLETED;
    }
};
exports.Payment = Payment;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'bookingId' }),
    __metadata("design:type", String)
], Payment.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId' }),
    __metadata("design:type", String)
], Payment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'company_id', nullable: true }),
    __metadata("design:type", Number)
], Payment.prototype, "companyId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentMethod', type: 'enum', enum: PaymentMethod }),
    __metadata("design:type", String)
], Payment.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'totalAmount', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "totalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'platformFee', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "platformFee", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'companyAmount', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Payment.prototype, "companyAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 3, default: 'USD' }),
    __metadata("design:type", String)
], Payment.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transactionId', nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentStatus', type: 'enum', enum: PaymentStatus, default: PaymentStatus.PENDING }),
    __metadata("design:type", String)
], Payment.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'paymentGatewayResponse', type: 'json', nullable: true }),
    __metadata("design:type", Object)
], Payment.prototype, "paymentGatewayResponse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'createdAt' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Payment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updatedAt' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Payment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], Payment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => charters_company_entity_1.ChartersCompany),
    (0, typeorm_1.JoinColumn)({ name: 'company_id' }),
    __metadata("design:type", typeof (_d = typeof charters_company_entity_1.ChartersCompany !== "undefined" && charters_company_entity_1.ChartersCompany) === "function" ? _d : Object)
], Payment.prototype, "company", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)('payments')
], Payment);


/***/ }),

/***/ "./src/common/entities/user-events.entity.ts":
/*!***************************************************!*\
  !*** ./src/common/entities/user-events.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEvent = exports.UserEventType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
var UserEventType;
(function (UserEventType) {
    UserEventType["FLIGHT"] = "flight";
    UserEventType["REMINDER"] = "reminder";
    UserEventType["PERSONAL"] = "personal";
})(UserEventType || (exports.UserEventType = UserEventType = {}));
let UserEvent = class UserEvent {
};
exports.UserEvent = UserEvent;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserEvent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserEvent.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booking_id', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserEvent.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserEventType }),
    __metadata("design:type", String)
], UserEvent.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserEvent.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserEvent.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'event_date', type: 'timestamp' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserEvent.prototype, "eventDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'end_date', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserEvent.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_all_day', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserEvent.prototype, "isAllDay", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserEvent.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reminder_minutes', type: 'int', default: 60 }),
    __metadata("design:type", Number)
], UserEvent.prototype, "reminderMinutes", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reminder_sent', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserEvent.prototype, "reminderSent", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserEvent.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserEvent.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object)
], UserEvent.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, booking => booking.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'booking_id' }),
    __metadata("design:type", typeof (_f = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _f : Object)
], UserEvent.prototype, "booking", void 0);
exports.UserEvent = UserEvent = __decorate([
    (0, typeorm_1.Entity)('user_events')
], UserEvent);


/***/ }),

/***/ "./src/common/entities/user-files.entity.ts":
/*!**************************************************!*\
  !*** ./src/common/entities/user-files.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserFile = exports.UserFileType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
var UserFileType;
(function (UserFileType) {
    UserFileType["RECEIPT"] = "receipt";
    UserFileType["TICKET"] = "ticket";
    UserFileType["INVOICE"] = "invoice";
    UserFileType["BOARDING_PASS"] = "boarding_pass";
    UserFileType["ITINERARY"] = "itinerary";
    UserFileType["OTHER"] = "other";
})(UserFileType || (exports.UserFileType = UserFileType = {}));
let UserFile = class UserFile {
};
exports.UserFile = UserFile;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserFile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserFile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booking_id', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], UserFile.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserFileType }),
    __metadata("design:type", String)
], UserFile.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserFile.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], UserFile.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'public_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserFile.prototype, "publicId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_size', type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UserFile.prototype, "fileSize", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'file_format', type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UserFile.prototype, "fileFormat", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_favorite', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserFile.prototype, "isFavorite", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserFile.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserFile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserFile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserFile.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, booking => booking.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'booking_id' }),
    __metadata("design:type", typeof (_d = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _d : Object)
], UserFile.prototype, "booking", void 0);
exports.UserFile = UserFile = __decorate([
    (0, typeorm_1.Entity)('user_files')
], UserFile);


/***/ }),

/***/ "./src/common/entities/user-profile.entity.ts":
/*!****************************************************!*\
  !*** ./src/common/entities/user-profile.entity.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfile = exports.SeatPreference = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
var SeatPreference;
(function (SeatPreference) {
    SeatPreference["WINDOW"] = "window";
    SeatPreference["AISLE"] = "aisle";
    SeatPreference["ANY"] = "any";
})(SeatPreference || (exports.SeatPreference = SeatPreference = {}));
let UserProfile = class UserProfile {
};
exports.UserProfile = UserProfile;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'user_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserProfile.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'seat_preference', type: 'enum', enum: SeatPreference, default: SeatPreference.ANY }),
    __metadata("design:type", String)
], UserProfile.prototype, "seatPreference", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'meal_preference', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserProfile.prototype, "mealPreference", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'special_assistance', type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserProfile.prototype, "specialAssistance", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email_notifications', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserProfile.prototype, "emailNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sms_notifications', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserProfile.prototype, "smsNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'push_notifications', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserProfile.prototype, "pushNotifications", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'marketing_emails', type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], UserProfile.prototype, "marketingEmails", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'profile_visible', type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], UserProfile.prototype, "profileVisible", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserProfile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserProfile.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object)
], UserProfile.prototype, "user", void 0);
exports.UserProfile = UserProfile = __decorate([
    (0, typeorm_1.Entity)('user_profile')
], UserProfile);


/***/ }),

/***/ "./src/common/entities/user-trips.entity.ts":
/*!**************************************************!*\
  !*** ./src/common/entities/user-trips.entity.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserTrip = exports.UserTripStatus = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
var UserTripStatus;
(function (UserTripStatus) {
    UserTripStatus["UPCOMING"] = "upcoming";
    UserTripStatus["COMPLETED"] = "completed";
    UserTripStatus["CANCELLED"] = "cancelled";
})(UserTripStatus || (exports.UserTripStatus = UserTripStatus = {}));
let UserTrip = class UserTrip {
};
exports.UserTrip = UserTrip;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserTrip.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserTrip.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booking_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], UserTrip.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: UserTripStatus }),
    __metadata("design:type", String)
], UserTrip.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], UserTrip.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserTrip.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'review_date', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserTrip.prototype, "reviewDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserTrip.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], UserTrip.prototype, "videos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserTrip.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'completed_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserTrip.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'cancelled_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UserTrip.prototype, "cancelledAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object)
], UserTrip.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, booking => booking.id),
    (0, typeorm_1.JoinColumn)({ name: 'booking_id' }),
    __metadata("design:type", typeof (_f = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _f : Object)
], UserTrip.prototype, "booking", void 0);
exports.UserTrip = UserTrip = __decorate([
    (0, typeorm_1.Entity)('user_trips')
], UserTrip);


/***/ }),

/***/ "./src/common/entities/user.entity.ts":
/*!********************************************!*\
  !*** ./src/common/entities/user.entity.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = exports.Theme = exports.LoyaltyTier = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var LoyaltyTier;
(function (LoyaltyTier) {
    LoyaltyTier["BRONZE"] = "bronze";
    LoyaltyTier["SILVER"] = "silver";
    LoyaltyTier["GOLD"] = "gold";
    LoyaltyTier["PLATINUM"] = "platinum";
})(LoyaltyTier || (exports.LoyaltyTier = LoyaltyTier = {}));
var Theme;
(function (Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
    Theme["AUTO"] = "auto";
})(Theme || (exports.Theme = Theme = {}));
let User = class User {
    get fullName() {
        return `${this.first_name || ''} ${this.last_name || ''}`.trim();
    }
    get displayName() {
        return this.fullName || this.email || this.phone_number || 'Unknown User';
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, nullable: true, unique: true }),
    (0, typeorm_1.Index)(),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 5, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "country_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date_of_birth', type: 'date', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "date_of_birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'en' }),
    __metadata("design:type", String)
], User.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 20, default: 'USD' }),
    __metadata("design:type", String)
], User.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50, default: 'UTC' }),
    __metadata("design:type", String)
], User.prototype, "timezone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: Theme, default: Theme.AUTO }),
    __metadata("design:type", String)
], User.prototype, "theme", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profile_image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "profile_image_public_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "loyalty_points", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'loyalty_tier', type: 'enum', enum: LoyaltyTier, default: LoyaltyTier.BRONZE }),
    __metadata("design:type", String)
], User.prototype, "loyalty_tier", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], User.prototype, "wallet_balance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "email_verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "phone_verified", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], User.prototype, "updated_at", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);


/***/ }),

/***/ "./src/common/entities/wallet-transaction.entity.ts":
/*!**********************************************************!*\
  !*** ./src/common/entities/wallet-transaction.entity.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletTransaction = exports.WalletTransactionStatus = exports.WalletTransactionType = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./src/common/entities/user.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ./booking.entity */ "./src/common/entities/booking.entity.ts");
var WalletTransactionType;
(function (WalletTransactionType) {
    WalletTransactionType["DEPOSIT"] = "deposit";
    WalletTransactionType["WITHDRAWAL"] = "withdrawal";
    WalletTransactionType["PAYMENT"] = "payment";
    WalletTransactionType["REFUND"] = "refund";
    WalletTransactionType["BONUS"] = "bonus";
    WalletTransactionType["FEE"] = "fee";
    WalletTransactionType["LOYALTY_EARNED"] = "loyalty_earned";
    WalletTransactionType["LOYALTY_REDEEMED"] = "loyalty_redeemed";
    WalletTransactionType["LOYALTY_EXPIRED"] = "loyalty_expired";
    WalletTransactionType["LOYALTY_ADJUSTMENT"] = "loyalty_adjustment";
})(WalletTransactionType || (exports.WalletTransactionType = WalletTransactionType = {}));
var WalletTransactionStatus;
(function (WalletTransactionStatus) {
    WalletTransactionStatus["PENDING"] = "pending";
    WalletTransactionStatus["COMPLETED"] = "completed";
    WalletTransactionStatus["FAILED"] = "failed";
    WalletTransactionStatus["CANCELLED"] = "cancelled";
})(WalletTransactionStatus || (exports.WalletTransactionStatus = WalletTransactionStatus = {}));
let WalletTransaction = class WalletTransaction {
};
exports.WalletTransaction = WalletTransaction;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'user_id', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booking_id', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "bookingId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'transaction_type', type: 'enum', enum: WalletTransactionType }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'points_amount', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "pointsAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 3, default: 'USD', nullable: true }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: true }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'balance_before', type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "balanceBefore", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'balance_after', type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "balanceAfter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'points_before', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "pointsBefore", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'points_after', type: 'int', default: 0 }),
    __metadata("design:type", Number)
], WalletTransaction.prototype, "pointsAfter", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_method', type: 'enum', enum: ['card', 'mpesa', 'wallet', 'loyalty_points'], nullable: true }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'payment_reference', type: 'varchar', length: 255, nullable: true }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "paymentReference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: WalletTransactionStatus, default: WalletTransactionStatus.PENDING }),
    __metadata("design:type", String)
], WalletTransaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'json', nullable: true }),
    __metadata("design:type", Object)
], WalletTransaction.prototype, "metadata", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expires_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], WalletTransaction.prototype, "expiresAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], WalletTransaction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'completed_at', type: 'timestamp', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], WalletTransaction.prototype, "completedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object)
], WalletTransaction.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => booking_entity_1.Booking, booking => booking.id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'booking_id' }),
    __metadata("design:type", typeof (_e = typeof booking_entity_1.Booking !== "undefined" && booking_entity_1.Booking) === "function" ? _e : Object)
], WalletTransaction.prototype, "booking", void 0);
exports.WalletTransaction = WalletTransaction = __decorate([
    (0, typeorm_1.Entity)('wallet_transactions')
], WalletTransaction);


/***/ }),

/***/ "./src/common/guards/jwt-auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/common/guards/jwt-auth.guard.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    canActivate(context) {
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException('Invalid or expired token');
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ }),

/***/ "./src/health.controller.ts":
/*!**********************************!*\
  !*** ./src/health.controller.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HealthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
let HealthController = class HealthController {
    health() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
    healthCheck() {
        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        };
    }
};
exports.HealthController = HealthController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Health check endpoint' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Server is healthy',
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'ok' },
                timestamp: { type: 'string', example: '2024-01-01T00:00:00.000Z' },
                uptime: { type: 'number', example: 123.456 },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "health", null);
__decorate([
    (0, common_1.Get)('health'),
    (0, swagger_1.ApiOperation)({ summary: 'Health check endpoint' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Server is healthy',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "healthCheck", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health'),
    (0, common_1.Controller)()
], HealthController);


/***/ }),

/***/ "./src/modules/auth/auth.controller.ts":
/*!*********************************************!*\
  !*** ./src/modules/auth/auth.controller.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/modules/auth/dto/index.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return await this.authService.register(registerDto);
    }
    async login(loginDto) {
        return await this.authService.loginWithEmail(loginDto.email, loginDto.password);
    }
    async refreshToken(refreshTokenDto) {
        return await this.authService.refreshToken(refreshTokenDto.refreshToken);
    }
    async getProfile(req) {
        const user = await this.authService.getUserById(req.user.sub);
        if (!user) {
            throw new Error('User not found');
        }
        return {
            id: user.id,
            email: user.email,
            phoneNumber: user.phone_number,
            firstName: user.first_name,
            lastName: user.last_name,
            countryCode: user.country_code,
            loyaltyPoints: user.loyalty_points,
            walletBalance: user.wallet_balance,
            isActive: user.is_active,
            emailVerified: user.email_verified,
            phoneVerified: user.phone_verified,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
        };
    }
    async updateProfile(req, updateProfileDto) {
        return {
            message: 'Profile update endpoint - implementation needed',
            userId: req.user.sub,
            updateData: updateProfileDto,
        };
    }
    async logout(req) {
        return {
            message: 'Logout successful',
            userId: req.user.sub,
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Register new user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User registered successfully',
        schema: {
            type: 'object',
            properties: {
                accessToken: { type: 'string' },
                refreshToken: { type: 'string' },
                tokenType: { type: 'string' },
                expiresIn: { type: 'number' },
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        email: { type: 'string' },
                        phoneNumber: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        countryCode: { type: 'string' },
                        loyaltyPoints: { type: 'number' },
                        walletBalance: { type: 'number' },
                        isActive: { type: 'boolean' },
                        emailVerified: { type: 'boolean' },
                        phoneVerified: { type: 'boolean' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid registration data' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'User already exists' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Login with email and password' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Login successful',
        schema: {
            type: 'object',
            properties: {
                accessToken: { type: 'string' },
                refreshToken: { type: 'string' },
                tokenType: { type: 'string' },
                expiresIn: { type: 'number' },
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        email: { type: 'string' },
                        phoneNumber: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        countryCode: { type: 'string' },
                        loyaltyPoints: { type: 'number' },
                        walletBalance: { type: 'number' },
                        isActive: { type: 'boolean' },
                        emailVerified: { type: 'boolean' },
                        phoneVerified: { type: 'boolean' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid credentials' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Refresh access token' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token refreshed successfully',
        schema: {
            type: 'object',
            properties: {
                accessToken: { type: 'string' },
                refreshToken: { type: 'string' },
                tokenType: { type: 'string' },
                expiresIn: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Invalid refresh token' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.RefreshTokenDto !== "undefined" && dto_1.RefreshTokenDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User profile retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update user profile' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profile updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof dto_1.UpdateProfileDto !== "undefined" && dto_1.UpdateProfileDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Logout user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logout successful',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Authentication'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./src/modules/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./src/modules/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./src/modules/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./src/modules/auth/auth.service.ts");
const jwt_strategy_1 = __webpack_require__(/*! ./strategies/jwt.strategy */ "./src/modules/auth/strategies/jwt.strategy.ts");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET', 'your-secret-key'),
                    signOptions: {
                        expiresIn: configService.get('JWT_EXPIRES_IN', '1h'),
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
        ],
        exports: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ }),

/***/ "./src/modules/auth/auth.service.ts":
/*!******************************************!*\
  !*** ./src/modules/auth/auth.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async register(registerDto) {
        try {
            const { email, password, firstName, lastName, authProvider } = registerDto;
            if (!email || !password || !firstName || !lastName) {
                throw new common_1.BadRequestException('Missing required fields: email, password, firstName, lastName');
            }
            const existingUser = await this.userRepository.findOne({
                where: [
                    { email },
                    { phone_number: email }
                ]
            });
            if (existingUser) {
                throw new common_1.ConflictException('User with this email already exists');
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            const user = this.userRepository.create({
                id: userId,
                email,
                password: hashedPassword,
                first_name: firstName,
                last_name: lastName,
                phone_number: null,
                country_code: null,
                loyalty_points: 0,
                wallet_balance: 0,
                is_active: true,
                email_verified: false,
                phone_verified: false,
            });
            const savedUser = await this.userRepository.save(user);
            console.log('🔥 User saved to database:', savedUser.id);
            console.log('🔥 Password hashed and stored for backend authentication');
            const payload = {
                sub: savedUser.id,
                email: savedUser.email,
                phone: savedUser.phone_number,
                type: 'backend',
            };
            const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
            const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
            return {
                accessToken,
                refreshToken,
                tokenType: 'Bearer',
                expiresIn: 3600,
                user: {
                    id: savedUser.id,
                    email: savedUser.email,
                    phoneNumber: savedUser.phone_number,
                    firstName: savedUser.first_name,
                    lastName: savedUser.last_name,
                    countryCode: savedUser.country_code,
                    loyaltyPoints: savedUser.loyalty_points,
                    walletBalance: savedUser.wallet_balance,
                    isActive: savedUser.is_active,
                    emailVerified: savedUser.email_verified,
                    phoneVerified: savedUser.phone_verified,
                    createdAt: savedUser.created_at,
                    updatedAt: savedUser.updated_at,
                },
            };
        }
        catch (error) {
            console.error('🔥 Registration error:', error);
            if (error instanceof common_1.BadRequestException || error instanceof common_1.ConflictException) {
                throw error;
            }
            throw new common_1.BadRequestException('Registration failed: ' + error.message);
        }
    }
    async loginWithEmail(email, password) {
        try {
            console.log('🔥 Backend login attempt for:', email);
            const user = await this.userRepository.findOne({
                where: { email }
            });
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid email or password');
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Invalid email or password');
            }
            console.log('🔥 Backend login successful for user:', user.id);
            const payload = {
                sub: user.id,
                email: user.email,
                phone: user.phone_number,
                type: 'backend',
            };
            const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
            const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
            return {
                accessToken,
                refreshToken,
                tokenType: 'Bearer',
                expiresIn: 3600,
                user: {
                    id: user.id,
                    email: user.email,
                    phoneNumber: user.phone_number,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    countryCode: user.country_code,
                    loyaltyPoints: user.loyalty_points,
                    walletBalance: user.wallet_balance,
                    isActive: user.is_active,
                    emailVerified: user.email_verified,
                    phoneVerified: user.phone_verified,
                    createdAt: user.created_at,
                    updatedAt: user.updated_at,
                },
            };
        }
        catch (error) {
            console.error('🔥 Backend login error:', error);
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            throw new common_1.UnauthorizedException('Login failed: ' + error.message);
        }
    }
    async refreshToken(refreshToken) {
        try {
            const payload = this.jwtService.verify(refreshToken);
            const newPayload = {
                sub: payload.sub,
                email: payload.email,
                phone: payload.phone,
            };
            const accessToken = this.jwtService.sign(newPayload);
            const newRefreshToken = this.jwtService.sign(newPayload, { expiresIn: '7d' });
            return {
                accessToken,
                refreshToken: newRefreshToken,
                tokenType: 'Bearer',
                expiresIn: 3600,
            };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
    }
    async validateToken(token) {
        try {
            const payload = this.jwtService.verify(token);
            return payload;
        }
        catch (error) {
            return null;
        }
    }
    async getUserById(userId) {
        return await this.userRepository.findOne({
            where: { id: userId }
        });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./src/modules/auth/dto/index.ts":
/*!***************************************!*\
  !*** ./src/modules/auth/dto/index.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./refresh-token.dto */ "./src/modules/auth/dto/refresh-token.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-profile.dto */ "./src/modules/auth/dto/update-profile.dto.ts"), exports);


/***/ }),

/***/ "./src/modules/auth/dto/refresh-token.dto.ts":
/*!***************************************************!*\
  !*** ./src/modules/auth/dto/refresh-token.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RefreshTokenDto {
}
exports.RefreshTokenDto = RefreshTokenDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Refresh token for getting new access token',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], RefreshTokenDto.prototype, "refreshToken", void 0);


/***/ }),

/***/ "./src/modules/auth/dto/update-profile.dto.ts":
/*!****************************************************!*\
  !*** ./src/modules/auth/dto/update-profile.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateProfileDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateProfileDto {
}
exports.UpdateProfileDto = UpdateProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User first name',
        required: false,
        example: 'John',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User last name',
        required: false,
        example: 'Doe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User phone number',
        required: false,
        example: '+1234567890',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User country code',
        required: false,
        example: '+1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateProfileDto.prototype, "countryCode", void 0);


/***/ }),

/***/ "./src/modules/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./src/modules/auth/strategies/jwt.strategy.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'),
        });
        this.configService = configService;
    }
    async validate(payload) {
        if (!payload.sub) {
            throw new common_1.UnauthorizedException('Invalid token payload');
        }
        return {
            sub: payload.sub,
            userId: payload.sub,
            email: payload.email,
            phone: payload.phone,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], JwtStrategy);


/***/ }),

/***/ "./src/modules/bookings/bookings.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/bookings/bookings.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const bookings_service_1 = __webpack_require__(/*! ./bookings.service */ "./src/modules/bookings/bookings.service.ts");
const create_booking_dto_1 = __webpack_require__(/*! ./dto/create-booking.dto */ "./src/modules/bookings/dto/create-booking.dto.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const booking_entity_1 = __webpack_require__(/*! ../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
let BookingsController = class BookingsController {
    constructor(bookingsService) {
        this.bookingsService = bookingsService;
    }
    async create(createBookingDto, req) {
        const result = await this.bookingsService.createWithPaymentIntent(createBookingDto, req.user.sub);
        return {
            success: true,
            message: 'Booking created successfully. Please complete payment to confirm.',
            data: result,
        };
    }
    async findAll(req, upcoming, status) {
        const bookings = await this.bookingsService.findByUserWithFilters(req.user.sub, { upcoming, status });
        return {
            success: true,
            message: 'Bookings retrieved successfully',
            data: bookings,
            count: bookings.length,
        };
    }
    async getStats(req) {
        const stats = await this.bookingsService.getBookingStats(req.user.sub);
        return {
            success: true,
            message: 'Booking statistics retrieved successfully',
            data: stats,
        };
    }
    async findByReference(reference) {
        const booking = await this.bookingsService.findByReference(reference);
        return {
            success: true,
            message: 'Booking retrieved successfully',
            data: booking,
        };
    }
    async findOne(id) {
        const booking = await this.bookingsService.findOne(id);
        return {
            success: true,
            message: 'Booking retrieved successfully',
            data: booking,
        };
    }
    async updateStatus(id, body) {
        const booking = await this.bookingsService.updateStatus(id, body.status);
        return {
            success: true,
            message: 'Booking status updated successfully',
            data: booking,
        };
    }
    async updatePaymentStatus(id, body) {
        const booking = await this.bookingsService.updatePaymentStatus(id, body.paymentStatus);
        return {
            success: true,
            message: 'Payment status updated successfully',
            data: booking,
        };
    }
    async cancel(id, req) {
        const booking = await this.bookingsService.cancel(id, req.user.sub);
        return {
            success: true,
            message: 'Booking cancelled successfully',
            data: booking,
        };
    }
    async confirmBooking(id, req, confirmData) {
        const result = await this.bookingsService.confirmBooking(id, req.user.sub, confirmData.paymentTransactionId);
        return {
            success: true,
            message: 'Booking confirmed successfully',
            data: result,
        };
    }
    async getPendingPaymentBookings(req) {
        const bookings = await this.bookingsService.findPendingPaymentBookings(req.user.sub);
        return {
            success: true,
            message: 'Pending payment bookings retrieved',
            data: bookings,
            count: bookings.length,
        };
    }
    async processPayment(id, req, paymentData) {
        const booking = await this.bookingsService.bookingPaymentService.processPayment(id, paymentData.paymentTransactionId, paymentData.paymentMethod, paymentData.amount);
        return {
            success: true,
            message: 'Payment processed successfully. Booking confirmed and loyalty points earned.',
            data: {
                id: booking.id,
                referenceNumber: booking.referenceNumber,
                bookingStatus: booking.bookingStatus,
                paymentStatus: booking.paymentStatus,
                loyaltyPointsEarned: booking.loyaltyPointsEarned,
                paymentTransactionId: booking.paymentTransactionId,
            },
        };
    }
    async completePayment(id, req, body) {
        const payment = await this.bookingsService.paymentProviderService.confirmPayment({
            paymentIntentId: body.paymentIntentId,
            paymentMethodId: body.paymentMethodId,
        });
        const booking = await this.bookingsService.bookingPaymentService.processPayment(id, payment.transactionId, payment.paymentMethod, payment.amount);
        return {
            success: true,
            message: 'Payment completed and booking confirmed',
            data: {
                booking,
                payment: {
                    id: payment.id,
                    transactionId: payment.transactionId,
                    amount: payment.amount,
                    status: payment.status,
                    paymentMethod: payment.paymentMethod,
                },
            },
        };
    }
    async processRefund(id, req, refundData) {
        const booking = await this.bookingsService.bookingPaymentService.processRefund(id, refundData.refundAmount, refundData.refundReason);
        return {
            success: true,
            message: 'Refund processed successfully. Loyalty points adjusted accordingly.',
            data: {
                id: booking.id,
                bookingStatus: booking.bookingStatus,
                paymentStatus: booking.paymentStatus,
                refundAmount: refundData.refundAmount,
                refundReason: refundData.refundReason,
            },
        };
    }
    async remove(id) {
        await this.bookingsService.remove(id);
        return {
            success: true,
            message: 'Booking deleted successfully',
        };
    }
    async getBookingStatus(reference) {
        const bookingStatus = await this.bookingsService.getBookingStatusByReference(reference);
        return {
            success: true,
            message: 'Booking status retrieved successfully',
            data: bookingStatus,
        };
    }
    async getBookingTimeline(id, req) {
        const booking = await this.bookingsService.findOne(id);
        if (booking.userId !== req.user.sub) {
            throw new common_1.BadRequestException('You can only view your own booking timeline');
        }
        const timeline = await this.bookingsService.getBookingTimeline(id);
        return {
            success: true,
            message: 'Booking timeline retrieved successfully',
            data: timeline,
        };
    }
};
exports.BookingsController = BookingsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new booking with passengers and payment intent' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Booking created successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        booking: { $ref: '#/components/schemas/Booking' },
                        paymentIntent: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                clientSecret: { type: 'string' },
                                status: { type: 'string' },
                                requiresAction: { type: 'boolean' },
                                nextAction: { type: 'object' },
                            },
                        },
                        paymentInstructions: {
                            type: 'object',
                            properties: {
                                amount: { type: 'number' },
                                currency: { type: 'string' },
                                paymentMethods: { type: 'array', items: { type: 'string' } },
                                nextSteps: { type: 'array', items: { type: 'string' } },
                                apiEndpoints: { type: 'object' },
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Invalid booking data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_booking_dto_1.CreateBookingDto !== "undefined" && create_booking_dto_1.CreateBookingDto) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all bookings for the authenticated user' }),
    (0, swagger_1.ApiQuery)({
        name: 'upcoming',
        required: false,
        type: Boolean,
        description: 'Filter upcoming (true) or past (false) bookings'
    }),
    (0, swagger_1.ApiQuery)({
        name: 'status',
        required: false,
        enum: booking_entity_1.BookingStatus,
        description: 'Filter by booking status'
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Bookings retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Booking' },
                },
                count: { type: 'number' },
            },
        },
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('upcoming')),
    __param(2, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Boolean, typeof (_c = typeof booking_entity_1.BookingStatus !== "undefined" && booking_entity_1.BookingStatus) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get booking statistics' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking statistics retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        total: { type: 'number' },
                        pending: { type: 'number' },
                        confirmed: { type: 'number' },
                        cancelled: { type: 'number' },
                        completed: { type: 'number' },
                    },
                },
            },
        },
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)('reference/:reference'),
    (0, swagger_1.ApiOperation)({ summary: 'Get booking by reference number' }),
    (0, swagger_1.ApiParam)({ name: 'reference', type: String, description: 'Booking reference number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/Booking' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findByReference", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get booking by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/Booking' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update booking status' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking status updated successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)(':id/payment-status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update payment status' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment status updated successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "updatePaymentStatus", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancel a booking' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking cancelled successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Booking cannot be cancelled' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "cancel", null);
__decorate([
    (0, common_1.Post)(':id/confirm'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm booking after payment' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking confirmed successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        referenceNumber: { type: 'string' },
                        bookingStatus: { type: 'string' },
                        paymentStatus: { type: 'string' },
                        confirmationEmail: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Booking cannot be confirmed' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "confirmBooking", null);
__decorate([
    (0, common_1.Get)('pending-payment'),
    (0, swagger_1.ApiOperation)({ summary: 'Get bookings pending payment' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pending payment bookings retrieved',
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "getPendingPaymentBookings", null);
__decorate([
    (0, common_1.Post)(':id/process-payment'),
    (0, swagger_1.ApiOperation)({ summary: 'Process payment for a booking and populate points/reference' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment processed successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        referenceNumber: { type: 'string' },
                        bookingStatus: { type: 'string' },
                        paymentStatus: { type: 'string' },
                        loyaltyPointsEarned: { type: 'number' },
                        paymentTransactionId: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Payment processing failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "processPayment", null);
__decorate([
    (0, common_1.Post)(':id/pay'),
    (0, swagger_1.ApiOperation)({ summary: 'Complete payment for booking with Stripe integration' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Payment completed and booking confirmed',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        booking: { $ref: '#/components/schemas/Booking' },
                        payment: {
                            type: 'object',
                            properties: {
                                id: { type: 'string' },
                                transactionId: { type: 'string' },
                                amount: { type: 'number' },
                                status: { type: 'string' },
                                paymentMethod: { type: 'string' },
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Payment failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "completePayment", null);
__decorate([
    (0, common_1.Post)(':id/refund'),
    (0, swagger_1.ApiOperation)({ summary: 'Process refund for a booking and adjust loyalty points' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Refund processed successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        bookingStatus: { type: 'string' },
                        paymentStatus: { type: 'string' },
                        refundAmount: { type: 'number' },
                        loyaltyPointsDeducted: { type: 'number' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request - Refund processing failed' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "processRefund", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a booking' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking deleted successfully',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('status/:reference'),
    (0, swagger_1.ApiOperation)({ summary: 'Get booking status by reference number (public)' }),
    (0, swagger_1.ApiParam)({ name: 'reference', type: String, description: 'Booking reference number' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking status retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { $ref: '#/components/schemas/BookingStatusResponseDto' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Booking not found' }),
    __param(0, (0, common_1.Param)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "getBookingStatus", null);
__decorate([
    (0, common_1.Get)(':id/timeline'),
    (0, swagger_1.ApiOperation)({ summary: 'Get booking timeline' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Booking timeline retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            eventType: { type: 'string' },
                            title: { type: 'string' },
                            description: { type: 'string' },
                            oldValue: { type: 'string' },
                            newValue: { type: 'string' },
                            createdAt: { type: 'string', format: 'date-time' },
                        },
                    },
                },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookingsController.prototype, "getBookingTimeline", null);
exports.BookingsController = BookingsController = __decorate([
    (0, swagger_1.ApiTags)('Bookings'),
    (0, common_1.Controller)('bookings'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof bookings_service_1.BookingsService !== "undefined" && bookings_service_1.BookingsService) === "function" ? _a : Object])
], BookingsController);


/***/ }),

/***/ "./src/modules/bookings/bookings.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/bookings/bookings.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const bookings_service_1 = __webpack_require__(/*! ./bookings.service */ "./src/modules/bookings/bookings.service.ts");
const bookings_controller_1 = __webpack_require__(/*! ./bookings.controller */ "./src/modules/bookings/bookings.controller.ts");
const booking_entity_1 = __webpack_require__(/*! ../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const passenger_entity_1 = __webpack_require__(/*! ../../common/entities/passenger.entity */ "./src/common/entities/passenger.entity.ts");
const booking_timeline_entity_1 = __webpack_require__(/*! ../../common/entities/booking-timeline.entity */ "./src/common/entities/booking-timeline.entity.ts");
const user_trips_entity_1 = __webpack_require__(/*! ../../common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
const wallet_transaction_entity_1 = __webpack_require__(/*! ../../common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const payment_entity_1 = __webpack_require__(/*! ../../common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
const wallet_module_1 = __webpack_require__(/*! ../wallet/wallet.module */ "./src/modules/wallet/wallet.module.ts");
const payments_module_1 = __webpack_require__(/*! ../payments/payments.module */ "./src/modules/payments/payments.module.ts");
const booking_payment_service_1 = __webpack_require__(/*! ./services/booking-payment.service */ "./src/modules/bookings/services/booking-payment.service.ts");
const booking_timeline_service_1 = __webpack_require__(/*! ./services/booking-timeline.service */ "./src/modules/bookings/services/booking-timeline.service.ts");
const booking_query_service_1 = __webpack_require__(/*! ./services/booking-query.service */ "./src/modules/bookings/services/booking-query.service.ts");
let BookingsModule = class BookingsModule {
};
exports.BookingsModule = BookingsModule;
exports.BookingsModule = BookingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([booking_entity_1.Booking, charter_deal_entity_1.CharterDeal, passenger_entity_1.Passenger, booking_timeline_entity_1.BookingTimeline, user_trips_entity_1.UserTrip, wallet_transaction_entity_1.WalletTransaction, user_entity_1.User, payment_entity_1.Payment]),
            wallet_module_1.WalletModule,
            payments_module_1.PaymentsModule,
        ],
        controllers: [bookings_controller_1.BookingsController],
        providers: [
            bookings_service_1.BookingsService,
            booking_payment_service_1.BookingPaymentService,
            booking_timeline_service_1.BookingTimelineService,
            booking_query_service_1.BookingQueryService,
        ],
        exports: [bookings_service_1.BookingsService],
    })
], BookingsModule);


/***/ }),

/***/ "./src/modules/bookings/bookings.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/bookings/bookings.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_entity_1 = __webpack_require__(/*! ../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const passenger_entity_1 = __webpack_require__(/*! ../../common/entities/passenger.entity */ "./src/common/entities/passenger.entity.ts");
const booking_timeline_entity_1 = __webpack_require__(/*! ../../common/entities/booking-timeline.entity */ "./src/common/entities/booking-timeline.entity.ts");
const booking_payment_service_1 = __webpack_require__(/*! ./services/booking-payment.service */ "./src/modules/bookings/services/booking-payment.service.ts");
const booking_timeline_service_1 = __webpack_require__(/*! ./services/booking-timeline.service */ "./src/modules/bookings/services/booking-timeline.service.ts");
const booking_query_service_1 = __webpack_require__(/*! ./services/booking-query.service */ "./src/modules/bookings/services/booking-query.service.ts");
const payment_provider_service_1 = __webpack_require__(/*! ../payments/services/payment-provider.service */ "./src/modules/payments/services/payment-provider.service.ts");
const payment_provider_interface_1 = __webpack_require__(/*! ../payments/interfaces/payment-provider.interface */ "./src/modules/payments/interfaces/payment-provider.interface.ts");
const user_entity_1 = __webpack_require__(/*! ../../common/entities/user.entity */ "./src/common/entities/user.entity.ts");
let BookingsService = class BookingsService {
    constructor(bookingRepository, charterDealRepository, passengerRepository, timelineRepository, dataSource, bookingPaymentService, bookingTimelineService, bookingQueryService, paymentProviderService) {
        this.bookingRepository = bookingRepository;
        this.charterDealRepository = charterDealRepository;
        this.passengerRepository = passengerRepository;
        this.timelineRepository = timelineRepository;
        this.dataSource = dataSource;
        this.bookingPaymentService = bookingPaymentService;
        this.bookingTimelineService = bookingTimelineService;
        this.bookingQueryService = bookingQueryService;
        this.paymentProviderService = paymentProviderService;
        this.bookingCounter = 0;
    }
    async create(createBookingDto, userId) {
        const bookingId = this.generateBookingId();
        const deal = await this.charterDealRepository.findOne({
            where: { id: createBookingDto.dealId },
            select: ['id', 'companyId', 'availableSeats']
        });
        if (!deal) {
            throw new common_1.NotFoundException(`Charter deal with ID ${createBookingDto.dealId} not found`);
        }
        const user = await this.dataSource.getRepository(user_entity_1.User).findOne({
            where: { id: userId },
            select: ['id', 'first_name', 'last_name', 'nationality', 'date_of_birth']
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        const passengersToCreate = [];
        const userInPassengers = createBookingDto.passengers?.find(p => p.firstName.toLowerCase() === user.first_name?.toLowerCase() &&
            p.lastName.toLowerCase() === user.last_name?.toLowerCase());
        if (!userInPassengers) {
            passengersToCreate.push({
                firstName: user.first_name || 'Unknown',
                lastName: user.last_name || 'User',
                age: user.date_of_birth ? this.calculateAge(user.date_of_birth) : undefined,
                nationality: user.nationality,
                idPassportNumber: undefined,
                isUser: true,
            });
        }
        if (createBookingDto.passengers && createBookingDto.passengers.length > 0) {
            passengersToCreate.push(...createBookingDto.passengers.map(p => ({
                ...p,
                isUser: false,
            })));
        }
        if (deal.availableSeats < passengersToCreate.length) {
            throw new common_1.BadRequestException(`Insufficient seats available. Only ${deal.availableSeats} seats left, but ${passengersToCreate.length} passengers requested.`);
        }
        const hasExisting = await this.bookingQueryService.hasExistingBooking(userId, createBookingDto.dealId);
        if (hasExisting) {
            throw new common_1.ConflictException('A booking for this deal is already in progress or confirmed.');
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const referenceNumber = this.generateBookingReference();
            const booking = this.bookingRepository.create({
                id: bookingId,
                userId,
                dealId: createBookingDto.dealId,
                companyId: deal.companyId,
                totalPrice: createBookingDto.totalPrice,
                onboardDining: createBookingDto.onboardDining || false,
                groundTransportation: createBookingDto.groundTransportation || false,
                specialRequirements: createBookingDto.specialRequirements,
                billingRegion: createBookingDto.billingRegion,
                paymentMethod: createBookingDto.paymentMethod,
                referenceNumber: referenceNumber,
                bookingStatus: booking_entity_1.BookingStatus.PENDING,
                paymentStatus: booking_entity_1.PaymentStatus.PENDING,
                loyaltyPointsEarned: 0,
                loyaltyPointsRedeemed: 0,
                walletAmountUsed: 0,
            });
            const savedBooking = await queryRunner.manager.save(booking);
            for (const passengerData of passengersToCreate) {
                const passenger = this.passengerRepository.create({
                    bookingId: bookingId,
                    firstName: passengerData.firstName,
                    lastName: passengerData.lastName,
                    age: passengerData.age,
                    nationality: passengerData.nationality,
                    idPassportNumber: passengerData.idPassportNumber,
                    isUser: passengerData.isUser || false,
                });
                await queryRunner.manager.save(passenger);
            }
            const passengerCount = passengersToCreate.length;
            deal.availableSeats -= passengerCount;
            await queryRunner.manager.save(deal);
            await queryRunner.commitTransaction();
            await this.bookingTimelineService.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.BOOKING_CREATED, {
                title: 'Booking Created',
                description: `Booking ${referenceNumber} has been created successfully with ${passengerCount} passengers. Loyalty points will be earned upon payment.`,
                metadata: {
                    passengerCount,
                    companyId: deal.companyId,
                    referenceNumber: referenceNumber,
                    totalPrice: createBookingDto.totalPrice,
                    userIncluded: !userInPassengers,
                }
            });
            return this.bookingQueryService.findOne(bookingId);
        }
        catch (error) {
            if (queryRunner.isTransactionActive) {
                await queryRunner.rollbackTransaction();
            }
            throw new common_1.BadRequestException('Failed to create booking: ' + error.message);
        }
        finally {
            await queryRunner.release();
        }
    }
    async createWithPaymentIntent(createBookingDto, userId) {
        const booking = await this.create(createBookingDto, userId);
        try {
            const paymentIntent = await this.paymentProviderService.createPaymentIntent({
                amount: booking.totalPrice,
                currency: 'USD',
                bookingId: booking.id,
                userId: booking.userId,
                description: `Payment for booking ${booking.referenceNumber}`,
                metadata: {
                    bookingId: booking.id,
                    referenceNumber: booking.referenceNumber,
                    dealId: booking.dealId,
                    companyId: booking.companyId,
                },
            }, payment_provider_interface_1.PaymentProviderType.STRIPE);
            return {
                booking,
                paymentIntent: {
                    id: paymentIntent.id,
                    clientSecret: paymentIntent.clientSecret,
                    status: paymentIntent.status,
                    requiresAction: paymentIntent.requiresAction,
                    nextAction: paymentIntent.nextAction,
                },
                paymentInstructions: {
                    amount: booking.totalPrice,
                    currency: 'USD',
                    paymentMethods: ['card', 'apple_pay', 'google_pay', 'bank_transfer'],
                    nextSteps: [
                        'Complete payment using the client secret',
                        'Confirm payment using /payments/confirm',
                        'Process booking using /bookings/:id/process-payment'
                    ],
                    apiEndpoints: {
                        confirmPayment: `/payments/confirm`,
                        processBooking: `/bookings/${booking.id}/process-payment`,
                        paymentStatus: `/payments/status/${paymentIntent.id}`
                    }
                }
            };
        }
        catch (error) {
            console.error('Failed to create payment intent:', error);
            return {
                booking,
                paymentIntent: null,
                paymentInstructions: {
                    amount: booking.totalPrice,
                    currency: 'USD',
                    paymentMethods: ['card', 'apple_pay', 'google_pay', 'bank_transfer'],
                    nextSteps: [
                        'Create payment intent using /payments/create-intent',
                        'Complete payment with Stripe',
                        'Process booking using /bookings/:id/process-payment'
                    ],
                    apiEndpoints: {
                        createIntent: `/payments/create-intent`,
                        confirmPayment: `/payments/confirm`,
                        processBooking: `/bookings/${booking.id}/process-payment`
                    }
                }
            };
        }
    }
    async findAll(userId) {
        return this.bookingQueryService.findAll(userId);
    }
    async findOne(id) {
        return this.bookingQueryService.findOne(id);
    }
    async findByReference(referenceNumber) {
        return this.bookingQueryService.findByReference(referenceNumber);
    }
    async findByUser(userId) {
        return this.bookingQueryService.findAll(userId);
    }
    async findByUserWithFilters(userId, filters) {
        return this.bookingQueryService.findByUserWithFilters(userId, filters);
    }
    async updateStatus(id, bookingStatus) {
        const booking = await this.bookingQueryService.findOne(id);
        const oldStatus = booking.bookingStatus;
        booking.bookingStatus = bookingStatus;
        await this.bookingRepository.save(booking);
        await this.bookingTimelineService.createTimelineEvent(id, booking_timeline_entity_1.TimelineEventType.STATUS_CHANGED, {
            title: 'Booking Status Updated',
            description: `Booking status changed from ${oldStatus} to ${bookingStatus}`,
            oldValue: oldStatus,
            newValue: bookingStatus,
        });
        return this.bookingQueryService.findOne(id);
    }
    async updateLoyaltyAndWallet(bookingId, loyaltyPointsRedeemed = 0, walletAmountUsed = 0) {
        const booking = await this.bookingQueryService.findOne(bookingId);
        booking.loyaltyPointsRedeemed = loyaltyPointsRedeemed;
        booking.walletAmountUsed = walletAmountUsed;
        await this.bookingRepository.save(booking);
        await this.bookingTimelineService.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.LOYALTY_UPDATED, {
            title: 'Loyalty Points and Wallet Updated',
            description: `Loyalty points redeemed: ${loyaltyPointsRedeemed}, Wallet amount used: $${walletAmountUsed}`,
            metadata: { loyaltyPointsRedeemed, walletAmountUsed }
        });
        return this.bookingQueryService.findOne(bookingId);
    }
    async getBookingSummary(bookingId) {
        return this.bookingQueryService.getBookingSummary(bookingId);
    }
    async updatePaymentStatus(id, paymentStatus) {
        return this.bookingPaymentService.updatePaymentStatus(id, paymentStatus);
    }
    async cancel(id, userId) {
        const booking = await this.bookingQueryService.findOne(id);
        if (booking.userId !== userId) {
            throw new common_1.BadRequestException('You can only cancel your own bookings');
        }
        if (!booking.canBeCancelled) {
            throw new common_1.BadRequestException('This booking cannot be cancelled');
        }
        const oldStatus = booking.bookingStatus;
        booking.bookingStatus = booking_entity_1.BookingStatus.CANCELLED;
        await this.bookingRepository.save(booking);
        await this.bookingTimelineService.createTimelineEvent(id, booking_timeline_entity_1.TimelineEventType.BOOKING_CANCELLED, {
            title: 'Booking Cancelled',
            description: `Booking cancelled by user. Previous status: ${oldStatus}`,
            oldValue: oldStatus,
            newValue: booking_entity_1.BookingStatus.CANCELLED,
        });
        return this.bookingQueryService.findOne(id);
    }
    async remove(id) {
        const booking = await this.bookingQueryService.findOne(id);
        await this.bookingRepository.remove(booking);
    }
    generateBookingId() {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
        const year = String(now.getFullYear()).slice(-2);
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const random = Math.random().toString(36).substring(2, 5).toUpperCase();
        this.bookingCounter = (this.bookingCounter + 1) % 100;
        const counter = String(this.bookingCounter).padStart(2, '0');
        return `BK-${day}${month}${year}-${hour}${minute}${seconds}-${random}${counter}`;
    }
    generateBookingReference() {
        const prefix = 'AC';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substring(2, 5).toUpperCase();
        return `${prefix}${timestamp}${random}`;
    }
    calculateAge(dateOfBirth) {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    async getBookingStats(userId) {
        return this.bookingQueryService.getBookingStats(userId);
    }
    async confirmBooking(id, userId, paymentTransactionId) {
        const booking = await this.bookingQueryService.findOne(id);
        if (booking.userId !== userId) {
            throw new common_1.BadRequestException('You can only confirm your own bookings');
        }
        if (booking.bookingStatus !== booking_entity_1.BookingStatus.PENDING) {
            throw new common_1.BadRequestException('Booking is not in pending status');
        }
        if (booking.paymentStatus !== booking_entity_1.PaymentStatus.PENDING) {
            throw new common_1.BadRequestException('Payment is not in pending status');
        }
        const updatedBooking = await this.bookingPaymentService.processPayment(id, paymentTransactionId, booking.paymentMethod || booking_entity_1.PaymentMethod.CARD, booking.totalPrice);
        const confirmationEmail = this.generateConfirmationEmail(updatedBooking);
        return {
            id: updatedBooking.id,
            referenceNumber: updatedBooking.referenceNumber,
            bookingStatus: updatedBooking.bookingStatus,
            paymentStatus: updatedBooking.paymentStatus,
            confirmationEmail,
        };
    }
    async findPendingPaymentBookings(userId) {
        return this.bookingQueryService.findPendingPaymentBookings(userId);
    }
    generateConfirmationEmail(booking) {
        return `
      Dear ${booking.user.first_name} ${booking.user.last_name},
      
      Your booking has been confirmed!
      
      Booking Reference: ${booking.referenceNumber}
      Flight: ${booking.deal.fixedRoute.origin} → ${booking.deal.fixedRoute.destination}
      Date: ${booking.deal.date}
      Time: ${booking.deal.time}
      Aircraft: ${booking.deal.aircraft.name}
      Company: ${booking.deal.company.companyName}
      
      Total Amount: $${booking.totalPrice}
      
      Please arrive 30 minutes before departure time.
      
      Thank you for choosing our service!
    `;
    }
    async getBookingTimeline(bookingId) {
        return this.bookingTimelineService.getBookingTimeline(bookingId);
    }
    async getBookingStatusByReference(referenceNumber) {
        return this.bookingQueryService.getBookingStatusByReference(referenceNumber);
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(1, (0, typeorm_1.InjectRepository)(charter_deal_entity_1.CharterDeal)),
    __param(2, (0, typeorm_1.InjectRepository)(passenger_entity_1.Passenger)),
    __param(3, (0, typeorm_1.InjectRepository)(booking_timeline_entity_1.BookingTimeline)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _e : Object, typeof (_f = typeof booking_payment_service_1.BookingPaymentService !== "undefined" && booking_payment_service_1.BookingPaymentService) === "function" ? _f : Object, typeof (_g = typeof booking_timeline_service_1.BookingTimelineService !== "undefined" && booking_timeline_service_1.BookingTimelineService) === "function" ? _g : Object, typeof (_h = typeof booking_query_service_1.BookingQueryService !== "undefined" && booking_query_service_1.BookingQueryService) === "function" ? _h : Object, typeof (_j = typeof payment_provider_service_1.PaymentProviderService !== "undefined" && payment_provider_service_1.PaymentProviderService) === "function" ? _j : Object])
], BookingsService);


/***/ }),

/***/ "./src/modules/bookings/dto/create-booking.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/bookings/dto/create-booking.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateBookingDto = exports.PassengerDataDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const booking_entity_1 = __webpack_require__(/*! ../../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
class PassengerDataDto {
}
exports.PassengerDataDto = PassengerDataDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PassengerDataDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PassengerDataDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], PassengerDataDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PassengerDataDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PassengerDataDto.prototype, "idPassportNumber", void 0);
class CreateBookingDto {
}
exports.CreateBookingDto = CreateBookingDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "dealId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateBookingDto.prototype, "totalPrice", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBookingDto.prototype, "onboardDining", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateBookingDto.prototype, "groundTransportation", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingDto.prototype, "specialRequirements", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBookingDto.prototype, "billingRegion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(booking_entity_1.PaymentMethod),
    __metadata("design:type", typeof (_a = typeof booking_entity_1.PaymentMethod !== "undefined" && booking_entity_1.PaymentMethod) === "function" ? _a : Object)
], CreateBookingDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        type: [PassengerDataDto],
        description: 'Additional passengers (the booking user will be automatically added as the first passenger if not already included)'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => PassengerDataDto),
    __metadata("design:type", Array)
], CreateBookingDto.prototype, "passengers", void 0);


/***/ }),

/***/ "./src/modules/bookings/services/booking-payment.service.ts":
/*!******************************************************************!*\
  !*** ./src/modules/bookings/services/booking-payment.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingPaymentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_entity_1 = __webpack_require__(/*! ../../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const booking_timeline_entity_1 = __webpack_require__(/*! ../../../common/entities/booking-timeline.entity */ "./src/common/entities/booking-timeline.entity.ts");
const wallet_transaction_entity_1 = __webpack_require__(/*! ../../../common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_entity_1 = __webpack_require__(/*! ../../../common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const payment_entity_1 = __webpack_require__(/*! ../../../common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
const user_trips_entity_1 = __webpack_require__(/*! ../../../common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
const wallet_service_1 = __webpack_require__(/*! ../../wallet/wallet.service */ "./src/modules/wallet/wallet.service.ts");
let BookingPaymentService = class BookingPaymentService {
    constructor(bookingRepository, timelineRepository, walletTransactionRepository, userRepository, paymentRepository, userTripRepository, walletService, dataSource) {
        this.bookingRepository = bookingRepository;
        this.timelineRepository = timelineRepository;
        this.walletTransactionRepository = walletTransactionRepository;
        this.userRepository = userRepository;
        this.paymentRepository = paymentRepository;
        this.userTripRepository = userTripRepository;
        this.walletService = walletService;
        this.dataSource = dataSource;
    }
    async processPayment(bookingId, paymentTransactionId, paymentMethod, amount) {
        const maxRetries = 3;
        let lastError;
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                return await this.processPaymentAttempt(bookingId, paymentTransactionId, paymentMethod, amount);
            }
            catch (error) {
                lastError = error;
                if (error.message && error.message.includes('Lock wait timeout exceeded')) {
                    if (attempt < maxRetries) {
                        const delay = Math.pow(2, attempt - 1) * 1000;
                        console.log(`Lock timeout on attempt ${attempt}, retrying in ${delay}ms...`);
                        await new Promise(resolve => setTimeout(resolve, delay));
                        continue;
                    }
                }
                throw error;
            }
        }
        throw lastError;
    }
    async processPaymentAttempt(bookingId, paymentTransactionId, paymentMethod, amount) {
        const existingBooking = await this.bookingRepository.findOne({
            where: { id: bookingId },
            relations: ['user'],
        });
        if (!existingBooking) {
            throw new common_1.BadRequestException('Booking not found');
        }
        if (existingBooking.paymentStatus === booking_entity_1.PaymentStatus.PAID) {
            throw new common_1.BadRequestException('Payment already processed');
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const booking = await queryRunner.manager.findOne(booking_entity_1.Booking, {
                where: { id: bookingId },
                relations: ['user'],
                lock: { mode: 'pessimistic_write' },
            });
            if (!booking) {
                throw new common_1.BadRequestException('Booking not found');
            }
            if (booking.paymentStatus === booking_entity_1.PaymentStatus.PAID) {
                throw new common_1.BadRequestException('Payment already processed');
            }
            booking.paymentStatus = booking_entity_1.PaymentStatus.PAID;
            booking.paymentTransactionId = paymentTransactionId;
            booking.bookingStatus = booking_entity_1.BookingStatus.CONFIRMED;
            const loyaltyPointsToEarn = Math.floor(amount * 5);
            booking.loyaltyPointsEarned = loyaltyPointsToEarn;
            await queryRunner.manager.save(booking);
            const payment = queryRunner.manager.create(payment_entity_1.Payment, {
                id: `payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                userId: booking.userId,
                companyId: booking.companyId,
                bookingId: booking.id,
                paymentMethod: this.mapPaymentMethod(paymentMethod),
                totalAmount: amount,
                platformFee: Math.floor(amount * 0.05),
                companyAmount: amount - Math.floor(amount * 0.05),
                currency: 'USD',
                transactionId: paymentTransactionId,
                paymentStatus: payment_entity_1.PaymentStatus.COMPLETED,
            });
            await queryRunner.manager.save(payment);
            const userTrip = queryRunner.manager.create(user_trips_entity_1.UserTrip, {
                id: `trip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                userId: booking.userId,
                bookingId: booking.id,
                status: user_trips_entity_1.UserTripStatus.UPCOMING,
            });
            await queryRunner.manager.save(userTrip);
            await this.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.PAYMENT_STATUS_CHANGED, {
                title: 'Payment Processed',
                description: `Payment of $${amount} processed successfully. ${loyaltyPointsToEarn} loyalty points earned.`,
                newValue: booking_entity_1.PaymentStatus.PAID,
                metadata: {
                    paymentTransactionId,
                    paymentMethod,
                    amount,
                    loyaltyPointsEarned: loyaltyPointsToEarn,
                    referenceNumber: booking.referenceNumber,
                },
            }, queryRunner);
            await this.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.BOOKING_CONFIRMED, {
                title: 'Booking Confirmed',
                description: `Booking confirmed after successful payment. Reference: ${booking.referenceNumber}`,
                metadata: {
                    paymentTransactionId,
                    referenceNumber: booking.referenceNumber,
                },
            }, queryRunner);
            await queryRunner.commitTransaction();
            if (loyaltyPointsToEarn > 0) {
                try {
                    await this.walletService.earnLoyaltyPoints(booking.userId, loyaltyPointsToEarn, `Booking ${booking.referenceNumber} - Earned ${loyaltyPointsToEarn} miles from $${amount} payment`, bookingId);
                }
                catch (walletError) {
                    console.error('Failed to process loyalty points:', walletError);
                }
            }
            return booking;
        }
        catch (error) {
            if (queryRunner.isTransactionActive) {
                await queryRunner.rollbackTransaction();
            }
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async updatePaymentStatus(bookingId, paymentStatus, paymentTransactionId) {
        const booking = await this.bookingRepository.findOne({
            where: { id: bookingId },
        });
        if (!booking) {
            throw new common_1.BadRequestException('Booking not found');
        }
        const oldPaymentStatus = booking.paymentStatus;
        booking.paymentStatus = paymentStatus;
        if (paymentTransactionId) {
            booking.paymentTransactionId = paymentTransactionId;
        }
        if (paymentStatus === booking_entity_1.PaymentStatus.PAID && booking.bookingStatus === booking_entity_1.BookingStatus.PENDING) {
            booking.bookingStatus = booking_entity_1.BookingStatus.CONFIRMED;
        }
        await this.bookingRepository.save(booking);
        await this.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.PAYMENT_STATUS_CHANGED, {
            title: 'Payment Status Updated',
            description: `Payment status changed from ${oldPaymentStatus} to ${paymentStatus}`,
            oldValue: oldPaymentStatus,
            newValue: paymentStatus,
            metadata: { paymentTransactionId },
        });
        return booking;
    }
    async processRefund(bookingId, refundAmount, refundReason) {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const booking = await queryRunner.manager.findOne(booking_entity_1.Booking, {
                where: { id: bookingId },
                relations: ['user'],
            });
            if (!booking) {
                throw new common_1.BadRequestException('Booking not found');
            }
            const refundRatio = refundAmount / booking.totalPrice;
            const loyaltyPointsToDeduct = Math.floor(booking.loyaltyPointsEarned * refundRatio);
            if (loyaltyPointsToDeduct > 0) {
                await this.walletService.createWalletTransaction(booking.userId, wallet_transaction_entity_1.WalletTransactionType.LOYALTY_ADJUSTMENT, 0, -loyaltyPointsToDeduct, `Refund for booking ${booking.referenceNumber} - Deducted ${loyaltyPointsToDeduct} miles`, bookingId, { refundAmount, refundReason });
            }
            booking.bookingStatus = booking_entity_1.BookingStatus.CANCELLED;
            booking.paymentStatus = booking_entity_1.PaymentStatus.REFUNDED;
            await queryRunner.manager.save(booking);
            await this.createTimelineEvent(bookingId, booking_timeline_entity_1.TimelineEventType.PAYMENT_STATUS_CHANGED, {
                title: 'Refund Processed',
                description: `Refund of $${refundAmount} processed. ${loyaltyPointsToDeduct} loyalty points deducted.`,
                newValue: booking_entity_1.PaymentStatus.REFUNDED,
                metadata: {
                    refundAmount,
                    refundReason,
                    loyaltyPointsDeducted: loyaltyPointsToDeduct,
                },
            }, queryRunner);
            await queryRunner.commitTransaction();
            return booking;
        }
        catch (error) {
            if (queryRunner.isTransactionActive) {
                await queryRunner.rollbackTransaction();
            }
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    generateBookingReference() {
        const prefix = 'AC';
        const timestamp = Date.now().toString().slice(-6);
        const random = Math.random().toString(36).substring(2, 5).toUpperCase();
        return `${prefix}${timestamp}${random}`;
    }
    async createTimelineEvent(bookingId, eventType, data, queryRunner) {
        const timelineEvent = queryRunner
            ? queryRunner.manager.create(booking_timeline_entity_1.BookingTimeline, {
                bookingId,
                eventType,
                title: data.title,
                description: data.description,
                oldValue: data.oldValue,
                newValue: data.newValue,
                metadata: data.metadata,
                createdAt: new Date(),
            })
            : this.timelineRepository.create({
                bookingId,
                eventType,
                title: data.title,
                description: data.description,
                oldValue: data.oldValue,
                newValue: data.newValue,
                metadata: data.metadata,
                createdAt: new Date(),
            });
        if (queryRunner) {
            await queryRunner.manager.save(timelineEvent);
        }
        else {
            await this.timelineRepository.save(timelineEvent);
        }
    }
    mapPaymentMethod(paymentMethod) {
        switch (paymentMethod.toLowerCase()) {
            case 'card':
            case 'credit_card':
            case 'debit_card':
                return payment_entity_1.PaymentMethod.CARD;
            case 'mpesa':
                return payment_entity_1.PaymentMethod.MPESA;
            case 'wallet':
                return payment_entity_1.PaymentMethod.WALLET;
            default:
                return payment_entity_1.PaymentMethod.CARD;
        }
    }
};
exports.BookingPaymentService = BookingPaymentService;
exports.BookingPaymentService = BookingPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(1, (0, typeorm_1.InjectRepository)(booking_timeline_entity_1.BookingTimeline)),
    __param(2, (0, typeorm_1.InjectRepository)(wallet_transaction_entity_1.WalletTransaction)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(4, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __param(5, (0, typeorm_1.InjectRepository)(user_trips_entity_1.UserTrip)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof wallet_service_1.WalletService !== "undefined" && wallet_service_1.WalletService) === "function" ? _g : Object, typeof (_h = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _h : Object])
], BookingPaymentService);


/***/ }),

/***/ "./src/modules/bookings/services/booking-query.service.ts":
/*!****************************************************************!*\
  !*** ./src/modules/bookings/services/booking-query.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingQueryService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_entity_1 = __webpack_require__(/*! ../../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
let BookingQueryService = class BookingQueryService {
    constructor(bookingRepository) {
        this.bookingRepository = bookingRepository;
    }
    async findAll(userId) {
        const query = this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .leftJoinAndSelect('booking.user', 'user')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('booking.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute');
        if (userId) {
            query.where('booking.userId = :userId', { userId });
        }
        return query
            .orderBy('booking.createdAt', 'DESC')
            .getMany();
    }
    async findOne(id) {
        const booking = await this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .leftJoinAndSelect('booking.user', 'user')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('booking.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute')
            .where('booking.id = :id', { id })
            .getOne();
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with ID ${id} not found`);
        }
        return booking;
    }
    async findByReference(referenceNumber) {
        const booking = await this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .leftJoinAndSelect('booking.user', 'user')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('booking.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute')
            .where('booking.referenceNumber = :referenceNumber', { referenceNumber })
            .getOne();
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with reference ${referenceNumber} not found`);
        }
        return booking;
    }
    async findByUserWithFilters(userId, filters) {
        const query = this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .leftJoinAndSelect('booking.user', 'user')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('booking.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute')
            .where('booking.userId = :userId', { userId });
        if (filters.upcoming !== undefined) {
            const now = new Date();
            if (filters.upcoming) {
                query.andWhere('deal.date >= :now', { now });
            }
            else {
                query.andWhere('deal.date < :now', { now });
            }
        }
        if (filters.status) {
            query.andWhere('booking.bookingStatus = :status', { status: filters.status });
        }
        return query
            .orderBy('deal.date', 'ASC')
            .addOrderBy('deal.time', 'ASC')
            .getMany();
    }
    async findPendingPaymentBookings(userId) {
        return this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute')
            .where('booking.userId = :userId', { userId })
            .andWhere('booking.paymentStatus = :paymentStatus', {
            paymentStatus: booking_entity_1.PaymentStatus.PENDING
        })
            .andWhere('booking.bookingStatus = :bookingStatus', {
            bookingStatus: booking_entity_1.BookingStatus.PENDING
        })
            .orderBy('booking.createdAt', 'DESC')
            .getMany();
    }
    async getBookingStatusByReference(referenceNumber) {
        const booking = await this.bookingRepository
            .createQueryBuilder('booking')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'fixedRoute')
            .leftJoinAndSelect('booking.passengers', 'passengers')
            .where('booking.referenceNumber = :referenceNumber', { referenceNumber })
            .getOne();
        if (!booking) {
            throw new common_1.NotFoundException(`Booking with reference ${referenceNumber} not found`);
        }
        return {
            referenceNumber: booking.referenceNumber,
            bookingStatus: booking.bookingStatus,
            paymentStatus: booking.paymentStatus,
            flightDate: booking.deal.date.toString(),
            flightTime: booking.deal.time.toString(),
            origin: booking.deal.fixedRoute.origin,
            destination: booking.deal.fixedRoute.destination,
            aircraftName: booking.deal.aircraft.name,
            companyName: booking.deal.company.companyName,
            totalPrice: booking.totalPrice.toString(),
            passengerCount: booking.passengers.length,
            createdAt: booking.createdAt.toISOString(),
            updatedAt: booking.updatedAt.toISOString(),
        };
    }
    async getBookingStats(userId) {
        const query = this.bookingRepository.createQueryBuilder('booking');
        if (userId) {
            query.where('booking.userId = :userId', { userId });
        }
        const [total, pending, confirmed, cancelled, completed] = await Promise.all([
            query.getCount(),
            query.andWhere('booking.bookingStatus = :status', { status: booking_entity_1.BookingStatus.PENDING }).getCount(),
            query.andWhere('booking.bookingStatus = :status', { status: booking_entity_1.BookingStatus.CONFIRMED }).getCount(),
            query.andWhere('booking.bookingStatus = :status', { status: booking_entity_1.BookingStatus.CANCELLED }).getCount(),
            query.andWhere('booking.bookingStatus = :status', { status: booking_entity_1.BookingStatus.COMPLETED }).getCount(),
        ]);
        return { total, pending, confirmed, cancelled, completed };
    }
    async hasExistingBooking(userId, dealId) {
        const existing = await this.bookingRepository.findOne({
            where: {
                userId,
                dealId,
                bookingStatus: (0, typeorm_2.In)([booking_entity_1.BookingStatus.PENDING, booking_entity_1.BookingStatus.CONFIRMED]),
            },
        });
        return !!existing;
    }
    async getBookingSummary(bookingId) {
        const booking = await this.findOne(bookingId);
        return {
            id: booking.id,
            referenceNumber: booking.referenceNumber,
            totalPrice: booking.totalPrice,
            loyaltyPointsEarned: booking.loyaltyPointsEarned,
            loyaltyPointsRedeemed: booking.loyaltyPointsRedeemed,
            walletAmountUsed: booking.walletAmountUsed,
            netAmount: booking.totalPrice - booking.walletAmountUsed,
            company: booking.company,
            deal: booking.deal,
            passengers: booking.passengers,
            status: booking.bookingStatus,
            paymentStatus: booking.paymentStatus,
        };
    }
};
exports.BookingQueryService = BookingQueryService;
exports.BookingQueryService = BookingQueryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], BookingQueryService);


/***/ }),

/***/ "./src/modules/bookings/services/booking-timeline.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/bookings/services/booking-timeline.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookingTimelineService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const booking_timeline_entity_1 = __webpack_require__(/*! ../../../common/entities/booking-timeline.entity */ "./src/common/entities/booking-timeline.entity.ts");
let BookingTimelineService = class BookingTimelineService {
    constructor(timelineRepository) {
        this.timelineRepository = timelineRepository;
    }
    async createTimelineEvent(bookingId, eventType, data) {
        const timelineEvent = this.timelineRepository.create({
            bookingId,
            eventType,
            title: data.title,
            description: data.description,
            oldValue: data.oldValue,
            newValue: data.newValue,
            metadata: data.metadata,
        });
        return await this.timelineRepository.save(timelineEvent);
    }
    async getBookingTimeline(bookingId) {
        return this.timelineRepository
            .createQueryBuilder('timeline')
            .where('timeline.bookingId = :bookingId', { bookingId })
            .orderBy('timeline.createdAt', 'DESC')
            .getMany();
    }
    async getTimelineEventsByType(bookingId, eventType) {
        return this.timelineRepository
            .createQueryBuilder('timeline')
            .where('timeline.bookingId = :bookingId', { bookingId })
            .andWhere('timeline.eventType = :eventType', { eventType })
            .orderBy('timeline.createdAt', 'DESC')
            .getMany();
    }
    async getRecentTimelineEvents(limit = 10) {
        return this.timelineRepository
            .createQueryBuilder('timeline')
            .orderBy('timeline.createdAt', 'DESC')
            .limit(limit)
            .getMany();
    }
    async deleteTimelineEvents(bookingId) {
        await this.timelineRepository
            .createQueryBuilder()
            .delete()
            .where('bookingId = :bookingId', { bookingId })
            .execute();
    }
};
exports.BookingTimelineService = BookingTimelineService;
exports.BookingTimelineService = BookingTimelineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(booking_timeline_entity_1.BookingTimeline)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], BookingTimelineService);


/***/ }),

/***/ "./src/modules/charter-deals/charter-deals.controller.ts":
/*!***************************************************************!*\
  !*** ./src/modules/charter-deals/charter-deals.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharterDealsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const charter_deals_service_1 = __webpack_require__(/*! ./charter-deals.service */ "./src/modules/charter-deals/charter-deals.service.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
let CharterDealsController = class CharterDealsController {
    constructor(charterDealsService) {
        this.charterDealsService = charterDealsService;
    }
    async getCharterDeals(page = '1', limit = '10', search, dealType, fromDate, toDate) {
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const fromDateObj = fromDate ? new Date(fromDate) : undefined;
        const toDateObj = toDate ? new Date(toDate) : undefined;
        const result = await this.charterDealsService.findAllWithRelations(pageNum, limitNum, search, dealType, fromDateObj, toDateObj);
        return {
            success: true,
            data: result.deals,
            total: result.total,
            page: pageNum,
            limit: limitNum,
        };
    }
    async getCharterDealById(id) {
        const dealId = parseInt(id, 10);
        const deal = await this.charterDealsService.findById(dealId);
        if (!deal) {
            return {
                success: false,
                message: 'Deal not found',
            };
        }
        return {
            success: true,
            data: deal,
        };
    }
    async getCharterDealsByCompany(companyId, page = '1', limit = '10') {
        const companyIdNum = parseInt(companyId, 10);
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const result = await this.charterDealsService.findByCompany(companyIdNum, pageNum, limitNum);
        return {
            success: true,
            data: result.deals,
            total: result.total,
            page: pageNum,
            limit: limitNum,
        };
    }
    async getCharterDealsByRoute(origin, destination, page = '1', limit = '10', fromDate, toDate) {
        const pageNum = parseInt(page, 10);
        const limitNum = parseInt(limit, 10);
        const fromDateObj = fromDate ? new Date(fromDate) : undefined;
        const toDateObj = toDate ? new Date(toDate) : undefined;
        const result = await this.charterDealsService.findByRoute(origin, destination, pageNum, limitNum, fromDateObj, toDateObj);
        return {
            success: true,
            data: result.deals,
            total: result.total,
            page: pageNum,
            limit: limitNum,
        };
    }
};
exports.CharterDealsController = CharterDealsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get all charter deals with filters' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns paginated charter deals with related data',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            companyId: { type: 'number' },
                            fixedRouteId: { type: 'number' },
                            aircraftId: { type: 'number' },
                            date: { type: 'string', format: 'date' },
                            time: { type: 'string' },
                            pricePerSeat: { type: 'number', nullable: true },
                            discountPerSeat: { type: 'number' },
                            pricePerHour: { type: 'number', nullable: true },
                            availableSeats: { type: 'number' },
                            dealType: { type: 'string' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' },
                            companyName: { type: 'string' },
                            companyLogo: { type: 'string', nullable: true },
                            origin: { type: 'string' },
                            destination: { type: 'string' },
                            routeImageUrl: { type: 'string' },
                            aircraftName: { type: 'string' },
                            aircraftType: { type: 'string' },
                            aircraftCapacity: { type: 'number' },
                            aircraftImages: { type: 'array', items: { type: 'string' } },
                            routeImages: { type: 'array', items: { type: 'string' } },
                            duration: { type: 'string' },
                            amenities: { type: 'array', items: { type: 'object' } },
                        },
                    },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' }),
    (0, swagger_1.ApiQuery)({ name: 'search', required: false, type: String, description: 'Search query for company, route, or aircraft' }),
    (0, swagger_1.ApiQuery)({ name: 'dealType', required: false, enum: ['privateCharter', 'jetSharing'], description: 'Filter by deal type' }),
    (0, swagger_1.ApiQuery)({ name: 'fromDate', required: false, type: String, description: 'Filter deals from this date (YYYY-MM-DD)' }),
    (0, swagger_1.ApiQuery)({ name: 'toDate', required: false, type: String, description: 'Filter deals to this date (YYYY-MM-DD)' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('dealType')),
    __param(4, (0, common_1.Query)('fromDate')),
    __param(5, (0, common_1.Query)('toDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], CharterDealsController.prototype, "getCharterDeals", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get charter deal by ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns charter deal details',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        companyId: { type: 'number' },
                        fixedRouteId: { type: 'number' },
                        aircraftId: { type: 'number' },
                        date: { type: 'string', format: 'date' },
                        time: { type: 'string' },
                        pricePerSeat: { type: 'number', nullable: true },
                        discountPerSeat: { type: 'number' },
                        pricePerHour: { type: 'number', nullable: true },
                        discountPerHour: { type: 'number' },
                        availableSeats: { type: 'number' },
                        dealType: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                        companyName: { type: 'string' },
                        companyLogo: { type: 'string', nullable: true },
                        origin: { type: 'string' },
                        destination: { type: 'string' },
                        routeImageUrl: { type: 'string' },
                        aircraftName: { type: 'string' },
                        aircraftType: { type: 'string' },
                        aircraftCapacity: { type: 'number' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Deal not found' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Charter deal ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CharterDealsController.prototype, "getCharterDealById", null);
__decorate([
    (0, common_1.Get)('company/:companyId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get charter deals by company ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns paginated charter deals for a specific company',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            companyId: { type: 'number' },
                            fixedRouteId: { type: 'number' },
                            aircraftId: { type: 'number' },
                            date: { type: 'string', format: 'date' },
                            time: { type: 'string' },
                            pricePerSeat: { type: 'number', nullable: true },
                            discountPerSeat: { type: 'number' },
                            pricePerHour: { type: 'number', nullable: true },
                            discountPerHour: { type: 'number' },
                            availableSeats: { type: 'number' },
                            dealType: { type: 'string' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' },
                            companyName: { type: 'string' },
                            companyLogo: { type: 'string', nullable: true },
                            origin: { type: 'string' },
                            destination: { type: 'string' },
                            routeImageUrl: { type: 'string' },
                            aircraftName: { type: 'string' },
                            aircraftType: { type: 'string' },
                            aircraftCapacity: { type: 'number' },
                        },
                    },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiParam)({ name: 'companyId', type: Number, description: 'Company ID' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' }),
    __param(0, (0, common_1.Param)('companyId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], CharterDealsController.prototype, "getCharterDealsByCompany", null);
__decorate([
    (0, common_1.Get)('route/:origin/:destination'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Get charter deals by route' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns paginated charter deals for a specific route',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            companyId: { type: 'number' },
                            fixedRouteId: { type: 'number' },
                            aircraftId: { type: 'number' },
                            date: { type: 'string', format: 'date' },
                            time: { type: 'string' },
                            pricePerSeat: { type: 'number', nullable: true },
                            discountPerSeat: { type: 'number' },
                            priceFullCharter: { type: 'number', nullable: true },
                            availableSeats: { type: 'number' },
                            dealType: { type: 'string' },
                            createdAt: { type: 'string', format: 'date-time' },
                            updatedAt: { type: 'string', format: 'date-time' },
                            companyName: { type: 'string' },
                            companyLogo: { type: 'string', nullable: true },
                            origin: { type: 'string' },
                            destination: { type: 'string' },
                            routeImageUrl: { type: 'string' },
                            aircraftName: { type: 'string' },
                            aircraftType: { type: 'string' },
                            aircraftCapacity: { type: 'number' },
                        },
                    },
                },
                total: { type: 'number' },
                page: { type: 'number' },
                limit: { type: 'number' },
            },
        },
    }),
    (0, swagger_1.ApiParam)({ name: 'origin', type: String, description: 'Origin city' }),
    (0, swagger_1.ApiParam)({ name: 'destination', type: String, description: 'Destination city' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Page number (default: 1)' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Items per page (default: 10)' }),
    (0, swagger_1.ApiQuery)({ name: 'fromDate', required: false, type: String, description: 'Filter deals from this date (YYYY-MM-DD)' }),
    (0, swagger_1.ApiQuery)({ name: 'toDate', required: false, type: String, description: 'Filter deals to this date (YYYY-MM-DD)' }),
    __param(0, (0, common_1.Param)('origin')),
    __param(1, (0, common_1.Param)('destination')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('limit')),
    __param(4, (0, common_1.Query)('fromDate')),
    __param(5, (0, common_1.Query)('toDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], CharterDealsController.prototype, "getCharterDealsByRoute", null);
exports.CharterDealsController = CharterDealsController = __decorate([
    (0, swagger_1.ApiTags)('Charter Deals'),
    (0, common_1.Controller)('charter-deals'),
    __metadata("design:paramtypes", [typeof (_a = typeof charter_deals_service_1.CharterDealsService !== "undefined" && charter_deals_service_1.CharterDealsService) === "function" ? _a : Object])
], CharterDealsController);


/***/ }),

/***/ "./src/modules/charter-deals/charter-deals.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charter-deals/charter-deals.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharterDealsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const charter_deals_controller_1 = __webpack_require__(/*! ./charter-deals.controller */ "./src/modules/charter-deals/charter-deals.controller.ts");
const charter_deals_service_1 = __webpack_require__(/*! ./charter-deals.service */ "./src/modules/charter-deals/charter-deals.service.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ../../common/entities/charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ../../common/entities/fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ../../common/entities/aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
let CharterDealsModule = class CharterDealsModule {
};
exports.CharterDealsModule = CharterDealsModule;
exports.CharterDealsModule = CharterDealsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                charter_deal_entity_1.CharterDeal,
                charters_company_entity_1.ChartersCompany,
                fixed_route_entity_1.FixedRoute,
                aircraft_entity_1.Aircraft,
            ]),
        ],
        controllers: [charter_deals_controller_1.CharterDealsController],
        providers: [charter_deals_service_1.CharterDealsService],
        exports: [charter_deals_service_1.CharterDealsService],
    })
], CharterDealsModule);


/***/ }),

/***/ "./src/modules/charter-deals/charter-deals.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/charter-deals/charter-deals.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CharterDealsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ../../common/entities/charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ../../common/entities/fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ../../common/entities/aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
let CharterDealsService = class CharterDealsService {
    constructor(charterDealRepository, companyRepository, routeRepository, aircraftRepository) {
        this.charterDealRepository = charterDealRepository;
        this.companyRepository = companyRepository;
        this.routeRepository = routeRepository;
        this.aircraftRepository = aircraftRepository;
    }
    async findAllWithRelations(page = 1, limit = 10, searchQuery, dealType, fromDate, toDate) {
        const offset = (page - 1) * limit;
        let query = this.charterDealRepository
            .createQueryBuilder('deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
            .where('company.status = :status', { status: 'active' })
            .andWhere('aircraft.isAvailable = :isAvailable', { isAvailable: true })
            .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' });
        if (searchQuery) {
            query = query.andWhere('(company.companyName LIKE :search OR route.origin LIKE :search OR route.destination LIKE :search OR aircraft.name LIKE :search)', { search: `%${searchQuery}%` });
        }
        if (dealType) {
            query = query.andWhere('deal.dealType = :dealType', { dealType });
        }
        if (fromDate) {
            query = query.andWhere('deal.date >= :fromDate', { fromDate });
        }
        if (toDate) {
            query = query.andWhere('deal.date <= :toDate', { toDate });
        }
        const total = await query.getCount();
        const deals = await query
            .select([
            'deal.id',
            'deal.companyId',
            'deal.fixedRouteId',
            'deal.aircraftId',
            'deal.date',
            'deal.time',
            'deal.pricePerSeat',
            'deal.discountPerSeat',
            'deal.pricePerHour',
            'deal.discountPerHour',
            'deal.availableSeats',
            'deal.dealType',
            'deal.createdAt',
            'deal.updatedAt',
            'company.companyName',
            'company.logo',
            'route.origin',
            'route.destination',
            'route.imageUrl',
            'aircraft.name',
            'aircraft.type',
            'aircraft.capacity',
            'GROUP_CONCAT(images.url) as aircraftImages',
        ])
            .groupBy('deal.id')
            .orderBy('deal.date', 'ASC')
            .addOrderBy('deal.time', 'ASC')
            .offset(offset)
            .limit(limit)
            .getRawMany();
        const transformedDeals = deals.map(deal => ({
            id: deal.deal_id,
            companyId: deal.deal_companyId,
            fixedRouteId: deal.deal_fixedRouteId,
            aircraftId: deal.deal_aircraftId,
            date: deal.deal_date,
            time: deal.deal_time,
            pricePerSeat: deal.deal_pricePerSeat,
            discountPerSeat: deal.deal_discountPerSeat,
            pricePerHour: deal.deal_pricePerHour,
            availableSeats: deal.deal_availableSeats,
            dealType: deal.deal_dealType,
            createdAt: deal.deal_createdAt,
            updatedAt: deal.deal_updatedAt,
            companyName: deal.company_companyName,
            companyLogo: deal.company_logo,
            origin: deal.route_origin,
            destination: deal.route_destination,
            routeImageUrl: deal.route_imageUrl,
            aircraftName: deal.aircraft_name,
            aircraftType: deal.aircraft_type,
            aircraftCapacity: deal.aircraft_capacity,
            discountPerHour: deal.deal_discountPerHour || 0,
            aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
            routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
            duration: this.calculateDuration(deal.route_origin, deal.route_destination),
            amenities: this.getAircraftAmenities(deal.aircraft_type),
        }));
        return { deals: transformedDeals, total };
    }
    async findById(id) {
        const deal = await this.charterDealRepository
            .createQueryBuilder('deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
            .where('deal.id = :id', { id })
            .select([
            'deal.id',
            'deal.companyId',
            'deal.fixedRouteId',
            'deal.aircraftId',
            'deal.date',
            'deal.time',
            'deal.pricePerSeat',
            'deal.discountPerSeat',
            'deal.pricePerHour',
            'deal.discountPerHour',
            'deal.availableSeats',
            'deal.dealType',
            'deal.createdAt',
            'deal.updatedAt',
            'company.companyName',
            'company.logo',
            'route.origin',
            'route.destination',
            'route.imageUrl',
            'aircraft.name',
            'aircraft.type',
            'aircraft.capacity',
            'GROUP_CONCAT(images.url) as aircraftImages',
        ])
            .groupBy('deal.id')
            .getRawOne();
        if (!deal)
            return null;
        return {
            id: deal.deal_id,
            companyId: deal.deal_companyId,
            fixedRouteId: deal.deal_fixedRouteId,
            aircraftId: deal.deal_aircraftId,
            date: deal.deal_date,
            time: deal.deal_time,
            pricePerSeat: deal.deal_pricePerSeat,
            discountPerSeat: deal.deal_discountPerSeat,
            pricePerHour: deal.deal_pricePerHour,
            discountPerHour: deal.deal_discountPerHour || 0,
            availableSeats: deal.deal_availableSeats,
            dealType: deal.deal_dealType,
            createdAt: deal.deal_createdAt,
            updatedAt: deal.deal_updatedAt,
            companyName: deal.company_companyName,
            companyLogo: deal.company_logo,
            origin: deal.route_origin,
            destination: deal.route_destination,
            routeImageUrl: deal.route_imageUrl,
            aircraftName: deal.aircraft_name,
            aircraftType: deal.aircraft_type,
            aircraftCapacity: deal.aircraft_capacity,
            aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
            routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
            duration: this.calculateDuration(deal.route_origin, deal.route_destination),
            amenities: this.getAircraftAmenities(deal.aircraft_type),
        };
    }
    async findByCompany(companyId, page = 1, limit = 10) {
        const offset = (page - 1) * limit;
        let query = this.charterDealRepository
            .createQueryBuilder('deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
            .where('deal.companyId = :companyId', { companyId });
        const total = await query.getCount();
        const deals = await query
            .select([
            'deal.id',
            'deal.companyId',
            'deal.fixedRouteId',
            'deal.aircraftId',
            'deal.date',
            'deal.time',
            'deal.pricePerSeat',
            'deal.discountPerSeat',
            'deal.pricePerHour',
            'deal.discountPerHour',
            'deal.availableSeats',
            'deal.dealType',
            'deal.createdAt',
            'deal.updatedAt',
            'company.companyName',
            'company.logo',
            'route.origin',
            'route.destination',
            'route.imageUrl',
            'aircraft.name',
            'aircraft.type',
            'aircraft.capacity',
            'GROUP_CONCAT(images.url) as aircraftImages',
        ])
            .groupBy('deal.id')
            .orderBy('deal.date', 'ASC')
            .addOrderBy('deal.time', 'ASC')
            .offset(offset)
            .limit(limit)
            .getRawMany();
        const transformedDeals = deals.map(deal => ({
            id: deal.deal_id,
            companyId: deal.deal_companyId,
            fixedRouteId: deal.deal_fixedRouteId,
            aircraftId: deal.deal_aircraftId,
            date: deal.deal_date,
            time: deal.deal_time,
            pricePerSeat: deal.deal_pricePerSeat,
            discountPerSeat: deal.deal_discountPerSeat,
            pricePerHour: deal.deal_pricePerHour,
            discountPerHour: deal.deal_discountPerHour || 0,
            availableSeats: deal.deal_availableSeats,
            dealType: deal.deal_dealType,
            createdAt: deal.deal_createdAt,
            updatedAt: deal.deal_updatedAt,
            companyName: deal.company_companyName,
            companyLogo: deal.company_logo,
            origin: deal.route_origin,
            destination: deal.route_destination,
            routeImageUrl: deal.route_imageUrl,
            aircraftName: deal.aircraft_name,
            aircraftType: deal.aircraft_type,
            aircraftCapacity: deal.aircraft_capacity,
            aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
            routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
            duration: this.calculateDuration(deal.route_origin, deal.route_destination),
            amenities: this.getAircraftAmenities(deal.aircraft_type),
        }));
        return { deals: transformedDeals, total };
    }
    async findByRoute(origin, destination, page = 1, limit = 10, fromDate, toDate) {
        const offset = (page - 1) * limit;
        let query = this.charterDealRepository
            .createQueryBuilder('deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoin('aircraft_images', 'images', 'images.aircraftId = aircraft.id')
            .where('company.status = :status', { status: 'active' })
            .andWhere('aircraft.isAvailable = :isAvailable', { isAvailable: true })
            .andWhere('aircraft.maintenanceStatus = :maintenanceStatus', { maintenanceStatus: 'operational' })
            .andWhere('route.origin = :origin', { origin })
            .andWhere('route.destination = :destination', { destination });
        if (fromDate) {
            query = query.andWhere('deal.date >= :fromDate', { fromDate });
        }
        if (toDate) {
            query = query.andWhere('deal.date <= :toDate', { toDate });
        }
        const total = await query.getCount();
        const deals = await query
            .select([
            'deal.id',
            'deal.companyId',
            'deal.fixedRouteId',
            'deal.aircraftId',
            'deal.date',
            'deal.time',
            'deal.pricePerSeat',
            'deal.discountPerSeat',
            'deal.pricePerHour',
            'deal.discountPerHour',
            'deal.availableSeats',
            'deal.dealType',
            'deal.createdAt',
            'deal.updatedAt',
            'company.companyName',
            'company.logo',
            'route.origin',
            'route.destination',
            'route.imageUrl',
            'aircraft.name',
            'aircraft.type',
            'aircraft.capacity',
            'GROUP_CONCAT(images.url) as aircraftImages',
        ])
            .groupBy('deal.id')
            .orderBy('deal.date', 'ASC')
            .addOrderBy('deal.time', 'ASC')
            .offset(offset)
            .limit(limit)
            .getRawMany();
        const transformedDeals = deals.map(deal => ({
            id: deal.deal_id,
            companyId: deal.deal_companyId,
            fixedRouteId: deal.deal_fixedRouteId,
            aircraftId: deal.deal_aircraftId,
            date: deal.deal_date,
            time: deal.deal_time,
            pricePerSeat: deal.deal_pricePerSeat,
            discountPerSeat: deal.deal_discountPerSeat,
            pricePerHour: deal.deal_pricePerHour,
            discountPerHour: deal.deal_discountPerHour || 0,
            availableSeats: deal.deal_availableSeats,
            dealType: deal.deal_dealType,
            createdAt: deal.deal_createdAt,
            updatedAt: deal.deal_updatedAt,
            companyName: deal.company_companyName,
            companyLogo: deal.company_logo,
            origin: deal.route_origin,
            destination: deal.route_destination,
            routeImageUrl: deal.route_imageUrl,
            aircraftName: deal.aircraft_name,
            aircraftType: deal.aircraft_type,
            aircraftCapacity: deal.aircraft_capacity,
            aircraftImages: deal.aircraftImages ? deal.aircraftImages.split(',') : [],
            routeImages: deal.route_imageUrl ? [deal.route_imageUrl] : [],
            duration: this.calculateDuration(deal.route_origin, deal.route_destination),
            amenities: this.getAircraftAmenities(deal.aircraft_type),
        }));
        return { deals: transformedDeals, total };
    }
    calculateDuration(origin, destination) {
        if (!origin || !destination)
            return '2h 30m';
        const route = `${origin}-${destination}`;
        switch (route) {
            case 'Nairobi-Mombasa':
            case 'Mombasa-Nairobi':
                return '1h 15m';
            case 'Nairobi-Kisumu':
            case 'Kisumu-Nairobi':
                return '1h 5m';
            case 'Nairobi-Kilifi':
            case 'Kilifi-Nairobi':
                return '1h 25m';
            default:
                return '2h 30m';
        }
    }
    getAircraftAmenities(aircraftType) {
        const defaultAmenities = [
            { icon: 'wifi', name: 'Wi-Fi' },
            { icon: 'ac_unit', name: 'Climate Control' },
            { icon: 'airline_seat_recline_normal', name: 'Reclining Seats' },
            { icon: 'luggage', name: 'Baggage Space' },
        ];
        if (!aircraftType)
            return defaultAmenities;
        switch (aircraftType.toLowerCase()) {
            case 'jet':
                return [
                    ...defaultAmenities,
                    { icon: 'tv', name: 'Entertainment' },
                    { icon: 'restaurant', name: 'Catering' },
                    { icon: 'airline_seat_flat', name: 'Lie-flat Seats' },
                ];
            case 'helicopter':
                return [
                    { icon: 'ac_unit', name: 'Climate Control' },
                    { icon: 'headset_mic', name: 'Communication' },
                    { icon: 'luggage', name: 'Baggage Space' },
                ];
            case 'fixedwing':
                return [
                    ...defaultAmenities,
                    { icon: 'tv', name: 'Entertainment' },
                ];
            default:
                return defaultAmenities;
        }
    }
};
exports.CharterDealsService = CharterDealsService;
exports.CharterDealsService = CharterDealsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(charter_deal_entity_1.CharterDeal)),
    __param(1, (0, typeorm_1.InjectRepository)(charters_company_entity_1.ChartersCompany)),
    __param(2, (0, typeorm_1.InjectRepository)(fixed_route_entity_1.FixedRoute)),
    __param(3, (0, typeorm_1.InjectRepository)(aircraft_entity_1.Aircraft)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object])
], CharterDealsService);


/***/ }),

/***/ "./src/modules/passengers/dto/create-passenger.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/passengers/dto/create-passenger.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePassengerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreatePassengerDto {
}
exports.CreatePassengerDto = CreatePassengerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Booking ID this passenger belongs to',
        example: 'booking_1752533042834_nsyj4iqyf',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePassengerDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger first name',
        example: 'John',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreatePassengerDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger last name',
        example: 'Doe',
        minLength: 2,
        maxLength: 100,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], CreatePassengerDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger age',
        example: 25,
        minimum: 0,
        maximum: 120,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], CreatePassengerDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger nationality',
        example: 'United States',
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreatePassengerDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID or Passport number',
        example: 'A12345678',
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], CreatePassengerDto.prototype, "idPassportNumber", void 0);


/***/ }),

/***/ "./src/modules/passengers/dto/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/passengers/dto/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePassengerDto = exports.CreatePassengerDto = void 0;
var create_passenger_dto_1 = __webpack_require__(/*! ./create-passenger.dto */ "./src/modules/passengers/dto/create-passenger.dto.ts");
Object.defineProperty(exports, "CreatePassengerDto", ({ enumerable: true, get: function () { return create_passenger_dto_1.CreatePassengerDto; } }));
var update_passenger_dto_1 = __webpack_require__(/*! ./update-passenger.dto */ "./src/modules/passengers/dto/update-passenger.dto.ts");
Object.defineProperty(exports, "UpdatePassengerDto", ({ enumerable: true, get: function () { return update_passenger_dto_1.UpdatePassengerDto; } }));


/***/ }),

/***/ "./src/modules/passengers/dto/update-passenger.dto.ts":
/*!************************************************************!*\
  !*** ./src/modules/passengers/dto/update-passenger.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePassengerDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdatePassengerDto {
}
exports.UpdatePassengerDto = UpdatePassengerDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger first name',
        example: 'John',
        minLength: 2,
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], UpdatePassengerDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger last name',
        example: 'Doe',
        minLength: 2,
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100),
    __metadata("design:type", String)
], UpdatePassengerDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger age',
        example: 25,
        minimum: 0,
        maximum: 120,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(120),
    __metadata("design:type", Number)
], UpdatePassengerDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Passenger nationality',
        example: 'United States',
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], UpdatePassengerDto.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID or Passport number',
        example: 'A12345678',
        maxLength: 100,
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], UpdatePassengerDto.prototype, "idPassportNumber", void 0);


/***/ }),

/***/ "./src/modules/passengers/passengers.controller.ts":
/*!*********************************************************!*\
  !*** ./src/modules/passengers/passengers.controller.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PassengersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const passengers_service_1 = __webpack_require__(/*! ./passengers.service */ "./src/modules/passengers/passengers.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/modules/passengers/dto/index.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
let PassengersController = class PassengersController {
    constructor(passengersService) {
        this.passengersService = passengersService;
    }
    async create(createPassengerDto) {
        const passenger = await this.passengersService.create(createPassengerDto);
        return {
            success: true,
            message: 'Passenger created successfully',
            data: passenger,
        };
    }
    async findAll() {
        const passengers = await this.passengersService.findAll();
        return {
            success: true,
            message: 'Passengers retrieved successfully',
            data: passengers,
        };
    }
    async findOne(id) {
        const passenger = await this.passengersService.findOne(+id);
        return {
            success: true,
            message: 'Passenger retrieved successfully',
            data: passenger,
        };
    }
    async findByBookingId(bookingId) {
        const passengers = await this.passengersService.findByBookingId(bookingId);
        return {
            success: true,
            message: 'Passengers retrieved successfully',
            data: passengers,
            count: passengers.length,
        };
    }
    async update(id, updatePassengerDto) {
        const passenger = await this.passengersService.update(+id, updatePassengerDto);
        return {
            success: true,
            message: 'Passenger updated successfully',
            data: passenger,
        };
    }
    async remove(id) {
        await this.passengersService.remove(+id);
    }
    async removeByBookingId(bookingId) {
        await this.passengersService.removeByBookingId(bookingId);
    }
};
exports.PassengersController = PassengersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new passenger' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Passenger created successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        bookingId: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        age: { type: 'number', nullable: true },
                        nationality: { type: 'string', nullable: true },
                        idPassportNumber: { type: 'string', nullable: true },
                        createdAt: { type: 'string', format: 'date-time' },
                        fullName: { type: 'string' },
                        displayName: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreatePassengerDto !== "undefined" && dto_1.CreatePassengerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all passengers' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Passengers retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            bookingId: { type: 'string' },
                            firstName: { type: 'string' },
                            lastName: { type: 'string' },
                            age: { type: 'number', nullable: true },
                            nationality: { type: 'string', nullable: true },
                            idPassportNumber: { type: 'string', nullable: true },
                            createdAt: { type: 'string', format: 'date-time' },
                            fullName: { type: 'string' },
                            displayName: { type: 'string' },
                        },
                    },
                },
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get passenger by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Passenger ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Passenger retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        bookingId: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        age: { type: 'number', nullable: true },
                        nationality: { type: 'string', nullable: true },
                        idPassportNumber: { type: 'string', nullable: true },
                        createdAt: { type: 'string', format: 'date-time' },
                        fullName: { type: 'string' },
                        displayName: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Passenger not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('booking/:bookingId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get passengers by booking ID' }),
    (0, swagger_1.ApiParam)({ name: 'bookingId', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Passengers retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            bookingId: { type: 'string' },
                            firstName: { type: 'string' },
                            lastName: { type: 'string' },
                            age: { type: 'number', nullable: true },
                            nationality: { type: 'string', nullable: true },
                            idPassportNumber: { type: 'string', nullable: true },
                            createdAt: { type: 'string', format: 'date-time' },
                            fullName: { type: 'string' },
                            displayName: { type: 'string' },
                        },
                    },
                },
                count: { type: 'number' },
            },
        },
    }),
    __param(0, (0, common_1.Param)('bookingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "findByBookingId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update passenger by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Passenger ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Passenger updated successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        id: { type: 'number' },
                        bookingId: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        age: { type: 'number', nullable: true },
                        nationality: { type: 'string', nullable: true },
                        idPassportNumber: { type: 'string', nullable: true },
                        createdAt: { type: 'string', format: 'date-time' },
                        fullName: { type: 'string' },
                        displayName: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Passenger not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof dto_1.UpdatePassengerDto !== "undefined" && dto_1.UpdatePassengerDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete passenger by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'Passenger ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Passenger deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Passenger not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "remove", null);
__decorate([
    (0, common_1.Delete)('booking/:bookingId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete all passengers for a booking' }),
    (0, swagger_1.ApiParam)({ name: 'bookingId', type: String, description: 'Booking ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Passengers deleted successfully' }),
    __param(0, (0, common_1.Param)('bookingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassengersController.prototype, "removeByBookingId", null);
exports.PassengersController = PassengersController = __decorate([
    (0, swagger_1.ApiTags)('Passengers'),
    (0, common_1.Controller)('passengers'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof passengers_service_1.PassengersService !== "undefined" && passengers_service_1.PassengersService) === "function" ? _a : Object])
], PassengersController);


/***/ }),

/***/ "./src/modules/passengers/passengers.module.ts":
/*!*****************************************************!*\
  !*** ./src/modules/passengers/passengers.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PassengersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const passengers_service_1 = __webpack_require__(/*! ./passengers.service */ "./src/modules/passengers/passengers.service.ts");
const passengers_controller_1 = __webpack_require__(/*! ./passengers.controller */ "./src/modules/passengers/passengers.controller.ts");
const passenger_entity_1 = __webpack_require__(/*! ../../common/entities/passenger.entity */ "./src/common/entities/passenger.entity.ts");
let PassengersModule = class PassengersModule {
};
exports.PassengersModule = PassengersModule;
exports.PassengersModule = PassengersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([passenger_entity_1.Passenger])],
        controllers: [passengers_controller_1.PassengersController],
        providers: [passengers_service_1.PassengersService],
        exports: [passengers_service_1.PassengersService],
    })
], PassengersModule);


/***/ }),

/***/ "./src/modules/passengers/passengers.service.ts":
/*!******************************************************!*\
  !*** ./src/modules/passengers/passengers.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PassengersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const passenger_entity_1 = __webpack_require__(/*! ../../common/entities/passenger.entity */ "./src/common/entities/passenger.entity.ts");
let PassengersService = class PassengersService {
    constructor(passengerRepository) {
        this.passengerRepository = passengerRepository;
    }
    async create(createPassengerDto) {
        const passenger = this.passengerRepository.create(createPassengerDto);
        return await this.passengerRepository.save(passenger);
    }
    async findAll() {
        return await this.passengerRepository.find({
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const passenger = await this.passengerRepository.findOne({
            where: { id },
        });
        if (!passenger) {
            throw new common_1.NotFoundException(`Passenger with ID ${id} not found`);
        }
        return passenger;
    }
    async findByBookingId(bookingId) {
        return await this.passengerRepository.find({
            where: { bookingId },
            order: { createdAt: 'ASC' },
        });
    }
    async update(id, updatePassengerDto) {
        const passenger = await this.findOne(id);
        Object.assign(passenger, updatePassengerDto);
        return await this.passengerRepository.save(passenger);
    }
    async remove(id) {
        const passenger = await this.findOne(id);
        await this.passengerRepository.remove(passenger);
    }
    async removeByBookingId(bookingId) {
        await this.passengerRepository.delete({ bookingId });
    }
    async countByBookingId(bookingId) {
        return await this.passengerRepository.count({
            where: { bookingId },
        });
    }
};
exports.PassengersService = PassengersService;
exports.PassengersService = PassengersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(passenger_entity_1.Passenger)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PassengersService);


/***/ }),

/***/ "./src/modules/payments/dto/create-payment.dto.ts":
/*!********************************************************!*\
  !*** ./src/modules/payments/dto/create-payment.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePaymentDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const payment_entity_1 = __webpack_require__(/*! ../../../common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
class CreatePaymentDto {
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Booking ID for the payment' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "bookingId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: payment_entity_1.PaymentMethod, description: 'Payment method used' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(payment_entity_1.PaymentMethod),
    __metadata("design:type", typeof (_a = typeof payment_entity_1.PaymentMethod !== "undefined" && payment_entity_1.PaymentMethod) === "function" ? _a : Object)
], CreatePaymentDto.prototype, "paymentMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total amount to be paid', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "totalAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Platform fee amount', minimum: 0 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "platformFee", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency code', default: 'USD' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transaction ID from payment gateway', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "transactionId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Payment gateway response data', required: false }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePaymentDto.prototype, "paymentGatewayResponse", void 0);


/***/ }),

/***/ "./src/modules/payments/dto/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/payments/dto/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./create-payment.dto */ "./src/modules/payments/dto/create-payment.dto.ts"), exports);


/***/ }),

/***/ "./src/modules/payments/interfaces/payment-provider.interface.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/payments/interfaces/payment-provider.interface.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentProviderType = void 0;
var PaymentProviderType;
(function (PaymentProviderType) {
    PaymentProviderType["STRIPE"] = "stripe";
    PaymentProviderType["MPESA"] = "mpesa";
    PaymentProviderType["PAYPAL"] = "paypal";
    PaymentProviderType["FLUTTERWAVE"] = "flutterwave";
})(PaymentProviderType || (exports.PaymentProviderType = PaymentProviderType = {}));


/***/ }),

/***/ "./src/modules/payments/payments.controller.ts":
/*!*****************************************************!*\
  !*** ./src/modules/payments/payments.controller.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const payments_service_1 = __webpack_require__(/*! ./payments.service */ "./src/modules/payments/payments.service.ts");
const payment_provider_service_1 = __webpack_require__(/*! ./services/payment-provider.service */ "./src/modules/payments/services/payment-provider.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/modules/payments/dto/index.ts");
const current_user_decorator_1 = __webpack_require__(/*! ../../common/decorators/current-user.decorator */ "./src/common/decorators/current-user.decorator.ts");
const user_entity_1 = __webpack_require__(/*! ../../common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const payment_provider_interface_1 = __webpack_require__(/*! ./interfaces/payment-provider.interface */ "./src/modules/payments/interfaces/payment-provider.interface.ts");
let PaymentsController = class PaymentsController {
    constructor(paymentsService, paymentProviderService) {
        this.paymentsService = paymentsService;
        this.paymentProviderService = paymentProviderService;
    }
    async createPaymentIntent(user, body) {
        const paymentIntent = await this.paymentProviderService.createPaymentIntent({
            amount: body.amount,
            currency: body.currency || 'USD',
            bookingId: body.bookingId,
            userId: user.id,
            description: `Payment for booking ${body.bookingId}`,
            metadata: {
                paymentMethod: body.paymentMethod,
            },
        });
        return {
            success: true,
            message: 'Payment intent created successfully',
            data: {
                paymentIntentId: paymentIntent.id,
                clientSecret: paymentIntent.clientSecret,
                status: paymentIntent.status,
                requiresAction: paymentIntent.requiresAction,
                nextAction: paymentIntent.nextAction,
            },
        };
    }
    async confirmPayment(user, body) {
        const payment = await this.paymentProviderService.confirmPayment({
            paymentIntentId: body.paymentIntentId,
            paymentMethodId: body.paymentMethodId,
        });
        return {
            success: true,
            message: 'Payment confirmed successfully',
            data: payment,
        };
    }
    async getPaymentStatus(paymentIntentId) {
        const payment = await this.paymentProviderService.getPaymentStatus(paymentIntentId);
        return {
            success: true,
            data: payment,
        };
    }
    async getPaymentProviders() {
        const providers = this.paymentProviderService.getSupportedProviders();
        const providerInfo = providers.map(type => this.paymentProviderService.getProviderInfo(type));
        return {
            success: true,
            data: {
                providers: providerInfo,
                defaultProvider: payment_provider_interface_1.PaymentProviderType.STRIPE,
            },
        };
    }
    async createRefund(paymentIntentId, body) {
        const refund = await this.paymentProviderService.createRefund(paymentIntentId, body.amount, body.reason);
        return {
            success: true,
            message: 'Refund created successfully',
            data: refund,
        };
    }
    async create(user, createPaymentDto, companyId) {
        const payment = await this.paymentsService.create(user.id, companyId, createPaymentDto);
        return {
            success: true,
            message: 'Payment created successfully',
            data: payment,
        };
    }
    async findUserPayments(user) {
        const payments = await this.paymentsService.findByUser(user.id);
        return {
            success: true,
            data: payments,
        };
    }
    async findByBooking(bookingId) {
        const payments = await this.paymentsService.findByBooking(bookingId);
        return {
            success: true,
            data: payments,
        };
    }
    async getStats(companyId) {
        const stats = await this.paymentsService.getPaymentStats(companyId);
        return {
            success: true,
            data: stats,
        };
    }
    async findOne(id) {
        const payment = await this.paymentsService.findOne(id);
        return {
            success: true,
            data: payment,
        };
    }
    async updateStatus(id, updateData) {
        const payment = await this.paymentsService.updateStatus(id, updateData.status, updateData.transactionId);
        return {
            success: true,
            message: 'Payment status updated successfully',
            data: payment,
        };
    }
    async updateGatewayResponse(id, gatewayResponse) {
        const payment = await this.paymentsService.updateGatewayResponse(id, gatewayResponse);
        return {
            success: true,
            message: 'Gateway response updated successfully',
            data: payment,
        };
    }
    async refund(id) {
        const payment = await this.paymentsService.processRefund(id);
        return {
            success: true,
            message: 'Refund processed successfully',
            data: payment,
        };
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Post)('create-intent'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a payment intent for booking' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Payment intent created successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Invalid payment data' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createPaymentIntent", null);
__decorate([
    (0, common_1.Post)('confirm'),
    (0, swagger_1.ApiOperation)({ summary: 'Confirm a payment intent' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment confirmed successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Payment confirmation failed' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _d : Object, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "confirmPayment", null);
__decorate([
    (0, common_1.Get)('status/:paymentIntentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment status' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment status retrieved successfully' }),
    __param(0, (0, common_1.Param)('paymentIntentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "getPaymentStatus", null);
__decorate([
    (0, common_1.Get)('providers'),
    (0, swagger_1.ApiOperation)({ summary: 'Get available payment providers' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment providers retrieved successfully' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "getPaymentProviders", null);
__decorate([
    (0, common_1.Post)('refund/:paymentIntentId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create a refund' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Refund created successfully' }),
    __param(0, (0, common_1.Param)('paymentIntentId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createRefund", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new payment (Legacy)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'Payment created successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Invalid payment data' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('companyId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _e : Object, typeof (_f = typeof dto_1.CreatePaymentDto !== "undefined" && dto_1.CreatePaymentDto) === "function" ? _f : Object, Number]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all payments for current user' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payments retrieved successfully' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _g : Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findUserPayments", null);
__decorate([
    (0, common_1.Get)('booking/:bookingId'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payments for a specific booking' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Booking payments retrieved successfully' }),
    __param(0, (0, common_1.Param)('bookingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findByBooking", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment statistics' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment stats retrieved successfully' }),
    __param(0, (0, common_1.Query)('companyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get payment by ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Payment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update payment status' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Payment status updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Payment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Put)(':id/gateway-response'),
    (0, swagger_1.ApiOperation)({ summary: 'Update payment gateway response' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Gateway response updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "updateGatewayResponse", null);
__decorate([
    (0, common_1.Put)(':id/refund'),
    (0, swagger_1.ApiOperation)({ summary: 'Process payment refund (Legacy)' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Refund processed successfully' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Payment cannot be refunded' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "refund", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('payments'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [typeof (_a = typeof payments_service_1.PaymentsService !== "undefined" && payments_service_1.PaymentsService) === "function" ? _a : Object, typeof (_b = typeof payment_provider_service_1.PaymentProviderService !== "undefined" && payment_provider_service_1.PaymentProviderService) === "function" ? _b : Object])
], PaymentsController);


/***/ }),

/***/ "./src/modules/payments/payments.module.ts":
/*!*************************************************!*\
  !*** ./src/modules/payments/payments.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const payments_controller_1 = __webpack_require__(/*! ./payments.controller */ "./src/modules/payments/payments.controller.ts");
const payments_service_1 = __webpack_require__(/*! ./payments.service */ "./src/modules/payments/payments.service.ts");
const payment_provider_service_1 = __webpack_require__(/*! ./services/payment-provider.service */ "./src/modules/payments/services/payment-provider.service.ts");
const stripe_provider_1 = __webpack_require__(/*! ./providers/stripe.provider */ "./src/modules/payments/providers/stripe.provider.ts");
const payment_entity_1 = __webpack_require__(/*! ../../common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
let PaymentsModule = class PaymentsModule {
};
exports.PaymentsModule = PaymentsModule;
exports.PaymentsModule = PaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([payment_entity_1.Payment]),
            config_1.ConfigModule,
        ],
        controllers: [payments_controller_1.PaymentsController],
        providers: [
            payments_service_1.PaymentsService,
            payment_provider_service_1.PaymentProviderService,
            stripe_provider_1.StripeProvider,
        ],
        exports: [
            payments_service_1.PaymentsService,
            payment_provider_service_1.PaymentProviderService,
            stripe_provider_1.StripeProvider,
        ],
    })
], PaymentsModule);


/***/ }),

/***/ "./src/modules/payments/payments.service.ts":
/*!**************************************************!*\
  !*** ./src/modules/payments/payments.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const payment_entity_1 = __webpack_require__(/*! ../../common/entities/payment.entity */ "./src/common/entities/payment.entity.ts");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async create(userId, companyId, createPaymentDto) {
        const paymentId = `payment_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const companyAmount = createPaymentDto.totalAmount - createPaymentDto.platformFee;
        if (companyAmount < 0) {
            throw new common_1.BadRequestException('Platform fee cannot exceed total amount');
        }
        const payment = this.paymentRepository.create({
            id: paymentId,
            userId,
            companyId,
            companyAmount,
            currency: createPaymentDto.currency || 'USD',
            ...createPaymentDto,
        });
        return await this.paymentRepository.save(payment);
    }
    async findAll() {
        return await this.paymentRepository.find({
            relations: ['user', 'company'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByUser(userId) {
        return await this.paymentRepository.find({
            where: { userId },
            relations: ['user', 'company'],
            order: { createdAt: 'DESC' },
        });
    }
    async findByBooking(bookingId) {
        return await this.paymentRepository.find({
            where: { bookingId },
            relations: ['user', 'company'],
            order: { createdAt: 'DESC' },
        });
    }
    async findOne(id) {
        const payment = await this.paymentRepository.findOne({
            where: { id },
            relations: ['user', 'company'],
        });
        if (!payment) {
            throw new common_1.NotFoundException(`Payment with ID ${id} not found`);
        }
        return payment;
    }
    async updateStatus(id, status, transactionId) {
        const payment = await this.findOne(id);
        payment.paymentStatus = status;
        if (transactionId) {
            payment.transactionId = transactionId;
        }
        return await this.paymentRepository.save(payment);
    }
    async updateGatewayResponse(id, gatewayResponse) {
        const payment = await this.findOne(id);
        payment.paymentGatewayResponse = gatewayResponse;
        return await this.paymentRepository.save(payment);
    }
    async processRefund(id) {
        const payment = await this.findOne(id);
        if (!payment.canBeRefunded) {
            throw new common_1.BadRequestException('Payment cannot be refunded');
        }
        payment.paymentStatus = payment_entity_1.PaymentStatus.REFUNDED;
        return await this.paymentRepository.save(payment);
    }
    async getPaymentStats(companyId) {
        const queryBuilder = this.paymentRepository.createQueryBuilder('payment');
        if (companyId) {
            queryBuilder.where('payment.companyId = :companyId', { companyId });
        }
        const [totalPayments, completedPayments, pendingPayments, failedPayments, refundedPayments, totalRevenue,] = await Promise.all([
            queryBuilder.getCount(),
            queryBuilder.clone().andWhere('payment.paymentStatus = :status', { status: payment_entity_1.PaymentStatus.COMPLETED }).getCount(),
            queryBuilder.clone().andWhere('payment.paymentStatus = :status', { status: payment_entity_1.PaymentStatus.PENDING }).getCount(),
            queryBuilder.clone().andWhere('payment.paymentStatus = :status', { status: payment_entity_1.PaymentStatus.FAILED }).getCount(),
            queryBuilder.clone().andWhere('payment.paymentStatus = :status', { status: payment_entity_1.PaymentStatus.REFUNDED }).getCount(),
            queryBuilder
                .clone()
                .select('SUM(payment.totalAmount)', 'total')
                .andWhere('payment.paymentStatus = :status', { status: payment_entity_1.PaymentStatus.COMPLETED })
                .getRawOne(),
        ]);
        return {
            totalPayments,
            completedPayments,
            pendingPayments,
            failedPayments,
            refundedPayments,
            totalRevenue: parseFloat(totalRevenue?.total || '0'),
            successRate: totalPayments > 0 ? (completedPayments / totalPayments) * 100 : 0,
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], PaymentsService);


/***/ }),

/***/ "./src/modules/payments/providers/stripe.provider.ts":
/*!***********************************************************!*\
  !*** ./src/modules/payments/providers/stripe.provider.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var StripeProvider_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StripeProvider = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const stripe_1 = __webpack_require__(/*! stripe */ "stripe");
let StripeProvider = StripeProvider_1 = class StripeProvider {
    constructor(configService) {
        this.configService = configService;
        this.logger = new common_1.Logger(StripeProvider_1.name);
        this.name = 'Stripe';
        this.supportedCurrencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];
        this.supportedPaymentMethods = [
            'card',
            'apple_pay',
            'google_pay',
            'bank_transfer',
            'us_bank_account',
        ];
        const secretKey = this.configService.get('STRIPE_SECRET_KEY');
        if (!secretKey) {
            throw new Error('STRIPE_SECRET_KEY is required');
        }
        this.stripe = new stripe_1.default(secretKey, {
            apiVersion: '2023-10-16',
        });
    }
    async createPaymentIntent(request) {
        try {
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: Math.round(request.amount * 100),
                currency: request.currency.toLowerCase(),
                metadata: {
                    bookingId: request.bookingId,
                    userId: request.userId,
                    ...request.metadata,
                },
                description: request.description,
                automatic_payment_methods: {
                    enabled: true,
                },
                payment_method_types: [
                    'card',
                    'apple_pay',
                    'google_pay',
                    'us_bank_account',
                ],
            });
            return {
                id: paymentIntent.id,
                clientSecret: paymentIntent.client_secret,
                status: paymentIntent.status,
                amount: request.amount,
                currency: request.currency,
                requiresAction: paymentIntent.status === 'requires_action',
                nextAction: paymentIntent.next_action,
            };
        }
        catch (error) {
            this.logger.error('Failed to create Stripe payment intent', error);
            throw new Error(`Payment intent creation failed: ${error.message}`);
        }
    }
    async confirmPayment(request) {
        try {
            const paymentIntent = await this.stripe.paymentIntents.retrieve(request.paymentIntentId);
            if (paymentIntent.status === 'requires_confirmation') {
                await this.stripe.paymentIntents.confirm(request.paymentIntentId, {
                    payment_method: request.paymentMethodId,
                });
            }
            const updatedPaymentIntent = await this.stripe.paymentIntents.retrieve(request.paymentIntentId);
            return {
                id: updatedPaymentIntent.id,
                status: updatedPaymentIntent.status,
                amount: updatedPaymentIntent.amount / 100,
                currency: updatedPaymentIntent.currency.toUpperCase(),
                transactionId: updatedPaymentIntent.latest_charge,
                paymentMethod: updatedPaymentIntent.payment_method_types?.[0] || 'unknown',
                metadata: updatedPaymentIntent.metadata,
            };
        }
        catch (error) {
            this.logger.error('Failed to confirm Stripe payment', error);
            throw new Error(`Payment confirmation failed: ${error.message}`);
        }
    }
    async getPaymentStatus(paymentIntentId) {
        try {
            const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentIntentId);
            const charge = paymentIntent.latest_charge
                ? await this.stripe.charges.retrieve(paymentIntent.latest_charge)
                : null;
            return {
                id: paymentIntent.id,
                status: paymentIntent.status,
                amount: paymentIntent.amount / 100,
                currency: paymentIntent.currency.toUpperCase(),
                transactionId: charge?.id || paymentIntent.id,
                paymentMethod: paymentIntent.payment_method_types?.[0] || 'unknown',
                metadata: paymentIntent.metadata,
            };
        }
        catch (error) {
            this.logger.error('Failed to get Stripe payment status', error);
            throw new Error(`Payment status retrieval failed: ${error.message}`);
        }
    }
    async createRefund(paymentIntentId, amount, reason) {
        try {
            const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentIntentId);
            const charge = paymentIntent.latest_charge;
            const refund = await this.stripe.refunds.create({
                charge,
                amount: amount ? Math.round(amount * 100) : undefined,
                reason: reason,
                metadata: {
                    paymentIntentId,
                    reason,
                },
            });
            return {
                id: refund.id,
                amount: refund.amount / 100,
                status: refund.status,
                reason: refund.reason,
            };
        }
        catch (error) {
            this.logger.error('Failed to create Stripe refund', error);
            throw new Error(`Refund creation failed: ${error.message}`);
        }
    }
    async getPaymentMethods(userId) {
        try {
            const paymentMethods = await this.stripe.paymentMethods.list({
                customer: userId,
                type: 'card',
            });
            return paymentMethods.data.map(pm => ({
                id: pm.id,
                type: pm.type,
                brand: pm.card?.brand,
                last4: pm.card?.last4,
                expiryMonth: pm.card?.exp_month,
                expiryYear: pm.card?.exp_year,
            }));
        }
        catch (error) {
            this.logger.error('Failed to get Stripe payment methods', error);
            return [];
        }
    }
    async savePaymentMethod(userId, paymentMethodData) {
        try {
            const paymentMethod = await this.stripe.paymentMethods.attach(paymentMethodData.paymentMethodId, { customer: userId });
            return {
                id: paymentMethod.id,
                type: paymentMethod.type,
                brand: paymentMethod.card?.brand,
                last4: paymentMethod.card?.last4,
                expiryMonth: paymentMethod.card?.exp_month,
                expiryYear: paymentMethod.card?.exp_year,
            };
        }
        catch (error) {
            this.logger.error('Failed to save Stripe payment method', error);
            throw new Error(`Payment method save failed: ${error.message}`);
        }
    }
    async deletePaymentMethod(paymentMethodId) {
        try {
            await this.stripe.paymentMethods.detach(paymentMethodId);
            return true;
        }
        catch (error) {
            this.logger.error('Failed to delete Stripe payment method', error);
            return false;
        }
    }
};
exports.StripeProvider = StripeProvider;
exports.StripeProvider = StripeProvider = StripeProvider_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], StripeProvider);


/***/ }),

/***/ "./src/modules/payments/services/payment-provider.service.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/payments/services/payment-provider.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PaymentProviderService_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaymentProviderService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const payment_provider_interface_1 = __webpack_require__(/*! ../interfaces/payment-provider.interface */ "./src/modules/payments/interfaces/payment-provider.interface.ts");
const stripe_provider_1 = __webpack_require__(/*! ../providers/stripe.provider */ "./src/modules/payments/providers/stripe.provider.ts");
let PaymentProviderService = PaymentProviderService_1 = class PaymentProviderService {
    constructor(configService, stripeProvider) {
        this.configService = configService;
        this.stripeProvider = stripeProvider;
        this.logger = new common_1.Logger(PaymentProviderService_1.name);
        this.providers = new Map();
        this.initializeProviders();
    }
    initializeProviders() {
        this.providers.set(payment_provider_interface_1.PaymentProviderType.STRIPE, this.stripeProvider);
    }
    getProvider(type) {
        const provider = this.providers.get(type);
        if (!provider) {
            throw new Error(`Payment provider ${type} not found`);
        }
        return provider;
    }
    getDefaultProvider() {
        return this.getProvider(payment_provider_interface_1.PaymentProviderType.STRIPE);
    }
    async createPaymentIntent(request, providerType = payment_provider_interface_1.PaymentProviderType.STRIPE) {
        const provider = this.getProvider(providerType);
        if (!provider.supportedCurrencies.includes(request.currency.toUpperCase())) {
            throw new Error(`Currency ${request.currency} not supported by ${provider.name}`);
        }
        this.logger.log(`Creating payment intent with ${provider.name} for booking ${request.bookingId}`);
        try {
            const result = await provider.createPaymentIntent(request);
            this.logger.log(`Payment intent created: ${result.id}`);
            return result;
        }
        catch (error) {
            this.logger.error(`Failed to create payment intent with ${provider.name}`, error);
            throw error;
        }
    }
    async confirmPayment(request, providerType = payment_provider_interface_1.PaymentProviderType.STRIPE) {
        const provider = this.getProvider(providerType);
        this.logger.log(`Confirming payment with ${provider.name}: ${request.paymentIntentId}`);
        try {
            const result = await provider.confirmPayment(request);
            this.logger.log(`Payment confirmed: ${result.id} - Status: ${result.status}`);
            return result;
        }
        catch (error) {
            this.logger.error(`Failed to confirm payment with ${provider.name}`, error);
            throw error;
        }
    }
    async getPaymentStatus(paymentIntentId, providerType = payment_provider_interface_1.PaymentProviderType.STRIPE) {
        const provider = this.getProvider(providerType);
        try {
            const result = await provider.getPaymentStatus(paymentIntentId);
            this.logger.log(`Payment status retrieved: ${result.id} - Status: ${result.status}`);
            return result;
        }
        catch (error) {
            this.logger.error(`Failed to get payment status with ${provider.name}`, error);
            throw error;
        }
    }
    async createRefund(paymentIntentId, amount, reason, providerType = payment_provider_interface_1.PaymentProviderType.STRIPE) {
        const provider = this.getProvider(providerType);
        if (!provider.createRefund) {
            throw new Error(`Refunds not supported by ${provider.name}`);
        }
        this.logger.log(`Creating refund with ${provider.name}: ${paymentIntentId}`);
        try {
            const result = await provider.createRefund(paymentIntentId, amount, reason);
            this.logger.log(`Refund created: ${result.id}`);
            return result;
        }
        catch (error) {
            this.logger.error(`Failed to create refund with ${provider.name}`, error);
            throw error;
        }
    }
    getSupportedProviders() {
        return Array.from(this.providers.keys());
    }
    getProviderInfo(type) {
        const provider = this.getProvider(type);
        return {
            name: provider.name,
            supportedCurrencies: provider.supportedCurrencies,
            supportedPaymentMethods: provider.supportedPaymentMethods,
        };
    }
};
exports.PaymentProviderService = PaymentProviderService;
exports.PaymentProviderService = PaymentProviderService = PaymentProviderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof stripe_provider_1.StripeProvider !== "undefined" && stripe_provider_1.StripeProvider) === "function" ? _b : Object])
], PaymentProviderService);


/***/ }),

/***/ "./src/modules/trips/trips.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/trips/trips.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! ../../common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const trips_service_1 = __webpack_require__(/*! ./trips.service */ "./src/modules/trips/trips.service.ts");
const user_trips_entity_1 = __webpack_require__(/*! ../../common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
let TripsController = class TripsController {
    constructor(tripsService) {
        this.tripsService = tripsService;
    }
    async getTripHistory(req) {
        const userId = req.user.sub;
        const tripHistory = await this.tripsService.getUserTripHistory(userId);
        return {
            success: true,
            message: 'Trip history retrieved successfully',
            data: tripHistory,
        };
    }
    async getTripsByStatus(status, req) {
        const userId = req.user.sub;
        if (!Object.values(user_trips_entity_1.UserTripStatus).includes(status)) {
            throw new common_1.BadRequestException('Invalid trip status');
        }
        const trips = await this.tripsService.getTripsByStatus(userId, status);
        return {
            success: true,
            message: `${status} trips retrieved successfully`,
            data: trips,
        };
    }
    async getTripById(id, req) {
        const userId = req.user.sub;
        const trip = await this.tripsService.getTripById(id, userId);
        return {
            success: true,
            message: 'Trip retrieved successfully',
            data: trip,
        };
    }
    async updateTripStatus(id, body, req) {
        const userId = req.user.sub;
        if (!Object.values(user_trips_entity_1.UserTripStatus).includes(body.status)) {
            throw new common_1.BadRequestException('Invalid trip status');
        }
        const updatedTrip = await this.tripsService.updateTripStatus(id, userId, body.status);
        return {
            success: true,
            message: 'Trip status updated successfully',
            data: updatedTrip,
        };
    }
    async addTripReview(id, reviewData, req) {
        const userId = req.user.sub;
        if (!reviewData.rating || !reviewData.review) {
            throw new common_1.BadRequestException('Rating and review are required');
        }
        const updatedTrip = await this.tripsService.addTripReview(id, userId, reviewData);
        return {
            success: true,
            message: 'Review added successfully',
            data: updatedTrip,
        };
    }
    async getTripStats(req) {
        const userId = req.user.sub;
        const stats = await this.tripsService.getTripStats(userId);
        return {
            success: true,
            message: 'Trip statistics retrieved successfully',
            data: stats,
        };
    }
    async getMyTripHistory(req) {
        const userId = req.user.sub;
        const tripHistory = await this.tripsService.getUserTripHistory(userId);
        return {
            success: true,
            message: 'Trip history retrieved successfully',
            data: tripHistory,
        };
    }
};
exports.TripsController = TripsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user trip history' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trip history retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string' },
                            bookingId: { type: 'string' },
                            status: { type: 'string', enum: ['upcoming', 'completed', 'cancelled'] },
                            rating: { type: 'number', nullable: true },
                            review: { type: 'string', nullable: true },
                            reviewDate: { type: 'string', format: 'date-time', nullable: true },
                            photos: { type: 'string', nullable: true },
                            videos: { type: 'string', nullable: true },
                            createdAt: { type: 'string', format: 'date-time' },
                            completedAt: { type: 'string', format: 'date-time', nullable: true },
                            cancelledAt: { type: 'string', format: 'date-time', nullable: true },
                            booking: {
                                type: 'object',
                                properties: {
                                    id: { type: 'string' },
                                    referenceNumber: { type: 'string' },
                                    totalPrice: { type: 'number' },
                                    bookingStatus: { type: 'string' },
                                    paymentStatus: { type: 'string' },
                                    createdAt: { type: 'string', format: 'date-time' },
                                    deal: {
                                        type: 'object',
                                        properties: {
                                            id: { type: 'number' },
                                            date: { type: 'string', format: 'date' },
                                            time: { type: 'string' },
                                            pricePerSeat: { type: 'number' },
                                            company: {
                                                type: 'object',
                                                properties: {
                                                    id: { type: 'number' },
                                                    name: { type: 'string' },
                                                    logo: { type: 'string', nullable: true },
                                                },
                                            },
                                            route: {
                                                type: 'object',
                                                properties: {
                                                    origin: { type: 'string' },
                                                    destination: { type: 'string' },
                                                    duration: { type: 'string' },
                                                },
                                            },
                                            aircraft: {
                                                type: 'object',
                                                properties: {
                                                    id: { type: 'number' },
                                                    name: { type: 'string' },
                                                    type: { type: 'string' },
                                                    capacity: { type: 'number' },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getTripHistory", null);
__decorate([
    (0, common_1.Get)('status/:status'),
    (0, swagger_1.ApiOperation)({ summary: 'Get trips by status (upcoming, completed, cancelled)' }),
    (0, swagger_1.ApiParam)({ name: 'status', enum: user_trips_entity_1.UserTripStatus, description: 'Trip status' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trips retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: { type: 'string' },
                            bookingId: { type: 'string' },
                            status: { type: 'string' },
                            rating: { type: 'number', nullable: true },
                            review: { type: 'string', nullable: true },
                            createdAt: { type: 'string', format: 'date-time' },
                            booking: { type: 'object' },
                        },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid status' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('status')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getTripsByStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get specific trip by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Trip ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trip retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trip not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getTripById", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update trip status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Trip ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trip status updated successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid status' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trip not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "updateTripStatus", null);
__decorate([
    (0, common_1.Post)(':id/review'),
    (0, swagger_1.ApiOperation)({ summary: 'Add or update trip review and rating' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Trip ID' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Review added successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: { type: 'object' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid review data' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Trip not found' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "addTripReview", null);
__decorate([
    (0, common_1.Get)('stats/overview'),
    (0, swagger_1.ApiOperation)({ summary: 'Get trip statistics for user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trip statistics retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                success: { type: 'boolean' },
                message: { type: 'string' },
                data: {
                    type: 'object',
                    properties: {
                        total: { type: 'number' },
                        upcoming: { type: 'number' },
                        completed: { type: 'number' },
                        cancelled: { type: 'number' },
                        averageRating: { type: 'number' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getTripStats", null);
__decorate([
    (0, common_1.Get)('me/trip-history'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user trip history (legacy endpoint)' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Trip history retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TripsController.prototype, "getMyTripHistory", null);
exports.TripsController = TripsController = __decorate([
    (0, swagger_1.ApiTags)('Trips'),
    (0, common_1.Controller)('trips'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof trips_service_1.TripsService !== "undefined" && trips_service_1.TripsService) === "function" ? _a : Object])
], TripsController);


/***/ }),

/***/ "./src/modules/trips/trips.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/trips/trips.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const trips_controller_1 = __webpack_require__(/*! ./trips.controller */ "./src/modules/trips/trips.controller.ts");
const trips_service_1 = __webpack_require__(/*! ./trips.service */ "./src/modules/trips/trips.service.ts");
const user_trips_entity_1 = __webpack_require__(/*! ../../common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ../../common/entities/charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ../../common/entities/aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ../../common/entities/fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
let TripsModule = class TripsModule {
};
exports.TripsModule = TripsModule;
exports.TripsModule = TripsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_trips_entity_1.UserTrip,
                booking_entity_1.Booking,
                charter_deal_entity_1.CharterDeal,
                charters_company_entity_1.ChartersCompany,
                aircraft_entity_1.Aircraft,
                fixed_route_entity_1.FixedRoute,
            ]),
        ],
        controllers: [trips_controller_1.TripsController],
        providers: [trips_service_1.TripsService],
        exports: [trips_service_1.TripsService],
    })
], TripsModule);


/***/ }),

/***/ "./src/modules/trips/trips.service.ts":
/*!********************************************!*\
  !*** ./src/modules/trips/trips.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TripsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_trips_entity_1 = __webpack_require__(/*! ../../common/entities/user-trips.entity */ "./src/common/entities/user-trips.entity.ts");
const booking_entity_1 = __webpack_require__(/*! ../../common/entities/booking.entity */ "./src/common/entities/booking.entity.ts");
const charter_deal_entity_1 = __webpack_require__(/*! ../../common/entities/charter-deal.entity */ "./src/common/entities/charter-deal.entity.ts");
const charters_company_entity_1 = __webpack_require__(/*! ../../common/entities/charters-company.entity */ "./src/common/entities/charters-company.entity.ts");
const aircraft_entity_1 = __webpack_require__(/*! ../../common/entities/aircraft.entity */ "./src/common/entities/aircraft.entity.ts");
const fixed_route_entity_1 = __webpack_require__(/*! ../../common/entities/fixed-route.entity */ "./src/common/entities/fixed-route.entity.ts");
let TripsService = class TripsService {
    constructor(userTripRepository, bookingRepository, charterDealRepository, companyRepository, aircraftRepository, routeRepository, dataSource) {
        this.userTripRepository = userTripRepository;
        this.bookingRepository = bookingRepository;
        this.charterDealRepository = charterDealRepository;
        this.companyRepository = companyRepository;
        this.aircraftRepository = aircraftRepository;
        this.routeRepository = routeRepository;
        this.dataSource = dataSource;
    }
    async getUserTripHistory(userId) {
        const userTrips = await this.userTripRepository
            .createQueryBuilder('userTrip')
            .leftJoinAndSelect('userTrip.booking', 'booking')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .where('userTrip.userId = :userId', { userId })
            .orderBy('userTrip.createdAt', 'DESC')
            .getMany();
        return userTrips.map(trip => this.formatTripResponse(trip));
    }
    async getTripsByStatus(userId, status) {
        const userTrips = await this.userTripRepository
            .createQueryBuilder('userTrip')
            .leftJoinAndSelect('userTrip.booking', 'booking')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .where('userTrip.userId = :userId', { userId })
            .andWhere('userTrip.status = :status', { status })
            .orderBy('userTrip.createdAt', 'DESC')
            .getMany();
        return userTrips.map(trip => this.formatTripResponse(trip));
    }
    async getTripById(tripId, userId) {
        const userTrip = await this.userTripRepository
            .createQueryBuilder('userTrip')
            .leftJoinAndSelect('userTrip.booking', 'booking')
            .leftJoinAndSelect('booking.deal', 'deal')
            .leftJoinAndSelect('deal.company', 'company')
            .leftJoinAndSelect('deal.aircraft', 'aircraft')
            .leftJoinAndSelect('deal.fixedRoute', 'route')
            .where('userTrip.id = :tripId', { tripId })
            .andWhere('userTrip.userId = :userId', { userId })
            .getOne();
        if (!userTrip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        return this.formatTripResponse(userTrip);
    }
    async updateTripStatus(tripId, userId, status) {
        const userTrip = await this.userTripRepository.findOne({
            where: { id: tripId, userId },
        });
        if (!userTrip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        userTrip.status = status;
        if (status === user_trips_entity_1.UserTripStatus.COMPLETED) {
            userTrip.completedAt = new Date();
        }
        else if (status === user_trips_entity_1.UserTripStatus.CANCELLED) {
            userTrip.cancelledAt = new Date();
        }
        const updatedTrip = await this.userTripRepository.save(userTrip);
        return this.getTripById(tripId, userId);
    }
    async addTripReview(tripId, userId, reviewData) {
        const userTrip = await this.userTripRepository.findOne({
            where: { id: tripId, userId },
        });
        if (!userTrip) {
            throw new common_1.NotFoundException('Trip not found');
        }
        if (reviewData.rating < 1 || reviewData.rating > 5) {
            throw new common_1.BadRequestException('Rating must be between 1 and 5');
        }
        userTrip.rating = reviewData.rating;
        userTrip.review = reviewData.review;
        userTrip.reviewDate = new Date();
        userTrip.photos = reviewData.photos;
        userTrip.videos = reviewData.videos;
        await this.userTripRepository.save(userTrip);
        return this.getTripById(tripId, userId);
    }
    async getTripStats(userId) {
        const stats = await this.userTripRepository
            .createQueryBuilder('userTrip')
            .select('userTrip.status', 'status')
            .addSelect('COUNT(*)', 'count')
            .where('userTrip.userId = :userId', { userId })
            .groupBy('userTrip.status')
            .getRawMany();
        const totalTrips = await this.userTripRepository.count({
            where: { userId },
        });
        const averageRating = await this.userTripRepository
            .createQueryBuilder('userTrip')
            .select('AVG(userTrip.rating)', 'averageRating')
            .where('userTrip.userId = :userId', { userId })
            .andWhere('userTrip.rating IS NOT NULL')
            .getRawOne();
        return {
            total: totalTrips,
            upcoming: stats.find(s => s.status === user_trips_entity_1.UserTripStatus.UPCOMING)?.count || 0,
            completed: stats.find(s => s.status === user_trips_entity_1.UserTripStatus.COMPLETED)?.count || 0,
            cancelled: stats.find(s => s.status === user_trips_entity_1.UserTripStatus.CANCELLED)?.count || 0,
            averageRating: parseFloat(averageRating?.averageRating || '0'),
        };
    }
    async createUserTrip(bookingId, userId) {
        const userTrip = this.userTripRepository.create({
            id: `trip_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            bookingId,
            status: user_trips_entity_1.UserTripStatus.UPCOMING,
        });
        return await this.userTripRepository.save(userTrip);
    }
    formatTripResponse(userTrip) {
        const booking = userTrip.booking;
        const deal = booking?.deal;
        const company = deal?.company;
        const aircraft = deal?.aircraft;
        const route = deal?.fixedRoute;
        return {
            id: userTrip.id,
            bookingId: userTrip.bookingId,
            status: userTrip.status,
            rating: userTrip.rating,
            review: userTrip.review,
            reviewDate: userTrip.reviewDate,
            photos: userTrip.photos,
            videos: userTrip.videos,
            createdAt: userTrip.createdAt,
            completedAt: userTrip.completedAt,
            cancelledAt: userTrip.cancelledAt,
            booking: booking ? {
                id: booking.id,
                referenceNumber: booking.referenceNumber,
                totalPrice: booking.totalPrice,
                bookingStatus: booking.bookingStatus,
                paymentStatus: booking.paymentStatus,
                createdAt: booking.createdAt,
                deal: deal ? {
                    id: deal.id,
                    date: deal.date,
                    time: deal.time,
                    pricePerSeat: deal.pricePerSeat,
                    company: company ? {
                        id: company.id,
                        name: company.name,
                        logo: company.logo,
                    } : null,
                    route: route ? {
                        origin: route.origin,
                        destination: route.destination,
                        duration: route.duration,
                    } : null,
                    aircraft: aircraft ? {
                        id: aircraft.id,
                        name: aircraft.name,
                        type: aircraft.type,
                        capacity: aircraft.capacity,
                    } : null,
                } : null,
            } : null,
        };
    }
};
exports.TripsService = TripsService;
exports.TripsService = TripsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_trips_entity_1.UserTrip)),
    __param(1, (0, typeorm_1.InjectRepository)(booking_entity_1.Booking)),
    __param(2, (0, typeorm_1.InjectRepository)(charter_deal_entity_1.CharterDeal)),
    __param(3, (0, typeorm_1.InjectRepository)(charters_company_entity_1.ChartersCompany)),
    __param(4, (0, typeorm_1.InjectRepository)(aircraft_entity_1.Aircraft)),
    __param(5, (0, typeorm_1.InjectRepository)(fixed_route_entity_1.FixedRoute)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object, typeof (_f = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _f : Object, typeof (_g = typeof typeorm_2.DataSource !== "undefined" && typeorm_2.DataSource) === "function" ? _g : Object])
], TripsService);


/***/ }),

/***/ "./src/modules/users/dto/index.ts":
/*!****************************************!*\
  !*** ./src/modules/users/dto/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./update-user-profile.dto */ "./src/modules/users/dto/update-user-profile.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-user-preferences.dto */ "./src/modules/users/dto/update-user-preferences.dto.ts"), exports);


/***/ }),

/***/ "./src/modules/users/dto/update-user-preferences.dto.ts":
/*!**************************************************************!*\
  !*** ./src/modules/users/dto/update-user-preferences.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserPreferencesDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUserPreferencesDto {
}
exports.UpdateUserPreferencesDto = UpdateUserPreferencesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User preferred language',
        required: false,
        example: 'English',
        enum: ['English', 'Spanish', 'French', 'German'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserPreferencesDto.prototype, "language", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User preferred currency',
        required: false,
        example: 'USD ($)',
        enum: ['USD ($)', 'EUR (€)', 'GBP (£)', 'JPY (¥)'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserPreferencesDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User notification preferences',
        required: false,
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateUserPreferencesDto.prototype, "notifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User date of birth',
        required: false,
        example: '1990-01-15',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateUserPreferencesDto.prototype, "dateOfBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User nationality',
        required: false,
        example: 'United States',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserPreferencesDto.prototype, "nationality", void 0);


/***/ }),

/***/ "./src/modules/users/dto/update-user-profile.dto.ts":
/*!**********************************************************!*\
  !*** ./src/modules/users/dto/update-user-profile.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserProfileDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUserProfileDto {
}
exports.UpdateUserProfileDto = UpdateUserProfileDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User first name',
        required: false,
        example: 'John',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User last name',
        required: false,
        example: 'Doe',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User email address',
        required: false,
        example: 'john.doe@example.com',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User phone number',
        required: false,
        example: '+1234567890',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User country code',
        required: false,
        example: '+1',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "countryCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'User profile image URL',
        required: false,
        example: 'https://example.com/profile.jpg',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "profileImageUrl", void 0);


/***/ }),

/***/ "./src/modules/users/services/user-profile.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/users/services/user-profile.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! ../../../common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const user_profile_entity_1 = __webpack_require__(/*! ../../../common/entities/user-profile.entity */ "./src/common/entities/user-profile.entity.ts");
let UserProfileService = class UserProfileService {
    constructor(userRepository, userProfileRepository) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
    }
    async getUserById(userId) {
        return await this.userRepository.findOne({
            where: { id: userId },
        });
    }
    async updateUserProfile(userId, updateProfileDto) {
        const user = await this.getUserById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (updateProfileDto.firstName !== undefined) {
            user.first_name = updateProfileDto.firstName;
        }
        if (updateProfileDto.lastName !== undefined) {
            user.last_name = updateProfileDto.lastName;
        }
        if (updateProfileDto.email !== undefined) {
            user.email = updateProfileDto.email;
        }
        if (updateProfileDto.phoneNumber !== undefined) {
            user.phone_number = updateProfileDto.phoneNumber;
        }
        if (updateProfileDto.countryCode !== undefined) {
            user.country_code = updateProfileDto.countryCode;
        }
        if (updateProfileDto.profileImageUrl !== undefined) {
            user.profile_image_url = updateProfileDto.profileImageUrl;
        }
        return await this.userRepository.save(user);
    }
    async getUserPreferences(userId) {
        const profile = await this.userProfileRepository.findOne({
            where: { userId: userId },
        });
        if (!profile) {
            return {
                seatPreference: 'any',
                mealPreference: null,
                specialAssistance: null,
                emailNotifications: true,
                smsNotifications: true,
                pushNotifications: true,
                marketingEmails: true,
                profileVisible: false,
            };
        }
        return {
            seatPreference: profile.seatPreference,
            mealPreference: profile.mealPreference,
            specialAssistance: profile.specialAssistance,
            emailNotifications: profile.emailNotifications,
            smsNotifications: profile.smsNotifications,
            pushNotifications: profile.pushNotifications,
            marketingEmails: profile.marketingEmails,
            profileVisible: profile.profileVisible,
        };
    }
    async updateUserPreferences(userId, updatePreferencesDto) {
        let profile = await this.userProfileRepository.findOne({
            where: { userId: userId },
        });
        if (!profile) {
            profile = this.userProfileRepository.create({
                userId: userId,
                seatPreference: user_profile_entity_1.SeatPreference.ANY,
                emailNotifications: true,
                smsNotifications: true,
                pushNotifications: true,
                marketingEmails: true,
                profileVisible: false,
            });
        }
        if (updatePreferencesDto.language !== undefined) {
            const user = await this.getUserById(userId);
            if (user) {
                user.language = updatePreferencesDto.language;
                await this.userRepository.save(user);
            }
        }
        if (updatePreferencesDto.currency !== undefined) {
            const user = await this.getUserById(userId);
            if (user) {
                user.currency = updatePreferencesDto.currency;
                await this.userRepository.save(user);
            }
        }
        if (updatePreferencesDto.notifications !== undefined) {
            profile.emailNotifications = updatePreferencesDto.notifications;
            profile.smsNotifications = updatePreferencesDto.notifications;
            profile.pushNotifications = updatePreferencesDto.notifications;
        }
        if (updatePreferencesDto.dateOfBirth !== undefined) {
            const user = await this.getUserById(userId);
            if (user) {
                user.date_of_birth = new Date(updatePreferencesDto.dateOfBirth);
                await this.userRepository.save(user);
            }
        }
        if (updatePreferencesDto.nationality !== undefined) {
            const user = await this.getUserById(userId);
            if (user) {
                user.nationality = updatePreferencesDto.nationality;
                await this.userRepository.save(user);
            }
        }
        await this.userProfileRepository.save(profile);
        return {
            seatPreference: profile.seatPreference,
            mealPreference: profile.mealPreference,
            specialAssistance: profile.specialAssistance,
            emailNotifications: profile.emailNotifications,
            smsNotifications: profile.smsNotifications,
            pushNotifications: profile.pushNotifications,
            marketingEmails: profile.marketingEmails,
            profileVisible: profile.profileVisible,
        };
    }
    async createOrUpdateProfile(userId, profileData) {
        let profile = await this.userProfileRepository.findOne({
            where: { userId: userId },
        });
        if (!profile) {
            profile = this.userProfileRepository.create({
                userId: userId,
                ...profileData,
            });
        }
        else {
            Object.assign(profile, profileData);
        }
        return await this.userProfileRepository.save(profile);
    }
    async getUserProfile(userId) {
        return await this.userProfileRepository.findOne({
            where: { userId: userId },
        });
    }
    async deleteUserProfile(userId) {
        await this.userProfileRepository.delete({ userId: userId });
    }
};
exports.UserProfileService = UserProfileService;
exports.UserProfileService = UserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(user_profile_entity_1.UserProfile)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], UserProfileService);


/***/ }),

/***/ "./src/modules/users/users.controller.ts":
/*!***********************************************!*\
  !*** ./src/modules/users/users.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./src/modules/users/dto/index.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getProfile(req) {
        const userId = req.user.sub;
        const user = await this.usersService.getUserById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const preferences = await this.usersService.getUserPreferences(userId);
        return {
            id: user.id,
            email: user.email,
            phoneNumber: user.phone_number,
            firstName: user.first_name,
            lastName: user.last_name,
            countryCode: user.country_code,
            profileImageUrl: user.profile_image_url,
            loyaltyPoints: user.loyalty_points,
            walletBalance: user.wallet_balance,
            isActive: user.is_active,
            emailVerified: user.email_verified,
            phoneVerified: user.phone_verified,
            createdAt: user.created_at,
            updatedAt: user.updated_at,
            preferences,
        };
    }
    async updateProfile(req, updateProfileDto) {
        const userId = req.user.sub;
        try {
            const updatedUser = await this.usersService.updateUserProfile(userId, updateProfileDto);
            return {
                message: 'Profile updated successfully',
                user: {
                    id: updatedUser.id,
                    email: updatedUser.email,
                    phoneNumber: updatedUser.phone_number,
                    firstName: updatedUser.first_name,
                    lastName: updatedUser.last_name,
                    countryCode: updatedUser.country_code,
                    profileImageUrl: updatedUser.profile_image_url,
                    loyaltyPoints: updatedUser.loyalty_points,
                    walletBalance: updatedUser.wallet_balance,
                    isActive: updatedUser.is_active,
                    emailVerified: updatedUser.email_verified,
                    phoneVerified: updatedUser.phone_verified,
                    createdAt: updatedUser.created_at,
                    updatedAt: updatedUser.updated_at,
                },
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to update profile: ${error.message}`);
        }
    }
    async updatePreferences(req, updatePreferencesDto) {
        const userId = req.user.sub;
        try {
            const updatedPreferences = await this.usersService.updateUserPreferences(userId, updatePreferencesDto);
            return {
                message: 'Preferences updated successfully',
                preferences: updatedPreferences,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to update preferences: ${error.message}`);
        }
    }
    async getWalletInfo(req) {
        const userId = req.user.sub;
        const user = await this.usersService.getUserById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return {
            balance: user.wallet_balance,
            loyaltyPoints: user.loyalty_points,
            currency: 'USD',
            lastTransaction: user.updated_at,
        };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get current user profile' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User profile retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                email: { type: 'string' },
                phoneNumber: { type: 'string' },
                firstName: { type: 'string' },
                lastName: { type: 'string' },
                countryCode: { type: 'string' },
                profileImageUrl: { type: 'string' },
                loyaltyPoints: { type: 'number' },
                walletBalance: { type: 'number' },
                isActive: { type: 'boolean' },
                emailVerified: { type: 'boolean' },
                phoneVerified: { type: 'boolean' },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
                preferences: {
                    type: 'object',
                    properties: {
                        language: { type: 'string' },
                        currency: { type: 'string' },
                        notifications: { type: 'boolean' },
                        dateOfBirth: { type: 'string', format: 'date' },
                        nationality: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update user profile' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Profile updated successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        email: { type: 'string' },
                        phoneNumber: { type: 'string' },
                        firstName: { type: 'string' },
                        lastName: { type: 'string' },
                        countryCode: { type: 'string' },
                        profileImageUrl: { type: 'string' },
                        loyaltyPoints: { type: 'number' },
                        walletBalance: { type: 'number' },
                        isActive: { type: 'boolean' },
                        emailVerified: { type: 'boolean' },
                        phoneVerified: { type: 'boolean' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid profile data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_b = typeof dto_1.UpdateUserProfileDto !== "undefined" && dto_1.UpdateUserProfileDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)('preferences'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({ summary: 'Update user preferences' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Preferences updated successfully',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
                preferences: {
                    type: 'object',
                    properties: {
                        language: { type: 'string' },
                        currency: { type: 'string' },
                        notifications: { type: 'boolean' },
                        dateOfBirth: { type: 'string', format: 'date' },
                        nationality: { type: 'string' },
                    },
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid preferences data' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_c = typeof dto_1.UpdateUserPreferencesDto !== "undefined" && dto_1.UpdateUserPreferencesDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updatePreferences", null);
__decorate([
    (0, common_1.Get)('wallet'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user wallet information' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Wallet information retrieved successfully',
        schema: {
            type: 'object',
            properties: {
                balance: { type: 'number' },
                loyaltyPoints: { type: 'number' },
                currency: { type: 'string' },
                lastTransaction: { type: 'string', format: 'date-time' },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getWalletInfo", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./src/modules/users/users.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/users/users.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./src/modules/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./src/modules/users/users.service.ts");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const user_profile_entity_1 = __webpack_require__(/*! @/common/entities/user-profile.entity */ "./src/common/entities/user-profile.entity.ts");
const wallet_transaction_entity_1 = __webpack_require__(/*! @/common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_profile_service_1 = __webpack_require__(/*! ./services/user-profile.service */ "./src/modules/users/services/user-profile.service.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, user_profile_entity_1.UserProfile, wallet_transaction_entity_1.WalletTransaction]),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, user_profile_service_1.UserProfileService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);


/***/ }),

/***/ "./src/modules/users/users.service.ts":
/*!********************************************!*\
  !*** ./src/modules/users/users.service.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const user_profile_entity_1 = __webpack_require__(/*! @/common/entities/user-profile.entity */ "./src/common/entities/user-profile.entity.ts");
const wallet_transaction_entity_1 = __webpack_require__(/*! @/common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_profile_service_1 = __webpack_require__(/*! ./services/user-profile.service */ "./src/modules/users/services/user-profile.service.ts");
let UsersService = class UsersService {
    constructor(userRepository, userProfileRepository, walletTransactionRepository, userProfileService) {
        this.userRepository = userRepository;
        this.userProfileRepository = userProfileRepository;
        this.walletTransactionRepository = walletTransactionRepository;
        this.userProfileService = userProfileService;
    }
    async getUserById(userId) {
        return this.userProfileService.getUserById(userId);
    }
    async updateUserProfile(userId, updateProfileDto) {
        return this.userProfileService.updateUserProfile(userId, updateProfileDto);
    }
    async getUserPreferences(userId) {
        return this.userProfileService.getUserPreferences(userId);
    }
    async updateUserPreferences(userId, updatePreferencesDto) {
        return this.userProfileService.updateUserPreferences(userId, updatePreferencesDto);
    }
    async getUserWalletInfo(userId) {
        const user = await this.getUserById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const recentTransactions = await this.walletTransactionRepository.find({
            where: { userId: userId },
            order: { createdAt: 'DESC' },
            take: 5,
        });
        return {
            balance: user.wallet_balance,
            loyaltyPoints: user.loyalty_points,
            loyaltyTier: user.loyalty_tier,
            currency: user.currency || 'USD',
            lastTransaction: user.updated_at,
            recentTransactions: recentTransactions.map(tx => ({
                id: tx.id,
                type: tx.transactionType,
                amount: tx.amount,
                pointsAmount: tx.pointsAmount,
                description: tx.description,
                status: tx.status,
                createdAt: tx.createdAt,
            })),
        };
    }
    async createWalletTransaction(userId, transactionType, amount, pointsAmount, description, bookingId, metadata) {
        const user = await this.getUserById(userId);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const transaction = this.walletTransactionRepository.create({
            id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            bookingId,
            transactionType,
            amount,
            pointsAmount,
            description,
            balanceBefore: user.wallet_balance,
            balanceAfter: user.wallet_balance + amount,
            pointsBefore: user.loyalty_points,
            pointsAfter: user.loyalty_points + pointsAmount,
            status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
            metadata,
            completedAt: new Date(),
        });
        user.wallet_balance = transaction.balanceAfter;
        user.loyalty_points = transaction.pointsAfter;
        await this.userRepository.save(user);
        return await this.walletTransactionRepository.save(transaction);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(user_profile_entity_1.UserProfile)),
    __param(2, (0, typeorm_1.InjectRepository)(wallet_transaction_entity_1.WalletTransaction)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof user_profile_service_1.UserProfileService !== "undefined" && user_profile_service_1.UserProfileService) === "function" ? _d : Object])
], UsersService);


/***/ }),

/***/ "./src/modules/wallet/wallet.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/wallet/wallet.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const jwt_auth_guard_1 = __webpack_require__(/*! @/common/guards/jwt-auth.guard */ "./src/common/guards/jwt-auth.guard.ts");
const wallet_service_1 = __webpack_require__(/*! ./wallet.service */ "./src/modules/wallet/wallet.service.ts");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    async getUserTransactions(req, page = '1', limit = '10') {
        const userId = req.user.id;
        return await this.walletService.getUserTransactions(userId, parseInt(page), parseInt(limit));
    }
    async getLoyaltyTransactions(req, page = '1', limit = '10') {
        const userId = req.user.id;
        return await this.walletService.getLoyaltyTransactions(userId, parseInt(page), parseInt(limit));
    }
    async getMonetaryTransactions(req, page = '1', limit = '10') {
        const userId = req.user.id;
        return await this.walletService.getMonetaryTransactions(userId, parseInt(page), parseInt(limit));
    }
    async getLoyaltySummary(req) {
        const userId = req.user.id;
        return await this.walletService.getLoyaltySummary(userId);
    }
    async earnLoyaltyPoints(req, body) {
        const userId = req.user.id;
        return await this.walletService.earnLoyaltyPoints(userId, body.points, body.description, body.bookingId, body.expiresAt ? new Date(body.expiresAt) : undefined);
    }
    async earnLoyaltyPointsFromSpending(req, body) {
        const userId = req.user.id;
        return await this.walletService.earnLoyaltyPointsFromSpending(userId, body.usdAmount, body.description, body.bookingId, body.expiresAt ? new Date(body.expiresAt) : undefined);
    }
    async redeemLoyaltyPoints(req, body) {
        const userId = req.user.id;
        return await this.walletService.redeemLoyaltyPoints(userId, body.miles, body.description, body.bookingId);
    }
    async depositMoney(req, body) {
        const userId = req.user.id;
        return await this.walletService.depositMoney(userId, body.amount, body.description, body.paymentMethod, body.paymentReference);
    }
    async withdrawMoney(req, body) {
        const userId = req.user.id;
        return await this.walletService.withdrawMoney(userId, body.amount, body.description, body.paymentMethod, body.paymentReference);
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, common_1.Get)('transactions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user wallet transactions' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Transactions retrieved successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getUserTransactions", null);
__decorate([
    (0, common_1.Get)('loyalty/transactions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user loyalty transactions' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loyalty transactions retrieved successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getLoyaltyTransactions", null);
__decorate([
    (0, common_1.Get)('money/transactions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user monetary transactions' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Monetary transactions retrieved successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getMonetaryTransactions", null);
__decorate([
    (0, common_1.Get)('loyalty/summary'),
    (0, swagger_1.ApiOperation)({ summary: 'Get loyalty points summary with conversion rates' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Loyalty summary retrieved successfully' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getLoyaltySummary", null);
__decorate([
    (0, common_1.Post)('loyalty/earn'),
    (0, swagger_1.ApiOperation)({ summary: 'Earn loyalty points (direct miles)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loyalty points earned successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "earnLoyaltyPoints", null);
__decorate([
    (0, common_1.Post)('loyalty/earn-from-spending'),
    (0, swagger_1.ApiOperation)({ summary: 'Earn loyalty points from USD spending (1 USD = 5 miles)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loyalty points earned from spending successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "earnLoyaltyPointsFromSpending", null);
__decorate([
    (0, common_1.Post)('loyalty/redeem'),
    (0, swagger_1.ApiOperation)({ summary: 'Redeem loyalty points for USD discount (100 miles = $1 off)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Loyalty points redeemed successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "redeemLoyaltyPoints", null);
__decorate([
    (0, common_1.Post)('deposit'),
    (0, swagger_1.ApiOperation)({ summary: 'Deposit money to wallet' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Money deposited successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "depositMoney", null);
__decorate([
    (0, common_1.Post)('withdraw'),
    (0, swagger_1.ApiOperation)({ summary: 'Withdraw money from wallet' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Money withdrawn successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "withdrawMoney", null);
exports.WalletController = WalletController = __decorate([
    (0, swagger_1.ApiTags)('Wallet'),
    (0, common_1.Controller)('wallet'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [typeof (_a = typeof wallet_service_1.WalletService !== "undefined" && wallet_service_1.WalletService) === "function" ? _a : Object])
], WalletController);


/***/ }),

/***/ "./src/modules/wallet/wallet.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/wallet/wallet.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const wallet_transaction_entity_1 = __webpack_require__(/*! @/common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
const wallet_service_1 = __webpack_require__(/*! ./wallet.service */ "./src/modules/wallet/wallet.service.ts");
const wallet_controller_1 = __webpack_require__(/*! ./wallet.controller */ "./src/modules/wallet/wallet.controller.ts");
let WalletModule = class WalletModule {
};
exports.WalletModule = WalletModule;
exports.WalletModule = WalletModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([wallet_transaction_entity_1.WalletTransaction, user_entity_1.User]),
        ],
        controllers: [wallet_controller_1.WalletController],
        providers: [wallet_service_1.WalletService],
        exports: [wallet_service_1.WalletService],
    })
], WalletModule);


/***/ }),

/***/ "./src/modules/wallet/wallet.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/wallet/wallet.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const wallet_transaction_entity_1 = __webpack_require__(/*! @/common/entities/wallet-transaction.entity */ "./src/common/entities/wallet-transaction.entity.ts");
const user_entity_1 = __webpack_require__(/*! @/common/entities/user.entity */ "./src/common/entities/user.entity.ts");
let WalletService = class WalletService {
    constructor(walletTransactionRepository, userRepository) {
        this.walletTransactionRepository = walletTransactionRepository;
        this.userRepository = userRepository;
        this.MILES_PER_USD = 5;
        this.USD_PER_100_MILES = 1;
        this.MILES_PER_DOLLAR_OFF = 100;
    }
    calculateMilesFromSpending(usdAmount) {
        return Math.floor(usdAmount * this.MILES_PER_USD);
    }
    calculateUsdFromMiles(miles) {
        return (miles / this.MILES_PER_DOLLAR_OFF) * this.USD_PER_100_MILES;
    }
    calculateMilesForUsdDiscount(usdDiscount) {
        return Math.ceil(usdDiscount * this.MILES_PER_DOLLAR_OFF / this.USD_PER_100_MILES);
    }
    async getUserTransactions(userId, page = 1, limit = 10) {
        const [transactions, total] = await this.walletTransactionRepository.findAndCount({
            where: { userId },
            order: { createdAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            transactions: transactions.map(tx => ({
                id: tx.id,
                type: tx.transactionType,
                amount: tx.amount,
                pointsAmount: tx.pointsAmount,
                description: tx.description,
                status: tx.status,
                createdAt: tx.createdAt,
                bookingId: tx.bookingId,
            })),
            total,
            page,
            limit,
        };
    }
    async getLoyaltyTransactions(userId, page = 1, limit = 10) {
        const [transactions, total] = await this.walletTransactionRepository.findAndCount({
            where: {
                userId,
                transactionType: (0, typeorm_2.In)([
                    wallet_transaction_entity_1.WalletTransactionType.LOYALTY_EARNED,
                    wallet_transaction_entity_1.WalletTransactionType.LOYALTY_REDEEMED,
                    wallet_transaction_entity_1.WalletTransactionType.LOYALTY_EXPIRED,
                    wallet_transaction_entity_1.WalletTransactionType.LOYALTY_ADJUSTMENT,
                ]),
            },
            order: { createdAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            transactions: transactions.map(tx => ({
                id: tx.id,
                type: tx.transactionType,
                pointsAmount: tx.pointsAmount,
                description: tx.description,
                pointsBefore: tx.pointsBefore,
                pointsAfter: tx.pointsAfter,
                createdAt: tx.createdAt,
                expiresAt: tx.expiresAt,
            })),
            total,
            page,
            limit,
        };
    }
    async getMonetaryTransactions(userId, page = 1, limit = 10) {
        const [transactions, total] = await this.walletTransactionRepository.findAndCount({
            where: {
                userId,
                transactionType: (0, typeorm_2.In)([
                    wallet_transaction_entity_1.WalletTransactionType.DEPOSIT,
                    wallet_transaction_entity_1.WalletTransactionType.WITHDRAWAL,
                    wallet_transaction_entity_1.WalletTransactionType.PAYMENT,
                    wallet_transaction_entity_1.WalletTransactionType.REFUND,
                    wallet_transaction_entity_1.WalletTransactionType.BONUS,
                    wallet_transaction_entity_1.WalletTransactionType.FEE,
                ]),
            },
            order: { createdAt: 'DESC' },
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            transactions: transactions.map(tx => ({
                id: tx.id,
                type: tx.transactionType,
                amount: tx.amount,
                currency: tx.currency,
                description: tx.description,
                balanceBefore: tx.balanceBefore,
                balanceAfter: tx.balanceAfter,
                paymentMethod: tx.paymentMethod,
                status: tx.status,
                createdAt: tx.createdAt,
                completedAt: tx.completedAt,
            })),
            total,
            page,
            limit,
        };
    }
    async earnLoyaltyPointsFromSpending(userId, usdAmount, description, bookingId, expiresAt) {
        const milesEarned = this.calculateMilesFromSpending(usdAmount);
        if (milesEarned <= 0) {
            throw new Error('No miles earned from this transaction');
        }
        return await this.earnLoyaltyPoints(userId, milesEarned, `${description} - Earned ${milesEarned} miles from $${usdAmount} spending`, bookingId, expiresAt);
    }
    async earnLoyaltyPoints(userId, points, description, bookingId, expiresAt) {
        const queryRunner = this.walletTransactionRepository.manager.connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const user = await queryRunner.manager.findOne(user_entity_1.User, {
                where: { id: userId },
                lock: { mode: 'pessimistic_write' },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            const transaction = queryRunner.manager.create(wallet_transaction_entity_1.WalletTransaction, {
                id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                userId,
                bookingId,
                transactionType: wallet_transaction_entity_1.WalletTransactionType.LOYALTY_EARNED,
                amount: 0,
                pointsAmount: points,
                description,
                balanceBefore: user.wallet_balance,
                balanceAfter: user.wallet_balance,
                pointsBefore: user.loyalty_points,
                pointsAfter: user.loyalty_points + points,
                status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
                expiresAt,
                completedAt: new Date(),
            });
            user.loyalty_points = transaction.pointsAfter;
            await queryRunner.manager.save(user);
            const savedTransaction = await queryRunner.manager.save(transaction);
            await queryRunner.commitTransaction();
            return savedTransaction;
        }
        catch (error) {
            if (queryRunner.isTransactionActive) {
                await queryRunner.rollbackTransaction();
            }
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async redeemLoyaltyPoints(userId, miles, description, bookingId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.loyalty_points < miles) {
            throw new Error('Insufficient loyalty points');
        }
        const usdDiscount = this.calculateUsdFromMiles(miles);
        if (usdDiscount <= 0) {
            throw new Error('Invalid miles amount for redemption');
        }
        const transaction = this.walletTransactionRepository.create({
            id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            bookingId,
            transactionType: wallet_transaction_entity_1.WalletTransactionType.LOYALTY_REDEEMED,
            amount: usdDiscount,
            pointsAmount: -miles,
            description: `${description} - Redeemed ${miles} miles for $${usdDiscount} discount`,
            balanceBefore: user.wallet_balance,
            balanceAfter: user.wallet_balance + usdDiscount,
            pointsBefore: user.loyalty_points,
            pointsAfter: user.loyalty_points - miles,
            status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
            completedAt: new Date(),
        });
        user.loyalty_points = transaction.pointsAfter;
        user.wallet_balance = transaction.balanceAfter;
        await this.userRepository.save(user);
        return await this.walletTransactionRepository.save(transaction);
    }
    async getLoyaltySummary(userId) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const currentMiles = user.loyalty_points;
        const potentialUsdDiscount = this.calculateUsdFromMiles(currentMiles);
        const milesNeededForNextDollar = this.MILES_PER_DOLLAR_OFF - (currentMiles % this.MILES_PER_DOLLAR_OFF);
        return {
            currentMiles,
            potentialUsdDiscount,
            milesNeededForNextDollar,
            conversionRates: {
                milesPerUsd: this.MILES_PER_USD,
                usdPer100Miles: this.USD_PER_100_MILES,
            },
            examples: {
                spending10Usd: this.calculateMilesFromSpending(10),
                spending100Usd: this.calculateMilesFromSpending(100),
                redeeming100Miles: this.calculateUsdFromMiles(100),
                redeeming500Miles: this.calculateUsdFromMiles(500),
            },
        };
    }
    async depositMoney(userId, amount, description, paymentMethod, paymentReference) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const transaction = this.walletTransactionRepository.create({
            id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            transactionType: wallet_transaction_entity_1.WalletTransactionType.DEPOSIT,
            amount,
            pointsAmount: 0,
            description,
            balanceBefore: user.wallet_balance,
            balanceAfter: user.wallet_balance + amount,
            pointsBefore: user.loyalty_points,
            pointsAfter: user.loyalty_points,
            paymentMethod,
            paymentReference,
            status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
            completedAt: new Date(),
        });
        user.wallet_balance = transaction.balanceAfter;
        await this.userRepository.save(user);
        return await this.walletTransactionRepository.save(transaction);
    }
    async withdrawMoney(userId, amount, description, paymentMethod, paymentReference) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.wallet_balance < amount) {
            throw new Error('Insufficient wallet balance');
        }
        const transaction = this.walletTransactionRepository.create({
            id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            transactionType: wallet_transaction_entity_1.WalletTransactionType.WITHDRAWAL,
            amount: -amount,
            pointsAmount: 0,
            description,
            balanceBefore: user.wallet_balance,
            balanceAfter: user.wallet_balance - amount,
            pointsBefore: user.loyalty_points,
            pointsAfter: user.loyalty_points,
            paymentMethod,
            paymentReference,
            status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
            completedAt: new Date(),
        });
        user.wallet_balance = transaction.balanceAfter;
        await this.userRepository.save(user);
        return await this.walletTransactionRepository.save(transaction);
    }
    async createWalletTransaction(userId, transactionType, amount, pointsAmount, description, bookingId, metadata) {
        const user = await this.userRepository.findOne({ where: { id: userId } });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const transaction = this.walletTransactionRepository.create({
            id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            userId,
            bookingId,
            transactionType,
            amount,
            pointsAmount,
            description,
            balanceBefore: user.wallet_balance,
            balanceAfter: user.wallet_balance + amount,
            pointsBefore: user.loyalty_points,
            pointsAfter: user.loyalty_points + pointsAmount,
            status: wallet_transaction_entity_1.WalletTransactionStatus.COMPLETED,
            metadata,
            completedAt: new Date(),
        });
        user.wallet_balance = transaction.balanceAfter;
        user.loyalty_points = transaction.pointsAfter;
        await this.userRepository.save(user);
        return await this.walletTransactionRepository.save(transaction);
    }
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wallet_transaction_entity_1.WalletTransaction)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], WalletService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: [
            '*',
            'http://localhost:3000',
            'http://localhost:8080',
            'http://localhost:4200',
            'http://localhost:60812',
            'http://localhost:63596',
            'http://192.168.100.2:3000',
            'http://192.168.100.2:8080',
            'http://192.168.100.2:4200',
            'http://192.168.100.2:60812',
            'http://192.168.100.10:63596',
            'http://192.168.100.10:5000',
            'capacitor://localhost',
            'ionic://localhost',
        ],
        credentials: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Air Charters API')
        .setDescription('Air Charters Backend API Documentation')
        .setVersion('1.0')
        .addBearerAuth()
        .addTag('auth', 'Authentication endpoints')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const port = configService.get('PORT', 3000);
    await app.listen(port);
    console.log(`🚀 Air Charters API is running on: http://localhost:${port}`);
    console.log(`📚 API Documentation: http://localhost:${port}/api/docs`);
    console.log(`🔐 Auth endpoints: http://localhost:${port}/api/auth`);
}
bootstrap();

})();

/******/ })()
;