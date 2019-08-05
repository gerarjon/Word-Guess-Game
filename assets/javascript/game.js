// Create array of words
// Choose words randomly
// Create blanks based on length of word
// User guesses word by key press
// Game determines if letter is correct
// If correct, word replaces blank
// If wrong, body part gets added to hangman 


// GLOBAL VARIABLES //  
// ---------------------------------------------

// List of Words
var word = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

// The chosen word will be held here
var chosenWord = ""; 

// This will break the word into inidivual letters and be stored into an array 
var lettersInChosenWord= [];

// The number of blanks/underscores that are in the chosen word will be stored in this array 
var blank = [];

// The correct letter and blanks will be held in this array 
var rightLetter = [];

// The wrong letters will be stored in this array 
var wrongLetter = [];

// Guesses left
var guessesLeft = 5;

// Score 
var wins = 0;




// MAIN //
// --------------------------------------------

// All functions in the game will be stored in this object
var game = {

    // Function that starts/resets the game 
    start: function() {
        // Resets the guesses back to 5
        guessesLeft = 5;
        console.log(guessesLeft); //testing

        // Chooses random word from the word list based on the length of the word array 
        chosenWord = word[Math.floor(Math.random() * word.length)];
        console.log(chosenWord); //testing

        // Splits the chosen word into individual letters
        lettersInChosenWord = chosenWord.split("");

        // RESETS the array of right letters at each round
        rightLetter =[];
        
        // RESETS the array of wrongs letters at each round
        wrongLetters = [];

        // Generates blanks based on the length of the word
        for (var i = 0; i < chosenWord.length; i++) {
            rightLetter.push('_');
        }
        console.log(rightLetter); //testing

        // Prints the # of guesses left (5);
        document.getElementById("numOfGuesses").innerHTML = guessesLeft;

        // Prints the # of blanks in the word to the HTML
        document.getElementById("wordBlanks").innerHTML = rightLetter.join(" ");

        // Clears the wrong guesses form the previous round
        document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");
    },
};

// // User's guess
// document.onkeyup = (event) => {
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//     console.log(chosenWord.indexOf(userGuess));

//     // If user guess letter is right
//     if (chosenWord.indexOf(userGuess) > -1) {
//         // Push to right letter array 
//         rightLetter.push(userGuess);
//         // Replace blank with right letter
//         blank[chosenWord.indexOf(userGuess)] = userGuess;
//         console.log(rightLetter);
//         // Checks to see if user word matches guesses 
//         if (blank.join('') == chosenWord) {
//             alert ('You Win');
//         }
//     } else {
//         // Else push to wrong letter array
//         wrongLetter.push(userGuess);
//         console.log(wrongLetter);
//         // If they get 5 wrong letters, they lose
//         guessesLeft--;
//         if (guessesLeft === 0) {
//             alert('You lose');
//         }

//     }
//     console.log(userGuess);
// };









