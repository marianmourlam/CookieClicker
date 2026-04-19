let counter = 0;

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
    counter++;
    score.textContent = counter.toString();
});

async function loadUpgrades() {
    const response = await fetch("/assets/data/shop.json");
    return response.json();
}

(async () => {
    try {
        const upgrades = await loadUpgrades();
        console.log(upgrades);
        showUpgrades(upgrades);
    } catch (error) {
        console.error("Failed to load upgrades:", error);
    }
})();

function showUpgrades(upgrades) {
    const shop = document.getElementById("shop");

    for (const upgrade of upgrades) {
        const description = document.createElement("p");
        const baseCost = document.createElement("p")
        const parent = document.createElement("div");
        const child = document.createElement("h3");

        child.innerText = upgrade.name;
        description.innerText = upgrade.description;
        baseCost.innerText = upgrade.baseCost;

        parent.appendChild(child);
        parent.appendChild(description);
        parent.appendChild(baseCost);
        shop.appendChild(parent);
    }
}
