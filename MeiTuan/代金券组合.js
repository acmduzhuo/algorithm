// var target_money = 3;
// var price_list = [2, 5, 7, 20, 50];
// console.log(fn(target_money, price_list));
//
// function fn(tg, pl) {
//     var dp = [];
//     // 初始化矩阵，令每种钱解决0元的都为0张
//     // 初始化顶栏
//     for (let i = 0; i < pl.length; i++) {
//         dp.push([0])
//     }
//     // 初始化左栏
//     for (let i = 1; i <= tg; i++) {
//         if (i % pl[0] == 0) dp[0][i] = parseInt(i / pl[0]);
//         // pl[0]为最小的，除不尽用无限大
//         else dp[0][i] = Infinity;
//     }
//     // 开始绘制整张表
//     for (let i = 1; i <= tg; i++) {
//         for (let j = 1; j < pl.length; j++) {
//             // 用不到pl[j]金额的
//             if (i < pl[j]) dp[j][i] = dp[j - 1][i];
//             // 金额相等一张就够了
//             else if (i == pl[j]) dp[j][i] = 1;
//             else {
//                 // 左边的
//                 var left = dp[j - 1][i];
//                 // 上方的
//                 var up = dp[j][i - pl[j]] + 1;
//                 // 取较小的存入
//                 dp[j][i] = left < up ? left : up;
//             }
//         }
//     }
//     var res = dp[pl.length - 1][tg]
//     // console.log(dp)
//     return res == Infinity ? "Impossible" : res;
// }
//65
// 4 50 30 20 5
// 0
// while(true){
//     var num = parseInt(readline())
//     if(num==0){
//         break
//     }
//     var lines =readline()
//     var lineArr = lines.split(" ").map(Number)
//     var type = lineArr[0]
//     var money = lineArr.slice(1)
//     console.log(getResult(num,type,money))
// }
// var num = 65;
// var type = 4;
// var money = [50,30,20,5];
// function getResult(num, type, money) {
//     var dp = [];
//     dp[0] = 0;
//     for(var i=1;i<=num;i++){
//         var arr = [];
//         for(var j=0;j<money.length;j++){
//             if(i>=money[j]){
//                 arr.push(dp[i-money[j]] + 1);
//             }
//         }
//         dp[i] = Math.min(...arr);
//     }
//     return dp[num] === Infinity?"Impossible":dp[num];
// }
// console.log(getResult(num,type,money))
var arr = [1, 2, 3, 4];
console.log(...arr);
console.log(Math.min(0,1));