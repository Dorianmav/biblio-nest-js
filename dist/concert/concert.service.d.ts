import { ConcertInterface } from './concert.interface';
export declare class ConcertService {
    private options;
    constructor(options: Record<string, ConcertInterface[]>);
    private static concerts;
    getVal(key: string): ConcertInterface[];
    getValID(key: string, id: number): ConcertInterface;
    static getConcerts: () => ConcertInterface[];
    static setConcerts: (concerts: ConcertInterface[]) => void;
    static addConcert: (concert: ConcertInterface) => void;
}
