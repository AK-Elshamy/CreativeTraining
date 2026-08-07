// ==========================
// Image Slider
// ==========================

let images = [];

let currentIndex = 0;

let timer = null;

let speed = 6000;


// XMLHttpRequest

let request = new XMLHttpRequest();

request.open(
    "GET",
    "https://jsonplaceholder.typicode.com/albums/1/photos"
);

request.send();

request.onreadystatechange = function () {

    if (request.readyState == 4 && request.status == 200) {

        images = JSON.parse(request.responseText);

        showImage();

    }

};


// Show Image

function showImage() {

    document.getElementById("image").src =
        images[currentIndex].url;

    document.getElementById("title").innerHTML =
        images[currentIndex].title;

}


// Next Image

function nextImage() {

    currentIndex++;

    if (currentIndex >= images.length) {

        currentIndex = 0;

    }

    showImage();

}


// Previous Image

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = images.length - 1;

    }

    showImage();

}


// Play Slider

function playSlider() {

    stopSlider();

    timer = setInterval(function () {

        nextImage();

    }, speed);

}


// Stop Slider

function stopSlider() {

    clearInterval(timer);

}


// Change Speed

function changeSpeed(newSpeed) {

    speed = newSpeed;

    playSlider();

}