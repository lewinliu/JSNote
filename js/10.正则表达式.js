/*
 * @Author: LLW
 * @Date: 2022-06-26 08:16:07
 * @Description: 正则表达式
 */


let inpTxt = document.getElementById('inp-txt'),
    submit = document.getElementById('submit'),
    userPassInp = '';

// submit.onclick = function () {
//     !!inpTxt.value ? userPassInp = inpTxt.value : null;
//     inpTxt.value = '';
//     alert(userPassInp);
// };


// let str = "good good study ，day day up!";
// //=> 学正则就是用来制定规则 (是否包含数字)
// let reg = /\d+/;
// reg.test(str); //=> false

// str = "2022-06-26";
// reg.exec(str); //=> ['2022', index: 0, input: '2022-06-26', groups: undefined]


// //=>字面量创建方式(两个斜杠之间包起来的，都是用来描述规则的元字符)
// let reg1 = /\d+/;
// //=>构造函数模式创建 两个参数:元字符字符串，修饰符字符串
// let reg2 = new RegExp("\\d+");


/*
    常用的元字符
*/

//=> 1.量词元字符:设置出现的次数

/*

* 		零到多次
+		一到多次
? 		零次或者一次
{n}      出现n次
{n,} 	出现n到多次
{n, m} 	出现n到m次
*/

//=>2.特殊元字符:单个或者组合在一起代表特殊的含义
/**

\       转义字符(普通 -> 特殊 -> 普通)
.       除'\n' (换行符)以外的任意字符
^       以哪一个元字符作为开始
$       以哪一个元字符作为结束
\n      换行符
\d      0~9 之间的一个数字
\D      非数字(大写和小写的意思是相反的)
\w      数字、字母、下划线中的任意一一个字符
\s      一个空白字符(包含空格、制表符、换页符等)
\t      一个制表符(一个TAB键: 四个空格)
x|y     x或者y中的一个字符
[xyz]   x或者y或者z中的一个字符
[^xy]   除了x/y以外的字符
[a-z]   指定a-z这个范围中的任意字符，[0-9a-ZA-Z_]===\w
[^a-z]  上一个的取反“非”
()      正则中的分组符号
(?:)    只匹配不捕获
(?=)    正向预查
(?!)    负向预查
*/

/*正则表达式常用的修饰符: img*/
/**
i => ignoreCase 忽略单词大小写匹配
m => multiline  可以进行多行匹配
g => global     全局匹配

/A/.test('lalala') => false
/A/i.test('lalala') => true
*/


// /**
//  * 验证是否为有效数字
//  * 规则分析
//  * 1.可能出现+ -号，也可能不出现
//  * 2.一位0-9都可以，多位首位不能是0
//  * 3.小数部分可能有可能没有，一旦有后面必须有小数点+数字
//  */
// // ([1-9]\d+) 多位数
// let reg5 = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;


// /**
//  * 验证密码
//  * =>数字、 字母、下划线
//  * =>6~16位
//  */

// // 正则方式
// let val = userPassInp.value,
//     reg = /^\w{6,16}$/;
// let flag = reg.test(val);
// if (!flag) {
//     alert('格式不正确! ');
// }

// // // 不用正则
// // let area = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '_'];
// // function checkPass(val) {
// //     if (val.length < 6 || val.length > 16) {
// //         alert('长度必须介于6-16位之间!');
// //         return;
// //     }
// //     for (let i = 0; i < val.length; i++) {
// //         let char = val[i];
// //         if (!area.includes(char)) {
// //             alert('格式不正确! ');
// //             return;
// //         }
// //     }
// // }




// /*
// 验证真实姓名的
//     1.汉字正则: /^[\u4E00-\u9FA5]$/
//     2.名字长度2~10位
//     3.可能有译名.汉字
// */
// console.log('\u4E00', '\u9FA5');    // 一 龥
// let reg = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;

// submit.onclick = function () {
//     userPassInp = inpTxt.value + '';
//     inpTxt.value = '';

//     alert(reg.test(userPassInp) ? '有效名字' : '无效名字');
// };




// /**
//  * 验证邮箱
//  *      => \w+((-\w+)I(\.\w+))*
//  *      1.开头是(数字 字母 _) ,1到多位
//  *      2.还可以是(- 数字 字母 _)或者(. 数字 字母 _) ，整体零到多次
//  *      //=> 邮箱的名字由(字母 数字 .  _ - )几部分组成，但是(- .)不能连续出现也不能作为开始
//  */
// let regEmail = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;


//=> @[A-Za-z0-9]+
// 1.@后面紧跟着:数字、字母(1-多位)

//=> (C\. |-) [A-Za-z0-9]+)*
// 1.对@后面名字的补充
// 多域名 .com.cn
// 企业邮箱zxt@zhufeng- pei xun-office. com

//=> \.[A-Za-z0-9]+
// 1.这个匹配的是最后的域名(. com/. cn/. org/.edu/. net...)
// dadasda@qq. com. cn




// /**
//     1.一共18位
//     2.最后一位可能是大写的X
//     3.身份证号前6位：省市县
//     4.中间8位：年月日
//     5.最后四位：
//         最后一位 => X或者数字
//         倒数第二位 => 偶数女奇数男
//         其余的是经过算法算出来的
// */
// // let reg = /^\d{17}(\d|X)$/;
// //=> 小括号分组的第二个作用:分组捕获，不仅可以把大正则匹配的信息捕获到，还可以单独捕获到每个小分组的内容
// let regID = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/;
// regID.exec("130828199012040617"); //=> ["130828199012040617",' '130828"， "1990"， ' '12"，"04" ，"1"，"7"，...]





// //=> 正则表达是中的部分内容是变量存储的值
// // 1.两个斜杠中间包起来的都是元字符( 如果正则中要包含某个变量的值，则不能使用字面量方式创建)
// let type = "靓仔";
// reg = /^@"+type+"@$/;
// console.log(reg.test("@靓仔@")); //=> false
// console.log(reg.test(' @""typeeeee"@')); //=> true
// reg = new RegExp("^@" + type + "@$");
// console.log(reg.test("@靓仔@"));//=> true



/*
正则的捕获
实现正则捕获的办法
    正则RegExp.prototype. 上的方法
        exec
        test
    字符串String.prototype.上支持正则表达式处理的方法
        replace
        match
        splite
        ......
*/


/*
基于exec实现正则的捕获
    1.捕获到的结果是null或者一个数组
        第一项:本次捕获到的内容
        其余项:对应小分组本次单独捕获的内容
        index:当前捕获内容在字符串中的起始索引
        input:原始字符串
    2.每执行一次exec只能捕获到一个符合正则规则的
        => 正则捕获懒惰性：不管执行多少次，默认只捕获第一个
*/

// //=> 实现正则捕获的前提是:当前正则要和字符串匹配，如果不匹配捕获的结果是null
// let str = "liu靓仔2022yangfan2020qihang2023";
// let reg = /$\d+^/;
// console.log(reg.test(str)); //=> false
// console.log(reg.exec(str)); //=> null


// // 懒惰性捕获
// let str = "liu靓仔2022yangfan1234qihang2023";
// let reg = /\d+/;
// /*
// reg.lastIndex:当前正则下一次匹配的起始索引位置
//     懒惰性捕获的原因:默认情况下lastIndex的值不会被修改，每一次都是从字符串开始位置查找，所以找到的永远只是第一个
// */
// console.log(reg.lastIndex); //=> 0 下面匹配捕获是从STR索引零的位置开始找
// console.log(reg.exec(str));
// console.log(reg.lastIndex); //=> 0 第一次匹配捕获完成，lastIndex没有改变， 所以下一次exec依然是从字符串最开始找，找到的永远是第一个匹配到的

// reg = /\d+/g; // 设置全局匹配修饰符 g 后，第一次匹配完，lastIndex会自己修改
// console.log(reg.exec(str)); // ["2022", ...]
// console.log(reg.lastIndex); // 9
// console.log(reg.exec(str)); // ["1234", ...]
// console.log(reg.lastIndex); // 20
// console.log(reg.exec(str)); // ["2023", ...]
// console.log(reg.lastIndex); // 30
// console.log(reg.exec(str)); //=> null 当全部捕获后，再次捕获的结果是null，但是lastIndex又回归了初始值零，再次捕获又从第一个开始了...
// console.log(reg.lastIndex); // 0
// console.log(reg.exec(str)); // ["2022", ...]

// /*
// 	错误示范
// */
// let str1 = "liu靓仔2022yangfan1234qihang2023";
// let reg1 = /\d+/g;
// if (reg1.test(str1)) {
//     //=> 验证一下:只有正则和字符串匹配我们才捕获
//     console.log(reg1.lastIndex); //=>9 基于 TEST 匹配验证后,LASTINDEX 已经被 修改为第一次匹配后的结果，所以下一次捕获不再从头开始了
//     console.log(reg1.exec(str1)); //=>["1234"...]
// }



// //=> 需求:编写一个方法 execAll,执行一次可以把所有匹配的结果捕获到(前提正则一定要设置全局修饰符g)
// ~function () {
//     function myExecAll(str = '') {
//         //=> str:要匹配的字符串
//         //=> this:RegExp的实例(当前操作的正则)
//         //=> ary存储最后所有捕获的信息,res存储每一次捕获的内容

//         let ary = [],
//             res = this.exec(str);

//         //=> 验证当前正则是否设置了 g,不设置则不能在进行循环捕获了，否则会导致死循环
//         if (this.global) {
//             while (res) {
//                 ary.push(res[0]);
//                 res = this.exec(str);
//             }
//         }
//         console.log(ary);
//         return ary;
//     }
//     RegExp.prototype.myExecAll = myExecAll;
// }();

// let str = "liu靓仔2022yangfan1234qihang2023";
// let reg = /\d+/g;
// reg.myExecAll(str); // ['2022', '1234', '2023']

// reg = /\d+/;
// reg.myExecAll(str); // []

// // 字符串中的捕获方法
// reg = /\d+/g;
// console.log(str.match(reg)); // ['2022', '1234', '2023']




// /*
//     分组捕获
// */
// //=>身份证号码
// let str = "130828199012040112";
// let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/;
// console.log(reg.exec(str));
// console.log(str.match(reg));
// /*
// ['130828199012040112', '130828', '1990', '12', '04', '1', '2', index: 0, input: '130828199012040112', groups: undefined]
// */
// //=> 第一项:大正则匹配的结果
// //=> 其余项:每一个小分组单独匹配捕获的结果
// //=> 如果设置了分组(改变优先级)，但是捕获的时候不需要单独捕获，可以基于?:来处理

// reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/;




// // //=>既要捕获到{数字}，也想单独的把数字也获取到，例如:第一次找到{0}还需要单独获取0
// // let str = "{0}年{1}月{2}日";
// // //=>不设置g只匹配一次，exec和match获取的结果一致(既有大正则匹配的信息，也有小分组匹配的信息)
// // let reg = /\{(\d+)\}/;
// // console.log(reg.exec(str));
// // console.log(str.match(reg));
// // // ["{0}", "0"....]

// let reg = /\{(\d+)\}/g;
// //console.log(str. match(reg)); //=>["{0}"， "{1}", "{2}"]多次匹配的情况下, match只能把大正则匹配的内容获取到，小分组匹配的信息无法获取
// let aryBig = [],
//     arySmall = [],
//     res = reg.exec(str);

// while (res) {
//     let [big, small] = res;
//     aryBig.push(big);
//     arySmall.push(small);
//     res = reg.exec(str);
// }
// console.log(aryBig, arySmall);
// // ["{0}", "{1}", "{2}"]
// // ["0", "1", "2"]



// //=>分组的第三个作用:“分组引用”
// let str = "book"; //=>"good"、 "look"、 "moon"、 "foot". . .
// let reg2 = /^[a-ZA-z]([a-ZA-z])\1[a-ZA-z]$/; 
// //=>分组引用就是通过“\数字”让其代表和对应分组出现一模一样的内容
// console.log(reg2.test("book")); //=>true
// console.log(reg2.test("deep")); //=>true
// console.log(reg2.test("some")); //=>false




// let str = "啊啊2022@2023噢噢";
// //=>正则捕获的贪婪性:默认情况下，正则捕获的时候，是按照当前正则所匹配的最长结果来获取的
// let reg = /\d+/g;
// console.log(str.match(reg)); //=> ["2022","2023"]

// //=>在量词元字符后面设置?,取消捕获时候的贪婪性(按照正则匹配的最短结果来获取)
// reg = /\d+?/g;
// console.log(str. match(reg)); //=> ["2"， "0"，"2"，"2","2"，"0"，"2"，"3"]



/*
// 问号在正则中的五大作用
    问号左边是非量词元字符:本身代表量词元字符,出现零到一次
    问号左边是量词元字符:取消捕获时候的贪婪性
    (?:)只匹配不捕获
    (?=)正向预查
    (?!)负向预查
*/




// let str = "{0}年{1}月{2}日";
// let reg = /\{(\d+)\}/g;
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //=>"0"
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //=>"1"
// console.log(reg.test(str)); //=>true
// console.log(RegExp.$1); //=>"2" I
// console.log(reg.test(str)); //=>false
// console.log(RegExp.$1); //=>"2", 存储的是上次捕获的结果

// //=> RegExp.$1~RegExp.$9: 获取当前本次正则匹配后，第一个到第九个分组的信息


// /**
//  * replace
//  */
// let str = "liangzai@1234|liangzai@1234";
// //=> 把"1234"替换成"123456"

// // 1.不用正则
// str = str.replace("1234","123456").replace("1234","123456");
// console.log(str);
// // 结果:"liangzai@12345656|liangzai@1234";

// // 2.使用正则
// let str2 = "liangzai@1234|liangzai@1234";
// str2 = str2.replace(/1234/g,"123456");
// console.log(str2);
// // liangzai@123456|liangzai@123456


// // 案例:把时间字符串进行处理
// let time = "2019-08-13";
// //=>变为"2019年08月13日"
// let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/;

// // //=>这样可以实现
// // time = time.replace(reg, "$1年$2月$3日");
// // console.log(time); //=>2019年08月13日

// //=>还可以这样处理[str]. replace([reg] , [function])
// // 1.首先拿REG和TIME进行匹配捕获，能匹配到几次就会把传递的函数执行几次(而且是匹配一次就执行一次)
// // 2.不仅把方法执行，而且REPLACE还给方法传递了实参信息(和exec捕获的内容一致的信息: 大正则匹配的内容，小分组匹配的信息....)
// // 3.在函数中我们返回的是啥，就把当前大正则匹配的内容替换成啥
// /*
// time = time.replace(reg, (big, $1, $2, $3) => {
//     //=>这里的$1~$3是我们自己设置的变量
//     console.log(big, $1, $2, $3);
// });
// */
// time = time.replace(reg, (...arg) => {
//     let [, $1, $2, $3] = arg;
//     $2.length < 2 ? $2 = "0" + $2 : null;
//     $3.length < 2 ? $3 = "0" + $3 : null;
//     return $1 + "年" + $2 + "月" + $3 + "日";
// });
// console.log(time);

// // 单词首字母大写
// let str = "good good study, day day up! ";
// let reg = /\b([a-ZA-z])[a-ZA-z]*\b/g;
// //=> 函数被执行了六次，每一次都把正则匹配信息传递给函数
// //=> 每一次ARG:["good","g"] ["good","g"] ["study","s"]...
// str = str.replace(reg, (...arg) => {
//     let [content, $1] = arg;
//     $1 = $1.toUpperCase();
//     content = content.substring(1);
//     return $l + content;
//     I
// });
// console.log(str); //=>"Good Good Study, Day Day Up!
