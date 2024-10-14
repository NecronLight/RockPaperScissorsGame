function getComputerChoice(min, max) {
    const minChoice = Math.ceil(1);
    const maxChoice = Math.floor(4);
    const computerChoiceNumber = Math.floor(Math.random() * (maxChoice - minChoice) + minChoice);

    if (computerChoiceNumber === 1) {
        computerChoice = "rock";
    } 

    else if (computerChoiceNumber === 2) {
        computerChoice = "paper";
    }

    else {
        computerChoice = "scissors";
    }

return computerChoice;

}

function getHumanChoice() {
    let humanChoicePrompt = prompt("Choose between: Rock, Paper and Scissors: ");
    let humanChoice = humanChoicePrompt.toLocaleLowerCase();

return humanChoice;
}

function playRound() {;
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie");
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie");
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie");
    }
}

function playGame() {
    for (round = 0; round < 5; round++) {
        playRound();
    }
}

function winner() {
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + "x" + computerScore);
    }
    
    else if (humanScore === computerScore) {
        console.log("It's a tie!");
    }

    else {
        console.log("You lose! " + humanScore + "x" + computerScore);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
winner();