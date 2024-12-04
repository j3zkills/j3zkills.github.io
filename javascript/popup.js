window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    const isPopupShown = localStorage.getItem('popupShown');

    if (!isPopupShown) {
        popup.style.display = 'flex';
        localStorage.setItem('popupShown', 'true');
    }

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});