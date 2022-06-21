/*
 * @Author: LLW
 * @Date: 2022-06-21 08:37:25
 * @Description: 请填写简介
 */

// function sum() {
//     // arguments:内置的实参集合( 箭头函数中没有)，不是数组是类数组(它不是数组的实例，不能直接使用数组的方法
//     // arguments.__proto__ === object.prototype;

//     let total = null;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//         return total;
//     }
// }
// let total = sum(10, 20, 30, 40);


// // 数组
// let sum = (...arg) => eval(arg.join('+'));
// let total = sum(10, 20, 30, 40);
// console.log(total);


// // 更帅的方式
// function sum() {
//     // let arg = Array.prototype.slice.call(arguments, 0);
//     let arg = [].slice.call(arguments, 0);
//     return eval(arg.join('+'));

// }
// let total = sum(10, 20, 30, 40);
// console.log(total);

// 
function sum() {
    let total = null;
    [].forEach.call(arguments, item => {
        total += item;
    });
    return total;
}
let total = sum(10, 20, 30, 40);
console.log(total);
