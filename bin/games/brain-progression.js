#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { failState, winState, gameStart } from '../../src/index.js';

const rules = 'What number is missing in the progression?';
gameStart(rules);
export default function gameProgression() {
  for (let i = 0; i < 3; i += 1) {
    const progressionNumbers = [Math.floor(Math.random() * 110)];
    const progressionIncrement = Math.floor(Math.random() * 10 + 1);
    for (let j = 0; j < 9; j += 1) {
      progressionNumbers.push(progressionNumbers[j] + progressionIncrement);
    }
    const randomIndex = Math.floor(Math.random() * 10) + 1;
    const missingNumber = progressionNumbers[randomIndex];
    progressionNumbers[randomIndex] = '..';
    const userAnswer = readlineSync.question(
      `Question: ${progressionNumbers[0]} ${progressionNumbers[1]} ${progressionNumbers[2]} ${progressionNumbers[3]} ${progressionNumbers[4]} ${progressionNumbers[5]} ${progressionNumbers[6]} ${progressionNumbers[7]} ${progressionNumbers[8]} ${progressionNumbers[9]} `,
    );
    if (+userAnswer !== missingNumber) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${missingNumber}'.`,
      );
      failState();
      return;
    }
    console.log('Correct!');
  }
  winState();
}

gameProgression();
