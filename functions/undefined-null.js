let n;
console.log(n);

if(n === undefined) {
    console.log('Name not provide');
} else {
    console.log('Name provided');
}

let sqr = function(n) {
    console.log(n);
    return n*n;
}

console.log(sqr());

let voidFn = function(){}

console.log(voidFn);
console.log(voidFn());

let age = 27;
console.log(age);
// cleared (explicit assign) or never passed 
// age = undefined;
age = null
console.log(age);

console.log(null === undefined);