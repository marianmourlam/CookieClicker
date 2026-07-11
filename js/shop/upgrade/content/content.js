import { createElement } from "../../../main.js";
import { getAmountUpgrade } from "../amount/amount.js";

export function createUpgradeContent(upgrade) {
  const content = createElement("div", ["flex", "upgradeContent"]);
  const titleRow = createElement("div", ["flex", "upgradeTitleRow"]);
  const title = createElement("h3");
  const amount = createElement("p", ["amountUpgrade"]);
  const description = createElement("p");
  const baseCost = createElement("p", ["cookieCost"]);

  const amountUpgrade = getAmountUpgrade(upgrade.name);

  title.textContent = upgrade.name;
  amount.textContent = amountUpgrade.toString();
  description.textContent = upgrade.description;
  baseCost.innerHTML = `<span class="baseCost">${upgrade.baseCost}</span> cookies`;

  amount.classList.toggle("amountUpgrade--hidden", amountUpgrade === 0);

  titleRow.append(title, amount);
  content.append(titleRow, description, baseCost);

  return { content, amount, baseCost };
}
