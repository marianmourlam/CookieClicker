let compteur = 0;

const cookie = document.getElementById("cookieButton");
const h2 = document.getElementById("score");

cookie.addEventListener("click", () => {
    compteur++;              // pas compteur = compteur++
    h2.textContent = compteur;
});