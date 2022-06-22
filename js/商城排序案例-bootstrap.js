/*
 * @Author: LLW
 * @Date: 2022-06-21 09:19:05
 * @Description: UI组件的使用
 */

/*
Ul组件库
有结构、样式、功能的库,里面提供很多开发中常用的组件,开发中直接把组件调取过来使用即可,无需从头开发(可能需要二次开发)
    Bootstrap (经常配合JQ-起用) : 支持响应式布局开发(栅格系统)
    vue : vue element/iview
    react : antd
    EasyUl / AmazeUl ...
*/

~ function () {
    /*
        第一步:从服务器获取需要展示的数据，然后绑定在页面中
    */
    // 1.基于AJAX获取服务器端数据,把数据存储到DATA中
    // 创建AJAX的实例
    let DATA = null,
        xhr = new XMLHttpRequest;
    // 打开一个链接请求，基于GET请求和同步编程完成
    let url = 'data/data.json';
    xhr.open('GET', url, false);
    // 监听服务器返回的状态信息（在HTTP状态码为200，请求状态为4的时候能拿到数据）
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            // 基于responseText获取响应回来的信息
            DATA = xhr.responseText;
        }
    };
    // 发送AJAX请求
    xhr.send();
    console.log(DATA);
}();


