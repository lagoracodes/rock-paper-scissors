console.log("Rock, Paper, Scissors game!");

// uztaisi if'u, kur kad beidzas spēle (win/lose/draw), tad parādās play again poga
// play again poga var būt sasaistīta ar "final result" parādīšanu

// spēlētāja rezultāta 'string' daļa
const playerScoreStatic = document.createElement("h2");
playerScoreStatic.className = "h2-score";
playerScoreStatic.textContent = `Player's Score: `;
// spēlētāja rezultāta 'number' daļa
const playerScoreActive = document.createElement("h2");
playerScoreActive.className = "active-score";

// datora rezultāta 'string' daļa
const computerScoreStatic = document.createElement("h2");
computerScoreStatic.className = "h2-score";
computerScoreStatic.textContent = `Computer's Score: `;
//  rezultāta 'number' daļa
const computerScoreActive = document.createElement("h2");
computerScoreActive.className = "active-score";

// spēlētāja rezultātu container
const playerScoreContainer = document.createElement("div");
playerScoreContainer.className = "results-container";
// datora rezultātu container
const computerScoreContainer = document.createElement("div");
computerScoreContainer.className = "results-container";

// container, kurā iekšā spēlētāja un datora rezultātu containeri
const scoreContainer = document.createElement("div");
scoreContainer.id = "score-container";

const gameContainer = document.querySelector("#game-container");

gameContainer.appendChild(scoreContainer);
scoreContainer.appendChild(playerScoreContainer);
scoreContainer.appendChild(computerScoreContainer);
playerScoreContainer.appendChild(playerScoreStatic);
playerScoreContainer.appendChild(playerScoreActive);
computerScoreContainer.appendChild(computerScoreStatic);
computerScoreContainer.appendChild(computerScoreActive);

const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

const buttons = document.querySelectorAll(".choices");

let playerScore = 0;
let computerScore = 0;

playerScoreActive.textContent = `${playerScore}`;
computerScoreActive.textContent = `${computerScore}`;

const rockIcon = document.getElementById("img-rock");
const paperIcon = document.getElementById("img-paper");
const scissorsIcon = document.getElementById("img-scissors");

const roundResultsDiv = document.createElement("div");
roundResultsDiv.className = "round-results-div";
const roundResults = document.createElement("h2");
roundResults.className = "round-results";
gameContainer.appendChild(roundResultsDiv);
roundResultsDiv.appendChild(roundResults);

const playerChoiceDiv = document.createElement("div");
playerChoiceDiv.className = "choices-container";
const computerChoiceDiv = document.createElement("div");
computerChoiceDiv.className = "choices-container";

const choicesContainer = document.createElement("div");
choicesContainer.className = "both-choice-div";
gameContainer.appendChild(choicesContainer);

choicesContainer.appendChild(playerChoiceDiv);
choicesContainer.appendChild(computerChoiceDiv);

const playerChoiceStatic = document.createElement("h2");
playerChoiceStatic.className = "choice-static";
playerChoiceStatic.textContent = "You chose: ";

const computerChoiceStatic = document.createElement("h2");
computerChoiceStatic.className = "choice-static";
computerChoiceStatic.textContent = "Computer chose: ";

playerChoiceDiv.appendChild(playerChoiceStatic);
computerChoiceDiv.appendChild(computerChoiceStatic);

let playerChoiceActive = document.createElement("img");
let computerChoiceActive = document.createElement("img");
playerChoiceActive.className = "rotate-for-player";
computerChoiceActive.className = "rotate-for-computer";
playerChoiceDiv.appendChild(playerChoiceActive);
computerChoiceDiv.appendChild(computerChoiceActive);

function test(playerChoice, computerChoice) {
  if (playerChoice === "rock") {
    playerChoiceActive.setAttribute("src", "images/rock.png");
  }
  if (playerChoice === "paper") {
    playerChoiceActive.setAttribute("src", "images/paper.png");
  }
  if (playerChoice === "scissors") {
    playerChoiceActive.setAttribute("src", "images/scissors.png");
  }
  if (computerChoice === "rock") {
    computerChoiceActive.setAttribute("src", "images/rock.png");
  }
  if (computerChoice === "paper") {
    computerChoiceActive.setAttribute("src", "images/paper.png");
  }
  if (computerChoice === "scissors") {
    computerChoiceActive.setAttribute("src", "images/scissors.png");
  }
}

function finalResult() {
  if (playerScore === 5 && computerScore < 5) {
    return;
  }
  if (playerScore < 5 && computerScore === 5) {
    return;
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.getAttribute("id");
    let compChoice = computerChoice();
    playRound(playerChoice, compChoice);
    test(playerChoice, compChoice);
    playerScoreActive.textContent = `${playerScore}`;
    computerScoreActive.textContent = `${computerScore}`;
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
    roundResults.textContent = "You lost this round! Paper beats rock!";
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    roundResults.textContent = "You won this round! Rock beats scissors!";
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    roundResults.textContent = "You won this round! Paper beats rock!";
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    roundResults.textContent = "You lost this round! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    roundResults.textContent = "You won this round! Scissors beat paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    roundResults.textContent = "You lost this round! Rock beats scissors!";
  } else if (playerSelection === computerSelection) {
    roundResults.textContent = "It's a draw!";
  }
}
