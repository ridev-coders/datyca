
document.addEventListener('DOMContentLoaded', () => {
    // Get all the settore divs
    const settori = document.querySelectorAll('.settore');

    // Loop through each settore div
    for (let i = 0; i < settori.length; i++) {
    // Get the target attribute for this settore
    const target = settori[i].getAttribute('target');
    
    // Create an anchor element with the correct href and text
    const link = document.createElement('a');
    link.href = `settori.html#${target}`;

    // Append the anchor to the settore div
    settori[i].appendChild(link);
    }

});
