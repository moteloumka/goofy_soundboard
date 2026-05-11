document.querySelectorAll(".sound-button").forEach((button) => {
  button.addEventListener("click", () => {
    const soundPath = button.dataset.sound;
    const audio = new Audio(soundPath);

    audio.currentTime = 0;
    audio.play().catch((error) => {
      console.error("Audio failed to play:", error);
    });
  });
});