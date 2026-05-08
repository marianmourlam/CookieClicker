import {createElement} from "../upgrade.js";

export function createUpgradeIcon(iconClass) {
    const iconContainer = createElement("div", ["flex"]);
    const icon = createElement("i");

    icon.className = iconClass;

    iconContainer.appendChild(icon);

    return iconContainer;
}