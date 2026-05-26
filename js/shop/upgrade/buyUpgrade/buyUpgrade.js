import {
  decrementScore,
  getScore,
  updateScoreDisplay,
} from "../../../counter/counter.js";
import { updateCardsState } from "../upgrade.js";

const score = document.getElementById("score");

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }

  decrementScore(upgrade.baseCost);
  updateScoreDisplay(score);
  updateCardsState();
}
