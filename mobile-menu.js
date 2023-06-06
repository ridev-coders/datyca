
window.addEventListener('load', function() {
    // mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinkUl = document.querySelector('.navbar ul');
    const background = document.querySelector('.bg-lines');
    const slogan = document.querySelector('.slogan .mobile')
    const navLinks = document.querySelectorAll('.navbar ul li');

    // Toggle menu and classes when hamburger is clicked
    hamburger.addEventListener('click', () => {
        close()
    });

    // Add click event listener to each nav link
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            close()
        });
    });

    function close(){
        navLinkUl.classList.toggle('hide');
        navLinkUl.classList.toggle('show');
        hamburger.classList.toggle('open')
        hamburger.classList.toggle('close')
        background.classList.toggle('hide')
        background.classList.toggle('show')
        slogan.classList.toggle('hide')
        slogan.classList.toggle('show')
    }
});