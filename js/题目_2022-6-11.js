/*
 * @Author: LLW
 * @Date: 2022-06-11 15:21:03
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-12 10:34:30
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




// 11.输出结果为（画图）：
var a = 9;

function fn() {
    a = 0;
    return function (b) {
        return b + a++;
    }
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);
/*
A、6 6 7 2
B、5 6 7 3
C、5 5 6 3
D、以上答案都不正确
*/
