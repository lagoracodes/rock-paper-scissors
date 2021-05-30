console.log("Rock, Paper, Scissors game!");

let playerScore = 0;
let computerScore = 0;

const resultBrowser = document.createElement("h1");
resultBrowser.className = "h1-result";
resultBrowser.textContent = "FINAL RESULT \n (invisible until the end)";
const playerScoreBrowser = document.createElement("h2");
playerScoreBrowser.className = "h2-score";
playerScoreBrowser.textContent = `Player Score: ${playerScore}`;
const computerScoreBrowser = document.createElement("h2");
computerScoreBrowser.className = "h2-score";
computerScoreBrowser.textContent = `Computer Score: ${computerScore}`;

const gameTextDiv = document.createElement("div");
gameTextDiv.className = "game-text";

const gameContainer = document.querySelector("#game-container");
gameContainer.appendChild(gameTextDiv);

gameTextDiv.appendChild(resultBrowser);
gameTextDiv.appendChild(playerScoreBrowser);
gameTextDiv.appendChild(computerScoreBrowser);

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissors.textContent = "SCISSORS";

// const clickedRock = buttonRock.addEventListener("click", game);
// const clickedPaper = buttonPaper.addEventListener("click", game);
// const clickedScissors = buttonScissors.addEventListener("click", game);

const buttons = document.querySelectorAll(".choices");

let choiceP = undefined;
let choiceC = undefined;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    choice = button.getAttribute("id");
    console.log(choice);
  });
});

function computerChoice() {
  let result = Math.floor(Math.random() * 3 + 1);

  if (result === 1) {
    choiceC = "rock";
  } else if (result === 2) {
    choiceC = "paper";
  } else if (result === 3) {
    choiceC = "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lost! Paper beats rock!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You won! Rock beats scissors!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You won! Paper beats rock!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lost! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You won! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lost! Rock beats scissors!";
  } else if (playerSelection === computerSelection) {
    return "It's a draw!";
  }
}

let thisRoundChoices = `Player chose: ${choiceP}, Computer chose: ${choiceP}`;
