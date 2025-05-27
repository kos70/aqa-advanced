const person = {
  firstName: "John",
  lastName: "Doe",
  age: 33
};
person.email = "JohnDoe@example.com";
delete person.age;

console.log(person);