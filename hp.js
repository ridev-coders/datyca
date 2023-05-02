document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('logo-container');

        console.log(window.pageYOffset)
        if (window.pageYOffset < 160 && !window.location.hash) {
            targetElement.classList.add('animate');
        } else {
            targetElement.classList.remove('animate');
        }

});