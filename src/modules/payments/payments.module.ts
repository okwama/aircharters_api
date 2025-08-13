import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PaymentsController } from './payments.controller';
import { MpesaCallbackController } from './mpesa-callback.controller';
import { PaymentsService } from './payments.service';
import { PaymentProviderService } from './services/payment-provider.service';
import { StripeProvider } from './providers/stripe.provider';
import { MpesaProvider } from './providers/mpesa.provider';
import { Payment } from '../../common/entities/payment.entity';
import { Booking } from '../../common/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment, Booking]),
    ConfigModule,
    HttpModule,
  ],
  controllers: [PaymentsController, MpesaCallbackController],
  providers: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
    MpesaProvider,
  ],
  exports: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
    MpesaProvider,
  ],
})
export class PaymentsModule {} 