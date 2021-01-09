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

workbox.precaching.precacheAndRoute([{"revision":"cd79a35d0e31afc6339ce3edf9b83adb","url":"./2020/12/15/hello-world/index.html"},{"revision":"b62bc1cc4f0c1abb9a34a26fb53e4310","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"032d1c4cba0afe1a8b1aca100f11c110","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"332d0fe502cc635fe55857baf60d6630","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"bb509a250e1eb7efa4b2f9ddaa9a950c","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"7979eeafa0d60eadc490fedf22cfe425","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"868022d183c2ecbfa553adc1e7c363d7","url":"./404.html"},{"revision":"9d0698f88d801bb811295b6ef5486a72","url":"./about/index.html"},{"revision":"01d952eaef5b3417ec66e8d6ef09040d","url":"./archives/2020/12/index.html"},{"revision":"e79f736e99adb8de53f6c1089d64465c","url":"./archives/2020/index.html"},{"revision":"4c11a9902d695d4d0c87a924f2314887","url":"./archives/2021/01/index.html"},{"revision":"ea95e36887b9e4f1fe6ac67fd0c1c06d","url":"./archives/2021/index.html"},{"revision":"a3a5268de95ae60372d4330dd692011f","url":"./archives/index.html"},{"revision":"57fcd02ad75649176fe67c7f8bcbb8bf","url":"./bangumis/index.html"},{"revision":"6bb94c519b7b8afa934c86f14d3fc3dc","url":"./books/index.html"},{"revision":"34c14f004eabd01ae28a2f91b5adf3e8","url":"./categories/🐬Node/index.html"},{"revision":"cf1a1aeec658dccee77cb0285574248c","url":"./categories/👻Markdown/index.html"},{"revision":"335d8bcad529848c5c23d8b9f8719675","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"4d422214deec9818135dea76ab71aa95","url":"./categories/🦋Butterfly/index.html"},{"revision":"90a1dd4ead2edb2548d85b2e4fa062a5","url":"./categories/index.html"},{"revision":"2be7af7aba306e66ad9c8ea874c72cfe","url":"./comments/index.html"},{"revision":"222afcaa5ae620251645e3688f5a531a","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"3ced22e4d60ac16312ad4602a4806c18","url":"./gallery/ACG/index.html"},{"revision":"5b733ea1ab74d41a9587d6d2c59ffe8d","url":"./gallery/index.html"},{"revision":"5a6edead91c27874113c4523ccdf14ca","url":"./gallery/OHMYGIRL/index.html"},{"revision":"fdd7c3c6258b945c6048db12ff551216","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"07384e958cfe5f8ae75b5fbccd7f402e","url":"./img/siteicon/README.html"},{"revision":"b28cee11adbfb3c8befa466afcf85b2c","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"d0fffe1bc16e75700325da0f72902280","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"1d99c0ac110511a5a4b53b4c7b900791","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"1934bf84092f44a52bdc4de0653c0fcd","url":"./movies/index.html"},{"revision":"4243500c32de3d7c6a6d0c6f2211ebe4","url":"./tags/📁Hexo/index.html"},{"revision":"40ce8be71496558f0c95e2d435efe63a","url":"./tags/🦋Butterfly/index.html"},{"revision":"a64b2db0c106e979ca5c64ce4b393d13","url":"./tags/Emoji表情/index.html"},{"revision":"b45f9185dea9d8e975ac7d178395f32f","url":"./tags/index.html"},{"revision":"191d4495a6b7a8f530b5d762aff676de","url":"./tags/Markdown/index.html"},{"revision":"1d90edd3f446e97edc6453c7cfbaeebe","url":"./tags/Node/index.html"},{"revision":"dcb53fffc3884217a84fafec5113d838","url":"./tags/npm/index.html"},{"revision":"002e06f3dbfdf2e55f3394957a3ddb08","url":"./tags/nrm/index.html"},{"revision":"0a7132cfb2a382a32c54897b0e917737","url":"./tags/nvm/index.html"},{"revision":"aad19a89ff554537876cd45d7b34547c","url":"./tags/Vue/index.html"},{"revision":"0c2eac71d0c5a3b50990b19ad3405854","url":"./tags/后台管理/index.html"}], {
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