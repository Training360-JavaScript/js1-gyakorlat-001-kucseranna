const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire( path.join(workDir, 'js/main.js') );

describe('1. feladat', () => {
    it('Kellene lennie egy handleClick nevű függvénynek.', () => {
        const handleClick = main.__get__('handleClick');
        expect(handleClick).toBeTruthy();
    });
});
