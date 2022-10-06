import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync  } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy;

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
  });

  // TODO: add more tests!

});
