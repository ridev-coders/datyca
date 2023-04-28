window.onload = function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const navLinks = [...document.querySelectorAll('nav ul li a')];
    
    function onScroll() {
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
    }
    
    window.addEventListener('scroll', onScroll);
};
  



