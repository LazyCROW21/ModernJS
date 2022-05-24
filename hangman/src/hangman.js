class Hangman {
    constructor(w, gCnt) {
        this.word = w;
        this.guessCnt = gCnt;
        this.guessedLetters = [];
        this.state = 'playing';
    }
    updateState() {
        if(this.guessCnt <= 0) {
            this.state = 'failed';
        } else {
            let notfinished = false;
            for(let i = 0; i < this.word.length; i++) {
                if(isCharacterALetter(this.word[i])) {
                    let fnd = this.guessedLetters.findIndex((x) => this.word[i].toLowerCase() === x);
                    if(fnd === -1) {
                        notfinished = true;
                        break;
                    }
                }
            }
            if(!notfinished) {
                this.state = 'finished';
            }
        }
    }
    get getPuzzle() {
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
    }
    set addGuess(char) {
        if(this.state !== 'playing') {
            return null;
        }
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
            this.updateState();
        }
    }
};

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
}

export {
    Hangman as default
}