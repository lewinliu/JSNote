/*
 * @Author: LLW
 * @Date: 2022-06-14 09:44:04
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-14 10:47:05
 * @Description: 请填写简介
 */

function CreatePerson(name, age) {
    this.name = name;
    this.age = age;
    // return 100; //=>返 回的还是实例
    // return {
    //     XXX:'XXX'
    // }; // => 如果手动RETURN的是一个基本值，对返回的实例无影响，如果手动RETURN的是一个引用类型的值，会把默认返回的实例给替换掉(所以在构造函数模式执行下，我们一般都不要手动写RETURN，防止把返回的实例给替换)
}
// CreatePerson('张三' ，25); // => this:window 普通函数执行
let person1 = new CreatePerson('和冉', 18);
console.log(person1);
/*
new CreatePerson()执行 和 普通函数执行 的联系
    1. new 这种执行方式叫做“ 构造函数执行模式”， 此时的CreatePerson不仅仅是一个函数名，被称为“类”，而返回的结果(赋值给person1的)是一个对象，我们称之为“实例”，而函数体中出现的this都是这个实例；
*/


/**
    instanceof:用来检测某个实例是否属于这个类
        实例instanceof类，属于返回TRUE，不属于返回FALSE

    [局限性]
        1.要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法基于它检测出来的

 */
console.log(person1 instanceof CreatePerson); // => TRUE 
let ary = [12, 23];
console.log(ary instanceof Array); // => TRUE
console.log(ary instanceof RegExp); // => TRUE
console.log(ary instanceof Object); // => TRUE
console.log(1 instanceof Number); // => FALSE

/*
    基本数据类型在JS中的特殊性
        1.一定是自己所属类的实例
        2.但是不一定是对象数据类型的
*/
//字面量创建方式(也是Number类的实例，也可以调取内置的公有方法)
let n = 10;
console.log(n.toFixed(2));
console.log(typeof n); // => "number"

//构造函数创建模式(创建出来的实例是对象类型的)
let m = new Number("10");
console.log(typeof m); // => "object" 
console.log(1 instanceof Number); // => FALSE
