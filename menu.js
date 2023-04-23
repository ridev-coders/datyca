
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.side-menu .button').forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            const targetSection = document.querySelector('.menu-section.' + target);

            document.querySelectorAll('.menu-section').forEach(section => {
                section.style.display = 'none';
            });
            document.querySelectorAll('.side-menu .button').forEach(button => {
                button.classList.remove('active')
            });

            targetSection.style.display = 'block';
            button.classList.add('active')
        });
    });
});
