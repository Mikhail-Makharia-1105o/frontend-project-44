import readlineSync from 'readline-sync';

import { failState, winState, gameStart } from '../../src/index.js';

gameStart();
export default function gameCalc() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
        const a = Math.floor(Math.random() * 110);
        const b = Math.floor(Math.random() * 110);
        const c = Math.floor(Math.random() * 110);
        let sign = '';
        let answer = 0;
        if (c >= 0 && c <= 33) {
            sign = '+';
            answer = a + b;
        } else if (c > 33 && c <= 66) {
            sign = '-';
            answer = a - b;
        } else {
            sign = '*';
            answer = a * b;
        }
        const userAnswer = readlineSync.question(`Question: ${a} ${sign} ${b} `);
        if (+userAnswer !== answer) {
            console.log(`'${+userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.`);
            failState();
            return;
        }
    }
    winState();}

gameCalc();
