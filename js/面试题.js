//数据类型与运算符
/* let a = 10 + null + true + [] + undefined + '明明' + null + [] + 10 + false;
console.log(a); */
/*
*
10+null->10+0->10
10+true->10+1->11
11 +[]-> 11+''-> '11' 空数组变为数字，先要经历变为空字符串，遇到字符串，啥都别想了，直接变为字符串拼接

'11undefined明明null10false'
*/



//基本数据类型和引用数据类型
/* 
//题目一：
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
 */
/* 
//题目二：
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
 */
/* 
//题目三：
let a = {
    n: 1
};
let b = a;
a.x = a = {
    n: 1
};
console.logog(a.x);
console.log(b);
 */
/* 
//题目四：
let c = {
    n: 1
};
let d = c;
c.X = d;
 */

/* 
// 循环几次？打印机次？分别是什么？
for (var i = 0; i < 10; i++) {
    if (i >= 2) {
        i += 2;
        continue;
    }
    if (i >= 6) {
        i--;
        break;
    }
    i++;
    console.log(i);
}
console.log(i);
 */



