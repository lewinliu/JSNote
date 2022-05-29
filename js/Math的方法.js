//Math

/* console.log(typeof Math); //=>"object"
console.dir(Math); */
/* 
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
 */


// Math中常用的属性和方法

/* // 1. Math.abs([number value]);  获取绝对值(绝对值永远是正数或者零)
console.log(Math.abs(-12.5)); //=>12.5
console.log(Math.abs(12)); //=>12
console.log(Math.abs(0)); //=>0
//传递的不是数字类型的值:先基于Number()转换为数字再处理
console.log(Math.abs('-1')); //=>1
console.log(Math.abs('-1px')); //=>NaN
console.log(Math.abs(true)); //=>1 */


/* // 2. Math.ceil / floor([number value]); 把一个数向.上取整/向下取整
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
 */
/* // 3. Math.round();    四舍五入
console.log(Math.round(12)); //=>12
console.log(Math.round(12.1)); //=>12
console.log(Math.round(12.5)); //=>13 正数中. 5属于入
console.log(Math.round(12.9)); //=>13
console.log(Math.round(-12.1)); //=>-12
console.log(Math.round(-12.5)); //=>-12负数中. 5属于舍
console.log(Math.round(-12.9)); //=>-13 */

/* // 4.Math.max | min(va1[val1],[val2],...);    获取一堆数中的最大值和最小值
console.log(Math.max(12, 5, 68, 23, 45, 3, 27)); //=>68
console.log(Math.min(12, 5, 68, 23, 45, 3, 27)); //=>3
// 思考题:如何基于Math.max/min获取数组中的最大值最小值?
Math.max([12, 5, 68, 23, 45, 3, 27]); //=>NaN   此处是只传第一个值，是个数组，和内置的语法要求不符 */

/* // 5. Math.sqrt/pow();   
// sqrt:给一个数开平方;
// pow :计算一个数的多少次幂;
console.log(Math.sqrt(9)); //=>3符 合N*N=M这样的M才能整开平方
console.log(Math.sqrt(-9)); //=>NaN 负数开不了平方
console.log(Math.pow(2, 10)); //=>1024 */

// 6. Math.random();	// 获取0~1之间的随机小数
// 获取[n~m]之间的随机整数
/* function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
} */
let ran = (min, max) => Math.round(Math.random() * (max - min) + min);

for (let i = 0; i < 100; i++) {
    console.log(i + ':' + ran(1, 5));
}