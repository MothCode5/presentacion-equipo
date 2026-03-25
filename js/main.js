document.addEventListener('DOMContentLoaded', () => {

    /* --- Animaciones de Scroll --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Solo se anima una vez
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    /* --- Animación de Tipografía en el Hero --- */
    const changingText = document.getElementById('changing-text');
    const words = ['Innovadora', 'Disruptiva', 'Digital', 'Escalable'];
    const fonts = ["'Inter', sans-serif", "'Playfair Display', serif", "'Space Mono', monospace"];
    
    let wordIndex = 0;
    let fontIndex = 0;

    setInterval(() => {
        // Cambiar palabra
        wordIndex = (wordIndex + 1) % words.length;
        changingText.textContent = words[wordIndex];
        
        // Cambiar tipografía
        fontIndex = (fontIndex + 1) % fonts.length;
        changingText.style.fontFamily = fonts[fontIndex];
        
    }, 2000); // Cambia cada 2 segundos

});