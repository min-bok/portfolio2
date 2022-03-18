// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

// contact
const githubText = document.querySelector('.githubText');
const velogText = document.querySelector('.velogText');
const gmailText = document.querySelector('.gmailText');
const phoneText = document.querySelector('.phoneText');

const githubImg = document.querySelector('.githubImg');
const velogImg = document.querySelector('.velogImg');
const gmailImg = document.querySelector('.gmailImg');
const phoneImg = document.querySelector('.phoneImg');

githubText.classList.add('hidden');
velogText.classList.add('hidden');
gmailText.classList.add('hidden');
phoneText.classList.add('hidden');

// githubImg
githubImg.addEventListener('mouseover', function() {
    githubText.classList.remove('hidden');
})
githubImg.addEventListener('mouseout', function() {
    githubText.classList.add('hidden');
})
githubImg.addEventListener('click', function() {
    window.open('https://github.com/minbok-1998');
})

// velogImg
velogImg.addEventListener('mouseover', function() {
    velogText.classList.remove('hidden');
})
velogImg.addEventListener('mouseout', function() {
    velogText.classList.add('hidden');
})
velogImg.addEventListener('click', function() {
    window.open('https://velog.io/@minbok');
})

// gmailImg
gmailImg.addEventListener('mouseover', function() {
    gmailText.classList.remove('hidden');
})
gmailImg.addEventListener('mouseout', function() {
    gmailText.classList.add('hidden');
})

// phoneImg
phoneImg.addEventListener('mouseover', function() {
    phoneText.classList.remove('hidden');
})
phoneImg.addEventListener('mouseout', function() {
    phoneText.classList.add('hidden');
})

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
const projectBtnWrap = document.querySelector('#project');
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
projectBtn.addEventListener('click', function() {
    portfolioTitle.innerText = 'Project';
})