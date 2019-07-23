
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startScreen = document.getElementById('overlay'); 
const gameDisplay = document.querySelector('#phrase ul');

startGame.addEventListener('click', (e) => {  
    startScreen.style.visibility = 'hidden';
});

//GAME PHRASE LIST
const gamePhrases = [
    'READ BETWEEN THE LINES',
    'HASTE MAKES WASTE',
    'SOMEONE WOKE UP ON THE WRONG SIDE OF THE BED',
    'CRY ME A RIVER'
];

//CHOOSE RANDOM PHRASE
function getRandomPhraseAsArray(arr){
    let pickPhrase = arr[Math.floor(Math.random()*arr.length)];
    let splitPhrase = pickPhrase.split("");
    return splitPhrase;
 } 
const phraseAsLetters = getRandomPhraseAsArray(gamePhrases);

//APPEND SPLIT RANDOM PHRASE TO SCREEN
function addPhraseToDisplay(phrase){
    // do stuff any arr that is passed in, and add to `#phrase ul` 
    for (let i = 0; i < phrase.length; i++){
        let li = document.createElement('li');
        li.textContent = phrase[i];
        gameDisplay.appendChild(li);   

        if(li.textContent !== ' '){
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

addPhraseToDisplay(phraseAsLetters);
