// 1. Promisify一个异步函数

const fs = require('fs');

// 回调用法
// fs.readFile('test.json', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data.toString());
//   }
// });

const promisify = (fn) => {
    // 在这里实现你的设计
};

// 以fs.readFile()为例，测试你的实现
// 2. a和b是两个对象，表达式（a === b）何时为真？
// 3. 写一个闭包函数add2()，实现如下效果

console.log(add2());  // 2
console.log(add2());  // 4
console.log(add2());  // 6
console.log(add2());  // 8