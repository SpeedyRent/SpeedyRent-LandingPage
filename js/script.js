
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
