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






/* Boton para ocultar lo recaudado */
document.getElementById('mostrarRecaudado').addEventListener('click', function() {
    var cantidadRecaudada = document.getElementById('cantidadRecaudada');
    cantidadRecaudada.classList.add('show');
    document.getElementById('mostrarRecaudado').style.display = 'none';
    document.getElementById('ocultarRecaudado').style.display = 'inline-block';
});

document.getElementById('ocultarRecaudado').addEventListener('click', function() {
    var cantidadRecaudada = document.getElementById('cantidadRecaudada');
    cantidadRecaudada.classList.remove('show');
    setTimeout(function() {
        document.getElementById('mostrarRecaudado').style.display = 'inline-block';
        document.getElementById('ocultarRecaudado').style.display = 'none';
    }, 500); // Duración de la transición
});



/* Historial    */

// Ejemplo de cómo se podrían actualizar los contadores
document.getElementById('totalClientes').textContent = 11;
document.getElementById('clientesAsistieron').textContent = 6;
document.getElementById('clientesNoAsistieron').textContent = 5;

// Función para agregar una fila al historial de clientes
function agregarCliente(nombre, frecuencia, telefono, email, diaHora, visita) {
    const claseVisita = {
        'Asistió': 'visita-asistio',
        'No asistió': 'visita-no-asistio',
        'Canceló': 'visita-cancelo'
    }[visita];

    const filaCliente = `
        <tr>
            <td>${nombre}</td>
            <td>${frecuencia}</td>
            <td>${telefono}</td>
            <td>${email}</td>
            <td>${diaHora}</td>
            <td class="${claseVisita}"><p>${visita}</p></td>
        </tr>
    `;
    document.getElementById('tablaHistorialClientes').insertAdjacentHTML('beforeend', filaCliente);
}

// Ejemplo de uso
agregarCliente('Juan Pérez', 'Frecuente', '+123456789', 'juan@example.com', '2024-08-25 14:30', 'Asistió');
agregarCliente('María López', 'Ocasional', '+987654321', 'maria@example.com', '2024-08-26 10:00', 'No asistió');
agregarCliente('Carlos Díaz', 'Nuevo', '+456789123', 'carlos@example.com', '2024-08-27 09:00', 'Canceló');
agregarCliente('Lucía Fernández', 'Frecuente', '+1122334455', 'lucia@example.com', '2024-08-28 11:00', 'Asistió');
agregarCliente('Pedro Gómez', 'Nuevo', '+6677889900', 'pedro@example.com', '2024-08-29 12:00', 'No asistió');
agregarCliente('Ana Ramírez', 'Ocasional', '+9988776655', 'ana@example.com', '2024-08-30 15:30', 'Canceló');
agregarCliente('Roberto Sánchez', 'Frecuente', '+2233445566', 'roberto@example.com', '2024-08-31 09:00', 'Asistió');
agregarCliente('Elena García', 'Nuevo', '+3344556677', 'elena@example.com', '2024-09-01 13:00', 'Asistió');
agregarCliente('Sofía Martínez', 'Ocasional', '+4455667788', 'sofia@example.com', '2024-09-02 10:30', 'Asistió');
agregarCliente('Miguel Torres', 'Frecuente', '+5566778899', 'miguel@example.com', '2024-09-03 11:30', 'Asistió');
agregarCliente('Valentina Silva', 'Nuevo', '+7788990011', 'valentina@example.com', '2024-09-04 14:00', 'No asistió');















/* Configuracion */
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

document.getElementById('remindClients').addEventListener('change', function() {
    document.getElementById('reminderInput').classList.toggle('show', this.checked);
});

/* Salir */
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logoutButton').addEventListener('click', (event) => {
        event.preventDefault();  // Evita que el enlace realice la navegación por defecto

        const confirmation = confirm("¿Estás seguro de que quieres salir?");
        if (confirmation) {
            // Redirige al usuario a la página de inicio
            window.location.href = '/public/index.html'; 
        }
    });
});
