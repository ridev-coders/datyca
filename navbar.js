window.onload = function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const navLinks = [...document.querySelectorAll('nav ul li')]; // select the li elements instead
    const navbar = document.querySelector('header');
    const isHomepage = document.querySelector('.page.hp');
    const isMobile = window.innerWidth <= 480;
    addClickEventListeners()
    if (isHomepage) {smoothScroll()} 

    function onScroll() {

        if (isHomepage){
            linksStyle();
        }
        backgroundStyle();
        showHideMobileNavbar();
    }
    // Debounce function:
    // you can debounce the onScroll function, 
    // which will limit the number of times it is called during scroll events.
    function debounce(func, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    const debouncedScroll = debounce(onScroll, 100); // Adjust the delay as needed
    window.addEventListener('scroll', debouncedScroll);

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
                    link.classList.remove('selected')
                });
                // Select the last anchor element and add the "selected" class to its parent li element
                const lastAnchor = anchors[anchors.length - 1];
                const lastLink = lastAnchor.parentNode;
                lastLink.classList.add('selected');
            } else {
                if (target.offsetTop <= scrollPosition +2 && target.offsetTop + target.offsetHeight > scrollPosition) {
                    navLinks.forEach(link => {
                        link.classList.remove('selected')
                    });
        
                    // set the "selected" class to the parent li element of the active anchor link
                    anchor.parentNode.classList.add('selected')
                }
            }
        });
    }
    
    // change style for navbar
    function backgroundStyle() {
        if (window.pageYOffset === 0) {
            // We're at the top of the page
            navbar.classList.remove('invisible');
            navbar.classList.add('visible');
        } else {
            // We're scrolling down
            if (isMobile){
                // navbar.classList.add('slide-up');
                // navbar.classList.remove('slide-down');
            } else {
                navbar.classList.add('invisible');
                navbar.classList.remove('visible');
            }
        }
    }

    // add click event listener to navbar links' parent li elements instead
    function addClickEventListeners() {
        navLinks.forEach(link => { // select the li elements instead
            link.addEventListener('click', () => {
                navLinks.forEach(link => {
                    link.classList.remove('selected')
                });
                link.classList.add('selected'); // toggle the "selected" class on the clicked li element
                if (isMobile) {
                    document.querySelector('header').classList.remove('slide-down');
                    document.querySelector('header').classList.add('slide-up');
                }
            });
        });
    }

    // show or hide the navbar in mobile when scroll up and down
    let prevScrollPos = window.pageYOffset;
    function showHideMobileNavbar() {
        const currentScrollPos = window.pageYOffset;
  
        if (isMobile) {
            if (currentScrollPos > prevScrollPos) {
                document.querySelector('header').classList.add('slide-up');
                document.querySelector('header').classList.remove('slide-down');
            } else {
                document.querySelector('header').classList.add('slide-down');
                document.querySelector('header').classList.remove('slide-up');
            }
            prevScrollPos = currentScrollPos;
        }
    }

    // add smoothness in scrolling to anchors
    function smoothScroll(){
        document.querySelectorAll('.scroll-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
            
                const target = document.querySelector(link.getAttribute('href'));
                const offsetTop = target.offsetTop;
                const scrollPos = window.scrollY;
                            
                window.scrollTo({
                    top: offsetTop,
                    left: 0,
                    behavior: 'smooth'
                });
            });
        });
    }
};
