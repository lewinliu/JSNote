// 将?后面的字符串转换成键值对
let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=aaa#box';

// 
// let val_index = url.indexOf('?');
// let value_str = url.substring(val_index + 1);
// // lx=1&name=zhufeng&teacher=aaa#box
// let val_ary = value_str.split('#');
// let well_txt = val_ary[1];

// let info_ary = val_ary[0].split('&');
// let info_obj = {};
// info_ary.forEach((item) => {
//     let k_v = item.split('=');
//     info_obj[k_v[0]] = k_v[1];
// });
// info_obj[well_txt] = well_txt;

// console.log(info_ary);
// console.log(info_obj);

/* 
queryURLParams:获取URL地址中问号传参的信息和哈希值
    @params
        url [string] 要解析的URL字符串
    @return
        [object]包含参数和哈希值信息的对象
*/
function queryURLParams(url) {
    let ask_in = url.indexOf('?'),
        well_in = url.indexOf('#'),
        ask_txt = '',
        well_txt = '';
    if (well_in === -1) well_in = url.length;
    //
    if (ask_in >= 0) ask_txt = url.substring(ask_in + 1, well_in);
    well_txt = url.substring(well_in + 1);
    // 
    let result = {};
    if (well_txt !== '') result['HASH'] = well_txt;
    if (ask_txt !== '') {
        let ary = ask_txt.split('&');
        ary.forEach(item => {
            let itemAry = item.split('=');
            result[itemAry[0]] = itemAry[1];
        });
    }
    return result;
}

console.log(queryURLParams(url));


/* 正则判断 */
function queryURLParams2(ur1) {
    let result = {},
        reg1 = /([^?=&#]+)=([^?=&#]+)/g,
        reg2 = /#([^?=&#]+)/g;
    url.replace(reg1, (n, X, y) => result[X] = y);
    url.replace(reg2, (n, x) => result['HASH'] = x);
    return result;
}
console.log(queryURLParams2(url));