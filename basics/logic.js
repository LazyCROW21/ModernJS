let temp = 75;

if(temp >= 60 && temp <= 90) {
    console.log('It is nice outside');
} else if(temp <= 32 || temp >= 120) {
    console.log('Do not go outside');
} else {
    console.log('Do what you want');
}

// Challenge
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan food');
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Mix Vegan & Non Vegan');
} else {
    console.log('Any food');
}



