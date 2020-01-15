import compareNumbers from "../compareNumbers.js";

// IMPORT MODULES under test here:
// import example from '../src/example.js';

const test = QUnit.test;

test('checkng if compare numbers === 0', function(assert) {
    //Arrange
    const expected = 0;
    const userGuess = 5;
    const correctNumber = 5;
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const
const result = compareNumbers(userGuess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
