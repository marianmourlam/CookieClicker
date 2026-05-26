import {createElement} from "../upgrade";

export function createUpgradeContent(upgrade) {
    const content = createElement("div", ["upgradeContent", "flex"]);

    const title = createElement("h3");
    const description = createElement("p");
    const cost = createElement("p", ["cookieCost"]);

    title.textContent = upgrade.name;
    description.textContent = upgrade.description;
    cost.innerHTML = `<span class="baseCost">${upgrade.baseCost}</span> cookies`;

    content.append(title, description, cost);

    return content;
}