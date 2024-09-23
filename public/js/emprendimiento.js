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


/// comentarios
function mostrarMas(elemento) {
    const textoCompleto = elemento.parentNode.querySelector('.texto-completo');
    if (textoCompleto.style.display === 'none') {
        textoCompleto.style.display = 'inline';
        elemento.style.display = 'none';
    }
}


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



document.addEventListener('DOMContentLoaded', function() {
    const btnCambiarNombre = document.querySelector('.btn-cambiar-nombre');
    const editContainer = document.querySelector('#edit-container');
    const nuevoNombreInput = document.querySelector('#nuevo-nombre');
    const nombreLugar = document.querySelector('#nombre-lugar');
    const guardarCambioBtn = document.querySelector('#guardar-cambio');

    // Mostrar el campo de entrada cuando se hace clic en el botón
    btnCambiarNombre.addEventListener('click', function() {
        editContainer.style.display = 'block';
        nuevoNombreInput.focus();
    });

    // Guardar el nuevo nombre cuando se hace clic en el botón
    guardarCambioBtn.addEventListener('click', function() {
        const nuevoNombre = nuevoNombreInput.value.trim();
        if (nuevoNombre) {
            nombreLugar.textContent = nuevoNombre;
            editContainer.style.display = 'none';
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const btnCambiarDescripcion = document.querySelector('.btn-cambiar-descripcion');
    const editContainerDescripcion = document.querySelector('#edit-container-descripcion');
    const nuevaDescripcionInput = document.querySelector('#nueva-descripcion');
    const descripcionLugar = document.querySelector('#descripcion-lugar');
    const guardarCambioDescripcionBtn = document.querySelector('#guardar-cambio-descripcion');

    
    // Mostrar el campo de entrada para la descripción cuando se hace clic en el botón
    btnCambiarDescripcion.addEventListener('click', function() {
        editContainerDescripcion.style.display = 'block';
        nuevaDescripcionInput.focus();
    });

    // Guardar la nueva descripción cuando se hace clic en el botón
    guardarCambioDescripcionBtn.addEventListener('click', function() {
        const nuevaDescripcion = nuevaDescripcionInput.value.trim();
        if (nuevaDescripcion) {
            descripcionLugar.textContent = nuevaDescripcion;
            editContainerDescripcion.style.display = 'none';
        }
    });
});














function addEvent() {
    const day = parseInt(document.getElementById('day').value);
    const time = parseInt(document.getElementById('time').value);
    const calendar = document.getElementById('calendar');

    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');
    eventDiv.draggable = true;
    eventDiv.textContent = 'Turno';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'x';
    deleteBtn.onclick = function() {
        calendar.remove(eventDiv);
    };
    eventDiv.appendChild(deleteBtn);

    eventDiv.ondragstart = function(e) {
        e.dataTransfer.setData('text', '');
        e.dataTransfer.setDragImage(eventDiv, 20, 20);
    };

    const cellIndex = day + (time * 8);

    if (cellIndex < calendar.children.length) {
        const cell = calendar.children[cellIndex];
        cell.appendChild(eventDiv);
    } else {
        console.error("Índice de celda fuera de rango:", cellIndex);
    }
}

document.addEventListener('dragover', function(e) {
    e.preventDefault();
});

document.addEventListener('drop', function(e) {
    const calendar = document.getElementById('calendar');
    const eventDiv = document.querySelector('.event[draggable="true"]');
    const closestCell = document.elementFromPoint(e.clientX, e.clientY);
    if (closestCell && closestCell.parentElement === calendar) {
        closestCell.appendChild(eventDiv);
    }
});