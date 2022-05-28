var name = 10;
var age = 100;
var old = 88;
var obj = {
    11: 123,
    name: '珠峰培训',
    珠峰培训: 'name',
    '新东方': '学挖机',
    age: age,
    old, //es6的简化，old:old 
};
//获取0BJ这个对象的NAME属性对应的值
console.log(obj.name); //=> '珠峰培训' 
//一个对象的属性名只有两种格式:数字或者字符串(等基本类型值) 
console.log(obj['name']); //=> '珠峰培训' 

//obj[name变量代表的值] => obj[10] => undefined
console.log(obj[name]); // undefined

name = '新东方';
console.log(obj[name]); // 学挖机

console.log(obj.name); // 珠峰培训

console.log(obj[11]); // 123

console.log(obj.age); // 100

console.log(obj.old); // 88



// => for in循环: 用来循环遍历对象中的键值对的(continue和break同样适用)
var obj1 = {
    name: '春亮',
    age: 52,
    friends: '王鹏 ,志刚',
    1: 20,
    2: 149,
    3: 140,
    8: 201,
    7: 1491,
    6: 1401,
};

// for(var 变量(key) in对象)
//对象中有多少组键值对，循环就执行几次(除非break结束)
// for in在遍历的时候，优先循环数字属性名(从小到大)
for (var key in obj1) {
    //每一次循环key变量存储的值: 当前对象的属性名
    //获取属性值: obj[属性名] => obj[key] obj.key/obj['key']
    console.log('属性名: ' + key + '属性值: ' + obj1[key]);
}