import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
} from '@nestjs/common';
import { MonPlanService } from './mon-shop.service';
import { CreateMonPlanDto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto } from './dto/update-monplan.dto';
import { MonsExceptionFilter } from './filter/note-exception/mon-exception.filter';

@Controller('monplan')
@UseFilters(new MonsExceptionFilter())
export class MonPlanController {
  constructor(private readonly MonPlanService: MonPlanService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() mon: CreateMonPlanDto) {
    return this.MonPlanService.create(mon);
  }

  @Get()
  findAll() {
    return this.MonPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MonPlanService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMonPlanDto: UpdateMonPlanDto) {
    return this.MonPlanService.update(id, updateMonPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MonPlanService.remove(id);
  }
}
