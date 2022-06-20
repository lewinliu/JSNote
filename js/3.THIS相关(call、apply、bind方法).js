/*
 * @Author: LLW
 * @Date: 2022-06-19 09:56:14
 * @Description: THIS相关
 */

/*
console.dir(Function.prototype);
    ƒ anonymous()
    apply: ƒ apply()
    arguments: (...)
    bind: ƒ bind()
    call: ƒ call()
    caller: (...)
    constructor: ƒ Function()
    length: 0
    name: ""
    toString: ƒ toString()
    Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()
    get arguments: ƒ ()
    set arguments: ƒ ()
    get caller: ƒ ()
    set caller: ƒ ()
    [[FunctionLocation]]: ​
    [[Prototype]]: Object
    [[Scopes]]: Scopes[0]
*/


/*
    THIS
        每一个函数(普通函数/构造函数/内置类)都是Function这个内置类的实例，所以:函数.__proto__===Function.prototype ,函数可以直接调取Function原型上的方法
*/

//Function.prototype => function anonymous() {}

/*
    call / apply / bind
        原型上提供的三个公有属性方法
        每一个函数都可以调用这个方法执行
        这些方法都是用来改变函数中的THIS指向的
*/
// function fn() {}
// fn.call(); //=>fn函数基于原型链找到 Function.prototype 上的 call 方法，并且让其执行(执行的是 call 方法)
// fn.call.call(); //=>fn.call 就是 Function.prototype 上的 call 方法，也是一个函数，只要是函数就能用原型上的方法，所以可以继续调用 call 来执行


// Function.prototype.call = function $1() {
//     //...
// }
// fn.call => $1
// fn.call() => $1()
// this: fn
// fn.cal1.call() => $1.call() => 继续让 call 执行， this: $1


/*
实例.方法():
    都是找到原型上的内置方法，让内置方法先执行(只不过执行的时候做了一些事情会对实例产生改变，而这也是这些内置方法的作用)，内置方法中的THIS一般都是当前操作的实例
*/


/*
call 方法
    语法:函数.call([context],[params],...)

    函数基于原型链找到Function.prototype.call这个方法,并且把它执行,在call方法执行的时候完成了一些功能
        1.让当前函数执行
        2.把函数中的 this 指向改为第一个传递给call的实参
        3.把传递给call其余的实参当做参数信息传递给当前函数
    
    如果执行 call 一个实参都没有传递,非严格模式下是让函数中的 this 指向 window,严格模式下指向的是 undefined
*/
// window.name = 'WINDOW';
// let obj = {
//     name: 'OBJ'
// }
// let fn = function (n, m) {
//     console.log(this.name);
// };
// fn(); //=>this:window //=> 'WINDOW'
// fn(10, 20); //=>this:window 严格下是undefined
// fn.call(obj); //=>this:obj n/m=undefined
// fn.call(obj, 10, 20); //=>this:obj n=10 m=20
// fn.call(); //=>this:window 严格下是undefined
// fn.call(null); //=>this:window 严格下是null (第一个参数传递的是null/undefined/不传，非严格模式下thi s指向window,严格模式下传递的是谁this就是谁，不传this是undefined)

/*
需求：
    让fn函数输出'OBJ'；
*/
// obj.fn(); //=>Uncaught TypeError: obj.fn is not a function 
// 因为此时obj中并没有fn这个属性

// 方法一：
/* 
obj.fn = fn;
obj.fn(); // =>this:obj //=> 'OBJ'
delete obj.fn; // 执行完再删除
console.log(obj); 
*/

// // 方法二：
// fn.call(obj);



/**
    apply方法:
        和call方法一样,都是把函数执行,并且改变里面的this关键字的,唯一的区别就是传递给函数的参数方式不同
            ● call是一个个传参
            ● apply是按照数组传参
 */

// let obj = {
//     name: 'OBJ'
// };
// let fn = function (n, m) {
//     console.log(this.name);
// }
// //=>让fn方法执行,让方法中的this变为obj,并且传递 10 & 20;
// fn.call(obj, 10, 20);
// fn.apply(obj, [10, 20]);




/*
    bind方法
        和call/apply一样,也是用来改变函数中的this关键字的,只不过基于bind改变this ,当前方法并没有被执行,类似于预先改变this
*/
let obj = {
    name: 'OBJ'
};

function fn() {
    console.log(this.name);
}
document.body.onc1ick = fn; //=> 当事件触发，fn中的this :body
// => 点击BODY，让FN中的THIS指向OBJ
// document.body.onclick=IFn. call(obj); 
// => 基于 call/apply 这样处理，不是把fn绑定给事件，而是把fn执行后的结果绑定给事件

document.body.onclick = function () {
    //this:BODY
    fn.call(obj);
}

document.body.onclick = fn.bind(obj); // => bind的好处是: 通过bind方法只是预先把fn中的this修改为obj,此时fn并没有执行呢，当点击事件触发才会执行fn (call/apply 都是改变this的同时立即把方法执行) 
// => 在IE6~8中不支持bind方法
// 预先做啥事情的思想被称为'柯理化函数'
