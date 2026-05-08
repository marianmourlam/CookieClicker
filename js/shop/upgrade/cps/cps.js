import {createElement} from "../upgrade.js";

export function createUpgradeCps(cps) {
    const cpsContainer = createElement("div", ["flex"]);
    const cpsLabel = createElement("p");

    cpsLabel.innerHTML = `<span class="cps">+${cps}</span><br>par sec`;

    cpsContainer.appendChild(cpsLabel);

    return cpsContainer;
}