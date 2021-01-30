
/* 1. Click right button
    2. image changes to second image
    3. click left button
    4. image goes back to the previous image
    5. if I click left button first, the image will go to the last image*/

    let images = [
        "img/one.jpg",
        "img/two.jpg",
        "img/three.jpg",
        "img/four.jpg"
    ]; 

    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let img = document.getElementById('img');
    let i = 0;
    img.src = images[i];

//i want to go to the next image- access the next image - also define current image 
    function changeNextImg(){

        if(i < images.length -1){//if its 0 or 1 index keep adding
            i++;
        } else {// if index is 2 then go back to index 0 
            i=0;
        }
        img.src = images[i];

    }
    
    nextButton.addEventListener('click', changeNextImg);

    function changePrevImg(){
       

        if(i > 0 && i < images.length){//if i = 1 or 2
            i--;
        } else if(i === 0) {
            i = 3; // if its num 1 go to image num 3
        }
        img.src = images[i];
    }

    prevButton.addEventListener('click', changePrevImg);

      


  