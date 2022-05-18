let myAccount = {
    name: 'Hardik Kardam',
    expenses: 0,
    income: 0
};

let addExpense = function (account, amount) {
    account.expenses += amount;
    // console.log(account);
}

let addIncome = function (account, amount) {
    account.income += amount;
    // console.log(account);
}

let resetAccount = function(account) {
    account.income = 0;
    account.expenses = 0;
}

let getAccountSummary = function(account) {
    let n = account.name;
    let i = account.income;
    let e = account.expenses;
    let b = i - e;
    return `Account for ${n} has $${b}, $${i} in income, $${e} in expenses.`;
}

addIncome(myAccount, 90800);
addExpense(myAccount, 1000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));