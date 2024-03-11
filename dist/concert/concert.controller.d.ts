import { ConcertService } from "./concert.service";
export declare class ConcertController {
    private readonly concertService;
    constructor(concertService: ConcertService);
    getAll(): import("./concert.interface").ConcertInterface[];
    getOne(id: number): import("./concert.interface").ConcertInterface;
}
