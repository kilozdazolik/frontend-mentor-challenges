const card = document.querySelector(".card");
const cardAfter = document.querySelector(".card--after");
const numbers = document.querySelectorAll(".number");
const selectedNumber = document.querySelector(".selected-number");
const btnSubmit = document.querySelector(".button-submit");

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    btnSubmit.addEventListener("click", () => {
      card.style.display = "none";
      cardAfter.style.display = "block";

      selectedNumber.innerHTML = number.textContent;
    });
  });
});

btnSubmit.addEventListener("click", () => {
  card.style.display = "none";
  cardAfter.style.display = "block";
});
