
window.onload = function() {
    // mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('ul');
    const background = document.querySelector('.bg-lines');
    const slogan = document.querySelector('.slogan .mobile')

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('hide');
        hamburger.classList.toggle('open')
        hamburger.classList.toggle('close')
        background.classList.toggle('hide')
        background.classList.toggle('show')
        slogan.classList.toggle('hide')
        slogan.classList.toggle('show')
    });
}