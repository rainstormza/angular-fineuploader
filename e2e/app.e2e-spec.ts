import { FineuploaderPage } from './app.po';

describe('fineuploader App', () => {
  let page: FineuploaderPage;

  beforeEach(() => {
    page = new FineuploaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
