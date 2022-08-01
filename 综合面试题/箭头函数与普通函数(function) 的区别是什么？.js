/*
 * @Author: LLW
 * @Date: 2022-08-01 09:25:13
 * @Description: 请填写简介
 */

/* 
箭头函数与普通函数(function) 的区别是什么?

构造函数(function) 可以使用new生成实例那么箭头函数可以吗?为什么? 
*/


/**
 * 箭头函数与普通函数的区别：
 *      1.箭头函数语法上比普通函数更加简洁；(ES6中每一种函数都可以使用形参赋默认值和剩余运算符)
 *      2.箭头函数没有自己的THIS，它里面的THIS是继承函数所处上下文中的THIS (使用CALL/APPY等任何方式都无法改变THIS的指向)
 *      3.箭头函数中没有ARGUMENTS (类数组)，只能基于... ARG获取传递的参数集合(数组)
 *      4.箭头函数不能被new执行（因为:箭头函数没有this也没有prototype）
 */

// 区别一：简洁
// 普通函数写法
function fn(x) {
    return function (y) {
        return x + y;
    }
}
// 箭头函数写法
let fun = x => y => x + y;


// 区别二：this问题
let obj = {
    name: 'OBJ'
};
function fn1() {
    console.log(this);
}
fn1.call(obj); // {name: 'OBJ'}

let fn2 = () => {
    console.log(this);
};
fn2.call(obj); // Window{...}


//=>回调函数:把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行
function each(arr, callBack) {
    //=>callBack :function(item, index){}
    for (let i = 0; i < arr.length; i++) {
        let falg = callBack.call(arr, arr[i], i);
        if (falg === false) {
            break;
        }
    }
}
each([10, 20, 30, 40], function (item, index) {
    //=>this:原始操作数组
    if (index > 1) {
        return false;
    }
});


// 区别三：arguments
let fn = (...arg) => {
    // console.log(arguments); 
    //=>Uncaught ReferenceError: arguments is not defined
    console.log(arg);
};
fn(10, 20, 30);


// 区别四：箭头函数不能被new执行（没有prototype）
letFn = () => {
    this.x = 200;
};
let f = new Fn; //=>Uncaught TypeError: Fn is not a constructor




