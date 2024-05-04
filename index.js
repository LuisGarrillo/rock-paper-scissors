let validChoices = ["rock", "paper", "scissors"];

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

let humanScore = 0, computerScore = 0;

for (let i = 1; i < 6; i++) {
    console.log(`Round #${i}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`Human: ${humanChoice} VS Computer: ${computerChoice}`);
    //compare choices
    //add score
}