function createBankAccount(initial) {
    return { balance: initial };
}

function createTransaction(value, type) {
    return { value: value, type: type };
}

function getBalance(bankAccount) {
    return bankAccount.balance;
}

function getValue(transaction) {
    return transaction.value;
}

function getType(transaction) {
    return transaction.type;
}

function addBalance(bankAccount, balance) {
    bankAccount.balance += balance;
}

function addTransaction(bankAccount, transaction) {
    addBalance(bankAccount, getType(transaction) * getValue(transaction));
}

const b1 = createBankAccount(100);
const t1 = createTransaction(10, 1);
addTransaction(b1, t1);
console.log(getBalance(b1)); // Expected: 110
