let scoreElement = 0;

export function incrementScore() {
  scoreElement++;
}
export function decrementScore(amount) {
  scoreElement -= amount;
}

export function getScore() {
  return scoreElement;
}

export function updateScoreDisplay(score) {
  score.textContent = getScore().toString();
}
