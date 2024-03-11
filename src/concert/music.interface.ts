export class MusicInterface {
    public readonly id: number;
    public readonly groupe: string;
    public readonly name: string;
    public readonly date: Date;

    constructor(id: number, groupe: string, name: string, date: Date) {
        this.id = id;
        this.groupe = groupe;
        this.name = name;
        this.date = date;
    }
  
       
}