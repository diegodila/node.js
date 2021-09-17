var name = "My calculator"
function sum(a,b) {
    return a + b;
}

function mult(a,b) {
    return a * b;
}

function sub(a,b) {
    return a - b;
}

function div(a,b) {
    return a / b;
}

// module.exports = sum;

module.exports = {
    sum, mult, sub, div, name
}