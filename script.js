const nav = document.querySelector('nav');
const burger = document.querySelector('.hamburger');
const burgerLines = document.querySelectorAll('.line');

burger.addEventListener('click', animateBurger);
function animateBurger(e){
    //
    burger.classList.toggle('burger-change');
    burgerLines[0].classList.toggle('line-1-change');
    burgerLines[1].classList.toggle('line-2-change');
    burgerLines[2].classList.toggle('line-3-change');

    nav.classList.toggle('nav-change');
}