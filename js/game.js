let canvas;
let world;
let keyboard = new Keyboard();


/**
 * initializes the game by setting up the canvas and world objects.
 * this function is called to start the game and establish the game environment.
 */
function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}


/**
 * event listener for keydown events. sets the respective keys as 'pressed' in the keyboard object.
 * it listens for the following keys:
 * - 'A' for moving left
 * - 'D' for moving right
 * - 'W' for moving up
 * - 'S' for moving down
 * - 'Space' for jumping or other actions
 * - 'ShiftLeft' for sprinting
 * - 'J' for punching
 * - 'K' for throwing a ball
 * 
 * @param {KeyboardEvent} event - the event object containing details about the pressed key.
 */
document.addEventListener('keydown', (event) => {
    if (world.character.isDead()) return;

    if (event.code == "KeyA") {
        keyboard.LEFT = true;
    }
    if (event.code == "KeyD") {
        keyboard.RIGHT = true;
    }
    if (event.code == "KeyW") {
        keyboard.UP = true;
    }
    if (event.code == "KeyS") {
        keyboard.DOWN = true;
    }
    if (event.code == "Space") {
        keyboard.SPACE = true;
    }
    if (event.code == "ShiftLeft") {
        keyboard.SHIFT = true;
    }
    if (event.code == "KeyJ") {
        keyboard.PUNCH = true;
    }
    if (event.code == "KeyK") {
        keyboard.THROW_BALL = true;
    }
});


/**
 * event listener for keyup events. sets the respective keys as 'released' in the keyboard object.
 * it listens for the following keys:
 * - 'A' for moving left
 * - 'D' for moving right
 * - 'W' for moving up
 * - 'S' for moving down
 * - 'Space' for jumping or other actions
 * - 'ShiftLeft' for sprinting
 * - 'J' for punching
 * - 'K' for throwing a ball
 * 
 * @param {KeyboardEvent} event - the event object containing details about the released key.
 */
document.addEventListener('keyup', (event) => {
    if (world.character.isDead()) return;

    if (event.code == "KeyA") {
        keyboard.LEFT = false;
    }
    if (event.code == "KeyD") {
        keyboard.RIGHT = false;
    }
    if (event.code == "KeyW") {
        keyboard.UP = false;
    }
    if (event.code == "KeyS") {
        keyboard.DOWN = false;
    }
    if (event.code == "Space") {
        keyboard.SPACE = false;
    }
    if (event.code == "ShiftLeft") {
        keyboard.SHIFT = false;
    }
    if (event.code == "KeyJ") {
        keyboard.PUNCH = false;
    }
    if (event.code == "KeyK") {
        keyboard.THROW_BALL = false;
    }
});
