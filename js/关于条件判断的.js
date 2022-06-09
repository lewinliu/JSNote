/*
 * @Author: LLW
 * @Date: 2022-06-09 14:33:22
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-09 15:34:59
 * @Description: 关于 变量提升 & 条件判断
 */


/* 
流程：
    1.先进行变量提升，声明变量：var a;
    2.变量 a 在if条件判断中，不在变量提升阶段赋值;
    3.if ('a' in window) 条件成立，变量 a 才会进行赋值操作;
*/
// console.log(a); // undefined
// console.log('a in window:' + ('a' in window)); // true
// console.log('b in window:' + ('b' in window)); // false
// if ('a' in window) {
//     var a = 1; // 变量提升，只声明，未赋值
// }
// console.log(a); // undefined



/* 
全局作用域
    1.变量提升
        但是做函数的有特殊性:在老版本浏览器中，确实不论条件是否成立，函数也是提前声明或者定义的，但是新版本浏览器中，为了兼容ES6严谨的语法规范，条件中的函数变量提升阶段只能提前声明，不能提前定义
    2. 代码执行
        
*/
// fn(); // => Uncaught TypeError: fn is not a function
// if ('fn' in window) {
//     //条件成立，进来后的第一件事是给fn赋值，然后在代码执行
//     fn(); // '哈哈哈'
//     function fn() {// 变量提升：function fn; // 只是声明变量，不赋值
//         console.log('哈哈哈');
//     }
// }
// fn(); // '哈哈哈'



//=> 自执行函数:前面加的()或者!、-、~、+只有一个目的，让语法符合而已
//=>自执行函数本身不进行变量提升(没名字)
// (function(n){})(10);
// ~function(n){}(10);
// -function(n){}(10);
// !function(n){}(10);
// +function(n){}(10);



/*
全局作用域
    1.变量提升：
        无，全局作用域下的函数没有名字，不进行变量提升；
    2.代码执行；
*/
f = function () {
    return true;
}
g = function () {
        return false;
    }

~function () {
    /* 
    函数执行会形成一个私有作用域
        1.变量提升：
            function g;
        2.代码执行；
    */
    console.log('typeof g :' + typeof g); // typeof g :undefined
    console.log('typeof f :' + typeof f + ', f='+f()); // typeof f :function, f=true
    if (g() && [] == ![]) { // Uncaught TypeError: g is not a function
        f = function () {
            return false;
        }

        function g() {
            return true;
        }
    }
}();

console.log(f());
console.log(g());
