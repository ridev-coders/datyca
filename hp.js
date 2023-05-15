document.addEventListener('DOMContentLoaded', function() {
    const targetElement1 = document.getElementById('logo-container');
    const targetElement2 = document.getElementById('big-logo-container');

        console.log(window.pageYOffset)
        if (window.pageYOffset < 160 && !window.location.hash) {
            targetElement1.classList.add('animate');
            targetElement2.classList.add('animate');
        } else {
            targetElement1.classList.remove('animate');
            targetElement2.classList.remove('animate');
        }

        // remove the big logo:
        // Get a reference to the big logo container element
        const bigLogoContainer = document.querySelector('#big-logo-container');

        // Wait for 5 seconds using setTimeout() function
        setTimeout(() => {
        // After 5 seconds, set the display property of big logo container to none
        bigLogoContainer.style.display = 'none';
        }, 5000); // 5000 milliseconds = 5 seconds
});