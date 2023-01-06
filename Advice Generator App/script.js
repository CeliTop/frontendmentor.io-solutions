const adviceNumber = document.querySelector(".advice-number");
const adviceQuote = document.querySelector(".advice-quote");
const button = document.querySelector(".random-btn");

function updateQuote() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = `ADVICE #${data.slip.id}`;
      adviceQuote.textContent = `"${data.slip.advice}"`;
    });
}

button.addEventListener("click", updateQuote);
