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


/**
 * 验证邮箱
 *      => \w+((-\w+)I(\.\w+))*
 *      1.开头是(数字 字母 _) ,1到多位
 *      2.还可以是(- 数字 字母 _)或者(. 数字 字母 _) ，整体零到多次
 *      //=> 邮箱的名字由(字母 数字 .  _ - )几部分组成，但是(- .)不能连续出现也不能作为开始
 */
let regEmail = /^\W+((-\W+)1C\.\W+))*@[A-Za-z0-9]+C(\.1-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

//=> @[A-Za-z0-9]+
// 1.@后面紧跟着:数字、字母(1-多位)

//=> (C\. |-) [A-Za-z0-9]+)*
// 1.对@后面名字的补充
// 多域名 .com.cn
// 企业邮箱zxt@zhufeng- pei xun-office. com

//=> \.[A-Za-z0-9]+
// 1.这个匹配的是最后的域名(. com/. cn/. org/.edu/. net...)
// dadasda@qq. com. cn


/**
	1.一共18位
	2.最后一位可能是大写的X
	3.身份证号前6位：省市县
	4.中间8位：年月日
	5.最后四位：
		最后一位 => X或者数字
		倒数第二位 => 偶数女奇数男
		其余的是经过算法算出来的
*/
// let reg = /^\d{17}(\d|X)$/;
//=> 小括号分组的第二个作用:分组捕获，不仅可以把大正则匹配的信息捕获到，还可以单独捕获到每个小分组的内容
let regIDNO = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/;
reg. exec ("130828199012040617"); //=> ["130828199012040617",' '130828"， "1990"， ' '12"，"04" ，"1"，"7"，...]
