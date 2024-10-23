#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { isCorrect, end } from '../src/is-correct.js';

function gcd(x, y) {
  if (y > x) { return gcd(y, x); }
  if (!y) { return x; }
  return gcd(y, x % y);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let happyEnd = true;
for (let count = 0; count < 3; count += 1) {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const right = gcd(number1, number2);

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  if (!isCorrect(right, Number(answer))) {
    happyEnd = false;
    break;
  }
}

end(happyEnd, name);
