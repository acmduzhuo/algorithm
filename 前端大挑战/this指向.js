function bindThis(f, oTarget) {
    return function(){
        return f.apply(oTarget, arguments);
    };
}
// function test(a,b,c,d)
// {
//     var arg = Array.prototype.slice.call(arguments,1);
//     console.log(arg);
// }
// test("a","b","c","d");