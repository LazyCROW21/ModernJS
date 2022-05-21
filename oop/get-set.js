const data = {
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
    }
}

data.location = 'AAA ADADS';
console.log(data);
console.log(data.location);