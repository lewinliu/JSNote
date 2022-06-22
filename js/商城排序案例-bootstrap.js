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
    let filePath = 'josn/data.json';
    xhr.open('GET', filePath, false);
    // 监听服务器返回的状态信息（在HTTP状态码为200，请求状态为4的时候能拿到数据）
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            // 基于responseText获取响应回来的信息(JSON格式字符串)
            DATA = xhr.responseText;
        }
    };
    // 发送AJAX请求
    xhr.send();
    //把获取的JSON字符串转换为对象
    DATA = JSON.parse(DATA);

    console.log(DATA);
}();



/* 
// JSON字符串转换为对象
let str = '{"name":"靓仔"}';
let obj = JSON.parse(str);

// => 在IE低版本浏览器中，全局对象 window 中没有JSON这个对象，也就没有所谓的 parse 等方法了
obj = eval('(' + str + ')');
// => 基于 eval 可以实现，但是为了保证转换格式正确，我们需要把字符串用小括号包起来转换 
*/


// 把对象转换为JSON格式字符串: JSON.stringify
let obj = {
    name: "靓仔"
};
let str = JSON.stringify(obj); // 字符串化 
console.log(str);
