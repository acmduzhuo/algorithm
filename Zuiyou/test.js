// var line = readline();
//
// var lineNum = parseInt(readline());
// for(var i=0;i<lineNum;i++){
//     var lines = readline();
// }
//
// while(lines = readline()){
//
// }

//var str = readline();
str = "-sgsf";
var sum = 0n;
var flag = 1;
if(str[0] === '-'){
    str = str.substr(1);
    flag = 0;
}
console.log(str);
for(var i=str.length-1;i>=0;i--){
    str.length = BigInt(str.length-1)
    var ten = 36**(str.length-1-i);
    ten = BigInt(ten);
    //console.log(ten);
    if(str[i]>='0' && str[i]<='9'){
        sum += BigInt(Number(str[i])) * ten;
    } else if(str[i]>='a' && str[i]<='z'){
        sum += BigInt(Number((str[i].charCodeAt() - 'a'.charCodeAt()))+10)*ten;
        //console.log("a".charCodeAt() - 'a'.charCodeAt()+10);
    } else {
        sum = 0n;
        break;
    }
}
//console.log(sum);
// 170581728179578208255n
// 9223372036854775807
//console.log(170581728179578208255n>9223372036854775807);
if(sum >= 9223372036854775807n){
    if(flag){
        console.log("9223372036854775807");
    } else {
        console.log("-9223372036854775807")
    }
} else{
    if(flag){
        console.log(sum.toString());
    } else {
        console.log("-"+sum.toString());
    }
}
// console.log(Number.MIN_SAFE_INTEGER)
//9223372036854775807
//9007199254740991

// var n = readline();
// // n = 3;
// n = Number(n);
// var a = [1, 1, 2];
// if(n == 0){
//     console.log(0);
// } else if(n === 1){
//     console.log(1);
// } else if(n === 2){
//     console.log(2);
// } else {
//     for(var i=3;i<=n;i++){
//         var sum = 0;
//         for(var j=0;j<i;j++){
//             sum += a[i-(j+1)] * a[j];
//         }
//         a[i] = sum;
//     }
//     console.log(a[n]);
// }