const hamburgerBtn = document.querySelector('.hamburgerBtn');
const projectWrap = document.querySelector('#projectWrap');

hamburgerBtn.addEventListener('click', function() {
    projectWrap.classList.add('moveProject');
});