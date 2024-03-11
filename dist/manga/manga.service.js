"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaService = void 0;
const common_1 = require("@nestjs/common");
let MangaService = class MangaService {
    constructor() {
        this.mangas = [];
    }
    findAll() {
        return this.mangas;
    }
    findOne(id) {
        return this.mangas.find(manga => manga.id.toString() === id);
    }
    create(createMangaData) {
        this.mangas.push(createMangaData);
        return createMangaData;
    }
    update(id, updateMangaData) {
        const mangaIndex = this.mangas.findIndex(manga => manga.id.toString() === id);
        if (mangaIndex === -1) {
            return undefined;
        }
        const updatedManga = { ...this.mangas[mangaIndex], ...updateMangaData };
        this.mangas[mangaIndex] = updatedManga;
        return updatedManga;
    }
    delete(manga) {
        const mangaIndex = this.mangas.findIndex(m => m.id === manga.id);
        if (mangaIndex === -1) {
            return false;
        }
        this.mangas.splice(mangaIndex, 1);
        return true;
    }
};
exports.MangaService = MangaService;
exports.MangaService = MangaService = __decorate([
    (0, common_1.Injectable)()
], MangaService);
//# sourceMappingURL=manga.service.js.map