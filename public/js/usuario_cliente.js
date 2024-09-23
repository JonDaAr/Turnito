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

// Historial
const historial = [
    {
        nombre: "Bella",
        telefono: "555-123456",
        email: "Bella-salon@mail.com",
        diaHora: "2024-09-15 10:30",
        asistencia: true
    },
    {
        nombre: "Nani Nails",
        telefono: "555-654321",
        email: "nani.Nails@mail.com",
        diaHora: "2024-09-15 14:00",
        asistencia: false
    },
    {
        nombre: "OG Caballito",
        telefono: "555-987654",
        email: "OG@mail.com",
        diaHora: "2024-09-16 09:00",
        asistencia: true
    },
    {
        nombre: "Bella",
        telefono: "555-456789",
        email: "Bella-salon@mail.com",
        diaHora: "2024-09-16 12:30",
        asistencia: false
    }
];


// Función para cargar el historial de turnos
function cargarHistorial() {
    const tbody = document.getElementById('historial-body');
    historial.forEach(turno => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${turno.nombre}</td>
            <td>${turno.telefono}</td>
            <td>${turno.email}</td>
            <td>${turno.diaHora}</td>
            <td class="${turno.asistencia ? 'asisti' : 'no-asisti'}">
            <div class="${turno.asistencia ? 'cuadro-asisti' : 'cuadro-no-asisti'}">${turno.asistencia ? 'Asistí' : 'No asistí'}</div>
            </td>

        `;

        tbody.appendChild(row);
    });
}

// Función para filtrar el historial por nombre
function filtrarTurnos() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#historial-body tr');

    rows.forEach(row => {
        const nombre = row.querySelector('td:first-child').textContent.toLowerCase();
        row.style.display = nombre.includes(searchValue) ? '' : 'none';
    });
}

// Cargar el historial al cargar la página
document.addEventListener('DOMContentLoaded', cargarHistorial);

// CONFIGURACION
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

           
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            document.getElementById(tabId).classList.add("active");
        });
    });
});


// VER EMprendimiento
const emprendimientos = [
    { 
        nombre: "Bella, Salon de Belleza", 
        descripcion: "asndaiosudhnaosdhnasoidjansodnasonaonnqwonl{qnan{oanoqwnf{lnfñen{FNCON", 
        direccion: "Av. Libertador 1234", 
        telefono: "555-123456", 
        valoracion: 4.5, 
        imagen: "ruta/a/imagen1.jpg" 
    },
    { 
        nombre: "OG Caballito", 
        descripcion: "Descripción 2", 
        direccion: "Calle Nueva 789", 
        telefono: "555-456789", 
        valoracion: 4.0, 
        imagen: "ruta/a/imagen2.jpg" 
    },
    {
        nombre: "Salon Unixes", 
        descripcion: "Descripción 2", 
        direccion: "Av. Siempre Viva 742", 
        telefono: "555-987654", 
        valoracion: 4.0, 
        imagen: "ruta/a/imagen2.jpg" 
    },
    {
        nombre: "Nani Nails", 
        descripcion: "Descripción 2", 
        direccion: "Calle Falsa 567", 
        telefono: "555-654321", 
        valoracion: 4.0, 
        imagen: "ruta/a/imagen2.jpg" 
    },
    {
        nombre: "Bella, Salon de Belleza", 
        descripcion: "Descripción 2", 
        direccion: "Av. Libertador 1234", 
        telefono: "555-123456", 
        valoracion: 4.0, 
        imagen: "ruta/a/imagen2.jpg" 
    }
];

const buscador = document.getElementById('buscador');
const listaEmprendimientos = document.getElementById('lista-emprendimientos');

function mostrarEmprendimientos(emprendimientos) {
    listaEmprendimientos.innerHTML = '';
    emprendimientos.forEach(emprendimiento => {
        const div = document.createElement('div');
        div.classList.add('emprendimiento', 'tarjeta');
        div.innerHTML = `
            <img src="${emprendimiento.imagen}" alt="${emprendimiento.nombre}" />
            <h3>${emprendimiento.nombre}</h3>
            <p><strong>Dirección:</strong> ${emprendimiento.direccion}</p>
            <p><strong>Teléfono:</strong> ${emprendimiento.telefono}</p>
            <p><strong>Valoración:</strong> ${emprendimiento.valoracion} ⭐</p>
            <p>${emprendimiento.descripcion}</p>
        `;
        listaEmprendimientos.appendChild(div);
    });
}

buscador.addEventListener('input', (e) => {
    const valorBuscado = e.target.value.toLowerCase();
    const resultados = emprendimientos.filter(emprendimiento => 
        emprendimiento.nombre.toLowerCase().includes(valorBuscado)
    );
    mostrarEmprendimientos(resultados);
});

// Mostrar todos los emprendimientos al cargar la página
mostrarEmprendimientos(emprendimientos);
//PAGINA SALIR 
/* Salir */
document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');
    const logoutModal = document.getElementById('logoutModal');
    const confirmLogout = document.getElementById('confirmLogout');
    const cancelLogout = document.getElementById('cancelLogout');

    // Mostrar el modal cuando se hace clic en "Cerrar Sesión"
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();  // Evita la acción por defecto del enlace
        logoutModal.style.display = 'block';  // Muestra el modal
    });

    // Confirmar el cierre de sesión
    confirmLogout.addEventListener('click', () => {
        window.location.href = '/public/index.html';  // Redirige al usuario
    });

    // Cancelar y cerrar el modal
    cancelLogout.addEventListener('click', () => {
        logoutModal.style.display = 'none';  // Oculta el modal
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === logoutModal) {
            logoutModal.style.display = 'none';  // Oculta el modal
        }
    });
});