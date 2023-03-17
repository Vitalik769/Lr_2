"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonsException = void 0;
class MonsException extends Error {
    constructor(message = ``) {
        super();
        this.message = message;
    }
    what() {
        return this.message;
    }
}
exports.MonsException = MonsException;
//# sourceMappingURL=mon.exception.js.map