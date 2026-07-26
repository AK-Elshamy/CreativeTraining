// ==========================
// Task 1
// ==========================

let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}


// ==========================
// Task 2
// ==========================

let choice = confirm("Do you want to proceed?");

if (choice) {
    alert("You chose to proceed");
}
else {
    alert("Action canceled");
}


// ==========================
// Task 3
// ==========================

let num = 10;

num % 2 == 0 ? console.log("hi") : console.log("hello");


// ==========================
// Task 4
// ==========================

let age;

while (true) {

    age = prompt("Enter your age:");

    if (age == null) {
        break;
    }

    age = Number(age);

    if (age <= 0) {
        alert("Please enter a positive age.");
    }
    else if (age <= 10) {
        alert("Child");
    }
    else if (age <= 18) {
        alert("Teenager");
    }
    else if (age <= 50) {
        alert("Grown up");
    }
    else {
        alert("Old");
    }

}


// ==========================
// Task 5
// ==========================

let text = prompt("Enter a string:");

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

text = text.toLowerCase();

for (let j = 0; j < text.length; j++) {

    if (text[j] == "a") {
        a++;
    }
    else if (text[j] == "e") {
        e++;
    }
    else if (text[j] == "i") {
        i++;
    }
    else if (text[j] == "o") {
        o++;
    }
    else if (text[j] == "u") {
        u++;
    }

}

console.log("a = " + a);
console.log("e = " + e);
console.log("i = " + i);
console.log("o = " + o);
console.log("u = " + u);


// ==========================
// Task 6
// ==========================

let hour = Number(prompt("Enter hour (0-23):"));

if (hour == 0) {
    console.log("12 AM");
}
else if (hour < 12) {
    console.log(hour + " AM");
}
else if (hour == 12) {
    console.log("12 PM");
}
else {
    console.log((hour - 12) + " PM");
}


// ==========================
// Task 7
// ==========================

let word = prompt("Enter a word:");

let result = word.charAt(0).toUpperCase() + word.slice(1);

console.log(result);


// ==========================
// Task 8
// ==========================

let color = prompt("Enter your favorite color:");

let ok = confirm("You chose " + color + ". Is that correct?");

if (ok) {
    alert("Great choice!");
}
else {
    alert("Let's try again.");
}


// ==========================
// Task 9
// ==========================

let password = "";

while (password != "1234") {

    password = prompt("Enter password:");

}

alert("Welcome!");


// ==========================
// Task 10
// ==========================

let date1 = new Date("2025-01-01");

let date2 = new Date("2026-01-01");

if (date1 < date2) {
    console.log("Date1 is earlier");
}
else {
    console.log("Date2 is earlier");
}


// ==========================
// Task 11
// ==========================

let firstDate = new Date("2025-01-01");

let secondDate = new Date("2025-01-10");

let days = (secondDate - firstDate) / (1000 * 60 * 60 * 24);

console.log(days);


// ==========================
// Task 12
// ==========================

let sum = 0;

for (let j = 2; j <= 100; j += 2) {

    sum += j;

}

console.log(sum);


// ==========================
// Task 13
// ==========================

let message = "Hello World!";

console.log(message.substring(6, 11));


// ==========================
// Task 14
// ==========================

let number2 = 5.678;

console.log(number2.toFixed(2));


// ==========================
// Task 15
// ==========================

let value = Number(prompt("Enter a number:"));

if (value % 3 == 0 && value % 5 == 0) {
    console.log(true);
}
else {
    console.log(false);
}