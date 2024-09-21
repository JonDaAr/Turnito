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
// Pagina 1 INICO
// Lista de turnos
const turnos = [
    {
        nombre: "Bella, Salon de Belleza",
        direccion: "Av. Libertador 1234",
        telefono: "555-123456",
        confirmado: true
    },
    {
        nombre: "Nani Nails",
        direccion: "Calle Falsa 567",
        telefono: "555-654321",
        confirmado: false
    },
    {
        nombre: "Salon Unixes",
        direccion: "Av. Siempre Viva 742",
        telefono: "555-987654",
        confirmado: true
    },
    {
        nombre: "OG Caballito",
        direccion: "Calle Nueva 789",
        telefono: "555-456789",
        confirmado: false
    }
];

// Función para generar filas de turnos
function cargarTurnos() {
    const tbody = document.getElementById('turnos-body');

    turnos.forEach(turno => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${turno.nombre}</td>
            <td>${turno.direccion}</td>
            <td>${turno.telefono}</td>
            <td class="${turno.confirmado ? 'confirmado' : 'no-confirmado'}">
                ${turno.confirmado ? 'Sí' : 'No'}
            </td>
        `;

        tbody.appendChild(row);
    });
}

// Cargar turnos al cargar la página
document.addEventListener('DOMContentLoaded', cargarTurnos);


//PAGINA SALIR 
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