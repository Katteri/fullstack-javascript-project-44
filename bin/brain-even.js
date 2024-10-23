#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isCorrect, end } from '../src/is-correct.js';

function evenCheck(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let happyEnd = true;
for (let count = 0; count < 3; count += 1) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const right = (evenCheck(number)) ? 'yes' : 'no';

  if (!isCorrect(right, answer)) {
    happyEnd = false;
    break;
  }
}

end(happyEnd, name);
