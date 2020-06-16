const heightOutput = document.querySelector('.news-images');
const widthOutput = document.querySelector('.news-images');
const elementWidth = heightOutput.style.fontWidth;


function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput = heightOutput.textContent;
    widthOutput.textContent = window.innerWidth;
    heightOutput.textContent = window.innerWidth;
}

console.log(elementWidth)

window.onresize = reportWindowSize;