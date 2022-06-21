/*
 * @Author: LLW
 * @Date: 2022-06-20 15:26:56
 * @Description: 请填写简介
 */

// // =============================
// /*
//     数组的解构赋值
// */
// let ary = [10, 20, 30, 40, 50];

// let n = ary[0],
//     m = ary[1],
//     x = ary.slice(2);

// /*
// ...x 拓展运算符:
//     把剩下的内容存储到x中(x是个数组)，但是它只能出现在最后
// */
// let [n, m, ...x] = ary;

// console.log(n, m, x); // 10 20 [30,40,50]



// let [n, , m, , , x] = ary;
// console.log(n, m, x); // 10 30 undefined

// let [n, , m, , , x = 0] = ary;
// console.log(n, m, x); // 10 30 0


// let ary = [10, [20, 30, [40, 50]]];
// let [n, [, , [, m]]] = ary;
// console.log(n, m); // => 10 50



// /*
//     对象的解构赋值
// */
// let obj = {
//     name: '王会峰',
//     age: 79,
//     sex: ' BOY',
//     friends: ['唐明辉', '郭天罡', '王旭东', '郭辉']
// };

// // => 创建的变量要和对象的属性名一致(默认)
// let {
//     name,
//     age: nianling,
//     sex
// } = obj;
// console.log(name, sex, nianling);

// let {
//     height = '170CM',
// } = obj;
// console.log(height);

// 多维对象获取
// let {
//     name,
//     friends: [firstFriend]
// } = obj;
// console.log(name, firstFriend);



let data = {
    'code': 0,
    'data': {
        'today': '2019-08-07',
        'data': [{
            'date': '2019-07-17',
            'number': '17',
            'weekday': '\u661f\u671f\u4e09'
        }, {
            'date': '2019-07-18',
            'number': '9',
            'weekday': '\u661f\u671f\u56db'
        }]

    },
    'version': '17917d337ccb7c4d34624b73efdfa0c0'
};

let {
    code,
    data: {
        today,
        data: calendarData
    }
} = data;

console.log(code, data, calendarData);


calendarData.forEach(item => {
    let {
        date,
        number,
        weekday
    } = item;
    console.log(date, weekday, number);
});

// 简化,传参时解构
calendarData.forEach(({
    date,
    number,
    weekday
}) => {
    console.log(date, weekday, number);
});

