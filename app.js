
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.getElementById('overlay'); 

startGame.addEventListener('click', (e) => {  
    startScreen.style.visibility = 'hidden';
});

const phrases = [
    'read between the lines',
    'haste makes waste',
    'someone woke up on the wrong side of the bed'
];