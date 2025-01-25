/**
 * displays a modal by removing the 'hidden' class and adding 'no-scroll' to the body.
 * also adds event listeners for clicking outside the modal and pressing the ESC key.
 * 
 * @param {string} modalId - the ID of the modal element to display.
 * @param {string} contentClass - the class name of the modal's content container.
 */
function showModal(modalId, contentClass) {
    const modal = document.getElementById(modalId);
    const body = document.body;
    const modalContainer = modal.querySelector('.modal-container');

    modalContainer.classList.add('modal-in')
    modal.classList.remove('hidden');
    body.classList.add('no-scroll');

    modal.addEventListener('click', (event) => handleModalClick(event, modalId, contentClass));
    document.addEventListener('keydown', (event) => handleModalEsc(event, modalId));
}


/**
 * closes a modal by adding the 'hidden' class and removing 'no-scroll' from the body.
 * also removes event listeners for clicking outside the modal and pressing the ESC key.
 * 
 * @param {string} modalId - the ID of the modal element to close.
 */
/**
 * closes a modal by adding the 'hidden' class and removing 'no-scroll' from the body.
 * also removes event listeners for clicking outside the modal and pressing the ESC key.
 * 
 * @param {string} modalId - the ID of the modal element to close.
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const body = document.body;
    const modalContainer = modal.querySelector('.modal-container');

    modalContainer.classList.remove('modal-in');
    modal.classList.add('hidden');
    body.classList.remove('no-scroll');


    modal.removeEventListener('click', (event) => handleModalClick(event, modalId));
    document.removeEventListener('keydown', (event) => handleModalEsc(event, modalId));
}


/**
 * handles clicks outside or inside the modal content and closes the modal
 * based on the modal type.
 * 
 * @param {MouseEvent} event - the click event triggered by the user.
 * @param {string} modalId - the ID of the modal element to close.
 * @param {string} contentClass - the class name of the modal's content container.
 */
function handleModalClick(event, modalId, contentClass) {
    const modalContent = document.querySelector(`#${modalId} .${contentClass}`);
    const modal = document.getElementById(modalId);

    if (modalId === 'info-guide-modal' && !modalContent.contains(event.target)) {
        closeModal(modalId);
        currentSlide = 0;
        updateCarousel();
    }

    if (modalId === 'game-settings-modal' && !modalContent.contains(event.target)) {
        closeModal(modalId);
    }

    if (modalId === 'popover-menu' && !modalContent.contains(event.target)) {
        closeModal(modalId);
    }
}


/**
 * handles the ESC key press and closes the modal if the key is pressed.
 * 
 * @param {KeyboardEvent} event - the keydown event triggered by the user.
 * @param {string} modalId - the ID of the modal element to close.
 */
function handleModalEsc(event, modalId) {
    if (event.key === 'Escape') {
        closeModal(modalId);
        currentSlide = 0;
        updateCarousel();
    }
}


/**
 * displays the "info guide" modal.
 * if triggered from the "popup menu" modal, it closes the "popup menu" modal first.
 */
function showInfoGuide() {
    const popupMenu = document.getElementById('popup-menu');
    if (popupMenu && !popupMenu.classList.contains('hidden')) {
        closePopupMenu();
    }

    showModal('info-guide-modal', 'modal-container');

    if (typeof world !== 'undefined' && world) {
        world.pauseGame();
        updateButtonState(PLAY_BUTTON, true);
    }

    createCarousel();
}



/**
 * closes the "info guide" modal.
 */
function closeInfoGuide() {
    closeModal('info-guide-modal');
    currentSlide = 0;
    updateCarousel();
}


/**
 * displays the "game settings" modal.
 */
function showGameSettings() {
    const soundCheckbox = document.getElementById('chk-sound');
    if (soundCheckbox) {
        soundCheckbox.checked = isSoundOn;
    }

    showModal('game-settings-modal', 'modal-container');

    if (typeof world !== 'undefined' && world) {
        world.pauseGame();
        updateButtonState(PLAY_BUTTON, true);
    }
}


/**
 * closes the "game settings" modal.
 */
function closeGameSettings() {
    closeModal('game-settings-modal');
}


/**
 * displays the "popup menu" modal.
 */
function showPopupMenu() {
    showModal('popup-menu', 'modal-container');
    if (typeof world !== 'undefined' && world) {
        world.pauseGame();
        updateButtonState(PLAY_BUTTON, true);
    }
}


/**
 * closes the "popup menu" modal.
 */
function closePopupMenu() {
    closeModal('popup-menu');
}


/**
 * switches the visible tab and updates the active button state.
 * ensures only one tab is visible at a time and only one button has the 'active' class.
 *
 * @param {event} event - the click event triggered by a tab button
 * @param {string} tabId - the id of the tab content to be displayed
 */
function switchTab(event, tabId) {
    const button = event.target.closest('.tab-btn');
    if (!button) return;

    document.getElementById('game-story').classList.add('hidden');
    document.getElementById('desktop-controls').classList.add('hidden');
    document.getElementById('mobile-controls').classList.add('hidden');
    document.getElementById(tabId).classList.remove('hidden');

    Array.from(button.parentNode.children).forEach(sibling => sibling.classList.remove('active'));
    button.classList.add('active');
}


/**
 * ensures the initial state of checkboxes when the page loads.
 */
document.addEventListener('DOMContentLoaded', function () {
    const checkboxIds = ['chk-sound', 'chk-full-screen', 'chk-debug'];
    addCheckboxEventListeners(checkboxIds);
});


/**
 * adds event listeners to the checkboxes.
 * 
 * @param {Array} checkboxIds - an array of checkbox ids
 */
function addCheckboxEventListeners(checkboxIds) {
    checkboxIds.forEach(checkboxId => {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.addEventListener('click', (event) => {
                event.stopPropagation();
            });
        }
    });
}


/**
 * checks the fullscreen status and sets the state of the checkbox.
 */
function updateFullscreenCheckboxState() {
    const checkbox = document.getElementById('chk-full-screen');
    if (checkbox) {
        checkbox.checked = document.fullscreenElement !== null;
    }
}


/**
 * applies game settings based on the state of the checkboxes in the settings form.
 * prevents the default form submission behavior and updates settings for sound, fullscreen, and debug mode.
 *
 * @param {Event} event - the event object associated with the form submission.
 */
function applySettings(event) {
    event.preventDefault();
    updateSoundSetting();
    updateFullscreenSetting();
    updateDebugSetting();
    closeGameSettings();
}


/**
 * updates the sound setting based on the checkbox state.
 */
function updateSoundSetting() {
    const soundCheckbox = document.getElementById('chk-sound');
    if (soundCheckbox && soundCheckbox.checked !== isSoundOn) {
        toggleSound();
    }
}


/**
 * updates the fullscreen setting based on the checkbox state.
 */
function updateFullscreenSetting() {
    const fullscreenCheckbox = document.getElementById('chk-full-screen');
    if (fullscreenCheckbox) {
        handleFullscreen(fullscreenCheckbox);
        syncFullscreenCheckbox();
    }
}


/**
 * updates the debug mode setting based on the checkbox state.
 */
function updateDebugSetting() {
    const debugCheckbox = document.getElementById('chk-debug');
    if (debugCheckbox) {
        MovableObject.setDebugMode(debugCheckbox.checked);
    }
}