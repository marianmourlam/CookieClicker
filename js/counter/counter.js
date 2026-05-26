let score = 0;

export function incrementScore() {
  score++;
}
export function decrementScore(amount) {
  score -= amount;
}

export function getScore() {
  return score;
}

export function updateScoreDisplay(score) {
  score.textContent = getScore().toString();
}

