function getHumanChoice() {
    let validChoices = ["rock", "paper", "scissors"];
    let valid = false;

    while(!valid) {
        let choice = prompt("Select a weapon from rock, paper or scissors!");
        choice = choice.trim().toLowerCase();

        valid = Boolean(validChoices.find((option) => option === choice));
    }
    
}

let humanScore = 0, computerScore = 0;

for (let i = 1; i < 6; i++) {
    getHumanChoice()
    //get computer choice

    //compare choices
    //add score
}