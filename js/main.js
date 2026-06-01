import { loadUpgrades } from "./shop/api.js";
import { showUpgrades, updateCardsState } from "./shop/upgrade/upgrade.js";
import {
  applyCookiesPerSecond,
  incrementScore,
  updateCookiesPerSecondDisplay,
  updateScoreDisplay
} from "./counter/counter.js";

export function createElement(tagName, classNames = []) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}
const cps = document.getElementById("cookiePerSecond")
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
setInterval(() => {
  applyCookiesPerSecond(0.1);
  updateScoreDisplay(score);
  updateCardsState();
  updateCookiesPerSecondDisplay(cps);
}, 100);

initShop();
