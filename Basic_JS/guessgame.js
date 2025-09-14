
var randomNumber=Math.floor(Math.random()*10)+1;
var numofwin=0;
var numoflose=0;

function checkGuess(guess){
    // if (guess<randomNumber){
    //     console.log("Too low! Try again")
    // }
    // else if(guess>randomNumber){
    //     console.log("Too high! Try again")

    // }
    if(guess===randomNumber){
        console.log("Congratulations! You guessed the right number.");
        numofwin++;
    }
    else if(guess != randomNumber){
        console.log("Oh no! That's not a valid guess.");
        numoflose++;
    }
    else{
        console.log("Enter a valid integer number.");
    }
}

for(var i=1;i<=5;i++){
    var userGuess = parseInt(prompt("Enter your guess (between 1 and 10):"));
    checkGuess(userGuess);
}
document.writeln("Number of wins: " + numofwin);
document.writeln("<br>Number of losses: " + numoflose);
