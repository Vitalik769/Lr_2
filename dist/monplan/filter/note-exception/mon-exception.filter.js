"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const mon_exception_1 = require("../../exception/note.exception/mon.exception");
let MonsExceptionFilter = class MonsExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.status(500).json({
            timestamp: new Date().toISOString(),
            msg: exception.what(),
        });
    }
};
MonsExceptionFilter = __decorate([
    (0, common_1.Catch)(mon_exception_1.MonsException)
], MonsExceptionFilter);
exports.MonsExceptionFilter = MonsExceptionFilter;
//# sourceMappingURL=mon-exception.filter.js.map