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

var str = readline();
var num = readline();

// var str = '';
// var num = '2';

num = Number(num);
if(num === 0 ){
    console.log('...');
} else {
    var i = 0;
    var sum = 0;
    while (i !== str.length) {
        //(str[i]>='0'&&str[i]<='9')||(str[i]>='a'&&str[i]<='z')||(str[i]>='A'&&str[i]<='Z')
        if (str.charCodeAt(i) > 255) {
            sum += 4;
        } else {
            sum += 2;
        }
        i++;
        if (sum >= num) {
            break;
        }
        //console.log("sum = ", sum);
    }
    var str_1 = str.substring(0, i);
    if (i !== str.length) {
        console.log(str_1.concat('...'));
    } else {
        console.log(str_1);
    }
}

