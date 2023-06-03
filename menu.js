document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');
    
    // Store the height of each section in a data attribute
    Array.from(sections).forEach(section => {
        section.dataset.height = section.scrollHeight;
    });

    document.querySelectorAll('.side-menu .button').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            const targetSection = document.querySelector('.menu-section.' + target);
            const parent = button.parentElement

            // Loop through all sections and set their height to 0
            Array.from(sections).forEach(section => {
                section.style.height = 0;
            });

            // Remove the "active" class from all buttons and elements
            document.querySelectorAll('.side-menu .button, .side-menu .element').forEach(element => {
                element.classList.remove('active');
            });

            // Set the height of the target section to its stored height
            targetSection.style.display = 'block';
            targetSection.style.height = targetSection.dataset.height + 'px';

            // Add the "active" class to the current button and its parent element
            button.classList.add('active')
            parent.classList.add('active')
        });
    });
});
