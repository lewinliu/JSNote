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
                `<li data-type="${type}">
                ${text}:
                ${content.map(A => {
                    return `<a href="javascript:;">${A}</a>`;
                })}
                </1i>`;
        });
        $typeBox.html(str);
    }

    return {
        init() {
            render();
        }
    }

})(jQuery);

cartModule.init();

