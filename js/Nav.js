// hamburger btn
const hamburger = document.querySelector('.hamburger');
const hamburgerSpanOne = document.querySelector('.line:nth-child(1)');
const hamburgerSpanThree = document.querySelector('.line:nth-child(3)');
const hide = document.querySelector('.hide');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
    hide.classList.toggle('show');
    hamburgerSpanOne.classList.toggle('color');
    hamburgerSpanThree.classList.toggle('color');
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
const navGithub = document.querySelector('.navGithub');
const navVelog = document.querySelector('.navVelog');

navGithub.addEventListener('click', function() {
    window.open('https://github.com/minbok-1998');
})

navVelog.addEventListener('click', function() {
    window.open('https://velog.io/@minbok');
})