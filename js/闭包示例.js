/*
 * @Author: LLW
 * @Date: 2022-06-10 16:51:48
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-11 09:15:00
 * @Description: 请填写简介
 */
(function (global, factory) {
    // ...
    factory(global);
})(window, function (window, noGlobal) {
    // ...
    var jQuery = function (selector, context) {
        // ...
        console.log('jQuery: ' + selector + ',' + context);
    }
    // => 通过给全局对象增加属性:jQuery和$，把私有的jQuery方法暴露到全局作用域下，供外面使用(等价于return jQuery) (外界需要使用函数中的私有内容，我们可以基于wi ndow. xxx和return xxx两种方式实现这个需求)
    window.jQuery = window.$ = jQuery;
});


jQuery(1, 2);

//=>原生JS
var xxx = (function () {
    //.... A自己写的代码
    return xxx;
})();

(function () {
    //....B自己写的代码
    window.xxx = xxx;
})();

//=>JQ 
$(function () {
    //...这样写在某些角度上也是为了减少全局变量
});


    