let num = 71.213141;

console.log(num.toFixed(2));
console.log(num.toFixed(7));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.random());

let makeGuess = function(g) {
    let r = 1 + Math.floor(Math.random() * 10) % 5;
    console.log(r);
    return r == g;
}

console.log(makeGuess(1));