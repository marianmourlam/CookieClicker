let counter = 0;

const cookie = document.getElementById("cookieButton");
const score = document.getElementById("score");

cookie.addEventListener("click", () => {
    counter++;
    score.textContent = counter.toString();
});
