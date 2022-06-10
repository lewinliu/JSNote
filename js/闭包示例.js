/*
 * @Author: LLW
 * @Date: 2022-06-10 16:51:48
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-10 16:59:56
 * @Description: 请填写简介
 */
(function (global, factory) {})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
    var jQuery = function (selector, context) {
        // ...
        console.log('jQuery: ' + selector + ',' + context);
    }
    //=>通过给全局对象增加属性:jQuery和$，把私有的jQuery方法暴露到全局作用域下，供外面使用(等价于return jQuery) (外界需要使用函数中的私有内容，我们可以基于wi ndow. xxx和return xxx两种方式实现这个需求)
    window.jQuery = window.$ = jQuery;
});

$(1,2)
