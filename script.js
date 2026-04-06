document.addEventListener("click", (event) => {
  const clickable = event.target.closest("a.btn-link, a.social-btn, button");

  if (!clickable) {
    return;
  }

  const emoji = document.createElement("span");
  const emojiChoices = ["✨", "🎉", "😊", "💫", "🔥", "🚀"];
  emoji.textContent = emojiChoices[Math.floor(Math.random() * emojiChoices.length)];
  emoji.className = "click-emoji";

  const rect = clickable.getBoundingClientRect();
  emoji.style.left = `${rect.left + rect.width / 2 + window.scrollX}px`;
  emoji.style.top = `${rect.top + window.scrollY - 8}px`;

  document.body.appendChild(emoji);

  window.setTimeout(() => {
    emoji.remove();
  }, 650);
});
