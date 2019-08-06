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
var word = [
    "tzuyu", 
    "sana", 
    "jihyo", 
    "nayeon", 
    "momo", 
    "dahyun", 
    "jeongyeon", 
    "chaeyoung", 
    "mina"
];

// The chosen word will be held here
var chosenWord = ""; 

// This will break the word into inidivual letters and be stored into an array 
var lettersInChosenWord= [];

// The number of blanks/underscores that are in the chosen word will be stored in this array 
var blank = 0; // _ _ _ _ 

// The correct letter and blanks will be held in this array 
var rightLetter = [];

// The wrong letters will be stored in this array 
var wrongLetter = [];

// Guesses left
var guessesLeft = 5;

// Score 
var wins = 0;

// Gets image of html
var getImage = document.getElementById("twice-member");

// Hides other images
getImage.style.cssText = "display: none";




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

        // Make sure the hangman image is cleared
        document.getElementById("start-image").src = "assets/images/Twice.png";

        // Hides other images
        document.getElementById("start-image").style.cssText = "display: none";

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

            // Subtracts # of guesses by 1
            guessesLeft--;
        };
    },

    // Function that will run after each guess is made
    updateScore: function() {
        // logs how many wins and guesses are left
        console.log(`Win(s): ${wins} | Guesses Left: ${guessesLeft}`); //testing

        // Updates the HTML to reflect the # of guesses and replaces the blanks with the correct letter
        document.getElementById("numOfGuesses").innerHTML = guessesLeft;
        document.getElementById("wordBlanks").innerHTML = rightLetter.join(" ");
        document.getElementById("wrongGuesses").innerHTML = wrongLetter.join(" ");
    },

    // Function that checks if they won
    checkWin: function() {
        // If all the letters in the word are correct
        if (lettersInChosenWord.toString() == rightLetter.toString()) {

            // Displays winning image
            getImage.src = "assets/images/TwiceWin.jpg"
            getImage.style.cssText = "display:block";


            wins++; // adds to wins counter
            alert("You win!");


            // Updates the # of wins in the HTML
            document.getElementById("winCounter").innerHTML = wins;
            
            // Restarts the game
            this.start();
        } else if (guessesLeft == 0) {
            // Alerts the player that they lose
            alert("You lose :(");

            // Displays losing image
            getImage.src = "assets/images/TwiceSad.png";
            getImage.style.cssText = "display:block";

            // restarts the game
            this.start();
        };
    }
};

// Main Process
// ---------------------------------------
// Functions will be called/Game will start here 

// Button in HTML will start the game

// Captures the player's key input
document.onkeyup = function (event) {

    // This variable takes the key entered and converts the unicode to a string letter and lowercases it
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // Checks if the letter is correct
    game.checkLetter(letterGuessed);

    // Completes the round
    game.updateScore();

    // Win or Lose?
    game.checkWin();
};








