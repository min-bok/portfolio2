// profileBtnWrap
const profileBtnWrap = document.querySelector('.profileBtnWrap');
const profileBtn = document.querySelector('.profileBtn');
const profileBtnText = document.querySelector('.profileBtnText');

profileBtnText.classList.add('hidden');

profileBtn.addEventListener('mouseover', function() {
    profileBtnText.classList.remove('hidden');
})
profileBtn.addEventListener('mouseout', function() {
    profileBtnText.classList.add('hidden');
})

// strengthBtnWrap
const strengthBtnWrap = document.queryCommandValue('.strengthBtnWrap');
const strengthBtn = document.querySelector('.strengthBtn');
const strengthBtnText = document.querySelector('.strengthBtnText');

strengthBtnText.classList.add('hidden');

strengthBtn.addEventListener('mouseover', function() {
    strengthBtnText.classList.remove('hidden');
    strengthBtn.classList.add('expandBtn');
})
strengthBtn.addEventListener('mouseout', function() {
    strengthBtnText.classList.add('hidden');
    strengthBtn.classList.remove('expandBtn');
})

// skillBtnWrap
const skillBtnWrap = document.querySelector('.skillBtnWrap');
const skillBtn = document.querySelector('.skillBtn');
const skillBtnText = document.querySelector('.skillBtnText');

skillBtnText.classList.add('hidden');

skillBtn.addEventListener('mouseover', function() {
    skillBtnText.classList.remove('hidden');
    skillBtn.classList.add('expandBtn');
})
skillBtn.addEventListener('mouseout', function() {
    skillBtnText.classList.add('hidden');
    skillBtn.classList.remove('expandBtn');
})

// projectBtnWrap
const projectBtnWrap = document.querySelector('.projectBtnWrap');
const projectBtn = document.querySelector('.projectBtn');
const projectBtnText= document.querySelector('.projectBtnText');

projectBtnText.classList.add('hidden');

projectBtn.addEventListener('mouseover', function() {
    projectBtnText.classList.remove('hidden');
    projectBtn.classList.add('expandBtn');
})
projectBtn.addEventListener('mouseout', function() {
    projectBtnText.classList.add('hidden');
    projectBtn.classList.remove('expandBtn');
})