
document.addEventListener("DOMContentLoaded", () => {
    const hiddenSections = document.querySelectorAll(".section-hidden");
    console.log("hola muindo");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
            }
        });
    }, { threshold: 0.2 }); // Se activa cuando el 20% de la sección es visible

    hiddenSections.forEach(section => observer.observe(section));
});