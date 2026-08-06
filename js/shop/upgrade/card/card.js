import { createUpgradeContent } from "../content/content.js";
import { createUpgradeIcon } from "../icon/icon.js";
import { createUpgradeCps } from "../cps/cps.js";
import { getScore } from "../../../score/score.js";
import { createElement } from "../../../main.js";
import { buyUpgrade } from "../upgrade.js";
import { increasePriceByPercentage } from "../baseCost/baseCost.js";

export function createUpgradeCard(upgrade) {
  const upgradeCard = createElement("div", ["flex", "upgradeCard"]);
  const icon = createUpgradeIcon(upgrade.icon);
  const upgradeContent = createUpgradeContent(upgrade);
  const cps = createUpgradeCps(upgrade.cps);

  upgradeCard.append(icon, upgradeContent.content, cps);
  upgradeCard.addEventListener("click", () => {
    buyUpgrade(upgrade);
    upgrade.baseCost = increasePriceByPercentage(upgrade.baseCost);
  });
  upgradeCard.addEventListener("animationend", () => {
    upgradeCard.classList.remove("upgradeCard--unlocking");
  });
  unlockCard(upgrade, upgradeCard, { animate: false });

  return {
    upgradeCard,
    amount: upgradeContent.amount,
    baseCost: upgradeContent.baseCost,
  };
}

export function unlockCard(upgrade, upgradeCard, { animate = true } = {}) {
  const isAvailable = getScore() >= upgrade.baseCost;
  const wasAvailable = upgradeCard.classList.contains("upgradeCard--available");

  upgradeCard.classList.toggle("upgradeCard--available", isAvailable);

  if (animate && isAvailable && !wasAvailable) {
    playUnlockAnimation(upgradeCard);
  }
}

function playUnlockAnimation(upgradeCard) {
  upgradeCard.classList.remove("upgradeCard--unlocking");
  void upgradeCard.offsetWidth;
  upgradeCard.classList.add("upgradeCard--unlocking");
}
