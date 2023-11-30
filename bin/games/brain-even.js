#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { answerCheckingLogic, winState, gameStart } from '../../src/index.js';

//gameStart();
export default function gameEven() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor((Math.random() * 110)) || 11;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = question % 2 === 0;
    if (!(answerCheckingLogic(userAnswer, answer))) {
      return;
    }
    console.log('Correct!');
  }
  winState();
}

gameEven();
