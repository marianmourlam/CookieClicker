import { createUpgradeContent } from "../content/content.js";
import { createElement } from "../upgrade.js";
import { createUpgradeIcon } from "../icon/icon.js";
import { createUpgradeCps } from "../cps/cps.js";
import { getScore } from "../../../counter/counter.js";
import { buyUpgrade } from "../buyUpgrade/buyUpgrade.js";

export function createUpgradeCard(upgrade) {
  const upgradeCard = createElement("div", ["flex", "upgradeCard"]);

  const icon = createUpgradeIcon(upgrade.icon);
  const content = createUpgradeContent(upgrade);
  const cps = createUpgradeCps(upgrade.cps);

  upgradeCard.append(icon, content, cps);
  upgradeCard.addEventListener("click", () => {
    buyUpgrade(upgrade, upgradeCard);
  });
  unlockCard(upgrade, upgradeCard);

  return upgradeCard;
}
export function unlockCard(upgrade, upgradeCard) {
  if (getScore() >= upgrade.baseCost) {
    upgradeCard.classList.add("upgradeCard--available");
  }
}
