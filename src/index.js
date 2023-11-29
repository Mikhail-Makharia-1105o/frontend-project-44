import readlineSync from 'readline-sync';

let name = '';
export function gameStart() {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function failState() {
  console.log(`Let's try again, ${name}!`);
}

export function winState() {
  console.log(`Congratulations, ${name}!`);
}

export function answerCheckingLogic(userAnswer, answer) {
  if ((userAnswer === 'no' && answer) || (userAnswer === 'yes' && !answer) || (userAnswer !== 'yes' && userAnswer !== 'no')) {
    console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was '${userAnswer === 'yes' ? 'no' : 'yes'}'.`);
    failState();
    return 0;
  } return 1;
}
