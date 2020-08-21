var num = read_line();
var gao = read_line();
var yuan = read_line();
num = Number(num);


// var num = 10;
// var gao = 'A B C D E F X H I J';
// var yuan = 'A C I X E F J H D B';

var arr = "";
if(gao.length===1 && yuan.length===1){
    arr+=1;
    arr+=" ";
    arr+=1;
    //console.log(arr);
    print(arr);
}
else {
    var gao_c = gao.indexOf('X');
    var yuan_c = yuan.indexOf('X');
    var gao_q = gao.slice(0, gao_c);
    var gao_h = gao.slice(gao_c + 1);
    var yuan_q = yuan.slice(0, yuan_c);
    var yuan_h = yuan.slice(yuan_c + 1);
// console.log(gao_q);
// console.log(gao_h);
// console.log(yuan_q);
// console.log(yuan_h);
    var good = 0, bad = 0;
    for (var i = 0; i < gao_q.length; i++) {
        if (gao_q[i] !== ' ') {
            for (var j = 0; j < yuan_q.length; j++) {
                if (gao_q[i] === yuan_q[j]) {
                    good++;
                }
            }
        }
    }
    for (var i = 0; i < gao_h.length; i++) {
        if (gao_h[i] !== ' ') {
            for (var j = 0; j < yuan_h.length; j++) {
                if (gao_h[i] === yuan_h[j]) {
                    bad++;
                }
            }
        }
    }
    good += 1;
    bad = num - bad;
    arr += good;
    arr += " ";
    arr += bad;
    print(arr);
    //console.log(arr);
}