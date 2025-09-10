import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as twilio from 'twilio';

@Injectable()
export class SmsService {
  private client: twilio.Twilio;
  private verifyServiceSid: string;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    this.verifyServiceSid = this.configService.get<string>('TWILIO_VERIFY_SERVICE_SID');
    
    if (!accountSid || !authToken || !this.verifyServiceSid) {
      throw new Error('Twilio credentials not configured. Please set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_VERIFY_SERVICE_SID');
    }
    
    this.client = twilio(accountSid, authToken);
  }

  async sendVerificationCode(phoneNumber: string): Promise<{ success: boolean; message: string }> {
    try {
      console.log(`Sending verification code to: ${phoneNumber}`);
      console.log(`Using Verify Service SID: ${this.verifyServiceSid}`);
      
      // Use Twilio Verify service to send verification code
      const verification = await this.client.verify.v2
        .services(this.verifyServiceSid)
        .verifications
        .create({
          to: phoneNumber,
          channel: 'sms'
        });

      console.log(`Verification sent successfully. Status: ${verification.status}`);
      
      return {
        success: true,
        message: 'Verification code sent successfully',
      };
    } catch (error) {
      console.error('Twilio Verify error:', error);
      return {
        success: false,
        message: `Failed to send verification code: ${error.message}`,
      };
    }
  }

  async verifyCode(phoneNumber: string, code: string): Promise<{ success: boolean; message: string }> {
    try {
      console.log(`Verifying code ${code} for phone: ${phoneNumber}`);
      
      // Use Twilio Verify service to verify the code
      const verificationCheck = await this.client.verify.v2
        .services(this.verifyServiceSid)
        .verificationChecks
        .create({
          to: phoneNumber,
          code: code
        });

      console.log(`Verification check result. Status: ${verificationCheck.status}`);
      
      if (verificationCheck.status === 'approved') {
        return {
          success: true,
          message: 'Code verified successfully',
        };
      } else {
        return {
          success: false,
          message: 'Invalid verification code',
        };
      }
    } catch (error) {
      console.error('Twilio Verify check error:', error);
      return {
        success: false,
        message: `Verification failed: ${error.message}`,
      };
    }
  }
}
