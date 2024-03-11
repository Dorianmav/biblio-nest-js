export class MangaInterface {
    public readonly id: number;
    public readonly name: string;
    public readonly author: string;
    public readonly synopsis: string;
    
    constructor(id: number, name: string, author: string, synopsis: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.synopsis = synopsis;
    }
}