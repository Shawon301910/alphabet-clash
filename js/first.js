function hideElementById(elementId) {
    const hide = document.getElementById(elementId);
    hide.classList.remove('flex');
    hide.classList.add('hidden');
}

function showElementById(elementId) {
    const show = document.getElementById(elementId);
    show.classList.add('flex');
    show.classList.remove('hidden');
}

function randomAlphabet() {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const letters = alphabets.split('');

    const indexNumber = Math.random() * 25;
    const index = Math.round(indexNumber);

    const alphabet = letters[index];
    return alphabet;
}

function setBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-red-300');
}

function removeBgColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-red-300');
}

function getTextElement(elementId) {
    const currentText = document.getElementById(elementId);
    const text = currentText.innerText;
    const value = parseInt(text);
    return value;
}

function showTextElement(elementId, value) {
    const currentText = document.getElementById(elementId);
    currentText.innerText = value;
}

function finalScore() {
    const getText = getTextElement('game-finished');
    const getScore = document.getElementById('score-update').innerText;
    const getScoreInt = parseInt(getScore);
    const score = getText + getScoreInt;
    showTextElement('game-finished', score)
}