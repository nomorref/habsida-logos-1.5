// accessing DOM element
const showButton = document.querySelector(".show-button");
const showButtonText = document.querySelector(".button-text");
const elements = document.querySelectorAll(".brand-list__item--hideable"); // [] - array

showButton.addEventListener("click", function () {
  // if hidden
  const isVisible = elements[0].classList.contains("hidden"); // true | false

  // toggle hidden state
  elements.forEach(function (element) {
    element.classList.toggle("hidden");
  });
  // change button text according to the state
  if (isVisible) {
    showButtonText.textContent = "Скрыть";
  } else {
    showButtonText.textContent = "Показать все";
  }
});
