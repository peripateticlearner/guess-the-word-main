//The unordered list where the player’s guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");

//The button with the text “Guess!” in it.
const guessButton = document.querySelector(".guess");

//The text input where the player will guess a letter.
const inputLetter = document.querySelector(".letter");

//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

//The variable contains all the letters the player guesses.
const guessedLetters = [];

//function to add placeholder for each letter
const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    };
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

//Event listener for the button
guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    message.innerText = "";
    //variable for letter input
    const guess = inputLetter.value;
    const goodGuess = checkInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    inputLetter.value = "";
});

//function to check player's input
const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter A to Z.";
    } else {
        return input;
    }
};

// function accepts a letter as the parameter
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You've already guessed that letter, try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};