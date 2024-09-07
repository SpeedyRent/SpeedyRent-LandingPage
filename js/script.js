// Selecciona el ícono del menú y el menú de navegación
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Función para abrir y cerrar el menú en pantallas móviles
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Opcional: Cerrar el menú cuando se haga clic en un enlace (mejora de UX)
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
