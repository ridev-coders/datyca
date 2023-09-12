document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.menu-section');

    Array.from(sections).forEach(section => {
        section.dataset.height = section.scrollHeight;
        section.dataset.paddingBottom = 25;
    });

    document.querySelectorAll('.side-menu .button').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            const targetSection = document.querySelector('.menu-section.' + target);
            const parent = button.parentElement

            if (button.classList.contains('active')) {
                Array.from(sections).forEach(section => {
                    section.style.height = 0;
                    section.style.paddingBottom = 0;
                });
                
                document.querySelectorAll('.side-menu .button, .side-menu .element').forEach(element => {
                    element.classList.remove('active');
                });
            } else {
                Array.from(sections).forEach(section => {
                    section.style.height = 0;
                    section.style.paddingBottom = 0;
                });
                
                document.querySelectorAll('.side-menu .button, .side-menu .element').forEach(element => {
                    element.classList.remove('active');
                });
    
                targetSection.style.display = 'block';
                targetSection.style.height = targetSection.dataset.height + 'px';
                targetSection.style.paddingBottom = targetSection.dataset.paddingBottom + 'px';
    
                button.classList.add('active');
                parent.classList.add('active');
            }
        });
    });
});
