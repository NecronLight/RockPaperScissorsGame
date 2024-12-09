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

function getHumanChoiceRock() {
    const humanChoice = "rock";
    console.log("You choosed rock");
}

function getHumanChoicePaper() {
    const humanChoice = "paper";
    console.log("You choosed paper");
}

function getHumanChoiceScissors() {
    const humanChoice = "scissors";
    console.log("You choosed scissors");
} 

document.getElementById("rockBtn").addEventListener("click", () => {
    getHumanChoiceRock();
    playRound("rock");
    winner();
    scoreBoard();
});

document.getElementById("paperBtn").addEventListener("click", () => {
    getHumanChoicePaper();
    playRound("paper");
    winner();
    scoreBoard();
});

document.getElementById("scissorsBtn").addEventListener("click", () => {
    getHumanChoiceScissors();
    playRound("scissors");
    winner();
    scoreBoard();
});

function playRound(humanChoice) {;
    const computerChoice = getComputerChoice();
    const resultElement = document.getElementById("results");
    let resultText = "";

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        resultText += "You win! Rock beats Scissors<br>";
        humanScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        resultText += "You lose! Paper beats Rock<br>";
        computerScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("It's a tie");
        resultText += "It's a tie<br>";
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        resultText += "You win! Paper beats Rock<br>";
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        resultText += "You lose! Scissors beats Paper<br>";
        computerScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("It's a tie");
        resultText += "It's a tie<br>";
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        resultText += "You win! Scissors beats Paper<br>";
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        resultText += "You lose! Rock beats Scissors<br>";
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie");
        resultText += "It's a tie<br>";
    }

    if (humanScore === 5 || computerScore === 5) {
        // Disable button clicks to prevent further rounds
        document.getElementById("rockBtn").disabled = true;
        document.getElementById("paperBtn").disabled = true;
        document.getElementById("scissorsBtn").disabled = true;

        // Display the final winner message
        if (humanScore === 5) {
            alert("You win the game! Press F5 to play again");
        } else {
            alert("Computer wins the game! Press F5 to play again");
        }
    }
    resultElement.innerHTML += resultText;
 };

function scoreBoard() {
    console.log(humanScore + "x" + computerScore)
    let scoreElement = document.getElementById("board");
    scoreElement.textContent = "You: " + humanScore + " x " + "Computer: " + computerScore;
};

function winner() {
    if (humanScore == 5) {
        console.log("YOU REACHED 5 POINTS");

        const winnerDiv = document.createElement("div");
        const winnerDivContent = document.createTextNode("YOU REACHED 5 POINTS");
        winnerDiv.appendChild(winnerDivContent);
        const currentWinnerDiv = document.getElementById("div1");
        document.body.insertBefore(winnerDiv, currentWinnerDiv);
    }
    
    else if (computerScore == 5) {
        console.log("COMPUTER REACHED 5 POINTS");

        const winnerDiv = document.createElement("div")
        const winnerDivContent = document.createTextNode("THE COMPUTER REACHED 5 POINTS")
        winnerDiv.appendChild(winnerDivContent);
        const currentWinnerDiv = document.getElementById("div1");
        document.body.insertBefore(winnerDiv, currentWinnerDiv);
    }
};

let humanScore = 0;
let computerScore = 0;