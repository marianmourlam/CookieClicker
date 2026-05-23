import { loadUpgrades } from "./shop/api.js";
import { showUpgrades, updateCardsState } from "./shop/upgrade/upgrade.js";
import { incrementScore, updateScoreDisplay } from "./counter/counter.js";

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
  incrementScore();
  updateScoreDisplay(score);
  updateCardsState();
});

async function initShop() {
  try {
    const upgrades = await loadUpgrades();
    showUpgrades(upgrades);
  } catch (error) {
    console.error("Failed to load upgrade:", error);
  }
}

initShop();
