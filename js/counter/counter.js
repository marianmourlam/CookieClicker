let score = 0;
let cookiesPerSecond = 0;

export function addCookiesPerSecond(amount) {
  cookiesPerSecond += amount;
}

export function applyCookiesPerSecond(deltaTimeInSeconds) {
  score += cookiesPerSecond * deltaTimeInSeconds;
}

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
  score.textContent = Math.floor(getScore()).toString();
}
export function getCookiesPerSecond() {
  return cookiesPerSecond;
}
export function updateCookiesPerSecondDisplay(cpsElement) {
  cpsElement.textContent = `par seconde: ${cookiesPerSecond.toFixed(1)}`;
}