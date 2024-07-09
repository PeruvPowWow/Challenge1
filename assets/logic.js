document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');

    const updateToggleButtonIcon = () => {
        if(document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '🌙';
        } else {
            toggleButton.textContent = '☀️';
        }
    };

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateToggleButtonIcon();
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateToggleButtonIcon();

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
