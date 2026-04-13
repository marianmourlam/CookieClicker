let counter = 0;

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
    counter++;
    score.textContent = counter.toString();
});

async function loadUpgrades() {
    const response = await fetch('/assets/data/shop.json');
    await response.json();
}

let shopData = loadUpgrades()

for (let i = 0; i < shopData.length; i++) {
    let parent = document.createElement("div")
    let child = document.createElement("h3")
    parent.appendChild(child)
    child.innerText = shopData[i].name
}
