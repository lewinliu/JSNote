/*
 * @Author: LLW
 * @Date: 2022-06-11 15:21:03
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-11 16:52:36
 * @Description: 练习题
 *          
 * 建议大家每一道题都要画图 (尤其是复杂一些的题目)， 画图过程能让我们把基础知识掌握的更加扎实,而且更加有效的算出正确的答案

 * 先自己计算,都完成后在开始测试答案,千万不要直接的输出看答案，的这样就没有意义了
 */


// 选择题

// // 1.请选择输出结果：B
// console.log(a);
// var a = 12;

// function fn() {
//     console.log(a);
//     var a = 13;
// }
// fn();
// console.log(a);
/* 
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错
 */


// // 2.请选择输出结果：A
// console.log(b);
// var b = 12;

// function fn() {
//     console.log(b);
//     b = 13;
// }
// fn();
// console.log(b);
/*
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错
*/


// 3.请选择输出结果：D
/* 
在全局作用域下，带 var/function 声明的全局变量相当于给 window 设置了对应的属性(即是全局变量也是属性)，不带 var 等声明的只是给 window 设置了对应的属性，如果使用的是 let/const 声明的，只是全局变量，没有给 window 设置属性的。
*/
console.log(c);
c = 12;

function fn() {
    console.log(c);
    c = 13;
}
fn();
console.log(c);
/*
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错:ReferenceError
*/

/*
变量提升(全局)
    function fn(){...};

LET/CONST 等是不进行变量提升的
*/
console.log(1); //=>1 
console.log(d);
// => Uncaught ReferenceError: Cannot access 'a' before initialization
let d = 12;

function fn() {
    /*
    词法解析
        已经知道了在当前私有栈中有一个“LET A”, 此时的私有栈中出现的A都是私有的形参赋值&变量提升
    */
    console.log(d);
    // => Uncaught ReferenceError: Cannot access ' a' before initialization
    let d = 13;
}
fn();
console.log(d);
// => 在当前作用域下(全局、私有、块作用域)，如果创建变量使用的是LET/CONST等，一定不能在创建代码的前面使用这些变量，否则会报错: ReferenceError: Cannot access 'a' before initialization


// let 所在的大括号是一个块作用域(私有作用域)
if (1 === 1) {
    var x = 12; // => 没有块作用域，还是全局下的a
    let y = 13; // => 有块作用域，是私有块中的b
}
console.log(x); // 12
console.log(y); // Uncaught ReferenceError: y is not defined



// 4.请选择输出结果：B
var foo = 1;
// let foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
        // let foo = 10; 
    }
    console.log(foo);
}
bar(); // var 声明输出结果为：10，let：1
/*
A、1
B、10
C、undefined
D、报错
*/


// 5.请选择输出结果：
var n = 0;

function a() {
    var n = 10;

    function b() {
        n++;
        console.log(n);
    }
    b();
    return b;
}
var C = a();
C();
console.log(n);
