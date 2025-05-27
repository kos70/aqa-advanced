const users = [
  { name: "John", email: "john@example.com", age: 33 },
  { name: "Jane", email: "jane@example.com", age: 27 },
  { name: "SomeGuy", email: "someGuy@example.com", age: 23 }
];
for (const { name, email, age } of users) {
  console.log(`name: ${name}, Email: ${email}, age: ${age}`);
}