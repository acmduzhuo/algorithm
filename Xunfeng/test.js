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
// }


// var str_1 = read_line();
// var str_2 = read_line();
// var str_3 = read_line();
// var str_1 = "flower";
// var str_2 = "flow";
// var str_3 = "flight";

var n = read_line();
n = Number(n);
var str = [];
var str_c;
while(n--){
    str_c = read_line();
    str.push(str_c);
}
var sum = "";
if(str.length === 1){
    console.log(str[0]);
} else {
    var lenArray = [];
    for(var i=0;i<str.length;i++){
        lenArray.push(str[i].length);
    }
    var flag_1 = 1;
    for(var i=0;i<Math.min.apply(null, lenArray);i++){
        var flag = 1;
        for(var j=1;j<str.length;j++){
            if(str[j][i] === str[j-1][i]){
                continue;
            }
            else {
                flag = 0;
                break;
            }
        }
        if(flag){
            sum += str[j-1][i];
        } else {
            flag_1 = 0;
            if(sum === ""){
                print("empty");
            }else {
                print(sum);
            }
            //console.log(sum);
            break;
        }
    }
    if(flag_1){
        print(sum);
        //console.log(sum);
    }
}
// if(str[0]===str_2[0] && str_2[0]===str_3[0]){
//     sum += str_1[0];
//     len = Math.min(str_1.length,str_2.length,str_3.length);
//     for(var i=1;i<len;i++){
//         if(str_1[i]===str_2[i] && str_2[i]===str_3[i]){
//             sum += str_1[i];
//         } else {
//             //console.log(sum);
//             print(sum);
//             break;
//         }
//     }
//     if(i === len){
//         // console.log(sum);
//         print(sum);
//     }
// } else {
//     //console.log("empty");
//     print(sum);
// }

// var a = [1, 2, 3];
// console.log(Math.min.apply(null, a));