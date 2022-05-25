var tabBox = document.getElementById("tabBox");

var navBox = document.getElementById("navBox");

var tabList = tabBox.getElementsByTagName('div');


var navList = navBox.getElementsByTagName('li');


/* //点击切换选项卡，无效
for (var i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
        changeTab(i);
    }
}
// 无效原因：
// 1. 只有JS代码加载完成才能看到页面
// 2. 只有看到页面用户才能点击
// 3. 加载到循环这个代码了i=0 i<3 i++
// 4. i=0 navList [0]. onclick=function(){...}绑定事件的时候方法没有执行，点击第一个LI的时候它才执行i++ =>1
// 5. i=1 navList[1].onclick=function(){...} i++ =>2
// 6. i=2 navList[2].onclick=function(){...} i++ =>3
// 7. 3<3不同过，循环结束，此时i记经是3了
// 8. 循环结束看到了页面，用户去点击了某一个页卡，接下来开始执行绑定的方法，方法中遇到了一个i，但是此时i已经是循环结束后的3了
 */


/*//==========解决办法一:自定义属性解决办法=========
//循环三个LI，给每一个LI都绑定点击事件
for (var i = 0; i < navList.length; i++) {
    // navList[i] :当前 循环下我们要操作的那个li (i变量存储的值是我们需要获取指定元素的索引)
    //在循环给每个LI绑定点击事件的时候，我们给每-一个li (元素对象)设置一个自定义属性myIndex，属性值存储的是当前li的索引
    navList[i].myIndex = i;
    navList[i].onclick = function () {
        // 我想用的是点击这个li的索引， 但是i不是
        // this是当前点击的这个元素li; this.myIndex获取的就是之前绑定在元素自定义属性上的索引值;
        changeTab(this.myIndex);
    }

}*/

/* // ==========解决办法二: 闭包 解决办法=========
for (var i = 0; i < navList.length; i++) {
    navList[i].onclick = (function (i) {
        return function(){
            changeTab(i);
        }
    })(i);
} */

/* // ==========解决办法三: let i，ES6中的let解决方案============
for (let i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
        changeTab(i);
    }
} */



for (var i = 0; i < navList.length; i++) {
    navList[i].mIndex = i;
    navList[i].onclick = function () {
        changeTab(this.mIndex);
    }
}

function changeTab(clickIndex) {

    for (var i = 0; i < navList.length; i++) {
        tabList[i].className = '';
        navList[i].className = '';
    }
    tabList[clickIndex].className = 'active';
    navList[clickIndex].className = 'active';
}

















//