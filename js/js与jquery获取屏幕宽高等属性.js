/*
 * @Author: LLW
 * @Date: 2022-07-26 13:38:34
 * @Description: 
 *      JavaScript、Jquery获取屏幕的宽度和高度等属性。
 */

// Javascript方法获取：
document.body.clientWidth //网页可见区域宽
document.body.clientHeight //网页可见区域高
document.body.offsetWidth //网页可见区域宽(包括边线的宽)
document.body.offsetHeight //网页可见区域高(包括边线的高)
document.body.scrollWidth //网页正文全文宽
document.body.scrollHeight //网页正文全文高
document.body.scrollTop //网页被卷去的高
document.body.scrollLeft //网页被卷去的左
window.screenTop //网页正文部分上
window.screenLeft //网页正文部分左
window.screen.height //屏幕分辨率的高
window.screen.width //屏幕分辨率的宽
window.screen.availHeight //屏幕可用工作区高度
window.screen.availWidth //屏幕可用工作区宽度

// JQuery方法获取：
($(window).height()); //浏览器当前窗口可视区域高度
($(document).height()); //浏览器当前窗口文档的高度
($(document.body).height());//浏览器当前窗口文档body的高度
($(document.body).outerHeight(true));//浏览器当前窗口文档body的总高度 包括border padding margin
($(window).width()); //浏览器当前窗口可视区域宽度
($(document).width());//浏览器当前窗口文档对象宽度
($(document.body).width());//浏览器当前窗口文档body的宽度
($(document.body).outerWidth(true));//浏览器当前窗口文档body的总宽度 包括border padding margin
