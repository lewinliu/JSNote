/*
 * @Author: LLW
 * @Date: 2022-06-15 16:08:37
 * @Description: 原型相关练习题
 */

// // 1. 
// function Fn() {
//     this.x = 100;
//     this.y = 200;
//     this.getX = function () {
//         console.log(this.x);
//     }
// }
// Fn.prototype.getX = function () {
//     console.log(this.x);
// };
// Fn.prototype.getY = function () {
//     console.log(this.y);
// };
// let f1 = new Fn;
// let f2 = new Fn;
// console.log(f1.getX === f2.getX);
// console.log(f1.getY === f2.getY);
// console.log(f1.__proto__.getY === Fn.prototype.getY);
// console.log(f1.__proto__.getX === f2.getX);
// console.log(f1.getx === Fn.prototype.getx);
// console.log(f1.constructor);
// console.log(Fn.prototype.__proto__.constructor);
// f1.getX();
// f1.__proto__.getx();
// f2.getY();
// Fn.prototype.getY();



// // => 基于 constructor 实现数据类型检测就是这样来玩的
// // 但是这种方式有很大的弊端:因为用户可以去随意修改对应的 constructor 值或者是手动给ARY增加一个私有的 constructor 属性等
// let ary = [];
// if (ary.constructor === Array) {
//     // 是数组
// } else {
//     // 不是数组
// }


/* // 2.原型重定向

function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    }
}
fun.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a)
    }
}
var my_fun = new fun();
my_fun.b();
my_fun.c();
 */


// // 3.
// function C1(name) {
//     if (name) {
//         this.name = name;
//     }
// }

// function C2(name) {
//     this.name = name;
// }

// function C3(name) {
//     this.name = name || 'join';
// }
// C1.prototype.name = 'Tom';
// C2.prototype.name = 'Tom';
// C3.prototype.name = 'Tom';

// alert((new C1().name) + (new C2().name) + (new C3().name));
// // 'Tom' + 'undefined' + 'join'
// // 'Tomundefinedjoin'




// // 4.
// function Fn(num) {
//     this.x = this.y = num;
// }
// Fn.prototype = {
//     x: 20,
//     sum: function () {
//         console.log(this.x + this.y);
//     }
// };
// let f = new Fn(10);
// console.log(f.sum === Fn.prototype.sum);
// f.sum();
// Fn.prototype.sum();
// console.log(f.constructor);

// Fn.prototype.constructor;
// Fn.prototype.__proto__;


// // 5.
// function Fn() {
//     leta = 1;
//     this.a = a;
// }
// Fn.prototype.say = function () {
//     this.a = 2;
// }
// Fn.prototype = new Fn;
// let f1 = new Fn;
// Fn.prototype.b = function () {
//     this.a = 3;
// };
// console.log(f1.a);
// console.log(f1.prototype);
// console.log(f1.b);
// console.log(f1.hasownProperty('b'));
// console.log('b' in f1);
// console.log(f1.constructor == Fn);



// // 6.编写两个方法 plus / minus 实现如下的执行效果
// /*
// let n = 10;
// let m = n.plus(10).minus(5);
// console.log(m); // => 15 (10+10-5)
// */
// /**
//  * 问题分析：
//  *      1.数字调用的方法，Number类；
//  *      2.链式调用；
//  */
// ~ function () {

//     /**
//      * 返回两数相加的和
//      * @param {*} num 数字类型,要加上的数字； 
//      * @returns this;
//      */
//     function plus(num) {
//         let _this = this;
//         return _this += checkX(num);
//     }

//     /**
//      * 返回两数想减后的值
//      * @param {*} num 数字类型,要减去的数字；
//      * @returns 
//      */
//     function minus(num) {
//         let _this = this;
//         return _this -= checkX(num);
//     }

//     /**
//      * 检查 x 是否为有效数字
//      * @param {*} x 
//      * @returns x
//      */
//     function checkX(x) {
//         x = Number(x);
//         return isNaN(x) ? 0 : x;
//     }

//     /**
//      * 将方法扩展到 Number 
//      * 
//      */
//     Number.prototype.plus = plus;
//     Number.prototype.minus = minus;

// }();

// let n = 10;
// let m = n.plus(10).minus(8);
// console.log(m);



/**
 * 7.阿里超经典面试题(超有难度，可以暂时先不做,看看)
 */
function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}

Foo.getName = function () {
    console.log(2);
};

Foo.prototype.getName = function () {
    console.log(3);
};

var getName = function () {
    console.log(4);
};

function getName() {
    conso1e.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
