import compareNumbers from "./compareNumbers.js";

// Getting DOM Variables
const button = document.getElementById("button");
const image = document.getElementById("img");

const attemptCount = document.getElementById("remainingGuesses");
//const resultUpdate = document.getElementById("result");
const guessLowOrHigh = document.getElementById("highOrLow");
const theirGuess = document.getElementById("whatTheyGuess");
//const wordsRules = document.getElementById("words");


// Initialize State
let tries = 3;


let randomNumber = Math.floor(Math.random() * 20);;



// User Interaction
button.addEventListener('click', () => {
  
    if (Number(theirGuess.value) < 1) {
        alert ('Please enter a number between 1 and 20.')
        return;
    }

    if (theirGuess > '20') {
        alert ('Please enter a number between 1 and 20.')
        return; 
    }
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
    //    if (theirGuess > '20') {
    //        guessLowOrHigh.textContent = 'Please enter a number between 1 and 20.'
    //    }

    //     if (theirGuess < 1) {
    //         guessLowOrHigh.textContent = 'Please enter a number between 1 and 20.'
    //     }

    
});