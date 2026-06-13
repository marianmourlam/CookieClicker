import { createUpgradeCard, unlockCard } from "./card/card.js";
import {
  addCookiesPerSecond,
  decrementScore,
  getScore,
  updateScoreDisplay,
} from "../../score/score.js";
import { incrementAmountUpgrade } from "./amount/amount.js";

const scoreElement = document.getElementById("score");
const createdUpgradeCards = [];

export function showUpgrades(upgrades) {
  const shop = document.getElementById("upgradeCardsContainer");
  for (const upgrade of upgrades) {
    const createdUpgradeCard = createUpgradeCard(upgrade);

    createdUpgradeCards.push({
      upgrade: upgrade,
      upgradeCard: createdUpgradeCard.upgradeCard,
      amount: createdUpgradeCard.amount,
      purchasedCount: 0,
    });
    shop.appendChild(createdUpgradeCard.upgradeCard);
  }
}

export function updateCardsState() {
  for (const item of createdUpgradeCards) {
    unlockCard(item.upgrade, item.upgradeCard);
  }
}

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }
  incrementAmountUpgrade(upgrade.name);
  decrementScore(upgrade.baseCost);
  addCookiesPerSecond(upgrade.cps);
  updateScoreDisplay(scoreElement);
  updateCardsState();
}
