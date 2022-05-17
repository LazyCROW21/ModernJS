let add = function(a, b, c) {
    return a + b + c;
}

let result = add(10, 20, 2);
console.log(result);

let getScore = function(n = 'Jatt', s = 0){
    console.log(n, s);
}

getScore(undefined, 100);

// Challenge
let tipCal = function(total, percent = 0.2) {
    return total * percent;
}

let name = 'Jen';
console.log(`Hey my name is ${name}!`);

// Chanllenge
let tipCal2 = function(total, percent = 0.2) {
    return `A ${percent * 100}% tip on $${total} would be $${total * percent}`;
}

console.log(tipCal2(100, 0.1));