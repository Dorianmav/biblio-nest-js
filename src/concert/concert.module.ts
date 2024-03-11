import { DynamicModule, Module } from '@nestjs/common';
import { ConcertService } from './concert.service';
import {ConcertInterface} from "./concert.interface";

@Module({})
export class ConcertModule {
    static register(options: Record<string, ConcertInterface[]>): DynamicModule {
        return {
            module: ConcertModule,
            providers: [
                {
                    provide: ConcertService,
                    useValue: new ConcertService(options),
                },
            ],
            exports: [ConcertService],
        };
    }
}