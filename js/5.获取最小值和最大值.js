/*
 * @Author: LLW
 * @Date: 2022-06-20 09:20:37
 * @Description: 请填写简介
 */

/*获取数组中的最大值和最小值*/
let ary = [12, 24, 13, 8, 35, 15];
/* 解决方案一: 先排序,第一项和最后一项就是我们需要的 */
ary.sort(function (a, b) {
    return a - b;
});
let min = ary[0];
let max = ary[ary.length - 1];
console.log(min, max);
