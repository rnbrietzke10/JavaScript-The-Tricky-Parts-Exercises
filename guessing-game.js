function guessingGame() {
  const randNum = Math.floor(Math.random() * 100);
  let gameOver = false;
  let numberOfGuesses = 0;

  return function guess(num) {
    if (gameOver) {
      return 'The game is over, you already won!';
    }
    numberOfGuesses++;
    if (num === randNum) {
      gameOver = true;
      return `You win! You found ${num} in ${numberOfGuesses} ${
        numberOfGuesses === 1 ? 'guess' : 'guesses'
      }.`;
    }
    if (num > randNum) return `${num} is too high!`;
    if (num < randNum) return `${num} is too low!`;
  };
}

module.exports = { guessingGame };
