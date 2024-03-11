import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {ConcertService} from "./concert.service";

@Controller('concerts')
export class ConcertController {
    constructor(
        private readonly concertService: ConcertService,

    ) {}

    @Get()
    getAll() {
        return this.concertService.getVal('all');
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.concertService.getValID('all',id);
    }
}