import { MySpecialLoggerService } from './my-special-logger.service';
import { Component } from '@angular/core';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mpl works!';
  constructor(
    private logger: MySpecialLoggerService
  ) {    
    //this.testLoggerLevel();
  }

  printDebugLog() {
    this.logger.debug('test dependency injector tree!');
  }
  testLoggerLevel() {
    console.log("============= Default(Info) Log Level ===================");
    this.logger.debug("test logging... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.DEBUG;
    console.log("============= Debug Log Level ===================");
    this.logger.debug("test logging... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.WARN;
    console.log("============= Warn Log Level ===================");
    this.logger.debug("test logging... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

    this.logger.logLevel = LogLevel.ERROR;
    console.log("============= Error Log Level ===================");
    this.logger.debug("test logging... in debug");
    this.logger.info("test logging... in info");
    this.logger.warn("test logging... in warn");
    this.logger.error("test logging... in error");

  }
}
