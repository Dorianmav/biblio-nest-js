import { Module } from "@nestjs/common";
import { MangaService } from "./manga.service";

@Module({
    controllers: [],
    providers: [MangaService],
    exports: [MangaService]
})
export class MangaModule { }