let n = 'Hardik Kardam';

console.log(n.length);
console.log(n.toUpperCase());
console.log(n.toLowerCase());
console.log(n.includes('rd'));

let isValidPwd = function (pwd) {
    if(pwd.length < 8) {
        return false;
    }
    if(pwd.includes('password')) {
        return false;
    }
    return true;
}

console.log(' asda asd  '.trim());
console.log(isValidPwd('wrongpassword'));