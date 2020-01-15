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
let tries = 3;


let randomNumber = Math.floor(Math.random() * 10);;



// User Interaction
button.addEventListener('click', () => {
  
    // State Change
    tries --;
    attemptCount.textContent = tries;

      
    const compareResult = compareNumbers(Number(theirGuess.value), randomNumber);
    console.log(compareResult);
  
    // Update DOM
    if (compareResult === 0) {
        guessLowOrHigh.textContent = 'Congratulations! You guessed the magic number!';
        
        image.src="https://compote.slate.com/images/02dd6ec5-4eee-416f-864e-b610aaade2ac.jpg";
        
        document.getElementById('button').disabled = true;

    };

    if (compareResult === -1) {
        guessLowOrHigh.textContent = 'Your guess is too low';
    };
    
     if (compareResult === 1) {
        guessLowOrHigh.textContent = 'Your guess is too high';
    };

      if (tries === 0) {
        guessLowOrHigh.textContent = 'You guessed wrong too many times. Game over.'
        
        image.src="https://i.imgflip.com/1l5w3f.jpg";
        
        document.getElementById('button').disabled = true;
      };

 // create reduce count function 
 // if count =0 , disable button
    
    
});