import readlineSync from 'readline-sync';

import { failState, winState, gameStart } from '../src/index.js';
gameStart();
export default function gameCalc() {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
        const a = Math.floor(Math.random() * 110);
        const b = Math.floor(Math.random() * 110);
        const c = Math.floor(Math.random() * 110);
        let sign = '';
        if (c >= 0 && c <= 33) {
        sign = '+';
        } else if (c > 33 && c <= 66) {
            sign = '-';
        } else {
            sign = '*';
        }
        const userAnswer = readlineSync.question(`Question: ${a} ${sign} ${b} `);
        let answer = 0;
        switch (sign) {
            case '+':
                answer = a + b;
                break;
            case '-':
                answer = a - b;
                break;
            case '*':
                answer = a * b;
                break;
            default:
                return;
        }
        if (+userAnswer !== answer) {
            console.log(`'${+userAnswer}' is a wrong answer ;(. Correct answer was '${answer}'.`);
            failState();
            return;
        }
    }
    winState();
}

gameCalc();
