
function handleEven() {
  console.log("number is even");
}
function handleOdd() {
  console.log("number is odd");
}
function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback();
    oddCallback();
  }
}
handleNum(8, handleEven, handleOdd); // number is even
handleNum(3, handleEven, handleOdd);  // number is odd