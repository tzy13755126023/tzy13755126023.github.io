/*
 * @Descripttion: 
 * @version: 
 * @Author: tzy1997
 * @Date: 2022-07-12 21:51:50
 * @LastEditors: tzy1997
 * @LastEditTime: 2023-03-12 20:18:15
 */

document.onkeydown = function (e) {
    if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) return btf.snackbarShow("你真坏，不能打开控制台喔!"), event.keyCode = 0, event.returnValue = !1, !1
    if ((e.ctrlKey || e.metaKey) && 67 == e.keyCode && "" != selectTextNow) return btf.snackbarShow("复制成功"), rightmenuCopyText(selectTextNow), !1
};

var rm = {};

rm.showRightMenu = function (isTrue, x = 0, y = 0) {
    var $rightMenu = $('#rightMenu');
    $rightMenu.css('top', x + 'px').css('left', y + 'px');

    if (isTrue) {
        stopMaskScroll()
        $rightMenu.show();
    } else {
        $rightMenu.hide();
    }
};

var rmWidth = $('#rightMenu').width();
var rmHeight = $('#rightMenu').height();

rm.reloadrmSize = function () {
    rmWidth = $("#rightMenu").width();
    rmHeight = $("#rightMenu").height()
};

var domhref = "";
var domImgSrc = "";

var selectTextNow = "";
document.onmouseup = document.ondbclick = selceText;

function selceText() {
    var txt;
    if (document.selection) {
        txt = document.selection.createRange().text;
    } else {
        txt = window.getSelection() + "";
    }
    if (txt) {
        selectTextNow = txt;
    } else {
        selectTextNow = ""
    }
}

window.oncontextmenu = function (event) {
    if (document.body.clientWidth > 768) {
        if (event.ctrlKey) {
            return true;
        }
        var pageX = event.clientX + 10;	/* 加10是为了防止显示时鼠标遮在菜单上 */
        var pageY = event.clientY;

        var $rightMenuNormal = $(".rightMenuNormal");
        var $rightMenuOther = $(".rightMenuOther");
        var $rightMenuPlugin = $(".rightMenuPlugin");
        var $rightMenuCopyText = $("#menu-copytext");
        var $rightMenuCommentText = $("#menu-commenttext");
        var $rightMenuNewWindow = $("#menu-newwindow");
        var $rightMenuCopyLink = $("#menu-copylink");
        var $rightMenuCopyImg = $("#menu-copyimg");
        var $rightMenuDownloadImg = $("#menu-downloadimg");
        var $rightMenuSearch = $("#menu-search");
        var $rightMenuSearchBaidu = $("#menu-searchBaidu");
        var $rightMenuReadmode = $("#menu-readmode");
        var $rightMenuGotoComment = $("#menu-goto-comment");
        var href = event.target.href;
        var imgsrc = event.target.currentSrc;
        var is_article = location.href.includes('articles')
        var pluginMode = false;
        $rightMenuNormal.show();
        $rightMenuOther.show();
        if (document.getElementById('post') || document.getElementById('page')) {
            $rightMenuGotoComment.show();

        } else {
            $rightMenuGotoComment.hide();
        }

        if (selectTextNow && window.getSelection()) {
            pluginMode = true;
            $rightMenuCopyText.show();
            $rightMenuCommentText.show();
            $rightMenuSearch.show();
            $rightMenuSearchBaidu.show();
            $rightMenuOther.hide()
        } else {
            $rightMenuCopyText.hide();
            $rightMenuCommentText.hide();
            $rightMenuSearchBaidu.hide();
            $rightMenuSearch.hide()
        }
        if (href || imgsrc) {
            pluginMode = true;
            $rightMenuNewWindow.show();
            $rightMenuCopyLink.show();
            $rightMenuOther.hide();
            if (href) {
                domhref = href;
            }
            if (imgsrc) {
                domImgSrc = imgsrc;
                domhref = imgsrc;
                $rightMenuCopyImg.show();
                $rightMenuDownloadImg.show();
            } else {
                $rightMenuCopyImg.hide();
                $rightMenuDownloadImg.hide();
            }
        }
        else {
            $rightMenuCopyImg.hide();
            $rightMenuDownloadImg.hide()
            $rightMenuNewWindow.hide();
            $rightMenuCopyLink.hide()
        }
        if (is_article) {
            $rightMenuReadmode.show();
        } else {
            $rightMenuReadmode.hide();
        }
        if (pluginMode) {
            $rightMenuPlugin.show();
        } else {
            $rightMenuPlugin.hide();
        }
        rm.reloadrmSize();
        if (pageX + rmWidth > window.innerWidth) {
            pageX -= rmWidth;
        }
        if (pageY + rmHeight > window.innerHeight) {
            pageY -= rmHeight;
        }
        rm.showRightMenu(true, pageY, pageX);
        $('#rightmenu-mask').attr('style', 'display: flex');
        return false;
    }
};

function removeRightMenu() {
    rm.showRightMenu(false);
    $('#rightmenu-mask').attr('style', 'display: none');
}

function stopMaskScroll() {
    if (document.getElementById("rightmenu-mask")) {
        var xscroll = document.getElementById("rightmenu-mask");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    };
    if (document.getElementById("rightMenu")) {
        var xscroll = document.getElementById("rightMenu");
        xscroll.addEventListener("mousewheel", function (e) {
            removeRightMenu();
        }, false);
    }
}

/**
 * @name:  切換模式
 */
function switchDarkMode() {
    removeRightMenu();
    const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
    if (nowMode === 'light') {
        activateDarkMode();
        saveToLocal.set('theme', 'dark', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
    } else {
        activateLightMode();
        saveToLocal.set('theme', 'light', 2);
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
    }
    typeof utterancesTheme === 'function' && utterancesTheme();
    typeof FB === 'object' && window.loadFBComment();
    window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200);
};

$('#menu-backward').on('click', function () { window.history.back(); });
$('#menu-forward').on('click', function () { window.history.forward(); });
$('#menu-refresh').on('click', function () { window.location.reload(); });

$('#menu-darkmode').on('click', function () { switchDarkMode() });

$('#menu-home').on('click', function () { window.location.href = window.location.origin; });

$(".menu-link").on("click", function () {
    removeRightMenu()
});

function copyUrl(url) {
    $("body").after("<input id='copyVal'></input>");
    var text = url;
    var input = document.getElementById("copyVal");
    input.value = text;
    input.select();
    input.setSelectionRange(0, input.value.length);
    document.execCommand("copy");
    $("#copyVal").remove()
};
function copyPageUrl() {
    var url = window.location.href;
    copyUrl(url);
    btf.snackbarShow("复制本页链接地址成功");
    removeRightMenu()
};

/**
 * @name: 复制文本 || 链接
 * @description: 
 * @param { String } text
 * @param { String } type
 * @return {*}
 */
function rightmenuCopyText(text, type = "no-add") {
    const copyright = GLOBAL_CONFIG.copyright;
    var textFont;
    if (type == "add-copyright") {
        /**
         * 複製時加上版權信息
         */
        if (text.length > copyright.limitCount) {
            textFont = text + '\n' + '\n' + '\n' +
                copyright.languages.author + '\n' +
                copyright.languages.link + window.location.href + '\n' +
                copyright.languages.source + '\n' +
                copyright.languages.info
        } else {
            textFont = text
        }
    } else {
        textFont = text
    }
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textFont)
    }
    removeRightMenu()
};

rm.downloadimging = false;

function imageToBlob(imageURL) {
    console.log(imageURL);
    const img = new Image;
    image.crossOrigin = "Anonymous";
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    img.crossOrigin = "";
    img.src = imageURL;
    return new Promise(resolve => {
        img.onload = function () {
            c.width = this.naturalWidth;
            c.height = this.naturalHeight;
            ctx.drawImage(this, 0, 0);
            c.toBlob(blob => {
                resolve(blob)
            }, "image/png", .75)
        }
    })
}
async function copyImage(imageURL) {
    const blob = await imageToBlob(imageURL);
    const item = new ClipboardItem({
        "image/png": blob
    });
    navigator.clipboard.write([item])
}

function writeClipImg(imgsrc) {
    removeRightMenu();
    if (imgsrc.indexOf(location.host) == -1) {
        btf.snackbarShow("图片不同源，由于CORS限制，将无法提取位图！");
        return
    }
    btf.snackbarShow("正在下载中，请稍后", false, 1e4);
    if (rm.downloadimging == false) {
        rm.downloadimging = true;
        setTimeout(function () {
            copyImage(imgsrc);
            btf.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议");
            rm.downloadimging = false
        }, "10000")
    }
}
/**
 * @name: 下载图片
 * @description: 
 * @param { String } imgsrc
 * @param { String } name
 */
function downloadImage(imgsrc, name) {
    removeRightMenu();
    /** if (imgsrc.indexOf(location.host) == -1) {
        btf.snackbarShow("图片不同源，由于CORS限制，将无法提取位图！");
        return
    }
    if (rm.downloadimging == false) {
        rm.downloadimging = true;
        btf.snackbarShow("正在下载中，请稍后", false, 1e4);
        setTimeout(function () {
            var image = new Image;
            image.setAttribute('crossorigin', 'anonymous');
            image.onload = function () {
                var canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                var context = canvas.getContext("2d");
                context.drawImage(image, 0, 0, image.width, image.height);
                var url = canvas.toDataURL("image/png");
                var a = document.createElement("a");
                var event = new MouseEvent("click");
                a.download = name || "photo";
                a.href = url;
                a.dispatchEvent(event)
            };
            image.src = imgsrc;
            btf.snackbarShow("图片已添加盲水印，请遵守版权协议");
            rm.downloadimging = false
        }, "10000")
    } else {
        btf.snackbarShow("有正在进行中的下载，请稍后再试")
    }
    */
    setTimeout(function () {
        var a = document.createElement("a");
        var event = new MouseEvent("click");
        a.download = name || "photo";
        a.href = imgsrc;
        a.click();
        a.dispatchEvent(event);
        rm.downloadimging = false;
    }, 2000)
}
/**
 百度搜索
*/
function searchBaidu() {
    btf.snackbarShow("即将跳转到百度搜索");
    setTimeout(function () {
        window.open("https://www.baidu.com/s?wd=" + selectTextNow)
    }, "2000");
    removeRightMenu();
};

/**
 * 粘贴文本到剪切板
 * description : 暂时不考虑接入
 * @param {*} elemt
 * @param {*} value
 */
insertAtCaret: (elemt, value) => {
    const startPos = elemt.selectionStart;
    const endPos = elemt.selectionEnd;
    if (document.selection) {
        elemt.focus();
        var sel = document.selection.createRange();
        sel.text = value;
        elemt.focus();
    } else {
        if (startPos || startPos == '0') {
            var scrollTop = elemt.scrollTop;
            elemt.value = elemt.value.substring(0, startPos) + value + elemt.value.substring(endPos, elemt.value.length);
            elemt.focus();
            elemt.selectionStart = startPos + value.length;
            elemt.selectionEnd = startPos + value.length;
            elemt.scrollTop = scrollTop;
        } else {
            elemt.value += value;
            elemt.focus();
        }
    }
}
/**
 * 阅读模式 read-mode
 */
function switchReadMode(len) {
    const $body = document.body
    var newEle;
    function clickFn() {
        $body.classList.remove('read-mode');
        newEle.remove();
        newEle.removeEventListener('click', clickFn);
    }
    if (len == 0) {
        $body.classList.add('read-mode');
        newEle = document.createElement('button');
        newEle.type = 'button';
        newEle.className = 'fas fa-sign-out-alt exit-readmode';
        $body.appendChild(newEle);
        newEle.addEventListener('click', clickFn);
    } else {
        clickFn();
    }
    removeRightMenu();
}
function replaceAll(e, n, t) {
    return e.split(n)
        .join(t)
}
/**
 * @name: 引用到评
 */

function rightMenuCommentText(e) {
    removeRightMenu();
    var n = document.getElementsByClassName("el-textarea__inner")[0];
    var t = document.createEvent("HTMLEvents");
    t.initEvent("input", !0, !0);
    var o = replaceAll(e, "\n", "\n> ");
    n.value = "> " + o + "\n\n", n.dispatchEvent(t);
    var i = document.querySelector("#post-comment").offsetTop;
    window.scrollTo(0, i - 80), n.focus(), n.setSelectionRange(-1, -1);
}

$('#menu-copy').on('click', function () {
    copyPageUrl();
});

$("#menu-newwindow").on("click", function () {
    window.open(domhref);
    removeRightMenu();
});

$("#menu-copylink").on("click", function () {
    rightmenuCopyText(domhref);
    btf.snackbarShow("已复制链接地址");
});

$("#menu-copyimg").on("click", function () {
    writeClipImg(domImgSrc)
});
$("#menu-downloadimg").on("click", function () {
    downloadImage(domImgSrc, "tzy1997")
});

$("#menu-copytext").on("click", function () {
    rightmenuCopyText(selectTextNow, 'add-copyright');
    btf.snackbarShow("复制成功");
    removeRightMenu();
});

$("#menu-searchBaidu").on("click", function () {
    searchBaidu();
});

$("#menu-commenttext").on("click", function () {
    rightMenuCommentText(selectTextNow)
})
$("#menu-print").on("click", function () {
    removeRightMenu();
    window.print();
});
$("#menu-readmode").on("click", function () {
    const is_readmode = document.body.classList.length;
    switchReadMode(is_readmode);
});
$("#menu-goto-comment").on("click", function () {
    removeRightMenu();
});
$("#menu-radompage").on("click", function () {
    var h = [
        "https://fe32.top/articles/vu9856es/",
        "https://fe32.top/articles/vu0326ep/",
        "https://fe32.top/articles/co0410de/",
        "https://fe32.top/articles/amo9485t/",
        "https://fe32.top/articles/bd1314sh/",
        "https://fe32.top/articles/cs0504xn/",
        "https://fe32.top/articles/ut0927il/",
        "https://fe32.top/articles/0xiipgum/",
        "https://fe32.top/articles/ele265ui/",
        "https://fe32.top/articles/fe0417mn/",
        "https://fe32.top/articles/fi5487lt/",
        "https://fe32.top/articles/gi0506hb/",
        "https://fe32.top/articles/do0228ck/",
        "https://fe32.top/articles/js0320ub/",
        "https://fe32.top/articles/kfwr2gpa/",
        "https://fe32.top/articles/wb0502st/",
        "https://fe32.top/articles/contra128/",
        "https://fe32.top/articles/e13t14zy/",
        "https://fe32.top/articles/db0307ver/",
        "https://fe32.top/articles/js0417es/",
        "https://fe32.top/articles/jo4116ba/",
        "https://fe32.top/articles/np2021sm/",
        "https://fe32.top/articles/hexo1600/",
        "https://fe32.top/articles/hexo1601/",
        "https://fe32.top/articles/hexo1602/",
        "https://fe32.top/articles/hexo1603/",
        "https://fe32.top/articles/hexo1604/",
        "https://fe32.top/articles/hexo1605/",
        "https://fe32.top/articles/hexo1606/",
        "https://fe32.top/articles/hexo1607/",
        "https://fe32.top/articles/hexo1608/",
        "https://fe32.top/articles/hexo1609/",
        "https://fe32.top/articles/hexo1610/",
        "https://fe32.top/articles/hexo1611/",
        "https://fe32.top/articles/hexo1612/",
        "https://fe32.top/articles/hexo1613/",
        "https://fe32.top/articles/hexo1614/",
        "https://fe32.top/articles/hexo541u/",
        "https://fe32.top/articles/Ha5487ng/",
        "https://fe32.top/articles/io0411sc/",
        "https://fe32.top/articles/jsnb9527/",
        "https://fe32.top/articles/jsnb9528/",
        "https://fe32.top/articles/jsnb9529/",
        "https://fe32.top/articles/jsnb9530/",
        "https://fe32.top/articles/jsnb9531/",
        "https://fe32.top/articles/jsnb9532/",
        "https://fe32.top/articles/jsnb9533/",
        "https://fe32.top/articles/jsnb9534/",
        "https://fe32.top/articles/jsnb9535/",
        "https://fe32.top/articles/jsnb9536/",
        "https://fe32.top/articles/jsnb9537/",
        "https://fe32.top/articles/jsnb9538/",
        "https://fe32.top/articles/jsnb9539/",
        "https://fe32.top/articles/jsnb9540/",
        "https://fe32.top/articles/jsnb9541/",
        "https://fe32.top/articles/jsnb9542/",
        "https://fe32.top/articles/jsnb9543/",
        "https://fe32.top/articles/jsnb9544/",
        "https://fe32.top/articles/hyeccjmu/",
        "https://fe32.top/articles/rea323su/",
        "https://fe32.top/articles/sql228ba/",
        "https://fe32.top/articles/soc145ket/",
        "https://fe32.top/articles/xi2mpxmd/",
        "https://fe32.top/articles/zt1442re/",
        "https://fe32.top/articles/we0522bs/",
    ]
    n = Math.floor(Math.random() * h.length), location.href = h[n]
    window.href = n
    removeRightMenu();
});

$("#rightmenu-mask").on("click", function () { removeRightMenu() });
$("#rightmenu-mask").contextmenu(function () {
    removeRightMenu();
    return false;
});

$(".joe_wallpaper__type-list>li").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var tar = "#item-" + $(this).attr('data-cid');
    $(tar).addClass('item-show').siblings().removeClass("item-show");
})
