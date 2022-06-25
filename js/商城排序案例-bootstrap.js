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
    /**
     * 去除字符串中非数字并返回；
     */
    function myDelNaN() {
        return (this + '').replace(/[^\d]/g, '');;
    }

    // 添加到字符串原型中
    String.prototype.myDelNaN = myDelNaN;
}();

~ function () {

    /*
        第一步:从服务器获取需要展示的数据，然后绑定在页面中
    */
    // 1.基于AJAX获取服务器端数据,把数据存储到DATA中
    let DATA = getData();

    // 2. 把获取的数据展示在页面中
    let row = document.querySelector('.row');
    // 处理数据，将拼接好的页面元素字符串 htmlStr 插入页面元素 .row 当中
    row.innerHTML = processData(DATA.data);

    /*
    第二步:
        点击:价格/热度/上架时间，可以把内容按照升降序来排列
    */
    // 1.想要操作谁先获取谁(三个排序按钮)和所有的CARD产品内容
    let navList = document.querySelectorAll('.navbar-nav a'),
        cardList = document.querySelectorAll('.col');

    // 页面排序
    elementSort(navList, cardList, row);

}();


/**
 * 请求数据并返回；
 */
function getData(method = 'GET', filePath = 'josn/data.json', async = false) {

    // 创建AJAX的实例
    let DATA = null,
        xhr = new XMLHttpRequest;
    // 打开一个链接请求，基于GET请求和同步编程完成
    xhr.open(method, filePath, async);
    // 监听服务器返回的状态信息（在HTTP状态码为200，请求状态为4的时候能拿到数据）
    // 基于responseText获取响应回来的信息(JSON格式字符串)
    xhr.onreadystatechange = () => (xhr.status === 200 && xhr.readyState === 4) ? DATA = xhr.responseText : null;
    // 发送AJAX请求
    xhr.send();
    //把获取的JSON字符串转换为对象
    DATA = JSON.parse(DATA);
    return DATA;
}

/**
 * 处理数据信息，完成拼接,并返回HTML字符串
 */
function processData(dataAry) {
    let htmlStr = ``;
    // 根据获取的DATA: DATA当中有多少项，我就动态创建出多少个CARD盒子(项目中都是基于字符串拼接的方式，把需要创建的CARD拼出来)
    dataAry.forEach(item => {
        // ITEM是每一项(对象)，包含需要展示的每一个产品的详细信息:我们需要拿出每一项信息来展示到页面中(拼到模板字符串中)
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
        } = item; // 解构赋值

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
    return htmlStr;
}

/**
 * 页面排序
 */
function elementSort(navList, cardList, parent) {
    // 把类数组转换为数组，目的是为了使用SORT进行排序
    cardList = [].slice.call(cardList, 0);

    navList.forEach(element => {
        // 控制排序的自定义属性
        element['data-type'] = -1;
        // 绑定点击事件
        element.onclick = function () {
            // 只改变当前项，其余是-1
            [].forEach.call(navList, item => this === item ? item['data-type'] *= -1 : item['data-type'] = -1);

            // 根据点击的的内容进行排序，从自定义属性中获取
            let sortord = this.getAttribute('data-sortord');
            // 进行排序
            cardList.sort((next, cur) => {

                // 去除字符串中的非数字，再比较；
                cur = cur.getAttribute(sortord).myDelNaN();
                next = next.getAttribute(sortord).myDelNaN();

                // 根据 dataType 来决定是升序还是降序
                return (next - cur) * this['data-type'];
            });
            // 将排序后的结果添加进页面
            cardList.forEach(item => parent.appendChild(item));
        }
    });
}
