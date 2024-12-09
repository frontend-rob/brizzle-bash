let canvas;
let world;
let keyboard = new Keyboard();


function initGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

}


document.addEventListener('keydown', (event) => {
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
        keyboard.ATTACK_ONE = true;
    }
});

document.addEventListener('keyup', (event) => {
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
        keyboard.ATTACK_ONE = false;
    }
});