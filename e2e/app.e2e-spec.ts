import { WordgamePage } from './app.po';

describe('wordgame App', () => {
  let page: WordgamePage;

  beforeEach(() => {
    page = new WordgamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
