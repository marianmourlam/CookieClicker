import { createElement } from "../../../main.js";
import { getAmountUpgrade } from "../amount/amount.js";

export function createUpgradeContent(upgrade) {
  const content = createElement("div", ["flex", "upgradeContent"]);

  const title = createElement("h3");
  const amount = createElement("p", ["amountUpgrade"]);
  const description = createElement("p");
  const cost = createElement("p", ["cookieCost"]);

  let amountUpgrade = getAmountUpgrade();
  console.log(amountUpgrade);

  title.textContent = upgrade.name;
  amount.textContent = amountUpgrade;
  description.textContent = upgrade.description;
  cost.innerHTML = `<span class="baseCost">${upgrade.baseCost}</span> cookies`;

  content.append(title, description, cost, amount);

  return { content, amount };
}
