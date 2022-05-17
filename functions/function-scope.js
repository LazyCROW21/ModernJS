// GLobal Scope

let cF2C = function(f) {
    let c = (f - 32) * 5 / 9;
    if(c <= 0) {
        let isFreezing = true;
    }
    return c;
}