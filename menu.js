const playerSelect = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1--p2');
    const contCharacterTwo = document.getElementById('character--p1--p2');

    const updateDisplay = function (e) {
        if (e.target.id === 'char--ryu') {
            contPlayerOne.removeChild();
            contPlayerOne.appendChild()
        }
    }

    return {updateDisplay}
})();


const selectContainer = document.getElementById('player-select');
selectContainer.addEventListener('mouseover', playerSelect.updateDisplay());

