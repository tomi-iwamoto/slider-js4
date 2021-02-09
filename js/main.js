/*  1. Click right button
    2. Image changes to next image
    3. Click left button
    4. Image goes back to the previous image
    5. If I click left button first, the image will go to the last image*/


let images = [
    "img/one.jpg",
    "img/two.jpg",
    "img/three.jpg",
    "img/four.jpg"
    ];

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let img = document.getElementById('img');


// //This is where the counter starts and is the index within the array. 
var i = 0;

// //This is telling us where the source of the img tag is
img.src = images[i];



//The following function will help us transition to the next image.  
nextButton.addEventListener('click', function() {

    let images = [
        "img/one.jpg",
        "img/two.jpg",
        "img/three.jpg",
        "img/four.jpg"
        ];

    //If the index is either 0, 1, or 2 keep adding. 
    if (i < images.length - 1) {
        i++;
    // If the index is 2 (if it is the last image) then go back to the first image
    } else {
        i = 0;
    }

    //The source of the images will be according to the previous conditional statement
     img.src = images[i];

});


//The following function will help us transition to the previous image.  
prevButton.addEventListener('click', function () {
    
    let images = [
        "img/one.jpg",
        "img/two.jpg",
        "img/three.jpg",
        "img/four.jpg"
        ];

    //If the index is 1, 2 or 3 then keep subtracting (keep going to the previous image)
    if (i > 0 && i < images.length) {
        i--;
    } else if (i === 0) {
        // If the slider is on the first image, then go to the last image. ie. If the image index is 1 go to index 3.
        i = 3;
    }

    //The source of the images will be according to the previous conditional statement
    img.src = images[i];

});
