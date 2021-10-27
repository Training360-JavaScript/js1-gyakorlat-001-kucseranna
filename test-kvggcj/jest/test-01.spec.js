// Defining the timeout for the test
const timeout = process.env.SLOWMO ? 6000 : 2500;
const fs = require('fs');

const getText = (page, elementHandle) => {
    return page.evaluate(el => el.innerText, elementHandle);
};

// Go to the specified path and wait for the domcontent to load before running the tests
beforeAll(async () => {
    const path = fs.realpathSync('index.html');
    await page.goto('file://' + path, { waitUntil: 'domcontentloaded' });
});

describe('1. feladat', () => {
    
    test('Kellene lennie három gombnak button osztállyal és a megadott szöveggel.', async () => {
        
        const buttons = await page.$$('body button.button');
        expect(buttons.length).toEqual(3);

        const btnText0 = await getText(page, buttons[0]);
        const btnText1 = await getText(page, buttons[1]);
        const btnText2 = await getText(page, buttons[2]);

        expect(btnText0).toMatch(/első/i);
        expect(btnText1).toMatch(/második/i);
        expect(btnText2).toMatch(/harmadik/i);

    }, timeout);

    test('Be kellene linkelni a js/main.js fájlt az oldalba.', async () => {

        const scripts = await page.$$('script[src$="main.js"]');
        
        expect(scripts.length).toEqual(1);

    });

});
