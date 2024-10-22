#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

let count = 0;
while (count < 3) {
  const number1 = Math.floor(Math.random() * 100);
  const right = prime(70) ? 'yes' : 'no';

  console.log(`Question: ${number1}`);
  const answer = readlineSync.question('Your answer: ');

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
