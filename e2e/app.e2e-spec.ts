import { AmazonSearchPage } from './app.po';

describe('amazon-search App', function() {
  let page: AmazonSearchPage;

  beforeEach(() => {
    page = new AmazonSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
