let isIntroMusicPlaying = false;
let typingInterval;
let currentSentence = 0;
let storyText = [
    "Darkness has crept into the world.",
    "Only faint glimmers of hope remain.",
    "At the center of this struggle is Oswald van Bristlewick.",
    "He is lovingly called Brizzly, defender of Moustacheshire.",
    "These monsters are a looming threat to the land.",
    "They emerge from the depths of the Twilight Forest.",
    "They spread terror across the world.",
    "Townsfolk tremble at their ghostly forms.",
    "The Shadow Monsters attack mercilessly.",
    "But Brizzly will not let darkness win.",
    "Brizzly is Moustacheshire’s final hope."
];


/**
 * toggles the visibility of the story and controls the music playback.
 * starts the story from the first sentence.
 */
function showIntro() {
    const story = document.getElementById('story');
    toggleVisibility(story);
    toggleMusic();
    resetStory(story);
    showNextSentence();
}


/**
 * toggles the visibility of an element by adding/removing the "hidden" class.
 */
function toggleVisibility(element) {
    element.classList.toggle('hidden');
}


/**
 * toggles the intro music on and off.
 */
function toggleMusic() {
    if (isIntroMusicPlaying) {
        soundManager.stopSound('introMusic');
    } else {
        soundManager.playSound('introMusic');
    }
    isIntroMusicPlaying = !isIntroMusicPlaying;
}


/**
 * resets the story element and prepares for the first sentence.
 */
function resetStory(story) {
    story.innerHTML = '';
    currentSentence = 0;
}




/**
 * displays the next sentence of the story with a typing effect.
 * if all sentences are shown, hides the story.
 */
function showNextSentence() {
    const story = document.getElementById('story');

    if (currentSentence < storyText.length) {
        const sentence = storyText[currentSentence];
        displayTypingEffect(story, sentence, () => {
            currentSentence++;
            setTimeout(showNextSentence, 3000);
        });
    } else {
        hideStoryAfterDelay(story, 3000);
    }
}

/**
 * displays the typing effect for a sentence.
 * @param {HTMLElement} element - the element to display the text in.
 * @param {string} text - the text to display.
 * @param {function} callback - the function to call after the text is fully typed (optional).
 */
function displayTypingEffect(element, text, callback) {
    element.innerHTML = `<p><span class="cursor"></span></p>`;
    typeWriterEffect(element, text, 50, callback);
}


/**
 * hides the story element after a specified delay.
 * @param {HTMLElement} element - the element to hide.
 * @param {number} delay - the time in milliseconds to wait before hiding.
 */
function hideStoryAfterDelay(element, delay) {
    setTimeout(() => {
        element.classList.toggle('hidden');
    }, delay);
}


/**
 * creates a typewriter effect for a given text.
 * @param {HTMLElement} element - the DOM element to display the text in.
 * @param {string} text - the text to display.
 * @param {number} delay - the delay between typing each character (default is 50ms).
 * @param {function} callback - the function to call after the text is fully typed (optional).
 */
function typeWriterEffect(element, text, delay = 50, callback) {
    let index = 0;
    const paragraph = element.querySelector('p');

    if (typingInterval) {
        clearInterval(typingInterval);
    }

    typingInterval = setInterval(() => {
        paragraph.innerHTML = `${text.substring(0, index)}<span class="cursor"></span>`;
        index++;
        if (index === text.length) {
            clearInterval(typingInterval);
            paragraph.innerHTML = `${text}<span class="cursor"></span>`;
            if (callback) callback();
        }
    }, delay);
}


/**
 * starts the game by navigating to the game screen.
 */
function startGame() {
    window.location.href = 'game.html';
}