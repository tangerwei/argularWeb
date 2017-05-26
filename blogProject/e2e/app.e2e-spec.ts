import { BlogProjectPage } from './app.po';

describe('blog-project App', function() {
  let page: BlogProjectPage;

  beforeEach(() => {
    page = new BlogProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
