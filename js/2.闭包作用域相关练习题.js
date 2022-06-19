/*
 * @Author: LLW
 * @Date: 2022-06-18 16:51:37
 * @Description: 请填写简介
 */

// // 1.开胃题
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);

// // 执行后的输出结果
// undefined
// 0
// 1
// 1
fun(0).fun(1).fun(2).fun(3);
