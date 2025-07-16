import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { PaymentProviderService } from './services/payment-provider.service';
import { StripeProvider } from './providers/stripe.provider';
import { Payment } from '../../common/entities/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment]),
    ConfigModule,
  ],
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
  ],
  exports: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
  ],
})
export class PaymentsModule {} 