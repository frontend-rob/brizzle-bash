// ! ### modal control ###

/**
 * displays a modal by removing the 'hidden' class and adding 'no-scroll' to the body.
 * adds event listeners for clicking outside the modal and pressing the ESC key.
 * 
 * @param {string} modalId - the ID of the modal element to display.
 * @param {string} contentClass - the class name of the modal's content container.
 */
function showModal(modalId, contentClass) {
    const modal = document.getElementById(modalId);
    const body = document.body;

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
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const body = document.body;

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
    showModal('game-settings-modal', 'modal-container');
    if (typeof world !== 'undefined' && world) { // Überprüfen, ob `world` definiert ist
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
    if (typeof world !== 'undefined' && world) { // Überprüfen, ob `world` definiert ist
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



// ! ### toggle checkboxes on settings modal ###

/**
 * toggles the state of the checkbox and updates the sound or other features accordingly.
 * 
 * @param {string} checkboxId - the id of the checkbox to toggle
 */
function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;

        if (checkboxId === 'chk-sound') {
            toggleSound(); // sync the sound state with the checkbox
        }

        if (checkboxId === 'chk-debug') {
            MovableObject.setDebugMode(checkbox.checked); // sets the debug mode directly
        }
    }
}


/**
 * ensures the initial state of checkboxes when the page loads.
 */
document.addEventListener('DOMContentLoaded', function () {
    const debugCheckbox = document.getElementById('chk-debug');
    if (debugCheckbox) {
        debugCheckbox.checked = MovableObject.debugMode; // set the checkbox state based on the static debugMode variable
    }

    // add event listeners to the checkboxes
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
                toggleCheckbox(checkboxId);
            });
        }
    });
}