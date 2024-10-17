import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: PinoLogger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const controller = context.getClass().name;
    const handler = context.getHandler().name; // Here is the isse, I expect the name of the method, but I get `PropertyDescriptor` instead

    this.logger.info(`Before... ${controller} ${handler}`);

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(() => this.logger.info(`After... ${Date.now() - now}ms ${controller} ${handler}`)),
      );
  }
}