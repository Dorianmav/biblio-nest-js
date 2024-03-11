import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
export declare class MangaLoggerMiddleware implements NestMiddleware {
    private logger;
    private requestCounter;
    use(req: Request, res: Response, next: NextFunction): void;
    private logMangaRequest;
}
