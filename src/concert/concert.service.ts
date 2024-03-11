import { Injectable } from '@nestjs/common';
import { ConcertInterface } from './concert.interface';
import { MusicInterface } from './music.interface';

@Injectable()
export class ConcertService {
    
    constructor(private options: Record<string, ConcertInterface[]>) {}

    private static concerts: ConcertInterface[] = [
        new ConcertInterface(1, 'baby metal', [new MusicInterface(1, 'baby metal', 'metalli', new Date())], new Date()),
        new ConcertInterface(2, 'NMIXX', [new MusicInterface(2, 'NMIXX', 'O.O', new Date())], new Date()),
    ];

    getVal(key: string): ConcertInterface[] {
        return this.options[key];
    }

    getValID(key:string,id: number): ConcertInterface {
        let concerts = [...this.options[key]];
        const concert = concerts.filter(c => {
            if(c.id == id){
                return true;
            }
        })
        return concert[0];
    }

    public static getConcerts = () => { return ConcertService.concerts }

    public static setConcerts = (concerts: ConcertInterface[]) => { ConcertService.concerts = concerts }

    public static addConcert = (concert: ConcertInterface) => { ConcertService.concerts.push(concert) }

}