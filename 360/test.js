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

var str_1 = read_line();
var n = str_1.split(' ')[0];
var m = str_1.split(' ')[1];
var str_2 = read_line();
// var n = 4, m = 3;
var arr = [];
for(var i=1;i<=n;i++){
    arr.push(i);
}
// //console.log(arr);
// var str_2 = [1, 2, 1];

for(var i=0;i<m;i++){
    //console.log(str_2[i]);
    if(str_2.split(' ')[i] === 1){
        var start = arr[0];
        arr = arr.slice(1);
        arr.push(start);
        //console.log("1 = ", arr);
    } else {
        for(var j=0;j<=n-2;j+=2){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        //console.log("2 = ", arr);
    }
}
//console.log(arr);
print(arr);

// var arr = [1, 2, 3];
// arr = arr.slice(1)
// console.log(arr);


// n = Number(n);
// var num=0;
// for(var i=0;i<n;i++){
//     var str = read_line();
//     if(str.length<=10){
//         var flag = 1;
//         for(var j=0;j<str.length;j++){
//             if((str[j]>='A' && str[j]<='Z') || (str[j]>='a' && str[j]<='z')){
//                 continue;
//             } else {
//                 flag = 0;
//                 break;
//             }
//         }
//         if(flag){
//             num++;
//         }
//     }
// }
// print(num);