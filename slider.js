let slider = document.querySelector('.slider-wrap');
let innerSlider = document.querySelector(".slider-inner");

let pressed = false;
let starx;
let x;

slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    x = innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing';
})
slider.addEventListener('mouseenter',()=>{
    slider.style.cursor = 'grab';
})
slider.addEventListener('mouseup',()=>{
    slider.style.cursor = 'grab';
})
slider.addEventListener('mouseup',()=>{
    pressed = true;
})