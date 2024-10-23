function isCorrect(right, answer) {
  const flag = right === answer;
  if (flag) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${right}'.`);
  }
  return flag;
}

function end(happyEnd, name) {
  if (happyEnd) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
}

export { isCorrect, end };
