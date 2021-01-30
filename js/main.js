
/* 1. Click right button
    2. image changes to second image
    3. click left button
    4. image goes back to the previous image
    5. if I click left button first, the image will go to the last image*/

    let images = [
        "img/one.jpg",
        "img/two.jpg",
        "img/three.jpg"
    ]; 

    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');
    let img = document.getElementById('img');
    let i = 0;
    img.src = images[i];

//i want to go to the next image- access the next image - also define current image 
    function changeNextImg(){
        img.src = images[i];

        if(i >= 0 && i < images.length -1){
            i++;
        }
        if(i === images.length){
            i = 0;
        }
        
    }
    
    nextButton.addEventListener('click', changeNextImg);



  