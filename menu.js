
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.side-menu .button').forEach(button => {
        button.addEventListener('click', () => {
            const parent = button.parentElement

            document.querySelectorAll('.side-menu .button').forEach(button => {
                button.classList.remove('active')
            });
            document.querySelectorAll('.side-menu .element').forEach(button => {
                button.classList.remove('active')
            });

            button.classList.add('active')
            parent.classList.add('active')
        });
    });
});
