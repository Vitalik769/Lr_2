"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonPlanController = void 0;
const common_1 = require("@nestjs/common");
const mon_shop_service_1 = require("./mon-shop.service");
const create_monplan_dto_1 = require("./dto/create-monplan.dto");
const update_monplan_dto_1 = require("./dto/update-monplan.dto");
const mon_exception_filter_1 = require("./filter/note-exception/mon-exception.filter");
let MonPlanController = class MonPlanController {
    constructor(MonPlanService) {
        this.MonPlanService = MonPlanService;
    }
    create(mon) {
        return this.MonPlanService.create(mon);
    }
    findAll() {
        return this.MonPlanService.findAll();
    }
    findOne(id) {
        return this.MonPlanService.findOne(id);
    }
    update(id, updateMonPlanDto) {
        return this.MonPlanService.update(id, updateMonPlanDto);
    }
    remove(id) {
        return this.MonPlanService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Header)('Cache-Control', 'none'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_monplan_dto_1.CreateMonPlanDto]),
    __metadata("design:returntype", void 0)
], MonPlanController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MonPlanController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonPlanController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_monplan_dto_1.UpdateMonPlanDto]),
    __metadata("design:returntype", void 0)
], MonPlanController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MonPlanController.prototype, "remove", null);
MonPlanController = __decorate([
    (0, common_1.Controller)('monplan'),
    (0, common_1.UseFilters)(new mon_exception_filter_1.MonsExceptionFilter()),
    __metadata("design:paramtypes", [mon_shop_service_1.MonPlanService])
], MonPlanController);
exports.MonPlanController = MonPlanController;
//# sourceMappingURL=mon-shop.controller.js.map