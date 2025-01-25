let canvas;
let world;
let keyboard = new Keyboard();


/**
 * initializes the game by setting up the canvas, world, and button controls.
 * this function is called to start the game and establish the game environment.
 */
async function initGame() {
    const canvas = document.getElementById('canvas');

    await loadResources();
    world = new World(canvas, keyboard);

    setupButtonControls();
    hideGameOverScreen();
}


/**
 * hides the loader screen and shows the header and main content.
 */
function hideLoaderAndShowContent() {
    const loaderScreen = document.getElementById('loader-screen');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    loaderScreen.classList.add('hidden');
    header.classList.remove('hidden');
    main.classList.remove('hidden');
}


/**
 * loads all resources, ensures a minimum display time, and manages the loader visibility.
 */
async function loadResources() {
    const preloadPromise = preload();
    const minDisplayTime = new Promise(resolve => setTimeout(resolve, 2500));
    await Promise.all([preloadPromise, minDisplayTime]);
    hideLoaderAndShowContent();
}


/**
 * centralized function to preload all image groups sequentially.
 */
async function preload() {
    await preloadImages(BRIZZLY_IMAGES['IDLE']);
    await preloadImages(BRIZZLY_IMAGES['WALK']);
    await preloadImages(BRIZZLY_IMAGES['JUMP']);
    await preloadImages(BRIZZLY_IMAGES['PUNCH']);
    await preloadImages(BRIZZLY_IMAGES['THROW']);
    await preloadImages(BRIZZLY_IMAGES['HIT']);
    await preloadImages(BRIZZLY_IMAGES['DEAD']);
    await preloadImages(BRIZZLY_IMAGES['SURPRISE']);
    await preloadImages(ENDBOSS_IMAGES['WALK']);
    await preloadImages(ENDBOSS_IMAGES['HIT']);
    await preloadImages(CANDLE_IMAGES['WALK']);
    await preloadImages(SPIRIT_IMAGES['WALK']);
    await preloadImages(SPIDER_IMAGES['WALK']);
    await preloadImages(SPINNER_IMAGES['WALK']);
    await preloadImages(SQUID_IMAGES['WALK']);
}

/**
 * loads all images in an array and returns a promise that resolves when all are loaded.
 * @param {Array} array - array of image URLs.
 * @returns {Promise} - resolves when all images are loaded.
 */
async function preloadImages(array) {
    const promises = array.map((url) => preloadImage(url));
    return Promise.all(promises);
}

/**
 * loads a single image and returns a promise.
 * @param {string} url - image URL.
 * @returns {Promise} - resolves when the image is loaded.
 */
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
    });
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


/**
 * play button state with SVG icon and text.
 */
const PLAY_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z">
        </path>
    `,
    text: 'Return',
};


/**
 * pause button state with SVG icon and text.
 */
const PAUSE_BUTTON = {
    svg: `
        <path
            d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z">
        </path>
    `,
    text: 'Break',
};


/**
 * updates button icon, text, and style.
 * @param {{svg: string, text: string}} buttonState - button state object.
 * @param {boolean} isPaused - whether the game is paused.
 */
function updateButtonState(buttonState, isPaused) {
    const iconSvg = document.getElementById('pause-btn-icon');
    const buttonText = document.getElementById('pause-btn-text');
    const btn = document.getElementById('toggle-pause-btn');

    iconSvg.innerHTML = buttonState.svg;
    buttonText.textContent = buttonState.text;

    if (isPaused) btn.classList.add('btn-primary');
    else btn.classList.remove('btn-primary');
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
 * handles fullscreen activation or deactivation based on the checkbox state.
 * @param {HTMLInputElement} fullscreenCheckbox - the fullscreen checkbox element.
 */
function handleFullscreen(fullscreenCheckbox) {
    const canvasContainer = document.getElementById("canvas-container");

    if (fullscreenCheckbox.checked) {
        enterFullscreen(canvasContainer);
        canvasContainer.classList.add("fullscreen");
    } else if (isFullscreenActive()) {
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
 * synchronizes the fullscreen checkbox state with the current fullscreen mode.
 */
function syncFullscreenCheckbox() {
    const fullscreenCheckbox = document.getElementById("chk-full-screen");
    if (fullscreenCheckbox) {
        fullscreenCheckbox.checked = isFullscreenActive();
    }
}


/**
 * handles Escape key to exit fullscreen mode and synchronize state.
 */
document.addEventListener("keydown", (event) => {
    const canvasContainer = document.getElementById("canvas-container");

    if (event.key === "Escape" && isFullscreenActive()) {
        console.log("Escape key pressed: Exiting fullscreen");
        exitFullscreen();
        canvasContainer.classList.remove("fullscreen");
        syncFullscreenCheckbox();
    }
});


/**
 * activates fullscreen mode for a given element.
 * @param {HTMLElement} element - the element to set to fullscreen mode.
 */
function enterFullscreen(element) {
    requestFullscreen(element, [
        "requestFullscreen",
        "mozRequestFullScreen",
        "webkitRequestFullscreen",
        "msRequestFullscreen"
    ]);
}


/**
 * exits fullscreen mode.
 */
function exitFullscreen() {
    const methodNames = [
        "exitFullscreen",
        "mozCancelFullScreen",
        "webkitExitFullscreen",
        "msExitFullscreen"
    ];
    requestFullscreen(document, methodNames);
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


/**
 * event listener for changes in fullscreen mode to synchronize checkbox state and handle fullscreen class.
 */
document.addEventListener("fullscreenchange", () => {
    console.log("Fullscreen mode changed.");
    const canvasContainer = document.getElementById("canvas-container");

    if (!isFullscreenActive()) {
        canvasContainer.classList.remove("fullscreen");
    }

    syncFullscreenCheckbox();
});
