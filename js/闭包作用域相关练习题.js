/*
 * @Author: LLW
 * @Date: 2022-06-18 16:51:37
 * @Description: 请填写简介
 */
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n);
        }
    };
}
var C = fun(0).fun(1);
C.fun(2);
C.fun(3);
