import { MangaService } from './manga.service';
import { MangaInterface } from './manga.interface';
export declare class MangaController {
    private readonly mangaService;
    constructor(mangaService: MangaService);
    findAll(): Promise<MangaInterface[]>;
    findOne(id: string): Promise<MangaInterface>;
    create(createMangaData: MangaInterface): Promise<MangaInterface>;
    update(id: string, updateMangaData: any): Promise<MangaInterface>;
    delete(id: string): Promise<boolean>;
}
