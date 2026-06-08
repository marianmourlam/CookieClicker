import {
  addCookiesPerSecond,
  decrementScore,
  getScore,
  updateScoreDisplay,

} from "../../../score/score.js";
import { updateCardsState } from "../upgrade.js";
import {incrementAmountUpgrade, updateAmountUpgrade} from "../amount/amount.js";

const scoreElement = document.getElementById("score");
const amountUpgradeElement = document.getElementsByClassName("amountUpgrade");

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }
  incrementAmountUpgrade(upgrade.name);
  // updateAmountUpgrade(amountUpgradeElement);

  decrementScore(upgrade.baseCost);
  addCookiesPerSecond(upgrade.cps);

  updateScoreDisplay(scoreElement);
  updateCardsState();
}

