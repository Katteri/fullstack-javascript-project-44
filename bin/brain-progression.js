#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isCorrect, end } from '../src/is-correct.js';

function progression(num1, d) {
  const arr = [];
  arr.push(num1);
  for (let i = 1; i < 10; i += 1) {
    arr.push(arr.at(-1) + d);
  }
  return arr;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');

let happyEnd = true;
for (let count = 0; count < 3; count += 1) {
  const number1 = Math.floor(Math.random() * 100);
  const d = Math.floor(Math.random() * 100);
  const question = Math.floor(Math.random() * 9);
  const arr = progression(number1, d);
  const right = arr[question];
  arr[question] = '..';

  console.log(`Question: ${arr.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');

  if (!isCorrect(right, Number(answer))) {
    happyEnd = false;
    break;
  }
}

end(happyEnd, name);
