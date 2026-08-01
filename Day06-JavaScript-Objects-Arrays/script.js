// ==========================================
// 1. Car Object with Display Method
// ==========================================
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2023,

    display: function () {
        console.log("Brand: " + this.brand);
        console.log("Model: " + this.model);
        console.log("Year: " + this.year);
    }
};

console.log("--- Task 1: Car Object ---");
car.display();


// ==========================================
// 2. Loop Through Object Properties
// ==========================================
let student = {
    name: "Ahmed",
    age: 21,
    faculty: "BFCAI"
};

console.log("\n--- Task 2: Object Loop ---");
for (let key in student) {
    console.log(key + " : " + student[key]);
}


// ==========================================
// 3. Swap Keys and Values of an Object
// ==========================================
function swapObject(obj) {
    let newObject = {};
    for (let key in obj) {
        newObject[obj[key]] = key;
    }
    return newObject;
}

console.log("\n--- Task 3: Swap Keys and Values ---");
let personSwapper = { name: "Ahmed", city: "Cairo" };
console.log(swapObject(personSwapper));


// ==========================================
// 4. Merge Two Objects & Handle Conflicts
// ==========================================
function mergeObjects(obj1, obj2) {
    let result = {};

    for (let key in obj1) {
        result[key] = obj1[key];
    }

    for (let key in obj2) {
        if (result[key] != undefined) {
            result[key + "_1"] = obj2[key];
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

console.log("\n--- Task 4: Merge Objects ---");
let o1 = { name: "Ahmed", age: 21 };
let o2 = { age: 22, city: "Cairo" };
console.log(mergeObjects(o1, o2));


// ==========================================
// 5. Nested Person Object with Display Method
// ==========================================
let person = {
    name: "Ahmed",
    address: {
        city: "Menofia",
        country: "Egypt"
    },
    job: {
        title: "Student",
        company: "BFCAI"
    },
    display: function () {
        console.log("Name: " + this.name);
        console.log("City: " + this.address.city);
        console.log("Country: " + this.address.country);
        console.log("Job Title: " + this.job.title);
        console.log("Company: " + this.job.company);
    }
};

console.log("\n--- Task 5: Nested Object ---");
person.display();


// ==========================================
// 6. Sort Array of Objects by Property (age)
// ==========================================
let people = [
    { name: "Ali", age: 25 },
    { name: "Ahmed", age: 21 },
    { name: "Sara", age: 30 }
];

people.sort(function (a, b) {
    return a.age - b.age;
});

console.log("\n--- Task 6: Sorted Array of Objects ---");
console.log(people);


// ==========================================
// 7. Find Max and Min in an Array
// ==========================================
let numbers = [10, 25, 7, 100, 45, 3];

let max = numbers[0];
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

console.log("\n--- Task 7: Find Max and Min ---");
console.log("Maximum = " + max);
console.log("Minimum = " + min);


// ==========================================
// 8. Reverse Array Without Built-in Method
// ==========================================
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("\n--- Task 8: Reverse Array ---");
console.log(reversed);


// ==========================================
// 9. Simple Calculator Function
// ==========================================
function calculator() {
    let firstNumber = Number(prompt("Enter first number"));
    let operation = prompt("Enter operation (sum, multi, subtract, division)");
    let secondNumber = Number(prompt("Enter second number"));
    let result;

    if (operation == "sum") {
        result = firstNumber + secondNumber;
    } else if (operation == "multi") {
        result = firstNumber * secondNumber;
    } else if (operation == "subtract") {
        result = firstNumber - secondNumber;
    } else if (operation == "division") {
        result = firstNumber / secondNumber;
    } else {
        alert("Invalid Operation");
        return;
    }

    alert("Result = " + result);
}


// ==========================================
// 10. Login Authentication
// ==========================================
function login() {
    let username = prompt("Enter Username");
    let password = prompt("Enter Password");

    if (username == "admin" && password == "421$$") {
        alert("Welcome login success");
    } else if (username != "admin" && password != "421$$") {
        alert("Wrong Username and Password");
    } else if (username != "admin") {
        alert("Wrong Username");
    } else {
        alert("Wrong Password");
    }
}


// ==========================================
// 11. Guess the Number Game
// ==========================================
function generateRandom() {
    return Math.floor(Math.random() * 10);
}

function guessNumber() {
    let randomNumber = generateRandom();
    let userNumber = Number(prompt("Guess a number between 0 and 9"));

    if (userNumber == randomNumber) {
        alert("You guessed the correct number.");
    } else {
        alert("Wrong Guess! The correct number is " + randomNumber);
    }
}


// ==========================================
// 12. Add Discounted Price to Products
// ==========================================
let products = [
    { name: "Phone", price: 10000 },
    { name: "Laptop", price: 20000 },
    { name: "Mouse", price: 500 }
];

let discountedProducts = [];

for (let i = 0; i < products.length; i++) {
    discountedProducts.push({
        name: products[i].name,
        price: products[i].price,
        discountedPrice: products[i].price * 0.9
    });
}

console.log("\n--- Task 12: Products with Discount ---");
console.log(discountedProducts);


// ==========================================
// 13. Birth Date Validation & Object Creation
// ==========================================
function checkBirthDate(dateString) {
    if (
        dateString.length == 10 &&
        dateString[2] == "-" &&
        dateString[5] == "-"
    ) {
        let day = Number(dateString.substring(0, 2));
        let month = Number(dateString.substring(3, 5)) - 1;
        let year = Number(dateString.substring(6, 10));

        let date = new Date(year, month, day);
        alert(date.toDateString());
    } else {
        alert("Wrong Date Format");
    }
}

// let birthDate = prompt("Enter your birth date (DD-MM-YYYY)\nExample: 22-01-1999");
// checkBirthDate(birthDate);


// ==========================================
// 14. Get Day Name from Date String
// ==========================================
function getDayName(dateString) {
    let parts = dateString.split("-");
    let date = new Date(parts[2], parts[1] - 1, parts[0]);

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    return days[date.getDay()];
}

console.log("\n--- Task 14: Day Name ---");
console.log(getDayName("22-01-1999"));


// ==========================================
// 15. Phone Book App
// ==========================================
function startPhoneBook() {
    let contacts = [];

    while (true) {
        let operation = prompt("Enter operation (add, search, exit)");

        if (operation == "add") {
            let name = prompt("Enter contact name");
            let phone = prompt("Enter phone number");

            contacts.push({
                name: name,
                phone: phone
            });

        } else if (operation == "search") {
            let search = prompt("Enter name or phone");
            let found = false;

            for (let i = 0; i < contacts.length; i++) {
                if (
                    contacts[i].name == search ||
                    contacts[i].phone == search
                ) {
                    alert(
                        "Name: " + contacts[i].name +
                        "\nPhone: " + contacts[i].phone
                    );
                    found = true;
                    break;
                }
            }

            if (!found) {
                alert("Contact Not Found");
            }

        } else if (operation == "exit") {
            break;
        } else {
            alert("Invalid Operation");
        }
    }
}

// startPhoneBook();