function gaming() {
    hideElementById('home');
    showElementById('playground');
    playing();
    document.addEventListener('keyup', playerPressed);
}

function playing() {
    const alphabet = randomAlphabet();

    const getAlphabet = document.getElementById('change-alphabet');
    getAlphabet.innerText = alphabet;

    const bgColor = setBgColor(alphabet);
    return bgColor;
}

function playerPressed(event) {
    const pressed = event.key;

    if (pressed === 'Escape') {
        hideElementById('playground');
        showElementById('score-section');
    }

    const get = document.getElementById('change-alphabet').innerText;

    if (get === pressed) {
        const updateScore = getTextElement('score-update');
        const score = updateScore + 1;
        showTextElement('score-update', score)

        removeBgColor(pressed);
        playing();
        return score;
    } else {
        const updateLife = getTextElement('lost-life');
        const life = updateLife - 1;
        showTextElement('lost-life', life)

        if (life === 0) {
            finalScore();
            hideElementById('playground');
            showElementById('score-section');
        }
    }
}

function playAgain() {
    showTextElement('lost-life', 3)
    showTextElement('score-update', 0)
    showTextElement('game-finished', 0)
    hideElementById('score-section');
    showElementById('playground');
}