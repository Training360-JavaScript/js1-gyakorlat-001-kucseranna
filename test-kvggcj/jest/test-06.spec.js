// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 2500;
const fs = require('fs');

const checkConsole = (page, waitForRegex) => {
  return new Promise( (resolve) => {
    page.on('console', (msg) => {
      if (waitForRegex.test(msg._text)) {
          resolve(true);
        }
    });
  });
};

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
  const path = fs.realpathSync('index.html');
  await page.goto(path, { waitUntil: 'domcontentloaded' });
});

describe('1. feladat', () => {
  test('', async () => {
    expect(true).toEqual(true);
  });
  // test('Kellene lennie három gombnak button osztállyal és a megadott szöveggel.', async () => {
  //   const buttons = await page.$$('body button');
    
  //   buttons[0].click();
  //   await checkConsole(page, /második/i);

  // }, timeout);
});
