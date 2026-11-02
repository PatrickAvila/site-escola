document.querySelectorAll('[data-current-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
});

// Entrada suave das seções ao rolar a página
const secoesPagina = document.querySelectorAll('main > section');
const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (secoesPagina.length && 'IntersectionObserver' in window && !reduzMovimento) {
    secoesPagina.forEach(secao => secao.classList.add('reveal'));
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visivel');
                observador.unobserve(entrada.target);
            }
        });
    }, { threshold: 0.08 });
    secoesPagina.forEach(secao => observador.observe(secao));
}