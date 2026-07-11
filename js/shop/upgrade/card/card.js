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
  unlockCard(upgrade, upgradeCard);

  return {
    upgradeCard,
    amount: upgradeContent.amount,
  };
}

export function unlockCard(upgrade, upgradeCard) {
  if (getScore() >= upgrade.baseCost) {
    upgradeCard.classList.add("upgradeCard--available");
  } else {
    upgradeCard.classList.remove("upgradeCard--available");
  }
}
