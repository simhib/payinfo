import { PayslipAppPage } from './app.po';

describe('payslip-app App', function() {
  let page: PayslipAppPage;

  beforeEach(() => {
    page = new PayslipAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
