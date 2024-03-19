document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".headerSwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },

        loop: true
    });
        const popup = document.querySelector('.popup');

        popup.querySelector('.close-button').addEventListener('click', () => {
            popup.classList.add('hidden');
            setTimeout(() => {
                popup.remove();
            }, 300);
        });

    setTimeout(() => {
        popup.classList.remove('hidden');
    }, 5000);
});