//The unordered list where the player’s guessed letters will appear.
const guestLetters = document.querySelector(".guest-letters");

//The button with the text “Guess!” in it.
const button = document.querySelector(".guess");

//The text input where the player will guess a letter.
const guessForm = document.querySelector(".guess-form");

//The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");

//The paragraph where the remaining guesses will display.
const remainingGuesses = document.querySelector(".remaining");

//The span inside the paragraph where the remaining guesses will display.
const guessesRemaining = document.querySelector(".remaining span");

//The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");

//The hidden button that will appear prompting the player to play again.
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

