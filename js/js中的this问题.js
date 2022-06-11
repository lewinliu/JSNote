/*
 * @Author: LLW
 * @Date: 2022-06-11 14:41:39
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-11 15:11:30
 * @Description: 请填写简介
 */

/* 
var name = 'hello,world!';

function fn() {
    console.log(this.name);
}
var obj = {
    name: "你好,世界",
    fn: fn
};
obj.fn(); // "你好,世界"
// => this:obj
fn(); // 'hello,world!'
// => this:window (非严格模式，严格模式下是undefined) window.fn() 把 window.省略了 

*/

/* 
(function () {
    //自执行函数中的 this 是 window 或 undefined 
})();
 */

// a.b.c.d() => d()的 this 是 a.b.c 

/* 
let obj = {
    fn: (function (n) {
        //把自执行函数执行的返回结果赋值给fn
        //this :wi ndow
        return function () {
            //=>fn等于这个返回的小函数
            //this:obj
        };
    })(10)
};
obj.fn();
 */

function fn() {
    // this：window
    // [object Window]
    console.log('fn(): ' + this);
}
document.body.onmousemove = function () {
    // this：document.body
    // [object HTMLBodyElement]
    console.log('document.body.onmousemove: ' + this);
    fn();
}
