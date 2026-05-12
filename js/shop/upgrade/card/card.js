import { createUpgradeContent } from "../content/content.js";
import { createElement } from "../upgrade.js";
import { createUpgradeIcon } from "../icon/icon.js";
import { createUpgradeCps } from "../cps/cps.js";

export function createUpgradeCard(upgrade) {
  const upgradeCard = createElement("div", ["flex", "upgradeCard"]);

  const icon = createUpgradeIcon(upgrade.icon);
  const content = createUpgradeContent(upgrade);
  const cps = createUpgradeCps(upgrade.cps);

  upgradeCard.append(icon, content, cps);

  return upgradeCard;
}
