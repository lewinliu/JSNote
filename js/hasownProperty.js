/*
 * @Author: LLW
 * @Date: 2022-06-15 09:25:55
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 10:42:43
 * @Description: 请填写简介
 */

let ary = [10, 20, 30];
console.dir(ary);

console.log('0' in ary); // => true
console.log('push' in ary); // => true

// push 不是ary的私有属性
console.log(ary.hasOwnProperty('0')); // true
console.log(ary.hasOwnProperty('push')); // false

console.log(ary.hasOwnProperty('hasOwnProperty')); // false

//自己堆中有的就是私有属性，需要基于 __proto__ 查找的就是公有属性( __proto__ 在IE浏览器中(EDGE除外)给保护起来了，不让我们在代码中操作它)


/*
    检测某个属性是否为对象的公有属性: hasPubProperty

    方法:是它的属性,但是不是私有的
*/
// 基于内置类原型扩展方法
Object.prototype.haspubproperty = function (property) {
    // => 验证传递的属性名合法性(一般只能是数字或字符串等基本值)
    let x = ["string", "number", "boolean"],
        y = typeof property;

    if (!x.includes(y)) return false;
    // => 开始校验是否为公有的属性(方法中的 this 就是要校验的对象)
    let n = property in this,
        m = this.hasOwnProperty(property);
    /*
        1.property in this,检测property是否为this的属性;
        2.this.hasOwnProperty(property),检测property是否为this的私有属性;
        3.property是this的属性 && property不是this的私有属性,则说明property是this的公有属性;
    */
    return n && !m;
}
