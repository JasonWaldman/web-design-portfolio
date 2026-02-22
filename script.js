// Release 7 — Custom JavaScript Behavior
// Toggles extra context text for the interactive story section

const button = document.querySelector("#read-more-btn");
const extraText = document.querySelector("#extra-text");

if (button && extraText) {
  button.addEventListener("click", () => {
    extraText.classList.toggle("hidden");

    const isHidden = extraText.classList.contains("hidden");

    if (isHidden) {
      button.textContent = "Read More";
      button.setAttribute("aria-expanded", "false");
    } else {
      button.textContent = "Read Less";
      button.setAttribute("aria-expanded", "true");
    }
  });
}
