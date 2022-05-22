const getPuzzle = (wordCnt) => {
    return fetch('https://puzzle.mead.io/puzzle?wordCount='+wordCnt, {})
    .then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    });
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

const getGEO = (ip) => {
    return fetch('http://ip-api.com/json/'+ip, {})
    .then((response) => {
        if(response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch the puzzle');
        }
    });
}