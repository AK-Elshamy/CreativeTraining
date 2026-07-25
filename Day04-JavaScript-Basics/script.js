// ==========================
// Task 1
// ==========================

let name = "John";

console.log(name);


// ==========================
// Task 2
// ==========================

let x = 10;
let y = 20;

let sum = x + y;

console.log(sum);


// ==========================
// Task 3
// ==========================

let city;

console.log(city);

city = "Cairo";

console.log(city);


// ==========================
// Task 4
// ==========================

alert("Welcome to our website!");


// ==========================
// Task 5
// ==========================

let answer = confirm("Are you sure you want to delete this item?");

console.log(answer);


// ==========================
// Task 6
// ==========================

let firstName = prompt("Enter your first name:");

let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

confirm("Your full name is: " + fullName);

let birthYear = prompt("Enter your birth year:");

let age = 2026 - birthYear;

document.write("<h2>Welcome " + fullName + "</h2>");
document.write("<h3>You are " + age + " years old.</h3>");


// ==========================
// Task 7
// ==========================

alert("Welcome to Calculator");

let num1 = Number(prompt("Enter first number:"));

let num2 = Number(prompt("Enter second number:"));

let result = num1 + num2;

alert(num1 + " + " + num2 + " = " + result);

console.log(result);


// ==========================
// Task 8
// ==========================

let salary = 10000;

console.log(typeof salary);


// ==========================
// Task 9 (Bonus)
// ==========================

let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log("a = " + a);
console.log("b = " + b);