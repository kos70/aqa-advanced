function printTextWithDelay(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}
printTextWithDelay('Привіт!', 2000); // Виведе "Привіт!" через 2 секунди