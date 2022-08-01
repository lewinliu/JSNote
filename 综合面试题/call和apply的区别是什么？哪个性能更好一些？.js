/*
 * @Author: LLW
 * @Date: 2022-08-01 08:42:02
 * @Description:
 *      1.call和apply的区别是什么？哪个性能更好一些？
 */


// 1.call和apply的区别是什么？哪个性能更好一些？

/* function fn() { };
let obj = {},
    arr = [10, 20, 30];

fn.call(obj, 10, 20, 30);
fn.apply(obj, arr);

//=> call的性能要比apply好那么一些(尤其是传递给函数的参数超过三个的时候)，所以后期开发的时候，可以使用call多一点

function fn(x, y, z) { }
fn.apply(obj, arr); //=>x=10 y=20 z=30
fn.call(obj, arr); //=>x=[10,20,30] y=z=undefined
fn.call(obj, ...arr); //=>基于ES6的展开运算符也可以实现把数组中的每一项依 次传递给函数 */

//=> 自己实现性能测试(只供参考) :任何的代码性能测试都是和测试的环境有关系的，例如CPU、内存、GPU等电脑当前性能不会有相同的情况，不同浏览器也会导致性能上的不同;

/* 
console.time();     // 可以测试出一段程序执行的时间
console.profile();  // 在火狐浏览器中安装FireBug，可以更精准的获取到程序每一个步骤所消耗的时间
 */
let i = 0;
console.time('A');
for (; i < 100000000; i++) {
}
console.timeEnd('A');
