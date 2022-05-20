const age = 27;

let msg = age >= 18 ? 'You can vote' : 'You can\'t vote';

console.log(msg);

// truthy - value that resolves to true
// falsy - value that resolves to false
// falsy values => false, 0, empty string '', null, undefined
if('testing') {
    console.log('true');
} else {
    console.log('false');
}

if(undefined) {
    console.log('true');
} else {
    console.log('false');
}

if('') {
    console.log('true');
} else {
    console.log('false');
}


