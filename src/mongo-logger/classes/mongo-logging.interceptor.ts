import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    Logger,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class MongoLoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const className = context.getClass().name;
      const methodName = context.getHandler().name;
  
      const body = context.switchToHttp().getRequest().body;
      Logger.log(`Mongo Log: ${className}.${methodName} started...`);
      if (body !== null) {
        Logger.log(`Mongo RequestBody - ${JSON.stringify(body)}`);
      }
  
      return next
        .handle()
        .pipe(tap(() => Logger.log(`Mongo ${className}.${methodName} exited`)));
    }
  }
  