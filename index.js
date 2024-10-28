/*jshint esversion: 6 */
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const maxRounds = 5;

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}
function playGame(playerChoice) {

    if (rounds >= maxRounds) {
        resultDisplay.textContent("Game Over!");
        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } 
    else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case "paper":
                result = (computerChoice === "rock") ? 'YOU WIN!' : 'YOU LOSE!';
                break;
            case "scissors":
                result = (computerChoice === "paper") ? 'YOU WIN!' : 'YOU LOSE!';
                break;
        }
    }

    // Updating display text
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Remove previous result classes
    resultDisplay.classList.remove("greenText", "redText", "blackText");

    // Add result-specific classes based on win or lose
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
      
    rounds++;

    if (rounds >= maxRounds) {
        // Determine final outcome and set colors based on the final winner 
        if (playerScore > computerScore) {
            resultDisplay.textContent = `YOU WIN! Final Score - Player: ${playerScore} Computer: ${computerScore}`;
            resultDisplay.classList.remove("redText", "blackText"); // Remove the red text if present
            resultDisplay.classList.add("greenText"); // Add green text for the win
        } else if (playerScore < computerScore) {
            resultDisplay.textContent = `YOU LOSE! Final Score - Player: ${playerScore} Computer: ${computerScore}`;
            resultDisplay.classList.remove("greenText", "blackText"); // Remove the green text if present
            resultDisplay.classList.add("redText"); // Add red text for the loss
        } else {
            resultDisplay.textContent = `IT'S A TIE! Final Score - Player: ${playerScore} Computer: ${computerScore}`;
            resultDisplay.classList.remove("greenText", "redText"); // Remove any color class
            resultDisplay.classList.add("blackText"); // Add black text for the tie
        }
    }
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rounds = 0;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "Game Reset. Make a move!";
    resultDisplay.classList.remove("greenText", "redText", "blackText"); // Reset any color class
}