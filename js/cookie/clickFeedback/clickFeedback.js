import { createElement } from "../../main.js";

const HORIZONTAL_SPREAD_IN_PERCENT = 60;
const VERTICAL_SPREAD_IN_PERCENT = 40;

function randomPositionInPercent(spread) {
  return 50 + (Math.random() - 0.5) * spread;
}

export function showClickFeedback(container, amount = 1) {
  const feedback = createElement("span", ["clickFeedback"]);

  feedback.textContent = `+${amount}`;
  feedback.style.left = `${randomPositionInPercent(HORIZONTAL_SPREAD_IN_PERCENT)}%`;
  feedback.style.top = `${randomPositionInPercent(VERTICAL_SPREAD_IN_PERCENT)}%`;
  feedback.addEventListener("animationend", () => {
    feedback.remove();
  });

  container.appendChild(feedback);
}
