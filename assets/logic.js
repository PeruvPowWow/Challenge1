document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('mode-toggle');
    const logoImg = document.getElementById('mode-img-toggle');

    const updateToggleButtonIcon = () => {
        if(document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '🌙';
        } else {
            toggleButton.textContent = '☀️';
        }
    };

    const toggleLogoImg = () => {
        if(document.body.classList.contains('dark-mode')) {
            logoImg.src = "./assets/images/projectpalheader-dark.png";
        } else {
            logoImg.src = "./assets/images/projectpalheader.png";
        }
    }

    

    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        updateToggleButtonIcon();
        toggleLogoImg();
    }

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        updateToggleButtonIcon();
        toggleLogoImg();

        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
