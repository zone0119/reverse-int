module.exports = function reverse (n) {
    var res = '';
    n = String(Math.abs(n));
    n = n.split('').reverse();
    n.forEach(element => res =  res + element);
    return parseInt(res);
}

