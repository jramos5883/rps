//comment
//computer's options
const computerOptions = ['rock', 'paper', 'scissors']

//generates random computer action
function getComputerChoice() {
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}
let playerScore = 0;
let computerScore = 0;
//console.log(getComputerChoice(computerOptions));
//function to play a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'You both tied!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return'You won! Rock smashes scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return'You lost! Paper covers rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You won! Paper covers rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lost! Scissors cuts paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You won! Scissors cuts paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return'You lost! Rock smashes scissors!';
    } 
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
console.log(playerScore);
//function to run 5 rounds
function game() {
    for (let j = 0; j < 5; j++);
        playRound();
        if (playerScore > computerScore) {
            return 'You Win!'
        } else if (playerScore < computerScore) {
            return 'You Lose!'
        }
}
