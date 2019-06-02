var drinks = ["latte", "mocha", "espresso", "cappuccino", "iced"];

var currentWord = ""; 
var lettersInWord = []; 
var blanks = 0; 
var answerBin = []; 
var wrongLetters = []; 

var userWins = 0; 
var userLosses = 0; 
var remainingGuesses = 15; 

function reset() {

    currentWord = drinks[Math.floor(Math.random() * drinks.length)];
    console.log(currentWord); 

    lettersInWord = currentWord.split(""); 
    console.log(lettersInWord); 

    blanks = lettersInWord.length; 
    console.log(blanks); 

    remainingGuesses = 15; 
    wrongLetters = []; 
    answerBin = []; 

    for(i = 0; i < blanks; i++) {
        answerBin.push("_"); 
        console.log(answerBin); 
    }

    document.getElementById("right-guesses").innerHTML = answerBin.join(" "); 
    document.getElementById("remaining-guesses").innerHTML = "Guesses Left: " + " " + remainingGuesses; 
    document.getElementById("user-wins").innerHTML = "Wins " + " " + userWins; 
    document.getElementById("user-losses").innerHTML = "Losses" + " " + userLosses; 


}

function letterChecker(letter) {
    if (event.keyCode >= 65 && event.keyCode <= 90){
        var correctLetter = false; 

        for (var i = 0; i < blanks; i++) {
            if(currentWord[i] == letter) {
                correctLetter = true; 
            }
        }

        if(correctLetter) {
            for (var i = 0; i < blanks; i++) {
                if(currentWord[i] == letter) {
                    answerBin[i] = letter; 
                }
            }
        }

        else {
            wrongLetters.push(letter); 
            remainingGuesses--
            console.log(answerBin); 
        }

    } else {
        alert("Please to pick a letter (a-z)"); 
    }
      
}

function gameover() {

    document.getElementById("remaining-guesses").innerHTML = "Guesses Left: " + " " + remainingGuesses; 
    document.getElementById("right-guesses").innerHTML = answerBin.join(" "); 
    document.getElementById("wrong-guesses").innerHTML = "You Guessed: " + " " + wrongLetters; 

    if (currentWord.toString() === answerBin.toString()) {
        userWins++; 
        alert("You win! Play again?"); 
        console.log("winner!"); 

        document.getElementsById("user-wins").innerHTML = "Wins: " + " " + userWins; 
        reset(); 
        document.getElementById("wrong-guesses").innerHTML = "You Guessed: " + " " + " "; 

    } else if (remainingGuesses == 0) {
        userLosses++; 
        alert("You lose! Play again?"); 
        console.log("loser!"); 

        document.getElementById("user-losses").innerHTML = "Losses: " + " " + userLosses; 
        reset(); 
        document.getElementById("wrong-guesses").innerHTML = "You Guessed: " + " " + " "; 
    }

    
    
}

reset(); 

document.onkeyup = function(event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase(); 
    console.log(lettersGuessed); 

    letterChecker(lettersGuessed); 
    gameover(); 

}