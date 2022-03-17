// First create a way for computer to make a random selection of Rock paper or scissors
// Then create a variable for the player to use to test out if program works
// If it works then make that variable a prompt so the player can enter their own choice
// create a function for all of this so you can call it 5 times

const buttons = document.querySelectorAll("button");
const scoreCard = document.querySelector("#scoreCard");
const computerPick = document.querySelector("#computerPick");
const playerPick = document.querySelector("#playerPick");
const roundResult = document.querySelector("#roundResult");
let playerScore = 0;
let computerScore = 0;

function randomNumber() {
	return Math.floor(Math.random() * 3);
}

function computerPlay() {
	const choices = ["rock", "paper", "scissors"];
	let compChoice = choices[randomNumber()];
	computerPick.textContent = compChoice;
	return (computerPick.textContent = compChoice);
}

buttons.forEach((button) => {
	button.addEventListener("click", function playRound() {
		computerSelection = computerPlay();

		if (playerScore == 5) {
			roundResult.textContent = "The player has won the game!";
		} else if (computerScore == 5) {
			roundResult.textContent = "The computer has won the game!";
		} else if (button.id === computerSelection) {
			computerPick.textContent = `The computer chose ${computerSelection}`;
			playerPick.textContent = `You chose ${button.id}`;
			scoreCard.textContent = `The current score is: You ${playerScore} Computer Score ${computerScore}`;
			roundResult.textContent = "This round was a tie!";
		} else if (
			(button.id === "paper" && computerSelection === "rock") ||
			(button.id === "rock" && computerSelection === "scissors") ||
			(button.id === "scissors" && computerSelection === "paper")
		) {
			playerScore++;
			computerPick.textContent = `The computer chose ${computerSelection}`;
			playerPick.textContent = `You chose ${button.id}`;
			scoreCard.textContent = `The current score is: You ${playerScore} Computer Score ${computerScore}`;
			roundResult.textContent = "You won this round!";
		} else {
			computerScore++;
			computerPick.textContent = `The computer chose ${computerSelection}`;
			playerPick.textContent = `You chose ${button.id}`;
			scoreCard.textContent = `The current score is: You ${playerScore} Computer Score ${computerScore}`;
			roundResult.textContent = "The computer won this round!";
		}
	});
});

// function playerSelection(e) {
// 	if (e.target == rockButton) {
// 		return "rock";
// 	} else if (e.target == paperButton) {
// 		return "paper";
// 	} else {
// 		return "scissors";
// 	}
// }

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
