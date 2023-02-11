//Coin flip

function doCoinFlip() {
    let userChoice = askPrompt();
    let randomNumber = coinFlip();

    alert(getResponse(userChoice, randomNumber));
}

function askPrompt() {
    let choice = prompt("Do you want heads or tails?")
    let selection = 0;

    //Default heads if neither 'heads' nor 'tails' is given
    if(choice.toLowerCase() === 'heads'){
        selection = 0
    } else if (choice.toLowerCase() === 'tails'){
        selection = 1
    }

    return selection;
}

function coinFlip() {
    let coinFlip = Math.random();

    if (coinFlip < 0.5) {
        coinFlip = 0
    } else {
        coinFlip = 1
    }

    return coinFlip;
}

function getResponse(userChoice, randomNumber){
    if (userChoice === randomNumber){
        response = 'You were correct ';
    } else {
        response = 'You were wrong ';
    }
    return response + 'the coin flip was ' + convertCoinFlipToDisplayValue(randomNumber) + '.';
}

function convertCoinFlipToDisplayValue(coinFlipValue) {
    return coinFlipValue === 0 ? 'heads' : 'tails';
}

// --------------------------------------------------------------------------------------

//Drinking age
function doDrinkingAge() {
    let birthYear = agePrompt();
    let currentYear = new Date().getFullYear();
    alert(drinkMaybe(currentYear, birthYear));
}

function agePrompt() {
    let input = prompt("What is the numerical year you were born?");
    return parseInt(input, 10);
}
    
function drinkMaybe(currentYear, birthYear){
    let age = currentYear - birthYear;
    if(age > 21){
        return ("You can drink in the U.S.");
    }
    
    if(age == 21){
        return ("You can drink in the U.S. barely");
    }
    
    if(age < 21){
        return("You can not drink in the U.S.");
    }
}