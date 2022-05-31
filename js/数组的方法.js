/* 
//数组
console.dir([]); 
    length: 0
    [[Prototype]]: Array(0)
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


/* 
push ：向数组末尾增加内容
unshift ：向数组开始位置增加内容
shift ：删除数组中的第一项

@params
	多个任意类型
@return
 	新增后数组的长度
*/
/* let ary = [10, 20];
ary.push(30, 'AA');
let res = ary.unshift(40, 'BB');
console.log(res);//输出数组长度
console.log(ary);

//基于原生ES6展开运算符,把原有的ary克隆一份,在新的数组中创建第一项,其余的内容使用原始ary中的信息即可,也算实现了向开始追加的效果
ary = [100, ...ary];
console.log(ary); */



let ary = [10, 20, 30, 40];
/* // 从数组中移除最后一个元素并返回它。如果数组为空,则返回undefined,并且不修改数组。
let res = ary.pop();
console.log(res, ary); //=>40
[10, 20, 30]
//基于原生JS让数组数组长度干掉一位,默认干掉的就是最后一 项
ary.length--; //=>ary.1ength = ary.length-1;
console.log(ary); */



/* 
ary.slice();

返回数组某个部分的副本。
对于start和end,可以使用负值索引表示从数组结尾偏移。
例如-2表示数组的倒数第二个元素。
@param start数组指定部分的起始索引。
如果start未定义,则切片从索引0开始。
@param end数组指定部分的结束索引。不包含索引'end'处的元素。
如果end未定义,则切片将扩展到数组的末尾。

思考:
    1.如果n/m为负数会咋地,如果n>m了会咋地,如果是小数会咋地,如果是非有效数字会咋地,如果m或者n的值比最大索引都会咋地?
    2.这种克隆方式叫做浅克隆,可以回去先看看深度克隆如何处理!
 */


/* 
ary.concat();

concat ： 拼接数组
@param items：需要拼接的数组或其他任意类型值
@return ： 返回拼接后的数组,原来数组不改变
*/


/* 
ary.toString();

把数组转换为字符串.
@params 
@return 转换后的字符串( 原来数组不变)
*/


/* 
ary.join();

将数组的所有元素添加到一个字符串中,并由指定的分隔符字符串分隔。
let res = ary.join('+')	// '10+20+30+40'
console.log(eval(res));  //  =>100 eva1把字符串变为JS表达式执行
*/


/* 
ary = [10, 20, 30, 10, 20, 30];
console.log(ary.index0f(20)); //=>1
console.log(ary.lastIndex0f(20)); //=>4

//验证ARY中是否包含'靓仔'
if (ary.index0f('靓仔') === -1) {
    //不包含
}
//ES6新提供的includes方法判断
console.log(ary.includes('靓仔'));
if(ary.includes('靓仔')){
    // 包含
}
 */


/**
    对数组中的元素进行反向操作。(把数组倒过来)
    这个方法改变数组并返回对同一个数组的引用。
*/
ary = [12, 15, 9, 28, 10, 22];
ary.reverse();
console.log(ary); //=>[22,10,8,9,15,12]


// SORT方法中如果不传递参数,是无法处理10以上数字排序的(它默认按照每一项第一个字符来排,不是我们想要的效果)
    ary = [12, 15, 9, 28, 10, 22];
    ary.sort();
console.log(ary); //=> [10, 12, 15,22, 28,9]

//想要实现多位数正常排序,需要给SORT传递一-个函数,函数中返回a-b实现升序,返回b-a实现降序
    ary = [12, 15, 9, 28, 10, 22];
// ary.sort(function(a,b){ return a-b; });
// a和b是相邻的两项
    ary.sort((a, b) => a - b);
    console.log(ary);