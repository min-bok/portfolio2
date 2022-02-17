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