const sq = (n) => n * n;
const sqL = (n) => {
    return n * n;
}

console.log(sq(5));

const ppl = [
    {
        name: 'A', age: 30
    },
    {
        name: 'B', age: 27
    },
    {
        name: 'C', age: 25
    }
];

const under30 = ppl.filter((p) => p.age < 30);

console.log(under30);

// note specific
// const add = () => {
//     return arguments[0] + arguments[1];
// }

// console.log(add(10, 20));

const car = {
    color: 'Red',
    // this doesn't work with arrow fn
    getSummary1: () => `The car is ${this.color}`,
    getSummary2() {
        return `The car is ${this.color}`;
    } 
};

console.log(car.getSummary1());
console.log(car.getSummary2());