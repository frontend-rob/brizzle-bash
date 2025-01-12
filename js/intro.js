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
    story.classList.toggle('hidden');

    isIntroMusicPlaying ? soundManager.stopSound('introMusic') : soundManager.playSound('introMusic');
    isIntroMusicPlaying = !isIntroMusicPlaying;

    story.innerHTML = '';
    currentSentence = 0;
    showNextSentence();
}


/**
 * displays the next sentence of the story with a typing effect.
 * if all sentences are shown, hides the story.
 */
function showNextSentence() {
    const story = document.getElementById('story');

    if (currentSentence < storyText.length) {
        const sentence = storyText[currentSentence];
        story.innerHTML = `<p><span class="cursor"></span></p>`;
        typeWriterEffect(story, sentence, 50, () => {
            currentSentence++;
            setTimeout(showNextSentence, 3000);
        });
    } else {
        setTimeout(() => {
            story.classList.toggle('hidden');
        }, 3000);
    }
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