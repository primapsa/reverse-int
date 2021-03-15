module.exports = function reverse (n) {
    let string = Math.abs(n);
    string = String(string);
    string = string.split('').reverse().join('');
    string = Number(string);
    return string;  
}
