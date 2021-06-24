// import functions

// reference needed DOM elements
import { add } from "./calculations.js";

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