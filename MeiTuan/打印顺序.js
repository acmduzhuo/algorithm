
var window = {
    name:'globel'
};
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);
}, 0);
console.log("1."+bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log("2."+bar3.name);
//1.foo
// 2.foo2
// globel