function Event(name, value) {
    return [name, value];
}
function getName(event) {
    return event[0];
}
function getValue(event) {
    return event[1];
}

function Listener(name, fn) {
    return { name: name, fn: fn };
}

function getListenerName(listener) {
    return listener.name;
}

function getListenerFn(listener) {
    return listener.fn;
}

function Dispatcher() {
    return {};
}

function addListener(dispatcher, listener) {
    dispatcher[getListenerName(listener)] = listener;
}

function getListener(dispatcher, name) {
    return dispatcher[name];
}

function dispatch(dispatcher, event) {
    const name = getName(event);
    const listener = getListener(dispatcher, name);
    const value = getValue(event);
    const fn = getListenerFn(listener);
    const result = fn(value);
    console.log(name, result);
    return result;
}

function Account(initialBalance) {
    console.log('Initial :' + initialBalance);
    let balance = initialBalance;
    return {
        balance: balance,
    };
}
function getBalance(account) {
    return account.balance;
}
function updateBalance(account, difference) {
    account.balance += difference;
}

function Transaction(bankAccount, amount) {
    return [bankAccount, amount];
}
function getBankAccount(transaction) {
    return transaction[0];
}
function getAmount(transaction) {
    return transaction[1];
}
const withdrawListener = Listener('withdraw', function (transaction) {
    const account = getBankAccount(transaction);
    const amount = getAmount(transaction);
    updateBalance(account, amount * -1);
    return getBalance(account);
});
const depositListener = Listener('deposit', function (transaction) {
    const account = getBankAccount(transaction);
    const amount = getAmount(transaction);
    updateBalance(account, amount);
    return getBalance(account);
});

const bank = Dispatcher();
addListener(bank, withdrawListener);
addListener(bank, depositListener);

// Create bank account
const jeremiah = Account(1000);
const jeremiahAtm = ATM(jeremiah);
withdraw(jeremiahAtm, bank, 100);
deposit(jeremiahAtm, bank, 1000);

// Wei Lin
console.log('Wei Lin');
const Weilin = Account(500);
const WeilinAtm = ATM(Weilin);
withdraw(WeilinAtm, bank, 150);
// const t8 = Transaction(Weilin, 100);
// const e8 = Event('withdraw', t8);
// dispatch(bank, e8);

// Jerald
console.log('Jerald');

const jerald = Account(2000);
const jeraldATM = ATM(jerald);
withdraw(jeraldATM, bank, 300);
deposit(jeraldATM, bank, 100);
// const t2 = Transaction(Jerald, 300);
// const e2 = Event('deposit', t2);
// dispatch(bank, e2);

// const t3 = Transaction(Jerald, 200);
// const e3 = Event('withdraw', t3);
// dispatch(bank, e3);

//Adeline
console.log('Adeline');
const Adeline = Account(600); //no money
// const t7 = Transaction(Adeline, 300);
// const e7 = Event('deposit', t7);
// dispatch(bank, e7); // i should see 900??
// const t_7 = Transaction(Adeline, 100);
// const e_7 = Event('withdraw', t_7);
// dispatch(bank, e_7); //now i have 800 :(
const AdelineATM = ATM(Adeline);
withdraw(AdelineATM, bank, 100); // 500
deposit(AdelineATM, bank, 250); // 750

//Chanel
console.log('Chanel');
const Chanel = Account(10000);
const ChanelATM = ATM(Chanel);
withdraw(ChanelATM, bank, 100); //9900
deposit(ChanelATM, bank, 50); //9950

// const t4 = Transaction(Chanel, 100);
// const e4 = Event('deposit', t4);
// const t5 = Transaction(Chanel, 50);
// const e5 = Event('withdraw', t5);
// dispatch(bank, e4); //10100
// dispatch(bank, e5); //10050

// Jihan
console.log('Jihan');
const Jihan = Account(1000);
const JihanATM = ATM(Jihan);
withdraw(JihanATM, bank, 100);
deposit(JihanATM, bank, 500);
// const t6 = Transaction(Jihan, 100);
// const e6 = Event('withdraw', t6);
// const t9 = Transaction(Jihan, 50);
// const e9 = Event('deposit', t9);
// dispatch(bank, e6); //900
// dispatch(bank, e9); // 950

function ATM(account) {
    return { account: account };
}
function getAccount(atm) {
    return atm.account;
}
function withdraw(atm, bank, amount) {
    const account = getAccount(atm);
    const t = Transaction(account, amount);
    const e = Event('withdraw', t);
    dispatch(bank, e);
}

function deposit(atm, bank, amount) {
    const account = getAccount(atm);
    const t = Transaction(account, amount);
    const e = Event('deposit', t);
    dispatch(bank, e);
}
