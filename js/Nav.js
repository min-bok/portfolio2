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

// header for desktop

window.addEventListener('scroll', function() {
    const posY = window.pageYOffset;
    const home = this.document.querySelector('#home').getBoundingClientRect().top;
    const about = this.document.querySelector('#about').getBoundingClientRect().top;
    const skills = this.document.querySelector('#skills').getBoundingClientRect().top;
    const work = this.document.querySelector('#work').getBoundingClientRect().top;

    const homeTop = posY + home;
    const aboutTop = posY + about - 200;
    const skillsTop = posY + skills - 200;
    const workTop = posY + work - 200;

    const body = this.document.querySelector('body');

    const innerHeight = body.offsetHeight;
    const pageYOffset = this.window.pageYOffset;

    const scrollHeight = body.scrollHeight;

    let totalHeight = document.body.scrollHeight - window.innerHeight -1;
    
    console.log(`totalHeight` + totalHeight);
    console.log(`innerHeight` + innerHeight);
    console.log(`pageYOffset` + pageYOffset);

    if(posY >= homeTop && posY < aboutTop) {
        menuHome.classList.add('menuHover');
        menuAbout.classList.remove('menuHover');
        menuSkills.classList.remove('menuHover');
        menuWork.classList.remove('menuHover');
        menuContact.classList.remove('menuHover');
    } else if(posY >= aboutTop && posY < skillsTop) {
        menuAbout.classList.add('menuHover');
        menuHome.classList.remove('menuHover');
        menuSkills.classList.remove('menuHover');
        menuWork.classList.remove('menuHover');
        menuContact.classList.remove('menuHover');
    } else if(posY >= skillsTop && posY < workTop) {
        menuSkills.classList.add('menuHover');
        menuHome.classList.remove('menuHover');
        menuAbout.classList.remove('menuHover');
        menuWork.classList.remove('menuHover');
        menuContact.classList.remove('menuHover');
    } else if(posY >= workTop && pageYOffset <= totalHeight) {
        menuWork.classList.add('menuHover');
        menuHome.classList.remove('menuHover');
        menuAbout.classList.remove('menuHover');
        menuSkills.classList.remove('menuHover');
        menuContact.classList.remove('menuHover');
    } else {
        menuContact.classList.add('menuHover');
        menuHome.classList.remove('menuHover');
        menuAbout.classList.remove('menuHover');
        menuSkills.classList.remove('menuHover');
        menuWork.classList.remove('menuHover');
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