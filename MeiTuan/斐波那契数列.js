function fib(n) {
    var a = 0;
    var b = 1;
    var t = 1;
    for(let i=1;i<=n;i++){
        t = a + b;
        a = b;
        b = t;
    }
    return t;
}
// var line = readline();
// var lines = line.split(' ');
// var n = parseInt(lines[0]);
console.log(fib(n));
