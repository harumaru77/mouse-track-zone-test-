import { LOG_LEVEL_TOKEN } from './app.tokens';
import { Injectable, Inject } from '@angular/core';
import { LoggerService } from './logger-service';
import { LogLevel } from './log-level.enum';

@Injectable()
export class AnotherLoggerService extends LoggerService {
  
  constructor( @Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }
  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }
  private getFormattedLogMsg(logLevel: LogLevel, msg: string): string {
    return `[${LogLevel[logLevel]}] - ${msg}`;
  }
}
