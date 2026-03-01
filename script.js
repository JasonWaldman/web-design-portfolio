// Release 8 — Improved Custom JavaScript Behavior
// Accessible toggle for "More About Me" section

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("read-more-btn");
  const extraText = document.getElementById("extra-text");

  if (!button || !extraText) return;

  // Set correct initial aria state
  const startsHidden = extraText.classList.contains("hidden");
  button.setAttribute("aria-expanded", startsHidden ? "false" : "true");

  button.addEventListener("click", () => {
    extraText.classList.toggle("hidden");

    const isExpanded = !extraText.classList.contains("hidden");

    button.textContent = isExpanded ? "Read Less" : "Read More";
    button.setAttribute("aria-expanded", isExpanded ? "true" : "false");
  });
});
