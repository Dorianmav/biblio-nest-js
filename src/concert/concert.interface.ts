import { MusicInterface } from "./music.interface";

export class ConcertInterface {
    public readonly id: number;
    public readonly name: string;
    public readonly trackList: MusicInterface[];
    public readonly date: Date;

  
    constructor(id: number, name: string, trackList: MusicInterface[], date: Date) {
        this.id = id;
        this.name = name;
        this.trackList = trackList;
        this.date = date;
    }
       
}