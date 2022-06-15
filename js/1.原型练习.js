/*
 * @Author: LLW
 * @Date: 2022-06-15 16:08:37
 * @Description: 原型相关练习题
 */

// 1. 
function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    console.log(this.x);
};
Fn.prototype.getY = function () {
    console.log(this.y);
};
let f1 = new Fn;
let f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getx === Fn.prototype.getx);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getx();
f2.getY();
Fn.prototype.getY();



// => 基于 constructor 实现数据类型检测就是这样来玩的
// 但是这种方式有很大的弊端:因为用户可以去随意修改对应的 constructor 值或者是手动给ARY增加一个私有的 constructor 属性等
let ary = [];
if (ary.constructor === Array) {
    // 是数组
} else {
    // 不是数组
}
