let counter = 0;

export function incrementScore() {
    counter++;
}

export function getScore() {
    return counter;
}

export function updateScoreDisplay(scoreElement) {
    scoreElement.textContent = getScore().toString();
}