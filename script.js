// First create a way for computer to make a random selection of Rock paper or scissors
// Then create a variable for the player to use to test out if program works
// If it works then make that variable a prompt so the player can enter their own choice
// create a function for all of this so you can call it 5 times

const choices = ["rock", "paper", "scissors"];

function randomNumber() {
	return Math.floor(Math.random() * 3);
}

function computerPlay() {
	let compChoice = choices[randomNumber()];
	console.log(compChoice);
}
