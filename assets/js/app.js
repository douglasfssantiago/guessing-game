'use strict';


const resultDisplay = select('.result-display p');
const counter = select('.counter p');
const inputText = select('.input-text');
const playAgainBtn = select('#play-again-button');

let score = 0; 


function select(selector, scope = document) {
    return scope.querySelector(selector);
}

function listen(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function validateInput(input) {
    input = input.trim();
    if (/^\d{1,3}$/.test(input) && Number(input) >= 0 && Number(input) <= 999) {
        return true; 
    }
    resultDisplay.textContent = 'Insert a valid number (0-999)!';
    return false;  
}

inputText.addEventListener('input', function() { 
    const value = inputText.value; 

    inputText.value = value.replace(/[^0-9]/g, ''); 
        if (validateInput(inputText.value)) { 
            resultDisplay.textContent = 'Insert a number above!'; 
        } 
    });






