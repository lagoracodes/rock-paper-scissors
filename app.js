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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lost! Paper beats rock!';
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You won! Rock beats scissors!';
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You won! Paper beats rock!';
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lost! Scissors beat paper!';
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You won! Scissors beat paper!';
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lost! Rock beats scissors!';
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  }
}
