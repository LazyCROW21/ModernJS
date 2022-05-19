const account = {
    name: 'Hardik Kardam',
    incomes: [],
    expenses: [],
    addIncome: function(desc, amout) {
        this.incomes.push({
            desc: desc,
            amount: amout
        });
    },
    addExpense: function(desc, amout) {
        this.expenses.push({
            desc: desc,
            amount: amout
        });
    },
    getAccountSummary: function() {
        let totalE = 0, totalI = 0;
        for(let i = 0; i < this.incomes.length; i++) {
            totalI += this.incomes[i].amount;
        }
        for(let i = 0; i < this.expenses.length; i++) {
            totalE += this.expenses[i].amount;
        }
        return `${this.name} has a balance of $${totalI - totalE}. $${totalI} in income, $${totalE} in expenses.`;
    }
};

account.addIncome('Office', 12131);
account.addIncome('Share Market', 3321);
account.addExpense('Rent', 900);
account.addExpense('Coffee', 10);
console.log(account.getAccountSummary());