
window.onload = function() {
    // mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('ul');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
        hamburger.classList.toggle('open')
        hamburger.classList.toggle('close')
    });
}