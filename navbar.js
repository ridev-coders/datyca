window.onload = function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const navLinks = [...document.querySelectorAll('nav ul li a')];
    const navbar = document.querySelector('header');

    function onScroll() {

        // change style for anchors links
        const scrollPosition = window.scrollY;
        anchors.forEach(anchor => {
        const target = document.querySelector(anchor.hash);
        if (target.offsetTop <= scrollPosition && target.offsetTop + target.offsetHeight > scrollPosition) {
            navLinks.forEach(link => {
                // reset all links color first
                link.style.color = '';
                link.classList.remove('selected')
            });

            // set the color to blue for the active link
            anchor.classList.add('selected')
        }
        });

        // change style for navbar
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

    window.addEventListener('scroll', onScroll);
};
  



