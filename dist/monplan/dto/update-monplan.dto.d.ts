import { CreateMonPlanDto } from './create-monplan.dto';
declare const UpdateMonPlanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMonPlanDto>>;
export declare class UpdateMonPlanDto extends UpdateMonPlanDto_base {
    id: string;
    Name: string;
    Sex: string;
    Age: string;
    Price: string;
    arendTime: string;
}
export {};
