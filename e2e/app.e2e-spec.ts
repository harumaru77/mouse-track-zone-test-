import { MousePosLoggerPage } from './app.po';

describe('mouse-pos-logger App', () => {
  let page: MousePosLoggerPage;

  beforeEach(() => {
    page = new MousePosLoggerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to mpl!!');
  });
});
