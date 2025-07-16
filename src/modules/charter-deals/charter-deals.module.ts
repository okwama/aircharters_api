import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharterDealsController } from './charter-deals.controller';
import { CharterDealsService } from './charter-deals.service';
import { CharterDeal } from '../../common/entities/charter-deal.entity';
import { ChartersCompany } from '../../common/entities/charters-company.entity';
import { FixedRoute } from '../../common/entities/fixed-route.entity';
import { Aircraft } from '../../common/entities/aircraft.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CharterDeal,
      ChartersCompany,
      FixedRoute,
      Aircraft,
    ]),
  ],
  controllers: [CharterDealsController],
  providers: [CharterDealsService],
  exports: [CharterDealsService],
})
export class CharterDealsModule {} 