const getData = (callback) => {
    setTimeout(() => {
        callback(undefined, 'A');
    }, 1500);
}

getData((err, data) => {
    if(err) {

    } else {
        console.log(data);
    }
});

const myP = new Promise((resolve, reject) => {
    
});

