function gaming() {
    hideElementById('home');
    showElementById('playground');
    playing();
}

function playing() {
    const alphabet = randomAlphabet();

    const getAlphabet = document.getElementById('change-alphabet');
    getAlphabet.innerText = alphabet;

    const bgColor = setBgColor(alphabet);
    return bgColor;
}