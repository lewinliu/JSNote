<a name="MNvEi"></a>
## 一：选择题
<a name="H7Q1j"></a>
### 1.请选择输出结果：
```javascript
// 1.请选择输出结果：
console.log(a);
var a = 12;

function fn() {
	console.log(a);
	var a = 13;
}
fn();
console.log(a);
/*
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错
*/
```
<a name="lAEkt"></a>
### 2.请选择输出结果：
```javascript
// 2.请选择输出结果：
console.log(b);
var b = 12;

function fn() {
	console.log(b);
	b = 13;
}
fn();
console.log(b);
/*
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错
*/
```
<a name="C3k3M"></a>
### 3.请选择输出结果：
```javascript
// 3.请选择输出结果：
console.log(c);
c = 12;

function fn() {
	console.log(c);
	c = 13;
}
fn();
console.log(c);
/*
A、undefined 12 13
B、undefined undefined 12
C、undefined undefined 13
D、有程序报错:ReferenceError
*/
```
```javascript
/*
变量提升(全局)
function fn(){...};

LET/CONST 等是不进行变量提升的
*/
console.log(1); //=>1 
console.log(d);
// => Uncaught ReferenceError: Cannot access 'a' before initialization
let d = 12;

function fn() {
	/*
	词法解析
	已经知道了在当前私有栈中有一个“LET A”, 此时的私有栈中出现的A都是私有的形参赋值&变量提升
	*/
	console.log(d);
	// => Uncaught ReferenceError: Cannot access ' a' before initialization
	let d = 13;
}
fn();
console.log(d);
// => 在当前作用域下(全局、私有、块作用域)，如果创建变量使用的是LET/CONST等，一定不能在创建代码的前面使用这些变量，否则会报错: ReferenceError: Cannot access 'a' before initialization


// let 所在的大括号是一个块作用域(私有作用域)
if (1 === 1) {
	var x = 12; // => 没有块作用域，还是全局下的a
	let y = 13; // => 有块作用域，是私有块中的b
}
console.log(x); // 12
console.log(y); // Uncaught ReferenceError: y is not defined
```
<a name="nmcxB"></a>
### 4.用let、var声明分别输出什么结果？
```javascript
var foo = 1;
// let foo = 1;
function bar() {
	if (!foo) {
		var foo = 10;
		// let foo = 10; 
	}
	console.log(foo); 
}
bar(); // 思考：用let、var声明分别输出什么结果？
/*
A、1
B、10
C、undefined
D、报错
*/
```
<a name="NeiRC"></a>
### 5.请选择输出结果：
```javascript
// 5.请选择输出结果：
var n = 0;

function a() {
	var n = 10;
	
	function b() {
		n++;
		console.log(n);
	}
	b();
	return b;
}
var C = a();
C();
console.log(n);
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1654997263319-193d813c-4ef9-4082-a727-4819d3d94b5f.png#clientId=uf0712dfb-d93b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=497&id=u5f7e5140&margin=%5Bobject%20Object%5D&name=image.png&originHeight=621&originWidth=1598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=583347&status=done&style=none&taskId=u86df6951-715b-4748-8c98-b0d2e5a47fa&title=&width=1278.4)
<a name="zFCUg"></a>
### 6.请选择输出结果：
```javascript
// 6.请选择输出结果：
var a = 10,
	b = 11,
	c = 12;

function test(a) {
	a = 1;
	var b = 2;
	c = 3;
}
test(10);
console.log(a);
console.log(b);
console.log(c);
/*
A、1 11 3
B、10 11 12
C、1 2 3
D、10 11 3
*/
```
<a name="Mt2hz"></a>
### 7.请选择输出结果：
```javascript
// 7.请选择输出结果：
if (!("a" in window)) {
	var a = 1;
}
console.log(a);
/*
A、1
B、undefined
C、报错
D、以上答案都不对
*/
```
<a name="bXShn"></a>
### 8.请选择输出结果：
```javascript
// 8.请选择输出结果：
var a = 4;

function b(x, y, a) {
	console.log(a);
	arguments[2] = 10;
	console.log(a);
}
a = b(1, 2, 3);
console.log(a);

/*
A、3 3 4
B、3 10 4
C、3 10 10
D、3 10 undefined
*/
```
<a name="daDcc"></a>
###  9.关于赋值时的逻辑与'&&'或'||' ：
```javascript
// 9.请选择输出结果：
var foo = 'hello';
(function (foo) {
	console.log(foo); // 'hello'
	var foo = foo || 'world';
	// foo === 'hello' => true ，return:'hello'
	console.log(foo);
})(foo);
console.log(foo); // 'hello'

/*
A、hello hello hello
B、undefined world hello
C、hello world world
D、以上答案都不正确
*/
```
<a name="c1ijS"></a>
### 10.请选择输出结果：
```javascript
// 10.输出结果为（画图）：
var a = 9;

function fn() {
	a = 0;
	return function (b) {
		return b + a++;
	}
}
var f = fn();
console.log(f(5));
console.log(fn()(5));
console.log(f(5));
console.log(a);
/*
A、6 6 7 2
B、5 6 7 3
C、5 5 6 3
D、以上答案都不正确
*/
```
<a name="srX1i"></a>
## 二：问答题
<a name="emPdA"></a>
### 1.请计算控制台输出结果：
```javascript
// 1.
var ary = [1, 2, 3, 4];

function fn(ary) {
	ary[0] = 0;
	ary = [0];
	ary[0] = 100;
	return ary;
}
var res = fn(ary);
console.log(ary);
console.log(res);
```

<a name="HxIt6"></a>
### 2.请计算控制台输出结果：
```javascript
// 2.
function fn(i) {
	return function (n) {
		console.log(n + (i++));
	}
}
var f = fn(10);
f(20);
fn(20)(40);
fn(30)(50);
f(30);
```

<a name="ksZdj"></a>
### 3.请计算控制台输出结果：
```javascript
// 3.
var i = 10;

function fn() {
	return function (n) {
		console.log(n + (++i));
	}
}
var f = fn();
f(20);
fn()(20);
fn()(30);
f(30);
```
<a name="IHzI5"></a>
### 4.请计算alert()弹出几次？结果？
```javascript
// 4.
var test = (function (i) {
	return function () {
		alert(i *= 2);
	}
})(2);
test(5);
```
<a name="izUHD"></a>
### 5.请计算控制台输出结果：
```javascript
// 5.
var a = 1;
var obj = {
	'name': 'tom'
}

function fn() {
	var a2 = a;
	obj2 = obj;
	a2 = a;
	obj2.name = "jack";
}
fn();
console.log(a);
console.log(obj);
```
<a name="aDdhl"></a>
### 6.变量提升与覆盖
```javascript
// 6.变量提升与覆盖
var a = 1;

function fn(a) {
	console.log(a);
	var a = 2; 
	function a() {}
	console.log(a);
}
fn(a)
console.log(a);
```
```javascript
/*
* 变量提升
*   fn = AF3 (函数是输出3的)
*/
fn(); //=>3
function fn() {
	conso1e.log(1);
}
fn(); //=>3
function fn() {
	console.log(2);
}
fn(); //=>3
var fn = 10; //=>fn = 10
fn(); //=>Uncaught TypeError: fn is not a function
function fn() {
	console.log(3);
}
fn();
```
<a name="NRbQd"></a>
### 7.请计算输出结果（重要、经典题）：
```javascript
// 7.
var a = 0,
	b = 0;

function A(a) {
	A = function (b) {
		alert(a + b++);
	};
	alert(a++);
}
```
<a name="W6npl"></a>
### 8.请写出下列代码的输出结果（this）：
```javascript
// 写出下面代码输出结果
var fullName = 'language';
var obj = {
	fullName: 'javascript',
	prop: {
		getFullName: function () {
			return this.fullName;
		}
	}
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test()); 
```
<a name="A8AGp"></a>
### 9.请写出下列代码的输出结果（this）：
```javascript
var name = 'window';
var Tom = {
    name: "Tom",
    show: function () {
        console.log(this.name);
    },
    wait: function () {
        var fun = this.show;
        fun();
    }
};
Tom.wait();
```
<a name="Ucapl"></a>
### 10.（变量提升 & 闭包 & this）请写出输出结果：
```javascript
var num = 10;
var obj = {
	num: 20
};
obj.fn = (function (num) {
	this.num = num * 3;
	num++;
	return function (n) {
		this.num += n;
		num++;
		console.log(num);
	}
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num);
```
<a name="gVykP"></a>
### 11.360面试题
```javascript
// 360面试题
window.val = 1;
var json = {
	val: 10,
	dbl: function () {
		this.val *= 2;
	}
}
json.dbl();
var dbl = json.dbl;
dbl();
json.dbl.cal1(window);
alert(window.val + json.val);
```
<a name="LqIJp"></a>
### 12.怎么规避多人开发函数重名的问题? (百度搜索)
```javascript
// 怎么规避多人开发函数重名的问题? (百度搜索)
```
<a name="vsHxj"></a>
### 13. prototype 
```javascript
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
        alert(this.a);
    }
}

var my_fun = new fun();
my_fun.b();
my_fun.c();
```
<a name="nVKgi"></a>
### 14.this相关的问题
```javascript
(function () {
	var val = 1;
	var json = {
		val: 10,
		dbl: function () {
			val *= 2;
			// 如果换成下面这行代码，结果如何？
			// this.val *= 2;
		}
	};
	json.dbl();
	alert(json.val + val);
})();
```
<a name="JL67f"></a>
### 15.this相关的问题
<a name="vw5s0"></a>
### 16.this相关的问题

<a name="PgSZl"></a>
## 三：附加思考题(面试题)
<a name="dH9O4"></a>
### 1、以下代码的实现的效果
>     1、以下代码的功能是要实现为5个 input 按钮循环绑定 click 点击事件,绑定完成后点击 1、2、3、4、5 五个按钮分别会alert输出 0、1、 2、 3、 4 五个字符。( 腾讯)
> -     请问如下代码是否能实现?
> -     如果不能实现那么现在的效果是什么样的?
> -     应该做怎样的修改才能达到我们想要的效果,并说明原理? 

```javascript
/* 
1、以下代码的功能是要实现为5个 input 按钮循环绑定 click 点击事件,绑定完成后点击 1、2、3、4、5 五个按钮分别会alert输出 0、1、 2、 3、 4 五个字符。( 腾讯)
    请问如下代码是否能实现?
    如果不能实现那么现在的效果是什么样的?
    应该做怎样的修改才能达到我们想要的效果,并说明原理? 
*/    
	<div id="btnBox">
        <input type="button" value="button_1" />
        <input type="button" value="button_2" />
        <input type="button" value="button_3" />
        <input type="button" value="button_4" />
        <input type="button" value="button_5" />
    </div>

    <script type="text/javascript">
        var btnBox = document.getElementById('btnBox'),
            inputs = btnBox.getElementsByTagName('input');
        var l = inputs.length;
        /* 
        // 方式一:自定义属性（推荐）
        for (var i = 0; i < l; i++) {
            inputs[i].index = i;
            inputs[i].onclick = function () {
                alert(this.index);
            }
        } */

        // // 闭包(不推荐，性能差)
        // for (var i = 0; i < l; i++) {
        //     // // 闭包一：
        //     // ~function (i) {
        //     //     inputs[i].onclick = function () {
        //     //         alert(i);
        //     //     }
        //     // }(i);

        //     // 闭包二：
        //     inputs[i].onclick = function(i){
        //         return function(){
        //             alert(i);
        //         }
        //     }(i);
        // }

        /* 
        // let 的方法和闭包的方法原理类似，都是每一轮循环产生一个私有的作用域(let块作用域)，保存住当前循环i的值，供后期调取使用
        for (let i = 0; i < buttons.length; i++) {
            let item = buttons[i];
            item.onclick = function () {
                alert(i);
            }
        } */


        // 数组方式
        [].forEach.call(inputs, (item, index) => {
            item.onclick = function () {
                alert(index);
            }
        });


    </script>
```
<a name="EmfRu"></a>
### 2、document.parentNode 和 document.parentnode 的区别? (腾讯)
```javascript
// 2、document.parentNode 和 document.parentnode 的区别? (腾讯)
	JS严格区分大小写，不存在 parentnode;
	如果父元素不存在： null 和 undefined 的区别;
	null 是没有元素， undefined 是找不到该属性;
```
<a name="vFjlI"></a>
### 3、你理解的闭包作用是什么,优缺点? 
```javascript
// 3、你理解的闭包作用是什么,优缺点? 

```
<a name="mgyez"></a>
### 4、简述 let 和 var 的区别。
```javascript
// 4、简述 let 和 var 的区别。

let VS var
    1. 1et没有变量提升(但是在词法解析阶段也得知某个变量是否是私有变量)
    2. let不允许在相同的作用域下重复声明
    3. let解决了JS中的暂时性死区问题
    4.let创建的全局变量没有给window设置对应的属性
    5.1et会产生块级作用域
    ...
```



<a name="AqdHs"></a>
## 逻辑或'||' 和 逻辑与'&&'的应用
<a name="E8L2h"></a>
### 1、|| 和 && 在赋值操作中的意义
```javascript
// 逻辑或|| 和逻辑与&&在赋值操作中的意义
// A||B :先验证A的真假，如果A为真，返回的是A的值，如果A为假返回的是B的值
// A&&B : A为真返回B的值，A为假返回A的值
// &&的优先级高于||

// 输出结果为：
let a = 0 || false;
console.log(a); //=>FALSE
a = 1 | false;
console.log(a); //=>1
a = 1 && 100;
console.log(a); //=>100
a = 0 && 100;
console.log(a); //=>0
a = 0 || 1 && 2 || 3;
// => 先算1&&2 => 0||2||3 => 再算0||2 => 2 => 最后2||3 => 2
console.log(a); //=>2
```
<a name="Ojxf1"></a>
### 2、|| 和 && 在条件判断的应用
```javascript

// 逻辑或|| 和逻辑与&& 在条件判断的应用
function fn(x, callback) {
    // typeof x === 'undefined' ? x = 0 : null;
    x = x || 0;

    // callback 代表回调函数(传递的是个函数) :我们需要保证它是一个函数才能执行
    typeof callback === 'function' ? callback() : null;
    callback && callback();
}
fn();
fn(10);
fn(10, function () {});
```

//
<a name="RuokO"></a>
## 闭包作用域
<a name="oDK2A"></a>
### 1.开胃题
```javascript
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var C = fun(0).fun(1);
C.fun(2);
C.fun(3);
```

<a name="esHbQ"></a>
## 原型练习题
<a name="sguK3"></a>
### 1.原型、原型链
```javascript
/*
 * @Author: LLW
 * @Date: 2022-06-15 16:08:37
 * @Description: 原型相关练习题
 */
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
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1655361535565-f6f362bd-34ed-49db-b262-972cf4e665a0.png#clientId=u041405d0-c83e-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=502&id=YFANF&margin=%5Bobject%20Object%5D&name=image.png&originHeight=627&originWidth=1600&originalType=binary&ratio=1&rotation=0&showTitle=false&size=578425&status=done&style=none&taskId=ue693ea0b-26d1-465e-b342-3675c848f04&title=&width=1280)
<a name="BUABP"></a>
### 2.重构类的原型
```javascript
// 2.原型重定向

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
my_fun.b()
my_fun.c()
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1655441936018-4ec6c0e3-efbe-4ffe-9351-7cd9169fec8c.png#clientId=uede5ba2e-be08-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=502&id=YFVqC&margin=%5Bobject%20Object%5D&name=image.png&originHeight=628&originWidth=1593&originalType=binary&ratio=1&rotation=0&showTitle=false&size=520780&status=done&style=none&taskId=u636b25ae-8f10-4cbc-be17-81f1a6e0780&title=&width=1274.4)
<a name="jZQvY"></a>
### 3.原型相关问题
```javascript
// 3.
function C1(name) {
    if (name) {
        this.name = name;
    }
}

function C2(name) {
    this.name = name;
}

function C3(name) {
    this.name = name || 'join';
}
C1.prototype.name = 'Tom';
C2.prototype.name = 'Tom';
C3.prototype.name = 'Tom';

alert((new C1().name) + (new C2().name) + (new C3().name));
```
<a name="AerJy"></a>
### 4.原型重构、原型链
```javascript
// 4.
function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum);
f.sum();
Fn.prototype.sum();
console.log(f.constructor);
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1655449739640-798b9094-4e08-417c-b43d-71dcbd79c53f.png#clientId=uede5ba2e-be08-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=501&id=a3hYu&margin=%5Bobject%20Object%5D&name=image.png&originHeight=626&originWidth=1604&originalType=binary&ratio=1&rotation=0&showTitle=false&size=476538&status=done&style=none&taskId=u9bb96863-5d93-4dbf-9014-e14d37e1d7f&title=&width=1283.2)

<a name="oTlpu"></a>
### 5.原型重定向 & 原型链
```javascript
// 5.
function Fn() {
    leta = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
}
Fn.prototype = new Fn;
let f1 = new Fn;
Fn.prototype.b = function () {
    this.a = 3;
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f1.hasownProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1655451690371-9f827c78-7b9e-462c-bfb2-dc222987a547.png#clientId=u7fa71d08-b8e0-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=505&id=xsHsP&margin=%5Bobject%20Object%5D&name=image.png&originHeight=631&originWidth=1599&originalType=binary&ratio=1&rotation=0&showTitle=false&size=315424&status=done&style=none&taskId=u91e6f904-7243-429f-abb5-c656d56d9a3&title=&width=1279.2)
<a name="aBHSr"></a>
### 6.编写两个方法plus / minus实现如下的执行效果
```javascript
let n = 10;
let m=n.plus(10).minus(5);
console.log(m); // => 15 (10+10-5)
```

<a name="j6vCs"></a>
### 7.阿里超经典面试题(超有难度，可以暂时先不做,看看)
```javascript
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
```
![函数的三种角色之清明上河图.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1655541915893-2c55a48b-6fc1-42ea-9dd5-b773c27eb1ee.png#clientId=u0e4d3fee-1315-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=242&id=u3807e3ad&margin=%5Bobject%20Object%5D&name=%E5%87%BD%E6%95%B0%E7%9A%84%E4%B8%89%E7%A7%8D%E8%A7%92%E8%89%B2%E4%B9%8B%E6%B8%85%E6%98%8E%E4%B8%8A%E6%B2%B3%E5%9B%BE.png&originHeight=302&originWidth=1614&originalType=binary&ratio=1&rotation=0&showTitle=false&size=432015&status=done&style=none&taskId=u0832d466-2f93-45a4-adb8-be3847b7aa4&title=&width=1291.2)
<a name="ztRrN"></a>
### 8.
<a name="mTvzF"></a>
# 1
<a name="Z5qRD"></a>
## 2
<a name="e1ath"></a>
### 3
<a name="Lk5so"></a>
#### 4
<a name="U05rN"></a>
### 3
<a name="XrbGY"></a>
#### 4
<a name="Sx1NM"></a>
### 3
<a name="abG0N"></a>
#### 4
<a name="sF8pp"></a>
## 2
<a name="guYie"></a>
### 3
<a name="zL3xd"></a>
#### 4

