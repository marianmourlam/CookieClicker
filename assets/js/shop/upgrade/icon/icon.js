import {createElement} from "../upgrade";

export function createUpgradeIcon(iconClass) {
    const iconWrapper = createElement("div", ["upgradeIconWrapper", "flex"]);
    const icon = createElement("i");

    icon.className = iconClass;

    iconWrapper.appendChild(icon);

    return iconWrapper;
}