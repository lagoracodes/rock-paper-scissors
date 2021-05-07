console.log('Paper, Rock, Scissors game!');

function computerChoice() {
  let result = Math.floor(Math.random() * 3 + 1);

  if (result === 1) {
    return 'rock';
  } else if (result === 2) {
    return 'paper';
  } else if (result === 3) {
    return 'scissors';
  }
}

function playerChoice() {
  let choice = window.prompt('Rock, paper or scissors?').toLowerCase();

  if (!(choice === 'rock' || choice === 'paper' || choice === 'scissors')) {
    return playerChoice();
  } else {
    return choice;
  }
}

function oneRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'YOU LOST! PAPER BEATS ROCK!';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'YOU WON! ROCK BEATS SCISSORS!';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'YOU WON! PAPER BEATS ROCK!';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'YOU LOST! SCISSORS BEAT PAPER!';
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'YOU WON! SCISSORS BEAT PAPER!';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'YOU LOST! ROCK BEATS SCISSORS!';
  } else if (playerSelection === computerSelection) {
    return "IT'S A DRAW!";
  }
}

function game() {
  for (let i = 0; i <= 5; i++) {
    let player = playerChoice();
    let computer = computerChoice();
    let choices = `Player's choice: ${player}, Computer's choice: ${computer}, Result:`;
    console.log(choices, oneRound(player, computer));
  }
}

console.log(game());
