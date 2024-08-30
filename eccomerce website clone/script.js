// Script for toggling navigation  bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close')
const cart = document.getElementById('cart-logo');
if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
        cart.classList.add('hide');

    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// single product javascript 
var Main_img = document.querySelector('#mainimg');
var small_img = document.getElementsByClassName('small-img');

small_img[0].onclick = function () {
    Main_img.src = small_img[0].src;
}
small_img[1].onclick = function () {
    Main_img.src = small_img[1].src;
}
small_img[2].onclick = function () {
    Main_img.src = small_img[2].src;
}
small_img[3].onclick = function () {
    Main_img.src = small_img[3].src;
}