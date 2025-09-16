import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private resend: Resend;

  constructor(private configService: ConfigService) {
    const apiKey = this.configService.get<string>('RESEND_API_KEY');
    
    if (!apiKey) {
      this.logger.warn('RESEND_API_KEY not configured. Email service will be disabled.');
      return;
    }

    this.resend = new Resend(apiKey);
  }

  async sendBookingConfirmationEmail(
    to: string,
    bookingData: {
      referenceNumber: string;
      passengerName: string;
      departure: string;
      destination: string;
      date: string;
      time: string;
      aircraft: string;
      company: string;
      totalAmount: number;
    }
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.resend) {
      this.logger.error('Resend not initialized. Check RESEND_API_KEY configuration.');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const emailHtml = this.generateBookingConfirmationHtml(bookingData);
      
      const result = await this.resend.emails.send({
        from: 'Air Charters <noreply@aircharters.com>', // You'll need to verify this domain
        to: [to],
        subject: `Booking Confirmed - ${bookingData.referenceNumber}`,
        html: emailHtml,
      });

      this.logger.log(`Booking confirmation email sent to ${to}. Message ID: ${result.data?.id}`);
      
      return { 
        success: true, 
        messageId: result.data?.id 
      };
    } catch (error) {
      this.logger.error(`Failed to send booking confirmation email to ${to}:`, error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  async sendPaymentConfirmationEmail(
    to: string,
    paymentData: {
      referenceNumber: string;
      amount: number;
      paymentMethod: string;
      transactionId: string;
    }
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.resend) {
      this.logger.error('Resend not initialized. Check RESEND_API_KEY configuration.');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const emailHtml = this.generatePaymentConfirmationHtml(paymentData);
      
      const result = await this.resend.emails.send({
        from: 'Air Charters <noreply@aircharters.com>',
        to: [to],
        subject: `Payment Confirmed - ${paymentData.referenceNumber}`,
        html: emailHtml,
      });

      this.logger.log(`Payment confirmation email sent to ${to}. Message ID: ${result.data?.id}`);
      
      return { 
        success: true, 
        messageId: result.data?.id 
      };
    } catch (error) {
      this.logger.error(`Failed to send payment confirmation email to ${to}:`, error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  private generateBookingConfirmationHtml(bookingData: {
    referenceNumber: string;
    passengerName: string;
    departure: string;
    destination: string;
    date: string;
    time: string;
    aircraft: string;
    company: string;
    totalAmount: number;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Booking Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; color: #666; }
          .detail-value { color: #333; }
          .total { background: #667eea; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .success-icon { font-size: 48px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="success-icon">✈️</div>
          <h1>Booking Confirmed!</h1>
          <p>Your flight has been successfully booked</p>
        </div>
        
        <div class="content">
          <p>Dear ${bookingData.passengerName},</p>
          
          <p>Great news! Your flight booking has been confirmed. Here are your booking details:</p>
          
          <div class="booking-details">
            <div class="detail-row">
              <span class="detail-label">Booking Reference:</span>
              <span class="detail-value">${bookingData.referenceNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Route:</span>
              <span class="detail-value">${bookingData.departure} → ${bookingData.destination}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${bookingData.date}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time:</span>
              <span class="detail-value">${bookingData.time}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Aircraft:</span>
              <span class="detail-value">${bookingData.aircraft}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Company:</span>
              <span class="detail-value">${bookingData.company}</span>
            </div>
          </div>
          
          <div class="total">
            Total Amount: $${bookingData.totalAmount.toFixed(2)} USD
          </div>
          
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1976d2;">📋 Important Information</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Please arrive at the airport 30 minutes before departure time</li>
              <li>Bring a valid ID and your booking reference</li>
              <li>Contact us if you need to make any changes</li>
            </ul>
          </div>
          
          <p>Thank you for choosing Air Charters for your travel needs!</p>
          
          <p>Safe travels,<br>
          The Air Charters Team</p>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Please do not reply to this message.</p>
          <p>© 2024 Air Charters. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;
  }

  private generatePaymentConfirmationHtml(paymentData: {
    referenceNumber: string;
    amount: number;
    paymentMethod: string;
    transactionId: string;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Payment Confirmation</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #4caf50 0%, #45a049 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .payment-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; color: #666; }
          .detail-value { color: #333; }
          .total { background: #4caf50; color: white; padding: 15px; border-radius: 8px; text-align: center; font-size: 18px; font-weight: bold; margin: 20px 0; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .success-icon { font-size: 48px; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="success-icon">💳</div>
          <h1>Payment Confirmed!</h1>
          <p>Your payment has been processed successfully</p>
        </div>
        
        <div class="content">
          <p>Your payment has been successfully processed. Here are the payment details:</p>
          
          <div class="payment-details">
            <div class="detail-row">
              <span class="detail-label">Booking Reference:</span>
              <span class="detail-value">${paymentData.referenceNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Transaction ID:</span>
              <span class="detail-value">${paymentData.transactionId}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Method:</span>
              <span class="detail-value">${paymentData.paymentMethod}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Amount:</span>
              <span class="detail-value">$${paymentData.amount.toFixed(2)} USD</span>
            </div>
          </div>
          
          <div class="total">
            Payment Successful ✅
          </div>
          
          <p>Your booking is now confirmed and you will receive a separate email with your flight details.</p>
          
          <p>Thank you for your payment!</p>
          
          <p>Best regards,<br>
          The Air Charters Team</p>
        </div>
        
        <div class="footer">
          <p>This is an automated email. Please do not reply to this message.</p>
          <p>© 2024 Air Charters. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;
  }
}
