'use strict';

let score = [0,0];
let activePlayer = 1;

const player = function (name, idNum) {
    // DOM elements
    const diceOne = document.querySelector('.dice--1')
    const diceTwo = document.querySelector('.dice--2')
    const curContainer = document.querySelector(`#current--${idNum}`)

    // the sum of points pushed to the
    let playerScore = 0;
    let currentScore = 0;
    let dice = [];

    const getName = function () {
        // code
    };

    // return current score


    const getScore = function() {
        // code
    };

    // DISABLE THE BUTTON FOR PLAYER 1 PLAYER 2 ON HOLD
    const holdScore = function() {}

    const roll = function() {
        for (let x = 0; x < 2; x++) {
            dice[x] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        }
        const diceTotal = dice.reduce((a,b) => a + b, 0);
        diceOne.src = `dice-${dice[0]}.png`;
        diceTwo.src = `dice-${dice[1]}.png`;
    };

    // current points before added to the playerScore
    const currentPoints = {
        // code
    };

    return {getName, roll};
};

// Example players
const playerOne = player('Ryan', 1);
const playerTwo = player('Liz', 2);

const btnRoll = document.querySelector('.btn--roll');
btnRoll.addEventListener('click', (activePlayer === 1 ? playerOne.roll : playerTwo.roll))

