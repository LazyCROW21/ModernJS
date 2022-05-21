const getPuzzle = (wordCnt, callback) => {
    const req = new XMLHttpRequest();

    req.addEventListener('readystatechange', function (e) {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            console.log(data);
            callback(null, data);
        } else if(e.target.readyState === 4) {
            callback('Request Error', null);
        }
    });
    req.open('GET', 'https://puzzle.mead.io/puzzle?wordCount='+wordCnt);
    req.send();
}

const getPuzzleSync = () => {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://puzzle.mead.io/puzzle?wordCount=3', false);
    req.send();
    if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText);
        console.log(data);
        return data;
    } else if(req.readyState === 4) {
        throw new Error('HTTP Request failed');
    }
}