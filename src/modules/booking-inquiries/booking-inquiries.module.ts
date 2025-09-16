import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingInquiriesController } from './booking-inquiries.controller';
import { BookingInquiriesService } from './booking-inquiries.service';
import { GoogleEarthEngineService } from '../google-earth-engine/google-earth-engine.service';
import { PaymentsModule } from '../payments/payments.module';
import { BookingInquiry } from '../../common/entities/booking-inquiry.entity';
import { InquiryStop } from '../../common/entities/inquiry-stop.entity';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { User } from '../../common/entities/user.entity';
import { Booking } from '../../common/entities/booking.entity';
import { Payment } from '../../common/entities/payment.entity';
import { AircraftCalendar } from '../../common/entities/aircraft-calendar.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookingInquiry, InquiryStop, Aircraft, User, Booking, Payment, AircraftCalendar]),
    PaymentsModule,
  ],
  controllers: [BookingInquiriesController],
  providers: [BookingInquiriesService],
  exports: [BookingInquiriesService],
})
export class BookingInquiriesModule {} 