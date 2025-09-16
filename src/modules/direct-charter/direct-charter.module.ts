import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectCharterController } from './direct-charter.controller';
import { DirectCharterService } from './direct-charter.service';
import { Aircraft } from '../../common/entities/aircraft.entity';
import { AircraftCalendar } from '../../common/entities/aircraft-calendar.entity';
import { Booking } from '../../common/entities/booking.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { Passenger } from '../../common/entities/passenger.entity';
import { Payment } from '../../common/entities/payment.entity';
import { AircraftTypeImagePlaceholder } from '../../common/entities/aircraft-type-image-placeholder.entity';
import { PaymentsModule } from '../payments/payments.module';
import { GoogleEarthEngineModule } from '../google-earth-engine/google-earth-engine.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Aircraft,
      AircraftCalendar,
      Booking,
      ChartersCompany,
      Passenger,
      Payment,
      AircraftTypeImagePlaceholder,
    ]),
    PaymentsModule,
    GoogleEarthEngineModule,
  ],
  controllers: [DirectCharterController],
  providers: [DirectCharterService],
  exports: [DirectCharterService],
})
export class DirectCharterModule {} 