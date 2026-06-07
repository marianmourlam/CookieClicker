import {
  addCookiesPerSecond,
  decrementScore,
  getScore,
  updateScoreDisplay,
} from "../../../score/score.js";
import { updateCardsState } from "../upgrade.js";
import {incrementAmountUpgrade} from "../amount/amount.js";

const scoreElement = document.getElementById("score");

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }

  decrementScore(upgrade.baseCost);
  addCookiesPerSecond(upgrade.cps);

  updateScoreDisplay(scoreElement);
  updateCardsState();
  incrementAmountUpgrade();
}

