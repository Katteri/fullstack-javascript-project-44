#!/usr/bin/env node
import readlineSync from 'readline-sync';

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

let count = 0;
while (count < 3) {
  const number1 = Math.floor(Math.random() * 100);
  const d = Math.floor(Math.random() * 100);
  const question = Math.floor(Math.random() * 9);
  const arr = progression(number1, d);
  const right = arr[question];
  arr[question] = '..';

  console.log(`Question: ${arr.join(' ')}`);
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
