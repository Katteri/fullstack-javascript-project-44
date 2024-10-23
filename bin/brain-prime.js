#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isCorrect, end } from '../src/is-correct.js';

function prime(num) {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let happyEnd = true;
for (let count = 0; count < 3; count += 1) {
  const number1 = Math.floor(Math.random() * 100);
  const right = prime(number1) ? 'yes' : 'no';

  console.log(`Question: ${number1}`);
  const answer = readlineSync.question('Your answer: ');

  if (!isCorrect(right, answer)) {
    happyEnd = false;
    break;
  }
}

end(happyEnd, name);
