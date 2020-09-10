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

// var color = readline();
//
// //var color = "#FFFFFF";
// function Turn(color) {
//     var regExp = /^#[0-9a-fA-F]{3}|[0-9a-fA-F]{3}$/;
//     if(regExp.test(color)){
//         //console.log(color.length);
//         if(color.length === 4){
//             var color_new = '#';
//             for(var i=1;i<4;i++){
//                 color_new  += color.slice(i,i+1).concat(color.slice(i, i+1));
//                 //console.log(color_new);
//             }
//             color = color_new ;
//             var color_turn = [];
//             for(var i=1;i<7;i+=2){
//                 color_turn.push(parseInt("0x"+color.slice(i, i+2)));
//                 //console.log(color_turn);
//             }
//             return "rgb" + "(" +color_turn.join(", ") + ")";
//         } else if(color.length === 7){
//             var color_turn = [];
//             for(var i=1;i<7;i+=2){
//                 color_turn.push(parseInt("0x"+color.slice(i, i+2)));
//                 //console.log(color_turn);
//             }
//             return "rgb" + "(" +color_turn.join(", ") + ")";
//         } else {
//             return color;
//         }
//     } else {
//         return color;
//     }
// }
// console.log(Turn(color));


// var str = readline();
var str = "0,0,0,0;1,1,1,0;1,1,1,0";
str = str.split(';');
// console.log(str);
var arr = [];
var arr_1 = [];
// console.log(str.length);
for(var i=0;i<str.length;i++){
    arr_1 = [];
    for(var j=0;j<str[i].split(',').length;j++){
        arr_1.push(str[i].split(',')[j]);
    }
    arr.push(arr_1);
}
// console.log(arr);
var x = 0, y = 0;
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[0].length;j++){
        if()
    }
}