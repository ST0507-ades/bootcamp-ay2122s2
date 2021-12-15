/**
 * We'll use the Dictionary method to implement "Rational"
 */

function newR(Q, D) {
    return [Q, D];
}

function getQ(R) {
    return R[0];
}

function getD(R) {
    return R[1];
}

function add(R1, R2) {
    newQ = getQ(R1) * getD(R2) + getQ(R2) * getD(R1);
    newD = getD(R1) * getD(R2);
    return newR(newQ, newD);
}

function minus(R1, R2) {
    newQ = getQ(R1) * getD(R2) - getQ(R2) * getD(R1);
    newD = getD(R1) * getD(R2);
    return newR(newQ, newD);
}

function negate(R) {
    return minus(newR(0, 1), R);
}

function multiply(R1, R2) {
    newQ = getQ(R1) * getQ(R2);
    newD = getD(R1) * getD(R2);
    return newR(newQ, newD);
}

function divide(R1, R2) {
    return multiply(R1, invert(R2));
}

function invert(R) {
    newQ = getD(R);
    newD = getQ(R);
    return newR(newQ, newD);
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

function simplestForm(R) {
    newQ = getQ(R);
    newD = getD(R); //D is undefined // But D is not reference
    const newV = gcd(newQ, newD);
    return newR(newQ / newV, newD / newV); //right idea
}

console.log(simplestForm(newR(4, 4))); // Expected: 1/1
console.log(simplestForm(newR(2, 4))); // Expected: 1/2
console.log(simplestForm(newR(9832742, 7392))); // Expected: ???
console.log(simplestForm(newR(83920, 39202))); // Expected: ???
console.log(simplestForm(newR(83920, 1))); // Expected: ??? 
