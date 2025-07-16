import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '@/common/entities/user.entity';
import { UserProfile, SeatPreference } from '@/common/entities/user-profile.entity';
import { WalletTransaction, WalletTransactionType, WalletTransactionStatus } from '@/common/entities/wallet-transaction.entity';
import { UpdateUserProfileDto, UpdateUserPreferencesDto } from './dto';
import { UserProfileService } from './services/user-profile.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
    @InjectRepository(WalletTransaction)
    private walletTransactionRepository: Repository<WalletTransaction>,
    private readonly userProfileService: UserProfileService,
  ) {}

  async getUserById(userId: string): Promise<User | null> {
    return this.userProfileService.getUserById(userId);
  }

  async updateUserProfile(userId: string, updateProfileDto: UpdateUserProfileDto): Promise<User> {
    return this.userProfileService.updateUserProfile(userId, updateProfileDto);
  }

  async getUserPreferences(userId: string): Promise<any> {
    return this.userProfileService.getUserPreferences(userId);
  }

  async updateUserPreferences(userId: string, updatePreferencesDto: UpdateUserPreferencesDto): Promise<any> {
    return this.userProfileService.updateUserPreferences(userId, updatePreferencesDto);
  }

  async getUserWalletInfo(userId: string): Promise<any> {
    const user = await this.getUserById(userId);
    
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Get recent transactions
    const recentTransactions = await this.walletTransactionRepository.find({
      where: { userId: userId },
      order: { createdAt: 'DESC' },
      take: 5,
    });

    return {
      balance: user.wallet_balance,
      loyaltyPoints: user.loyalty_points,
      loyaltyTier: user.loyalty_tier,
      currency: user.currency || 'USD',
      lastTransaction: user.updated_at,
      recentTransactions: recentTransactions.map(tx => ({
        id: tx.id,
        type: tx.transactionType,
        amount: tx.amount,
        pointsAmount: tx.pointsAmount,
        description: tx.description,
        status: tx.status,
        createdAt: tx.createdAt,
      })),
    };
  }

  async createWalletTransaction(
    userId: string,
    transactionType: WalletTransactionType,
    amount: number,
    pointsAmount: number,
    description: string,
    bookingId?: string,
    metadata?: any,
  ): Promise<WalletTransaction> {
    const user = await this.getUserById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const transaction = this.walletTransactionRepository.create({
      id: `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      bookingId,
      transactionType,
      amount,
      pointsAmount,
      description,
      balanceBefore: user.wallet_balance,
      balanceAfter: user.wallet_balance + amount,
      pointsBefore: user.loyalty_points,
      pointsAfter: user.loyalty_points + pointsAmount,
      status: WalletTransactionStatus.COMPLETED,
      metadata,
      completedAt: new Date(),
    });

    // Update user balance and points
    user.wallet_balance = transaction.balanceAfter;
    user.loyalty_points = transaction.pointsAfter;
    await this.userRepository.save(user);

    return await this.walletTransactionRepository.save(transaction);
  }
} 