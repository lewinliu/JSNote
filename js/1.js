console.log('hello world!!!');

// ==: 进行比较的
/* 
console.log('AA == NaN ' + ('AA' == NaN));
console.log('10 == NaN ' + (10 == NaN));
console.log('NaN == NaN ' + (NaN == NaN)); */

// isNaN([val])'
/* console.log('10 isNaN ? ' + isNaN('10'));
console.log('10 isNaN ? ' + isNaN(10));
console.log('AA isNaN ? ' + isNaN('AA'));
console.log('NaN isNaN ? ' + isNaN(NaN)); */

// ==========Number===========
//把字符串转换为数字，只要字符串中包含任意-一个非有效数字字符(第一个点除外)结果都是NaN,空字符串会变为数字零
/* 
console.log(Number('123.4'));//123.4
console.log(Number('123.4px'));// NaN
console.log(Number('123.4.5'));// NaN
console.log(Number(''));//0 */

//布尔转换为数字
/* 
console. log(Number(true)); //=>1
console . log (Number(false)); //=>0
console. log(isNaN(false)); //=>false */

// nul1->0  undefined->NaN
/* 
console. log(Number(null)); //=>0
console . log (Number( undefined)); //=>NaN */

//把引用数据类型转换为数字，是先把他基于toString()方法转换为字符串，然后转换为数字
/* 
console. log(Number({name: '10'}));//=> NaN
console.log(Number({}));//=> NaN
console.log(Number([]));//=> 0  ,       [].toString => '' = 0
console.log(Number([12]));//=> 12 ,     [12].toString => '12' = 12
console.log(Number([1,2]));//=> NaN ,   1,2].toString => '1,2' = NaN
 */
/* 
let str = ' 12.5px';
console. log(Number(str)); //=>NaN
console. log(parseInt(str)); //=>12
console. log(parseFloat(str)); //=>12.5 
console. log(parseFloat( 'width:12.5px')); //=>NaN
 */


// let a = 10 + null + true + [] + undefined + '明明' + null + [] + 10 + false;
// console.log(a);
/*
*
10+null->10+0->10
*10+true->10+1->11
* 11 +[]-> 11+''-> '11' 空数组变为数字，先要经历变为空字符串，遇
到字符串，啥都别想了，直接变为字符串拼接
*/

/* 
console.log(Boolean(0));//false
console.log(Boolean(''));//false
console.log(Boolean(' '));//true
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean([]));//true
console.log(Boolean([12]));//true
console.log(1);//1
console.log(!1);//false
console.log(!!1);//true
 */

//如果条件只是一一个值，不是==/===/!=/>= 等这些比较，是要把这个值先转换为布尔类型，然后验证真假
/* if (1) {
console.log( '哈哈');
}
if ('3px'+ 3) {
//=>'3px3 '
console.log('呵呵');
}
if ('3px' - 3) {
// => NaN-3 => NaN =>false
console.log('嘿嘿' );
} */



/* 
let person = {
    name: '明明',
    age: 18,
    height: '180CM',
    weight: '80KG',
    1: 100
}
//获取属性名对应的属性值
// =>对象.属性名
// =>对象[属性名] 属性名是数字或者字符串格式的
// =>如果当前属性名不存在，默认的属性值是undefined
// =>如果属性名是数字，则不能使用点的方式获取属性值(SyntaxError)
console.log(person.name); //明明
console.log(person['age']); //18
console.log(person.sex); //undefined
console.log(person[1]); //
//console.log(person.1);//=>SyntaxError :语法错误

//设置属性名属性值
// =>属性名不能重复，如果属性名已经存在，不属于新增属于修改属性值|
person.GF = '如花';
person.name = '罗明明';
console.log(person['GF']);
console.log(person['name']);

//删除属性
// =>真删除:把属性彻底干掉
delete person[1]; 
// =>假删除: 属性还在，值为空
person.weight = null;
console.log(person);
 */

/*
*数组是特殊的对象
1.我们中括号中设置的是属性值，它的属性名是默认生成的数字，从零开始递增，而且这个数字代表每一项的位置，我们把其成为“索引” 
    => 从零开始，连续递增，代表每一项位置的数字属性名
2.天生默认一个属性名 lenght ， 存储数组的长度
*/
// let ary = [0,1,12, '哈哈', true, 13];
// console.log(ary.length);
// console.log(ary['length']);
// console.log(ary[0]);
// console.log(ary[1]);
// console.log(ary[2]);
//Uncaught ReferenceError: ar is not defined

/* 
// JS 中的数据类型检测
typeof '12 ' //=> string
typeof true //=> boolean
typeof null //=> object
typeof undefined //=> undefined
typeof 1 //=> number
typeof NaN //=> number

typeof {} //=> 'object'
typeof [] //=> 'object'
typeof /^/ //=> 'object'
 */
/*
typeof返回结果
1.首先是一个字符串.
2.字符串中包含对应的类型

typeof局限性
1. typeof null => "object" 但 是nu1l并不是对象
2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为只要是对象
数据类型，返回的结果都是"object"
*/
/* 
console. log(typeof typeof typeof [ ]);
//=> typeof [] => "object"
//=> typeof "object" => "string"
//因为typeof检测的结果都是字符串，所以只要两个及以上同时检测，最后结果必然是"string"
 */

let a = 10;
a > 0 ? (a < 10 ? a++ : a--) : (a > -10 ? a += 2 : null);
console.log('a=' + a);

switch (a) {
    case 0:
        console.log('case 0:' + a);
        break;
    case 9:
        console.log('case 9:' + a);
        break;
    default:
        console.log('default:' + a);
        break;
}
/* 
1.每一种CASE情况结束后最好都加上BREAK
2. default等价于else，以上都不成立干的事情
3.每一种case情况的比较用的都是三个等号，===，叫“绝对相等” 

== VS ===（两等号与三等号）
==:相等(如果左右两边数据值类型不同，是默认先转换为相同的类型，然后比较)
'5'==5 =>TRUE

===:绝对相等(如果类型不一样，肯定不相等)
'5'===5 =>FALSE

项目中为了保证业务的严谨，推荐使用===

*/

