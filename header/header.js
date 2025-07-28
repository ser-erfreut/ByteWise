document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.fa-bars').parentElement;
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
});