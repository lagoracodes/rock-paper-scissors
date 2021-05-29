console.log("Rock, Paper, Scissors game!");

const buttonRock = document.getElementById("button-rock");
const buttonPaper = document.getElementById("button-paper");
const buttonScissors = document.getElementById("button-scissors");

buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissors.textContent = "SCISSORS";

const choseRock = buttonRock.addEventListener("click", () => {
  return "rock";
});
const chosePaper = buttonPaper.addEventListener("click", () => {
  return "paper";
});
const choseScissors = buttonScissors.addEventListener("click", () => {
  return "scissors";
});

function computerChoice() {
  let result = Math.floor(Math.random() * 3 + 1);

  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else if (result === 3) {
    return "scissors";
  }
}

function playerChoice() {
  if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
    return playerChoice();
  } else {
    return choice;
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lost! Paper beats rock!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You won! Rock beats scissors!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won! Paper beats rock!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lost! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You won! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lost! Rock beats scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  }
}
