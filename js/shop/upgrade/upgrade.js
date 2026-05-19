import { createUpgradeCard } from "./card/card.js";

export function createElement(tagName, classNames = []) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}

export function showUpgrades(upgrades) {
  const shop = document.getElementById("upgradeCardsContainer");

  for (const upgrade of upgrades) {
    const upgradeCard = createUpgradeCard(upgrade);
    shop.appendChild(createUpgradeCard(upgrade));
  }
}
function updateCardsState(upgradeCard) {
  for (const upgrade of upgrades) {
    unlockCard(upgrade, upgradeCard);
  }
}

// À chaque clic sur le cookie,
// on veut vérifier l’état de toutes les cards.
// Cette fonction va donc parcourir les cards
// et appeler unlockCard pour chacune.