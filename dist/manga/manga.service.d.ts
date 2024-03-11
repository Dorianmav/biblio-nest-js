import { MangaInterface } from './manga.interface';
export declare class MangaService {
    private mangas;
    findAll(): MangaInterface[];
    findOne(id: string): MangaInterface | undefined;
    create(createMangaData: MangaInterface): MangaInterface;
    update(id: string, updateMangaData: any): MangaInterface | undefined;
    delete(manga: MangaInterface): boolean;
}
