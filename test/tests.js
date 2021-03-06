// IMPORT MODULES under test here:
// import { add } from '../calculator.js';
import { add } from '../calculations.js';
const test = QUnit.test;

// name your test by what it is testing
test('test adding', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add (2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
import { subtract } from '../calculations.js';

test('test subtracting', (expect) => {
    const expected = 6;
    const actual = subtract (9, 3);
    expect.equal(actual, expected);
});

import { multiply } from '../calculations.js';

test ('test multiply', (expect) => {
    const expected = 12;
    const actual = multiply (6, 2);
    expect.equal(actual, expected);
});

import { divide } from '../calculations.js';

test ('test divide', (expect) =>{
    const expected = 10;
    const actual = divide (20, 2);
    expect.equal(actual, expected);
});
import { remainder } from '../calculations.js';

test ('test-remainder', (expect)=> {
    const expected = 2;
    const actual = remainder (6, 4);
    expect.equal(actual, expected);
});

import { integer } from '../calculations.js';

test ('test integer', (expect)=> {
    const expected = 3;
    const actual = integer (10, 3);
    expect.equal(actual, expected);
});

import { pyth } from '../calculations.js';

test ('test pyth', (expect)=> {
    const expected = 8;
    const actual = pyth (2, 2);
    expect.equal(actual, expected);
});