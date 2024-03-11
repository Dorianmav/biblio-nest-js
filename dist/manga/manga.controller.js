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
exports.MangaController = void 0;
const common_1 = require("@nestjs/common");
const manga_service_1 = require("./manga.service");
const manga_interface_1 = require("./manga.interface");
let MangaController = class MangaController {
    constructor(mangaService) {
        this.mangaService = mangaService;
    }
    async findAll() {
        return this.mangaService.findAll();
    }
    async findOne(id) {
        return this.mangaService.findOne(id);
    }
    async create(createMangaData) {
        return this.mangaService.create(createMangaData);
    }
    async update(id, updateMangaData) {
        return this.mangaService.update(id, updateMangaData);
    }
    async delete(id) {
        const manga = await this.mangaService.findOne(id);
        if (!manga) {
            throw new common_1.NotFoundException(`Manga with ID ${id} not found`);
        }
        return this.mangaService.delete(manga);
    }
};
exports.MangaController = MangaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MangaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MangaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [manga_interface_1.MangaInterface]),
    __metadata("design:returntype", Promise)
], MangaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MangaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MangaController.prototype, "delete", null);
exports.MangaController = MangaController = __decorate([
    (0, common_1.Controller)('/mangas'),
    __metadata("design:paramtypes", [manga_service_1.MangaService])
], MangaController);
//# sourceMappingURL=manga.controller.js.map