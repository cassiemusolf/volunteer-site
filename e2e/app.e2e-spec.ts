import { VolunteerSitePage } from './app.po';

describe('volunteer-site App', () => {
  let page: VolunteerSitePage;

  beforeEach(() => {
    page = new VolunteerSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
