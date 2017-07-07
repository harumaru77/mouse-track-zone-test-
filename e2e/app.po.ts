import { browser, by, element } from 'protractor';

export class MousePosLoggerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mpl-root h1')).getText();
  }
}
