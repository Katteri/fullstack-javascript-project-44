#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

let count = 0;
while (count < 3) {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const right = (evenCheck(number)) ? 'yes' : 'no';
  if (right === answer) {
    console.log('Correct!');
    count += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right}'.`);
    break;
  }
}

if (count !== 3) {
  console.log(`Let's try again, ${name}!`);
} else {
  console.log(`Congratulations, ${name}!`);
}
