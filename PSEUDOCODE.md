# Pseudocode: Rock, Paper, Scissors Game

## Objective:
Build a console-based Rock, Paper, Scissors game where the human plays against the computer for 5 rounds.

---

1. Setup variables:
   - humanScore = 0
   - computerScore = 0

2. Define the function getComputerChoice():
   a. Generate a random number using Math.random().
   b. If the number is less than 0.33, return "rock".
   c. Else if the number is less than 0.66, return "paper".
   d. Else, return "scissors".

3. Define the function getHumanChoice():
   a. Prompt the user to input "rock", "paper", or "scissors".
   b. Convert the input to lowercase.
   c. Return the human's choice.

4. Define the function playRound(humanChoice, computerChoice):
   a. Convert humanChoice to lowercase.
   b. Compare choices:
      - If equal → Tie.
      - Else if human beats computer → Increase humanScore.
      - Else → Increase computerScore.
   c. Log the round result and updated score.

5. Define the function playGame():
   a. Reset scores to 0.
   b. Loop 5 times:
      - Get humanChoice and computerChoice.
      - Call playRound().
   c. After loop, compare scores:
      - humanScore > computerScore → Human wins.
      - computerScore > humanScore → Computer wins.
      - Else → Tie game.
   d. Log the final result.

6. Call playGame() to start.
