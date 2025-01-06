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

function showIntro() {
    const story = document.getElementById('story');

    // Entferne die "hidden" Klasse, um die Story anzuzeigen
    story.classList.toggle('hidden');

    // Musik abspielen/pausieren
    if (isIntroMusicPlaying) {
        soundManager.stopSound('introMusic');
    } else {
        soundManager.playSound('introMusic');
    }
    isIntroMusicPlaying = !isIntroMusicPlaying;

    // Reset den Text und den Ablauf
    currentSentence = 0; // Zurücksetzen der Satznummer
    story.innerHTML = ''; // Lösche den bisherigen Text

    // Starte die Story von vorne
    showNextSentence();
}

// Funktion für das Zeigen des nächsten Satzes
function showNextSentence() {
    const story = document.getElementById('story');

    // Stelle sicher, dass der alte Satz entfernt wird, wenn er existiert
    const previousSentence = story.querySelector('p');
    if (previousSentence) {
        previousSentence.remove(); // Entferne den alten Satz
    }

    if (currentSentence < storyText.length) {
        const sentenceElement = document.createElement('p');
        story.appendChild(sentenceElement);

        // Start des Schreibmaschineneffekts
        typeWriterEffect(sentenceElement, storyText[currentSentence], 50, () => {
            currentSentence++;
            setTimeout(showNextSentence, 3000); // 3 Sekunden Pause vor dem nächsten Satz
        });
    } else {
        // Wenn der Text zu Ende ist, blendet die Story aus
        setTimeout(() => {
            story.classList.toggle('hidden');
        }, 3000); // Verzögerung von 3 Sekunden nach dem letzten Satz
    }
}

// Schreibmaschineneffekt
function typeWriterEffect(element, text, delay = 50, callback) {
    let index = 0;
    element.textContent = ''; // Leeren vor Beginn der Animation

    // Füge einen blinkenden Cursor hinzu
    const cursor = document.createElement('span');
    cursor.classList.add('cursor'); // Füge der span-Tag eine CSS-Klasse hinzu
    element.appendChild(cursor);

    // Stoppe den vorherigen Interval, falls vorhanden
    if (typingInterval) {
        clearInterval(typingInterval);
    }

    // Setze einen neuen Interval für den aktuellen Satz
    typingInterval = setInterval(() => {
        // Füge den Text Stück für Stück hinzu
        element.textContent = text.substring(0, index);

        // Der Cursor wird immer wieder hinzugefügt, während der Text geschrieben wird
        element.appendChild(cursor); // Füge den Cursor immer wieder hinzu

        index++;
        if (index === text.length) {
            clearInterval(typingInterval); // Stoppe den Interval, wenn der gesamte Text angezeigt ist
            element.textContent = text; // Setze den Text vollständig (damit der Punkt erscheint)
            element.appendChild(cursor); // Füge den Cursor hinzu, auch wenn der Text fertig ist
            if (callback) callback(); // Weiter zum nächsten Satz
        }
    }, delay);
}
