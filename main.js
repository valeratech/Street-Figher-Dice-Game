'use strict';

let score = [0,0];
let activePlayer = 1;

const player = function (name, idNum) {
    // DOM elements
    const diceOne = document.querySelector('.dice--1')
    const diceTwo = document.querySelector('.dice--2')
    const currentContainer = document.querySelector(`#current--${idNum}`)
    const scoreContainer = document.querySelector(`#score--${idNum}`)
    const healthBar1 = document.querySelector('.hlth-bar--1');
    const healthBar2 = document.querySelector('.hlth-bar--2');
    const holdButton = document.querySelector('.btn--hold');
    const playerContainer1 = document.querySelector('.player--1');
    const playerContainer2 = document.querySelector('.player--2');
    const winWindow = document.querySelector('.win-screen');
    const winMain = document.querySelector('.win-main');
    const winQuote = {
        player1: [
            "You must defeat Sheng Long to stand a chance.",
            "To live is to fight, to fight is to live!",
            "You must love competition before you can achieve victory."
        ],
        player2: [
            "Attack me if you dare, I will crush you!",
            "Well, at least you threw a punch...",
            "You are not bad, but not good either."
        ]
    };

    // the sum of points pushed to the
    let playerScore = 0;
    let currentScore = 0;
    let winningScore =  100;
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

    // update opponents health bar upon hold-method
    const updateHealth = function() {
        if (activePlayer === 1) {
            healthBar2.value = winningScore - ((playerScore/winningScore) * 100);
        } else {
            healthBar1.value = winningScore - ((playerScore/winningScore) * 100);
        }
    }

    // checkScore to see if currentScore and playScore is greater than or equal to winning Score
    const checkScore = function() {
        let totalScore = playerScore + currentScore;
        if (totalScore >= winningScore) {
            scoreContainer.textContent = totalScore;
            winScreen();
            holdScore();
        }
    };

    // DISABLE THE BUTTON FOR PLAYER 1 PLAYER 2 ON HOLD
    const holdScore = function() {
        let totalScore = playerScore += currentScore;
        scoreContainer.textContent = totalScore;
        updateHealth()
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

    const winScreen = function() {
        winWindow.classList.toggle('hidden');
        winWindow.style.display = 'flex';
        const playerIcon = document.createElement('img');
        const playerQuote = document.createElement('p');
        playerQuote.textContent = (winQuote[`player${activePlayer}`][Math.floor(Math.random() * winQuote[`player${activePlayer}`].length)]).toUpperCase();
        playerIcon.src = `player--${activePlayer}.png`;
        playerIcon.className = `win-icon--${activePlayer}`;
        playerQuote.className = 'player-quote';
        winMain.append(playerIcon, playerQuote);
        console.log(activePlayer)
        // const createCaption1 = document.createElement()
    };

    const clearPlayer = function() {
        playerScore = 0;
        currentScore = 0;
        healthBar1.value = 100;
    }


    return {roll, holdScore};
};

// Example players
const player1 = player('Ryan', 1);
const player2 = player('Liz', 2);

// Event listeners
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnRematch = document.querySelector('.rematch');
const btnRestart = document.querySelector('.restart');

btnRoll.addEventListener('click', () => {
    activePlayer === 1 ? player1.roll() : player2.roll();
});

btnHold.addEventListener('click', () => {
    activePlayer === 1 ? player1.holdScore() : player2.holdScore();
});


// Menu Buttons
// New Game
document.querySelectorAll('.restart').forEach((button) => {
    button.addEventListener('click', () => window.location.reload());
});

/* Modal */
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.exit');
const btnsOpenModal = document.querySelectorAll('.btn--menu');
const info = document.querySelector('.info');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const characterScreen = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1');
    const contCharacterTwo = document.getElementById('character--p2');
    const playerOneName = document.getElementById('p1--name');
    const playerTwoName = document.getElementById('p2--name');
    let selectButtons = document.querySelectorAll('.active--1');
    const loading = document.querySelector('.loading');
    const myBar = document.getElementById('myBar');
    const myProgress = document.getElementById('myProgress');
    let i = 0;

    const updateName = function(name, player) {
        if (player === 'One') {
            playerOneName.removeChild(playerOneName.firstChild);
            let paragraph = document.createElement('p');
            paragraph.textContent = name;
            playerOneName.appendChild(paragraph);
        } else {
            playerTwoName.removeChild(playerTwoName.firstChild);
            let paragraph = document.createElement('p');
            paragraph.textContent = name;
            playerTwoName.appendChild(paragraph);
        }
    };

    const selectButton = function(char, player, color) {
        const myButton = document.querySelector(`#char--${char}`);
        myButton.textContent = player;
        myButton.style.color = color;
        myButton.style.fontSize = '48px';
        myButton.style.fontWeight = '900'
        myButton.style.borderColor = color;
        myButton.style.textShadow = '-4px 4px 3px #000';
        myButton.disabled = true;
        if (player === '1P') {
            let img = document.createElement('img');
            img.src = `${char}_transparent.png`;
            contCharacterOne.appendChild(img);
        } else {
            let img = document.createElement('img');
            img.src = `${char}_transparent.png`;
            contCharacterTwo.appendChild(img);
            selectContainer.removeEventListener('mouseover', characterScreen.updateDisplay);
            selectContainer.removeEventListener('click', characterScreen.selectPlayer);
            selectButtons = document.querySelectorAll('.active--2');
            selectButtons.forEach((button) => {
                console.log(button.style.borderColor);
                button.disabled = true;
                if (button.style.borderColor === 'red' || button.style.borderColor === 'blue') {
                    // pass;
                } else {
                    myBar.style.visibility = 'initial';
                    myProgress.style.visibility = 'initial';
                    loading.style.visibility = 'initial';
                    button.style.borderColor = 'white';
                    button.style.filter = "grayscale(100%)";
                }
            });
        }
    };

    const changeImage = function(char, player) {
        if (player === 'One') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = `${char}_transparent_profile.png`;
            contPlayerOne.appendChild(img);
        } else {
            contPlayerTwo.removeChild(contPlayerTwo.firstChild);
            let img = document.createElement('img');
            img.src = `${char}_transparent_profile.png`;
            contPlayerTwo.appendChild(img);
        }
    };

    const updateDisplay = function(e) {
        // console.log(e.target.id);
        console.log(e.target.className);
        if (e.target.className === 'active--1') {
            if (e.target.id === 'char--ryu') {
                characterScreen.changeImage('ryu', 'One');
                characterScreen.updateName('ryu', 'One');
            } else if (e.target.id === 'char--chun') {
                characterScreen.changeImage('chun', 'One');
                characterScreen.updateName('chun', 'One');
            } else if (e.target.id === 'char--ken') {
                characterScreen.changeImage('ken', 'One');
                characterScreen.updateName('ken', 'One');
            } else if (e.target.id === 'char--akuma') {
                characterScreen.changeImage('akuma', 'One');
                characterScreen.updateName('akuma', 'One');
            } else if (e.target.id === 'char--sakura') {
                characterScreen.changeImage('sakura', 'One');
                characterScreen.updateName('sakura', 'One');
            } else if (e.target.id === 'char--dan') {
                characterScreen.changeImage('dan', 'One');
                characterScreen.updateName('dan', 'One');
            }
        } else {
            if (e.target.id === 'char--ryu') {
                characterScreen.changeImage('ryu', 'Two');
                characterScreen.updateName('ryu', 'Two');
            } else if (e.target.id === 'char--chun') {
                characterScreen.changeImage('chun', 'Two');
                characterScreen.updateName('chun', 'Two');
            } else if (e.target.id === 'char--ken') {
                characterScreen.changeImage('ken', 'Two');
                characterScreen.updateName('ken', 'Two');
            } else if (e.target.id === 'char--akuma') {
                characterScreen.changeImage('akuma', 'Two');
                characterScreen.updateName('akuma', 'Two');
            } else if (e.target.id === 'char--sakura') {
                characterScreen.changeImage('sakura', 'Two');
                characterScreen.updateName('sakura', 'Two');
            } else if (e.target.id === 'char--dan') {
                characterScreen.changeImage('dan', 'Two');
                characterScreen.updateName('dan', 'Two');
            }
        }
    };

    const selectPlayer = function(e) {
        if (e.target.id === 'char--ryu') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('ryu', '1P', 'red');
            } else {
                characterScreen.selectButton('ryu', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        } else if (e.target.id === 'char--chun') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('chun', '1P', 'red');
            } else {
                characterScreen.selectButton('chun', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        } else if (e.target.id === 'char--ken') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('ken', '1P', 'red');
            } else {
                characterScreen.selectButton('ken', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        } else if (e.target.id === 'char--akuma') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('akuma', '1P', 'red');
            } else {
                characterScreen.selectButton('akuma', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        } else if (e.target.id === 'char--sakura') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('sakura', '1P', 'red');
            } else {
                characterScreen.selectButton('sakura', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        } else if (e.target.id === 'char--dan') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('dan', '1P', 'red');
            } else {
                characterScreen.selectButton('dan', '2P', 'blue');
                setTimeout(loadScreen, 3500);
            }
        }
        selectButtons.forEach((button) => {
            button.classList = 'active--2';
        })
    }

    const pages = document.querySelectorAll(".page");
    const translateAmount = 100;
    let translate = 0;
    const slide = () => {
        let direction = 'next';
        direction === "next" ? translate -= translateAmount : translate += translateAmount;
        pages.forEach(
            pages => (pages.style.transform = `translateX(${translate}%)`)
        );
    }

    const loadScreen = function() {
        if (i == 0) {
            i = 1;
            let elem = document.getElementById("myBar");
            let width = 0;
            let id = setInterval(frame, 10);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";
                    elem.innerHTML = width  + "%";
                    if (width === 100) {
                        loading.textContent = 'COMPLETE';
                        setTimeout(slide,1500);
                    }
                }
            }
        }
    }

    return {updateDisplay, selectPlayer, selectButton, changeImage, updateName, loadScreen, slide}
})();


const selectContainer = document.getElementById('player-select');
selectContainer.addEventListener('mouseover', characterScreen.updateDisplay);
selectContainer.addEventListener('click', characterScreen.selectPlayer);
