// 某餐馆有n张桌子，每张桌子有一个参数：a 可容纳的最大人数； 有m批客人，每批客人有两个参数:b人数，c预计消费金额。 在不允许拼桌的情况下，请实现一个算法选择其中一部分客人，使得总预计消费金额最大
//
// 输入描述:
//     输入包括m+2行。 第一行两个整数n(1 <= n <= 50000),m(1 <= m <= 50000) 第二行为n个参数a,即每个桌子可容纳的最大人数,以空格分隔,范围均在32位int范围内。 接下来m行，每行两个参数b,c。分别表示第i批客人的人数和预计消费金额,以空格分隔,范围均在32位int范围内。
//
// 输出描述:
//     输出一个整数,表示最大的总预计消费金额
//
// 输入例子1:
//     3 5
//     2 4 2
//     1 3
//     3 5
//     3 7
//     5 9
//     1 10
//
// 输出例子1:
//     20

var str1 = readline();
str1 = str1.split(' ');
var n = str1[0];
var m = str1[1];
var str2 = readline();
str2 = str2.split(' ');
var tables = [];
for(let i=0;i<n;i++){
    tables.push(str2[i]);
}
var customs = [];
var cutoms1 = [];
for(let i=0;i<m;i++){
    var str3 = readline();
    str3 = str3.split(' ');
    cutoms1.push(str3[0]);
    cutoms1.push(str3[1]);
    customs.push(cutoms1);
}

// var tables = [2, 2, 4];
// var customs = [[1,10], [1,3], [3,7], [5,9], [3,5]];
// var n = 3;
// var m = 5;
function mostMoney(tables, customs) {
    var tablesLen = n;
    var customsLen = m;
    var t = 0;
    var p = 0;
    var sum = 0;
    var seat;
    for(var i=0;i<customsLen;i++){
        if(t < 3 && p < 8) {
            for(var j = 0; j < tablesLen; j++) {
                if(customs[i][0] <= tables[j]) {
                    seat = tables.splice(j, 1);
                }
            }
            //表示有适合的桌子可以坐下
            if(seat) {
                sum += customs[i][1];
                p += customs[i][0];
                t++;
            }else {
                //当前批次客人没有适合的位置，选择下一批次
                continue;
            }
        }else {
            break;
        }
    }
    console.log(sum);
    // console.log(t);
    // console.log(p);
}
mostMoney(tables, customs);