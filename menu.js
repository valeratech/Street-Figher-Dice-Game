const characterScreen = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1');
    const contCharacterTwo = document.getElementById('character--p2');
    const selectButtons = document.querySelectorAll('.active--1');

    const updateDisplay = function(e) {
        // console.log(e.target.id);
        console.log(e.target.className);
        if (e.target.className === 'active--1') {
            if (e.target.id === 'char--ryu') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'ryu_transparent_profile.png';
                contPlayerOne.appendChild(img);
            } else if (e.target.id === 'char--chun') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'chun_transparent_profile.png';
                contPlayerOne.appendChild(img);
            } else if (e.target.id === 'char--ken') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'ken_transparent_profile.png';
                contPlayerOne.appendChild(img);
            } else if (e.target.id === 'char--akuma') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'akuma_transparent_profile.png';
                contPlayerOne.appendChild(img);
            } else if (e.target.id === 'char--sakura') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'sakura_transparent_profile.png';
                contPlayerOne.appendChild(img);
            } else if (e.target.id === 'char--dan') {
                contPlayerOne.removeChild(contPlayerOne.firstChild);
                let img = document.createElement('img');
                img.src = 'dan_transparent_profile.png';
                contPlayerOne.appendChild(img);
            }
        } else {
            if (e.target.id === 'char--ryu') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'ryu_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            } else if (e.target.id === 'char--chun') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'chun_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            } else if (e.target.id === 'char--ken') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'ken_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            } else if (e.target.id === 'char--akuma') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'akuma_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            } else if (e.target.id === 'char--sakura') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'sakura_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            } else if (e.target.id === 'char--dan') {
                contPlayerTwo.removeChild(contPlayerTwo.firstChild);
                let img = document.createElement('img');
                img.src = 'dan_transparent_profile.png';
                contPlayerTwo.appendChild(img);
            }
        }
    }

    const selectPlayer = function(e) {
        if (e.target.id === 'char--ryu') {
            console.log('hello');
            const myButton = document.querySelector('#char--ryu');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'ryu_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'ryu_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        } else if (e.target.id === 'char--chun') {
            console.log('hello');
            const myButton = document.querySelector('#char--chun');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'chun_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'chun_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        } else if (e.target.id === 'char--ken') {
            console.log('hello');
            const myButton = document.querySelector('#char--ken');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'ken_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'ken_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        } else if (e.target.id === 'char--akuma') {
            console.log('hello');
            const myButton = document.querySelector('#char--akuma');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'akuma_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'akuma_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        } else if (e.target.id === 'char--sakura') {
            console.log('hello');
            const myButton = document.querySelector('#char--sakura');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'sakura_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'sakura_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        } else if (e.target.id === 'char--dan') {
            console.log('hello');
            const myButton = document.querySelector('#char--dan');
            myButton.style.filter = "grayscale(100%)"
            myButton.disabled = true;
            if (e.target.className === 'active--1') {
                let img = document.createElement('img');
                img.src = 'dan_transparent.png';
                contCharacterOne.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = 'dan_transparent.png';
                contCharacterTwo.appendChild(img);
            }
        }
        selectButtons.forEach((button) => {
            button.classList = 'active--2';
        })
    }

    return {updateDisplay, selectPlayer}
})();


const selectContainer = document.getElementById('player-select');
selectContainer.addEventListener('mouseover', characterScreen.updateDisplay);

selectContainer.addEventListener('click', characterScreen.selectPlayer);
