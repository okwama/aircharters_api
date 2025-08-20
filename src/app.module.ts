import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CharterDealsModule } from './modules/charter-deals/charter-deals.module';
import { PassengersModule } from './modules/passengers/passengers.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { TripsModule } from './modules/trips/trips.module';
import { LocationsModule } from './modules/locations/locations.module';
import { AircraftAvailabilityModule } from './modules/aircraft-availability/aircraft-availability.module';
import { DirectCharterModule } from './modules/direct-charter/direct-charter.module';
import { BookingInquiriesModule } from './modules/booking-inquiries/booking-inquiries.module';
import { GoogleEarthEngineModule } from './modules/google-earth-engine/google-earth-engine.module';
import { AmenitiesModule } from './modules/amenities/amenities.module';
import { CommissionModule } from './modules/commission/commission.module';
import { HealthController } from './health.controller';
import { User } from './common/entities/user.entity';
import { CharterDeal } from './common/entities/charter-deal.entity';
import { ChartersCompany } from './common/entities/charters-company.entity';
// FixedRoute import removed - no longer used
import { Aircraft as CharterAircraft } from './common/entities/aircraft.entity';
import { Aircraft } from './common/entities/aircraft-booking.entity';
import { Company } from './common/entities/company.entity';
import { Passenger } from './common/entities/passenger.entity';
import { Booking } from './common/entities/booking.entity';
import { Payment } from './common/entities/payment.entity';
import { WalletTransaction } from './common/entities/wallet-transaction.entity';
import { UserProfile } from './common/entities/user-profile.entity';
import { UserTrip } from './common/entities/user-trips.entity';
import { UserFile } from './common/entities/user-files.entity';
import { UserEvent } from './common/entities/user-events.entity';
import { BookingTimeline } from './common/entities/booking-timeline.entity';
import { Location } from './common/entities/location.entity';
import { AircraftAvailability } from './common/entities/aircraft-availability.entity';
import { AircraftImage } from './common/entities/aircraft-image.entity';
import { AircraftCalendar } from './common/entities/aircraft-calendar.entity';
import { BookingInquiry } from './common/entities/booking-inquiry.entity';
import { InquiryStop } from './common/entities/inquiry-stop.entity';
import { Amenity } from './common/entities/amenity.entity';
import { AircraftAmenity } from './common/entities/aircraft-amenity.entity';
import { CharterDealAmenity } from './common/entities/charter-deal-amenity.entity';
import { AircraftTypeImagePlaceholder } from './common/entities/aircraft-type-image-placeholder.entity';
import { PlatformCommission } from './common/entities/platform-commission.entity';
import { CommissionTier } from './common/entities/commission-tier.entity';
import { CompanyCommission } from './common/entities/company-commission.entity';
import { CommissionHistory } from './common/entities/commission-history.entity';
import { CompanyPaymentAccount } from './common/entities/company-payment-account.entity';
import { TransactionLedger } from './common/entities/transaction-ledger.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'citlogis_air_charters',
      entities: [
        User, 
        CharterDeal,
        ChartersCompany,
        // FixedRoute removed - no longer used
        CharterAircraft,
        Aircraft,
        Company,
        Passenger,
        Booking,
        Payment,
        WalletTransaction,
        UserProfile,
        UserTrip,
        UserFile,
        UserEvent,
        BookingTimeline,
        Location,
        AircraftAvailability,
        AircraftImage,
        AircraftCalendar,
        BookingInquiry,
        InquiryStop,
        Amenity,
        AircraftAmenity,
        CharterDealAmenity,
        AircraftTypeImagePlaceholder,
        PlatformCommission,
                            CommissionTier,
                    CompanyCommission,
                    CommissionHistory,
                    CompanyPaymentAccount,
                    TransactionLedger,
      ],
      synchronize: false,
      logging: false,
      
      // Connection Pooling Optimizations
      extra: {
        // Connection pool settings
        connectionLimit: 20, // Increased from default
        acquireTimeout: 60000,
        timeout: 60000,
        charset: 'utf8mb4_unicode_ci',
        
        // Lock timeout prevention
        lockWaitTimeout: 10, // 10 seconds (default is 50)
        innodbLockWaitTimeout: 10, // 10 seconds
        
        // Transaction isolation and timeout settings
        transactionIsolation: 'READ_COMMITTED', // Prevents dirty reads, reduces lock conflicts
        autocommit: false, // Explicit transaction control
        
        // Query timeout settings
        queryTimeout: 30000, // 30 seconds
        connectTimeout: 60000, // 60 seconds
        
        // Connection management
        multipleStatements: false, // Security: prevent SQL injection
        dateStrings: true, // Better date handling
        
        // Performance optimizations
        supportBigNumbers: true,
        bigNumberStrings: true,
        
        // Deadlock prevention
        deadlockRetryCount: 3,
        deadlockRetryDelay: 1000, // 1 second
        
        // Connection health checks
        enableKeepAlive: true,
        keepAliveInitialDelay: 10000, // 10 seconds
      },
      
      // TypeORM specific optimizations
      maxQueryExecutionTime: 30000, // Log slow queries > 30 seconds
      cache: {
        duration: 30000, // 30 seconds cache
      },
    }),
    AuthModule,
    UsersModule,
    CharterDealsModule,
    PassengersModule,
    BookingsModule,
    PaymentsModule,
    WalletModule,
    TripsModule,
    LocationsModule,
    AircraftAvailabilityModule,
            DirectCharterModule,
        BookingInquiriesModule,
                                GoogleEarthEngineModule,
                        AmenitiesModule,
                        CommissionModule,
      ],
  controllers: [HealthController],
})
export class AppModule {} 