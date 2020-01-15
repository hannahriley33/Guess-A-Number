import compareNumbers from "./compareNumbers.js";

// Getting DOM Variables
const button = document.getElementById("button");
const image = document.getElementById("img");
const wordsRules = document.getElementById("words");
const attemptCount = document.getElementById("remainingGuesses");
const resultUpdate = document.getElementById("result");
const guessLowOrHigh = document.getElementById("highOrLow");
const theirGuess = document.getElementById("whatTheyGuess");

// Initialize State
let tries = 4;

let randomNumber = 5;
//Math.floor(Math.random() * 10);

// User Interaction
button.addEventListener('click', () => {
   // State Change
    tries --;
    attemptCount.textContent = tries;

   

      
    const compareResult = compareNumbers(Number(theirGuess.value), randomNumber);
    console.log(compareResult);
  
    // Update DOM
    if (compareResult === 0) {
        guessLowOrHigh.textContent = 'Correct!';
        
        image.src="https://www.modernman.com/wp-content/uploads/2017/09/635820385849834826-477057486_Nwc9fGvgEnzm6z71XMtCpAV3o1_500.png";
   // document.getElementById('button').disabled = true;

    };

    if (compareResult === -1) {
        guessLowOrHigh.textContent = 'Your guess is too low';
    };
    
     if (compareResult === 1) {
        guessLowOrHigh.textContent = 'Your guess is too high';
    };

    // if (tries === 0) {
    //     return 'Guesses are up. You lose';
    // }
  

 // create reduce count function 
 // if count =0 , disable button
    
    
});