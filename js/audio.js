let hasPlayedHurtSound = false;

const DEFAULT_VOLUMES = {
    gameMusic: 1,
    characterHurt: 0.5,
    characterJump: 0.5,
    characterPunch: 0.5,
    characterSurprised: 0.5,
    characterWalk: 0.5,
    characterThrowItem: 0.5,
    characterThrowError: 0.5,
    collectHealth: 0.5,
    collectItem: 0.5,
    deadEndboss: 0.5,
    hurtEndboss: 0.5,
    deadEnemy: 0.5,
    gameover: 0.25,
};

var soundManager = {
    sounds: {},
    isMuted: false,

    /**
     * adds a sound to the sound manager.
     * @param {string} key - the key to identify the sound.
     * @param {string} src - the source path of the sound file.
     */
    addSound: function (key, src) {
        this.sounds[key] = new Audio(src);
        this.sounds[key].volume = DEFAULT_VOLUMES[key] || 1;
    },

    /**
     * plays a sound by its key.
     * @param {string} key - the key of the sound to be played.
     */
    playSound: function (key) {
        if (this.isMuted) return;

        if (this.sounds[key]) {
            this.sounds[key].play();
        } else {
            console.warn(`sound "${key}" not found.`);
        }
    },

    /**
     * pauses a sound by its key.
     * @param {string} key - the key of the sound to be paused.
     */
    pauseSound: function (key) {
        if (this.sounds[key]) {
            this.sounds[key].pause();
        }
    },

    /**
     * stops a sound by its key and resets the playback time to 0.
     * @param {string} key - the key of the sound to be stopped.
     */
    stopSound: function (key) {
        if (this.sounds[key]) {
            this.sounds[key].pause();
            this.sounds[key].currentTime = 0;
        }
    },

    /**
     * mutes all sounds by setting their volume to 0.
     */
    muteSounds: function () {
        for (let key in this.sounds) {
            if (this.sounds.hasOwnProperty(key)) {
                this.sounds[key].volume = 0;
            }
        }
        this.isMuted = true;
        localStorage.setItem('isMuted', 'true');
        console.log('sounds muted');
    },

    /**
     * unmutes all sounds by restoring their volume to predefined levels.
     */
    unmuteSounds: function () {
        for (let key in this.sounds) {
            if (this.sounds.hasOwnProperty(key)) {
                this.sounds[key].volume = DEFAULT_VOLUMES[key] || 1;
            }
        }
        this.isMuted = false;
        localStorage.setItem('isMuted', 'false');
        console.log('sounds unmuted');
    },

    /**
     * toggles the mute state of all sounds.
     */
    toggleMute: function () {
        if (this.isMuted) {
            this.unmuteSounds();
        } else {
            this.muteSounds();
        }
    },

    /**
     * sets the volume of a specific sound.
     * @param {string} key - the key of the sound to set the volume for.
     * @param {number} volume - the volume level to set (0 to 1).
     */
    setVolume: function (key, volume) {
        if (this.sounds[key]) {
            this.sounds[key].volume = volume;
        }
    },

    /**
     * initializes default volumes for all sounds based on predefined levels.
     */
    initializeSoundVolumes: function () {
        for (const key in DEFAULT_VOLUMES) {
            if (DEFAULT_VOLUMES.hasOwnProperty(key)) {
                this.setVolume(key, DEFAULT_VOLUMES[key]);
            }
        }
    },

    /**
     * initializes the mute state based on localStorage.
     */
    initializeMuteState: function () {
        const isMuted = localStorage.getItem('isMuted') === 'true';
        if (isMuted) {
            this.muteSounds();
        } else {
            this.unmuteSounds();
        }
    },
};

// add sounds
soundManager.addSound('gameMusic', './assets/audio/bg-game.mp3');
soundManager.addSound('introMusic', './assets/audio/bg-intro.mp3');
soundManager.addSound('characterHurt', './assets/audio/character-hurt.mp3');
soundManager.addSound('characterJump', './assets/audio/character-jump.mp3');
soundManager.addSound('characterPunch', './assets/audio/character-punch.mp3');
soundManager.addSound('characterSurprised', './assets/audio/character-surprise.mp3');
soundManager.addSound('characterWalk', './assets/audio/character-walk.mp3');
soundManager.addSound('characterThrowItem', './assets/audio/character-throw.mp3');
soundManager.addSound('characterThrowError', './assets/audio/character-error.mp3');
soundManager.addSound('collectHealth', './assets/audio/collect-health.mp3');
soundManager.addSound('collectItem', './assets/audio/collect-item.mp3');
soundManager.addSound('deadEndboss', './assets/audio/endboss-dead.mp3');
soundManager.addSound('hurtEndboss', './assets/audio/endboss-hurt.mp3');
soundManager.addSound('deadEnemy', './assets/audio/enemy-dead.mp3');
soundManager.addSound('gameover', './assets/audio/gameover.mp3');


let isSoundOn = true;


// check localStorage for the muted state when the page loads
window.addEventListener('load', function () {
    const savedMutedState = loadMutedState();
    initializeSoundState(savedMutedState);
    initializeSoundUI(savedMutedState);
});


/**
 * loads the saved muted state from localStorage.
 * @returns {string} the saved muted state ('true' or 'false')
 */
function loadMutedState() {
    return localStorage.getItem('isMuted');
}


/**
 * initializes the sound state (mute/unmute) based on the saved state.
 * @param {string} savedMutedState - the saved muted state ('true' or 'false')
 */
function initializeSoundState(savedMutedState) {
    if (savedMutedState === 'true') {
        soundManager.muteSounds();
        isSoundOn = false;
    } else {
        soundManager.unmuteSounds();
        isSoundOn = true;
    }
}


/**
 * initializes the sound UI (icon, tooltip, checkbox, text) based on the current sound state.
 * @param {string} savedMutedState - the saved muted state ('true' or 'false')
 */
function initializeSoundUI(savedMutedState) {
    const svgContainer = document.getElementById('btn-volume-icon');
    const tooltipText = document.getElementById('btn-volume-tooltip');
    const soundCheckbox = document.getElementById('chk-sound');
    const soundText = document.getElementById('sound-status');

    updateIconBasedOnState(savedMutedState, svgContainer, tooltipText);
    syncCheckboxState(savedMutedState, soundCheckbox);
    updateSoundText(savedMutedState, soundText);
}


/**
 * updates the icon and tooltip based on the saved muted state.
 * @param {string} savedMutedState - the saved muted state ('true' or 'false')
 * @param {HTMLElement} svgContainer - the container holding the svg
 * @param {HTMLElement} tooltipText - the tooltip element
 */
function updateIconBasedOnState(savedMutedState, svgContainer, tooltipText) {
    if (savedMutedState === 'true') {
        updateIconAndTooltip(svgContainer, tooltipText, "Sound On", getMutedIcon());
    } else {
        updateIconAndTooltip(svgContainer, tooltipText, "Sound Off", getUnmutedIcon());
    }
}


/**
 * synchronizes the checkbox state with the saved muted state.
 * @param {string} savedMutedState - the saved muted state ('true' or 'false')
 * @param {HTMLElement} soundCheckbox - the checkbox element
 */
function syncCheckboxState(savedMutedState, soundCheckbox) {
    if (savedMutedState === 'true') {
        if (soundCheckbox) soundCheckbox.checked = false;
    } else {
        if (soundCheckbox) soundCheckbox.checked = true;
    }
}


/**
 * updates the sound status text based on the saved muted state.
 * @param {string} savedMutedState - the saved muted state ('true' or 'false')
 * @param {HTMLElement} soundText - the element for the sound status text
 */
function updateSoundText(savedMutedState, soundText) {
    if (savedMutedState === 'true') {
        if (soundText) soundText.textContent = 'Sound OFF';
    } else {
        if (soundText) soundText.textContent = 'Sound ON';
    }
}


/**
 * toggles the sound on/off and updates the UI accordingly.
 * it switches the sound on/off and adjusts the game music volume.
 * the sound status is also updated in the localStorage.
 */
function toggleSound() {
    toggleSoundState();
    updateSoundUI();

    if (!isSoundOn) {
        soundManager.muteSounds();
        soundManager.setVolume('gameMusic', 0);
        soundManager.stopSound('gameMusic');
    } else {
        soundManager.unmuteSounds();
        soundManager.setVolume('gameMusic', 1);
        soundManager.playSound('gameMusic');
    }
}


/**
 * updates the sound-related UI elements based on the current sound state.
 * updates the volume icon, tooltip text, checkbox, and sound status text.
 */
function updateSoundUI() {
    const svgContainer = document.getElementById('btn-volume-icon');
    const tooltipText = document.getElementById('btn-volume-tooltip');
    const soundCheckbox = document.getElementById('chk-sound');
    const soundText = document.getElementById('sound-status');

    if (isSoundOn) {
        updateIconAndTooltip(svgContainer, tooltipText, "Sound Off", getUnmutedIcon());
    } else {
        updateIconAndTooltip(svgContainer, tooltipText, "Sound On", getMutedIcon());
    }

    if (soundCheckbox) soundCheckbox.checked = isSoundOn;
    if (soundText) soundText.textContent = isSoundOn ? 'Sound ON' : 'Sound OFF';
}


/**
 * toggles the sound state (on/off) and updates the localStorage to reflect the current state.
 * switches the sound on or off and saves this state to localStorage.
 */
function toggleSoundState() {
    isSoundOn = !isSoundOn;
    localStorage.setItem('isMuted', !isSoundOn);
}


/**
 * synchronizes the UI elements with the current sound state.
 */
function syncSoundUI() {
    const soundCheckbox = document.getElementById('chk-sound');
    const soundText = document.getElementById('sound-status');

    if (soundCheckbox) soundCheckbox.checked = isSoundOn;
    if (soundText) soundText.textContent = isSoundOn ? 'Sound ON' : 'Sound OFF';
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
        </path>
    `;
}


/**
 * returns the svg path for the unmuted (sound on) icon.
 * @returns {string} the svg path for the unmuted state.
 */
function getUnmutedIcon() {
    return `
        <path
            d="M155.51,24.81a8,8,0,0,0-8.42.88L77.25,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H77.25l69.84,54.31A8,8,0,0,0,160,224V32A8,8,0,0,0,155.51,24.81ZM32,96H72v64H32ZM144,207.64,88,164.09V91.91l56-43.55Zm54-106.08a40,40,0,0,1,0,52.88,8,8,0,0,1-12-10.58,24,24,0,0,0,0-31.72,8,8,0,0,1,12-10.58ZM248,128a79.9,79.9,0,0,1-20.37,53.34,8,8,0,0,1-11.92-10.67,64,64,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67A79.83,79.83,0,0,1,248,128Z">
        </path>
    `;
}