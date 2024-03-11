import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { MangaService } from './manga.service';
import { MangaInterface } from './manga.interface';

@Controller('/mangas')
export class MangaController {
    constructor(private readonly mangaService: MangaService) { }

    @Get()
    async findAll() {
        return this.mangaService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.mangaService.findOne(id);
    }

    @Post()
    async create(@Body() createMangaData: MangaInterface): Promise<MangaInterface> {
        return this.mangaService.create(createMangaData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateMangaData: any) {
        return this.mangaService.update(id, updateMangaData);
    }

    @Delete(':id')
async delete(@Param('id') id: string): Promise<boolean> {
    const manga = await this.mangaService.findOne(id);
    if (!manga) {
        throw new NotFoundException(`Manga with ID ${id} not found`);
    }
    return this.mangaService.delete(manga);
}

}