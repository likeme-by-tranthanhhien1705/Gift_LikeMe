function playSound() {
  const audio = new Audio("sound/Huh02.mp3");
  audio.play().catch(error => {
    console.log("Trình duyệt chặn tự động phát âm thanh: ", error);
  });
}
