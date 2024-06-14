//Mobile-menu
document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const MobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => MobileMenu.classList.toggle('active'));
});
