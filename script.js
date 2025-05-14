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

//Function to play one round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore += 1;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  
    console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);
  }



