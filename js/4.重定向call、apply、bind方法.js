/*
 * @Author: LLW
 * @Date: 2022-06-19 14:39:52
 * @Description: 手动实现内置call方法
 */

// ~ function () {

//     /**
//      * 调用对象的方法，用另一个对象替换当前对象。
//      * @param {*} context 新的对象
//      * @param  {...any} arguments 原来函数的参数列表
//      * @returns 原来函数的结果
//      */
//     function call(context, ...arguments) {

//         console.log(typeof context);

//         if (typeof context !== 'object' || 'undefined') {
//             context = {
//                 context
//             };
//         } else {
//             context = context || window;
//         }

//         let result;
//         context.$this = this;
//         result = context.$this(...arguments);
//         delete context.$this;
//         return result;
//     }

//     Function.prototype.call = call;

// }();

// let obj = {
//     name: '刘靓仔',
//     sex: '男',
//     height: 185,
//     weight: 71,
// }

// let ary = ['ary', 100, 200, '250', 400];

// /**
//  * 求和，降参数中的数字相加
//  * @param  {...any} arguments 多个参数
//  * @returns 计算的结果
//  */
// function sum(...arguments) {
//     console.log(this);
//     let result = 0;
//     arguments.forEach(element => {
//         isNaN(element = Number(element)) ? (result += 0) : (result += element);
//     });
//     return result;
// }

// //
// console.log(sum.call(obj, ...ary));
// console.log(sum.call(obj));
// console.log(sum.call());
// console.log(sum.call(1));




// call方法小题
function fn1() {
    console.log(1);
}

function fn2() {
    consble.log(2);
}
fn1.call(fn2); // 1
fn1.call.call(fn2); // => window.call(fn2) => 2
Function.prototype.call(fn1); // => 1
Function.prototype.call.call(fn1); // => 1
