# Rock-Paper-Scissors


## Overview

This is a simple **Rock, Paper, Scissors** game implemented using JavaScript, where the user plays against the computer. The game runs for **5 rounds**, keeping track of the scores and announcing a final winner based on the total score.

## Features

- **Human vs Computer**: The game simulates a match where the human player chooses between "rock", "paper", or "scissors", and the computer randomly selects one of the same options.
- **5 Rounds**: The game is played over **5 rounds**, and the score is updated after each round.
- **Case Insensitivity**: The human's input is case-insensitive, so they can input `"Rock"`, `"rock"`, `"RoCk"`, etc.
- **Round Winner**: After each round, the winner is displayed, and the score is updated.
- **Game End**: After 5 rounds, the game announces the winner based on the score, or if it's a tie.

## Setup

1. Create a new folder for your project.
2. Inside the folder, create:
   - `index.html` (your HTML file)
   - `script.js` (your JavaScript file)
3. Link your `script.js` file inside your HTML file.
4. Open the `index.html` file in a browser to play the game.

## How It Works

### 1. **Computer's Choice**:  
The computer's choice is randomly selected from "rock", "paper", or "scissors" using the `Math.random()` method.

### 2. **Human's Choice**:  
The player is prompted to enter "rock", "paper", or "scissors". The input is case-insensitive, so it doesn't matter if the player types `"rock"`, `"Rock"`, `"ROCK"`, etc.

### 3. **Round Logic**:  
Each round compares the human's choice to the computer's choice:
- If the choices are the same, it's a tie.
- If the human wins, the human's score is incremented.
- If the computer wins, the computer's score is incremented.

### 4. **Game Loop**:  
The game loops for 5 rounds, and the scores are updated after each round. After all 5 rounds, the player is declared the winner based on the total score.

---

## Future Enhancements

- Add input validation for incorrect or incomplete user input.
- Display a graphical user interface (GUI) with buttons for choices.
- Allow the player to choose the number of rounds to play.

## License

This project is for learning propose.
