// function foo(str1, str2){
//     var t;
//     if(str1.length < str2.length){
//         t = str1;
//         str1 = str2;
//         str2  = t;
//     }
//     var arr1 = [];
//     var arr2 = [];
//     for(var i=str1.length-1;i>=0;i--){
//         arr1.push(Number(str1[i]));
//     }
//     for(var i=str2.length-1;i>=0;i--){
//         arr2.push(Number(str2[i]));
//     }
//     var arr = [];
//     var flag = 0;
//     for(var i=0;i<arr2.length;i++){
//         var num = arr1[i] + arr2[i] + flag;
//         if(num >= 10){
//             arr[i] = num%10;
//             flag = 1;
//         } else {
//             arr[i] = num;
//             flag  =0;
//         }
//     }
//     if(arr1.length === arr2.length && flag){
//         arr.push(1);
//     } else{
//         for(var i=arr2.length;i<arr1.length;i++){
//             num = arr1[i] + flag;
//             if(num >= 10){
//                 arr[i] = num % 10;
//                 flag = 1;
//             } else {
//                 arr[i] = num;
//                 flag = 0;
//             }
//         }
//     }
//     if(flag){
//         arr.push(1);
//     }
//     arr = arr.reverse();
//     return arr;
// }
// console.log(foo( "789","99213"));

// function foo(a) {
//     var max = -Number.MAX_SAFE_INTEGER;
//     var sum = 0;
//     var i = 0;
//     while(i<a.length){
//         sum += a[i];
//         // console.log("sum = ", sum)
//         if(sum < 0){
//             sum = 0;
//         }
//         if(max < sum){
//             max = sum;
//         }
//         i++;
//     }
//     return max;
// }
// console.log(foo([2, -1, 3, -5, 4, -2, 3]));

obj = {
    name :'aaa',
    fn : function () {
        console.log(this.name);
        var f2 = function () {
            console.log(this.name);
        };
        f2();
    }
};
obj.fn();
// var flag = true;
// var a = 2;
// while(flag){
//     console.log(2);
// }
// a = 3;
// setTimeout(function(){ flag = false;}, 2000);