/*
 * @Author: LLW
 * @Date: 2022-06-15 15:22:56
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 16:06:31
 * @Description: 
 * 
 *  基于内置类的原型扩展方法:
 *      在内置类原型上的方法，类所对应的实例可以直接调取使用，例如：实例.方法()、ary.push();
 *      如果我们也把自己写的方法放到原型.上,那么当前类的实例也可以直接这样调取使用了，很方便;
 * 
 *  但是也有需要注意的地方:
 *      1.自己扩展的方法不能影响原有内置的方法(我们自己设置的方法最好加前缀:my);
 *      2.扩展方法中的 this 一般都是当前类的实例(也就是要操作的值)：实例.方法();

 */

~ function () {
    /**
     * 数组去重
     * @returns 
     *  [Array] 去重后的数组
     */
    function myUnique() {
        let obj = {};
        _this = this;
        for (let i = 0; i < _this.length; i++) {
            let item = _this[i];
            if (typeof obj[item] !== 'undefined') {
                _this[i] = _this[_this.length - 1];
                _this.length--;
                i--;
                continue;
            }
            obj[item] = item;
        }
        obj = null;
        // 保证当前方法执行完返回的结果依然是 Array 类的一个实例
        return _this;
    }
    // 将此方法扩展到原型上
    Array.prototype.myUnique = myUnique;
}();


let ary = [12, 23, 13, 12, 23, 24, 34, 13, 23];
// ary.myUnique();
// ary.sort((a, b) => a - b); // 返回排序后的数组

// => 链式写法(保证返回值依然是当前类的实例，一般都会 return this)
ary.myUnique().sort((a, b) => a - b).reverse().slice(2).push('链式写法');

console.log(ary);







// // 错误示范，不能覆盖原来的方法
// // 覆盖JS自带的 push 方法
// Array.prototype.push = function () {
//     console.log("哈哈哈");
// }
// let ary = [1, 2, 3];
// ary.push(100); //=>"哈哈哈'
// console.log(ary); //=> 数组没变
