const assert = require('assert');

describe('website', () => {
  it('should have the right title', () => {
    browser.url('/');
    const title = browser.getTitle();
    assert.equal(title, 'Gavin Vaught');
  });
});
