/*
 * @Descripttion: ethan.js
 * @version: 1.0.0
 * @Author: tzy1997
 * @Date: 2020-12-14 21:26:14
 * @LastEditors: tzy1997
 * @LastEditTime: 2021-01-09 15:39:31
 */
/* 手机侧边栏默认不展开 */
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
if (mobile_sidebar_menus) {
    var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
    );
    var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
    }
}

/* 打印信息 */
console.log("\n %c Ethan_Blog v1.0.0 %c 博客地址为：https://ethant.top \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
console.log("\n %c QQ：2938526863 %c VX: ethan4116                    \n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #030307;color: #fadfa3;padding:5px 0;")
console.log(`%c
    I wish you to become your own sun , no need to rely on who’s light.                                                   
    ----愿你成为自己的太阳,无需凭借谁的光芒.                                                                                 \n`,
    "color: red; background: #030307; padding:5px 0;")

// console.log(`%c                                                                                                                          
//     EEEEEEEEEEEEEEEEEEEEEE         tttt         hhhhhhh                                                                   
//     E::::::::::::::::::::E      ttt:::t         h:::::h                                                                   
//     E::::::::::::::::::::E      t:::::t         h:::::h                                                                   
//     EE::::::EEEEEEEEE::::E      t:::::t         h:::::h                                                                   
//     E:::::E       EEEEEEttttttt:::::ttttttt    h::::h hhhhh         aaaaaaaaaaaaa  nnnn  nnnnnnnn                         
//     E:::::E             t:::::::::::::::::t    h::::hh:::::hhh      a::::::::::::a n:::nn::::::::nn                       
//     E::::::EEEEEEEEEE   t:::::::::::::::::t    h::::::::::::::hh    aaaaaaaaa:::::an::::::::::::::nn                      
//     E:::::::::::::::E   tttttt:::::::tttttt    h:::::::hhh::::::h            a::::ann:::::::::::::::n                     
//     E:::::::::::::::E         t:::::t          h::::::h   h::::::h    aaaaaaa:::::a  n:::::nnnn:::::n                     
//     E::::::EEEEEEEEEE         t:::::t          h:::::h     h:::::h  aa::::::::::::a  n::::n    n::::n                     
//     E:::::E                   t:::::t          h:::::h     h:::::h a::::aaaa::::::a  n::::n    n::::n                     
//     E:::::E       EEEEEE      t:::::t    tttttth:::::h     h:::::ha::::a    a:::::a  n::::n    n::::n                     
//     EE::::::EEEEEEEE:::::E      t::::::tttt:::::th:::::h     h:::::ha::::a    a:::::a  n::::n    n::::n                   
//     E::::::::::::::::::::E      tt::::::::::::::th:::::h     h:::::ha:::::aaaa::::::a  n::::n    n::::n                   
//     E::::::::::::::::::::E        tt:::::::::::tth:::::h     h:::::h a::::::::::aa:::a n::::n    n::::n                   
//     EEEEEEEEEEEEEEEEEEEEEE          ttttttttttt  hhhhhhh     hhhhhhh  aaaaaaaaaa  aaaa nnnnnn    nnnnnn                   
//                                                                                                                           `,
//     `color: #fadfa3; background: #030307; padding:5px 0;`)