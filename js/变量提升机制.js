/*
 * @Author: LLW
 * @Date: 2022-06-08 10:50:56
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-08 15:50:51
 * @Description: 请填写简介
 */


// console.log(a); // => undefined
// var a = 12;
// console.log(a); // => 12

// // function 方式会声明并且赋值，可以在函数创建代码之前使用
// console.log(sum(10, 20));

// function sum(n, m) {
//     return n + m;
// }

/* 
// 函数表达式方式，由于使用VAR来创建SUM，变量提升阶段只会声明变量，不会赋值，所以此时函数在前面执行，函数是没有值的，不能执行(真实项目中这种方式最常用，因它操作严谨)
console.log(sum2); // => undefined
sum2(10, 20); // => Uncaught TypeError: sum is not a function
var sum2 = function (n, m) {
    return n + m;
};
// let sum=(n, m)=>n+m;
console.og(sum2(10, 20));
 */


/*
全局作用域(栈内存)
    1.变量提升
    2.代码执行
*/
// console.log(c); // let声明的变量不存在 变量提升
// // => Uncaught ReferenceError: Cannot access 'c' before initialization
// // JS中上一行代码报错，下面代码就不会执行了
// let c = 12;
// c = 13;
// console.log(c);



/*
// 带var和不带var的区别
// =>在全局作用域下的区别

不带var的:相当于在全局对象window设置了一个属性d
    window.d = 13;
*/
d = 128;
console.log(d); // =>window.d

/* 
栈内存变量存储空间

带var的:
    是在全局作用域下声明了一个变量b (全局变量)，但是在全局下声明的变量也同样相当于给window增加了一个对应的属性(只有全局作用域具备这个特点)
*/
var d = 256;
console.log(d); // var d






