module.exports = function reverse (n) {
    n = String(n);
    n = n.split('').reverse();
    return n;
}

