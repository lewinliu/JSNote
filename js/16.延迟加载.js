/*
 * @Author: LLW
 * @Date: 2022-07-17 15:09:20
 * @Description: 图片延迟加载
 */
/* 
图片完全显示出来的条件
    A:盒子底边距离BODY(页面最顶端)的距离:盒子的高度+盒子距BODY的上偏移
    B:浏览器底边距离BODY的距离:一屏幕的高度+卷去的高度
    A<=B:盒子就完全出现在用户的视野中
让图片显示
    获取图片TRUE-IMG属性的值，赋值给SRC属性，当图片能正常加载出来后，让图片显示即可
 */

let imgBox = document.querySelector('.imgBox'),
    _img = imgBox.querySelector('img');

//=> 滚动到图片所在位置，再显示图片
window.onscroll = function () {
    //=>已经加载过就不要在重复加载了
    if (_img.isLoad) return;

    let html = document.documentElement,
        b = html.scrollTop + html.clientHeight,
        a = imgBox.offsetHeight + offset(imgBox).top;

    if (a <= b) {
        lazyImg(_img);// 显示图片
    }
}

//=> 显示图片
function lazyImg(curImg) {
    // 
    let trueImg = curImg.getAttribute('trueImg');
    curImg.src = trueImg;
    //校验图片是否能够正常加载出来:IMG.ONLOAD事件用来监听图片是否能加载
    curImg.onload = function () {
        curImg.style.display = 'block';
    };
    //=>设置自定义属性: isLoad存储当前图片已经加载过了
    curImg.isLoad = true;
}

/**
 * 
 */
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

    }
    return { parent: par, left: l, top: t };
}
