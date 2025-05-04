const firstName1 = "John ";
const lastName1 = "Doe";
const firstName2 = "Jane ";
const lastName2 = lastName1;
const welcomeUser = "Welcome, " + firstName1 + lastName1 + " and " + firstName2 + lastName2;

const welcomeTemplate = `Welcome, ${firstName1&&lastName1} and ${firstName2&&lastName2}!`;

console.log("message:", welcomeUser);
console.log("template:", welcomeTemplate)