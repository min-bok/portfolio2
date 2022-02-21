const portfolioTitle = document.querySelector('.portfolioTitle');

// profileBtnWrap
const profileBtnWrap = document.querySelector('.profileBtnWrap');
const profileBtn = document.querySelector('.profileBtn');
const profileBtnText = document.querySelector('.profileBtnText');

profileBtnText.classList.add('hidden');

profileBtn.addEventListener('mouseover', function() {
    profileBtnText.classList.remove('hidden');
    profileBtn.classList.add('expandBtn');
    
})
profileBtn.addEventListener('mouseout', function() {
    profileBtnText.classList.add('hidden');
    profileBtn.classList.remove('expandBtn');
})
profileBtn.addEventListener('click', function() {
    portfolioTitle.innerText = 'Profile';
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
strengthBtn.addEventListener('click', function() {
    portfolioTitle.innerText = 'Strength';
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
skillBtn.addEventListener('click', function() {
    portfolioTitle.innerText = 'Skill';
})

// projectBtnWrap
// const projectBtnWrap = document.querySelector('.projectBtnWrap');
// const projectBtn = document.querySelector('.projectBtn');
// const projectBtnText= document.querySelector('.projectBtnText');

// projectBtnText.classList.add('hidden');

// projectBtn.addEventListener('mouseover', function() {
//     projectBtnText.classList.remove('hidden');
//     projectBtn.classList.add('expandBtn');
// })
// projectBtn.addEventListener('mouseout', function() {
//     projectBtnText.classList.add('hidden');
//     projectBtn.classList.remove('expandBtn');
// })
// projectBtn.addEventListener('click', function() {
//     portfolioTitle.innerText = 'Project';
// })