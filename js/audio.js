let hasPlayedHurtSound = false;


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
        this.sounds[key].volume = 1;
    },

    /**
     * plays a sound by its key.
     * @param {string} key - the key of the sound to be played.
     */
    playSound: function (key) {
        if (this.isMuted) {
            return;
        }

        if (this.sounds[key]) {
            this.sounds[key].play();
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
     * unmutes all sounds by restoring their volume to 1.
     */
    unmuteSounds: function () {
        for (let key in this.sounds) {
            if (this.sounds.hasOwnProperty(key)) {
                this.sounds[key].volume = 1;
            }
        }
        this.isMuted = false;
        localStorage.setItem('isMuted', 'false');
        console.log('sounds unmuted');
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
    }
};


// ! add the sounds
soundManager.addSound('characterThrowError', '../assets/audio/character-error.mp3');
soundManager.addSound('characterHurt', '../assets/audio/character-hurt.mp3');
soundManager.addSound('characterJump', '../assets/audio/character-jump.mp3');
soundManager.addSound('characterPunch', '../assets/audio/character-punch.mp3');
soundManager.addSound('characterSurprised', '../assets/audio/character-surprise.mp3');
soundManager.addSound('throwItem', '../assets/audio/character-throw.mp3');
soundManager.addSound('characterWalk', '../assets/audio/character-walk.mp3');


soundManager.addSound('collectHealth', '../assets/audio/collect-health.mp3');
soundManager.addSound('collectItem', '../assets/audio/collect-item.mp3');

soundManager.addSound('deadEndboss', '../assets/audio/endboss-dead.mp3');
soundManager.addSound('hurtEndboss', '../assets/audio/endboss-hurt.mp3');
soundManager.addSound('deadEnemy', '../assets/audio/enemy-dead.mp3');

soundManager.addSound('gameover', '../assets/audio/gameover.mp3');


let isSoundOn = true;


// check localStorage for the muted state when the page loads
window.addEventListener('load', function () {
    const savedMutedState = localStorage.getItem('isMuted');
    if (savedMutedState === 'true') {
        soundManager.muteSounds();
        isSoundOn = false;
        updateIconAndTooltip(document.getElementById('btn-volume-icon'), document.getElementById('btn-volume-tooltip'), "Sound On", getMutedIcon());
    } else {
        soundManager.unmuteSounds();
        isSoundOn = true;
        updateIconAndTooltip(document.getElementById('btn-volume-icon'), document.getElementById('btn-volume-tooltip'), "Sound Off", getUnmutedIcon());
    }
});


/**
 * toggles the sound state and updates the button's svg icon and tooltip text.
 */
function toggleSound() {
    const svgContainer = document.getElementById('btn-volume-icon');
    const tooltipText = document.getElementById('btn-volume-tooltip');

    if (isSoundOn) {
        // sound off (mute)
        updateIconAndTooltip(svgContainer, tooltipText, "Sound On", getMutedIcon());
        soundManager.muteSounds();
    } else {
        // sound on (unmute)
        updateIconAndTooltip(svgContainer, tooltipText, "Sound Off", getUnmutedIcon());
        soundManager.unmuteSounds();
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
