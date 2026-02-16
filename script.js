const button = document.querySelector("#read-more-btn");
const extraText = document.querySelector("#extra-text");

button.addEventListener("click", function () {
  extraText.classList.toggle("hidden");

  if (extraText.classList.contains("hidden")) {
    button.textContent = "Read More";
  } else {
    button.textContent = "Read Less";
  }
});
