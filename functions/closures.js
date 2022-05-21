// const myF = () => {
//     const msg = 'This is my message';
//     const printMsg = () => {
//         console.log(msg);
//     }
//     printMsg();
// }

// myF();

const createCounter = () => {
    let count = 0;

    return {
        inc() {
            count++;
        },
        dcr() {
            count--;
        },
        get() {
            return count;
        }
    }
}

const counter = createCounter();

counter.inc();
console.log(counter.get());

const createAdder = (a) => {
    return (b) => {
        return a + b;
    }
}

const add10 = createAdder(10);

console.log(add10(5));

const createTipper = (baseTip) => {
    return (amount) => {
        return baseTip * amount;
    }
}

const tip20 = createTipper(.2);
const tip10 = createTipper(.1);

console.log(tip20(1000))
console.log(tip20(2000))
console.log(tip10(7000))
