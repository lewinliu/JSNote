/*
 * @Author: LLW
 * @Date: 2022-07-29 10:41:48
 * @Description: 请填写简介
 */
let cartModule = (function ($) {

    let _SELECT = [];

    let _DATA = [{
        type: 1,
        text: "品牌",
        content: ["苹果", "小米", "锤子", "魅族", "华为", "三星", "OPPO", "vivo", "乐视", "360", "中兴", "索尼"]
    }, {
        type: 2,
        text: "尺寸",
        content: ["3.0英寸以下", "3.0-3.9英寸", "4.0-4.5英寸", "4.6-4.9英寸", "5.0-5.5 英寸", "6.0英寸以上"]
    }, {
        type: 3,
        text: "系统",
        content: ['安卓( Android )', '苹果(IOS)', '微软 ( WindowsPhone )', '其他']
    }, {
        type: 4,
        text: "网络",
        content: ['联通3G', '双卡单4G', '双卡双4G', '联通4G', '电信4G', '移动4G']
    }];

    //=>需要操作的元素
    let $typeBox = $('#type'),
        $chooseBox = $('#choose');
    //=>根据数据渲染视图
    function render() {

        //=>待选区
        let str = ``;
        _DATA.forEach(item => {
            let { type, text, content } = item;
            str +=
                `<li _type="${type}">
                ${text}：
                ${content.map(A => {
                    return `<a href="javascript:;">${A}</a>`;
                }).join('&nbsp;&nbsp;&nbsp;')}
                </1i>`;
        });
        $typeBox.html(str);

        //=>选择区(绑定之前先根据TYPE排序)
        str = `你的选择：`;
        _SELECT.sort((A, B) => A.type - B.type);
        _SELECT.forEach(item => {
            str += `<mark>${item.name} <a _type='${item.type}'}' href="javascript:;">X</a></mark>` + '&nbsp;&nbsp;&nbsp;';
        });
        $chooseBox.html(str);

        // 渲染完成，绑定点击事件
        handle();
        handleSelect();
    }

    //=>待选区绑定点击事件
    function handle() {
        $typeBox.find('a').on('click', function () {
            let $this = $(this),
                obj = {};
            // 需要存储的内容
            obj.type = parseFloat($this.parent().attr('_type'));
            obj.name = $this.text().trim();
            // 存储到 _SELECT 中
            _SELECT.forEach((item, index) => {
                if (item.type === obj.type) {
                    _SELECT.splice(index, 1);
                }
            });
            _SELECT.push(obj);

            //=>重新渲染
            render();
        });
    }

    //=>已选区绑定点击事件
    function handleSelect() {
        $chooseBox.find('a').on('click', function () {
            let $this = $(this),
                _type = parseFloat($this.attr('_type'));
            _SELECT.forEach((item, index) => {
                if (item.type === _type) {
                    _SELECT.splice(index, 1);
                }
            });
            //=>重新渲染
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

