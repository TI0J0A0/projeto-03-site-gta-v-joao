const scrollAnimaSelector = '[data-anima="scroll"]';
const windowHeightMultiplier = 2.0;
const threshold = window.innerHeight * windowHeightMultiplier;
let scrollAnima = document.querySelector(scrollAnimaSelector);

function animaScroll() {
    if (!scrollAnima) {
        scrollAnima = document.querySelector(scrollAnimaSelector);
        if (!scrollAnima) return;
    }

    const itemTop = scrollAnima.getBoundingClientRect().top;
    const itemVisible = itemTop - threshold < 0;

    scrollAnima.classList.toggle('show-button', itemVisible);
}

let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = requestAnimationFrame(animaScroll);
});
