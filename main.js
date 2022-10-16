'use strict';

let score = [0,0];
let activePlayer = 1;

const player = function (name, idNum) {
    // DOM elements
    const diceOne = document.querySelector('.dice--1')
    const diceTwo = document.querySelector('.dice--2')
    const currentContainer = document.querySelector(`#current--${idNum}`)
    const scoreContainer = document.querySelector(`#score--${idNum}`)
    const holdButton = document.querySelector('.btn--hold');
    const playerContainer1 = document.querySelector('.player--1');
    const playerContainer2 = document.querySelector('.player--2');

    // the sum of points pushed to the
    let playerScore = 0;
    let currentScore = 0;
    let winningScore = 100;
    let dice = [];

    // return current score
    const updateCurrent = function(diceTotal) {
        currentScore += diceTotal
        currentContainer.textContent = currentScore;
    }

    // reset the current player score
    const resetCurrent = function() {
        currentContainer.textContent = 0;
        currentScore = 0;
    }

    // checkScore to see if currentScore and playScore is greater than or equal to winning Score
    const checkScore = function() {
        let totalScore = playerScore + currentScore;
        if (totalScore >= winningScore) {
            scoreContainer.textContent = totalScore;
            alert("KO")
            alert(`${name}`);
        }

    };

    // DISABLE THE BUTTON FOR PLAYER 1 PLAYER 2 ON HOLD
    const holdScore = function() {
        let totalScore = playerScore += currentScore;
        scoreContainer.textContent = totalScore;
        resetCurrent();
        switchPlayer();
    };

    const roll = function() {
        for (let x = 0; x < 2; x++) {
            dice[x] = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        }

        const diceTotal = dice.reduce((a,b) => a + b, 0);
        diceOne.src = `dice-${dice[0]}.png`;
        diceTwo.src = `dice-${dice[1]}.png`;
        if (!(dice[0] === 1 || dice[1] === 1)) {
            updateCurrent(diceTotal);
            checkScore();
        } else {
            resetCurrent();
            switchPlayer();
            console.log(activePlayer);
        }
    };

    const switchPlayer = function() {
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        playerContainer1.classList.toggle('player--active');
        playerContainer2.classList.toggle('player--active');
    };

    // current points before added to the playerScore
    // const currentPoints = {
    //     // code
    // };

    return {roll, holdScore};
};

// Example players
const player1 = player('Ryan', 1);
const player2 = player('Liz', 2);

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', () => {
    activePlayer === 1 ? player1.roll() : player2.roll();
});

btnHold.addEventListener('click', () => {
    activePlayer === 1 ? player1.holdScore() : player2.holdScore();
});
