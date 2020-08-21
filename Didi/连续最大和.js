// 一个数组有 N 个元素，求连续子数组的最大和。 例如：[-1,2,1]，和最大的连续子数组为[2,1]，其和为 3
//
// 输入描述:
//     输入为两行。 第一行一个整数n(1 <= n <= 100000)，表示一共有n个元素 第二行为n个数，即每个元素,每个整数都在32位int范围内。以空格分隔。
//
// 输出描述:
//     所有连续子数组中和最大的值。
//
// 输入例子1:
//     3
//     -1 2 1
//
// 输出例子1:
//     3


var N = readline();
var str = readline();
// str = '-1 2 1';
str = str.split(' ');
var len = str.length;
var arr = [];
for(let i=0;i<len;i++){
    arr.push(Number(str[i]));
}
maxx = Number.MIN_SAFE_INTEGER;
sum = 0;
for(let x of arr){
    sum += x;
    maxx = Math.max(maxx, sum);
    sum = Math.max(sum, 0);
}
console.log(maxx);
