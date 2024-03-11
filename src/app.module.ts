import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangaModule } from './manga/manga.module';
import { MangaController } from './manga/manga.controller';
import { MangaLoggerMiddleware } from './logger.middleware';
import { ConcertInterface } from './concert/concert.interface';
import { ConcertModule } from './concert/concert.module';
import { ConcertService } from './concert/concert.service';
import { ConcertController } from './concert/concert.controller';


const concertOptions: Record<string, ConcertInterface[]> =
{
  all: ConcertService.getConcerts(),
}

@Module({
  imports: [MangaModule,ConcertModule.register(concertOptions)],
  controllers: [AppController, MangaController, ConcertController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MangaLoggerMiddleware).forRoutes('mangas');
  }
}
