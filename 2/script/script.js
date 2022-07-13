const btn = document.querySelector('.btn');

btn.addEventListener("click", ()=>{
    window.alert("Размер вашего экрана: "+ window.screen.width+" x "+window.screen.height);
});