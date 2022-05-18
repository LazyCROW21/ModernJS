let myBook = {
    title: '1904',
    author: 'HK ASD',
    papeCnt: 126
};

let otherBook = {
    title: 'Detective connan',
    author: 'JKIJ QQD',
    papeCnt: 800
};

let getSummary = function(book) {
    console.log(
        `${book.title} by ${book.author}`
    );
}

let getSummaryObj = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageSummary: `${book.title} is ${book.papeCnt} page(s) long`
    }
}

getSummary(myBook);
console.log(getSummaryObj(otherBook));

// Challenge
let tempFtoO = function(f) {
    let c = (f - 32) * 5 / 9;
    let k = c + 273.15;
    return {
        fahrenheit: f,
        celcius: c,
        kelvin: k
    };
}

console.log(tempFtoO(-40));