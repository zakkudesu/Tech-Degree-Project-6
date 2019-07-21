
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.getElementsByClassName('btn_reset');
const startScreen = document.getElementById('overlay'); 

startScreen.addEventListener('click', (e) => {  
    startScreen.style.visibility = 'hidden';
});

