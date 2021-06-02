console.log("Rock, Paper, Scissors game!");

// uztaisi if'u, kur kad beidzas spēle (win/lose/draw), tad parādās play again poga
// play again poga var būt sasaistīta ar "final result" parādīšanu

const resultBrowser = document.createElement("h1");
resultBrowser.id = "h1-result";
resultBrowser.textContent = "FINAL RESULT (invisible until the end)";

//spēlētāja rezultāta 'string' daļa
const playerScoreBrowser = document.createElement("h2");
playerScoreBrowser.className = "h2-score";
//spēlētāja rezultāta 'number' daļa
const playerScoreActive = document.createElement("h2");
playerScoreActive.id = "player-score-active";

//datora rezultāta 'string' daļa
const computerScoreBrowser = document.createElement("h2");
computerScoreBrowser.className = "h2-score";

//datora rezultāta 'number' daļa
const computerScoreActive = document.createElement("h2");
computerScoreActive.id = "computer-score-active";

// container, kurā iekšā spēlētāja un datora rezultāti
const scoreContainer = document.createElement("div");
scoreContainer.id = "score-container";

const gameTextDiv = document.createElement("div");
gameTextDiv.id = "game-text";

const gameContainer = document.querySelector("#game-container");
gameContainer.appendChild(gameTextDiv);
// gameTextDiv.appendChild(resultBrowser);
gameTextDiv.appendChild(scoreContainer);
scoreContainer.appendChild(playerScoreBrowser);
scoreContainer.appendChild(computerScoreBrowser);

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");
buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissors.textContent = "SCISSORS";

const buttons = document.querySelectorAll(".choices");

let playerScore = 0;
let computerScore = 0;

playerScoreBrowser.textContent = `Player Score: ${playerScore}`;
computerScoreBrowser.textContent = `Computer Score: ${computerScore}`;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.getAttribute("id");
    let compChoice = computerChoice();
    console.log(playRound(playerChoice, compChoice));
    let thisRoundChoices = `Player chose: ${playerChoice}, Computer chose: ${compChoice}`;
    playerScoreBrowser.textContent = `Player Score: ${playerScore}`;
    computerScoreBrowser.textContent = `Computer Score: ${computerScore}`;
    console.log(thisRoundChoices);
    console.log(playerScore, computerScore);
  });
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
