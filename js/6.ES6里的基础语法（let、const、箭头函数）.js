/*
 * @Author: LLW
 * @Date: 2022-06-20 10:00:33
 * @Description: 请填写简介
 */

// let a = 12;
// a = 13;
// console.log(a); //=>13

// const b = 12;
// b = 13;
// // => Uncaught TypeError: Assi gnment to constant variable.
// // 基于CONST创建变量，变重存储的值不能被修改(常量)
// console.log(b);

/*
let和var的区别
    1. let不存在变量提升(当前作用域中,不能在let声明前使用变量)；
    2. 同一个作用域中，let 不允许重复声明；
    3. let解决了typeof的一个暂时性死区问题；
    4. 全局作用域中,使用let声明的变量并没有给window加上对应的属性；
    5. let会存在块作用域(除对象以外的大括号都可被看做块级私有作用域)；
*/


// // => 箭头函数的创建都是函数表达式方式(变量=函数)，这种模式下，不存在变量提升，函数只能在创建完成后被执行(也就是创建的代码之后执行)
// const fn = ([形参]) => {
//     // 函数体(return)
// };

// //=>函数体中只有一句话， 并且是return xxx的，可以省略大括号和return等
// const fn1 = n => n * 10;


// function fn2(n) {
//     return function (m) {
//         return m + (++n);
//     }
// }
// const fn3 = n => m => m + (++n);


// // 支持默认值
// let obj = {};
// let fn4 = (context = window, ...args) => {
//     // console.log(arguments);
//     // => Uncaught ReferenceError: arguments is not defined 
//     // 箭头函数中没有arguments

//     // ...args:剩余运算符，context之后的参数都存在这个数组集合中
//     console.log(args);
// };
// fn4(obj, 10, 20, 30); // => context:obj arg:[10, 20, 30]
// fn4(); // => context:window arg:[]


/* // 箭头函数中没有自己的THIS，它里面用到的THIS ,都是自己所处.上下文中的THIS (真实项目中,一但涉及THIS问题,箭头函数慎用)
window.name = "WINDOW";

let fn = n => {
    console.log(this.name);
};
let obj = {
    name: 'OBJ',
    fn: fn,
};
fn(10); // => this:window
fn.call(obj, 10); // => this:window不是我们预期的OBJ
document.body.onclick = fn; // => this:window不是我们预期的BODY
obj.fn(10); // => this:window

let obj1 = {
    name: 'OBJ',
    fn: function () {
        // => this:obj普通函数是有自己的THIS的
        let f = () => {
            console.log(this);
        };
        f(); // => this:obj
        return f;
    }
};
let f = obj.fn();
f(); // => this:obj */



let obj = {
    name: 'OBJ',
    fn: function () {
        // this:obj
        //原本期望的需求是: 1S后把obj中的name改为'靓仔'

        /* 
        setTimeout(function () {
            this.name = '刘靓仔';
            console.log(this); // this:window
        }, 1000); 
        */

        /* 
        let _this = this; // => 把需要的THIS提前用变量存储起来
        setTimeout(function () {
            _this.name = '小靓仔'; // => 需要使用的时候拿出来用即可
            console.log(_this); // this:obj 
        */

        /*  */
        setTimeout(() => {
            this.name = '大靓仔';
            console.log(this); // this:obj
        }, 1000);

    }
};
obj.fn();
