import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonPlanModule } from './monplan/mon-shop.module';

@Module({
  imports: [MonPlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
