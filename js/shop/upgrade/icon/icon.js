import { createElement } from "../../../main.js";

export function createUpgradeIcon(iconClass) {
  const iconContainer = createElement("div", ["upgradeIcon", "flex"]);
  const icon = createElement("i");

  icon.className = iconClass;

  iconContainer.appendChild(icon);

  return iconContainer;
}
