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


//Function to play full game
function playGame() {
    humanScore = 0;
    computerScore = 0;
  
    for (let i = 1; i <= 5; i++) {
      console.log(`\nRound ${i}`);
      const humanChoice = getHumanChoice();
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    }
  
    console.log("\nFinal Score:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);
  
    if (humanScore > computerScore) {
      console.log("🎉 You won the game!");
    } else if (computerScore > humanScore) {
      console.log("💻 Computer wins the game!");
    } else {
      console.log("🤝 It's a tie game!");
    }
  }
  
  // Start the game
  playGame();
