const hamburger = document.querySelector('.hamburger');
const hamburgerSpanOne = document.querySelector('.line:nth-child(1)');
const hamburgerSpanThree = document.querySelector('.line:nth-child(3)');
const hide = document.querySelector('.hide');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    hide.classList.toggle('show');
})