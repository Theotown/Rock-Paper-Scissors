//Global score variables
let humanScore = 0;
let computerScore = 0;

//Function to get computer's random choice
function getComputerChoice() {
    const randomNumber = Math.random();
    if(randomNumber < 0.33) {
        return "rock"
    } else if(randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

//Function to get human's choice
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:").toLowerCase();
  }
 



