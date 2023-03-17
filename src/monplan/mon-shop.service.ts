import { Injectable } from '@nestjs/common';
import { CreateMonPlanDto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto } from './dto/update-monplan.dto';
import { MonsException } from '../monplan/exception/note.exception/mon.exception';
import { uuid } from 'uuidv4';

@Injectable()
export class MonPlanService {
  private mons: CreateMonPlanDto[] = [];

  create(createMonDto: CreateMonPlanDto): CreateMonPlanDto {
    createMonDto.id = uuid();
    this.mons.push(createMonDto);
    return createMonDto;
  }

  findAll() {
    if (this.mons.length == 0) {
      throw new MonsException('There are no mons');
    }
    return this.mons;
  }

  findOne(id: string) {
    for (const item of this.mons) {
      if (item.id == id) return item;
      throw new MonsException('Such id does not exist');
    }
  }

  // update(id: string, updateMonPlanDto: UpdateMonPlanDto): void {
  //   const pid: UpdateMonPlanDto[] = this.mons.filter((c) => c.id !== id);

  //   pid.push({
  //     id: id,
  //     ...updateMonPlanDto,
  //   });
  //   this.mons = pid;
  // }
  update(id: string, updateMonPlanDto: UpdateMonPlanDto): void {
    const pid = this.mons.findIndex((p) => p.id == id);
    this.mons[pid] = {
      ...this.mons[pid],
      ...updateMonPlanDto,
    };
  }

  remove(id: string) {
    const result: CreateMonPlanDto[] = this.mons.filter((c) => c.id !== id);
    if (result.length === this.mons.length) {
      throw new MonsException('Such id does now exist');
    }

    this.mons = result;
  }
}
