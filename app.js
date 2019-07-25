
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelector('.btn__reset');
const startOverlay = document.getElementById('overlay'); 
const ul = document.querySelector('#phrase ul');
let misses = 0;

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
    // do stuff to any arr that is passed in, and add to `#phrase ul` 
    for (let i = 0; i < phrase.length; i++){
        const letterLI = document.createElement('li');
        letterLI.textContent = phrase[i];
        ul.appendChild(letterLI);   

        if(letterLI.textContent !== " "){
            letterLI.className = 'letter';
        } else {
            letterLI.className = 'space';
        }
    }
}

const phraseAsLetters = getRandomPhraseAsArray(gamePhrases);
addPhraseToDisplay(phraseAsLetters);
console.log(phraseAsLetters);

//CHECKS PLAYER GUESSES FOR MATCHING LETTERS 
function checkLetter(e){
    let guessRight = null;
    const li = document.getElementsByClassName('letter');
    for (let i = 0; i < li.length; i++){
        if (e.textContent.toUpperCase() === li[i].textContent.toUpperCase()) {
            li[i].classList.add('show');
            guessRight = li[i];
        } 
    }
    return guessRight;
};

//CHECKS IF GAME IS WON OR LOST
function checkWin(){
    /*run this function to check if the number of letters with 
    class “show” is equal to the number of letters with 
    class “letters”. If they’re equal, show the overlay screen 
    with the “win” class and appropriate text. 
    Otherwise, if the number of misses is equal to or greater than 5, 
    show the overlay screen with the “lose” class 
    and appropriate text. */
    const answerLetters = document.getElementsByClassName('show');
    const guessletters = document.getElementsByClassName('letter');
    if ( answerLetters.length === guessletters.length ) {
       
        
    };
    if (misses >= 5){
        

    }

};


//EVENTS
startGame.addEventListener('click', (e) => {  
    startOverlay.style.visibility = 'hidden';
});


qwerty.addEventListener("click", (e) => {
    let key = e.target;
    let letterFound = checkLetter(key);

        if(key.tagName == 'BUTTON' ){
            key.className = 'chosen';
            key.disabled = true;
        } 
        
        if(letterFound === null) {
            misses ++;
            const getHeart = document.getElementsByClassName('tries');
            getHeart[0].remove();
        }
        checkWin();
});