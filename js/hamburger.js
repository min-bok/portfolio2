const hamburger = document.querySelector('.hamburger');
const hamburgerSpanOne = document.querySelector('.line:nth-child(1)');
const hamburgerSpanThree = document.querySelector('.line:nth-child(3)');
const show = document.querySelector('.show');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    show.classList.toggle('hide');
})