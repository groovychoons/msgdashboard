import { MsgdashboardPage } from './app.po';

describe('msgdashboard App', () => {
  let page: MsgdashboardPage;

  beforeEach(() => {
    page = new MsgdashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
