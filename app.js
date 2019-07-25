
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = document.querySelector('.btn__reset');
const titlePage = document.querySelector('.title');
const overlay = document.getElementById('overlay'); 
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

//GET PHRASE TO SCREEN
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

// VIEW RANDOM PHRASE
// console.log(phraseAsLetters); 

//CHECKS PLAYER GUESSES FOR MATCH
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

//CHECKS IF GAME IS WON OR LOST & DISPLAYS WIN OR LOSE OVERLAY
function checkWin(){
    const answerLetters = document.querySelectorAll('.show');
    const guessletters = document.querySelectorAll('.letter');
    if ( answerLetters.length === guessletters.length ) {  
        overlay.classList = 'win';
        titlePage.innerHTML= 'Congrats!';
        overlay.style.display= 'flex';   
        startBtn.innerHTML= 'Play Again';
    } else if (misses >= 5){
        overlay.classList = 'lose';
        titlePage.innerHTML= 'GAME OVER!!!';
        overlay.style.display= 'flex';
        startBtn.innerHTML= 'Play Again';
    }
};


//EVENTS
startBtn.addEventListener('click', (e) => {  
    overlay.style.display = 'none';
    if (overlay.className == 'win' || overlay.className == 'lose'){
        location.reload(true);
    }
});


qwerty.addEventListener("click", (e) => {
    let key = e.target;
    let letterFound = checkLetter(key);

        if(key.tagName == 'BUTTON' ){
            key.disabled = true;
            key.className = 'chosen';
        } 
        
        if(letterFound === null) {
            misses ++;
            const getHeart = document.getElementsByClassName('tries');
            getHeart[0].remove();
        }

        checkWin();
});