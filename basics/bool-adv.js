let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
    console.log('Account is Locked!');
} else if (userRole === 'admin') {
    console.log('Welcome admin');
} else {
    console.log('Welcome');
}

// challenge area
let temp = 45;

if(temp <= 32) {
    console.log('Freezing outside');
} else if (temp >= 110) {
    console.log('Hot outside');
} else {
    console.log('Go outside');
}