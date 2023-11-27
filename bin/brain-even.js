import readlineSync from 'readline-sync';

import { failState, winState, gameStart } from '../src/index.js';

gameStart();
export default function gameEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor((Math.random() * 110)) || 11;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== 'no' && (question % 2 !== 0) || userAnswer !== 'yes' && (question % 2 === 0)) {
      console.log(`${userAnswer} is a wrong answer ;(. Correct answer was '${userAnswer === 'yes' ? 'no' : 'yes'}'.`);
      failState();
      return;
    }
  }
  winState();
}

gameEven();
