import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ArkaLibraryService } from './arka-library.service';
import { MongoLoggingInterceptor } from './classes/mongo-logging.interceptor';


@Module({
  providers: [
    ArkaLibraryService,
    {
      provide: APP_INTERCEPTOR,
      useClass: MongoLoggingInterceptor
    },
  ],
  exports: [ArkaLibraryService],
})
export class ArkaLibraryModule {}
