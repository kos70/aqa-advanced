//task 1
function getRectangleArea(width, height) {
    return width * height;
  }
  console.log("Function Declaration:", getRectangleArea(5, 10));
//task 2
  const getRectangleAreaExp = function(width, height) {
    return width * height;
  };
  console.log("Function Expression:", getRectangleAreaExp(5, 10));
//task 3
  const getRectangleAreaArrow = (width, height) => width * height;
  console.log("Arrow Function:", getRectangleAreaArrow(5, 10));