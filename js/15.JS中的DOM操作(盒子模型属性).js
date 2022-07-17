/*
 * @Author: LLW
 * @Date: 2022-06-30 08:54:25
 * @Description: 请填写简介
 */


/*
document.getElementById([ID])
[context].getElementsByTagName([TAG - NAME])
[context].getElementsByClassName([CLASS - NAME])
//=>在IE6~8中不兼容
document.getElementsByName([NAME])
//=>在IE浏览器中只对表单元素的NAME有作用
[context].querySelector([SELECTOR])
[context].querySelectorAll([SELECTOR])
//=>在IE6~8中不兼容
*/


//---------------------
/*
document
document.documentElement
document.head
document.body
childNodes 所有子节点
children 所有元素子节点
*/
//=> IE6~8中会把注释节点当做元素节点获取到

/*
parentNode
firstChild / firstElementChild
lastchild / lastElementchild
previoussibling / previousElementSibling
nextsibling / nextElementsibling
*/

//=> 所有带Element的，在IE6~8中不兼容


// DOM的增删改操作
/*
document.createElement([TAG - NAME])
document.createTextNode([TEXTCONTENT])
// 字符串拼接(模板字符串)，然后基于 innerHTML/innerText 存放到容器中

[PARENT].appendChild([NEW - ELEMENT])
[PARENT].insertBefore([ELEMENT], [NEW - ELEMENT])

[ELEMENT].cloneNode([TRUE / FALSE])
[PARENT].removeChild([ELEMENT])
*/


//=>设置自定义属性
/*
[ELEMENT].xxx = xxx;
console.log([ELEMENT].xxx);

[ELEMENT].setAttribute('xxx', xxx);
console.log([ELEMENT].getAttribute('xxx'));
[ELEMENT].removeAttribute('xxx');
*/

// 获取元素样式和操作样式
/*
//=>修改元素样式
[ELEMENT].style.xxx = xxx; //=>修改和设置它的行内样式
[ELEMENT].className = xxx; //=>设置样式类

//=>获取元素的样式
console.log([ELEMENT].style.xxx); //=> 获取的是当前元素写在行内上的样式,如果有这个样式，但是没有写在行内上，则获取不到
*/


// JS盒子模型属性
/*
基于一些属性和方法,让我们能够获取到当前元素的样式信息,例如：clientWidth、offsetWidth等；
    client
        width / height
        top / left
    offset
        width / height
        top / left
        parent
    scroll
        width / height
        top / left

方法: window.getComputedStyle([ELEMENT],[伪类]) / [ELEMENT].currentStyle
*/


/*
let box = document.getElementById('box');
//=> 获取盒子可视区域的宽高( 内容宽度+左右PADDING)
// 1.内容溢出与否对他无影响
// 2.获取的结果是没有单位的(其余的盒模型属性也是)
// 3.获取的结果是整数，它会自己进行四舍五入(其余的盒模型属性也是)
box.clientWidth;
box.clientHeight;

//获取当前页面一屏幕(可视化)区域的宽高
let winW = document.documentElement.clientWidth || document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;
*/

/* 
let box = document.getElementById('box');
//=> 在client的基础上加上 border ==盒子本身的宽高
box.offsetWidth
box.offsetHeight
//=> 在没有内容溢出的情况下，获取的结果和client是一样的
//=> 在有内容溢出的情况下，获取的结果约等于真实内容的宽高(上/左padding + 真实内容的高度/宽度)
// 1.不同浏览器获取的结果不尽相同
// 2.设置overflow属性值对最后的结果也会产生一定的影响
box.scrollWidth
box.scrollHeight

// 获取整个页面真实的高度
document.documentElement.scrollHeight || document.body.scrollHeight
 */


/* let box = document.getElmentById('box');
//=> 竖向滚动条卷去的高度
//=> 横向滚动条卷去的宽度
// 1.边界值
// min=0
// max=整个的高度scrollHeight - 一屏幕高度clientHeight
box.scrollTop
box.scrollLeft


//=>13个盒子模型属性，只有这两个是“可读写”的属性(既可以获取也可以设置对应的值)，其余的都是“只读”属性(不能设置值，只能获取)
box.scrollTop = 0;
 */

/* 
//=> offsetParent:获取它的父参照物(不一定是父元素)
//=> offsetTop:距离其父参照物的上偏移
//=> offsetLeft:距离其父参照物的左偏移(当前元素的外边框到父参照物的里边框)

function offset(ele) {
    let par = ele.offsetParent,
        l = ele.offsetLeft,
        t = ele.offsetTop;
    // 存在父参照物，而且还没有找到BODY
    while (par && par.tagName !== "BODY") {
        //在原有偏移的基础上累加:父参照物的边框、父参照物的偏移
        if (!/MSIE 8\.0/.test(navigator.userAgent)) {
            //IE8中偏移值自己就算了边框了，不需要我们在加边框的值navigator.userAgent获取当前浏览器的版本信息
            l += par.clientLeft;
            t += par.clientTop;

        }
        l += par.offsetLeft;
        t += par.offsetTop;
        //继续获取.上级参照物
        par = par.offsetParent;
        return { parent: par, left: l, top: t };
    }
}
let box = document.getElementById('box');
console.log(typeof offset(box)); */





