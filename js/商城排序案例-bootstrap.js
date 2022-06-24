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


    // 2. 把获取的数据展示在页面中
    // 根据获取的DATA: DATA当中有多少项，我就动态创建出多少个CARD盒子(项目中都是基于字符串拼接的方式，把需要创建的CARD拼出来)
    let htmlStr = ``;
    DATA.data.forEach(item => {
        // ITEM是每一项(对象)，包含需要展示的每一个产品的详细信息:我们需要拿出每一项信息来展示到页面中(拼到模板字符串中)
        console.log(item);
        let {
            id,
            img,
            price,
            title,
            content,
            presentExp,
            feedback: {
                count,
                good
            },
            time
        } = item;

        htmlStr += `<div class="col mb-4" 
                        data-price="${price}"  
                        data-hot="${count}"
                        data-good="${good}"
                        data-time="${time}">
            <div class="card">
                <img src="${img}" class="card-img-top" alt="">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <small class="text-muted">
                        <p class="card-text">${content}</p>
                        <p class="card-text nowSells-text">${price}</p>
                        <p class="card-text">
                            <span class="label-text">${presentExp}</span>
                        </p>
                        <p class="card-text">
                            <span>${count}人评价</span>
                            <span>${good}%好评</span>
                        </p>
                        <p class="card-text">上架时间：${time}</p>
                    </small>
                </div>
            </div>
        </div>`;
    });

    // 将拼接好的页面元素字符串 htmlStr 插入页面元素 .row 当中
    let row = document.querySelector('.row');
    row.innerHTML = htmlStr;

    /*
    第二步:
        点击价格/热度/.上架时间，可以把内容按照升降序来排列
    */

    // 1.想要操作谁先获取谁(三个排序按钮)和所有的CARD产品内容
    let navList = document.querySelectorAll('.navbar-nav li'),
        cardList = document.querySelectorAll('.col');

    // 把类数组转换为数组，目的是为了使用SORT进行排序
    cardList = [].slice.call(cardList, 0);

    // 循环给所有的按钮绑定点击事件，点击的时候按照指定的规则排序
    for (let i = 0; i < navList.length; i++) {

        let element = navList[i];
        // 控制排序的自定义属性
        element['data-type'] = -1;
        // 绑定点击事件
        element.onclick = function () {
            // 只改变当前项，其余是-1
            [].forEach.call(navList, item => this === item ? item['data-type'] *= -1 : item['data-type'] = -1);

            // 进行排序
            cardList.sort((next, cur) => {
                // 根据点击的的内容进行排序，从自定义属性中获取
                let sortord = this.getAttribute('data-sortord');

                cur = cur.getAttribute(sortord);
                next = next.getAttribute(sortord);

                // 时间格式字符串去掉'-'
                if (sortord === 'data-time') {
                    //获取的是日期数据:我们要把字符串中的“”给去掉
                    cur = cur.replace(/-/g, '');
                    next = next.replace(/-/g, '');
                }

                // 根据 dataType 来决定是升序还是降序
                return (next - cur) * this['data-type'];
            });
            // 将排序后的结果添加进页面
            cardList.forEach(item => {
                row.appendChild(item);
            });
        };
    }

    /* navList[1]['data-type'] = -1;
    // 2.先实现按照价格的升序排序
    navList[1].onclick = function () {


        // 进行排序(按照每个产品中的价格进行升序)
        cardList.sort((next, cur) => {
            // => NEXT/CUR 存储的是每个元素对象(此时我们需要使用每个元素的价格:在数据绑定的时候，我们就把价格等信息绑定给当前元素的某个自定义属性，需要用的时候，直接基于自定义属性的方法获取到即可)
            cur = cur.getAttribute('data-price');
            next = next.getAttribute('data-price');

            // 根据 dataType 来决定是升序还是降序
            return (next - cur) * this['data-type'];
        });
        // 将排序后的结果添加进页面
        cardList.forEach(item => {
            row.appendChild(item);
        });
        // 排序状态改变
        this['data-type'] *= -1;
    } */

}();

// /* 
// // JSON字符串转换为对象
// let str = '{"name":"靓仔"}';
// let obj = JSON.parse(str);

// // => 在IE低版本浏览器中，全局对象 window 中没有JSON这个对象，也就没有所谓的 parse 等方法了
// obj = eval('(' + str + ')');
// // => 基于 eval 可以实现，但是为了保证转换格式正确，我们需要把字符串用小括号包起来转换 
// */


// // 把对象转换为JSON格式字符串: JSON.stringify
// let obj = {
//     name: "靓仔"
// };
// let str = JSON.stringify(obj); // 字符串化 
// console.log(str);
