import { MusicInterface } from "./music.interface";
export declare class ConcertInterface {
    readonly id: number;
    readonly name: string;
    readonly trackList: MusicInterface[];
    readonly date: Date;
    constructor(id: number, name: string, trackList: MusicInterface[], date: Date);
}
