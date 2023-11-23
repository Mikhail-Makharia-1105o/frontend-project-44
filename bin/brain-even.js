import readlineSync from 'readline-sync';

import { failState, winState } from '../src/cli.js';

export default function gameEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor((Math.random() * 110)) || 11;
    console.log(`Question: ${question}`);
    const questionEven1 = readlineSync.question('Your answer: ');
    if (questionEven1 !== 'no' && (question % 2 !== 0)) {
      console.log(`${questionEven1} is a wrong answer ;(. Correct answer was 'no'.`);
      failState();
      return;
    } if (questionEven1 !== 'yes' && (question % 2 === 0)) {
      console.log(`${questionEven1} is a wrong answer ;(. Correct answer was 'yes'.`);
      failState();
      return;
    }
  }
  winState();
}
