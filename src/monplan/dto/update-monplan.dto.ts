import { PartialType } from '@nestjs/mapped-types';
import { CreateMonPlanDto } from './create-monplan.dto';

export class UpdateMonPlanDto extends PartialType(CreateMonPlanDto) {
  public id: string;
  public Name: string;
  public Sex: string;
  public Age: string;
  public Price: string;
  public arendTime: string;
}
