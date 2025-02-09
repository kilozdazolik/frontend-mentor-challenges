const icon = document.querySelectorAll(".faq-icon");
const content = document.querySelectorAll(".faq-content");

icon.forEach((el, index) => {
  el.addEventListener("click", () => {
    content[index].classList.toggle("hidden");
    if (content[index].classList.contains("hidden")) {
      el.src = "assets/images/icon-plus.svg";
    } else {
      el.src = "assets/images/icon-minus.svg";
    }
  });
});

content.forEach((el) => {
  el.classList.add("hidden");
});
