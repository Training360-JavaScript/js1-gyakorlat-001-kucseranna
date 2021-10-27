const timeout = process.env.SLOWMO ? 6000 : 2500;
const fs = require('fs');

const checkConsole = (page, waitForRegex) => {
    return new Promise((resolve) => {
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
    await page.goto('file://' + path, { waitUntil: 'domcontentloaded' });
});

describe('1. feladat', () => {

    test('Az első gombra kattintva a console-on meg kell jelennie a gomb szövegének.', async () => {

        const buttons = await page.$$('body button.button');
        buttons[0].click();
        await checkConsole(page, /első/i);

    });
    
    test('A második gombra kattintva a console-on meg kell jelennie a gomb szövegének.', async () => {

        const buttons = await page.$$('body button.button');
        buttons[1].click();
        await checkConsole(page, /második/i);

    });
    
    test('A harmadik gombra kattintva a console-on meg kell jelennie a gomb szövegének.', async () => {

        const buttons = await page.$$('body button.button');
        buttons[2].click();
        await checkConsole(page, /harmadik/i);

    });
    
})
