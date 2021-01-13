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

workbox.precaching.precacheAndRoute([{"revision":"1cda3e91e33bf7d5717fa0ac540a313a","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"13ddd9c2d475bf6f3a0da3b823d84993","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"6bf4b00a4345ba905c788fd3b0420ef0","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"d5a3000c840136eec3ee6a65c66d7f68","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"af28cc46b4f2d83004f38c30f6f450e8","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"0fe29b9bb98551d4d34f15a643a556a7","url":"./2021/01/12/my-workbook/index.html"},{"revision":"5def92726462b068a4b9d2798ddcf320","url":"./404.html"},{"revision":"4e054d3807adb48ca30d9e34cea6db02","url":"./about/index.html"},{"revision":"84ea7727d1776d814f967018a237059f","url":"./archives/2020/12/index.html"},{"revision":"fdbca050eb841b4c1e1cd8a62a93108e","url":"./archives/2020/index.html"},{"revision":"7f69a53931d67c0fc8cdb8436b1f696d","url":"./archives/2021/01/index.html"},{"revision":"411028f355676fb877fd3342494f731e","url":"./archives/2021/index.html"},{"revision":"6b9754d2b9edb6a49d5e1ce91cda067a","url":"./archives/index.html"},{"revision":"35fa49e09d226a3474f30544d493fd1b","url":"./bangumis/index.html"},{"revision":"6ac4fcbcdcb49427c273e15abf12b827","url":"./books/index.html"},{"revision":"cf0ce985740f2a1f9dce2c2e0293796f","url":"./categories/🐬Node/index.html"},{"revision":"222ae8c297ea13e71dcba26be022d077","url":"./categories/👻Markdown/index.html"},{"revision":"55610a232bd20b07683bb9ee6ad668af","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"0d10df08b95b049312448c86a7529d3f","url":"./categories/📑工作手册/index.html"},{"revision":"356858b508a09d09fe320872e51f5ee2","url":"./categories/🦋Butterfly/index.html"},{"revision":"62ab8561914a8ed58c844a1c26a348bd","url":"./categories/index.html"},{"revision":"4456d14002d3a1c975ef7917e67f0f28","url":"./comments/index.html"},{"revision":"a19ac76bfaab7a5a707d95726733f1a4","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"218d315052f4841954a20d81e0532dad","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"f7f15fa60f807ca07f9acf8fe97947e1","url":"./gallery/ACG/index.html"},{"revision":"99d929f2cced93ffc5ed3fd963641821","url":"./gallery/index.html"},{"revision":"713ab324cfab51f6ba0629517c7724f6","url":"./gallery/OHMYGIRL/index.html"},{"revision":"640e30b034eee1072f5a8c9068979403","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"bc3d30c0e681e73b8b48d7350574c765","url":"./img/siteicon/README.html"},{"revision":"a2c0afbe4d964dd49facc6b8d4acb0b2","url":"./index.html"},{"revision":"a363325dc1c1ef79c0caa0aed61f043d","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"7ae0dfe61ad3aad2d220a4f337febe9b","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"fe9c7f6f3bac98976a437455205c16b3","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"85117d0ddd62f96b96f19c1f242273ca","url":"./movies/index.html"},{"revision":"84629483303c34c2e473fb540a66becf","url":"./tags/📁Hexo/index.html"},{"revision":"ec360f0fada140084f4f5917516903b2","url":"./tags/🦋Butterfly/index.html"},{"revision":"68e8cfb2621d0ad195681986e9a270c8","url":"./tags/Emoji表情/index.html"},{"revision":"13d77678c743e4ecd1b05856031243ba","url":"./tags/index.html"},{"revision":"07ada2da5959ab505bdbd93dd41b9b34","url":"./tags/Markdown/index.html"},{"revision":"01f15b8a4cc56b67995fe0c6f825d1d8","url":"./tags/Node/index.html"},{"revision":"6692467babc1bdf36d6120410c38a9a3","url":"./tags/npm/index.html"},{"revision":"e005807a693403519788a7758eeb2493","url":"./tags/nrm/index.html"},{"revision":"5151c604dcd261e581762447b76f2a8d","url":"./tags/nvm/index.html"},{"revision":"edc1c26ce459a123ad7b88114851f344","url":"./tags/Vue/index.html"},{"revision":"8048116ca547742172d099d56162f51b","url":"./tags/workbook/index.html"},{"revision":"b7b2e8d0cee2b487cc0c5a894dda5616","url":"./tags/后台管理/index.html"}], {
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