const playerSelect = (function () {
    const contPlayerOne = document.getElementById('container--p1');
    const contPlayerTwo = document.getElementById('container--p2');
    const contCharacterOne = document.getElementById('character--p1--p2');
    const contCharacterTwo = document.getElementById('character--p1--p2');

    const updateDisplay = function() {

    }
    return {updateDisplay}
})();

const selectContainer = document.getElementById('player-select')
selectContainer.addEventListener('click', (e) => console.log(e.target))

