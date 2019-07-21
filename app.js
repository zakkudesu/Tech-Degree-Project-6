
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.getElementById('overlay'); 
const gameDisplay = document.querySelector('#phrase ul');

startGame.addEventListener('click', (e) => {  
    startScreen.style.visibility = 'hidden';
});

//GAME PHRASES
const gamePhrases = [
    'READ BETWEEN THE LINES',
    'HASTE MAKES WASTE',
    'SOMEONE WOKE UP ON THE WRONG SIDE OF THE BED'
];

function getRandomPhraseAsArray(arr){
    //do stuff to any arr that is passed in
    let pickPhrase = arr[Math.floor(Math.random()*arr.length)];
    let splitPhrase = pickPhrase.split(' ');
    
    // console.log(splitPhrase);
    return splitPhrase;
 } 

// getRandomPhraseAsArray(gamePhrases);

function addPhraseToDisplay(splitArr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    
    for (let i = 0; i < splitArr.length; i++){
        const li = document.createElement('li');
        

        gameDisplay.appendChild();   
    }
}

addPhraseToDisplay();
