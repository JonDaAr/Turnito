const perfilButton = document.querySelector('button[aria-label="perfil"]');
const menuPerfil = document.getElementById('menuPerfil');

//Oculta el Menu del Perfil//
perfilButton.addEventListener('click', () => {
    const elMenuVisible = menuPerfil.style.display === 'block';
    menuPerfil.style.display = elMenuVisible ? 'none' : 'block' ;
});

// Oculta el menu pulsando en cualquier lado de la pagina//
document.addEventListener('click', (event) => {
    if(!perfilButton.contains(event.target) && !menuPerfil.contains(event.target)) {
        menuPerfil.style.display ='none';
    }
})


// modo noCturno ///
/// Agrega y quita la clase dark-mode al body revisdar ///
document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Cambia el texto del botón según el modo actual
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'Modo Claro';
    } else {
        this.textContent = 'Modo Nocturno';
    }
});