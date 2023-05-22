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
    const bigLogoContainer = document.querySelector('#big-logo-container');
    
    if (window.pageYOffset < 160 && !window.location.hash) {
        targetElements.forEach(function(targetElement) {
            targetElement.classList.add('animate');
        });
    } else {
        targetElements.forEach(function(targetElement) {
            targetElement.classList.remove('animate');
        });
        bigLogoContainer.style.display = 'none';
    }

});
