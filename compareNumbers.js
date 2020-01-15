export default function compareNumbers(userGuess, correctNumber) {
    
    if (userGuess === correctNumber) {
    return 0;

    } if (userGuess < correctNumber) {
    return -1;

    } if (userGuess > correctNumber) {
    return 1;
    }
};