/*
 * @Author: LLW
 * @Date: 2022-06-15 14:54:12
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 14:54:13
 * @Description: 请填写简介
 */
/*
 * @Author: LLW
 * @Date: 2022-06-15 14:54:12
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 14:54:12
 * @Description: 请填写简介
 */
/*
 * @Author: LLW
 * @Date: 2022-06-15 14:40:24
 * @LastEditors: LLW
 * @LastEditTime: 2022-06-15 14:51:36
 * @Description: 请填写简介
 */
function Fn() {
    // => this:f1这个实例
    this.x = 100;
    this.y = 200;
    this.say = function () {
        console.log(this.x);
    };
}
