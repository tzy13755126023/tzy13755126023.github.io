/*
 * @Descripttion: 
 * @version: 
 * @Author: tzy1997
 * @Date: 2020-12-22 15:50:23
 * @LastEditors: tzy1997
 * @LastEditTime: 2020-12-22 15:53:42
 */
const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Ethan"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f58a437769e9f89504351fea95da617e","url":"./404.html"},{"revision":"c1608097ba11ac03ad6c3442a50c2be1","url":"./about/index.html"},{"revision":"6f0afcc6b92136f4d2d1fb8656556dc1","url":"./archives/2020/12/index.html"},{"revision":"f2df34e3c20e1824dbb9e4879b5e9d5c","url":"./archives/2020/index.html"},{"revision":"127569329e259a4d02c6d3bdbd707ac4","url":"./archives/2021/01/index.html"},{"revision":"6d0eabe6d127cd9f25bd21d325791092","url":"./archives/2021/02/index.html"},{"revision":"365f4ceb48c9b1b30824fbf5e714c85b","url":"./archives/2021/03/index.html"},{"revision":"be632d9f73625a027dd0450fc5fc3438","url":"./archives/2021/index.html"},{"revision":"3c73a15e28a2f22289701d3b7a0ac440","url":"./archives/index.html"},{"revision":"f15b7d035dcd62e7de8703405a5d8a7e","url":"./articles/0xiipgum/index.html"},{"revision":"3c96e8b89687fb50aabc37dccd1a16fc","url":"./articles/9r95s1wt/index.html"},{"revision":"b3c51903cd6e2e36eedaaf6f1d04c753","url":"./articles/e13t14zy/index.html"},{"revision":"e15fcae6b557a440f9e1738f16a10e5c","url":"./articles/hexo541u/index.html"},{"revision":"f3ed083ce93b340dc949b565b35a7d0c","url":"./articles/hyeccjmu/index.html"},{"revision":"d9ae17b1c3752de6261bf8ab943a0f3d","url":"./articles/ic67xik4/index.html"},{"revision":"05cc425a54cd6b336d3b0674a86a56bc","url":"./articles/kfwr2gpa/index.html"},{"revision":"d3c773f7db550dd82e6516fd47fa9853","url":"./articles/p520xyz8/index.html"},{"revision":"5529847c06909b96a0d192b14e417656","url":"./articles/uni235xy/index.html"},{"revision":"c32afb135de21071706355e4cba78e32","url":"./articles/xi2mpxmd/index.html"},{"revision":"e6fe3c7f911689283077eeed72697fdf","url":"./bangumis/index.html"},{"revision":"20c6e4b1ad00063a6bd349daf44745d0","url":"./books/index.html"},{"revision":"080661ec797d942f06f683d2752730dc","url":"./categories/🐬Node/index.html"},{"revision":"f3c59e9d1c83706a1f45f9129c5dce15","url":"./categories/👻Markdown/index.html"},{"revision":"0e2987e5ac0de1ec959682bb666d8cd6","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"b861b2684733f210bd5dd79f7f6b8d2f","url":"./categories/📑工作手册/index.html"},{"revision":"f696c8b33778ad8d0f9b3a50dba5cdf0","url":"./categories/🤡-Vue/index.html"},{"revision":"6468fd8e3dd78aa21e8986e4dcdfa0d0","url":"./categories/🦋Butterfly/index.html"},{"revision":"c88ec0c1d2d653126b80065f0d4343c1","url":"./categories/index.html"},{"revision":"3f31a60f8355d7a131f293b1431f6a1d","url":"./categories/uni-app/index.html"},{"revision":"f9308fa31be1614588a7390af31ec0fa","url":"./categories/骨架屏/index.html"},{"revision":"9af44a5a7e0e1444a6154412c2113c15","url":"./comments/index.html"},{"revision":"a53969f742316777090edca4c8cab331","url":"./css/dl.css"},{"revision":"10721b01c73274163293da138c9bdc34","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"e9449a22999225ec6a27bbde3ed27425","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b8bab03c568e46d11c62f551b2f46070","url":"./gallery/ACG/index.html"},{"revision":"3238594b64cfe2f728d1c18250350dc7","url":"./gallery/index.html"},{"revision":"38fad4a669ba6d9e51a43ce854a3bd20","url":"./gallery/OHMYGIRL/index.html"},{"revision":"b0f5276cee42d21ca003411c6960170c","url":"./games/index.html"},{"revision":"06f81ba83d11fa1d604a633423affa40","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"0f5c01080a9c384afc6926da0c04ca93","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"0f678b00005c67a48798834dabd96857","url":"./movies/index.html"},{"revision":"95bd022305723e4c197c9b9fd1714e05","url":"./tags/📁Hexo/index.html"},{"revision":"5c1830910e16bfbb3125bf8f841e9571","url":"./tags/🦋Butterfly/index.html"},{"revision":"046d43211a7bb715e92e6b455ed29b27","url":"./tags/Emoji表情/index.html"},{"revision":"d2597da2655ac9cc21695210938b7040","url":"./tags/index.html"},{"revision":"65333ff6a76b1e9b16309786946a6cd1","url":"./tags/Markdown/index.html"},{"revision":"9a21f0234f9435dcf4b610c4874e7d11","url":"./tags/Node/index.html"},{"revision":"f878c7949bc7e26dd9c6b8c58aa6d03a","url":"./tags/npm/index.html"},{"revision":"f68b43632806dd8d306c07edcc35d1cf","url":"./tags/nrm/index.html"},{"revision":"03ddc31cb0f5d0d49bffa33d5c2c8bc2","url":"./tags/nvm/index.html"},{"revision":"7b698abd18e05e4d19a557d4236f7bed","url":"./tags/Skeleton-Screen/index.html"},{"revision":"740df108da967fed95547853917dfeaa","url":"./tags/uni-app/index.html"},{"revision":"a4088ac8c858c86c5136b00587017d6c","url":"./tags/Vue/index.html"},{"revision":"ae8a8ae477efe51be89123d8de0606b1","url":"./tags/workbook/index.html"},{"revision":"509d1817dfcac5246b102ee71ab0bdf1","url":"./tags/后台管理/index.html"},{"revision":"4893764f59a120aaf33c060971060c63","url":"./tags/骨架屏/index.html"}], {
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();