const playerSelect = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1--p2');
    const contCharacterTwo = document.getElementById('character--p1--p2');

    const updateDisplay = function(e) {
        // console.log(e.target.id);
        if (e.target.id === 'char--ryu') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'ryu_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        } else if (e.target.id === 'char--chun') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'chun_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        } else if (e.target.id === 'char--ken') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'ken_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        } else if (e.target.id === 'char--akuma') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'akuma_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        } else if (e.target.id === 'char--sakura') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'sakura_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        } else if (e.target.id === 'char--dan') {
            contPlayerOne.removeChild(contPlayerOne.firstChild);
            let img = document.createElement('img');
            img.src = 'dan_transparent_thumb.png';
            contPlayerOne.appendChild(img);
        }
    }

    return {updateDisplay}
})();


const selectContainer = document.getElementById('player-select');
selectContainer.addEventListener('mouseover', playerSelect.updateDisplay);

