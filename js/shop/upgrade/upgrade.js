import { createUpgradeCard, unlockCard } from "./card/card.js";

export function createElement(tagName, classNames = []) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}
const createdUpgradeCards = [];

export function showUpgrades(upgrades) {
  const shop = document.getElementById("upgradeCardsContainer");

  for (const upgrade of upgrades) {
    const upgradeCard = createUpgradeCard(upgrade);

    createdUpgradeCards.push({
      upgrade: upgrade,
      upgradeCard: upgradeCard,
    });

    shop.appendChild(upgradeCard);
  }
}
export function updateCardsState() {
  for (const item of createdUpgradeCards) {
    unlockCard(item.upgrade, item.upgradeCard);
  }
}
