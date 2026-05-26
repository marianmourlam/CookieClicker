import {
  decrementScore,
  getScore,
  updateScoreDisplay,
} from "../../../counter/counter.js";
import { updateCardsState } from "../upgrade.js";

const scoreElement = document.getElementById("score");

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }

  decrementScore(upgrade.baseCost);
  updateScoreDisplay(scoreElement);
  updateCardsState();
}
