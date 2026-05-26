import {createElement} from "../upgrade";

export function createUpgradeStats(cps) {
    const stats = createElement("div", ["upgradeStats", "flex"]);
    const cpsElement = createElement("p");

    cpsElement.innerHTML = `<span class="cps">+${cps}</span><br>par sec`;

    stats.appendChild(cpsElement);

    return stats;
}