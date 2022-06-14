/*
 * @Author: LLW
 * @Date: 2022-06-14 08:40:33
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-14 09:43:27
 * @Description: 请填写简介
 */

// => 把描述当前事务特征的信息进行分组归类(减少全局变量的污染)
// => 这就是JS中的单例设计模式
/*
beautiGirl 不仅仅被叫做变量(对象名)，也被称为“命名空间”

单例模式:把描述事务的信息放到一个命名空间中进行归组，防止全局变量的污染
*/
let beautiGirl = {
    name: '和冉',
    age: 18
};
let o1dMan = {
    name: '小璐璐',
    age: 81
};

// 为了让单例模式变的高大上一些, 真实项目中的单例模式都这样处理
let namespace = (function () {
    //创建一些方法
    let fn = function () {
        //....
    };
    return {
        name: XXX,
        fn: fn
    }
    I
})();
namespace.name
namespace.fn();

// 例如:完成一个需要团队协作开发的案例(百度首页)
/*
    公共模块
*/
let utils = (function () {
    let queryElement = function () {
        console.log('调用了 utils.queryElement();');
    }
    return {
        //queryElement:queryElement
        queryElement
    }
})();
// utils.queryElement();

/*
    页面选项卡模块
*/
let pageTabModule = (function () {
    //=>获取元素(调取其它命名空间下的方法) 
    let tabBox = utils.queryElement('.tabBox');
    let show = function () {
        // ...
    }
    return {
        init: function () {
            //调用自己模块下的方法
            show();
        }
    }
})();
// pageTabModule.init();


/**
 * 工场模式
 * 
 * 批量化生产:把实现某个功能的代码进行封装,后期在想实现这个功能,我们直接执行函数即可
 *  
 *  低耦合：减少页面中冗余的代码
 *  高内聚：提高代码的重复使用率
 */
function createPerson(name, age) {
    let person = {};
    person.name = name;
    person.age = age;
    return person;
}
let beautyGirl = createPerson('和冉', 18);
let oldMan = createPerson('小璐璐', 81);
beautyGirl.name;
oldMan.age;
