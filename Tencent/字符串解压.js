// var str = 'HG[3|B[2|CA]]F';
// for(var i=0;i<str.length;i++){
//     if(str[i] === '['){
//         var j = i+1;
//         var str_1 = "";
//         var flag = 1;
//         while(str[j+1] !== ']'){
//             if(str[j] == '['){
//                 flag = 0;
//                 break;
//             }
//             str += str[j];
//             j++;
//         }
//         if(!flag) {
//             i = j-1;
//         }
//         if(flag){
//             var num = 0;
//             var k = 0;
//             while(str_1[k] != '|'){
//                 num = num*10+str_1[k];
//                 k++;
//             }
//             var str_1_len = str_1.length;
//             str_1 = str_1.split()
//
//         }
//     }
// }
function f(str) {
    str = readline()
    while(str.lastIndexOf('[') !== -1){
        var str_init = str.substring(str.lastIndexOf('['), str.indexOf(']',str.lastIndexOf('['))+1);
        //console.log("str_init = ", str_init);
        var str_1 = str_init.substring(1, str_init.length-1);
        //console.log(str_1);
        var str_num = str_1.split('|')[0];
        var str_str = str_1.split('|')[1];
        //console.log(str_num);
        //console.log(str_str);
        var num = Number(str_num);
        //console.log(num);
        var str_2 = "";
        for(var i=0;i<num;i++){
            //console.log(i);
            str_2 += str_str;
        }
        //console.log("str_2 = ", str_2);
        str = str.replace(str_init, str_2);
        //console.log("str = ", str);
    }
    print(str)
    //console.log(str)
    return str;
}
//str = readline()
f(str)
var str = 'HG[3|B[2|CA]]F';
console.log(f(str));
