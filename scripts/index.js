
const aPic = document.querySelector(".js-picture");
const bunnyBtn = document.querySelector(".js-bunny")
const kittyBtn = document.querySelector(".js-kitty")

// #1 A reference to the .js-photo-container
const photoContainer = document.querySelector(`.js-photo-container`);

// #2 A function that can accept an image path string and return an image DOM element, whose .src points to that image path
function imgWithPath(imgPath) {
    // 1. Create an img element
        const img = document.createElement(`img`);
            // img is html tag name
    // 2. Set its path
        img.src = imgPath;
    // 3. Return the element
        return img;
}

function appendImageToContainer(imgEl) {
    photoContainer.appendChild(imgEl);
}

function displayImages(imageArray){
    imageArray
        .map(imgWithPath)
        .map(appendImageToContainer);
};
images = [
    `images/bunny.jpg`,
    `images/kitty.jpg`
];

displayImages(images);


function changePic(aPic, imgPath) {
    aPic.src =imgPath;
}

function hello() {
    console.log(`it works!!!`);
}

bunnyBtn.addEventListener("click", hello);