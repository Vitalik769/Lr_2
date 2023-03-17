import { CreateMonPlanDto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto } from './dto/update-monplan.dto';
export declare class MonPlanService {
    private mons;
    create(createMonDto: CreateMonPlanDto): CreateMonPlanDto;
    findAll(): CreateMonPlanDto[];
    findOne(id: string): CreateMonPlanDto;
    update(id: string, updateMonPlanDto: UpdateMonPlanDto): void;
    remove(id: string): void;
}
