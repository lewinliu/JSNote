/*
 * @Author: LLW
 * @Date: 2022-08-01 09:11:20
 * @Description: 
 *          实现(5).add(3).minus(2),使其输出结果为: 6
 */

// 实现(5).add(3).minus(2),使其输出结果为: 6

~function () {

    function check(num) {
        num = Number(num);
        return isNaN(num) ? 0 : num;
    }

    function add(num) {
        return this + check(num);
    }

    function minus(num) {
        return this - check(num);
    }

    Number.prototype.add = add;
    Number.prototype.minus = minus;
}();

console.log((5).add(3).minus(2));
