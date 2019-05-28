var drinks = [
    "latte", 
    "mocha", 
    "espresso", 
    "cappuccino", 
    "iced"
]; 

var selectedWord = ""; 

var wins = 0; 
var losses = 0;
var userGuesses = 15; 
var word = drinks[Math.floor(Math.random() * drinks.length)]; 

var numberOfLetters = []; 
var blanks = 0;  
var successes = []; 
var remaingGuesses = []; 
var userChoices = " "; 


function reset() {
    userGuesses = 15; 
    word = drinks[Math.floor(Math.random() * drinks.length)]; 
    numberOfLetters = selectedWord.split(" ");
    blanks = numberOfLetters.length; 
    successes = []; 
    remainingGuesses = []; 

    for(var j = 0; j < blanks; j++) {
        successes.push("_"); 
    }
document.getElementById("remaining-guesses").innerHTML = remainingGuesses; 
document.getElementById("slots").innerHTML = successes.push(" "); 
document.getElementById("wrong-guesses").innerHTML = remainingGuesses.push(" "); 
    
}

function check(letter) {
    var letterInWord = false; 
    for (var j = 0; j < blanks; j++)  {
        if (selectedword[j] === letter); {
        letterInWord = true; 
        }
    }
if (letterInWord) {
    for (var j = 0; j < blanks; j++) {
        if (selectedWord[j] === letter) {
            successes[j] = letter; 
        }
    }
}

else {
    remainingGuesses.push(letter); 
    userGuesses--; 
}

}

function wins() {

if (numberOfLetters.toString() === successes.toString()) {
    wins++; 
    alert("You won!"); 
    document.getElementById("user-wins").innerHTML = wins; 
    reset(); 
}

else if (userGuesses = 0) {
    losses++; 
    alert("You lose! Try again!"); 
    document.getElementById("user-losses").innerHTML = losses; 
    reset(); 
}

}

reset(); 

document.onkeyup = function(event) {
 var letter = event.key; 
 check(letter); 
 wins(); 
 
}


