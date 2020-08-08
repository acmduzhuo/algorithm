var str = readline();
//var str = '(())()';
var arr = [];
for(var i=0;i<str.length;i++){
    if(i === 0){
        var s = str[0];
        var ss = str.slice(1);
    } else if(i === str.length-1){
        var s = str[i];
        var ss = str.slice(0, i);
    } else {
        var s =  str[i];
        var ss = str.slice(0,i) + str.slice(i+1);
    }
    for(var j=0;j<=ss.length;j++){
        if(j === 0){
            var e = s + ss;
        } else if(j === ss.length){
            var e = ss + s;
        } else {
            var e = ss.slice(0, j) + s + ss.slice(j);
        }
        if(legal(e)){
            arr.push(e);
        }
    }
}
function legal(u) {
    var count = 0;
    for(var i=0;i<u.length;i++){
        if(u.charAt(i) === '('){
            count++;
        } else {
            count--;
        }
        if(count<0){
            return false;
        }
    }
    return count === 0;
}
var arr2 = [...new Set(arr)];
var flag  = true;
for(var i=0;i<arr2.length;i++){
    if(arr2[i] === str){
        //console.log("arr2[i] = ", arr2[i]);
        flag = false;
        break;
    }
}
//console.log(arr2);
if(flag){
    console.log(arr2.length);
} else {
    console.log(arr2.length - 1);
}