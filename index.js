let validChoices = ["rock", "paper", "scissors"];
let humanScore = 0, computerScore = 0;
const matchMap = {
    "rock": {
        "paper": 0,
        "scissors": 1
    },
    "paper": {
        "rock": 1,
        "scissors": 0
    },
    "scissors": {
        "paper": 1,
        "rock": 0
    },
};

function getHumanChoice() {
    let valid = false;
    let choice = "";

    while(!valid) {
        choice = prompt("Select a weapon from rock, paper or scissors!");
        choice = choice.trim().toLowerCase();

        valid = Boolean(validChoices.find((option) => option === choice));
    }
    return choice; 
}

function getComputerChoice() {
    index = Math.floor(Math.random() * 3);
    return validChoices[index];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (matchMap[humanChoice][computerChoice]) {
        humanScore++;
        console.log("The human wins!");
    }
    else {
        computerScore++;
        console.log("The computer wins!");
    }
    return;
}
/*
for (let i = 1; i < Infinity; i++) {
    console.log(`Round #${i}.\nHuman: ${humanScore} points\nComputer: ${computerScore} points`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Human: ${humanChoice} VS Computer: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
    
    if (humanScore === 3 || computerScore === 3) {
        break;
    }
}

if (humanScore > computerScore) {
    console.log("The human has won the game!");
}
else {
    console.log("The computer has won the game!");
}
*/