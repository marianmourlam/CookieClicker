import { createElement } from "../upgrade.js";

export function createUpgradeContent(upgrade) {
  const content = createElement("div", ["flex", "upgradeContent"]);

  const title = createElement("h3");
  const description = createElement("p");
  const cost = createElement("p", ["cookieCost"]);

  title.textContent = upgrade.name;
  description.textContent = upgrade.description;
  cost.innerHTML = `<span class="baseCost">${upgrade.baseCost}</span> cookies`;

  content.append(title, description, cost);

  return content;
}
