import { Controller, Post, Get, Body, Param, Headers, Logger, BadRequestException } from '@nestjs/common';
import { PaystackProvider } from '../providers/paystack.provider';
import { PaymentProviderService } from '../services/payment-provider.service';
import { PaymentProviderType } from '../interfaces/payment-provider.interface';
import { ConfigService } from '@nestjs/config';

export interface PaystackInitializeRequest {
  amount: number;
  currency: string;
  email: string;
  bookingId: string;
  companyId: number;
  userId: string;
  description?: string;
  metadata?: any;
}

export interface PaystackVerifyRequest {
  reference: string;
}

@Controller('payments/paystack')
export class PaystackController {
  private readonly logger = new Logger(PaystackController.name);

  constructor(
    private paystackProvider: PaystackProvider,
    private paymentProviderService: PaymentProviderService,
    private configService: ConfigService,
  ) {}

  /**
   * Initialize a Paystack payment
   * POST /payments/paystack/initialize
   */
  @Post('initialize')
  async initializePayment(@Body() request: PaystackInitializeRequest) {
    try {
      this.logger.log(`Initializing Paystack payment for booking: ${request.bookingId}`);

      const paymentRequest = {
        amount: request.amount,
        currency: request.currency,
        bookingId: request.bookingId,
        userId: request.userId,
        description: request.description || `Payment for booking ${request.bookingId}`,
        metadata: {
          ...request.metadata,
          customerEmail: request.email,
          companyId: request.companyId,
        },
      };

      const result = await this.paymentProviderService.createPaymentIntent(
        paymentRequest,
        PaymentProviderType.PAYSTACK,
      );

      return {
        success: true,
        data: result,
        message: 'Payment initialized successfully',
      };
    } catch (error) {
      this.logger.error(`Paystack payment initialization failed: ${error.message}`, error.stack);
      throw new BadRequestException(`Payment initialization failed: ${error.message}`);
    }
  }

  /**
   * Verify a Paystack payment
   * GET /payments/paystack/verify/:reference
   */
  @Get('verify/:reference')
  async verifyPayment(@Param('reference') reference: string) {
    try {
      this.logger.log(`Verifying Paystack payment: ${reference}`);

      const result = await this.paymentProviderService.getPaymentStatus(
        reference,
        PaymentProviderType.PAYSTACK,
      );

      // Log the verification result
      this.logger.log(`Payment verification result: ${JSON.stringify({
        reference,
        status: result.status,
        amount: result.amount,
        currency: result.currency
      })}`);

      return {
        success: true,
        data: result,
        message: result.status === 'succeeded' 
          ? 'Payment verification completed successfully' 
          : `Payment verification completed with status: ${result.status}`,
      };
    } catch (error) {
      this.logger.error(`Paystack payment verification failed: ${error.message}`, error.stack);
      throw new BadRequestException(`Payment verification failed: ${error.message}`);
    }
  }

  /**
   * Handle Paystack webhooks
   * POST /payments/paystack/webhook
   */
  @Post('webhook')
  async handleWebhook(
    @Body() event: any,
    @Headers('x-paystack-signature') signature: string,
  ) {
    try {
      this.logger.log(`Received Paystack webhook: ${event.event}`);

      // Verify webhook signature
      if (!this.verifyWebhookSignature(event, signature)) {
        this.logger.error('Invalid Paystack webhook signature');
        throw new BadRequestException('Invalid webhook signature');
      }

      // Process webhook event
      const processed = await this.paystackProvider.handleWebhook(event);

      if (processed) {
        return { success: true, message: 'Webhook processed successfully' };
      } else {
        throw new BadRequestException('Webhook processing failed');
      }
    } catch (error) {
      this.logger.error(`Paystack webhook processing failed: ${error.message}`, error.stack);
      throw new BadRequestException(`Webhook processing failed: ${error.message}`);
    }
  }

  /**
   * Create a Paystack subaccount for a vendor
   * POST /payments/paystack/subaccount
   */
  @Post('subaccount')
  async createSubaccount(@Body() request: {
    companyId: number;
    companyName: string;
    email: string;
    phone: string;
    bankCode: string;
    accountNumber: string;
    commissionRate?: number;
  }) {
    try {
      this.logger.log(`Creating Paystack subaccount for company: ${request.companyId}`);

      const subaccountData = {
        companyName: request.companyName,
        email: request.email,
        mobileNumber: request.phone,
        bankCode: request.bankCode,
        accountNumber: request.accountNumber,
        commissionRate: request.commissionRate || 0,
      };

      const result = await this.paystackProvider.createVendorSubaccount(
        request.companyId,
        subaccountData,
      );

      return {
        success: true,
        data: result,
        message: 'Subaccount created successfully',
      };
    } catch (error) {
      this.logger.error(`Paystack subaccount creation failed: ${error.message}`, error.stack);
      throw new BadRequestException(`Subaccount creation failed: ${error.message}`);
    }
  }

  /**
   * Get supported currencies, payment methods, and public key
   * GET /payments/paystack/info
   */
  @Get('info')
  async getProviderInfo() {
    try {
      const publicKey = this.configService.get<string>('PAYSTACK_PUBLIC_KEY');
      
      if (!publicKey) {
        throw new BadRequestException('Paystack public key not configured');
      }

      return {
        success: true,
        data: {
          name: this.paystackProvider.name,
          publicKey: publicKey,
          supportedCurrencies: this.paystackProvider.supportedCurrencies,
          supportedPaymentMethods: this.paystackProvider.supportedPaymentMethods,
        },
        message: 'Paystack provider information retrieved',
      };
    } catch (error) {
      this.logger.error(`Failed to get provider info: ${error.message}`, error.stack);
      throw new BadRequestException(`Failed to get provider info: ${error.message}`);
    }
  }

  /**
   * Verify Paystack webhook signature
   */
  private verifyWebhookSignature(event: any, signature: string): boolean {
    // Implement proper Paystack webhook signature verification
    // This is a placeholder - implement proper HMAC verification
    const expectedSignature = process.env.PAYSTACK_WEBHOOK_SECRET;
    
    if (!expectedSignature) {
      this.logger.warn('PAYSTACK_WEBHOOK_SECRET not configured');
      return false;
    }

    // TODO: Implement proper HMAC SHA512 verification
    // For now, return true for development
    return true;
  }
}
