import { createUpgradeContent } from "../content/content.js";
import { createElement } from "../upgrade.js";
import { createUpgradeIcon } from "../icon/icon.js";
import { createUpgradeCps } from "../cps/cps.js";
import {getScore} from "../../../counter/counter.js";

export function createUpgradeCard(upgrade) {
  const upgradeCard = createElement("div", ["flex", "upgradeCard"]);

  const icon = createUpgradeIcon(upgrade.icon);
  const content = createUpgradeContent(upgrade);
  const cps = createUpgradeCps(upgrade.cps);

  upgradeCard.append(icon, content, cps);
  unlockCard(upgrade, upgradeCard);
  return upgradeCard;
}
function unlockCard(upgrade, upgradeCard) {
  if (getScore() >= upgrade.baseCost) {
    upgradeCard.classList.add("upgradeCard--available");
    console.log("card Disponible");
  }
}


