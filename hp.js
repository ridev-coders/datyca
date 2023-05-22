document.addEventListener('DOMContentLoaded', function() {
    const targetElements = [];
    // remove animations when scroll is more then 160
    // or when page is loaded with anchor
    targetElements.push(document.getElementById('logo-container'));
    targetElements.push(document.getElementById('big-logo-container'));
    targetElements.push(document.querySelector('#slogan .content.slogan'));
    targetElements.push(document.querySelector('div.slogan span.future'));
    targetElements.push(document.querySelector('.bg-lines.desktop'));
    targetElements.push(document.querySelector('.bg-lines.mobile'));
    
    if (window.pageYOffset < 160 && !window.location.hash) {
        targetElements.forEach(function(targetElement) {
            targetElement.classList.add('animate');
        });
    } else {
        targetElements.forEach(function(targetElement) {
            targetElement.classList.remove('animate');
        });
    }

    // if user landed in page from anchor, remove the big logo:
    const bigLogoContainer = document.querySelector('#big-logo-container');
    if (window.location.hash){
        bigLogoContainer.style.display = 'none';
    }

});
