/**
 * class representing the keyboard input state.
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SHIFT = false;
    PUNCH = false;
    THROW_BALL = false;
}


/**
 * a map that links keyboard and button identifiers to corresponding actions.
 */
const KEY_BINDINGS = {
    "KeyA": "LEFT",
    "KeyD": "RIGHT",
    "KeyW": "UP",
    "KeyJ": "PUNCH",
    "KeyK": "THROW_BALL",
    "btn-left": "LEFT",
    "btn-right": "RIGHT",
    "btn-jump": "UP",
    "btn-punch": "PUNCH",
    "btn-throw": "THROW_BALL",
};


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
