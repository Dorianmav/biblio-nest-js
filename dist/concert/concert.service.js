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
var ConcertService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcertService = void 0;
const common_1 = require("@nestjs/common");
const concert_interface_1 = require("./concert.interface");
const music_interface_1 = require("./music.interface");
let ConcertService = ConcertService_1 = class ConcertService {
    constructor(options) {
        this.options = options;
    }
    getVal(key) {
        return this.options[key];
    }
    getValID(key, id) {
        let concerts = [...this.options[key]];
        const concert = concerts.filter(c => {
            if (c.id == id) {
                return true;
            }
        });
        return concert[0];
    }
};
exports.ConcertService = ConcertService;
ConcertService.concerts = [
    new concert_interface_1.ConcertInterface(1, 'baby metal', [new music_interface_1.MusicInterface(1, 'baby metal', 'metalli', new Date())], new Date()),
    new concert_interface_1.ConcertInterface(2, 'NMIXX', [new music_interface_1.MusicInterface(2, 'NMIXX', 'O.O', new Date())], new Date()),
];
ConcertService.getConcerts = () => { return ConcertService_1.concerts; };
ConcertService.setConcerts = (concerts) => { ConcertService_1.concerts = concerts; };
ConcertService.addConcert = (concert) => { ConcertService_1.concerts.push(concert); };
exports.ConcertService = ConcertService = ConcertService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ConcertService);
//# sourceMappingURL=concert.service.js.map