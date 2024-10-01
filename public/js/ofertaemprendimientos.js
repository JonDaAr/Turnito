const emprendimientos = [
    {
        nombre: "NAILS & CO.",
        descripcion: "Tu mejor estilo al mejor precio",
        imagen: "/public/assets/images/logo_unas 1.png",
        direccion: "Calle Falsa 123",
        telefono: "555-1234",
        valoracion: 4.5
    },
    {
        nombre: "BARBER'S CLUB",
        descripcion: "Corte y estilo para caballeros",
        imagen: "/public/assets/images/barber_logo.png",
        direccion: "Avenida Siempreviva 742",
        telefono: "555-5678",
        valoracion: 4.8
    }
    // Agrega más emprendimientos aquí
];

// Función para crear las tarjetas dinámicamente
function crearTarjetas() {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // Limpiar las tarjetas anteriores

    emprendimientos.forEach(emprendimiento => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${emprendimiento.imagen}" alt="${emprendimiento.nombre}">
            <div class="contenido">
                <h2>${emprendimiento.nombre}</h2>
                <p>${emprendimiento.descripcion}</p>
                <p><strong>Dirección:</strong> ${emprendimiento.direccion}</p>
                <p><strong>Teléfono:</strong> ${emprendimiento.telefono}</p>
                <p><strong>Valoración:</strong> ${emprendimiento.valoracion} / 5</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Función para filtrar las tarjetas
function filtrarTarjetas() {
    const filter = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h2').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';  // Mostrar la tarjeta si coincide
        } else {
            card.style.display = 'none';  // Ocultar la tarjeta si no coincide
        }
    });
}

// Evento para actualizar las tarjetas según el input del buscador
document.getElementById('searchInput').addEventListener('input', filtrarTarjetas);

// Crear tarjetas al cargar la página
window.onload = crearTarjetas;