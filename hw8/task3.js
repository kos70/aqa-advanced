const car1 = {
  brand: "Arabic",
  model: "Mustang",
  year: 1111
};
const car2 = {
  brand: "Arabic",
  model: "Mustang",
  owner: "Abdul al Hazred"
};
const car3 = {
  ...car1,
  ...car2
};
console.log(car3);