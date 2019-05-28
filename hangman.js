var drinks = ["latte", "mocha", "espresso", "cappuccino", "iced"];

var userAttempts = 15;
var blanks = 0;
var guessedLetters = [];
var lettersInWord = [];
var rightGuess = [];
var remainingGuesses = 0;
var userWins = 0;
var userLosses = 0;
var chosenWord = drinks[Math.floor(Math.random() * drinks.length)];
console.log(chosenWord);

function reset() {
    remainingGUesses = 15;

    chosenWord = drinks[Math.floor(Math.random() * drinks.length)];

    lettersInWord = chosenWord.split("_");
    blanks = lettersInWord.length;

    guessedLetters = [];
    rightGuess = [];

    for (var i = 0; i < blanks; i++) {
        rightGuess.push("_");
    }

    console.log(rightGuess);

    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    document.getElementById("right-guesses").innerHTML = rightGuess.join(" ");
    document.getElementById("wrong-guesses").innerHTML = guessedLetters.join(" ");

};

function letterCheck(letter) {
    var letterInWord = false;
    for (var i = 0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }

    if (letterInWord) {
        for (var j = 0; j < blanks; j++) {
            if (chosenWord[j] === letter) {
                rightGuess[j] = letter;
            }
        }
        console.log(rightGuess);
    }
    else {
        guessedLetters.push(letter);
        remainingGuesses--;
    }
}

function newRound() {
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
    document.getElementById("right-guesses").innerHTML = rightGuess.join(" ");
    document.getElementById("wrong-guesses").innerHTML = guessedLetters.join(" ");

    if (lettersInWord.toString() === rightGuess.toString()) {
        userWins++
        alert("You win!");
        document.getElementById("user-wins").innerHTML = "Wins: " + userWins;
        restart();
    }

    else if (remainingGuesses === 0) {
        userLosses++;
        alert("You lose!")
        document.getElementById("user-losses").innerHTML = "Losses: " + userLosses
        reset();
    }
}

reset();

document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess);

    letterCheck(userGuess);
    newRound();

}; 
