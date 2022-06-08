/*
 * @Author: LLW
 * @Date: 2022-06-08 15:51:53
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-08 16:52:52
 * @Description: 请填写简介
 */

// var a = 12;
// var a = 13;
// console.log(a); // => 13

// let b = 14; // Uncaught SyntaxError: Identifier 'b' has already been declared
// let b = 15;
// console.log(b);



/* 
// => 在浏览器开辟栈内存供代码自上而下执行之前，不仅有变量提升的操作，还有很多其它的操作 
// => “词法解析”或者“词法检测”：就是检测当前即将要执行的代码是否会出现“语法错误： Uncaught SyntaxError ”，如果出现错误，代码将不会再执行(第一行都不会执行)
console.log(1); // 这行代码都不会执行
let a = 12;
console.log(a);
let a = 13; // 检测到这行报错： Uncaught SyntaxError: Identifier 'a' hasalready been declared
console.log(a);

// 引用错误
console.log(1); // 这行会执行
console.log(b); // => Uncaught ReferenceError: Cannot access 'b' before initialization
let b=12;
 */


// console.log(a);
// var a = 12;
// let a = 13; //=>Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log(a);

fn(); // 5

function fn() {
    console.log(1);
}
fn(); // 5

function fn() {
    console.log(2);
}
fn(); // 5
var fn = function () {
    console.log(3);
}
fn(); // 3

function fn() {
    console.log(4);
}
fn(); // 3

function fn() {
    console.log(5);
}
fn(); // 3

// 输出结果：5 5 5 3 3 3
