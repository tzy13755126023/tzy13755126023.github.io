/*
 * @Descripttion: 
 * @version: 
 * @Author: tzy1997
 * @Date: 2022-07-20 23:14:21
 * @LastEditors: tzy1997
 * @LastEditTime: 2022-10-23 21:22:03
 */

if (document.body.clientWidth > 992) {
    function getBasicInfo() {
        /* 窗口高度 */
        var ViewH = $(window).height();
        /* document高度 */
        var DocH = $("body")[0].scrollHeight;
        /* 滚动的高度 */
        var ScrollTop = $(window).scrollTop();
        /* 可滚动的高度 */
        var S_V = DocH - ViewH;
        var Band_H = ScrollTop / (DocH - ViewH) * 100;
        return {
            ViewH: ViewH,
            DocH: DocH,
            ScrollTop: ScrollTop,
            Band_H: Band_H,
            S_V: S_V
        }
    };
    function show(basicInfo) {
        if (basicInfo.ScrollTop > 0.001) {
            $(".neko").css('display', 'block');
        } else {
            $(".neko").css('display', 'none');
        }
        /* 滚动距离大于 40 % 出现打赏猫咪 */
        if (basicInfo.Band_H > 40) {
            $("#catalog-box").css('display', 'block');
            /* 滚动距离大于 70 % 出现感谢支持 */
            if (basicInfo.Band_H > 70) {
                $("#catalog-box").css('display', 'none');
                $("#catalog-box2").css('display', 'block');
            } else {
                $("#catalog-box2").css('display', 'none');

            }
        } else {
            $("#catalog-box").css('display', 'none');
            $("#catalog-box2").css('display', 'none');
        }
    }
    (function ($) {
        $.fn.nekoScroll = function (option) {
            var defaultSetting = {
                top: '0',
                scroWidth: 6 + 'px',
                // bgcolor: "#2f3542",
                z_index: 9999,
                zoom: 0.9,
                borderRadius: 5 + 'px',
                right: 60 + 'px',
                nekoImg: "https://bu.dusays.com/2022/07/20/62d812db74be9.png",
                // scImg: "https://bu.dusays.com/2022/07/20/62d812d882aa3.png",
                hoverMsg: "喵喵喵~",
                color: "#6f42c1",
                during: 500,
                blog_body: "body",
            };
            var setting = $.extend(defaultSetting, option);
            var getThis = this.prop("className") !== "" ? "." + this.prop("className") : this.prop("id") !== "" ? "#" +
                this.prop("id") : this.prop("nodeName");
            if ($(".neko").length == 0) {
                this.after("<div class=\"neko\" id=" + setting.nekoname + " data-msg=\"" + setting.hoverMsg + "\"></div>");
                // debugger
                // console.log($(".neko").length);
                $("#" + setting.nekoname)
                    .append(["<div id=\"catalog-box\">", "<div class=\"link-open\">打赏猫咪</div>", "   </div>"].join(""));
                $("#" + setting.nekoname)
                    // .append(["<div id=\"catalog-box2\">", "如果我的文章帮助到了您，可以帮忙点一下站内的小广告吗？感谢您的支持 🌹🌹🌹", "  </div>"].join(""));
                    .append(["<div id=\"catalog-box2\">", "<div class=\"link-open\">如果我的文章帮助到了您，可以投喂一下小猫咪吗？感谢您的支持 🌹🌹🌹</div>", "  </div>"].join(""));
            }
            let basicInfo = getBasicInfo();
            $(getThis)
                .css({
                    'position': 'fixed',
                    'width': setting.scroWidth,
                    'top': setting.top,
                    // 'height': basicInfo.Band_H * setting.zoom + '%',
                    'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                    'z-index': setting.z_index,
                    'background-color': setting.bgcolor,
                    "border-radius": setting.borderRadius,
                    'right': setting.right,
                    'background-image': 'url(' + setting.scImg + ')',
                    'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
                    'background-size': 'contain'
                });
            $("#" + setting.nekoname)
                .css({
                    'position': 'fixed',
                    // 'top': (basicInfo.Band_H * setting.zoom * 8 / 9) + '%',
                    'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                    'z-index': setting.z_index * 10,
                    'right': setting.right,
                    'background-image': 'url(' + setting.nekoImg + ')',
                });
            show(getBasicInfo());
            $(window)
                .scroll(function () {
                    let basicInfo = getBasicInfo();
                    // console.log(basicInfo);
                    show(basicInfo);
                    $(getThis)
                        .css({
                            'position': 'fixed',
                            'width': setting.scroWidth,
                            'top': setting.top,
                            // 'height': basicInfo.Band_H * setting.zoom + '%',
                            'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
                            'z-index': setting.z_index,
                            'background-color': setting.bgcolor,
                            "border-radius": setting.borderRadius,
                            'right': setting.right,
                            'background-image': 'url(' + setting.scImg + ')',
                            'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
                            'background-size': 'contain'
                        });
                    $("#" + setting.nekoname)
                        .css({
                            'position': 'fixed',
                            // 'top': (basicInfo.Band_H * setting.zoom * 8 / 9) + '%',
                            'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
                            'z-index': setting.z_index * 10,
                            'right': setting.right,
                            'background-image': 'url(' + setting.nekoImg + ')',
                        });
                    if (basicInfo.ScrollTop == basicInfo.S_V) {
                        $("#" + setting.nekoname)
                            .addClass("showMsg")
                    } else {
                        $("#" + setting.nekoname)
                            .removeClass("showMsg");
                        $("#" + setting.nekoname)
                            .attr("data-msg", setting.hoverMsg);
                    }
                });
            this.click(function (e) {
                // var basicInfo = getBasicInfo();
                // var x = e.clientX;
                // var y = e.clientY;
                // var Band_H = basicInfo.Band_H * setting.zoom;
                // var ViewH = basicInfo.ViewH;
                // var S_V = basicInfo.S_V;
                // var move = 0;
                // if (Band_H * ViewH / 100 > y) {
                //     move = (Band_H * ViewH / 100 - y) / (ViewH * setting.zoom) * S_V;
                // }
                // var moveStr = "-=" + move
                // $("html,body")
                //     .animate({
                //         scrollTop: moveStr
                //     }, setting.during / 2);
                btf.scrollToDest(0, 500)
            });
            $("#" + setting.nekoname)
                .click(function () {
                    // var scroT = $(window)
                    //     .scrollTop();
                    // var scroH = $('body')[0].scrollHeight;
                    // var ViewH = $(window)
                    //     .height();
                    // var S_V = "+=" + (scroH - ViewH);
                    // var mv = "-=" + scroT;
                    // if (scroT == 0) {
                    //     $("html,body")
                    //         .animate({
                    //             scrollTop: S_V
                    //         }, setting.during);
                    // } else {
                    //     $("html,body")
                    //         .animate({
                    //             scrollTop: mv
                    //         }, setting.during);
                    // }
                    btf.scrollToDest(0, 500)
                });
            $(".link-open").click(function () {
                window.open("https://tzy1997.com/sponsorWall/")
            });
            return this;
        }
    })(jQuery);

    $(document).ready(function () {

        //部分自定义
        $("#myscoll").nekoScroll({
            bgcolor: 'rgb(255 255 255 / .3)', //背景颜色，没有绳子背景图片时有效
            borderRadius: '2em',
            zoom: 0.9
        }
        );
        //自定义（去掉以下注释，并注释掉其他的查看效果）
        /*
        $("#myscoll").nekoScroll({
            nekoname:'neko1', //nekoname，相当于id
            nekoImg:'img/猫咪.png', //neko的背景图片
            scImg:"img/绳1.png", //绳子的背景图片
            bgcolor:'#1e90ff', //背景颜色，没有绳子背景图片时有效
            zoom:0.9, //绳子长度的缩放值
            endMsg:'已经结束了', //滑动到底部后的对话框信息
            hoverMsg:'你好~喵', //鼠标浮动到neko上方的对话框信息
            right:'100px', //距离页面右边的距离
            fontFamily:'楷体', //对话框字体
            fontSize:'14px', //对话框字体的大小
            color:'#1e90ff', //对话框字体颜色
            scroWidth:'8px', //绳子的宽度
            z_index:100, //不用解释了吧
            during:1200, //从顶部到底部滑动的时长
            blog_body:".blog-body", //所有目录标题的父节点，为了更好的定位目录，如 .classname,#idname,tagname， 默认为标签 body，建议不使用默认，最好另外设置该选项
            catalog_item:".catalog-item", //目录标题的选择器，为了识别博客文章目录，如 .classname,#idname,tagname，默认为标签 h3，建议不使用默认，最好另外设置该选项
            readColor:"red", //已经阅读过内容的目录颜色
            unreadColor:"black" //未阅读过内容的目录颜色
        });
        */

    })
}
