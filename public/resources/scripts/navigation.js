document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav');
    const navButton = document.querySelector('.nav-button');

    navButton.addEventListener('click', () => {
        if (nav.classList.toggle('shown')) {
            navButton.classList.remove('fa-bars');
            navButton.classList.add('fa-xmark');
        } else {
            navButton.classList.remove('fa-xmark');
            navButton.classList.add('fa-bars');
        }
    });
});