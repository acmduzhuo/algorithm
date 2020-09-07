// var sUrl = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
// sKey = "key";
// function getUrlParam(sUrl, sKey) {
//     var arr = [];
//     while(sUrl.indexOf(sKey) !== -1){
//         var start = sUrl.indexOf(sKey)+sKey.length+1;
//         var end = sUrl.indexOf('&');
//         // console.log("strat = ", start);
//         // console.log("end = ", end);
//         var str = sUrl.substring(start, end);
//         //console.log("str = ", str);
//         arr.push(Number(str));
//         sUrl = sUrl.slice(sUrl.indexOf('&')+1);
//         //console.log(sUrl);
//     }
//     return arr;
// }
// console.log(getUrlParam(sUrl, sKey));
// console.log(sUrl.charAt(getUrlParam(sUrl, sKey)+sKey.length));

// console.log(void 0);
// console.log(void 0 === undefined);

// function getUrlParam(sUrl, sKey) {
//     var str = sUrl.split('?')[1].split('#')[0].split('&')
//     var obj = {};
//     str.forEach(item => {
//         var [key, value] = item.split('=');
//         if(obj[key] === void 0){
//             obj[key] = value;
//         } else {
//             console.log(typeof obj[key]);
//             obj[key] = [].concat(obj[key], value);
//         }
//     });
//     return sKey === void 0?null:obj[sKey]||null;
// }
// var sUrl = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
// sKey = "key";
// console.log(getUrlParam(sUrl, sKey));
//
// console.log([3].concat(1, 2));
//
// const [key, value] = "1=a=c".split('=');
// console.log([key, value]);


function getUrlParam(sUrl, sKey) {
    var result, sParam = {};
    sUrl.replace(/(\?|&)(\w+)=(\w+)/g, function(k0, k3, k1, k2){
        console.log(k0, k1, k2, k3);
        sParam[k1] === void 0 ? sParam[k1] = k2 : sParam[k1] = [].concat(sParam[k1], k2);
    });
    console.log(sUrl);
    sKey === void 0 || sKey === '' ? result = sParam : result = sParam[sKey] || '';
    return result;
}
var sUrl = "http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe";
sKey = "key";
console.log(getUrlParam(sUrl, sKey));

// console.log("1".concat("2"));
// var arr = [1];
// arr.push(2);
// console.log(arr);

// var str1 = /[\?&]?/;
// console.log(str1.test('?'));
// console.log(str1.test('&'));
// console.log(str1.test('?&'));
// console.log(str1.test(''));
var str1 = /(\?|&)/;
console.log(str1.test('?'));
console.log(str1.test('&'));
console.log(str1.test(''));
