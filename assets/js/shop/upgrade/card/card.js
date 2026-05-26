import {createUpgradeContent} from "../content/content";
import {createElement} from "../upgrade";
import {createUpgradeIcon} from "../icon/icon";
import {createUpgradeStats} from "../stat/stat";

export function createUpgradeCard(upgrade) {
    const upgradeCard = createElement("div", ["upgradeCard", "flex"]);

    const iconWrapper = createUpgradeIcon(upgrade.icon);
    const content = createUpgradeContent(upgrade);
    const stats = createUpgradeStats(upgrade.cps);

    upgradeCard.append(iconWrapper, content, stats);

    return upgradeCard;
}