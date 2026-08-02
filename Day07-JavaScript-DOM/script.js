// ==========================
// Login Page
// ==========================

function login() {

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let login = {

        username: username,

        password: password

    };

    let result = document.getElementById("result");

    if (
        login.username == "admin" &&
        login.password == "123"
    ) {

        result.innerHTML = "Welcome";

        result.style.color = "green";

    }

    else {

        result.innerHTML = "Not Registered";

        result.style.color = "red";

    }

}


// ==========================
// Merge Arrays
// ==========================

function mergeArrays() {

    let firstArray = document.getElementById("array1").value.split(",");

    let secondArray = document.getElementById("array2").value.split(",");

    let merged = firstArray.concat(secondArray);

    let result = [];

    for (let i = 0; i < merged.length; i++) {

        let found = false;

        for (let j = 0; j < result.length; j++) {

            if (merged[i] == result[j]) {

                found = true;

                break;

            }

        }

        if (!found) {

            result.push(merged[i]);

        }

    }

    document.getElementById("output").innerHTML = result.join(", ");

}

// ==========================
// Todo List App
// ==========================

let tasks = [];

function addTask() {

    let taskName = document.getElementById("taskName").value;

    if (taskName == "") {

        return;

    }

    let task = {

        name: taskName,

        status: "Not Done"

    };

    tasks.push(task);

    document.getElementById("taskName").value = "";

    showTasks();

}

function showTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        let li = document.createElement("li");

        li.innerHTML =
            tasks[i].name +
            " ";

        let doneButton = document.createElement("button");

        doneButton.innerHTML = "Done";

        doneButton.onclick = function () {

            tasks[i].status = "Done";

            li.className = "done";

        };

        let deleteButton = document.createElement("button");

        deleteButton.innerHTML = "Delete";

        deleteButton.onclick = function () {

            tasks.splice(i, 1);

            showTasks();

        };

        li.appendChild(doneButton);

        li.appendChild(deleteButton);

        list.appendChild(li);

    }

}