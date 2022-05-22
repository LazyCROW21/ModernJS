const processData = async () => {
    return 12;
}

processData()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.error(err);
})

console.log(processData());

const newFn = async () => {
    let result = await processData();
    console.log(result);
}

newFn();