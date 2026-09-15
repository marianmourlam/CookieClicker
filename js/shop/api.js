const PROD_API_URL = "https://cookieclicker.infinityfreeapp.com/php/index.php";
const LOCAL_API_URL = "./php/index.php";

function getUpgradesUrl() {
  return window.location.hostname.includes("github.io")
    ? PROD_API_URL
    : LOCAL_API_URL;
}

export async function loadUpgrades() {
  const response = await fetch(getUpgradesUrl());
  if (!response.ok) {
    throw new Error("Failed to load upgrade");
  }
  return response.json();
}
