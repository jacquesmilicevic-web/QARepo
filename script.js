document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.remove("click-animate");
      // Restart animation for repeated clicks.
      void button.offsetWidth;
      button.classList.add("click-animate");
    });

    button.addEventListener("animationend", () => {
      button.classList.remove("click-animate");
    });
  });
});
