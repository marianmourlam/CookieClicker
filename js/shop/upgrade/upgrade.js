import {createUpgradeCard} from "./card/card.js";

export function createElement(tagName, classNames = []) {
    const element = document.createElement(tagName);

    element.classList.add(...classNames);

    return element;
}

export function showUpgrades(upgrades) {
    const shop = document.getElementById("shop");

    for (const upgrade of upgrades) {
        shop.appendChild(createUpgradeCard(upgrade));
    }
}
