const assert = require('assert');

if (process.env.MAINTENANCE_MODE) {
  describe('The website', function () {
    it('should display a message about maintenance mode on the homepage', function () {
      browser.url('/');

      assert.equal(browser.isExisting('h1')).toBe(true);
      assert.equal(browser.element('h1').getText()).toBe('Website is currently under maintenance. We should be back shortly. Thank you for your patience.');
    });

    it('should display a message about maintenance mode on arbitrary pages', function () {
      browser.url('/arbitrary-page');

      assert.equal(browser.isExisting('h1')).toBe(true);
      assert.equal(browser.element('h1').getText()).toBe('Website is currently under maintenance. We should be back shortly. Thank you for your patience.');
    });
  });
}
