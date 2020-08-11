// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
// 比如n=3时，2*3的矩形块有3种覆盖方法：
//递归
function f(number) {
    var a = 1, b = 2, c;
    if(number===0 || number===1 || number===2){
        return number;
    }else{
        for(let i=3;i<=number;i++){
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }
}
console.log(f(4));