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
