
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startGame = document.querySelector('.btn__reset');
const startOverlay = document.getElementById('overlay'); 
const ul = document.querySelector('#phrase ul');

//GAME PHRASE LIST
const gamePhrases = [
    'READ BETWEEN THE LINES',
    'HASTE MAKES WASTE',
    'SOMEONE WOKE UP ON THE WRONG SIDE OF THE BED',
    'CRY ME A RIVER',
    'A DROP IN THE BUCKET'
];

//CHOOSE RANDOM PHRASE
function getRandomPhraseAsArray(arr){
    let pickPhrase = arr[Math.floor(Math.random()*arr.length)];
    let splitPhrase = pickPhrase.split("");
    return splitPhrase;
 } 

//APPEND SPLIT RANDOM PHRASE TO SCREEN
function addPhraseToDisplay(phrase){
    // do stuff any arr that is passed in, and add to `#phrase ul` 
    for (let i = 0; i < phrase.length; i++){
        let li = document.createElement('li');
        li.textContent = phrase[i];
        ul.appendChild(li);   

        if(li.textContent !== ' '){
            li.className = 'letter';
        } else {
            li.className = 'space';
        }
    }
}

const phraseAsLetters = getRandomPhraseAsArray(gamePhrases);
addPhraseToDisplay(phraseAsLetters);

//CHECKS PLAYER GUESSES FOR MATCHING LETTERS 
function checkLetter(btnGuess){
    let guess = null
    const getLetter = ul.children; 
    const btnGuessLetter = btnGuess.textContent;
    const btnGuessUpperCase = btnGuessLetter.toUpperCase();

    for(let i = 0; i < getLetter.length; i++){
        const letterAttr = (getLetter[i].getAttribute('class'));
        const letter = getLetter[i].textContent;
        

        if (letterAttr === 'letter'){
            if ( letter === btnGuessUpperCase){
                getLetter[i].classList.add('show');
                guess = getLetter[i];
            } 
        }
    }

    return guess;
};

//EVENTS
startGame.addEventListener('click', (e) => {  
    startOverlay.style.visibility = 'hidden';
});


qwerty.addEventListener("click", function(e)){


}