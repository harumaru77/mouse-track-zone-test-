import { LogLevel } from 'app/log-level.enum';
import { LOG_LEVEL_TOKEN } from './../app.tokens';
import { AnotherLoggerService } from './../another-logger.service';
import { MySpecialLoggerService } from './../my-special-logger.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTrackZoneComponent } from './mouse-track-zone.component';

describe('MouseTrackZoneComponent', () => {
  let component: MouseTrackZoneComponent;
  let fixture: ComponentFixture<MouseTrackZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouseTrackZoneComponent ],
      providers: [MySpecialLoggerService, AnotherLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouseTrackZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
