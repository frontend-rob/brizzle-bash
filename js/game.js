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
}


/**
 * event listener for keydown events. sets the respective keys as 'pressed' in the keyboard object.
 * it listens for keyboard events and updates the game state accordingly.
 * 
 * @param {KeyboardEvent} event - the event object containing details about the pressed key.
 */
document.addEventListener('keydown', (event) => {
    if (!world || !world.character || world.character.isDead()) return;
    handleKeyChange(event.code, true);
});


/**
 * event listener for keyup events. sets the respective keys as 'released' in the keyboard object.
 * it listens for keyboard events and updates the game state accordingly.
 * 
 * @param {KeyboardEvent} event - the event object containing details about the released key.
 */
document.addEventListener('keyup', (event) => {
    if (!world || !world.character || world.character.isDead()) return;
    handleKeyChange(event.code, false);
});


/**
 * handles the state change (pressed/released) of a key or button.
 * this function updates the keyboard object based on the provided action.
 * 
 * @param {string} keyCode - the identifier for the key or button being pressed or released.
 * @param {boolean} isPressed - true if the key/button is pressed, false otherwise.
 */
function handleKeyChange(keyCode, isPressed) {
    const action = KEY_BINDINGS[keyCode];
    if (action && keyboard.hasOwnProperty(action)) {
        keyboard[action] = isPressed;
    }
}


/**
 * sets up button controls for touch devices.
 * this function attaches touch event listeners to the control buttons.
 */
function setupButtonControls() {
    Object.keys(KEY_BINDINGS).forEach((keyCode) => {
        if (keyCode.startsWith('btn-')) {
            const button = document.getElementById(keyCode);
            if (button) {
                button.addEventListener('touchstart', (event) => {
                    if (event.cancelable) event.preventDefault();
                    handleKeyChange(keyCode, true);
                });
                button.addEventListener('touchend', (event) => {
                    if (event.cancelable) event.preventDefault();
                    handleKeyChange(keyCode, false);
                });
            }
        }
    });
}