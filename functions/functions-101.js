let greetUser = function () {
    console.log('welcome user');
};

greetUser();

let sqr = function(n) {
    return n * n;
}

let num = 4;

let s = sqr(num);

console.log(s);

let cF2C = function(f) {
    return (f - 32) * 5 / 9;
}

console.log(cF2C(32), cF2C(68));