'use strict';


const resultDisplay = select('.result-display p');
const counter = select('.counter p');
const inputText = select('.input-text');
const playAgainBtn = select('#play-again-button');

let randomNumber = generateRandomNumber(); 
let attemptsLeft = 10; 
counter.textContent = `Guesses: ${attemptsLeft}`;

function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function generateRandomNumber() { 
    return Math.floor(Math.random() * 1000); }

function validateInput(input) {
    input = input.trim();
    if (/^\d{1,3}$/.test(input) && Number(input) >= 0 && Number(input) <= 999) {
        return true; 
    }
    resultDisplay.textContent = 'Insert a number (0-999)!';
    return false;  
}

inputText.addEventListener('input', function() { 
    const value = inputText.value; 

    inputText.value = value.replace(/[^0-9]/g, ''); 
        if (validateInput(inputText.value)) { 
            resultDisplay.textContent = 'Insert a number above!'; 
        } 
    });

function checkGuess() {
    const userGuess = Number(inputText.value);

    if (validateInput(inputText.value)) {
        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'You win!';
            inputText.disabled = true;
        } else {
            attemptsLeft--;
            counter.textContent = `Guesses: ${attemptsLeft}`;
            if (attemptsLeft <= 0) {
                resultDisplay.textContent = 'Game over!';
                inputText.disabled = true;
            } else if (userGuess < randomNumber) {
                resultDisplay.textContent = 'My number is bigger!';
            } else {
                resultDisplay.textContent = 'My number is smaller!';
            }
        }
        inputText.value = '';
    }
}

inputText.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});





