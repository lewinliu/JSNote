/*
 * @Author: LLW
 * @Date: 2022-06-28 09:47:33
 * @Description: 请填写简介
 */

~function () {
    function myExecAll(str = '') {
        let ary = [],
            res = this.exec(str);
        if (this.global) {
            while (res) {
                ary.push(res[0]);
                res = this.exec(str);
            }
        }
        console.log(ary);
        return ary;
    }
    RegExp.prototype.myExecAll = myExecAll;
}();


// 验证一个字符串中哪个字母出现的次数最多, 多少次?
let str = "saaaaffdfjkljlkaz,,,,,,,,cmbnifpqepijmds;68d1aeffsdaaf4548df4se4oepkourn";

str = str.split('').sort((a, b) => a.localeCompare(b)).join('');

let ary = str.match(/(.)\1+/g).sort((a, b) => b.length - a.length);

let maxLenght = ary[0].length,
    res = [ary[0]];

ary.splice(1).forEach(item => {
    if (item.length < maxLenght) return;
    res.push(item);
});

console.log(`出现次数最多的字符: ${res.join('|')}， 出现了${maxLenght}次`);
