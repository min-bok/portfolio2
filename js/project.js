const project = document.querySelector('#project');
const closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', function() {
    project.classList.add('hide');
})