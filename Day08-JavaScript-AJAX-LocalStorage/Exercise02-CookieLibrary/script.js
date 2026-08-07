// ==========================
// Set Cookie
// ==========================

function setCookie(name, value) {

    document.cookie = name + "=" + value;

}


// ==========================
// Get Cookies
// ==========================

function getCookies() {

    let cookies = document.cookie.split(";");

    return cookies;

}


// ==========================
// Check Cookie
// ==========================

function hasCookie(name) {

    let cookies = getCookies();

    for (let i = 0; i < cookies.length; i++) {

        let cookie = cookies[i].trim();

        if (cookie.startsWith(name + "=")) {

            return true;

        }

    }

    return false;

}


// ==========================
// Test Set Cookie
// ==========================

function addCookie() {

    setCookie("username", "Ahmed");

    document.getElementById("result").innerHTML =
        "Cookie Saved";

}


// ==========================
// Test Get Cookies
// ==========================

function showCookies() {

    let cookies = getCookies();

    document.getElementById("result").innerHTML =
        cookies.join("<br>");

}


// ==========================
// Test Check Cookie
// ==========================

function checkCookie() {

    if (hasCookie("username")) {

        document.getElementById("result").innerHTML =
            "Cookie Exists";

    }

    else {

        document.getElementById("result").innerHTML =
            "Cookie Not Found";

    }

}