/*
 * @Author: LLW
 * @Date: 2022-07-18 15:18:24
 * @Description: 请填写简介
 */


//=> 1.获取DOM元素
// 操作方法:JQ选择器(根据选择器类型快速获取需要的元素)

$([selector], [context])
$('#box')
$('.imgBox')
$('.box a')

let box = document.getElementsByClassName('box')[0];
// 上下文为box，box下的a标签
$('a', box)
// ...
/* 
JQ支持的选择器:传统CSS3中的大部分都支持、还支持一些自己独有的，
例如：
    :eq(n)  获取集合中索引为n的
    :gt(n)  大于这个索引的
    :lt(n)  小于这个索引的
 */


// 节点之间关系的属性:用JQ选择器获取的元素，我们设置变量名的时候一般都以$开始
//=> 还可以再设置对应的选择器进行二次筛选
let $box = $('.box');
$box.children('a'); //=> 获取对应的子元素
$box.find('a'); //=> 获取对应的后代元素
$('a').filter('.active'); //=>同级筛选(在所有的A中筛选出具备CLASS= 'ACTIVE'样式类的A)
$box.prev();
$box.prev('p'); //=> 获取它上一个标签名为P的哥哥
$box.prevAll();
$box.next();
$box.nextAll('.link');
$box.siblings(); //=> 获取所有的兄弟
$box.index(); //=> 获取索引
$box.parent(); //=> 获取父元素
$box.parents(); //=> 获取所有的祖先元素，一直到document



//----------------------------------------------------------------



//=> 2.DOM增删改
let str = `<div id="box" class='box'>哈哈哈08B9E36D.png</div>`;
$('body').append(str); //=> 追加到容器的末尾
$('body').html(str); //=> 等价于innerHTML
// $('body').html() 不传参是获取BODY中的HTML内容，除了这个方法还有text方法，等价于innerText

let $A = $('#box');
let $B = $('.list>li:eq(2)');
$A.insertBefore($B); //=> 把$A放到$B的前面
$A.insertAfter($B); //=> 把$A放到$B的后面
$(str).insertBefore($A); //=>把新增加的元素放到$A前面

$A.appendTo($B); //=> $B.append($A)在$B 容器的末尾追加$A
$A.prependTo($B); //=>$B.prepend($A)在$B 容器的开头追加$A

$A.clone(); //=> 实现元素的克隆
$A.remove(); //=> 实现元素的删除

//=> 操作表单元素的内容
$inp.val() // 获取表单元素内容
$inp.val('AAA') // 设置表单元素内容

// html和text方法是操作非表单元素内容的


//----------------------------------------------------------------


//=> 3.操作自定义属性
$box.attr('data-type'); //=> 获取自定义属性值
$box.attr('data-type', '属性值'); //=> 设置自定义属性值
$box.attr({
    'type': 1,
    'name': '靓仔'
}); // 批量设置
$box.removeAttr('data-type'); //=> 移除自定义属性
// 表单元素操作内置或者自定义属性一般使用prop和removeProp
$radio.prop('checked'); // 获取
$radio.prop('checked', true); // 设置
// ...


//----------------------------------------------------------------


//=> 4.操作CSS样式(盒子模型属性)

// 设置样式
$box.css('width', 200);
$box.css({ width: 200, height: 200 });
//=> css方法是设置或者批量设置样式 (原理是设置STYLE行内样式) ，写的值不加单位，方法会帮我们自动设置上px单位

$box.addClass('active');
/*
设置样式类(原理是对className的操作)
    addClass 添加，
    removeClass 是移除，
    hasClass 验证是否存在某个样式类，
    toggleClass 之前有就是移除，没有就是新增;
*/

// 获取样式
$box.css('width'); //=>不设置值的时候就是获取(原理是getComputedstyle，所有经过计算的样式都可以获取)
$box.offset(); //=> 当前元素距离BODY的左偏移和上偏移
$box.position(); //=> 当前元素距离父参照物的左偏移和上偏移
$box.width(); //=> .height() 获取盒子宽高(传递值进来就是设置)

$box.innerWidth();
$box.innerHeight();
$box.outerWidth();
$box.outerHeight();
//=> 等价于 clientWidth/Height 和 offsetWidth/Height

$(document).scrollTop([val]); //=>可以获取或者设置scrollTop的信息，对应的方法. scrollLeft


// 除了操作DOM , JQ中还提供了其它有助于项目开发的方法
//=>事件处理.
//$元素.on([event type],[function])
//$元素.off([event type],[function])
//$元素.bind() $元素.unbind() $元素.delegate()
//$元素.click()
$box.on('click', function () { }); I
$box.click(function () { });

//=>动画处理
// .animate([目标样式],[总时间],[运动方式],[运动完做的事情])
// .stop / .finish
$box.animate({
    top: 100,
    left: 200
}, 1000, 'linear', function () { });

//=>AJAX请求处理
let _DATA = null;
$.ajax({
    url: '',
    method: 'GET',
    async: false,
    dataType: 'json',
    success: result => {
        //result:当请求成功执行success函数，result就是从服务器获取的结果
        _DATA = result;
    }
});

//=>常用的工具方法
/* 
$.each([数组/类数组/对象],function(index, item) {
    //=>遍历数组中的每一项index:索引 item: 当前循环这一项(对象: index是属性名item属性值 )
}); 
*/
$('A').each(function (index, item) { });
/*
$.toArray()     转换为数组
$.merge()       数组合并
$.makeArray()   把类数组转换为数组
$.uniqueSort()  去重加排序
$.type()        数据类型检测
*/
