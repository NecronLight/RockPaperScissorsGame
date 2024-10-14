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

function playRound() {
    console.log("Essas são as escolhas do round: ");
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    console.log("Escolha computador " + computerChoice);
    console.log("Escolha humano " + humanChoice);

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
    for (round = 0; i = 5; round++);
    playRound();
}

function winner() {
    if (humanScore > computerScore) {
        console.log("You win! " + humanScore + "x" + computerScore);
    }

    else {
        console.log("You lose! " + humanScore + "x" + computerScore);
    }
}



let humanScore = 0;
let computerScore = 0;
playGame();
console.log(humanScore);
console.log(computerScore);
winner();