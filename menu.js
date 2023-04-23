
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.side-menu .button').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            const targetSection = document.querySelector('.menu-section.' + target);
            const parent = button.parentElement

            document.querySelectorAll('.menu-section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelectorAll('.side-menu .button').forEach(button => {
                button.classList.remove('active')
            });
            document.querySelectorAll('.side-menu .element').forEach(button => {
                button.classList.remove('active')
            });

            targetSection.style.display = 'block';
            button.classList.add('active')
            parent.classList.add('active')
        });
    });
});
