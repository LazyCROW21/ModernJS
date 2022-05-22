// const getData = (callback) => {
//     setTimeout(() => {
//         callback(undefined, 'A');
//     }, 1500);
// }

// getData((err, data) => {
//     if(err) {

//     } else {
//         console.log(data);
//     }
// });

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        return typeof data === 'number' ? resolve(data * 2) : reject('Provide a number');
    }, 2000);
});

getDataPromise(2)
.then((result) => {
    return getDataPromise(result);
})
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.error(err);
});

