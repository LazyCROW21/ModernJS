const isRaining = true;
const person = {
    name: 'Hardik',
    age: 10
};

// invalid
// isRaining = false;
// person = {}


// valid
person.age = 11;

console.log(isRaining);
console.log(person);

const demoFn = function() {
    console.log('I am constant!');
}