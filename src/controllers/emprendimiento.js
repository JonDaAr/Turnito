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


// modo Oscuro ///
/// Agrega y quita la clase dark-mode al body revisdar ///
const btn = document.querySelector('#dark-mode');

const modoOscuro = () => {
    document.body.classList.toggle('dark-mode');
    console.log("codigo")
};

btn.addEventListener('click', modoOscuro);


/* OCULTAR PAGINAS */
function MostrarPagina(pageId) {
    console.log('Función MostrarPagina llamada con el ID:', pageId);
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.remove('active');
    })

    var seleccionarPagina = document.getElementById(pageId);
    seleccionarPagina.classList.add('active')
}



document.addEventListener("DOMContentLoaded", function(){
    console.log('Documento cargado y listo');
    MostrarPagina('page1');
})