import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class MangaLoggerMiddleware implements NestMiddleware {
    private logger = new Logger('MangaLogger');
    private requestCounter = 0;

    use(req: Request, res: Response, next: NextFunction) {
            this.requestCounter++;
            this.logMangaRequest();
        next();
    }

    private logMangaRequest(): void {
        this.logger.verbose(
            `New Manga request! Request counter: ${this.requestCounter}`,
            this.constructor.name,
        );
    }

}
