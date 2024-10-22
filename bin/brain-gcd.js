#!/usr/bin/env node
import readlineSync from 'readline-sync';

function gcd(x, y) {
  if (y > x) { return gcd(y, x); }
  if (!y) { return x; }
  return gcd(y, x % y);
}

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let count = 0;
while (count < 3) {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const right = gcd(number1, number2);

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  if (right === Number(answer)) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right}'.`);
    console.log(`Let's try again, ${name}!`);
  }
}

console.log(`Congratulations, ${name}!`);
