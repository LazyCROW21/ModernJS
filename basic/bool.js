let temp = 31;
let tempStr = 'ASD';
let isFreezing1 = temp === 31;
let isFreezing2 = temp !== 31;
let isFreezing3 = tempStr === 'ASD';
let isFreezing4 = temp <= 32;

console.log(isFreezing1);
console.log(isFreezing2);
console.log(isFreezing3);
console.log(isFreezing4);

// challenge

let age = 22;
let isChild = age <= 7;
let isSenior = age >= 65;
console.log(isChild, isSenior);

// ----------------

let tmp = 80;
if (tmp <= 32) {
    console.log("Temp is freezing");
}

if (tmp >= 110) {
    console.log("Way 2 Hot");
}