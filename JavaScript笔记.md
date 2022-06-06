<a name="d8c924d5"></a>
### sh常用的浏览器

- webkit 内核(V8 引擎) 
   - 谷歌 Chrome
   - Safari
   - Opera >=V14
   - 国产浏览器
   - 手机浏览器
- Gecko 
   - 火狐 Firefpx
- Presto 
   - Opera <V14
- Trident 
   - IE
   - IEEDGE 开始采用双内核(其中包含 chrome 迷你)

<a name="eba038a9"></a>
### 谷歌浏览器的控制台(F12/Fn+F12)

- Elements: 查看结构样式，可以修改这些内容
- Console: 查看输出结果和报错信息，是 JS 调试的利器
- Sources: 查看项目源码
- Network: 查看当前网站所有资源的请求信息(包括和服务器传输的 HTTP 报文信息)、加载时间等(根据加载时间进行项目优化)
- Application: 查看当前网站的数据存储和资源文件(可以盗图)

<a name="3e6286c5"></a>
### JS 做客户端语言

- ECMAScript3/5/6...: JS 的语法规范(变量、数据类型、操作语句<br />等等)
- DOM ( document object model): 文档对象模型，提供一些 JS 的<br />属性和方法，用来操作页面中的 DOM 元素
- BOM (browser object model) ：浏览器对象模型，提供一些 JS 的<br />属性和方法，用来操作浏览器的

<a name="7ea192a4"></a>
### JS 中的变量 variable

> 变量:可变的量，在编程语言中，变量其实就是一一个名字，用来存储和代表不同值的东西


```javascript
// ES3
var a=12;
a =13;
console.log(a); //=>输出的是a代表的值13;

// ES6
let b = 100;
b = 200;

const C = 100;
c = 200; // =>报错: CONST创建的变量，存储的值不能被修改(可以理解为常量)

// 创建函数也相当于在创建变量
function fn(){ }
// 创建类也相当于创建变量
class A{ }
// ES6的模块导入也可以创建变量
import B from ' ./B.js';
// Symbol创建唯一值
let n=Symbol(100);
let m=Symbol(100);
// n==m  --> false
```

<a name="f879b813"></a>
### JS 中的命名规范

-  **严格区分大小写 **
```javascript
let Test=100;
console. log(test);// =>无法输出，因为第一个字母小写了

// 使用数字、字母、下划线、$，数字不能作为开头
let $box; // =>一般用JQ获取的以$开头
let .box; // =>一般公共变量都是_开头
let 1box; // =>不可以，但是可以写box1
```
 

-  **使用驼峰命名法:首字母小写，其余每一个有意义单词的首字母都要大写(命名尽可能语义化明显，使用英文单词) **
```javascript
let student Information;
let studentInfo;
// 常用的缩写: add/ insert/ create/new (新增)、update ( 修改)、delete/del/remove/rm(删除)、sel/select/query/get(查询)、info(信息)

//不正确的写法
let xueshengInfo;
let xueshengxinxi;
let xsxx;
```
 

-  **不能使用关键字和保留字 **
```javascript
// 当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字(? )

var let const function

var var10 = 10; // =>语法没问题，但是不规范

// =>代码强迫症(代码洁癖) :良好的编程习惯、极客精神
```
 

<a name="d7c3bb65"></a>
### JS 中常用的数据类型

> 在 JavaScript 中，共有七种基本数据类型：string、number、bigint、boolean、null、undefined、symbol。


-  基本数据类型 
   - 数字 number 
      - 常规数字和 NaN
   - 字符串 string 
      - 所有用单引号、双引号、反引号（撇）包起来的都是字符串
   - 布尔 boolean 
      - true/false
   - 空对象指针 null
   - 未定义 undefined
   - 长整型数字 bigint
   - 唯一值 Symbol 
      - ES6 标准种新增的 symbol 的值是通过 Symbol() 函数生成，每一个 symbol 的值都是唯一的，并且 symbol 类型的值可以作为对象的属性标识符使用
-  引用数据类型 
   - 对象数据类型 object 
      - {}普通对象
      - []数组对象
      - /^[+-]?(\d|([1-9]\d+))(\. \d+)?$/正则对象
      - 日期对象
      - ...
   - 函数数据类型 function 
      - function
- <br />

<a name="22dd1068"></a>
## number 数字类型

> 包含:常规数字、NaN


<a name="NaN"></a>
### NaN

> not a number: 不是一个数，但它属于数字类型


```javascript
// NaN和任何值(包括自己)都不相等: 
NaN!=NaN	// true
// 所以我们不能用相等的方式判断是否为有效数字
```

<a name="isNaN"></a>
### isNaN

> 检测一个值是否为非有效数字，如果不是有效数字返回 TRUE，反之是有效数字返回 FALSE


```javascript
//在使用isNaN()进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()这个方法，把值转换为数字类型，然后再检测
isNaN(Number('123')) // true
```

<a name="20c70a85"></a>
### Number

> 把字符串转换为数字，只要字符串中包含任意一个非有效数字字符(第一个点除外)结果都是 NaN,空字符串会变为数字零


```javascript
console.log(Number('123.4')); //123.4
console.log(Number('123.4px')); // NaN
console.log(Number('123.4.5')); // NaN
console.log(Number('')); //0
```

- 在使用 isNaN 进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于 Number()这个方法，把值转换为数字类型，然后再检测

<a name="16ca7ebe"></a>
### 把其它类型值转换为数字类型

- Number([val])
- parseInt/parseFloat([va1], [进制]): 也是转换为数字的方法，对于字符串来说，**它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找**(不管后面是否还有数字，都不在找了)，**把找到的当做数字返回**
- ==进行转化的时候，可能出现把其他类型值转换为数字

<a name="9f7ea7a4"></a>
### 把其它类型值转换为字符串

- [val].toString()
- 字符串拼接，如：123+"456" // "123456"

<a name="2f594743"></a>
## boolean 布尔数据类型

> 只有两个值 true/false


<a name="849a1309"></a>
### 把其它类型值转换为布尔类型

> 只有 0、NaN、""、null、undefined 五个值转换为 false， 其余都转换为 true。(而且没有任何的特殊情况)


- Boolean([val])
- !/!!
- 条件判断

<a name="ffa597b0"></a>
### 测试题

```javascript
let a = 10 + null + true + [] + undefined + '明明' + null + [] + 10 + false;
console.log(a);
/*
10+null -> 10+0->10
10+true -> 10+1->11
11+[] -> 11+'' -> '11'
空数组变为数字，先要经历变为空字符串，遇到字符串，啥都别想了，直接变为字符串拼接
'11undefined明明null10false'
*/
```


<a name="23b6a475"></a>
## null / undefined

> null 和 undefined 都代表的是没有


- null: 意料之中(一般都是开始不知道值，我们手动先设置为 null， 后期再给予赋值操作)

```javascript
let num = null; // => let num = 0; 一般最好用null作为初始的空值，因为零不是空值，他在栈内存中有自己的存储空间(占了位置)
num = 12;
```

- undefined:意料之外(不是我能决定的)

```javascript
let num; //=> 创建一个变量没有赋值，默认值是undefined
num = 12;
```

<a name="aa63b1ed"></a>
## object 对象数据类型-普通对象

> { [key] : [value] , ... } 任何一个对象都是由零到多组键值对(属性名:属性值)组成的(并且属性名不能重复)


```javascript
leta = 12;
// 1.创建变量a,放到当前栈内存变量存储区域中
// 2.创建一个值12 ,把它存储到当前栈内存值区域中(简单的基本类型值是这样存储的,复杂的引|用类型值不是这样做的)
// 3. =为赋值,其实赋值是让变量和值相互关联的过程

/*
复杂值(引用类型值)的存储,又分成了三个步骤:
	1.在内存中分配出一块新内存,用来存储引用类型值(堆内存=>heap) =>内存有一个16进制地址
	2.把对象中的键值对(属性名:属性值)依次存储到堆内存中
	3.把堆内存地址和变量关联起来
*/
```


<a name="ffa597b0-1"></a>
### 测试题

> 基本数据类型和引用数据类型，堆栈理解


-  题目一：（数据堆栈内存 1.PNG） 
```javascript
let a = 12;
let b = a;
b = 13;
console.log(a);

let c = {
	name: '小明'
};
let d = c;
d.name = '大明';
console.log(c.name);
```
 

-  题目二：（数据堆栈内存 2.PNG） 
```javascript
let n = [10, 20];
let m = n;
let x = m;
m[0] = 100;
x = [30, 40];
x[0] = 200;
m = X;
m[1] = 300;
n[2] = 400;
console.log(n, m, x);
```
 

-  题目三：（数据堆栈内存 3.PNG） 
```javascript
let a = {
	n: 1
};
let b = a;
a.x = a = {
	n: 1
};
console.logog(a.x);
console.log(b);
```
 

-  题目四：（数据堆栈内存 4.PNG） 
```javascript
let a = {
	n: 1
};
let b = a;
a.X = b;
```
 

<a name="fe8d9dfc"></a>
### JS 中的数据类型检测

- ** typeof [val]**：用来检测数据类型的运算符 
```javascript
/*
typeof返回结果：
	1.首先是一个字符串.
	2.字符串中包含对应的类型
typeof局限性：
	1.typeof null => "object" 但 是nu1l并不是对象
	2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object"
*/

typeof '12' //=> 'string'
typeof true //=> 'boolean'
typeof null //=> 'object'
typeof undefined //=> 'undefined'
typeof 1 //=> 'number'
typeof NaN //=> 'number'
typeof {} //=> 'object'
typeof [] //=> 'object'
typeof /^/ //=> 'object'
```
 

-  instanceof：用来检测当前实例是否率属于某个类 

 

-  constructor：基于构造函数检测数据类型( 也是基于类的方式) 

 

-  object . prototype. toString.call()：检测数据类型最好的办法 

 

<a name="c59c4def"></a>
### JS中的数学运算

> **i++**和以下两种不完全一样， 他是**纯粹的数学运算**

```javascript
let i='10';
i=i+1; 	// => '10'+1 => '101'
i+=1; 	// => '101 '
i++; 	// => i=11
```

> **i+1**和**++i**都会是数学运算中的累加1，**区别**是**计算的顺序**

```javascript
let i=1;
// 哪怕是有括号，也是先算5+i=6，再i+1，i=2；
5+(i++)// 结果为5+1=6，然后i++;

i=1;
5+(++i)// =>先i累加1，然后拿累加后的结果去和5运算 =>7
```

```javascript
// 出道题:
let i=3;
console.log(5+(++i)+(i++)+3-2+(--i)+(i--)-2 );// 20
// 5+(++i) = 5+(3+1) = 9，i=4
// 9+(i++) = 9+(4) = 13，然后i++，i=5
// 13+3-2+(--i) = 14+(5-1) = 18，i=4
// 18+(i--)-2 = 18+(4)-2 = 20，然后i--，i=3
// 计算结果为：20

console.log(i);// 3
```

<a name="a5a74b77"></a>
## JS中的操作语句:判断、循环

<a name="e38bddc9"></a>
#### 判断
> 条件成立做什么?不成立做什么?

-  if/else if/else 
-  三元运算符 
   - (条件)?(值1):(值2)
-  switch case 
```javascript
// 1.每一种 case 情况结束后最好都加上 break;
// 2.default 等价于 else，以上都不成立干的事情;
// 3.每一种 case 情况的比较用的都是三个等号，===，叫“绝对相等”;
```
 

-  == VS ===（两等号与三等号） 
```javascript
// ==:相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较)
'5'==5;// =>TRUE

// ===:绝对相等(如果类型不一样，肯定不相等)
'5'===5;// =>FALSE

// 项目中为了保证业务的严谨，推荐使用三等号：===
```
 
<a name="69bdc66b"></a>
#### 循环
> 重复做某些事情就是循环.

- for循环
- for in循环 
   - 用来循环遍历对象中的键值对的
   - for in在遍历的时候，优先循环数字属性名(从小到大)
- for of循环( ES6新增)
- while循环
- do while循环

<a name="fb601865"></a>
### 函数function
> 函数就是一个方法或者一个功能体，函数就是把实现某个功能的代码放到一起进行封装，以后想要操作实现这个功能，只需要把函数执行即可。
> 
>  =>“封装”: 减少页面中的冗余代码，提高代码重复使用率(低耦合高内聚)，把实现某些功能的代码封装进来，提供的入口在函数中叫做形参，执行的时候放的具体东西函数中叫做实参


- 创建函数 
   - 形参
   - 返回值
- 执行函数 
   - 实参
- arguments
- 函数底层运行机制
- 。。。

<a name="71250a1d"></a>
#### 创建函数
> 创建函数的时候我们设置了形参变量，但如果执行的时候并没有给传递对应的实参值，那么形参变量默认的值是: undefined
> 
> 函数没有写return，函数默认返回值是undefined


<a name="c9e058af"></a>
#### 执行函数
> **匿名函数**<br />匿名函数之**函数表达式**:把一个匿名函数本身作为值赋值给其它东西，这种函数一般不是手动触发执行，而且靠其它程序驱动触发执行(例如:触发某个事件的时候把它执行等)

```bash
document.body.onclick = function () { } 
setTimeout( function(){}, 1000); // =>设置定时器，1000MS后执行匿名函数
```

> 匿名函数之**自执行函数**:创建完-一个匿名函数，紧接着就把当前函数加小括号执行

```javascript
(function(n){ n=>100 })(100);
```


<a name="b43def41"></a>
### 浏览器常用的输出方式

<a name="eaa2626e"></a>
#### 1.在控制台输出

-  console.log(): 
-  console.dir():<br />`输出一个对象的详细键值对信息` 
-  console.table():<br />`把一个多维JSON数组在控制台按照表格的方式呈现出来` 

<a name="75dd04ac"></a>
#### 2.浏览器窗口弹窗

-  alert(1);<br />`弹出提示窗口，显示1；` 
-  confirm( '确定要干啥吗? ' );<br />`确定和取消:选择型弹框` 
-  prompt('确定要干啥吗?写出原因! ');<br />`在confirm的基础上多了一个输入框`
```javascript
// => 三种方式输出的结果都必先经过toString转换为字符串 
// => 三种方式都会阻断JS代码的执行，只有当窗口关掉，JS才会继续运行 
for(let i=0; i<5; i++){
	alert(i); 
	console.log('哈哈'); 
} 
```

<a name="41e24ded"></a>
#### 3.在页面中写入信息

-  document.write 
```javascript
// => 和alert一样，输出的结果都是字符串
```
 

<a name="870a51ba"></a>
## 函数

<a name="11f91d70"></a>
### arguments函数内置的实参集合
<a name="ZH9K4"></a>
#### 任意数求和(执行函数的时候,传递N个值实现求和)
```javascript
/*
任意数求和:
	1.传递实参的个数不定
	2.传递的值是否为有效数字不定
=> 把传递的有效数字进行相加求和

arguments:函数内置的实参集合
	1.类数组集合，集合中存储着所有函数执行时，传递的实参信息
	2.不论是否设置形参，arguments 都存在
	3.不论是否传递实参，arguments 也都存在

arguments.callee:存储的是当前函数本身(一般不用的，JS严格模式下禁止使用这些属性)

*/
function sum() {
	let total = null;
	for (let i = 0; i < arguments.length; i++) {
		let item = Number(arguments[i]);
		if (isNaN(item)) {
			continue;
		}
		total += item;
	}
	return total;
}

let total = sum(10, 20, 30, 40);
console.log(total);

total = sum(10, 20);
console.log(total);

total = sum(10, 20, '30');
console.log(total);

total = sum(20, '30', 'AA');
console.log(total);

total = sum();
console.log(total);
```

<a name="IAKms"></a>
#### arrow function箭头函数
```javascript
//求和
function sum(n, m) {
	return n + m;
}
//改写成箭头函数
let sum = (n, m) => {
	return n + m;
};

//如果函数体中只有一行 return，可以省略 return 和大括号，一行搞定
let sum = (n, m) => n + m;

console.log(sum(10, 20));
```

```javascript
function fn(n) {
	return function (m) {
		return n + m;
	}
}
// 精简
let fn = n => m => n + m;
```

```javascript
function sum(n, m) {
	if (typeof n === 'undefined') {
		n = 0;
	}
	if (typeof m === 'undefined') {
		m = 0;
	}
	return n + m;
}

//形参赋值默认值:当没有给形参传递实参的时候，执行默认值
let sum = (n = 0, m = 0) => n + m;
sum();
sum(10);
```

> 箭头函数中没有arguments

```javascript
let sum=()=>{
	console.log(arguments); 
	// => Uncaught ReferenceError: arguments is not defined 箭头函数中没有ARGUMENTS
}; 

//但是我们可以使用剩余运算符获取到传递的实参集合(它是数组，比arguments更好玩)
let sum = (...arg) => {
	console.log(eval(arg.join('+')));
}; 

// join：返回用'+'号连接的字符串
// eval：评估JavaScript代码并执行它。
let sum= (...arg) =>eval(arg.join('+'));

sum(1, 2, 3, 4);
```

> 箭头函数中的this某些场景也是方便我们操作的


<a name="Math"></a>
## Math

> 数学函数:但是它不是-一个函数,它是一个对象,对象中存储了很多操作数字的属性方法,因此被称为数学函数

<a name="hovFG"></a>
### Math中的所有键值对
```javascript
Math = {
	
	E: 2.718281828459045
	
	LN2: 0.6931471805599453
	
	LN10: 2.302585092994046
	
	LOG2E: 1.4426950408889634
	
	LOG10E: 0.4342944819032518
	
	PI: 3.141592653589793
	
	SQRT1_2: 0.7071067811865476
	
	SQRT2: 1.4142135623730951
	
	abs: ƒ abs()
	
	acos: ƒ acos()
	
	acosh: ƒ acosh()
	
	asin: ƒ asin()
	
	asinh: ƒ asinh()
	
	atan: ƒ atan()
	
	atan2: ƒ atan2()
	
	atanh: ƒ atanh()
	
	cbrt: ƒ cbrt()
	
	ceil: ƒ ceil()
	
	clz32: ƒ clz32()
	
	cos: ƒ cos()
	
	cosh: ƒ cosh()
	
	exp: ƒ exp()
	
	expm1: ƒ expm1()
	
	floor: ƒ floor()
	
	fround: ƒ fround()
	
	hypot: ƒ hypot()
	
	imul: ƒ imul()
	
	log: ƒ log()
	
	log1p: ƒ log1p()
	
	log2: ƒ log2()
	
	log10: ƒ log10()
	
	max: ƒ max()
	
	min: ƒ min()
	
	pow: ƒ pow()
	
	random: ƒ random()
	
	round: ƒ round()
	
	sign: ƒ sign()
	
	sin: ƒ sin()
	
	sinh: ƒ sinh()
	
	sqrt: ƒ sqrt()
	
	tan: ƒ tan()
	
	tanh: ƒ tanh()
	
	trunc: ƒ trunc()
	
	Symbol(Symbol.toStringTag): "Math"
	
	[[Prototype]]: Object

}
Math.abs();

// https://developer.mozilla.org/zh-CN/search?q=
```

<a name="2b99c142"></a>
### Math中常用的属性和方法

<a name="54e6f239"></a>
#### 获取绝对值
```javascript
// Math.abs([number value]);	//获取绝对值(绝对值永远是正数或者零)

console.log(Math.abs(-12.5)); //=>12.5

console.log(Math.abs(12)); //=>12

console.log(Math.abs(0)); //=>0

//传递的不是数字类型的值:先基于Number()转换为数字再处理

console.log(Math.abs('-1')); //=>1

console.log(Math.abs('-1px')); //=>NaN

console.log(Math.abs(true)); //=>1| I
```

<a name="mN0xD"></a>
#### 向上取整/向下取整
```javascript
// Math.ceil / floor([number value]); 把一个数向上取整/向下取整

console.log(Math.cei1(12)); //=>12

console.log(Math.cei1(12.1)); //=>13

console.log(Math.cei1(12.9)); //=>13

console.log(Math.cei1(-12.1)); //=>-12

console.log(Math.cei1(-12.9)); //=>-12

console.log(Math.floor(12)); //=>12

console.log(Math.floor(12.1)); //=>12

console.log(Math.f1oor(12.9)); //=>12

console.log(Math.f1oor(-12.1)); //=>-13

console.log(Math.f1oor(-12.9)); //=>-13
```

<a name="H9TkN"></a>
#### 四舍五入
```javascript
// Math.round();    四舍五入

console.log(Math.round(12)); //=>12

console.log(Math.round(12.1)); //=>12

console.log(Math.round(12.5)); //=>13 正数中. 5属于入

console.log(Math.round(12.9)); //=>13

console.log(Math.round(-12.1)); //=>-12

console.log(Math.round(-12.5)); //=>-12负数中. 5属于舍

console.log(Math.round(-12.9)); //=>-13
```

<a name="I54P5"></a>
#### 最大值和最小值
```javascript
// Math.max | min(va1[val1],[val2],...);    获取一堆数中的最大值和最小值

console.log(Math.max(12, 5, 68, 23, 45, 3, 27)); //=>68

console.log(Math.min(12, 5, 68, 23, 45, 3, 27)); //=>3

// 思考题:如何基于Math.max/min获取数组中的最大值最小值?
Math.max([12, 5, 68, 23, 45, 3, 27]); // =>NaN   此处是只传第一个值，是个数组，和内置的语法要求不符
```

<a name="mkcaE"></a>
#### 开平方/求次幂
```javascript
// Math.sqrt/pow();	// sqrt:给一个数开平方;	 pow :计算一个数的多少次幂

console.log(Math.sqrt(9)); //=>3符 合N*N=M这样的M才能整开平方

console.log(Math.sqrt(-9)); //=>NaN 负数开不了平方

console.log(Math.pow(2, 10)); //=>1024
```

<a name="731d784c"></a>
#### 获取随机数（0~1之间的随机小数）
```javascript
// Math.random();	// 获取0~1之间的随机小数

// 获取[n~m]之间的随机整数
function random(min, max) {
	
	return Math.round(Math.random() * (max - min) + min);
	
}

let ran= (min, max) => Math.round(Math.random() * (max-min) +min);


for (leti=0; i<100; i++) {
	
	console.log(i+':'+ran(1, 5));
	
}
```

<a name="0e67d4b0"></a>
## 数组
```javascript
Array.prototype;
/*
[constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
	at: ƒ at()
	concat: ƒ concat()
	constructor: ƒ Array()
	copyWithin: ƒ copyWithin()
	entries: ƒ entries()
	every: ƒ every()
	fill: ƒ fill()
	filter: ƒ filter()
	find: ƒ find()
	findIndex: ƒ findIndex()
	findLast: ƒ findLast()
	findLastIndex: ƒ findLastIndex()
	flat: ƒ flat()
	flatMap: ƒ flatMap()
	forEach: ƒ forEach()
	includes: ƒ includes()
	indexOf: ƒ indexOf()
	join: ƒ join()
	keys: ƒ keys()
	lastIndexOf: ƒ lastIndexOf()
	length: 0
	map: ƒ map()
	pop: ƒ pop()
	push: ƒ push()
	reduce: ƒ reduce()
	reduceRight: ƒ reduceRight()
	reverse: ƒ reverse()
	shift: ƒ shift()
	slice: ƒ slice()
	some: ƒ some()
	sort: ƒ sort()
	splice: ƒ splice()
	toLocaleString: ƒ toLocaleString()
	toString: ƒ toString()
	unshift: ƒ unshift()
	values: ƒ values()
	Symbol(Symbol.iterator): ƒ values()
	Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}
	[[Prototype]]: Object
*/


```

<a name="1f108de9"></a>
#### 数组中常用的方法

- 方法的作用和含义
- 方法的实参(类型和含义)
- 方法的返回值
- 原来的数组是否会发生改变

<a name="58355d62"></a>
#### 1.实现数组增删改的方法

- ** **[ push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push): 在数组的末尾添加新元素； 
```javascript
/*
push() 方法将一个或多个元素添加到数组的末尾，并返回数组的新长度。
	语法：
		arr.push(element1, ..., elementN)
		
	@param elementN
		被添加到数组末尾的元素。
	@return
		当调用该方法时，新的 length 属性值将被返回。
*/
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

```
 

-   [unshift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift): 在数组的开头插入新元素； 
```javascript
/*
unshift()方法将一个或多个元素添加到数组的开头，并返回数组的新长度。
	语法：
		arr.unshift(element1, ..., elementN)
		
	@param elementN
		要添加到数组开头的元素或多个元素。
	@return
		当一个对象调用该方法时，返回其 length 属性值。
*/
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
```
 

-  [shift()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) : 从数组中移除第一个元素并返回它； 
```javascript
/*
shift()方法从数组中删除第一个元素，并返回已删除的元素。此方法更改数组的长度。
	语法：
		arr.shift()
		
	@param
		无。
	@return
		从数组中删除的元素; 如果数组为空则返回undefined 。 
*/
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```
 

-  [ pop()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) : 从数组中移除最后一个元素；
```javascript
/*
pop() 方法从数组中删除最后一个元素并返回该元素。此方法更改数组的长度。
	语法：
		arr.pop()
		
	@param
		无。
	@return
		从数组中删除的元素（当数组为空时返回undefined）。
*/
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

```
 

- [splice() ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice): 实现数组的增加、删除、修改； 
```javascript
/*
splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

语法：
	array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
	
	@param  start
		指定修改的开始位置（从 0 计数）。
	@param  deleteCount 可选
		整数，表示要移除的数组元素的个数。
	@param  item1, item2, ... 可选
		要添加进数组的元素，从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
	@return 
		由被删除的元素组成的一个数组。
*/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// 开始位置 1，删除 0个，在此位置插入 'Feb'
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// 开始位置 4，删除 1个，在此位置插入 'May'
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
```
 

<a name="d1ddd05a"></a>
#### 2.数据的查询与拼接

-  [ slice() ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)：返回数组某个部分的副本；
```javascript
/*
slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。

语法:
	arr.slice([begin[, end]])
	
	@param begin 可选
		提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。(可为负数，不写则从0开始)
	@param end 可选
		提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。(可为负数，不写则到最后一位结束)
*/
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```
  

-  [concat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)：拼接数组。 
```javascript
/*
concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。

语法：
	var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
	
	@param valueN可选
		数组和/或值，将被合并到一个新的数组中。如果省略了所有 valueN 参数，则 concat 会返回调用此方法的现存数组的一个浅拷贝。
	@return 
		新的 Array 实例。
*/
let ary = [10, 20, 30, 40];
let ary1 = ary.concat("");
let ary2 = ary.concat([]);
let ary3 = ary.concat("1,2,3");
let ary4 = ary.concat("[1,2,3]");
console.log(ary1); // [10, 20, 30, 40, '']
console.log(ary2); // [10, 20, 30, 40]
console.log(ary3); // [10, 20, 30, 40, '1,2,3']
console.log(ary4); // [10, 20, 30, 40, '[1,2,3]']

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// 输出结果: Array ["a", "b", "c", "d", "e", "f"]
```
 

<a name="ecb6b0ae"></a>
#### 3.数组转换成字符串

- [toString()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)： 把数组转换为字符串； 
```javascript
/**
toString() 返回一个字符串，表示指定的数组及其元素。
	语法
		arr.toString()
	@return 
		一个表示指定的数组及其元素的字符串。
*/
const array1 = [1, 2, 'a', '1a'];

console.log(array1.toString());
// expected output: "1,2,a,1a"

let ary = [10, 20, 30, 40];
console.log(ary.toString()); // '10, 20, 30, 40'
```
 

- [join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)： 将数组转换成由指定的分隔符分隔的字符串；
```javascript
/*
join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。

语法：
	arr.join([separator])
	
	@param separator 可选
		指定一个字符串来分隔数组的每个元素。
	@return 
		一个所有数组元素连接的字符串。如果 arr.length 为 0，则返回空字符串。
	
*/
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"


let ary = [10, 20, 30, 40];
let res = ary.join('+')	
// '10+20+30+40'
console.log(eval(res)); 
//  =>100 eva1把字符串变为JS表达式执行
```
 

<a name="d19f8be8"></a>
#### 4.检测数组中是否包含某一项

-  [indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)： 返回数组中找到的第一个指定元素的索引，如果不存在则返回-1。
-  [lastIndexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)： 返回数组中找到的最后一个指定元素的索引，如果不存在则返回 -1。 
```javascript
/*
indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

语法：
	arr.indexOf(searchElement[, fromIndex])
	
	@param	searchElement
		要查找的元素；
		
	@param	fromIndex 可选
		开始查找的位置。fromIndex >= arr.length 时，返回 -1。
	
	@return 
		首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
*/
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1


/*
lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

语法：
	arr.lastIndexOf(searchElement[, fromIndex])
	
	@param	searchElement
		要查找的元素；
		
	@param	fromIndex 可选
		从此位置开始逆向查找(从后向前)。其绝对值大于数组长度，则方法返回 -1
	
	@return 
		首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
*/
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1



let ary = [10, 20, 30, 10, 20, 30];
console.log(ary.index0f(20)); //=>1
console.log(ary.lastIndex0f(20)); //=>4
//验证ARY中是否包含'靓仔'
if (ary.index0f('靓仔') === -1) {
	//不包含
}
```
 

-  [includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)：判断一个数组是否包含一个指定的值
```javascript
/*
	includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
	
语法：
	arr.includes(valueToFind[, fromIndex])
	
	@param	valueToFind
		需要查找的元素值。
		
	@param	fromIndex 可选
		从fromIndex 索引处开始查找 valueToFind。
		
	@return 
		找到了 valueToFind，则返回 true，否则返回 false。
*/
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true => includes(3, -1+3)
[1, 2, 3].includes(3, -3); // true => includes(3, -3+3)
[1, 2, 3].includes(2, -1); // false => includes(2, -1+3)
[1, 2, NaN].includes(NaN); // true


// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false


let ary = [10, 20, 30, 10, 20, 30, '帅哥'];
// includes是ES6新提供的方法
console.log(ary.includes('靓仔'));
if(ary.includes('靓仔')){
	// 包含
}
```
 

<a name="9df1833f"></a>
#### 5.数组排列和排序

- [ reverse() ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
```javascript
/**
reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

语法
	arr.reverse()
 	
 	@return 
		颠倒后的数组。
*/
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]


let ary = [12, 15, 9, 28, 10, 22];
ary.reverse();
console.log(ary); //=>[22,10,8,9,15,12]
```
 

- [sort()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort); // 此排序方法较复杂，建议使用时参考mdn文档
```javascript
/*
sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的

语法
	arr.sort([compareFunction])
	
	@param	compareFunction 可选
		用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。
		
	@param	firstEl
		第一个用于比较的元素。
	
	@param	secondEl
		第二个用于比较的元素。
		
	@return 
		排序后的数组。请注意，数组已原地排序，并且不进行复制。
*/
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]




// SORT方法中如果不传递参数,是无法处理10以上数字排序的(它默认按照每一项第一个字符来排,不是我们想要的效果)
let ary = [12, 15, 9, 28, 10, 22];
ary.sort();
console.log(ary); //=> [10, 12, 15,22, 28,9]

//想要实现多位数正常排序,需要给SORT传递一-个函数,函数中返回a-b实现升序,返回b-a实现降序
ary = [12, 15, 9, 28, 10, 22];
// ary.sort(function(a,b){ return a-b; });
// a和b是相邻的两项
ary.sort((a, b) => a - b);
    console.log(ary);
```
 

<a name="be7204c4"></a>
#### 6.遍历数组中每一项的方法

-  [**forEach()** ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)方法对数组的每个元素执行一次给定的函数。
```javascript
/*
forEach() 方法对数组的每个元素执行一次给定的函数。

语法：
	arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
	
	@param callback
		为数组中每个元素执行的函数，该函数接收一至三个参数：
		
	@param currentValue
		数组中正在处理的当前元素。
		
	@param index 可选
		数组中正在处理的当前元素的索引。
		
	@param array 可选
		forEach() 方法正在操作的数组。
		
	@param thisArg 可选
		当执行回调函数 callback 时，用作 this 的值。
		
	@return
		undefined。
*/


// 数组中有多少项，函数就会被默认执行多少次
// 每一次执行函数: item是数组中当前要操作的这一项， index是当前项的索引
let ary = [12, 15, 9, 28, 10, 22];
ary.forEach((item, index) => console.log('索引:' + index + '内容:' + item);)
```
 

- ** **[**map()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)** **
- ** **[**filter()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)** **
- ** **[**find()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)** **
- ** **[**reduce()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)** **
- ** **[**some()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)** **
- ** **[**every()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)** **
- ** ... **

<a name="8c0f72e3"></a>
#### 7. Array.prototype

- 在控制台查看数组中所有提供的方法,可以基于MDN网站去查询方法的用法

<a name="245b34cb"></a>
#### 8.数组去重的几种方法

```javascript

// 数组去重
let ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// console.log(ary);

//方法一：includes不兼容低版本浏览器
let newAry = [];
for (let i = 0; i < ary.length; i++) {
	//是否包含
	if (newAry.includes(ary[i])) {
		continue;
	}
	//末尾添加
	newAry.push(ary[i]);
}
console.log(newAry);
ary = newAry;


// 方法二：includes不兼容低版本浏览器
let newAry = [];
ary.forEach(item => {
	if (newAry.includes(item)) return;
	newAry.push(item);
});
ary = newAry; 
console.log(newAry);


// 方法三：兼容版,性能不好
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3,2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);

for (let i = 0; i < ary.length; i++) {
	
	let item = ary[i];
	console.log('i:' + i + ", item:" + item);
	
	for (let j = i + 1; j < ary.length; j++) {
		
		console.log('j:' + j + ", ary[j]:" + ary[j]);
		
		if (item === ary[j]) {
			// 重复项
			console.log('delete:' + ary[j]);
			ary.splice(j, 1);
			// splice删除引起数组塌陷，调整索引位置
			j--;
		}
	}
	console.log("ary:" + ary);
}
console.log(ary);



// 方法四：性能比较优&兼容版
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3,2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);
// 1.创建一个空对象
let obj = {};
// 2. 循环数组中的每一项,把每一项向对象中进行存储=> item: item（键值同名）
for (let i = 0; i < ary.length; i++) {
	
	let item = ary[i];
	
	// 3.每一次存储之前进行判断:验证obj中是否存在这一项（键值同名）
	if (obj[item] !== undefined) {
		
		//已经存在这一项，删除ary数组中的这一元素
		ary.splice(i, 1);
		// splice删除引起数组塌陷
		i--;
		continue;
	}
	// 键名和值相同
	obj[item] = item;
}
console.log(ary);
// 基于splice实现删除性能不好:当前项被删后,后面每一项的索引都要向前提一位（数组塌陷）,如果后面内容过多,一定影响性能



// 方法五：性能优&兼容版
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);
// 1.创建一个空对象
let obj = {};
// 2.循环数组中的每一项,把每一项向对象中进行存储=> item: item
for (let i = 0; i < ary.length; i++) {
	let item = ary[i];
	// 3.每一次存储之前进行判断:验证obj中是否存在这一项
	if (obj[item] !== undefined) {
		// 将数组最后一项的值提到当前索引位置
		ary[i] = ary[ary.length - 1];
		// 删除最后一项,不会引起数组塌陷
		ary.length--;
		i--;
		continue;
	}
	// 键名和值相同
	obj[item] = item;
}
console.log(ary);



//封装去重方法
function unique(ary) {
	let obj = {};
	for (let i = 0; i < ary.length; i++) {
		let item = ary[i];
		if (obj[item] !== undefined) {
			ary[i] = ary[ary.length - 1];
			ary.length--;
			i--;
			continue;
		}
		obj[item] = item;
	}
	return ary;
}

ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 32, 3, 12, 3, 1, 2, 1, 2, 3, 2, 1, 52, 3];
console.log(unique(ary));



// 方法六：正则去重
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 32, 3, 12, 3, 1, 2, 1, 2, 3, 2, 1, 52, 3];
// 升序排序
ary.sort((a, b) => a - b);
// 将数组转换成字符串，用‘@’符连接
let str = ary.join('@') + '@';
// \d 数字， \d+ 1到多个数字，  (\d+@)多个后面有@的数字
// \1+ 出现1到多位跟前面一样的内容
// \1* 出现0到多位跟前面一样的内容
// g 全局匹配
let reg = /(\d+@)\1*/g;
ary = [];
str.replace(reg, (n, m) => {
    m = Number(m.slice(0, m.length - 1));
    ary.push(m);
});
console.log(ary);



// 方法七：基于ES6的Set (对应的Map)实现去重
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 32, 3, 12, 3, 1, 2, 1, 2, 3, 2, 1, 52, 3];
ary = [...new Set(ary)];
console.log(ary);
```

---

<a name="17a0394f"></a>
## 字符串中的常用方法
<a name="760d4ccd"></a>
### 1.[charAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) & [charCodeAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
```javascript
/* 
charAt: 根据索引获取指定位置的字符
charCodeAt: 获取指定字符的ASCII码值(Unicode编码值)
@params
n [number] 获取字符指定的索引
@return 
返回查找到的字符
找不到返回的是空字符串不是undefined，或者对应编码值
*/
let str = 'zhufengpeixunyangfanqihang';
console.log(str.charAt(0)); //=>'z'
console.log(str[0]); //=>'z '
console.log(str.charAt(10000)); //=>''
console.log(str[10000]); //=>undefined

console.log(str.charCodeAt(0)); //=>122
console.log(String.fromCharCode(122)); //=>'z'
```

<a name="c6a714af"></a>
### 2.字符串的截取
> [_**str**_**.substr(**_**start**_**[, **_**length**_**])**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)_：_从索引n开始截取m个字符，m不写截取到末尾；
> [**str.substring(indexStart[, indexEnd])**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring)：从索引n开始找到索引为m处(不含m)；
> [**str.slice(beginIndex[, endIndex])**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)**：** 提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

```javascript
/* 
都是为了实现字符串的截取(在原来字符串中查找到自己想要的)

	substr(n,m):
		从索引n开始截取m个字符，m不写截取到末尾(后面方法也是)
	
	substring(n,m):
		从索引n开始找到索引为m处(不含m)
	
	slice(n,m):
		和substring一样，都是找到索引为m处，但是slice可以支持负数作为索引，其余两个方法是不可以的，参数是负数(比如：-3)则看作是：(strLength - 3)
*/
let str = 'zhufengpeixunyangfanqihang';
console.log(str.substr(3, 7)); //=>' fengpei'
console.log(str.substring(3, 7)); //=>'feng'
console.log(str.substr(3)); //=> ' fengpeixunyangfanqihang'截取到末尾
console.log(str.substring(3, 10000)); //=>'fengpeixunyangfanqihang  截取到末尾(超过索引的也只截取到末尾)

console.log(str.substring(3, 7)); //=> 'feng'
console.log(str.slice(3, 7)); //=>'feng'
console.log(str.substring(-7, -3)); //=>''  空字符串，substring不支持负数索引
console.log(str.slice(-7, -3)); //=>'nqih'  
// slice支持负数索引，快捷查找:
//      负数索引，我们可以按照STR.LENGTH+负索引的方式找：
//          =>slice(26-7,26-3) =>slice(19,23)
```

<a name="0835b209"></a>
### 3.验证字符是否存在验
> [**str.indexOf(searchValue [, fromIndex])**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)：返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
> 
> [_**str**_**.lastIndexOf(**_**searchValue**_**[, fromIndex])**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)：返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。

```javascript
/*
验证字符是否存在:

	str.indexOf(searchValue [, fromIndex]):
		获取 searchValue 第一次出现位置的索引，fromIndex 是控制查找的起始位置索引；
	
	str.lastIndexOf(searchValue[, fromIndex]):
		从fromIndex开始向左回向查找 searchValue 最后一次出现位置的索引，没有这个字符则返回-1；
*/

// indexOf
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8

// indexOf
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// expected output: "The index of the first "dog" from the beginning is 40"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// expected output: "The index of the 2nd "dog" is 52"



// lastIndexOf
'canal'.lastIndexOf('a');     // returns 3（没有指明 fromIndex 则从末尾 l 处开始反向检索到的第一个 a 出现在 l 的后面，即 index 为 3 的位置）
'canal'.lastIndexOf('a', 2);  // returns 1（指明 fromIndex 为 2 则从 n 处反向向回检索到其后面就是 a，即 index 为 1 的位置）
'canal'.lastIndexOf('a', 0);  // returns -1(指明 fromIndex 为 0 则从 c 处向左回向检索 a 发现没有，故返回-1)
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明 fromIndex 为-5 则视同 0，从 c 处向左回向查找发现自己就是，故返回 0）
'canal'.lastIndexOf('c', 0);  // returns 0（指明 fromIndex 为 0 则从 c 处向左回向查找 c 发现自己就是，故返回自己的索引 0）
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2

// 备注：'abab'.lastIndexOf('ab', 2) 将返回 2 而不是 0，因为 fromIndex 只限制待匹配字符串的开头。
```

<a name="841cd036"></a>
### 4.字符串中字母的大小写转换
> [**toUpperCase()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/touppercase)：将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。
> [**toLowerCase()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)**：** 会将调用该方法的字符串值转为小写形式，并返回。

```javascript
/**
字符串中字母的大小写转换
	touppercase():转大写
	toLowerCase():转小写
*/
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.toUpperCase());
// expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans
console.log( "ALPHABET".toLowerCase() );
// "alphabet"

// 实现每个单词首字母大写,其他字母小写
let str = "ThE quicK bROWn fox jumps over the LAZY DOG.";
let ary = str.split(' '); //先按空格拆分成数组
let result = [];
for(let i =0; i < ary.length; i++){
	// 第一个字母转换成大写，其他小写
	let res = ary[i].slice(0, 1).toUpperCase()+ ary[i].slice(1).toLowerCase();
	// 添加到result数组末尾
	result.push(res);
}
str = result.join(' '); // 重新用空格拼接
console.log(str); //=> "The Quick Brown Fox Jumps Over The Lazy Dog."
```

<a name="6fdfaa1a"></a>
### 5.字符串分隔和拆分
> [**split()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)** ：**方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。 

```javascript
/*
split([分隔符]):把字符串按照指定的分隔符拆分成数组(和数组中join对应)
split支持传递正则表达式
*/
//需求:把'|'分隔符变为','分隔符
let str = 'music|movie|eat|sport';
let ary = str.split('|'); // => ["music", "movie", "eat", "sport"]
str = ary.join(',');
console.log(str); // => "music,movie,eat,sport"
```

<a name="2dfe8f6c"></a>
### 6.字符串的替换
> [**replace()**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace) ：方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。原字符串不会改变。

```javascript
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"

```

<a name="2171f4b8"></a>
### 7.其他...

```javascript
// 控制台输出 String.prototype 查看所有字符串中提供的方法
```

<a name="b4f34307"></a>
### 8.时间格式字符串处理

```javascript
// let time = '2019-7-24 12:6:23';
//=>变为自己需要呈现的格式,例如:
// "2019年07月24日 12时06分23秒"
// "2019年07月24日"
// "07/24 12:06"
// ...

// 方案一: 一路 replace
let time = '2019-7-24 12:6:23';
time = time.replace('-', '年').replace('-', '月').replace(' ', '日 ')
	.replace(':', '时').replace(':', '分') + '秒';
console.log(time); // => "2019年7月24日 12时6分23秒" 

// 获取值的方法:基于 indexOf 获取指定符号索引,基于 substring 一点点截
let time = '2019-7-24 12:6:23';
let n = time.indexOf('-');
let m = time.lastIndexOf('-');
let x = time.indexOf(' ');
let y = time.indexOf(':');
let z = time.lastIndexOf(':');
let year = time.substring(0, n);
let month = time.substring(n + 1, m);
let day = time . substring(m + 1, x);
console.log(year, month, day); 

//获取值的方法:基于 split 一项项的拆分
let time = '2019-7-24 12:6:23';
let n = time.split(' '); //=> ["2019-7-24", "12:6:23"]
let m=  n[0].split('-'); //=> ["2019", "7", "24"]
let x = n[1].split(':'); //=> ["12", "6", "23"]
console.log(m[0]+'年'+ m[1]+'月'+  m[2]+'日'); // '2019年7月24日'


// 方案二: 正则，获取到年月日小时分钟秒这几个值后，最后想拼成什么效果就拼成什么
let time = '2019-7-24 12:6:23';
let ary = time.split(/(?: |-|:)/g); //=> ["2019","7", "24", "12","6","23"]
time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(time);

// 补零
let addZero = val => val.length < 2 ? '0' + val : val;
```

<a name="7369a299"></a>
### 9.URL处理

> 实现一个方法queryURLParameter获取一个URL地址问号后面传递的参数信息

```javascript
// 将?后面的字符串转换成键值对

// let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';

// let val_index = url.indexOf('?');
// let value_str = url.substring(val_index + 1);
// // lx=1&name=zhufeng&teacher=aaa#box
// let val_ary = value_str.split('#');
// let well_txt = val_ary[1];

// let info_ary = val_ary[0].split('&');
// let info_obj = {};
// info_ary.forEach((item) => {
//     let k_v = item.split('=');
//     info_obj[k_v[0]] = k_v[1];
// });
// info_obj[well_txt] = well_txt;

// console.log(info_ary);
// console.log(info_obj);



let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';

/* 
queryURLParams:获取URL地址中问号传参的信息和哈希值
	@params url [string] 
		要解析的URL字符串
	@return [object]
		包含参数和哈希值信息的对象
*/
function queryURLParams(url) {
    let ask_in = url.indexOf('?'),
        well_in = url.indexOf('#'),
        ask_txt = '',
        well_txt = '';
	// 未找到 indexOf()返回-1
    if (well_in === -1) well_in = url.length;
    // ask_txt取值：'?'之后，'#'之前
    if (ask_in >= 0) ask_txt = url.substring(ask_in + 1, well_in);
	// 取值：'#'之后
    well_txt = url.substring(well_in + 1);
    // 
    let result = {};
	// 
    if (well_txt !== '') result['HASH'] = well_txt;
	// 
    if (ask_txt !== '') {
        let ary = ask_txt.split('&');
        ary.forEach(item => {
            let itemAry = item.split('=');
            result[itemAry[0]] = itemAry[1];
        });
    }
    return result;
}

console.log(queryURLParams(url));


/* 正则判断 */
function queryURLParams2(ur1) {
    let result = {},
        reg1 = /([^?=&#]+)=([^?=&#]+)/g,
        reg2 = /#([^?=&#]+)/g;
    url.replace(reg1, (n, X, y) => result[X] = y);
    url.replace(reg2, (n, x) => result['HASH'] = x);
    return result;
}
console.log(queryURLParams2(url));
```

---

<a name="79d606a2"></a>
## 日期对象的基本操作
> **Date.prototype**：标准日期对象中提供了一些属性和方法,供我们操作日期信息
> Date.prototype.getFullYear()
> Date.prototype.getMonth()
> Date.prototype.getDay()
> Date.prototype.getHours()
> Date.prototype.getMinutes()
> Date.prototype.getSeconds()
> Date.prototype.getMilliseconds()
> Date.prototype.getTime()
> Date.prototype.toLocaleDateString()
> Date.prototype.toLocaleString()

```javascript
let time = new Date();
time.toLocaleDateString( )
// "2019/7/26"
time.toLocaleString()
// "2019/7/26. 上午10:20:24"
time.toString()
// "Fri Jul 26 2019 10:20:24 GMT+0800 (中国标准时间)"


time.getFullYear()
time.getMonth()
time.getDay()
time.getHours()
time.getMinutes()
time.getSeconds()
time.getMilliseconds()
time.getTime()
time.toLocaleDateString()
time.toLocaleString()

// getFullYear() 方法根据本地时间返回指定日期的年份。
// 此方法替代 getYear() 。

// getMonth()
// 根据本地时间，返回一个指定的日期对象的月份，为基于 0 的值（0 表示一年中的第一月）。
// 0~11

// getDay()
// 获取星期：获取星期结果是0~6代表周日 到周六
```

---


<a name="b524c0ba"></a>
## DOM及其基础操作
> DOM : document object model文档对象模型,提供一些属性和方法供我们操作页面中的元素

<a name="6fc7aae9"></a>
### 获取DOM元素的方法
<a name="a44440b9"></a>
#### 1、document.getElementByld()
> 指定在文档中,基于元素的ID或者这个元素对象

<a name="e4fbb951"></a>
#### 2、[context].getElementsByTagName()
> 在指定上下文(容器)中,通过标签名获取一组元素集合

<a name="13d128ba"></a>
#### 3、[context].getElementsByClassName()
> 在指定上下文中,通过样式类名获取一组元素集合(不兼容IE6~8 )

<a name="b580d33d"></a>
#### 4、document.getElementsByName()
> 在整个文档中,通过标签的NAME属性值获取一组元素集合(在IE中只有表单元素的NAME才能识别，所以我们一般只应用于表单元素的处理)

<a name="8e6723b7"></a>
#### 5、document.head / document.body / document.documentElement
> 获取页面中的HEAD/BODY/HTML三个元素

<a name="118f0452"></a>
#### 6、[context].querySelector([selector])
> 在指定上下文中,通过选择器获取到指定的元素对象

<a name="223dd306"></a>
#### 7、[context].querySelectorAll([selector])
> 在指定上下文中,通过选择器获取到指定的元素集合

```javascript
//=> queryselector / queryse1ectorAll 不兼容IE6~8
1et box = document.querySe1ector('#box');
1et links = box.querySe1ectorAll('a');
// 1inks=document.querySelectorA11('#box a');
1et aas=document.querySe1ectorAll('.aa');
```

---

<a name="ce6027a3"></a>
### JS中的节点和描述节点之间关系的属性
> 节点: Node (页面中所有的东西都是节点)
> 
> 节点集合: NodeList ( getElementsByName / querySelectorAll获取的都是节点集合)


<a name="2de04dfb"></a>
#### 元素节点(元素标签)
```javascript
/*
nodeType : 1

nodeName : 大写的标签名

nodeValue : null
*/
```

<a name="953370b8"></a>
#### 文本节点
```javascript
// nodeType : 3
// 
// nodeName : 大写的标签名
// 
// nodeValue : 文本内容
```

<a name="bfc7bd5b"></a>
#### 注释节点
```javascript
// nodeType : 8
// 
// nodeName : '#commen'
// 
// nodeValue : 注释内容
```

<a name="42a9b8a5"></a>
#### 文档节点document
```javascript
// nodeType : 9
// 
// nodeName : '#document'
// 
// nodeValue : null
// 
// ......
```

<a name="d552e75b"></a>
#### 描述这些节点之间关系的属性
```javascript
// childNodes : 获取所有的子节点
// 
// children : 获取所有的元素子节点(子元素标签)
// 
// firstChild : 获取第一个子节点
// 
// lastChild : 获取最后一个子节点
// 
// firstElementChild / lastElementChild : 获取第一个和最后一个元素子节点（不兼容IE6~8）
// 
// previousSibling :获取上一个哥哥节点
// 
// nextSibling :获取下一个弟弟节点
// 
// previousElementSibling / nextElementSibling : 获取哥哥和弟弟元素节点(不兼容IE6~8 )
// 
//     ......
```

---

<a name="lnDoa"></a>
### 在JS中动态增删改元素
<a name="Z8rEe"></a>
#### 创建元素对象 createElement
<a name="pmuuL"></a>
#### 创建文本节点 createTextNode
<a name="zRAR3"></a>
#### 把元素添加到容器的末尾 appendChild
<a name="rtGaA"></a>
#### 把元素添加到指定元素的前面 insertBefore
```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> DOM动态操作 </title>
</head>

<body>

    <div id="aa">aaaaaa</div>

    <script>

        // 动态创建一个 div 元素对象，把其赋给 box
        let box = document.createElement('div');
        box.id = 'boxActive';
        box.style.width = '200px';
        box.style.height = '200px';
        box.style.backgroundColor = 'green';
        box.style.color = 'yellow';
        box.className = 'box';

        // 动态创建文本，
        let text = document.createTextNode('认真学习');

        // 添加:容器. appendChild(元素)
        document.body.appendChild(box);
        box.appendChild(text);


        // 放到指定元素前:容器. insertBefore([指定元素]，[新增元素])
        let aa = document.getElementById("aa");
        // aa.parentNode.insertBefore(...);
        document.body.insertBefore(box, aa);


    </script>

</body>

</html>

```
![B65UL{]O(4(%CP))(1A0EX5.png](https://cdn.nlark.com/yuque/0/2022/png/29066467/1654480160474-f7cd987b-7c8d-45ad-90b8-ae70a54558ca.png#clientId=uf514a4d9-a433-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=uf8435a7c&margin=%5Bobject%20Object%5D&name=B65UL%7B%5DO%284%28%25CP%29%29%281A0EX5.png&originHeight=313&originWidth=350&originalType=binary&ratio=1&rotation=0&showTitle=false&size=4156&status=done&style=none&taskId=ufe0803a6-a7d8-4b6f-aa90-33bb0c23acf&title=)



<a name="xEzKz"></a>
# Index，从这里开始

---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---


---

<a name="a"></a>
# 1
<a name="a-1"></a>
## 2
<a name="a-2"></a>
### 3
<a name="xMP7L"></a>
#### 4
5

---


