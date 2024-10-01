const emprendimientos = [
    {
        nombre: "NAILS & CO.",
        descripcion: "Tu mejor estilo al mejor precio",
        imagen: "/public/assets/images/logo_unas 1.png",
        direccion: "Calle Falsa 123",
        telefono: "555-1234",
        valoracion: 4.5,
        categoria: "Belleza"
    },
    {
        nombre: "BARBER'S CLUB",
        descripcion: "Corte y estilo para caballeros",
        imagen: "/public/assets/images/barber_logo.png",
        direccion: "Avenida Siempreviva 742",
        telefono: "555-5678",
        valoracion: 4.8,
        categoria: "Belleza"
    },
    {
        nombre: "PANADERÍA LA FINA",
        descripcion: "El mejor pan artesanal de la ciudad",
        imagen: "/public/assets/images/panaderia.png",
        direccion: "Calle Panadero 112",
        telefono: "555-3456",
        valoracion: 4.7,
        categoria: "Gastronomia"
    },
    {
        nombre: "GIMNASIO STRONG FIT",
        descripcion: "Transforma tu cuerpo con nosotros",
        imagen: "/public/assets/images/gimnasio.png",
        direccion: "Boulevard Fitness 98",
        telefono: "555-6789",
        valoracion: 4.6,
        categoria: "Bienestar"
    },
    {
        nombre: "CAFÉ DULCE SABOR",
        descripcion: "Café de especialidad y repostería artesanal",
        imagen: "/public/assets/images/cafe.png",
        direccion: "Calle Barista 24",
        telefono: "555-8765",
        valoracion: 4.9,
        categoria: "Gastronomia"
    },
    {
        nombre: "TIENDA ECO MODA",
        descripcion: "Moda sustentable y productos ecológicos",
        imagen: "/public/assets/images/eco_moda.png",
        direccion: "Plaza Verde 45",
        telefono: "555-2345",
        valoracion: 4.4,
        categoria: "Tecnologia"
    },
    {
        nombre: "FOTOGRAFÍA LUMOS",
        descripcion: "Captura tus momentos más especiales",
        imagen: "/public/assets/images/fotografia.png",
        direccion: "Calle Foto 78",
        telefono: "555-5432",
        valoracion: 4.8,
        categoria: "Belleza"
    },
    {
        nombre: "TIENDA DE JUGUETES HAPPY TOYS",
        descripcion: "Diversión asegurada para los más pequeños",
        imagen: "/public/assets/images/juguetes.png",
        direccion: "Calle Diversión 56",
        telefono: "555-4321",
        valoracion: 4.7,
        categoria: "Construccion"
    }
];

function renderCards(emprendimientosFiltrados) {
    const container = document.getElementById('cardsContainer');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos elementos

    emprendimientosFiltrados.forEach(emprendimiento => {
        const card = `
            <div class="card">
                <img src="${emprendimiento.imagen}" alt="${emprendimiento.nombre}">
                <div class="card-body">
                    <h3>${emprendimiento.nombre}</h3>
                    <p>${emprendimiento.direccion}</p>
                    <p>Tel: ${emprendimiento.telefono}</p>
                    <p>Valoración: ${emprendimiento.valoracion}</p>
                </div>
                <div class="card-hover">
                    <p>${emprendimiento.descripcion}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Función para filtrar por categoría
function filterByCategory(categoria) {
    const filtered = emprendimientos.filter(emp => emp.categoria === categoria);
    renderCards(filtered);
}

// Función para buscar por nombre
function searchByName(query) {
    const filtered = emprendimientos.filter(emp => 
        emp.nombre.toLowerCase().includes(query.toLowerCase())
    );
    renderCards(filtered);
}

// Evento para el buscador
document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = document.getElementById('searchInput').value;
    searchByName(searchQuery);
});

// Eventos para las categorías
document.querySelectorAll('.listaCategorias li a').forEach(categoria => {
    categoria.addEventListener('click', (e) => {
        e.preventDefault();
        const categoriaSeleccionada = e.target.innerText;
        filterByCategory(categoriaSeleccionada);
    });
});

// Renderizar todas las tarjetas al cargar la página
renderCards(emprendimientos);
function showAll() {
    renderCards(emprendimientos); // Renderiza todas las tarjetas
}

// Evento para el botón "Ver Todas"
document.getElementById('verTodas').addEventListener('click', (e) => {
    e.preventDefault();
    showAll(); // Llama a la función para mostrar todos los emprendimientos
});