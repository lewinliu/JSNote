/*
 * @Author: LLW
 * @Date: 2022-07-25 16:05:23
 * @Description: 请填写简介
 */

/* 原型扩展 */
~ function () {
    /**
     * 去除字符串中非数字并返回；
     */
    function myDelNaN() {
        return (this + '').replace(/[^\d]/g, '');
    }

    // 添加到字符串原型中
    String.prototype.myDelNaN = myDelNaN;
}();

let shopModules = (function ($) {

    //=>想要操作谁就先获取谁(项目中尽可能把创建变量提前并放在一-起)
    let $navList = $('.navbar-nav a'),
        $cardBox = $('.row'),
        $cardList = null,
        _DATA = null;

    //=>queryData:从服务器获取数据
    function queryData() {
        // 基于jQuery中的Ajax方法获取数据
        $.ajax({
            url: '/josn/data.json',
            method: 'GET',
            async: false,
            success: result => {
                // 从服务器获取数据成功会执行success，result存储的就是获取到的数据,数据默认转换为josn格式的对象
                _DATA = result;
            }
        });
    }

    //=>bindHtml:把数据绑定在页面中
    function bindHtml() {
        if (!_DATA && !_DATA.data) return;

        let htmlStr = ``;
        $.each(_DATA.data, (index, item) => {

            let {
                id, img,
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
        $cardBox.html(htmlStr);

        $cardList = $cardBox.children('.col');
    }

    //=>sortHandle:实现商城排序
    function sortHandle() {
        // 控制排序的自定义属性
        $navList.attr('data-type', -1);

        $navList.on('click', function () {
            //=>this:当前点击的元素（原生JS对象）=>$(THIS)变为jQuery对象
            let $this = $(this),
                sortord = $this.attr('data-sortord'); // 排序方式：时间价格等

            // 改变选中的这一项，其他项排序方式恢复默认
            $this.attr('data-type', $this.attr('data-type') * - 1).siblings().attr('data-type', -1);

            // 进行排序
            $cardList.sort((B, A) => {
                let $B = $(B),
                    $A = $(A);

                // 去除字符串中的非数字，再比较；
                $A = $A.attr(sortord).myDelNaN();
                $B = $B.attr(sortord).myDelNaN();

                // 根据 dataType 来决定是升序还是降序
                return ($B - $A) * $this.attr('data-type');
            });

            $cardList.each((index, item) => $cardBox.append(item));
        });
    }

    return {
        //=>当前模块的入口:想让商城排序开始执行，我们只需要执行init，在init中 会按照顺序，依次完成具体的业务逻辑
        init() {//=>init:function(){}
            queryData();
            bindHtml();
            sortHandle();
        }
    }
})(jQuery);

shopModules.init();
