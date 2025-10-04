import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private mailtrapApiKey: string;
  private mailtrapBaseUrl = 'https://send.api.mailtrap.io/api/send';
  private infobipApiKey: string;
  private infobipBaseUrl: string;

  constructor(private configService: ConfigService) {
    this.mailtrapApiKey = this.configService.get<string>('MAILTRAP_API_KEY');
    this.infobipApiKey = this.configService.get<string>('INFOBIP_API_KEY');
    this.infobipBaseUrl = this.configService.get<string>('INFOBIP_BASE_URL') || 'https://rpdjky.api.infobip.com';
    
    if (!this.mailtrapApiKey && !this.infobipApiKey) {
      this.logger.warn('Neither MAILTRAP_API_KEY nor INFOBIP_API_KEY configured. Email service will be disabled.');
      return;
    }
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
    if (!this.mailtrapApiKey && !this.infobipApiKey) {
      this.logger.error('No email service configured. Check MAILTRAP_API_KEY or INFOBIP_API_KEY configuration.');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const emailHtml = this.generateBookingConfirmationHtml(bookingData);
      return await this.sendEmailWithFallback(
        to,
        `Booking Confirmed - ${bookingData.referenceNumber}`,
        emailHtml
      );
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
    if (!this.mailtrapApiKey) {
      this.logger.error('Mailtrap not initialized. Check MAILTRAP_API_KEY configuration.');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const emailHtml = this.generatePaymentConfirmationHtml(paymentData);
      
      const result = await axios.post(this.mailtrapBaseUrl, {
        from: {
          email: 'noreply@aircharters.co.ke',
          name: 'Air Charters'
        },
        to: [
          {
            email: to
          }
        ],
        subject: `Payment Confirmed - ${paymentData.referenceNumber}`,
        html: emailHtml,
      }, {
        headers: {
          'Authorization': `Bearer ${this.mailtrapApiKey}`,
          'Content-Type': 'application/json'
        }
      });

      this.logger.log(`Payment confirmation email sent to ${to}. Message ID: ${result.data?.message_id}`);
      
      return { 
        success: true, 
        messageId: result.data?.message_id 
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

  async sendInquiryNotificationEmail(
    to: string,
    inquiryData: {
      referenceNumber: string;
      customerName: string;
      customerEmail: string;
      aircraftName: string;
      aircraftType: string;
      origin: string;
      destination: string;
      departureDate: string;
      returnDate?: string;
      requestedSeats: number;
      specialRequirements?: string;
      userNotes?: string;
      createdAt: string;
      passengers: Array<{
        firstName: string;
        lastName: string;
        age: number;
        nationality: string;
        idPassportNumber: string;
      }>;
    }
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.mailtrapApiKey && !this.infobipApiKey) {
      this.logger.error('No email service configured. Check MAILTRAP_API_KEY or INFOBIP_API_KEY configuration.');
      return { success: false, error: 'Email service not configured' };
    }

    try {
      const emailHtml = this.generateInquiryNotificationHtml(inquiryData);
      return await this.sendEmailWithFallback(
        to,
        `New Charter Inquiry - ${inquiryData.referenceNumber}`,
        emailHtml
      );
    } catch (error) {
      this.logger.error(`Failed to send inquiry notification email to ${to}:`, error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  private generateInquiryNotificationHtml(inquiryData: {
    referenceNumber: string;
    customerName: string;
    customerEmail: string;
    aircraftName: string;
    aircraftType: string;
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    requestedSeats: number;
    specialRequirements?: string;
    userNotes?: string;
    createdAt: string;
    passengers: Array<{
      firstName: string;
      lastName: string;
      age: number;
      nationality: string;
      idPassportNumber: string;
    }>;
  }): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Charter Inquiry</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .logo { max-width: 200px; height: auto; margin-bottom: 15px; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .inquiry-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #eee; }
          .detail-label { font-weight: bold; color: #666; min-width: 150px; }
          .detail-value { color: #333; text-align: right; }
          .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          .alert-icon { font-size: 48px; margin-bottom: 10px; }
          .signature { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; }
        </style>
      </head>
      <body>
        <div class="header">
          <!-- Air Charters Logo - Replace with actual logo URL -->
          <img src="https://ik.imagekit.io/bja2qwwdjjy/Aircharter/ChatGPT%20Image%20Oct%204,%202025,%2011_42_24%20AM_uc8c6PdHH-.png?updatedAt=1759567405970" alt="Air Charters Logo" class="logo">
          <div class="alert-icon">✈️</div>
          <h1>New Charter Inquiry</h1>
          <p>A customer has submitted a charter request</p>
        </div>
        
        <div class="content">
          <p>You have received a new charter inquiry. Please review the details below:</p>
          
          <div class="inquiry-details">
            <div class="detail-row">
              <span class="detail-label">Inquiry Reference:</span>
              <span class="detail-value">${inquiryData.referenceNumber}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Customer Name:</span>
              <span class="detail-value">${inquiryData.customerName}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Customer Email:</span>
              <span class="detail-value">${inquiryData.customerEmail}</span>
            </div>
            ${inquiryData.passengers && inquiryData.passengers.length > 0 ? `
            <div class="detail-row">
              <span class="detail-label">Passengers:</span>
              <span class="detail-value">${inquiryData.passengers.length} passenger(s)</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Aircraft:</span>
              <span class="detail-value">${inquiryData.aircraftName} (${inquiryData.aircraftType})</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Route:</span>
              <span class="detail-value">${inquiryData.origin} → ${inquiryData.destination}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Departure Date:</span>
              <span class="detail-value">${inquiryData.departureDate}</span>
            </div>
            ${inquiryData.returnDate ? `
            <div class="detail-row">
              <span class="detail-label">Return Date:</span>
              <span class="detail-value">${inquiryData.returnDate}</span>
            </div>
            ` : ''}
            <div class="detail-row">
              <span class="detail-label">Requested Seats:</span>
              <span class="detail-value">${inquiryData.requestedSeats}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Submitted:</span>
              <span class="detail-value">${inquiryData.createdAt}</span>
            </div>
            ${inquiryData.specialRequirements ? `
            <div class="detail-row">
              <span class="detail-label">Special Requirements:</span>
              <span class="detail-value">${inquiryData.specialRequirements}</span>
            </div>
            ` : ''}
            ${inquiryData.userNotes ? `
            <div class="detail-row">
              <span class="detail-label">Customer Notes:</span>
              <span class="detail-value">${inquiryData.userNotes}</span>
            </div>
            ` : ''}
          </div>
          
          ${inquiryData.passengers && inquiryData.passengers.length > 0 ? `
          <div class="inquiry-details">
            <h3 style="margin-top: 0; color: #333; border-bottom: 2px solid #1e3c72; padding-bottom: 10px;">👥 Passenger Details</h3>
            ${inquiryData.passengers.map((passenger, index) => `
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #1e3c72;">
              <div class="detail-row">
                <span class="detail-label">Passenger ${index + 1}:</span>
                <span class="detail-value">${passenger.firstName} ${passenger.lastName}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Age:</span>
                <span class="detail-value">${passenger.age} years</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Nationality:</span>
                <span class="detail-value">${passenger.nationality}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Passport/ID:</span>
                <span class="detail-value">${passenger.idPassportNumber}</span>
              </div>
            </div>
            `).join('')}
          </div>
          ` : ''}
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
            <h3 style="margin-top: 0; color: #856404;">📋 Action Required</h3>
            <p style="margin: 10px 0; color: #856404;">
              Please review this inquiry and provide pricing information to the customer as soon as possible.
            </p>
          </div>
          
          <div class="signature">
            <p><strong>Best regards,</strong><br>
            <strong>The Air Charters Team</strong></p>
            <p style="font-size: 12px; color: #666;">
              Email: support@aircharterss.com<br>
              Phone: +254 700 000 000<br>
              Website: www.aircharterss.com
            </p>
          </div>
        </div>
        
        <div class="footer">
          <p>This is an automated notification. Please do not reply to this message.</p>
          <p>© 2024 Air Charters. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;
  }

  private async sendEmailWithFallback(
    to: string,
    subject: string,
    htmlContent: string,
    fromEmail: string = 'noreply@aircharters.co.ke',
    fromName: string = 'Air Charters'
  ): Promise<{ success: boolean; messageId?: string; error?: string }> {
    // Try Mailtrap first
    if (this.mailtrapApiKey) {
      try {
        const result = await axios.post(this.mailtrapBaseUrl, {
          from: {
            email: fromEmail,
            name: fromName
          },
          to: [{ email: to }],
          subject: subject,
          html: htmlContent,
        }, {
          headers: {
            'Authorization': `Bearer ${this.mailtrapApiKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.logger.log(`Email sent successfully via Mailtrap to ${to}. Message ID: ${result.data?.message_id}`);
        return { 
          success: true, 
          messageId: result.data?.message_id 
        };
      } catch (error) {
        this.logger.warn(`Mailtrap email failed, trying Infobip fallback: ${error.message}`);
      }
    }

    // Fallback to Infobip
    if (this.infobipApiKey) {
      try {
        const result = await axios.post(`${this.infobipBaseUrl}/email/3/send`, {
          from: fromEmail,
          to: to,
          subject: subject,
          html: htmlContent
        }, {
          headers: {
            'Authorization': `App ${this.infobipApiKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.logger.log(`Email sent successfully via Infobip to ${to}. Message ID: ${result.data?.messages?.[0]?.messageId}`);
        return { 
          success: true, 
          messageId: result.data?.messages?.[0]?.messageId 
        };
      } catch (error) {
        this.logger.error(`Infobip email also failed: ${error.message}`);
        return { 
          success: false, 
          error: `Both Mailtrap and Infobip failed: ${error.message}` 
        };
      }
    }

    return { 
      success: false, 
      error: 'No email service configured' 
    };
  }
}
