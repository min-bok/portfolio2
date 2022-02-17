// navBtn
const strengthBtn = document.querySelector('.strengthBtn');
const skillBtn = document.querySelector('.skillBtn');
const projectBtn = document.querySelector('.projectBtn');

strengthBtn.addEventListener('mouseover', function() {
    strengthBtn.classList.add('expandBtn');
})
strengthBtn.addEventListener('mouseout', function() {
    strengthBtn.classList.remove('expandBtn');
})

skillBtn.addEventListener('mouseover', function() {
    skillBtn.classList.add('expandBtn');
})
skillBtn.addEventListener('mouseout', function() {
    skillBtn.classList.remove('expandBtn');
})

projectBtn.addEventListener('mouseover', function() {
    projectBtn.classList.add('expandBtn');
})
projectBtn.addEventListener('mouseout', function() {
    projectBtn.classList.remove('expandBtn');
})