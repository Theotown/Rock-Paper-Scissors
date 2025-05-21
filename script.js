const choices = ['rock', 'paper', 'scissors'];
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;

    document.querySelectorAll('.choice').forEach(button => {
      button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        document.getElementById('player-choice').textContent = emoji(playerChoice);
        document.getElementById('computer-choice').textContent = emoji(computerChoice);

        const result = getResult(playerChoice, computerChoice);
        updateScore(result);
        updateUI(result);
      });
    });

    function getResult(player, computer) {
      player = player.toLowerCase();

      if (player === computer) return "It's a tie!";
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {
        return 'You win!';
      } else {
        return 'You lose!';
      }
    }

    function updateScore(result) {
      if (result === 'You win!') playerScore++;
      else if (result === 'You lose!') computerScore++;
    }

    function updateUI(result) {
      document.getElementById('round').textContent = ++round;
      document.getElementById('player-score').textContent = playerScore;
      document.getElementById('computer-score').textContent = computerScore;

      let message = '';
      if (result === 'You win!') {
        message = 'You win this round!';
      } else if (result === 'You lose!') {
        message = 'Computer wins this round!';
      } else {
        message = "It's a draw!";
      }

      document.getElementById('message').textContent = message;
    }

    function emoji(choice) {
      return choice === 'rock' ? '✊' : choice === 'paper' ? '✋' : '✌️';
    }