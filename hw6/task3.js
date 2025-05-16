function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("хоча б один з аргументів не є числом");
  }

  if (denominator === 0) {
    throw new Error("ділення на 0 неможливе");
  }

  return numerator / denominator;
}

const calculations = [
  [8, 2],        // правильне ділення
  [5, 0],         // ділення на нуль
  ['a', 2],       // numerator не число
  [8, 'b'],       // denominator не число
  [22, 11]       // ще одне правильне ділення
];

for (const [num, den] of calculations) {
  try {
    const result = divide(num, den);
    console.log(`Результат: ${result}`);
  } catch (error) {
    console.error(`Помилка: ${error.message}`);
  } finally {
    console.log("Робота завершена\n");
  }
}