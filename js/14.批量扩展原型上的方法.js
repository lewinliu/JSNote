/*
 * @Author: LLW
 * @Date: 2022-06-28 16:20:50
 * @Description: 批量扩展原型上的方法,正则实际使用
 */
~function () {

    /**
     * formatTime:时间字符串的格式化处理
     * @param {*} templete:[string] 
     *          我们最后期望获取日期格式的模板
     *          模板规则:{0}->年{1~5}->月日时分秒
     * @returns [string]格式化后的时间字符串
     */
    function formatTime(templete = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
        let timeAry = this.match(/\d+/g);
        return templete.replace(/\{(\d){1,4}\}/g, (...[, $1]) => {
            let time = timeAry[$1] || "00";
            return time.length < 2 ? time = "0" + time : time;
        });
    }

    /**
     * queryURLParams:获取URL地址问号和面的参数信息(可能也包含HASH值)
     * @returns 从地址中捕获的对象信息
     */
    function queryURLParams() {
        let obj = {};
        let reg = /([^?=&#]+)=([^?=&#]+)|#([^?=&#]+)/g

        this.replace(reg, (...[, $1, $2, $3]) => {
            $1 && $2 ? obj[$1] = $2 : null;
            obj['HASH'] = $3;
        });

        return obj;
    }

    /**
     * 给数字字符串添加添加千分符
     */
    function millimeter() {
        if (isNaN(this)) return this;

        let reg = /\d{1,3}(?=(\d{3})+$)/g; // /\d{1,3}(?=(\d{3})+$)/g
        return this.replace(reg, content => {
            return content + ","
        });
    }

    /*扩展到内置类String.prototype上*/
    ["formatTime", "queryURLParams", "millimeter",].forEach(item => {
        String.prototype[item] = eval(item);
    });

}();


// let time = '2022-6-28 16/43';
// time = time.formatTime("{0}年{1}月{2}日 {3}:{4}:{5}");
// console.log(time);


// let url = "http://www.zhufengpeixun.cn/?lx=1&from=wx#video";
// //=>{lx:1, from:'wx',HASH:'video'}
// console.log(url.queryURLParams());


// 无正则情况，加千分符的写法
// let num = "912345678256874"; //=>"912, 345, 678,256,874"
// for (let i = num.length; i > 3; i -= 3) {
//     let prev = num.substring(0, i - 3),
//         next = num.substring(i - 3, num.length);
//     num = prev + "," + next;
// }
// console.log("num = " + num);

let str = "912345678256874";
console.log(str.millimeter());
