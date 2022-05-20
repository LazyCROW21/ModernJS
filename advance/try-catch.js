const getTip = (amount) => {
    if(typeof amount === 'number') {
        return amount * 0.2;
    } else {
        throw Error('Argument must be a number');
        // throw 'Argument must be a number';
    }
}

console.log(getTip(756));

try {
    console.log(getTip('756'));
    console.log(getTip('Hello'));
} catch (err) {
    console.log('Error Catched');
}