let validChoices = ["rock", "paper", "scissors"];
let buttonsContainer;
let scoresContainer;
let playsContainer;
let result;
let output;
let newButton;

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

const scores = {
    "human": 0,
    "computer": 0,
    "tie": 0,
}

const plays = {
    "rock": "attempts to throw a big rock!",
    "paper": "tries to inflict a million paper cuts!",
    "scissors": "disassembles a scissor and attacks with both blades!",
}

const roundWinnerDialogues = {
    "human": "Human creativity overwhelm the computer!",
    "computer": "The computer calculations are too much for the human!",
    "tie": "The clash ends in a tie!"
}

const gameWinnerDialogues = {
    "human": "The indomitable human spirit rises against the computer!",
    "computer": "The age of the machines has finally arrived!"
}

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
        return "tie";
    }

    if (matchMap[humanChoice][computerChoice]) {
        scores["human"]++;
        return "human";
    }
    else {
        scores["computer"]++;
        return "computer";
    }
}
    }
    return;
}

function createPlayAgainButton() {
    let newButton = document.createElement("button");
    newButton.textContent = "Play again?";
    newButton.addEventListener("click", resetGame);
    return newButton;
}

function resetGame() {
    for (let children of buttonsContainer.children) {
        children.disabled = false
    }
    scores["computer"] = 0;
    scores["human"] = 0;

    scoresContainer.children[0].textContent = ``;
    scoresContainer.children[1].textContent = ``;

    playsContainer.children[0].textContent = ``;
    playsContainer.children[1].textContent = ``;

    result.textContent = ``;
    output.removeChild(newButton);
}

function manageRound(event) {
    // Get choices and play round
    let humanChoice = event.target.value;
    let computerChoice = getComputerChoice();
    let winner = playRound(humanChoice, computerChoice);

    // Update scores
    scoresContainer.children[0].textContent = `Human = ${scores["human"]}`;
    scoresContainer.children[1].textContent = `Computer = ${scores["computer"]}`;

    // Update plays
    playsContainer.children[0].textContent = `The human ${plays[humanChoice]}`;
    playsContainer.children[1].textContent = `The computer ${plays[computerChoice]}`;

    // Update result
    if (scores[winner] < 5) {
        result.textContent = roundWinnerDialogues[winner];
        return;
    }

    // if a score reaches 5 then end the game
    result.textContent = gameWinnerDialogues[winner];
    for (let children of buttonsContainer.children) {
        children.disabled = true;
    }
    let output = document.getElementById("output");
    output.append(newButton);
}

document.addEventListener("DOMContentLoaded", loadButtons);

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