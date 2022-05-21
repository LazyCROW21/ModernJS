// const product = {
//     name: 'Influence'
// };

// const tp = new Object({
//     prop: 'ASA'
// });

// Object.prototype.hasOwnProperty = () => 'ASDASD';
// Object.prototype.someNewMethod = () => 'New method';

// console.log(product.hasOwnProperty('name'));
// console.log(product.someNewMethod());

const h1 = new Hangman('Hat', 2);
console.log(h1.getPuzzle);
console.log(h1.guessCnt);

const puzzle = document.querySelector('#puzzle')
const gL = document.querySelector('#gL')
const gArr = document.querySelector('#gArr');
const gState = document.querySelector('#gState');

puzzle.textContent = h1.getPuzzle;
gL.textContent = h1.guessCnt;
gState.textContent = 'Press a key to make a guess';

window.addEventListener('keypress', function(e){
    console.log(e.key);
    h1.addGuess = e.key;
    puzzle.textContent = h1.getPuzzle;
    gL.textContent = h1.guessCnt;
    console.log(h1.state);
    gArr.textContent = h1.guessedLetters.join(' ');
    if(h1.state === 'finished') {
        gState.textContent = 'Congratulation! you completed the word';
    } else if (h1.state === 'failed') {
        gState.textContent = `You are out of guess :P, the word was "${h1.word}"`;
    } else {
        gState.textContent = 'You can do it, keep playing!';
    }
});

getPuzzle((error, puzzle) => {
    if(error) {
        console.error('Puzzle 404');
    } else {
        console.log(puzzle);
    }
});