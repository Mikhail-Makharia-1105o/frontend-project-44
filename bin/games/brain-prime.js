import readlineSync from 'readline-sync';

import { winState, gameStart, answerCheckingLogic } from '../../src/index.js';

gameStart();
const primeNumbers = '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97'.split(' ');
for (let i = 0; i < primeNumbers.length; i += 1) {
    primeNumbers[i] = +primeNumbers[i];
}
export default function gamePrime() {
    for (let i = 0; i < 3; i += 1) {
        const a = Math.floor(Math.random() * 110);
        const answer = primeNumbers.includes(a);
        console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
        const userAnswer = readlineSync.question(`Question:  ${a} `);
        if (!(answerCheckingLogic(userAnswer, answer))) {
            return;
        }
    }
    winState();
}

gamePrime();