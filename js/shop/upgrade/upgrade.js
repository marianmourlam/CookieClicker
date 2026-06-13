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
      upgrade,
      upgradeCard: createdUpgradeCard.upgradeCard,
      amount: createdUpgradeCard.amount,
    });

    shop.appendChild(createdUpgradeCard.upgradeCard);
  }
}

export function updateCardsState() {
  for (const item of createdUpgradeCards) {
    unlockCard(item.upgrade, item.upgradeCard);
  }
}

function findCreatedUpgradeCard(upgrade) {
  return createdUpgradeCards.find((item) => item.upgrade.name === upgrade.name);
}

export function buyUpgrade(upgrade) {
  if (getScore() < upgrade.baseCost) {
    return;
  }

  const createdUpgradeCard = findCreatedUpgradeCard(upgrade);

  if (!createdUpgradeCard) {
    throw new Error(`Upgrade card not found for "${upgrade.name}"`);
  }

  const amountUpgrade = incrementAmountUpgrade(upgrade.name);
  createdUpgradeCard.amount.textContent = amountUpgrade.toString();
  createdUpgradeCard.amount.classList.remove("amountUpgrade--hidden");

  decrementScore(upgrade.baseCost);
  addCookiesPerSecond(upgrade.cps);
  updateScoreDisplay(scoreElement);
  updateCardsState();
}
