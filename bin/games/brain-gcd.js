#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { failState, winState, gameStart } from '../../src/index.js';

function gcd(a, b) {
  let newA = Math.abs(a);
  let newB = Math.abs(b);
  if (newB > newA) {
    const temp = newA;
    newA = newB;
    newB = temp;
  }
  while (true) {
    if (newB === 0) return newA;
    newA %= newB;
    if (newA === 0) return newB;
    newB %= newA;
  }
}
const rules = 'Find the greatest common divisor of given numbers.';
gameStart(rules);
export default function gameCalc() {
  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 110);
    const b = Math.floor(Math.random() * 110);
    const userAnswer = readlineSync.question(`Question: ${a} ${b} `);
    if (+userAnswer !== gcd(a, b)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${gcd(a, b)}'.`,
      );
      failState();
      return;
    }
    console.log('Correct!');
  }
  winState();
}

gameCalc();
