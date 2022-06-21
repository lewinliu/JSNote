/*
 * @Author: LLW
 * @Date: 2022-06-21 08:04:44
 * @Description: ES6中类的创建
 */


// => ES6中类的创建
class Fn {
    // 等价于之前的构造函数体
    constructor() {
        this.x = 100;
    }
    // 直接写的方法就是加在原型上的
    getx() {
        console.log(this.x);
    }
    // 前面设置static的:把当前Fn当做普通对象设置的键值对，
    static queryX() {}
	
    
}
// 也可以在外面单独这样写
Fn.prototype.getY = function () {}

let f = new Fn(10, 20);
f.getx();
Fn.queryX();

Fn(); // => Uncaught TypeError: Class constructor Fn cannot be invoked without 'new' => class 创建的类只能new执行，不能当做普通函数执行;
