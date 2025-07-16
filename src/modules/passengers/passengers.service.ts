import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Passenger } from '../../common/entities/passenger.entity';
import { CreatePassengerDto, UpdatePassengerDto } from './dto';

@Injectable()
export class PassengersService {
  constructor(
    @InjectRepository(Passenger)
    private passengerRepository: Repository<Passenger>,
  ) {}

  async create(createPassengerDto: CreatePassengerDto): Promise<Passenger> {
    const passenger = this.passengerRepository.create(createPassengerDto);
    return await this.passengerRepository.save(passenger);
  }

  async findAll(): Promise<Passenger[]> {
    return await this.passengerRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Passenger> {
    const passenger = await this.passengerRepository.findOne({
      where: { id },
    });
    
    if (!passenger) {
      throw new NotFoundException(`Passenger with ID ${id} not found`);
    }
    
    return passenger;
  }

  async findByBookingId(bookingId: string): Promise<Passenger[]> {
    return await this.passengerRepository.find({
      where: { bookingId },
      order: { createdAt: 'ASC' },
    });
  }

  async update(id: number, updatePassengerDto: UpdatePassengerDto): Promise<Passenger> {
    const passenger = await this.findOne(id);
    
    Object.assign(passenger, updatePassengerDto);
    
    return await this.passengerRepository.save(passenger);
  }

  async remove(id: number): Promise<void> {
    const passenger = await this.findOne(id);
    await this.passengerRepository.remove(passenger);
  }

  async removeByBookingId(bookingId: string): Promise<void> {
    await this.passengerRepository.delete({ bookingId });
  }

  async countByBookingId(bookingId: string): Promise<number> {
    return await this.passengerRepository.count({
      where: { bookingId },
    });
  }
} 