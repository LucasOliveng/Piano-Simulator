const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let audio = new Audio('src/tunes/a.wav');

let mapedKeys = [];

function playTune(key) {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key='${key}']`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

function handleVolume(e) {
    audio.volume = e.target.value;
};

function showHideKeys() {
    pianoKeys.forEach((key) => key.classList.toggle('hide'));
};

volumeSlider.addEventListener('input', handleVolume);

keysCheck.addEventListener('click', showHideKeys);