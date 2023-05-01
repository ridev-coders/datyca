window.onload = function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const navLinks = [...document.querySelectorAll('nav ul li a')];
    const navbar = document.querySelector('header');
    const isHomepage = document.querySelector('.page.hp');

    function onScroll() {

        if (isHomepage){
            linksStyle();
        }
        backgroundStyle();
    }

    window.addEventListener('scroll', onScroll);
    
    // change style for anchors links
    function linksStyle() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    anchors.forEach(anchor => {
        const target = document.querySelector(anchor.hash);
    
        // Determine if the user has reached the bottom of the page
        if (scrollPosition + windowHeight >= docHeight) {
            navLinks.forEach(link => {
                // reset all links color first
                link.style.color = '';
                link.classList.remove('selected')
            });
            // Select the last anchor element and add the "selected" class
            const lastAnchor = anchors[anchors.length - 1];
            lastAnchor.classList.add('selected');
        } else {
            if (target.offsetTop <= scrollPosition +2 && target.offsetTop + target.offsetHeight > scrollPosition) {
                navLinks.forEach(link => {
                    // reset all links color first
                    link.style.color = '';
                    link.classList.remove('selected')
                });
    
                // set the color to blue for the active link
                anchor.classList.add('selected')
            }
        }
    });
    }
    
    // change style for navbar
    function backgroundStyle() {
    if (window.pageYOffset === 0) {
        // We're at the top of the page
        navbar.classList.remove('invisible');
        navbar.classList.remove('blue-background');
        navbar.classList.add('visible');
    } else {
        // We're scrolling down
        navbar.classList.add('invisible');
        navbar.classList.add('blue-background');
        navbar.classList.remove('visible');
    }
    }
};

