import { LoggerModule as PinoLoggerModule } from 'nestjs-pino';
import { logger } from './logger';
import { Module } from '@nestjs/common';
import { LoggingInterceptor } from './logger.interceptor';

@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        logger: logger,
      },
      // exclude: [{ method: RequestMethod.ALL, path: 'health' }],
    }),
  ],
  controllers: [],
  providers: [LoggingInterceptor],
  exports: [LoggingInterceptor],
})
export class LoggerModule {}
