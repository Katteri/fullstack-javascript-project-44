#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isCorrect, end } from '../src/is-correct.js';

const operation = ['+', '-', '*'];

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

let happyEnd = true;
for (let count = 0; count < 3; count += 1) {
  const oprand = operation[Math.floor(Math.random() * 3)];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  console.log(`Question: ${a} ${oprand} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  let right = 0;

  switch (oprand) {
    case '+':
      right = a + b;
      break;
    case '-':
      right = a - b;
      break;
    case '*':
      right = a * b;
      break;
    default:
      break;
  }

  if (!isCorrect(right, Number(answer))) {
    happyEnd = false;
    break;
  }
}

end(happyEnd, name);
