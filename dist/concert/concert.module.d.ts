import { DynamicModule } from '@nestjs/common';
import { ConcertInterface } from "./concert.interface";
export declare class ConcertModule {
    static register(options: Record<string, ConcertInterface[]>): DynamicModule;
}
