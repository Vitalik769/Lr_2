"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_monplan_dto_1 = require("./create-monplan.dto");
class UpdateMonPlanDto extends (0, mapped_types_1.PartialType)(create_monplan_dto_1.CreateMonPlanDto) {
}
exports.UpdateMonPlanDto = UpdateMonPlanDto;
//# sourceMappingURL=update-monplan.dto.js.map