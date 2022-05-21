const Hangman = function(w, gCnt) {
    this.word = w;
    this.guessCnt = gCnt;
    this.guessedLetters = [];
}

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

Hangman.prototype.getPuzzle = function(){
    let guessedString = '';
    for(let i = 0; i < this.word.length; i++) {
        if(isCharacterALetter(this.word[i])) {
            let guess = false;
            for(let j = 0; j < this.guessedLetters.length; j++) {
                if(this.guessedLetters[j] === this.word[i].toLowerCase()) {
                    guessedString += this.word[i];
                    guess = true;
                    break;
                }
            }
            if(!guess) {
                guessedString += '*'
            }
        } else {
            guessedString += this.word[i];
        }
    }
    return guessedString;
};

Hangman.prototype.addGuess = function(char) {
    if(isCharacterALetter(char)) {
        let fnd = false;
        let charL = char.toLowerCase();
        for(let j = 0; j < this.guessedLetters.length; j++) {
            if(this.guessedLetters[j] === charL) {
                fnd = true;
                break;
            }
        }
        if(!fnd) {
            this.guessedLetters.push(charL);
            if(!this.word.toLowerCase().includes(charL)) {
                this.guessCnt--;
            }
        }
    }
}

const h1 = new Hangman('Hat', 2);
h1.addGuess('h');
h1.addGuess('c');
h1.addGuess('c');
h1.addGuess('t');
console.log(h1.getPuzzle());
console.log(h1.guessCnt);