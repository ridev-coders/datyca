
window.addEventListener('load', function() {
    // mobile menu
    const hamburger = document.querySelector('.hamburger');
    const navLinkUl = document.querySelector('.navbar ul');
    const background = document.querySelector('.bg-lines');
    const slogan = document.querySelector('.slogan .mobile')
    const navLinks = document.querySelectorAll('.navbar ul li');
    // not display menu in mobile
    if (window.matchMedia("(max-width: 480px)").matches) {
        navLinkUl.classList.add('zero-size');
        navLinkUl.classList.add('hide');
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
        // navLinkUl.classList.toggle('display-none');
        // navLinkUl.classList.toggle('hide');
        // navLinkUl.classList.toggle('show');

        if (navLinkUl.classList.contains('zero-size')) {
            navLinkUl.classList.remove('zero-size');
            navLinkUl.classList.toggle('hide');
            // navLinkUl.classList.toggle('show');
        } else {
            // Otherwise add display-none class after 2 seconds
            navLinkUl.classList.toggle('hide');
            // navLinkUl.classList.toggle('show');
            setTimeout(() => {
                navLinkUl.classList.add('zero-size');
            }, 1000);
        }
    }

    function hideMenu(){
        navLinkUl.classList.add('display-none');
        navLinkUl.classList.add('hide');
        navLinkUl.classList.remove('show');
    }

    function showMenu(){
        // navLinkUl.classList.remove('display-none');
        navLinkUl.classList.remove('hide');
        // navLinkUl.classList.add('show');
    }

    function close(){
        hamburger.classList.toggle('open')
        hamburger.classList.toggle('close')
        background.classList.toggle('hide')
        background.classList.toggle('show')
        slogan.classList.toggle('hide')
        slogan.classList.toggle('show')
        // navLinkUl.classList.toggle('display-flex');
        
        // if (navLinkUl.classList.contains('display-none')) {
        //     navLinkUl.classList.remove('display-none');
        // } else {
        //     // Otherwise add display-none class after 2 seconds
        //     setTimeout(() => {
        //         navLinkUl.classList.add('display-none');
        //     }, 2000);
        // }
        // navLinkUl.classList.toggle('hide');
        // navLinkUl.classList.toggle('show');
        // navLinkUl.classList.toggle('display-flex');
    }
});