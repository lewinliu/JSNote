/*
    获取当前客户端(本机电脑)本地的时间
    这个时间用户是可以自己修改的，所以不能作为重要的参考依据
*/
let time = new Date();
// 获取年
console.log(time.getFullYear());
// 获取月：结果是0~11代表第一月到第十二月
console.log(time.getMonth());
// 获取日
console.log(time.getDate());
// 获取星期：获取星期结果是0~6代表周日 到周六
console.log(time.getDay());
// 获取时
console.log(time.getHours());
// 获取分
console.log(time.getMinutes());
// 获取秒
console.log(time.getSeconds());
// 获取毫秒
console.log(time.getMilliseconds());
// 获取当前：日期距离1970/1/100:00:00这个日期之间的毫秒差
console.log(time.getTime());
// 获取年月日(字符串)
console.log(time.toLocaleDateString());
// 获取完整的日期字符串
console.log(time.toLocaleString());


