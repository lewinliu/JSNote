/*
 * @Author: LLW
 * @Date: 2022-07-28 l6:00:55
 * @Description: 请填写简介
 */

let cartModule = (function ($) {

    let $list = $('.list'),
        $info = $('.info'),
        $btns = null;

    let _DATA = [{
        id: 0,
        count: 0,
        price: 11.5,
        total: 0
    }, {
        id: 1,
        count: 0,
        price: 12.5,
        total: 0
    }, {
        id: 2,
        count: 0,
        price: 5.5,
        total: 0
    }, {
        id: 3,
        count: 0,
        price: 9.5,
        total: 0
    }, {
        id: 4,
        count: 0,
        price: 13.5,
        total: 0
    }];

    //=>render :按照数据模型渲染视图
    function render() {
        let str = ``;
        $.each(_DATA, (index, item) => {
            let {
                id,
                count,
                price,
                total
            } = item;

            str += `<li>
                    <i group="${id}">-</i>
                    <em>${count}</em>
                    <i group="${id}">+</i>
                    <span>
                        单价: <strong>${price}元</strong>
                        小计: <strong>${total}元</strong>
                    </span>
                </li>`;
        });
        $list.html(str);
        //渲染总计信息区视图
        let counts = 0,
            totals = 0,
            maxprice = 0;
        _DATA.forEach(item => {
            counts += item.count;
            totals += item.total;
            if (item.count > 0) {
                item.price > maxprice ? maxprice = item.price : null;
            }
        });

        $info.html(`<span>商品公合计: <em>${counts}</em>件;</span>
        <span>共花费了: <em>${totals}</em> 元;</span>
        <span>其中最贵的商品单价是: <em>${maxprice}</em>元.</span>`);

        handle();
    }

    //=>handle:点击按钮操作(不操作DOM，只改变_DATA的数据)
    function handle() {
        $btns = $list.find('i');
        $btns.on('click', function () {
            let $this = $(this),
                n = $this.index(),
                group = parseFloat($this.attr('group'));

            //修改数据
            _DATA = _DATA.map(item => {
                if (item.id == group) {
                    if (n === 0) {
                        item.count <= 0 ? null : item.count--;
                    } else {
                        item.count >= 10 ? null : item.count++;
                    }

                    item.total = item.price * item.count;
                }
                return item;
            });
            //重新渲染
            render();

        });
    }

    return {
        init() {
            render();
        }
    }

})(jQuery);

cartModule.init();

