import { CacheModule, CacheInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from '../movies/movies.module';

@Module({
  imports: [CacheModule.register({ ttl: 30 }), MoviesModule],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    AppService,
  ],
})
export class AppModule {}
