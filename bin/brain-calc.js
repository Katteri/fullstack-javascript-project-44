#!/usr/bin/env node
import readlineSync from 'readline-sync';

const operation = ['+', '-', '*'];

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

let count = 0;
let stop = false;
while (count < 3) {
  const oprand = operation[Math.floor(Math.random() * 3)];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  console.log(`Question: ${a} ${oprand} ${b}`);
  const answer = readlineSync.question('Your answer: ');
  switch (oprand) {
    case '+':
      if (a + b === Number(answer)) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a + b}'.`);
        stop = true;
      }
      break;
    case '-':
      if (a - b === Number(answer)) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a - b}'.`);
        stop = true;
      }
      break;
    case '*':
      if (a * b === Number(answer)) {
        console.log('Correct!');
        count += 1;
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a * b}'.`);
        stop = true;
      }
      break;
    default:
      break;
  }
  if (stop) {
    break;
  }
}

if (count !== 3) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
