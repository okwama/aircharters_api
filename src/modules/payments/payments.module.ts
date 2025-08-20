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
import { StripeConnectProvider } from './providers/stripe-connect.provider';
import { MpesaMerchantProvider } from './providers/mpesa-merchant.provider';
import { CompanyOnboardingService } from './services/company-onboarding.service';
import { UnifiedPaymentService } from './services/unified-payment.service';
import { StripeConnectController } from './controllers/stripe-connect.controller';
import { MpesaMerchantController } from './controllers/mpesa-merchant.controller';
import { UnifiedPaymentController } from './controllers/unified-payment.controller';
import { Payment } from '../../common/entities/payment.entity';
import { Booking } from '../../common/entities/booking.entity';
import { CompanyPaymentAccount } from '../../common/entities/company-payment-account.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { TransactionLedger } from '../../common/entities/transaction-ledger.entity';
import { CommissionModule } from '../commission/commission.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment, Booking, CompanyPaymentAccount, ChartersCompany, TransactionLedger]),
    ConfigModule,
    HttpModule,
    CommissionModule,
  ],
  controllers: [PaymentsController, MpesaCallbackController, StripeConnectController, MpesaMerchantController, UnifiedPaymentController],
  providers: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
    MpesaProvider,
    StripeConnectProvider,
    MpesaMerchantProvider,
    CompanyOnboardingService,
    UnifiedPaymentService,
  ],
  exports: [
    PaymentsService,
    PaymentProviderService,
    StripeProvider,
    MpesaProvider,
    StripeConnectProvider,
    MpesaMerchantProvider,
    CompanyOnboardingService,
    UnifiedPaymentService,
  ],
})
export class PaymentsModule {} 