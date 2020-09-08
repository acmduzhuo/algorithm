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
// var str = "aabqzyw";
// var str = read_line()
// var length = parseInt(str.length);
// // console.log(length);
// // console.log(parseInt(length/2));
// var num = 0;
// var start =97,end=109;
// for(var i=start;i<=end;i++){
//     if(str.indexOf(String.fromCharCode(i)) !== -1){
//         if(str.indexOf(String.fromCharCode(219-i)) !== -1){
//             num++;
//         }
//     }
// }
// print(num);
// console.log(num);


// if(length % 2 === 0){
//     for(var i=0,j=length-1;i<=parseInt(length/2);i++,j--){
//         if(str[i].charCodeAt() + str[j].charCodeAt() === 219){
//             num++;
//         }
//     }
// } else{
//     for(var i=0,j=length-1;i<parseInt(length/2);i++,j--){
//         console.log(str[i]);
//         console.log(str[j]);
//         if(str[i].charCodeAt() + str[j].charCodeAt() === 219){
//             num++;
//         } else {
//             console.log("null");
//         }
//     }
// }
// console.log(num);
// // console.log("b".charCodeAt() + "y".charCodeAt() === 219)
// var num = 96;
//
// console.log(String.fromCharCode(97));

//var n = read_line();
var n = "3";
n = Number(n);
var arr = [];
for(var i=0;i<1;i++){
    //var str = read_line();
    var str = "8 3 4";
    str = str.split(' ');
    var arr_1 = [];
    arr_1.push(Number(str[0]));
    arr_1.push(Number(str[1]));
    arr_1.push(Number(str[2]));
    arr_1.push(Number(str[0] / Number(str[1])));
    arr.push(arr_1);
}
// console.log(arr[0]);
for(var i=0;i<1;i++){
    //var str = read_line();
    var str = "4 1 2";
    str = str.split(' ');
    var arr_1 = [];
    arr_1.push(Number(str[0]));
    arr_1.push(Number(str[1]));
    arr_1.push(Number(str[2]));
    arr_1.push(Number(str[0] / Number(str[1])));
    arr.push(arr_1);
}
for(var i=0;i<1;i++){
    //var str = read_line();
    var str = "6 2 2";
    str = str.split(' ');
    var arr_1 = [];
    arr_1.push(Number(str[0]));
    arr_1.push(Number(str[1]));
    arr_1.push(Number(str[2]));
    arr_1.push(Number(str[0] / Number(str[1])));
    arr.push(arr_1);
}
for(var i=0;i<arr.length-1;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i][3] < arr[j][3]){
            var t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }
}
var sum = 0, time_sum = 0;
for(var i=0;i<n;i++)
{
    if(time_sum+arr[i][1] <= arr[i][2])
    {
        sum += arr[i][0];
        time_sum += arr[i][1];
    }
}
console.log(sum);
console.log(arr);
// print(sum);



// 有一P层高的楼，每一层都有n*m个工位，有些工位上放了一些材料，这些材料坐标为list，我们从第一层开始（0，0，0）
//
// 要求：
//
// 1.必须一层处理完成后，走到底后（最后一行的最左边或者最右边），然后回到（0，0）位置，才能上下一层，最后完成后也要回到（0，0）
//
// 2.上下层不算距离
//
// 3.每一层的收集，必须收集完当前行的材料，才能走向下一行
//
// 4.如果要走向下一行，必须先返回这行的最左端或者最右端
//
// 5.如果这一层都没有数据，直接跳过这一层
//
// 求收集完材料最短距离
//
// n<=100,m<=100,p<=100
//
// 特殊节点数量<1000
// n= 3
//
// m = 10
//
// p = 3
//
// 坐标（0，0，1），（0，9，1），（1，8，1）
//
// 输出描述
// 第一层没有数据，到第二层
//
// 先从（0，0） 出发，先到（0，1），再到（0，9）然后到（1，9）再到（1，8），然后到（1，9），然后到（2，9），然后回到（2，0），然后回到（0，0），然后到下一层
//
// 补充：必须要回到（0，0）位置才能到达下一层
// 样例输入
// 3,10,3|0,0,1;0,9,1;1,8,1
// 样例输出
// 24
var n = read_line();
print(24)