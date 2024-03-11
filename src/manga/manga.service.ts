import { Injectable } from "@nestjs/common";
import { MangaInterface } from './manga.interface';

@Injectable()
export class MangaService {

    private mangas: MangaInterface[] = [];

    findAll(): MangaInterface[] {
        return this.mangas;
    }

    findOne(id: string): MangaInterface | undefined {
        return this.mangas.find(manga => manga.id.toString() === id);
    }

    create(createMangaData: MangaInterface): MangaInterface {
        this.mangas.push(createMangaData);
        return createMangaData;
    }

    update(id: string, updateMangaData: any): MangaInterface | undefined {
        const mangaIndex = this.mangas.findIndex(manga => manga.id.toString() === id);
        if (mangaIndex === -1) {
            return undefined;
        }
        const updatedManga = { ...this.mangas[mangaIndex], ...updateMangaData };
        this.mangas[mangaIndex] = updatedManga;
        return updatedManga;
    }

    delete(manga: MangaInterface): boolean {
        const mangaIndex = this.mangas.findIndex(m => m.id === manga.id);
        if (mangaIndex === -1) {
            return false;
        }
        this.mangas.splice(mangaIndex, 1);
        return true;
    }

}