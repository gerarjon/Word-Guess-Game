// Create array of words
// Choose words randomly
// Create blanks based on length of word
// User guesses word by key press
// Game determines if letter is correct
// If correct, word replaces blank
// If wrong, letter gets put with other wrong leters


// GLOBAL VARIABLES //  
// ---------------------------------------------

// List of Words
var word = ["one", "two", "three", "four", "five", "six", "seven", "eight"];

// The chosen word will be held here
var chosenWord = ""; 

// This will break the word into inidivual letters and be stored into an array 
var lettersInChosenWord= [];

// The number of blanks/underscores that are in the chosen word will be stored in this array 
var blank = 0;

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
// the functions in this object are not being called yet 
var game = {

    // Function that starts/resets the game 
    start: function() {
        // Resets the guesses back to 5
        guessesLeft = 5;

        // Chooses random word from the word list based on the length of the word array 
        chosenWord = word[Math.floor(Math.random() * word.length)];
        console.log(chosenWord); //testing

        // Splits the chosen word into individual letters
        lettersInChosenWord = chosenWord.split("");

        // Counts the number of letters in the word
        blank = lettersInChosenWord.length;

        // RESETS the array of right letters at each round
        rightLetter =[];
        
        // RESETS the array of wrongs letters at each round
        wrongLetter = [];

        // Generates blanks based on the length of the word
        for (var i = 0; i < blank; i++) {
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

    // Function that will compare the letters in the word to the letters that the player chooses
    checkLetter: function(letter) {
        // will be toggled based on if the the letter is found in the word
        var letterInWord = false;

        // Loops that will check if the letter chosen by the player is in the word
        for (var i = 0; i < blank; i++) {
            // if the letter exists, letterInWord will be changed to true
            if (chosenWord[i] == letter) {
                letterInWord = true;
            }
        };

        // If the letter exists, find where in the word it exists
        if (letterInWord) {
            for (var i = 0; i < blank; i++) {
                // Puts the letter into the rightLetter array with every instance that the letter is there
                if (chosenWord[i] == letter) {
                    // Sets the specific blank equal to the letter when there is a match 
                    rightLetter[i] = letter;
                }
            }
        } else {
            // If wrong, pushes the wrong letter into the wrong letter array
            wrongLetter.push(letter);
            // substracts the number of guesses by 1
            guessesLeft--;
        };
    },

    // Function that will run after each guess is made
    roundComplete: function() {
        // logs how many wins and guesses are left
        console.log(`Win(s): ${wins} | Guesses Left: ${guessesLeft}`); //testing

        // Updates the HTML to reflect the # of guesses and replaces the blanks with the correct letter
        document.getElementById("numOfGuesses").innerHTML = guessesLeft;
        document.getElementById("wordBlanks").innerHTML = rightLetter.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");

        // If all the letters in the word are correct
        if (lettersInChosenWord.toString() == rightLetter.toString()) {
            wins++; // adds to wins counter
            alert("You win!");

            // Updates the # of wins in the HTML
            document.getElementById("winCounter").innerHTML = wins;
            
            // Restarts the game
            this.start();
        } else if (guessesLeft == 0) {
            // Alerts the player that they lose
            alert("You're a big loser, idiot");

            // restarts the game
            this.start();
        }
    }
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

// Main Process
// ---------------------------------------
// Functions will be called/Game will start here 

// Starts the game
game.start();

// Captures the player's key input
document.onkeyup = function (event) {

    // This variable takes the key entered and converts the unicode to a string letter and lowercases it
    letterGuessed = String.fromCharChode(event.keyCode).toLowerCase();

    // Checks if the letter is correct
    game.checkLetter(letterGuessed);

    // Completes the round
    game.roundComplete();
};








