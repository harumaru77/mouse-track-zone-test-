import { AnotherLoggerService } from './another-logger.service';
import { LOG_LEVEL_TOKEN } from './app.tokens';
import { MySpecialLoggerService } from './my-special-logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseTrackZoneComponent } from './mouse-track-zone/mouse-track-zone.component';
import { LogLevel } from './log-level.enum';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [    
    MySpecialLoggerService,
    AnotherLoggerService,
    {
      provide: LOG_LEVEL_TOKEN,
      useValue: LogLevel.INFO
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
