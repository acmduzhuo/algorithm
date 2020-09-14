// var line = readline();

// var str = "1594031855361";
// // var regExp = /^\d(1,2)$/;
// // console.log(new Date(parseInt(str) * 1000).toLocaleDateString().replace(regExp, ' '));
// var time = new Date(str);
// console.log(time);
// console.log(str.getFullYear());
// function format(timer) {
//     var date = new Date(timer);
//     var year = date.getFullYear() + '-';
//     var month  = date.getMonth()+1;
//     month = (month>=10) ? month : "0"+month;
//     month += '-';
//     var day  = date.getDate();
//     day = (day>=10) ? day : "0"+day;
//     day += ':';
//     var hour = date.getUTCHours();
//     hour = (hour>=10) ? hour : "0"+hour;
//     hour += ':';
//     var minute = date.getMinutes();
//     minute = (minute>=10) ? minute : "0"+minute;
//     minute += ':';
//     var miao = date.getSeconds();
//     miao = (miao>=10) ? miao : "0"+miao;
//     var sum = year + month + day + hour + minute +miao;
//     return sum;
// }
// console.log(format('1594031855361'*1));

// function test(input){
//     str = input.split(' ');
//     var str_1 = str[0];
//     var str_2 = str[1];
//     var n = str_2;
//     str_1 = str_1.split(',');
//     var str_1_len = str_1.length;
//     //return str_1_len;
//     var arr = [];
//     for(var i=0;i<str_1_len;i++){
//         arr.push(Number(str_1[i]));
//     }
//     //return arr;
//     var t;
//     for(var i=0;i<=str_1_len-1;i++){
//         for(var j=0;j<str_1_len;j++){
//             if(arr[i] > arr[j]){
//                 t = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = t;
//             }
//         }
//     }
//
//     return arr[n-1];
// }
// console.log(test('3,2,3,1,2,4,5,5,6 4'));

function getSort(array) {
    var arr = [];
    for(var i=0;i<array.length;i++){
        arr.push(Number(array[i]));
    }
    var arr_new = Array.from(new Set(arr));
    var arr_ci = [];
    for(var i=0;i<arr_new.length;i++){
        var arr_ci_1 = [];
        var num = arr.lastIndexOf(arr_new[i]) - arr.indexOf(arr_new[i]) + 1;
        arr_ci_1.push(num);
        arr_ci_1.push(arr_new[i]);
        arr_ci.push(arr_ci_1);

    }
    var t;
    for(var i=0;i<arr_ci.length-1;i++){
        for(var j=i+1;j<arr_ci.length;j++){
            if(arr_ci[i][0] < arr_ci[j][0]){
                t = arr_ci[i];
                arr_ci[i] = arr_ci[j];
                arr_ci[j] = t;
            }
        }
    }
    // return arr_ci;
    var summ = [];
    for(var i=0;i<arr_ci.length;i++){
        // summ += arr_ci[i][1];
        // if(i!==arr_ci.length-1){
        //     summ += ','
        // }
        summ.push(arr_ci[i][1]);
    }
    return summ;
    // return arr_ci;
    // return arr_1 + 1;
}
let pass = '[0,2,2,4,1,3,2,3]';
pass = pass.slice(1,pass.length-1)
console.log(getSort(pass.split(',')));
