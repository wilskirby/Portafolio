
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.addEventListener('DOMContentLoaded', function() {
    const languageProgress = document.querySelectorAll('.language-progress');
    
    const animateOnScroll = function() {
        languageProgress.forEach(progress => {
            const progressPosition = progress.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if(progressPosition < screenPosition) {
                progress.style.width = progress.getAttribute('data-width');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página
});


document.querySelector('footer .text-secondary').textContent = 
    `© ${new Date().getFullYear()} Juan David Saavedra Jaimez. Todos los derechos reservados.`;