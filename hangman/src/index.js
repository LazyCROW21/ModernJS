import Hangman from './hangman';
import getPuzzle from './request';

let h1 = null;

const puzzle = document.querySelector('#puzzle')
const gL = document.querySelector('#gL')
const gArr = document.querySelector('#gArr');
const gState = document.querySelector('#gState');
const resetBtn = document.querySelector('#reset');

const gameLoop = (e) => {
    h1.addGuess = e.key;
    puzzle.textContent = h1.getPuzzle;
    gL.textContent = h1.guessCnt;
    gArr.textContent = h1.guessedLetters.join(' ');
    if (h1.state === 'finished') {
        gState.textContent = 'Congratulation! you completed the word';
    } else if (h1.state === 'failed') {
        gState.textContent = `You are out of guess :P, the word was "${h1.word}"`;
    } else {
        gState.textContent = 'You can do it, keep playing!';
    }
}

const generateWord = async () => {
    let wordCnt = Math.round(1 + ((Math.random() * 100) % 6));
    let word = await getPuzzle(wordCnt);
    return {
        p: word.puzzle,
        w: wordCnt
    };
}

window.addEventListener('keypress', function (e) {
    gameLoop(e);
});

resetBtn.addEventListener('click', async (e) => {
    generateWord().then((puzzleObj) => {
        h1 = new Hangman(puzzleObj.p, puzzleObj.w * 2);
        console.log(h1);
        puzzle.textContent = h1.getPuzzle;
        gL.textContent = h1.guessCnt;
        gState.textContent = 'Press a key to make a guess';
    });
});

generateWord().then((puzzleObj) => {
    h1 = new Hangman(puzzleObj.p, puzzleObj.w * 2);
    console.log(h1);
    puzzle.textContent = h1.getPuzzle;
    gL.textContent = h1.guessCnt;
    gState.textContent = 'Press a key to make a guess';
});
