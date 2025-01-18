let canvas;
let world;
let keyboard = new Keyboard();


/**
 * a map that links keyboard and button identifiers to corresponding actions.
 */
const KEY_BINDINGS = {
    "KeyA": "LEFT",
    "KeyD": "RIGHT",
    "KeyW": "UP",
    "Space": "SPACE",
    "KeyJ": "PUNCH",
    "KeyK": "THROW_BALL",
    "btn-left": "LEFT",
    "btn-right": "RIGHT",
    "btn-jump": "UP",
    "btn-punch": "PUNCH",
    "btn-throw": "THROW_BALL",
};


/**
 * initializes the game by setting up the canvas, world, and button controls.
 * this function is called to start the game and establish the game environment.
 */
function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    setupButtonControls();
    hideGameOverScreen();
}


/**
 * event listener for keydown events. sets the respective keys as 'pressed' in the keyboard object.
 */
document.addEventListener('keydown', (event) => {
    if (shouldStopInput()) return;
    handleKeyChange(event.code, true);
});


/**
 * event listener for keyup events. sets the respective keys as 'released' in the keyboard object.
 */
document.addEventListener('keyup', (event) => {
    if (shouldStopInput()) return;
    handleKeyChange(event.code, false);
});


/**
 * handles the state change (pressed/released) of a key or button.
 */
function handleKeyChange(keyCode, isPressed) {
    const action = KEY_BINDINGS[keyCode];
    if (action && keyboard.hasOwnProperty(action)) {
        keyboard[action] = isPressed;
    }
}


/**
 * sets up button controls for touch devices.
 */
function setupButtonControls() {
    Object.keys(KEY_BINDINGS).forEach((keyCode) => {
        if (keyCode.startsWith('btn-')) {
            const button = document.getElementById(keyCode);
            if (button) {
                button.addEventListener('touchstart', (event) => {
                    if (shouldStopInput()) return;
                    if (event.cancelable) event.preventDefault();
                    handleKeyChange(keyCode, true);
                });
                button.addEventListener('touchend', (event) => {
                    if (shouldStopInput()) return;
                    if (event.cancelable) event.preventDefault();
                    handleKeyChange(keyCode, false);
                });
            }
        }
    });
}


/**
 * checks if input should be stopped based on the character's state.
 * If the character is dead, it shows the game over screen.
 */
function shouldStopInput() {
    if (!world || !world.character) return true;

    if (world.character.isDead()) {
        showGameOverScreen();
        return true;
    }

    return false;
}


/**
 * shows the game over screen with a custom or default message.
 * 
 * @param {string} [dynamicText] optional custom message for the game over screen.
 */
function showGameOverScreen(dynamicText) {
    stopAllActions();
    displayGameOverScreen(dynamicText);
    disableSettingBarButtons();
    addGameOverScreenListeners();
}


/**
 * displays the game over screen and sets the message text.
 * 
 * @param {string} [dynamicText] optional custom message for the game over screen.
 */
function displayGameOverScreen(dynamicText) {
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.classList.remove('hidden');

    const gameOverText = document.getElementById('game-over-screen-text');
    gameOverText.innerHTML = dynamicText || "The Shadow Monsters still reign, and darkness prevails over Moustacheshire...";
}


/**
 * disables all buttons in the setting bar.
 */
function disableSettingBarButtons() {
    const settingBarButtons = document.querySelectorAll('.setting-bar button');
    settingBarButtons.forEach((button) => {
        button.disabled = true;
        button.classList.add('disabled');
    });
}


/**
 * adds event listeners for the restart and back-to-menu buttons.
 */
function addGameOverScreenListeners() {
    document.getElementById('restart-game').addEventListener('click', restartGame);
    document.getElementById('back-to-menu').addEventListener('click', goToHome);
}


/**
 * stops all ongoing actions by resetting all keys in the keyboard object to false.
 */
function stopAllActions() {
    Object.keys(keyboard).forEach((key) => {
        keyboard[key] = false;
    });
}


/**
 * hides the game-over screen and re-enables setting bar buttons.
 */
function hideGameOverScreen() {
    hideGameOverScreenElement();
    enableSettingBarButtons();
}


/**
 * hides the game-over screen by adding the 'hidden' class.
 */
function hideGameOverScreenElement() {
    const gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.classList.add('hidden');
}


/**
 * enables all buttons in the setting bar by removing the 'disabled' state and class.
 */
function enableSettingBarButtons() {
    const settingBarButtons = document.querySelectorAll('.setting-bar button');
    settingBarButtons.forEach((button) => {
        button.disabled = false;
        button.classList.remove('disabled');
    });
}


/**
 * restarts the game by reinitializing the world and resetting the state.
 */
function restartGame() {
    hideGameOverScreen();
    window.location.reload();
}


/**
 * navigates back to the main screen.
 */
function goToHome() {
    hideGameOverScreen();
    window.location.href = 'index.html';
}


// ! ### game pause and button controls ###


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


/**
 * toggles fullscreen mode for the canvas container.
 */
function toggleFullscreen() {
    const canvasContainer = document.getElementById("canvas-container");

    if (!isFullscreenActive()) {
        enterFullscreen(canvasContainer);
        canvasContainer.classList.add("fullscreen");
    } else {
        exitFullscreen();
        canvasContainer.classList.remove("fullscreen");
    }
}


/**
 * checks if fullscreen mode is currently active.
 * @returns {boolean} - true if fullscreen mode is active, otherwise false.
 */
function isFullscreenActive() {
    return !!document.fullscreenElement;
}


/**
 * activates fullscreen mode for a given element.
 * @param {HTMLElement} element - the element to set to fullscreen mode.
 */
function enterFullscreen(element) {
    requestFullscreen(element, [
        "requestFullscreen",
        "mozRequestFullScreen", // firefox
        "webkitRequestFullscreen", // chrome, safari, opera
        "msRequestFullscreen" // ie/edge
    ]);
}


/**
 * exits fullscreen mode.
 */
function exitFullscreen() {
    requestFullscreen(document, [
        "exitFullscreen",
        "mozCancelFullScreen", // firefox
        "webkitExitFullscreen", // chrome, safari, opera
        "msExitFullscreen" // ie/edge
    ]);
}


/**
 * requests fullscreen mode or exits fullscreen mode based on the provided methods.
 * @param {HTMLElement|Document} target - the target element or document.
 * @param {string[]} methodNames - an array of method names to attempt.
 */
function requestFullscreen(target, methodNames) {
    for (const method of methodNames) {
        if (typeof target[method] === "function") {
            target[method]();
            break;
        }
    }
}