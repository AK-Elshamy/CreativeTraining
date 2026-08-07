// ==========================
// Contact Form
// ==========================

let users = [];

let editIndex = -1;

if (localStorage.getItem("users")) {

    users = JSON.parse(localStorage.getItem("users"));

}

showUsers();


// ==========================
// Add User
// ==========================

function addUser() {

    let title = document.querySelector("input[name='title']:checked").value;

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let card = document.getElementById("card").value;

    let save = document.getElementById("save").checked;

    let user = {

        title: title,

        name: name,

        email: email,

        card: card,

        save: save

    };

    if (editIndex == -1) {

        users.push(user);

    }

    else {

        users[editIndex] = user;

        editIndex = -1;

    }

    localStorage.setItem("users", JSON.stringify(users));

    clearForm();

    showUsers();

}


// ==========================
// Show Users
// ==========================

function showUsers() {

    let table = document.getElementById("users");

    table.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

        table.innerHTML +=

            "<tr>" +

            "<td>" + users[i].title + " - " + users[i].name + "</td>" +

            "<td>" + users[i].email + "</td>" +

            "<td>" + users[i].card + "</td>" +

            "<td>" + users[i].save + "</td>" +

            "<td><button onclick='editUser(" + i + ")'>Edit</button></td>" +

            "<td><button onclick='deleteUser(" + i + ")'>Delete</button></td>" +

            "</tr>";

    }

}


// ==========================
// Edit User
// ==========================

function editUser(index) {

    editIndex = index;

    if (users[index].title == "Mister") {

        document.querySelector("input[value='Mister']").checked = true;

    }

    else {

        document.querySelector("input[value='Miss']").checked = true;

    }

    document.getElementById("name").value = users[index].name;

    document.getElementById("email").value = users[index].email;

    document.getElementById("card").value = users[index].card;

    document.getElementById("save").checked = users[index].save;

}


// ==========================
// Delete User
// ==========================

function deleteUser(index) {

    users.splice(index, 1);

    localStorage.setItem("users", JSON.stringify(users));

    showUsers();

}


// ==========================
// Search User
// ==========================

function searchUser() {

    let text = document.getElementById("search").value.toLowerCase();

    let table = document.getElementById("users");

    table.innerHTML = "";

    for (let i = 0; i < users.length; i++) {

        if (users[i].name.toLowerCase().includes(text)) {

            table.innerHTML +=

                "<tr>" +

                "<td>" + users[i].title + " - " + users[i].name + "</td>" +

                "<td>" + users[i].email + "</td>" +

                "<td>" + users[i].card + "</td>" +

                "<td>" + users[i].save + "</td>" +

                "<td><button onclick='editUser(" + i + ")'>Edit</button></td>" +

                "<td><button onclick='deleteUser(" + i + ")'>Delete</button></td>" +

                "</tr>";

        }

    }

}


// ==========================
// Clear Form
// ==========================

function clearForm() {

    document.querySelector("input[value='Mister']").checked = true;

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("card").selectedIndex = 0;

    document.getElementById("save").checked = false;

}