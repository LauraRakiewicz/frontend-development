var i = 0;
var images = [];
var time = 6000;

images[0] = '/images/hiking.jpg'
images[1] = '/images/fruitveg.jpeg'
images[2] = '/images/dzieci.jpg'

function changeImg(){
    document.slide.src = images[i];
    if(i< images.length-1){
        i++;
    }else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;