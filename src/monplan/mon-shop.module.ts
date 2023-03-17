import { Module } from '@nestjs/common';
import { MonPlanService } from './mon-shop.service';
import { MonPlanController } from './mon-shop.controller';

@Module({
  controllers: [MonPlanController],
  providers: [MonPlanService],
})
export class MonPlanModule {}
