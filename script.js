// First create a way for computer to make a random selection of Rock paper or scissors
// Then create a variable for the player to use to test out if program works
// If it works then make that variable a prompt so the player can enter their own choice
// create a function for all of this so you can call it 5 times

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", playRound());

paperButton.addEventListener("click", playRound());

scissorsButton.addEventListener("click", playRound());

// const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function randomNumber() {
	return Math.floor(Math.random() * 3);
}

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	let compChoice = choices[randomNumber()];
	return compChoice;
}

function playRound(computerSelection) {
	computerSelection = computerPlay();
	playerSelection = e.target;

	if (playerSelection === computerSelection) {
		console.log("it's a tie");
	} else if (
		(playerSelection === rockButton && computerSelection === "scissors") ||
		(playerSelection === paperButton && computerSelection === "rock") ||
		(playerSelection === scissorsButton && computerSelection === "paper")
	) {
		playerScore++;
		console.log("You won this round", playerScore);
	} else {
		computerScore++;
		console.log("The computer won this round", computerScore);
	}
}

// function game() {
// 	// for (let i = 0; i < 5; i++) {
// 	// 	playRound();
// 	// }

// 	if (playerScore > computerScore) {
// 		console.log("You win!");
// 	} else if (computerScore > playerScore) {
// 		console.log("The computer wins!");
// 	} else {
// 		console.log("It's a tie!");
// 	}
// }

// game();
