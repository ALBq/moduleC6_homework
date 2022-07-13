const btn = document.querySelector('.btn');
const svgOne = document.querySelector('.svg1');
const svgTwo = document.querySelector('.svg2');
const page = document.querySelector('body');

function visibleBtn(){
    svgOne.classList.toggle("svgnone");
    svgTwo.classList.toggle("svg2");
    page.classList.toggle("body1")
}

btn.addEventListener("click", visibleBtn );







