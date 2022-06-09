/*
 * @Author: LLW
 * @Date: 2022-06-09 15:38:25
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-09 15:53:44
 * @Description: 请填写简介
 */

// let 能解决 typeof 检测时出现的暂时性死区问题(let 比 var 更严谨)
// http://es6.ruanyifeng.com/#docs/let

// console.log(a); 
// => Uncaught ReferenceError: a is not defined

// console.log(typeof a); 
// => "undefined"，这是浏览器的BUG，本应该是报错的，因为没有a（暂时性死区）


console.log(typeof a); 
// => Uncaught ReferenceError: Cannot access 'a' before initialization
let a;
