import { loadUpgrades } from "./shop/api.js";
import { showUpgrades, updateCardsState } from "./shop/upgrade/upgrade.js";
import {
  applyCookiesPerSecond,
  incrementScore,
  updateCookiesPerSecondDisplay,
  updateScoreDisplay,
} from "./score/score.js";
import { playCookieBounce } from "./cookie/cookie.js";
import { showClickFeedback } from "./cookie/clickFeedback/clickFeedback.js";

export function createElement(tagName, classNames = []) {
  const element = document.createElement(tagName);

  element.classList.add(...classNames);

  return element;
}
const cps = document.getElementById("cookiePerSecond");
const cookie = document.getElementById("cookieButton");
const cookieContainer = document.querySelector(".cookieButtonContainer");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
  incrementScore();
  updateScoreDisplay(score);
  updateCardsState();
  playCookieBounce(cookie);
  showClickFeedback(cookieContainer);
});
cookie.addEventListener("animationend", () => {
  cookie.classList.remove("cookieButton--clicked");
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
