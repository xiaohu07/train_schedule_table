import { Angular2WithLessPage } from './app.po';

describe('angular2-with-less App', function() {
  let page: Angular2WithLessPage;

  beforeEach(() => {
    page = new Angular2WithLessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
