/*
 * @Author: LLW
 * @Date: 2022-06-11 15:21:03
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-13 16:37:51
 * @Description: 练习题
 *          
 * 建议大家每一道题都要画图 (尤其是复杂一些的题目)， 画图过程能让我们把基础知识掌握的更加扎实,而且更加有效的算出正确的答案

 * 先自己计算,都完成后在开始测试答案,千万不要直接的输出看答案，的这样就没有意义了
 */


// // 选择题

// // 1.请选择输出结果：B
// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     var a = 13;
// }
// fn();
// console.log(a);
// /* 
// A、undefined 12 13
// B、undefined undefined 12
// C、undefined undefined 13
// D、有程序报错
//  */


// // 2.请选择输出结果：A
// console.log(b);
// var b = 12;

// function fn() {
//     console.log(b);
//     b = 13;
// }
// fn();
// console.log(b);
// /*
// A、undefined 12 13
// B、undefined undefined 12
// C、undefined undefined 13
// D、有程序报错
// */


// // 3.请选择输出结果：D
// /* 
// 在全局作用域下，带 var/function 声明的全局变量相当于给 window 设置了对应的属性(即是全局变量也是属性)，不带 var 等声明的只是给 window 设置了对应的属性，如果使用的是 let/const 声明的，只是全局变量，没有给 window 设置属性的。
// */
// console.log(c);
// c = 12;

// function fn() {
//     console.log(c);
//     c = 13;
// }
// fn();
// console.log(c);
// /*
// A、undefined 12 13
// B、undefined undefined 12
// C、undefined undefined 13
// D、有程序报错:ReferenceError
// */

// /*
// 变量提升(全局)
//     function fn(){...};

// LET/CONST 等是不进行变量提升的
// */
// console.log(1); //=>1 
// console.log(d);
// // => Uncaught ReferenceError: Cannot access 'a' before initialization
// let d = 12;

// function fn() {
//     /*
//     词法解析
//         已经知道了在当前私有栈中有一个“LET A”, 此时的私有栈中出现的A都是私有的形参赋值&变量提升
//     */
//     console.log(d);
//     // => Uncaught ReferenceError: Cannot access ' a' before initialization
//     let d = 13;
// }
// fn();
// console.log(d);
// // => 在当前作用域下(全局、私有、块作用域)，如果创建变量使用的是LET/CONST等，一定不能在创建代码的前面使用这些变量，否则会报错: ReferenceError: Cannot access 'a' before initialization


// // let 所在的大括号是一个块作用域(私有作用域)
// if (1 === 1) {
//     var x = 12; // => 没有块作用域，还是全局下的a
//     let y = 13; // => 有块作用域，是私有块中的b
// }
// console.log(x); // 12
// console.log(y); // Uncaught ReferenceError: y is not defined



// // 4.请选择输出结果：B
// var foo = 1;
// // let foo = 1;
// function bar() {
//     if (!foo) {
//         var foo = 10;
//         // let foo = 10; 
//     }
//     console.log(foo);
// }
// bar(); // var 声明输出结果为：10，let：1
// /*
// A、1
// B、10
// C、undefined
// D、报错
// */


// // 5.请选择输出结果：
// var n = 0;

// function e() {
//     var n = 10;

//     function f() {
//         n++;
//         console.log(n);
//     }
//     f();
//     return f;
// }
// var g = e();
// g();
// console.log(n);
// /*
// A、1 1 1
// B、11 11 0
// C、11 12 0
// D、11 12 12
// */


// // 6.请选择输出结果：
// var a = 10,
//     b = 11,
//     c = 12;

// function test(a) {
//     a = 1;
//     var b = 2;
//     c = 3;
// }
// test(10);
// console.log(a);
// console.log(b);
// console.log(c);
// /*
// A、1 11 3
// B、10 11 12
// C、1 2 3
// D、10 11 3
// */


// // 7.请选择输出结果：B
// if (!("a" in window)) {
//     var a = 1;
// }
// console.log(a);
// /*
// A、1
// B、undefined
// C、报错
// D、以上答案都不对
// */


// // 8.请选择输出结果：D
// var a = 4;

// function b(x, y, a) {
//     console.log(a);
//     arguments[2] = 10;
//     //开启JS语法的严格模式
//     // "use strict";
//     //严格JS模式下 arguments 和形参的映射机制就切断了
//     console.log(a);
// }
// a = b(1, 2, 3);
// console.log(a);
// /*
// A、3 3 4
// B、3 10 4
// C、3 10 10
// D、3 10 undefined
// */


// // 9.请选择输出结果：A
// var foo = 'hello';
// (function (foo) {
//     console.log(foo); // hello
//     var foo = foo || 'world';
//     console.log(foo); // true
// })(foo);
// console.log(foo); // true

// /*
// A、hello hello hello
// B、undefined world hello
// C、hello world world
// D、以上答案都不正确
// */




// // 10.输出结果为：
// let a = 0 || false;
// console.log(a); //=>FALSE
// a = 1 | false;
// console.log(a); //=>1
// a = 1 && 100;
// console.log(a); //=>100
// a = 0 && 100;
// console.log(a); //=>0
// a = 0 || 1 && 2 || 3;
// // => 先算1&&2 => 0||2||3 => 再算0||2 => 2 => 最后2||3 => 2
// console.log(a); //=>2

// // 逻辑或|| 和逻辑与&&在赋值操作中的意义
// // A||B :先验证A的真假，如果A为真，返回的是A的值，如果A为假返回的是B的值
// // A&&B : A为真返回B的值，A为假返回A的值
// // &&的优先级高于||

// // 逻辑或|| 和逻辑与&& 的应用
// function fn(x, callback) {
//     // typeof x === 'undefined' ? x = 0 : null;
//     x = x || 0;

//     // callback 代表回调函数(传递的是个函数) :我们需要保证它是一个函数才能执行
//     typeof callback === 'function' ? callback() : null;
//     callback && callback();
// }
// fn();
// fn(10);
// fn(10, function () {});




// // 11.输出结果为（画图）：
// var a = 9;

// function fn() {
//     a = 0;
//     return function (b) {
//         return b + a++;
//     }
// }
// var f = fn(); // a = 0;
// console.log(f(5)); // return 5; a = 1;
// console.log(fn()(5)); // a = 0; return 5;  a = 1;
// console.log(f(5)); // return 6; a = 2;
// console.log(a); // a = 2;
// // 5 5 6 2; => D
// /*
// A、6 6 7 2
// B、5 6 7 3
// C、5 5 6 3
// D、以上答案都不正确
// */




// 问答题
// // 1.
// var ary = [1, 2, 3, 4];

// function fn(ary) {
//     ary[0] = 0;
//     ary = [0];
//     ary[0] = 100;
//     return ary;
// }
// var res = fn(ary);
// console.log(ary); // [0, 2, 3, 4];
// console.log(res); // [100];


// // 2.
// function fn(i) {
//     return function (n) {
//         console.log(n + (i++));
//     }
// }
// var f = fn(10); 
// // i=10; return function (n) {console.log(n + (i++));}
// f(20); // 30
// // i=10; n + (i++) => 20+10 => 30; i=11;
// fn(20)(40); // 60
// // 40 + 20 => 60;
// fn(30)(50); // 80
// // 50 + 30 => 80;
// f(30); // 41
// // i=11; n + (i++) => 30+11 => 41; i=12;


// // 3.
// var i = 10;

// function fn() {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
// var f = fn();
// f(20); // 31
// fn()(20); // 32
// fn()(30); // 43
// f(30); // 44



// // 4.
// var test = (function (i) {
//     return function () {
//         alert(i *= 2);
//     }
// })(2); // alert(4);
// test(5); // 没有形参

// // alert弹出一次：
// //  1. alert(4);



// // // 5.
// var a = 1;
// var obj = {
//     'name': 'tom'
// }

// function fn() {
//     var a2 = a;
//     obj2 = obj;
//     a2 = a;
//     obj2.name = "jack";
// }
// fn();
// console.log(a); // 1
// console.log(obj); // name: 'jack'



// // 6.变量提升与覆盖
// var a = 1;

// function fn(a) {
//     /*
//     形参赋值
//         a =1;
//     变量提升
//         var a; (无效)
//         function a...; (声明无效，但是需要给a赋值为函数)
//     a=function...
//     */
//     console.log(a); // => a() {}
//     var a = 2;

//     function a() {}
//     console.log(a); // => 2
//     // => 代码执行过程
//     // => a=2;
//     // => function a() {} => 跳过(变量提升阶段已经赋值过);
//     // => console.log(a); => 2
// }
// fn(a)
// console.log(a); // 1


// /*
//  * 变量提升
//  *   fn = AF3 (函数是输出3的)
//  */
// fn(); //=>3
// function fn() {
//     conso1e.log(1);
// }
// fn(); //=>3
// function fn() {
//     console.log(2);
// }
// fn(); //=>3
// var fn = 10; //=>fn = 10
// fn(); //=>Uncaught TypeError: fn is not a function
// function fn() {
//     console.log(3);
// }
// fn();




// // 7.这题比较经典，重点
// var a = 0,
//     b = 0;

// function A(a) {
//     // 改变了全局变量function A 的值；
//     A = function (b) {
//         alert(a + b++);
//     };
//     alert(a++);
// }
// A(1);
// // alert(1); a=2;
// A(2);
// // alert(4);



// 三:附加思考题(面试题)

/* 
1、以下代码的功能是要实现为5个 input 按钮循环绑定 click 点击事件,绑定完成后点击 1、2、3、4、5 五个按钮分别会alert输出 0、1、 2、 3、 4 五个字符。( 腾讯)
    请问如下代码是否能实现?
    如果不能实现那么现在的效果是什么样的?
    应该做怎样的修改才能达到我们想要的效果,并说明原理? 
*/
/* 
    <div id="btnBox">
        <input type="button" value="button_1" />
        <input type="button" value="button_2" />
        <input type="button" value="button_3" />
        <input type="button" value="button_4" />
        <input type="button" value="button_5" />
    </div>

    <script type="text/javascript">
        var btnBox = document.getElementById('btnBox'),
            inputs = btnBox.getElementsByTagName('input');
        var l = inputs.length;
        for (var i = 0; i < l; i++) {
            inputs[i].onclick = function () {
                alert(i);
            }
        }
    </script>
*/



/* 
2、document.parentNode 和 document.parentnode 的区别? (腾讯)
3、你理解的闭包作用是什么,优缺点? 
4、简述 let 和 var 的区别。
*/

/* 
4、简述 let 和 var 的区别。

let VS var
    1. 1et没有变量提升(但是在词法解析阶段也得知某个变量是否是私有变量)
    2. let不允许在相同的作用域下重复声明
    3. let解决了JS中的暂时性死区问题
    4.let创建的全局变量没有给window设置对应的属性
    5.1et会产生块级作用域
    ...
*/






// // Day 4
// // 1.写出下面代码输出结果
var num = 10;
var obj = {
    num: 20
};
obj.fn = (function (num) {
    this.num = num * 3;
    num++;
    return function (n) {
        this.num += n;
        num++;
        console.log(num);
    }
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num);

// ------解题过程------
/*
// 变量提升  
var num;
var obj;
var fn;
// 代码执行
num = 10;
obj = {
    num: 20
};

obj.fn, 在obj对象中添加属性 fn；
obj.fn = (function (num) {...})(obj.num);
obj.fn = (function (num) {...})(20);
开启私有作用域 A
this.num = num * 3;
    => window.num = num(形参) * 3;
    => window.num = 20 * 3 = 60;
num(形参)++; 
    => 20+1 = 21;
obj.fn = return的引用地址 af0; => 'function (n) {...}'
    // obj = {
    //     num: 20,
    //     fn:af0,
    // };
    // window.num = 60;

fn = obj.fn; => fn = af0;

fn(5); => window.fn(5) => function (5) {...}
this.num += n; => window.num = 60+5; => window.num = 65;
    // obj = {
    //     num: 20,
    //     fn:af0,
    // };
    // window.num = 65;
num(形参)++; 
    => 21+1 = 22;
console.log(num(形参)); => '22'

obj.fn(10); => function (10) {...}
this.num += n; => obj.num = 20+10; => obj.num = 30;
    // obj = {
    //     num: 30,
    //     fn:af0,
    // };
    // window.num = 65;
num(形参)++; 
    => 22+1 = 23;
console.log(num(形参)); => '23'

console.log(num, obj.num); // '65' '30'

输出结果：'22' '23' '65' '30'

*/


// // 2.写出下面代码输出结果
// var fullName = 'language';
// var obj = {
//     fullName: 'javascript',
//     prop: {
//         getFullName: function () {
//             return this.fullName;
//         }
//     }
// };
// console.log(obj.prop.getFullName()); // 'undefined'
// var test = obj.prop.getFullName;
// console.log(test()); // 'language'

// // 3.写出下面代码输出结果
// var name = 'window';
// var Tom = {
//     name: "Tom",
//     show: function () {
//         console.log(this.name); // this:window
//     },
//     wait: function () {
//         var fun = this.show;
//         fun();
//     }
// };
// Tom.wait(); // 'window'


/**
 * 掌握几条分清执行的主体的规律
 *  1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的THIS是当前操作的元素
 *  2.方法执行，看方法前面是否有点，有点，点前面是谁THIS就是谁，没有点THIS是WINDOW (在严格模式下没有点THIS是UNDEFINED =>"use strict")
 *  3.在构造函数模式执行中，函数体中的THIS是当前类的实例
 */

// // 1
// document.body.onclick = function () {
//     //this: body
// }

// // 2
// function fn() {
//     console.log(this);
// }
// let obj = {
//     fn: fn
// };
// fn(); // => this:window
// obj.fn(); // => this:obj

// // 3
// function Fn() {
//     // this:f这个实例
//     this.name = 'XXX';
// }
// let f = new Fn();
// console.log(f.name);




// // 4. prototype 
// function fun() {
//     this.a = 0;
//     this.b = function () {
//         alert(this.a);
//     }
// }
// fun.prototype = {
//     b: function () {
//         this.a = 20;
//         alert(this.a);
//     },
//     c: function () {
//         this.a = 30;
//         alert(this.a);
//     }
// }

// var my_fun = new fun();
// my_fun.b();
// my_fun.c();



// 5.怎么规避多人开发函数重名的问题? (百度搜索)



// // 6.360面试题
// window.val = 1;
// var json = {
//     val: 10,
//     dbl: function () {
//         this.val *= 2;
//     }
// }
// json.dbl();
// var dbl = json.dbl;
// dbl();
// json.dbl.call(window);
// alert(window.val + json.val);
// // --------------------- 
// // 变量提升
// // var json;
// // var dbl;

// // 代码执行
// // window.val = 1;

// // json = {
// //     val: 10,
// //     dbl: function () {
// //         this.val *= 2;
// //     }
// // }

// // json.dbl();
// //     this.val *= 2; => json.val => 20;

// // dbl = json.dbl;
// //     this.val *= 2; 
// //     => window.val *= 2; 
// //     => 2;

// // json.dbl.call(window);
// //     call()改变了this；
// //     this:window; 
// //     window.val *= 2; 
// //     => 4;

// // alert(window.val + json.val);
// //     => 4+20
// //     => 24



// // 7.
// (function () {
//     var val = 1;
//     var json = {
//         val: 10,
//         dbl: function () {
//             val *= 2;
//         }
//     };
//     json.dbl();
//     alert(json.val + val);
// })();
// // -----------------------
// // 变量提升
// // var val;
// // var json;

// // // 代码执行
// // val = 1;

// // json = {
// //     val: 10,
// //     dbl: function () {
// //         val *= 2;
// //     }
// // };

// // json.dbl();
// //     val *= 2;
// //     => window.val *= 2;
// //     => 2;

// // alert(json.val + val); 
// //     => 10+2=12
