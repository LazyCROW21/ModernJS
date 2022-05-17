// lexical scoping (static scope)
// variable shadowing - using local variable instead of global variable with same identifier
let varOne = 'varOne';

if(true) {
    console.log(varOne);
    let varTwo = 'varTwo';
    if(true) {
        let v4 = 'v4';
    }
}

if(true) {
    let varThree = 'v3';
}

// console.log(varTwo);

// -----------------------------------------

let name = 'Andrew'
if(true) {
    let name = 'Mike';
    if(true) {
        name = 'Hero' // local var changed
        // name = 'Jen'; leaked global
        console.log(name);
    }
}

if(true) {
    console.log(name);
}