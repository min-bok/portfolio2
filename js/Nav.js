// hamburger btn
const hamburger = document.querySelector('.hamburger');
const hamburgerSpanOne = document.querySelector('.line:nth-child(1)');
const hamburgerSpanThree = document.querySelector('.line:nth-child(3)');
const nav = document.querySelector('#nav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    hamburgerSpanOne.classList.toggle('color');
    hamburgerSpanThree.classList.toggle('color');
    nav.classList.toggle('open');
})

// header
const menuHome = document.querySelector('.menuHome');
const menuAbout = document.querySelector('.menuAbout');
const menuSkills = document.querySelector('.menuSkills');
const menuWork = document.querySelector('.menuWork');
const menuContact = document.querySelector('.menuContact');

menuHome.addEventListener('click', function() {
    const home = document.querySelector('#home');
    home.scrollIntoView();
});

menuAbout.addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView();
});

menuSkills.addEventListener('click', function() {
    document.querySelector('#skills').scrollIntoView();
});

menuWork.addEventListener('click', function() {
    document.querySelector('#work').scrollIntoView();
});

menuContact.addEventListener('click', function() {
    document.querySelector('#footer').scrollIntoView();
});

// 여기 수정하기

window.addEventListener('scroll', function() {
    const posY = window.pageYOffset;

    menuSkills.innerHTML = posY;

        if(posY < 500) {
            menuHome.classList.add('menuHover');
            menuAbout.classList.remove('menuHover');
            menuSkills.classList.remove('menuHover');
            menuWork.classList.remove('menuHover');
        }
    
        else if (posY > 400 && posY < 1200){
            menuAbout.classList.add('menuHover');
            menuHome.classList.remove('menuHover');
            menuSkills.classList.remove('menuHover');
            menuWork.classList.remove('menuHover');
        }
    
        else if (posY > 1200 && posY < 1850){
            menuSkills.classList.add('menuHover');
            menuHome.classList.remove('menuHover');
            menuAbout.classList.remove('menuHover');
            menuWork.classList.remove('menuHover');
        }
    
        else if (posY > 1850){
            menuWork.classList.add('menuHover');
            menuHome.classList.remove('menuHover');
            menuAbout.classList.remove('menuHover');
            menuSkills.classList.remove('menuHover');
        }
});

// contact
const github = document.querySelector('.github');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const velog = document.querySelector('.velog');

github.addEventListener('click', function() {
    window.open('https://github.com/minbok-1998');
})

velog.addEventListener('click', function() {
    window.open('https://velog.io/@minbok');
})

// nav
function openNav() {
    nav.classList.remove('open');
    hamburger.classList.remove('is-active');
    hamburgerSpanOne.classList.remove('color');
    hamburgerSpanThree.classList.remove('color');
}

const navHome = document.querySelector('.navHome');
const navAbout = document.querySelector('.navAbout');
const navSkills = document.querySelector('.navSkills');
const navWork = document.querySelector('.navWork');
const navContact = document.querySelector('.navContact');

navHome.addEventListener('click', openNav);
navAbout.addEventListener('click', openNav);
navSkills.addEventListener('click', openNav);
navWork.addEventListener('click', openNav);
navContact.addEventListener('click', openNav);

// nav icon
const navGithub = document.querySelector('.navGithub');
const navVelog = document.querySelector('.navVelog');

navGithub.addEventListener('click', function() {
    window.open('https://github.com/minbok-1998');
})

navVelog.addEventListener('click', function() {
    window.open('https://velog.io/@minbok');
})