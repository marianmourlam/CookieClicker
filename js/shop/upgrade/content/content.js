import { createElement } from "../../../main.js";
import { getAmountUpgrade } from "../amount/amount.js";

export function createUpgradeContent(upgrade) {
  const content = createElement("div", ["flex", "upgradeContent"]);
  const titleRow = createElement("div", ["flex", "upgradeTitleRow"]);
  const title = createElement("h3");
  const amount = createElement("p", ["amountUpgrade"]);
  const description = createElement("p");
  const cost = createElement("p", ["cookieCost"]);

  const amountUpgrade = getAmountUpgrade(upgrade.name);

  title.textContent = upgrade.name;
  amount.textContent = amountUpgrade.toString();
  amount.classList.toggle("amountUpgrade--hidden", amountUpgrade === 0);
  description.textContent = upgrade.description;
  cost.innerHTML = `<span class="baseCost">${upgrade.baseCost}</span> cookies`;

  titleRow.append(title, amount);
  content.append(titleRow, description, cost);

  return { content, amount };
}
