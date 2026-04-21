let counter = 0;

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
    counter++;
    score.textContent = counter.toString();
});

async function loadUpgrades() {
    const response = await fetch("/shop.json");
    return response.json();
}

(async () => {
    try {
        const upgrades = await loadUpgrades();
        showUpgrades(upgrades);
    } catch (error) {
        console.error("Failed to load upgrades:", error);
    }
})();

function showUpgrades(upgrades) {
    const shop = document.getElementById("shop");

    for (const upgrade of upgrades) {
        const upgradeIcon = document.createElement("p");
        const upgradeCps = document.createElement("p");
        const upgradeDescription = document.createElement("p");
        const upgradeCost = document.createElement("p")
        const upgradeCard = document.createElement("div");
        const upgradeTitle = document.createElement("h4");
        const upgradeIconWrapper = document.createElement("div");
        const upgradeContent = document.createElement("div");
        const upgradeStats = document.createElement("div");

        upgradeTitle.innerText = upgrade.name;
        upgradeDescription.innerText = upgrade.description;
        upgradeCost.innerText = upgrade.baseCost + " cookies";
        upgradeCps.innerText = upgrade.cps + " seconde";
        upgradeIcon.innerText = upgrade.icon;
        
        upgradeContent.appendChild(upgradeTitle);


        upgradeContent.appendChild(upgradeDescription);
        upgradeContent.appendChild(upgradeCost);
        upgradeStats.appendChild(upgradeCps);
        upgradeIconWrapper.appendChild(upgradeIcon);
        shop.appendChild(upgradeCard);
        upgradeCard.appendChild(upgradeIconWrapper)
        upgradeCard.appendChild(upgradeContent);
        upgradeCard.appendChild(upgradeStats)


        upgradeCard.classList.add("upgradeCard","flex");
        upgradeIconWrapper.classList.add("upgradeIconWrapper","flex");
        upgradeContent.classList.add("upgradeContent","flex");
        upgradeStats.classList.add("upgradeStats","flex");
    }
}
