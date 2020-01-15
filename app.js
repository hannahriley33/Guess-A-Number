// Getting DOM Variables
const button = document.getElementById("button");
const image = document.getElementById("img");
const wordsRules = document.getElementById("words");
const attemptCount = document.getElementById("remainingGuesses");
const resultUpdate = document.getElementById("result");

// Initialize State
let tries = 4;

// User Interaction
button.addEventListener('click', () => {
   // State Change
    tries --;
    resultUpdate.textContent = tries;

    // Update DOM
    
})