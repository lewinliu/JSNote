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
// ary = [12, 15, 9, 28, 10, 22];
// ary.reverse();
// console.log(ary); //=>[22,10,8,9,15,12]


/* // SORT方法中如果不传递参数,是无法处理10以上数字排序的(它默认按照每一项第一个字符来排,不是我们想要的效果)
    ary = [12, 15, 9, 28, 10, 22];
    ary.sort();
console.log(ary); //=> [10, 12, 15,22, 28,9]

//想要实现多位数正常排序,需要给SORT传递一-个函数,函数中返回a-b实现升序,返回b-a实现降序
    ary = [12, 15, 9, 28, 10, 22];
// ary.sort(function(a,b){ return a-b; });
// a和b是相邻的两项
    ary.sort((a, b) => a - b);
    console.log(ary); */



/* // 遍历数组中每一项的方法
forEach
map
filter
find
reduce
some
every
.. .
 */
/* //forEach()
ary.forEach((item, index) => {
    // 数组中有多少项,函数就会被默认执行多少次
    // 每一次执行函数: item是数组中当前要操作的这一项, index是当前项的索引
    console.log('索引: ' + index + '内容:' + item);
}) */


//数组去重
// ary = [1, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
// console.log(ary);

/* //方法一：includes不兼容
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
ary = newAry; */

/* // 方法二：includes不兼容
let newAry = [];
ary.forEach(item => {
    if (newAry.includes(item)) return;
    newAry.push(item);
});
console.log(newAry);
ary = newAry; */

/* // 方法三：兼容版,性能不好
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3,2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    console.log('-i:' + i + ", item:" + item);
    for (let j = i + 1; j < ary.length; j++) {
        console.log('+++j:' + j + ", ary[j]:" + ary[j]);
        if (item === ary[j]) {
            console.log('delete:' + ary[j]);
            // 删除以后,数组索引提前一位
            ary.splice(j, 1);
            // 调整索引位置
            j--;
        }
    }
    console.log("****ary:" + ary);
}
console.log(ary); */


/* //  方法四：性能比较优&兼容版
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3,2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);
// 1.创建一个空对象
let obj = {};
// 2. 循环数组中的每一项,把每一项向对象中进行存储=> item: item
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    // 3.每一次存储之前进行判断:验证obj中是否存在这一项
    if (obj[item] !== undefined) {
        //已经存在这一项
        ary.splice(i, 1);
        i--;
        continue;
    }
    // 键名和值相同
    obj[item] = item;
}
console.log(ary);
 */

// 基于splice实现删除性能不好:当前项被删后,后面每一项的索引都要向前提一位,如果后面内容过多,一定影响性能
/* // 方法五：性能优&兼容版
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3, 2, 3, 1, 2, 1, 2, 3, 2, 1, 2, 3];
console.log(ary);
// 1.创建一个空对象
let obj = {};
// 2.循环数组中的每一项,把每一项向对象中进行存储=> item: item
for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    // 3.每一次存储之前进行判断:验证obj中是否存在这一项
    if (obj[item] !== undefined) {
        // splice删除引起数组塌陷
        // ary.splice(i, 1);
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
 */

/* //封装去重方法
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
 */

// // 方法六：正则去重
// ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];
// // 升序排序
// ary.sort((a, b) => a - b);
// // 将数组转换成字符串，用‘@’符连接
// let str = ary.join('@') + '@';
// // \d 数字， \d+ 1到多个数字，  (\d+@)多个数字后面有@
// // \1+ 出现1到多位跟前面一样的内容
// // \1* 出现0到多位跟前面一样的内容
// // g 全局匹配
// let reg = /(\d+@)\1*/g;

// ary = [];
// str.replace(reg, (n, m) => {
//     m = Number(m.slice(0, m.length - 1));
//     ary.push(m);
// });
// console.log(ary);



//基于ES6的Set (对应的Map)实现去重
ary = [1, 3, 1, 2, 1, 2, 3, 2, 1, 32, 3, 12, 3, 1, 2, 1, 2, 3, 2, 1, 52, 3];
ary = [...new Set(ary)];
console. log(ary) ;
