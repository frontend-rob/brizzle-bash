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
 */
function showInfoGuide() {
    showModal('info-guide-modal', 'modal-container');
    if (world) {
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
    if (world) {
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


// ! ### switch tab on guide modal ###

/**
 * switches between different tab contents based on the clicked tab button.
 * hides the currently visible tab, shows the new tab, and updates the active button.
 *
 * @param {Event} event - the click event triggered by clicking a tab button
 * @param {string} tabId - the id of the tab content to be displayed
 */
function switchTab(event, tabId) {
    document.getElementById('game-story').classList.add('hidden');
    document.getElementById('desktop-controls').classList.add('hidden');
    document.getElementById('mobile-controls').classList.add('hidden');
    document.getElementById(tabId).classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    event.target.classList.add('active');
}


// ! ### toggle checkboxes on settings modal ###

/**
 * toggles the state of the checkbox and updates the debug mode if necessary.
 * 
 * @param {string} checkboxId - the id of the checkbox to toggle
 */
function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        // toggle the checked state
        checkbox.checked = !checkbox.checked;

        // if it's the debug checkbox, update the debug mode
        if (checkboxId === 'chk-debug') {
            MovableObject.setDebugMode(checkbox.checked);  // sets the debug mode directly
        }
    }
}


/**
 * ensures that the debug mode is correctly set when the page loads.
 */
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('chk-debug');
    if (checkbox) {
        checkbox.checked = MovableObject.debugMode; // set the checkbox state based on the static debugMode variable
    }

    // add event listeners to the checkboxes
    const checkboxIds = ['chk-sound', 'chk-full-screen', 'chk-debug', 'chk-console'];
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
            checkbox.addEventListener('click', () => {
                toggleCheckbox(checkboxId);
            });
        }
    });
}


// ! ### toggle pause / resume button text & icon ###

// play button state
const PLAY_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z">
        </path>
    `,
    text: 'Return',
};


// pause button state
const PAUSE_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z">
        </path>
    `,
    text: 'Break',
};


// helper function to update the button
function updateButtonState(buttonState, isPaused) {
    const iconSvg = document.getElementById('pause-btn-icon');
    const buttonText = document.getElementById('pause-btn-text');
    const btn = document.getElementById('toggle-pause-btn');

    iconSvg.innerHTML = buttonState.svg;
    buttonText.textContent = buttonState.text;

    if (isPaused) {
        btn.classList.add('btn-primary');
    } else {
        btn.classList.remove('btn-primary');
    }
}


/**
 * toggles the game pause and updates the button state accordingly.
 */
function toggleGamePause() {
    if (world.isPaused) {
        world.resumeGame();
        updateButtonState(PAUSE_BUTTON, false);
    } else {
        world.pauseGame();
        updateButtonState(PLAY_BUTTON, true);
    }
}


// event listener for the 'P' key press to toggle pause
document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyP') {
        toggleGamePause();
    }
});
