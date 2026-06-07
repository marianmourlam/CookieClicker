import { createUpgradeCard, unlockCard } from "./card/card.js";

const createdUpgradeCards = [];

export function showUpgrades(upgrades) {
  const shop = document.getElementById("upgradeCardsContainer");

  for (const upgrade of upgrades) {
    const upgradeCard = createUpgradeCard(upgrade);

    createdUpgradeCards.push({
      upgrade: upgrade,
      upgradeCard: upgradeCard,
      purchasedCount: 0,
    });

    shop.appendChild(upgradeCard);
  }
}

export function updateCardsState() {
  for (const item of createdUpgradeCards) {
    unlockCard(item.upgrade, item.upgradeCard);
  }
}
