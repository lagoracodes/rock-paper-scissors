console.log("Rock, Paper, Scissors game!");

// uztaisi if'u, kur kad beidzas spēle (win/lose/draw), tad parādās play again poga
// play again poga var būt sasaistīta ar "final result" parādīšanu

// fināla teksts (win/lose/draw), kurš parādās spēlēs beigās
const resultBrowser = document.createElement("h1");
resultBrowser.id = "final-result";
resultBrowser.textContent = "FINAL RESULT (invisible until the end)";

// spēlētāja rezultāta 'string' daļa
const playerScoreStatic = document.createElement("h2");
playerScoreStatic.className = "h2-score";
playerScoreStatic.textContent = `Player Score: `;
// spēlētāja rezultāta 'number' daļa
const playerScoreActive = document.createElement("h2");
playerScoreActive.className = "active-score";

// datora rezultāta 'string' daļa
const computerScoreStatic = document.createElement("h2");
computerScoreStatic.className = "h2-score";
computerScoreStatic.textContent = `Computer Score: `;
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

gameContainer.appendChild(resultBrowser);
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

function test(playerChoice, computerChoice) {
  let playerChoiceActive = document.createElement("img");
  let computerChoiceActive = document.createElement("img");
  playerChoiceActive.className = "rotate-for-player";
  computerChoiceActive.className = "rotate-for-computer";

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

  playerChoiceDiv.appendChild(playerChoiceActive);
  computerChoiceDiv.appendChild(computerChoiceActive);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerChoice = button.getAttribute("id");
    let compChoice = computerChoice();
    console.log(playRound(playerChoice, compChoice));
    test(playerChoice, compChoice);
    let thisRoundChoices = `Player chose: ${playerChoice}, Computer chose: ${compChoice}`;
    playerScoreActive.textContent = `${playerScore}`;
    computerScoreActive.textContent = `${computerScore}`;
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
