// var str = "A B C D E F G H I J K";
// str = str.replace(/\s*/g,"");
// console.log(str);
// console.log(str.charAt(1));
// console.log(str[1]);
// console.log(str.charCodeAt(1));//660
// var str_new = str.concat("LM");
// console.log(str_new);
// console.log(str.valueOf());//ABCDEFGHIJK
// console.log(str_new.valueOf());//ABCDEFGHIJKLM
// console.log(str.toLowerCase());

// var line = readline();
//
// var lineNum = parseInt(readline());
// for(var i=0;i<lineNum;i++){
//     var lines = readline();
// }
//
// while(lines = readline()){
//
//
//var str = readline();
// var str = "微盟微生态";
// var num = parseInt(str.length/2);
// function f_ccd(str, num, str_new){
//     return str.slice(0, num) + str_new + str.slice(num);
// }
// var str_new = "+";
// //return f_ccd(str, num, str_new);
// console.log(f_ccd(str, num, str_new));

var str_1 = "abc";
var str_2 = "aba";
var a = [];
var b = [];
for(var i=0;i<str_1.length;i++){
    if(i === 0){
        var str_new = {
            'a' : 1
        }
        a.push(str_new);
    }
}
console.log(a);
console.log(str_1[0]);
