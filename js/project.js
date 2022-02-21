const hamburgerBtn = document.querySelector('.hamburgerBtn');
const projectWrap = document.querySelector('#projectWrap');
const closeBtn = document.querySelector('.closeBtn');


projectWrap.classList.add('hidden');

hamburgerBtn.addEventListener('click', function() {
    projectWrap.classList.remove('hidden');
    projectWrap.classList.add('flex');
    projectWrap.classList.add('moveProject');
});

closeBtn.addEventListener('click', function() {
    projectWrap.classList.remove('flex');
    projectWrap.classList.add('hidden');
})