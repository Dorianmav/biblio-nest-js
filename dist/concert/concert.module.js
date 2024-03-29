"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConcertModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcertModule = void 0;
const common_1 = require("@nestjs/common");
const concert_service_1 = require("./concert.service");
let ConcertModule = ConcertModule_1 = class ConcertModule {
    static register(options) {
        return {
            module: ConcertModule_1,
            providers: [
                {
                    provide: concert_service_1.ConcertService,
                    useValue: new concert_service_1.ConcertService(options),
                },
            ],
            exports: [concert_service_1.ConcertService],
        };
    }
};
exports.ConcertModule = ConcertModule;
exports.ConcertModule = ConcertModule = ConcertModule_1 = __decorate([
    (0, common_1.Module)({})
], ConcertModule);
//# sourceMappingURL=concert.module.js.map