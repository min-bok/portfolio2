const hamburgerBtn = document.querySelector('.hamburgerBtn');
const projectNav = document.querySelector('#projectNav');

function active() {
    projectNav.classList.add('projectNavOn');
}

hamburgerBtn.addEventListener('click', () => {
    active();
});

// hamburgerBtn.addEventListener('click', function() {
//     projectNav.classList.add('projectNavOn');
// })

// hamburgerBtn.addEventListener('mouseout', function() {
//     projectNav.classList.add('projectNavOff');
// })