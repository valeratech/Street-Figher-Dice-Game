const characterScreen = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1');
    const contCharacterTwo = document.getElementById('character--p2');
    const playerOneName = document.getElementById('p1--name');
    const playerTwoName = document.getElementById('p2--name');
    let selectButtons = document.querySelectorAll('.active--1');

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
    }

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
            }
        } else if (e.target.id === 'char--chun') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('chun', '1P', 'red');
            } else {
                characterScreen.selectButton('chun', '2P', 'blue');
            }
        } else if (e.target.id === 'char--ken') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('ken', '1P', 'red');
            } else {
                characterScreen.selectButton('ken', '2P', 'blue');
            }
        } else if (e.target.id === 'char--akuma') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('akuma', '1P', 'red');
            } else {
                characterScreen.selectButton('akuma', '2P', 'blue');
            }
        } else if (e.target.id === 'char--sakura') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('sakura', '1P', 'red');
            } else {
                characterScreen.selectButton('sakura', '2P', 'blue');
            }
        } else if (e.target.id === 'char--dan') {
            if (e.target.className === 'active--1') {
                characterScreen.selectButton('dan', '1P', 'red');
            } else {
                characterScreen.selectButton('dan', '2P', 'blue');
            }
        }
        selectButtons.forEach((button) => {
            button.classList = 'active--2';
        })
    }
    return {updateDisplay, selectPlayer, selectButton, changeImage, updateName}
})();


const selectContainer = document.getElementById('player-select');
selectContainer.addEventListener('mouseover', characterScreen.updateDisplay);
selectContainer.addEventListener('click', characterScreen.selectPlayer);
