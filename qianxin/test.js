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
var str =  readline();
//var str = '[4,1,3,3,3]';
str = str.substr(1, str.length-2);
str = str.split(',');
for(let i=0;i<str.length;i++){
    str[i] = Number(str[i]);
}
var minn = Infinity;
for(var i=0;i<str.length;i++){
    if(minn > str[i]){
        minn = str[i];
    }
}
var minn_index = str.indexOf(minn);
// str[minn_index] = 1;
console.log(str);
var str_1 = [];
for(let i=0;i<str.length;i++){
    str_1[i] = 1;
}
for(var i=0;i<str.length-1;i++){
    if(str[i] < str[i+1]){
        str_1[i+1] = str_1[i] + 1;
    }
    else if(str[i] > str[i+1]){
        if(str_1[i]-1 === 0){
            str_1[i]++;
            var j = i;
            while(str[j]<str[j-1] && (j-1>=0)){
                str[j-1]++;
                j--;
            }
        }
        str_1[i+1] = str_1[i] - 1;
    }
}
console.log(str_1);
// var left = minn_index;
// console.log(left);
// while(left >0 ){
//     left--;
//     // console.log(left);
//     if(str[left] > str[left+1]){
//         str[left] = str[left+1] + 1;
//     }
//     else if(str[left] == str[left+1]){
//         str[left] = 1;
//     }
//     else if((str[left] < str[left+1])){
//         str[left] = str[left+1] - 1;
//     }
// }
// var right = minn_index;
// while(right < str.length-1){
//     right++;
//     // console.log(left);
//     if(str[right] > str[right-1]){
//         str[right] = str[right-1] + 1;
//     }
//     else if(str[right] == str[right-1]){
//         str[right] = 1;
//     }
//     else if(str[right] < str[right-1]){
//         str[right] = str[right-1] - 1;
//     }
// }
// console.log(str);