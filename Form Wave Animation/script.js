document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.control label');

    document.addEventListener('DOMContentLoaded', () => {
        const labels = document.querySelectorAll('.control label');
    
        labels.forEach(label => {
            label.innerHTML = label.textContent
                .split('')
                .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
                .join('');
        });
    });
    
});
