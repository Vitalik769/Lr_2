import { MonPlanService } from './mon-shop.service';
import { CreateMonPlanDto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto } from './dto/update-monplan.dto';
export declare class MonPlanController {
    private readonly MonPlanService;
    constructor(MonPlanService: MonPlanService);
    create(mon: CreateMonPlanDto): CreateMonPlanDto;
    findAll(): CreateMonPlanDto[];
    findOne(id: string): CreateMonPlanDto;
    update(id: string, updateMonPlanDto: UpdateMonPlanDto): void;
    remove(id: string): void;
}
