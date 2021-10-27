const rewire = require('rewire');
const workDir = process.cwd();
const path = require('path');
const main = rewire( path.join(workDir, 'js/sum.js') );

describe('2. feladat', () => {
    it('Kellene lennie egy summation nevű függvénynek.', () => {
        const summation = main.__get__('summation');
        expect(summation).toBeTruthy();
    });
    
    it('A summation függvénynek az argumentumok összegével kell visszatérnie.', () => {
        const summation = main.__get__('summation');
        const maths = [
            Math.round(Math.random()*1000), 
            Math.round(Math.random()*1000)
        ];
        expect(summation(maths[0], maths[1])).toEqual( (maths[0] + maths[1]) );
    });

    it('Kellene lennie egy subtraction nevű függvénynek.', () => {
        const subtraction = main.__get__('subtraction');
        expect(subtraction).toBeTruthy();
    });
    
    it('A subtraction függvénynek az argumentumok különbségével kell visszatérnie.', () => {
        const subtraction = main.__get__('subtraction');
        const maths = [
            Math.round(Math.random()*1000), 
            Math.round(Math.random()*1000)
        ];
        expect(subtraction(maths[0], maths[1])).toEqual( (maths[0] - maths[1]) );
    });
});
