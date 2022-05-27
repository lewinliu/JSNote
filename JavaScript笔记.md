### 常用的浏览器

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

### 谷歌浏览器的控制台(F12/Fn+F12)

- Elements: 查看结构样式，可以修改这些内容
- Console: 查看输出结果和报错信息，是 JS 调试的利器
- Sources: 查看项目源码
- Network: 查看当前网站所有资源的请求信息(包括和服务器传输的 HTTP 报文信息)、加载时间等(根据加载时间进行项目优化)
- Application: 查看当前网站的数据存储和资源文件(可以盗图)

### JS 做客户端语言

> 按照相关的 JS 语法，去操作页面中的元素，有时还要操作浏览器里面的一些功能

- ECMAScript3/5/6...: JS 的语法规范(变量、数据类型、操作语句
  等等)
- DOM ( document object model): 文档对象模型，提供一些 JS 的
  属性和方法，用来操作页面中的 DOM 元素
- BOM (browser object model) ：浏览器对象模型，提供一些 JS 的
  属性和方法，用来操作浏览器的

### JS 中的变量 variable

> 变量:可变的量，在编程语言中，变量其实就是一一个名字，用来存储和代表不同值的东西

```
//ES3
    vara=12;
    a =13;
    console.log(a); //=>输出 的是a代表的值13;

//ES6
    let b = 100;
    b = 200;

    const C = 100;
    c = 200; //=>报错: CONST创建的变量，存储的值不能被修改(可以理解为常量)

    //创建函数也相当于在创建变量
        function fn(){ }
    //创建类也相当于创建变量
        class A{ }
    //ES6的模块导入也可以创建变量
        import B from ' ./B.js';
    //Symbol创建唯一值
        let n=Symbol(100);
        let m=Symbol(100);
        n==m  --> false
```

### JS 中的命名规范

- 严格区分大小写

  ```
  let Test=100;
  console. log(test);//=>无法输出，因为第一一个字母小写了

  使用数字、字母、下划线、$，数字不能作为开头
      let $box; //=>一般用JQ获取的以$开头
      let .box; //=>一般公共变量都是_开头
      let 1box; //=>不可以，但是可以写box1
  ```

- 使用驼峰命名法:首字母小写，其余每-一个有意义单词的首字母都要大写(命名尽可能语义化明显，使用英文单词)

  ```
  let student Information;
  let studentInfo;
  //常用的缩写: add/ insert/ create/new (新增)、update ( 修改)
  、delete/del/ remove/rm (删除)、sel/ select/query/get (查
  询)、info(信息)

  //不正确的写法
  let xueshengInfo;
  let xueshengxinxi;
  let xsxx;
  ```

- 不能使用关键字和保留字

  ```
  当下有特殊含义的是关键字，未来可能会成为关键字的叫做保留字(? )

  var let const function

  var var10 = 10; //=>肯定不行的

  //=>代码强迫症(代码洁癖) :良 好的编程习惯、极客精神
  ```

### JS 中常用的数据类型.

> 在 JavaScript 中，共有七种基本数据类型：string、number、bigint、boolean、null、undefined、symbol。

- 基本数据类型

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

- 引用数据类型
  + 对象数据类型 object
    - {}普通对象
    - []数组对象
    - /^[+-]?(\d|([1-9]\d+))(\. \d+)?$/正则对象
    - 日期对象
    - ...
  + 函数数据类型 function
    - function
-

## number 数字类型.

> 包含:常规数字、NaN

### NaN

> not a number: 不是一个数，但它率属于数字类型

    NaN和任何值(包括自己)都不相等: NaN!=NaN， 所以我们不能用相等的方式判断是否为有效数字

### isNaN

> 检测一个值是否为非有效数字，如果不是有效数字返回 TRUE，反之是有效数字返回 FALSE

    在使用isNaN进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于Number()这个方法，把值转换为数字类型，然后再检测

### ==Number==

> 把字符串转换为数字，只要字符串中包含任意-一个非有效数字字符(第一个点除外)结果都是 NaN,空字符串会变为数字零

```
    console.log(Number('123.4')); //123.4
    console.log(Number('123.4px')); // NaN
    console.log(Number('123.4.5')); // NaN
    console.log(Number('')); //0
```

- 在使用 isNaN 进行检测的时候，首先会验证检测的值是否为数字类型，如果不是，先基于 Number()这个方法，把值转换为数字类型，然后再检测

### 把其它类型值转换为数字类型

- Number([val])
- parseInt/parseFloat([va1], [进制]): 也是转换为数字的方法，对于字符串来说，它是从左到右依次查找有效数字字符，直到遇到非有效数字字符，停止查找(不管后面是否还有数字，都不在找了)，把找到的当做数字返回
- ==进行转化的时候，可能出现把其他类型值转换为数字

### 把其它类型值转换为字符串

- [val] . toString()
- 字符串拼接

## boolean 布尔数据类型

> 只有两个值 true/false

### 把其它类型值转换为布尔类型

> 只有 0、NaN、''、null、undefined 五个值转换为 FALSE， 其余都转换为 TRUE(而且没有任何的特殊情况)

- Boolean([val])
- !/!!
- 条件判断

### 测试题

    let a = 10 + null + true + [] + undefined + '明明' + null + [] + 10 + false;
    console.log(a);
    /*
    *
    10+null->10+0->10
    10+true->10+1->11
    11 +[]-> 11+''-> '11' 空数组变为数字，先要经历变为空字符串，遇到字符串，啥都别想了，直接变为字符串拼接

    '11undefined明明null10false'
    */

## null / undefined

> null 和 undefined 都代表的是没有

- null: 意料之中(一般都是开始不知道值，我们手动先设置为 null， 后期再给予赋值操作)

```
let num = null; //=>let num = 0; - -般最好用null作为初始的空值，因为零不是空值，他在栈内存中有自己的存储空间(占了位置)
num = 12;
```

- undefined:意料之外(不是我能决定的)

```
let num; //=> 创建-一个变量没有赋值，默认值是undefined
num = 12;
```

## object 对象数据类型-普通对象

> { [key] : [value] , ... } 任何一个对象都是由零到多组键值对(属性名:属性值)组成的(并且属性名不能重复)

    leta = 12;
    1.创建变量a,放到当前栈内存变量存储区域中
    2.创建一个值12 ,把它存储到当前栈内存值区域中(简单的
    基本类型值是这样存储的,复杂的引|用类型值不是这样做的)
    3. =为赋值,其实赋值是让变量和值相互关联的过程

    复杂值(引用类型值)的存储,又分成了三个步骤:
    1.在内存中分配出一块新内存,用来存储引用类型值(堆内
    存=>heap) =>内存有一个16进制地址
    2.把对象中的键值对(属性名:属性值)依次存储到堆内存中
    3.把堆内存地址和变量关联起来

### 测试题

> 基本数据类型和引用数据类型，堆栈理解

- 题目一：（数据堆栈内存 1.PNG）

  ```
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

- 题目二：（数据堆栈内存 2.PNG）

  ```
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

- 题目三：（数据堆栈内存 3.PNG）

  ```
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

- 题目四：（数据堆栈内存 4.PNG）
  ```
  let a = {
      n: 1
  };
  let b = a;
  a.X = b;
  ```

### JS 中的数据类型检测

- typeof [val]：用来检测数据类型的运算符
    ```
    typeof返回结果:
        1.首先是一个字符串.
        2.字符串中包含对应的类型
    typeof局限性
        1. typeof null => "object" 但 是nu1l并不是对象
        2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象数据类型，返回的结果都是"object"

    typeof '12 ' //=> string
    typeof true //=> boolean
    typeof null //=> object
    typeof undefined //=> undefined
    typeof 1 //=> number
    typeof NaN //=> number
    typeof {} //=> 'object'
    typeof [] //=> 'object'
    typeof /^/ //=> 'object'
    ```

- instanceof：用来检测当前实例是否率属于某个类
    ```

    ```
- constructor：基于构造函数检测数据类型( 也是基于类的方式)
    ```

    ```
- object . prototype. toString.call()：检测数据类型最好的办法
    ```

    ```

### JS中的数学运算
> i++和以上两种不完全一样， 他是纯粹的数学运算
```
    let i='10';
        i=i+1 => '10'+1 => '101 '
    i+=1 => '101 '
    i++ => i=11
```

> i+t和++i都会是数学运算中的累加1，区别是计算的顺序
```
    let i=1;
    // 哪怕是有括号，也是先算5+i=6，再i+1，i=2；
    5+(i++)// 结果为5+1，然后i++;

    i=1;
    5+(++i)// =>先i累加1，然后拿累加后的结果去和5运算 =>7

```
```
    出道题:
    let i=3;
    console.log(5+(++i)+(i++)+3-2+(--i)+(i--)-2 );// 20
    console.log(i);// 3

```



## JS中的操作语句:判断、循环

#### 判断
>条件成立做什么?不成立做什么?
- if/else if/else
- 三元运算符
    + (条件)?(值1):(值2)
- switch case
    ```
    1.每一种CASE情况结束后最好都加上BREAK
    2. default等价于else，以上都不成立干的事情
    3.每一种case情况的比较用的都是三个等号，===，叫“绝对相等” 
    ```
- == VS ===（两等号与三等号）
    ```
    ==:相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较)
    '5'==5 =>TRUE

    ===:绝对相等(如果类型不一样，肯定不相等)
    '5'===5 =>FALSE

    项目中为了保证业务的严谨，推荐使用===
    ```

#### 循环
> 重复做某些事情就是循环.
- for循环
- for in循环
- for of循环( ES6新增)
- while循环
- do while循环

### 函数function
>函数就是一个方法或者一个功能体，函数就是把实现某个功能的代码放到- -起进行分装，以后想要操作实现这个功能，只需要把函数执行即可=>“封装”: 减少页面中的冗余代码，提高代码重复使用率(低耦合高内聚)
    洗衣机就是-一个函数，生产洗衣机就是封装- -个函数(把实现某些功能的代码封装进来)，生产的时候，不知道用户洗衣服的时候放什么水、衣服、洗衣液，我们需要提供出入口(提供的入口在函数中叫做形参，执行的时候放的具体东西函数中叫做实
    参)，洗完衣服需要能拿出来，洗衣机提供-一个出口( 在函数中叫做返回值:把函数
    处理后的结果能够返回给外面用)

- 创建函数
    + 形参
    + 返回值
- 执行函数
    + 实参
- arguments
- 函数底层运行机制
- 。。。

#### 创建函数
>创建函数的时候我们设置了形参变量，但如果执行的时候并没有给传递对应的实参值，那么形参变量默认的值是: undefined

>函数没有写RETURN，函数默认返回值是undefined

### 执行函数
>匿名函数
    匿名函数之函数表达式:把-一个匿名函数本身作为值赋值给其它东西，这种函数一般不是手动触发执行，而且靠其它程序驱动触发执行(例如:触发某个事件的时候把它执行等)

    ```
    document.body.onclick = function () { }
    setTimeout( function(){}, 1000); //=>设置定时器，1000MS后执行匿名函数
    ```
    
>匿名函数之自执行函数:创建完-一个匿名函数，紧接着就把当前函数加小括号执行

    ```
    (function(n){
        n=>100
    })(100);
    ```
### 浏览器常用的输出方式
- 1.在控制台输出：console.log/dir/table.. .
    + console.log():    
    + console.dir():
        ```
        输出一个对象的详细键值对信息
        ```
    + console.table():
        ```
        把一个多维JSON数组在控制台按照表格的方式呈现出来
        ```
- 2.浏览器窗口弹窗：alert/confirm/ prompt

    + alert(1);
        ```
        弹出提示窗口，显示1；
        ```
    + confirm( '确定要干啥吗? ' );
        ```
            确定和取消:选择型弹框
        ```
    + prompt('确定要干啥吗?写出原因! ');
        ```
            在CONFIRM的基础.上多了-一个输入框
        ```
        ```
        =>三种方式输出的结果都必先经过toString转换为字符串
        =>三种方式 会阻断JS代码的执行，只有当窗口关掉，JS才会继续运行
            for(leti=0;i<5;i++){
                alert(i);
                console.log('哈哈');
            }
        ```
- 3.在页面中写入信息
    + document.write
    ```
    =>和alert一样，输出的结果都是字符串
    ```



