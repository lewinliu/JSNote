/*
 * @Author: LLW
 * @Date: 2022-06-27 10:55:54
 * @Description: 身份证信息查询
 */

/* 
"sex": "男",
"age": "32",
"birthday": "1989年01月02日",
"address": "浙江省温州市",
"is_valid": "2",
"valid_msg": "身份证号校验位错误"
*/


/**
 * 获取数据
 * @param {*} url 地址
 * @param {*} method 请求方式
 * @param {*} async 异步
 */
function getData(url = "josn/idcard.json", method = "GET", async = false) {
    /* 
    // 创建AJAX的实例
    // 打开一个链接请求，基于GET请求和同步编程完成
    // 监听服务器返回的状态信息（在HTTP状态码为200，请求状态为4的时候能拿到数据）
    // 基于responseText获取响应回来的信息(JSON格式字符串)
    // 发送AJAX请求
    // 把获取的JSON字符串转换为对象 
    */
    let DATA = null,
        xhr = new XMLHttpRequest;
    xhr.open(method, url, async);
    xhr.onreadystatechange = () => (xhr.status === 200 && xhr.readyState === 4) ? DATA = xhr.responseText : null;
    xhr.send();
    DATA = JSON.parse(DATA);
    return DATA;
}

/**
 * 验证身份证
 * @param {*} IDCard 身份证号
 * @returns 数组
 */
function verifyID(IDCard) {
    /**
        1.一共18位
        2.最后一位可能是大写的X
        3.身份证号前6位：省市县
        4.中间8位：年月日
        5.最后四位：
            最后一位 => X或者数字
            倒数第二位 => 偶数女奇数男
            其余的是经过算法算出来的
    */
    let regID = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/;
    let ary = regID.exec(IDCard).slice(1);
    return ary;
}

/**
 * 根据生日计算年龄
 * @param {*} strBirthday 生日字符串，用"-"连接
 * @returns 年龄
 */
function getAge(strBirthday) {
    var returnAge;
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    if (nowYear == birthYear) {
        returnAge = 0;//同年 则为0岁
    }
    else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff;
                }
            } else {
                var monthDiff = nowMonth - birthMonth;//月之差
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff;
                }
            }
        } else {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }

    return returnAge;//返回周岁年龄
}


let idInfo = {
    "sex": "女",
    "age": "3",
    "birthday": "1年1月1日",
    "address": "浙江省温州市",
}

let infoList = document.querySelector('.ul_info');
let btnQuery = document.querySelector('.btn_query');
let inpTxt = document.querySelector('.inp_content');

btnQuery.onclick = function () {
    let data = getData();
    let ary = verifyID(inpTxt.value); // "130828199012040617"
    
    idInfo.address = data[ary[0]];
    idInfo.sex = ary[4] % 2 ? '男' : '女';
    idInfo.birthday = ary[1] + "年" + ary[2] + "月" + ary[3] + "日";
    idInfo.age = getAge(ary[1] + "-" + ary[2] + "-" + ary[3]);

    let idInfoHtml = `<li class="li-sex">性别：${idInfo.sex}</li>
            <li class="li-age">年龄：${idInfo.age}</li>
            <li class="li-birthday">生日：${idInfo.birthday}</li>
            <li class="li-address">户籍地：${idInfo.address}</li>`;

    infoList.innerHTML = idInfoHtml;
}



