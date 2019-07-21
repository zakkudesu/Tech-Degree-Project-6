
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.getElementById('overlay'); 

startGame.addEventListener('click', (e) => {  
    startScreen.style.visibility = 'hidden';
});

