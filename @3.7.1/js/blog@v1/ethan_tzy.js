/*
 * @Descripttion: ethan.js
 * @version: 1.0.0
 * @Author: tzy1997
 * @Date: 2020-12-14 21:26:14
 * @LastEditors: tzy1997
 * @LastEditTime: 2022-12-11 18:14:31
 */

/* 打印信息 */
// console.log("\n %c Ethan_Blog v1.0.0 %c 博客地址为：https://tzy1997.com \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
// console.log("\n %c QQ：2938526863 %c VX: ethan4116                    \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
// console.log(`%c
//     I wish you to become your own sun , no need to rely on who’s light.                                                   
//     ----愿你成为自己的太阳,无需凭借谁的光芒.                                                                                  \n`,
//     "color: red; background: #030307; padding:5px 0;")  

/* 友情链接页面 头像找不到时 替换图片 */
if (location.href.indexOf("link") !== -1) {
    var imgObj = document.getElementsByTagName("img");
    for (i = 0; i < imgObj.length; i++) {
        imgObj[i].onerror = function () { this.src = "https://bu.dusays.com/2021/03/27/0106da541a922.gif" }
    }
}

/* 手机侧边栏默认不展开 */
function mobile_nav_close() {
    var mobile_sidebar_menus = document.getElementById("sidebar-menus");
    if (mobile_sidebar_menus) {
        var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
            "menus_item_child"
        );
        var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
        for (var i = 0; i < menus_item_child.length; i++) {
            menus_item_child[i].style.display = "none";
        }
    };
}
mobile_nav_close();