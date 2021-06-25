// import functions

// reference needed DOM elements
import { add } from './calculations.js';

// set event listeners 
  // get user input(s)
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addAnswer = document.getElementById('add-answer');
const addBtn = document.getElementById('add-btn');

  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
addBtn.addEventListener('click', ()=>{
    console.log(typeof(addInput1.value));
    const add1 = Number (addInput1.value);
    const add2 = Number(addInput2.value);
    const answer = add(add1, add2);
    console.log(answer);
    addAnswer.textContent = answer;
});

import { subtract } from './calculations.js';


const subInput1 = document.getElementById('sub-num1');
const subInput2 = document.getElementById('sub-num2');
const subAnswer = document.getElementById('sub-answer');
const subBtn = document.getElementById('sub-btn');

subBtn.addEventListener('click', ()=>{
    console.log(typeof(subInput1.value));
    const sub1 = Number(subInput1.value);
    const sub2 = Number(subInput2.value);
    const answer2 = subtract(sub1, sub2);
    console.log(answer2);
    subAnswer.textContent = answer2;
}); 

import { multiply } from './calculations.js';

const multiInput1 = document.getElementById('multi-num1');
const multiInput2 = document.getElementById('multi-num2');
const multiAnswer = document.getElementById('multi-answer');
const multiBtn = document.getElementById('multi-button');

multiBtn.addEventListener('click', ()=>{
    console.log(typeof(multiInput1.value));
    const multi1 = Number(multiInput1.value);
    const multi2 = Number(multiInput2.value);
    const answer3 = multiply(multi1, multi2);
    console.log(answer3);
    multiAnswer.textContent = answer3;
});

import { divide } from './calculations.js';

const divInput1 = document.getElementById('div-num1');
const divInput2 = document.getElementById('div-num2');
const divAnswer = document.getElementById('div-answer');
const divBtn = document.getElementById('div-button');

divBtn.addEventListener('click', ()=>{
    console.log(typeof(divInput1.value));
    const div1 = Number(divInput1.value);
    const div2 = Number(divInput2.value);
    const answer4 = divide(div1, div2);
    console.log(answer4);
    divAnswer.textContent = answer4;
});

import { remainder } from './calculations.js';

const remInput1 = document.getElementById('rem-number1');
const remInput2 = document.getElementById('rem-number2');
const remAnswer = document.getElementById('rem-answer');
const remBtn = document.getElementById('rem-button');

remBtn.addEventListener('click', ()=>{
    console.log(typeof(remInput1.value));
    const rem1 = Number(remInput1.value);
    const rem2 = Number(remInput2.value);
    const answer5 = remainder(rem1, rem2);
    console.log(answer5);
    remAnswer.textContent = answer5;

});

import { integer } from './calculations.js';

const intInput1 = document.getElementById('int-number1');
const intInput2 = document.getElementById('int-number2');
const intanswser = document.getElementById('int-answer');
const intBtn = document.getElementById('int-button');

intBtn.addEventListener('click', ()=>{
    console.log(typeof(intInput1).value);
    const int1 = Number(intInput1.value);
    const int2 = Number(intInput2.value);
    const answer6 = integer(int1, int2);
    console.log(answer6);
    intanswser.textContent = answer6;
});

import { pyth } from './calculations.js';

const pythInput1 = document.getElementById('pyth-number1');
const pythInput2 = document.getElementById('pyth-number2');
const pythAnswer = document.getElementById('pyth-answer');
const pyhtBtn = document.getElementById('pyth-button');

pyhtBtn.addEventListener('click', ()=>{
    console.log(typeof(pythInput1.value));
    const pyth1 = Number(pythInput1.value);
    const pyth2 = Number(pythInput2.value);
    const answer7 = pyth(pyth1, pyth2);
    console.log(answer7);
    pythAnswer.textContent = answer7;
});
