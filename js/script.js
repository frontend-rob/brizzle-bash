// ! ### MODAL CONTROL ###

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
    }
}


/**
 * displays the "Info Guide" modal.
 */
function showInfoGuide() {
    showModal('info-guide-modal', 'modal-container');
    toggleGamePause();

}


/**
 * closes the "Info Guide" modal.
 */
function closeInfoGuide() {
    closeModal('info-guide-modal');
}


/**
 * displays the "Game Settings" modal.
 */
function showGameSettings() {
    showModal('game-settings-modal', 'modal-container');
    toggleGamePause();
}


/**
 * closes the "Game Settings" modal.
 */
function closeGameSettings() {
    closeModal('game-settings-modal');
}


// ! ### SOUND CONTROL ###

let isSoundOn = true;

/**
 * toggles the sound state and updates the button's svg icon and tooltip text.
 */
function toggleSound() {
    const svgContainer = document.getElementById('btn-volume-icon');
    const tooltipText = document.getElementById('btn-volume-tooltip');

    if (isSoundOn) {
        // sound off (mute)
        updateIconAndTooltip(svgContainer, tooltipText, "Sound On", getMutedIcon());
        muteSounds();
    } else {
        // sound on (unmute)
        updateIconAndTooltip(svgContainer, tooltipText, "Sound Off", getUnmutedIcon());
        unmuteSounds();
    }

    isSoundOn = !isSoundOn;
}

/**
 * updates the svg icon and the tooltip text.
 * @param {HTMLElement} svgContainer - the container holding the svg.
 * @param {HTMLElement} tooltipText - the element containing the tooltip text.
 * @param {string} tooltip - the text for the tooltip.
 * @param {string} icon - the new svg icon to display.
 */
function updateIconAndTooltip(svgContainer, tooltipText, tooltip, icon) {
    svgContainer.innerHTML = icon;
    tooltipText.textContent = tooltip;
}

/**
 * returns the svg path for the muted (sound off) icon.
 * @returns {string} the svg path for the muted state.
 */
function getMutedIcon() {
    return `
        <path
            d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm101.66-61.3a8,8,0,0,1-11.32,11.32L216,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L204.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L216,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L227.31,128Z">
        </path>`;
}

/**
 * returns the svg path for the unmuted (sound on) icon.
 * @returns {string} the svg path for the unmuted state.
 */
function getUnmutedIcon() {
    return `
        <path
            d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z">
        </path>`;
}

/**
 * mutes all sounds in the application.
 */
function muteSounds() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.muted = true;
    });
    console.log('sounds muted');
}

/**
 * unmutes all sounds in the application.
 */
function unmuteSounds() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach(audio => {
        audio.muted = false;
    });
    console.log('sounds unmuted');
}




// ! ### SWITCH TAB ON GUIDE MODAL ###

/**
 * switches between different tab contents based on the clicked tab button.
 * hides the currently visible tab, shows the new tab, and updates the active button.
 *
 * @param {Event} event - the click event triggered by clicking a tab button
 * @param {string} tabId - the id of the tab content to be displayed
 */
function switchTab(event, tabId) {
    document.getElementById('desktop-controls').classList.add('hidden');
    document.getElementById('mobile-controls').classList.add('hidden');
    document.getElementById(tabId).classList.remove('hidden');

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.classList.remove('active');
    });

    event.target.classList.add('active');
}


// ! ### TOGGLE CHECKBOXES ON SETTINGS MODAL ###

/**
 * Schaltet den Zustand der Checkbox und aktualisiert ggf. den Debug-Modus
 * @param {string} checkboxId - Die ID der Checkbox, die umgeschaltet werden soll
 */
function toggleCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        // Toggle the checked state
        checkbox.checked = !checkbox.checked;

        // Wenn es die Debug-Checkbox ist, den Debug-Modus aktualisieren
        if (checkboxId === 'chk-debug') {
            MovableObject.setDebugMode(checkbox.checked);  // Setzt den Debug-Modus direkt
        }
    }
}

// Sicherstellen, dass der Debug-Modus beim Laden der Seite korrekt gesetzt ist
document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('chk-debug');
    if (checkbox) {
        checkbox.checked = MovableObject.debugMode; // Setzt den Zustand der Checkbox basierend auf der statischen Variable debugMode
    }

    // Event Listener hinzufügen
    const checkboxIds = ['chk-sound', 'chk-full-screen', 'chk-debug', 'chk-console'];
    addCheckboxEventListeners(checkboxIds);
});

/**
 * Fügt Event-Listener zu den Checkboxen hinzu
 * @param {Array} checkboxIds - Eine Liste von Checkbox-IDs
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


// ! ### TOGGLE PAUSE / RESUME BUTTON TEXT & ICON ###


// Play-Button-Zustand
const PLAY_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z">
        </path>
    `,
    text: 'Return',
};

// Pause-Button-Zustand
const PAUSE_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z">
        </path>
    `,
    text: 'Break',
};

// Hilfsfunktion für das Aktualisieren des Buttons
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

// Toggle-Funktion
function toggleGamePause() {
    if (world.isPaused) {
        world.resumeGame();
        updateButtonState(PAUSE_BUTTON, false);
    } else {
        world.pauseGame();
        updateButtonState(PLAY_BUTTON, true);
    }
}


// Event Listener für das Drücken der P-Taste
document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyP') {
        toggleGamePause();
    }
});
