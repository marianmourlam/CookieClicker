import { loadUpgrades } from "./shop/api.js";
import { showUpgrades } from "./shop/upgrade/upgrade.js";
import { incrementScore, updateScoreDisplay } from "./counter/counter.js";

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
  incrementScore();
  updateScoreDisplay(score);
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
