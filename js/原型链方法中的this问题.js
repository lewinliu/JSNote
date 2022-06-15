/*
 * @Author: LLW
 * @Date: 2022-06-15 14:40:24
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 15:14:42
 * @Description: 原型链方法中的this问题
 */

function Fn() {
    // => this:f1这个实例
    this.x = 100;
    this.y = 200;
    this.say = function () {
        console.log(this.x);
    }
}
Fn.prototype.say = function () {
    console.log(this.y);
}
Fn.prototype.eat = function () {
    console.log(this.x + this.y);
}
Fn.prototype.write = function () {
    this.z = 1000;
}

let f1 = new Fn;

f1.say();
// => this:f1 => console.log(f1.x) => 100
f1.eat();
// => this:f1 => console.log(f1.x + f1.y) => 300
f1.__proto__.say();
// => this:f1.__proto__ => console.log(f1.__proto__.y) => undefined
Fn.prototype.eat();
//=>this :Fn.prototype =>console.log(Fn.prototype.x + Fn.prototype.y) => NaN
f1.write();
// => this:f1 => f1.z=1000 => 给f1设置:一个私有的属性z=1000
Fn.prototype.write();
// => this: Fn.prototype => Fn.prototype.z=1000 =>给原型上设置一个属性 z=1000 (属性是实例的公有属性)


/**
 * 面向对象中有关私有/公有方法中的 this 问题
 *   1.方法执行，看前面是否有点，点前面是谁 this 就是谁
 *   2.把方法总的 this 进行替换
 *   3.再基于原型链查找的方法确定结果即可
 */
