/*
 * @Author: LLW
 * @Date: 2022-06-14 09:44:04
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-14 16:01:53
 * @Description: 请填写简介
 */

// function CreatePerson(name, age) {
//     this.name = name;
//     this.age = age;
//     // return 100; //=>返 回的还是实例
//     // return {
//     //     XXX:'XXX'
//     // }; // => 如果手动RETURN的是一个基本值，对返回的实例无影响，如果手动RETURN的是一个引用类型的值，会把默认返回的实例给替换掉(所以在构造函数模式执行下，我们一般都不要手动写RETURN，防止把返回的实例给替换)
// }
// // CreatePerson('张三' ，25); // => this:window 普通函数执行
// let person1 = new CreatePerson('和冉', 18);
// console.log(person1);
// /*
// new CreatePerson()执行 和 普通函数执行 的联系
//     1. new 这种执行方式叫做“ 构造函数执行模式”， 此时的CreatePerson不仅仅是一个函数名，被称为“类”，而返回的结果(赋值给person1的)是一个对象，我们称之为“实例”，而函数体中出现的this都是这个实例；
// */



// // ===================================



// /**
//     instanceof:用来检测某个实例是否属于这个类
//         实例instanceof类，属于返回TRUE，不属于返回FALSE

//     [局限性]
//         1.要求检测的实例必须是对象数据类型的，基本数据类型的实例是无法基于它检测出来的

//  */
// console.log(person1 instanceof CreatePerson); // => TRUE 
// let ary = [12, 23];
// console.log(ary instanceof Array); // => TRUE
// console.log(ary instanceof RegExp); // => TRUE
// console.log(ary instanceof Object); // => TRUE
// console.log(1 instanceof Number); // => FALSE

// /*
//     基本数据类型在JS中的特殊性
//         1.一定是自己所属类的实例
//         2.但是不一定是对象数据类型的
// */
// //字面量创建方式(也是Number类的实例，也可以调取内置的公有方法)
// let n = 10;
// console.log(n.toFixed(2));
// console.log(typeof n); // => "number"

// //构造函数创建模式(创建出来的实例是对象类型的)
// let m = new Number("10");
// console.log(typeof m); // => "object" 
// console.log(1 instanceof Number); // => FALSE





// // ===================================


// function Fn(n) {
//     let m = 10;
//     this.total = n + m;
//     this.say = function () {
//         console.log(this.total);
//     };
// }

// let f1 = new Fn(10); // f1.total = 20
// let f2 = new Fn(20); // f2.total = 30
// let f3 = new Fn; // => new的时候不论是否加小括号，都相当于把Fn执行了，也创建了对应的实例，只不过不加小括号是不能传递实参的(当前案例中的形参n=undefined)


// console.log(f1.m); // undefined
// console.log(f2.n); // undefined
// console.log(f1.total); // 20
// console.log(f2.say()); 
// // 30
// // undefined
// // 先输出30，再输出undefined，因为 f2.say() 没有返回值；
// console.log(f1 === f2);  // false

// console.log(f3.total); // NaN
//     // => this.total = n + m;
//     // => f4.total = undefined + 10;
//     // => this.total = NaN;



// // ===================================

/*
    原型和原型链最基础的模型
*/
function Fn() {
    /*
    new 执行也会把类当做普通函数执行(当然也有类执行的一面)
        1.创建一个私有的栈内存;
        2.形参赋值&变量提升;
        3.浏览器创建一个对象出来(这个对象就是当前类的一个新实例) , 并且让函数中的 this 指向这个实例对象 => “构造函数模式中，方法中的 this 是当前类的实例”;
        4.代码执行;
        5.在我们不设置 return 的情况下，浏览器会把创建的实例对象默认返回;
    */
    this.x = 100;
    this.y = 200;
    this.say = function () {};

}
let f1 = new Fn();
let f2 = new Fn();

console.log(Fn.prototype.constructor === Fn);

