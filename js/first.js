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