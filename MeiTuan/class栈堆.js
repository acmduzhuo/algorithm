// class A {
//     String i = "op";
//     void func(String s) {
//     s = ""+9;
// }
// static void test() {
//     A a = new A();
//     a.func(a.i);
// }
// }
//1. 变量i,s,a在堆还是在栈中？
//
// 考察js堆与栈：栈内存主要用于存储各种基本类型的变量，
// 包括Boolean、Number、String、Undefined、Null以及对象变量的指针，堆主要存储object
// 所以字符串变量i,s以及对象指针a都存在栈中，new出来的对象开辟内存存在堆上，对应地址是指针a存的内容
// 2. 第8行执行完后a.i的值是什么？
// 考察参数传递按值传递：a是A类的实例，所以a.i='op'，
// a.func(a.i)这句执行函数，把a.i作为参数传递，该函数会复制一个变量，两个变量完全独立，
// 所以在函数体里只是把复制的那个变量（一个新的局部变量）改变为'op9’,在函数体外的a.i并没有被改变