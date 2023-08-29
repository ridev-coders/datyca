
window.addEventListener('load', function() {
    // mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinkUl = document.querySelector('.navbar ul');
    const background = document.querySelector('.bg-lines');
    const slogan = document.querySelector('.slogan .mobile')
    const navLinks = document.querySelectorAll('.navbar ul li');
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    // not display menu in mobile
    if (window.matchMedia("(max-width: 480px)").matches) {
        navLinkUl.classList.add('zero-size');
        navLinkUl.classList.add('hide');
        navLinkUl.classList.add('closed');
    }  
    // Toggle menu and classes when hamburger is clicked
    hamburger.addEventListener('click', () => {
        close()
        if (window.matchMedia("(max-width: 480px)").matches) {
            toggleMenu()
            // showMenu()
        }  
    });

    // Add click event listener to each nav link
    navLinks.forEach((navLink) => {
        navLink.addEventListener('click', () => {
            close()
            if (window.matchMedia("(max-width: 480px)").matches) {
                toggleMenu()
            }  
        });
    });

    function toggleMenu(){
        if (navLinkUl.classList.contains('closed')) {
            navLinkUl.classList.toggle('opened');
            navLinkUl.classList.toggle('closed');
            navLinkUl.classList.remove('zero-size');
            navLinkUl.classList.toggle('hide');
            navbar.classList.toggle('full-height');
            header.classList.toggle('full-height');
            header.classList.toggle('blue-background');
            // navLinkUl.classList.toggle('show');
        } else {
            // Otherwise add display-none class after 2 seconds
            navLinkUl.classList.toggle('hide');
            navLinkUl.classList.toggle('closed');
            navLinkUl.classList.toggle('opened');
            header.classList.toggle('blue-background');
            navbar.classList.toggle('full-height');
            header.classList.toggle('full-height');
            // navLinkUl.classList.toggle('show');
            setTimeout(() => {
                navLinkUl.classList.add('zero-size');
            }, 1000);
        }
    }
    function close(){
        hamburger.classList.toggle('open')
        hamburger.classList.toggle('close')
        if (background)
        {
            background.classList.toggle('hide')
            background.classList.toggle('show')
        }
        if (slogan){
            slogan.classList.toggle('hide')
            slogan.classList.toggle('show')
        }
    }
});