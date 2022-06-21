/*
 * @Author: LLW
 * @Date: 2022-06-21 08:13:57
 * @Description: ES6中的模板字符串
 */

// /*
//     以前的字符串拼接
// */
// let year = ' 2019',
//     month = '08 ',
//     day = '09';
// // => "你好，小伙伴!今天是2019年08月09日，今天天气很糟糕，马上就要下大雨了，呵呵呵~~~
// let res = "你好， 小伙伴!今天是" + year + "年" + month + "月" + day + "日,今天天气很糟糕，马上就要下大雨了，呵呵呵~~~";

// let ID = 'a_baidu';
// let htmlTxt = '<a id = "' + ID + '" target="_Blank" href="www.baidu.com">百度</a>';


/*
    ES6中的字符串拼接
*/
let year = '2019',
    month = '08',
    day = '09';
//=>反引号(撇) TAB键上面的(ES6模板字符串语法)
// ${} 模板字符串中书写JS表达式的方式(凡是有输出结果的都可以被称为JS表达式)
let res = `你好，小伙伴!今天是${year}年${month}月${day}日，今天天气很糟糕，马上就要下大雨了，呵呵呵~~~;`
console.log(res);

let ID = 'a_baidu';
let htmlTxt = `<a id = "${ID}" target="_Blank" href="www.baidu.com">百度</a>`;
console.log(htmlTxt);

