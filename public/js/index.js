const faqToggles = document.querySelectorAll('.faq-toggle');

// Añade el evento de click a cada toggle
faqToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const faqItem = this.parentElement; // Encuentra el contenedor del item
        faqItem.classList.toggle('active'); // Alterna la clase "active" para mostrar/ocultar la respuesta
    });
});