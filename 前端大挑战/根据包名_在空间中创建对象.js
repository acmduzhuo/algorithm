function namespace(oNamespace, sPackage) {
   var arr = sPackage.split(".");
   var str = oNamespace;
   for(var i=0;i<arr.length;i++){
       if(arr[i] in oNamespace){
           if(typeof oNamespace[arr[i]] !== 'object'){
               oNamespace[arr[i]] = {};
           }
       } else {
           oNamespace[arr[i]] = {};
       }
       oNamespace = oNamespace[arr[i]];
   }
   return str;
}
var oNamespace = {a: {test: 1, b: 2}};
var sPackage = 'a.b.c.d';
console.log(namespace(oNamespace, sPackage));
// var dog = {
//     name : '小黄',
//     age : 3,
//     color : 'yellow'
// };
// var dog_1 = dog;
// dog_1.name = '大黄';
// console.log(dog_1);
// console.log(dog);
// { name: '大黄', age: 3, color: 'yellow' }
// { name: '大黄', age: 3, color: 'yellow' }
function namespace(oNamespace, sPackage) {
    if(sPackage.length <= 0){
        return 0;
    }
    var str = oNamespace;
    if(sPackage[0] in oNamespace){
        if(typeof oNamespace[sPackage[0]] !== 'object'){
            oNamespace[sPackage[0]] = {};
        }
    } else {
        oNamespace[sPackage[0]] = {};
    }
    oNamespace = oNamespace[sPackage[0]];
    namespace(oNamespace, sPackage.slice(2));
    return str;
}
var oNamespace = {a: {test: 1, b: 2}};
var sPackage = 'a.b.c.d';
console.log(namespace(oNamespace, sPackage));