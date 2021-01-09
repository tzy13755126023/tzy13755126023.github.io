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

workbox.precaching.precacheAndRoute([{"revision":"fe2769561ebaeff64b19a9cd5263bdfa","url":"./2020/12/15/hello-world/index.html"},{"revision":"69430c471c907b5a852e093761b1f294","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"cf09cf3cc92018886e59cc2c7cde9e89","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"f099ed734f0ecfe3ad82c51f494470b7","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"29a9c9b8c7130d0995460c5639c9d3aa","url":"./2021/01/05/基于Butterfly的外挂标签引入/index.html"},{"revision":"d401cd72dad1eca930ec40724ae984cf","url":"./2021/01/07/添加github徽标/index.html"},{"revision":"88124e8335568d49aa0681d1b60cfcba","url":"./404.html"},{"revision":"400177bb5d3df07b32cb5781857c6f8b","url":"./about/index.html"},{"revision":"18405c5078e5b0fb9da438c15e1506e2","url":"./archives/2020/12/index.html"},{"revision":"5cddf847c2954c39095c189803d5a347","url":"./archives/2020/index.html"},{"revision":"50dd95e114b65a112eeec7fa7f1182e8","url":"./archives/2021/01/index.html"},{"revision":"58768cf26aa1ddda4885e53095e50daf","url":"./archives/2021/index.html"},{"revision":"8e16ec4f1ddf67a9d6b729fa6456dc84","url":"./archives/index.html"},{"revision":"b80517850b4770224fe65cf693252483","url":"./bangumis/index.html"},{"revision":"4fd888bec39de6da0443586ee9aa6943","url":"./books/index.html"},{"revision":"6c3a46166ca2eae26b1bdc9e59f42e34","url":"./categories/🐬Node/index.html"},{"revision":"ccfd3cb6db3563240b42d9da8bd32bb1","url":"./categories/👻Markdown/index.html"},{"revision":"e173a02c41421a463b113f55caf2fdc2","url":"./categories/💘Vue后台管理系统/index.html"},{"revision":"3cdbf211aad4e5364673a963b62ac9b4","url":"./categories/🦋Butterfly/index.html"},{"revision":"f0a4f4c0a2761f6c3c411c2e4edb847f","url":"./categories/index.html"},{"revision":"2c87ff872e92a119358503800504c4fe","url":"./comments/index.html"},{"revision":"222afcaa5ae620251645e3688f5a531a","url":"./css/ethan.css"},{"revision":"2f2c5801354c66d7d5c22ee17c8702ea","url":"./css/gitcalendar.css"},{"revision":"98f390e55b5b124320f895383f0cbb35","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"1bc73657e872cf96172bda7344a0bf64","url":"./gallery/ACG/index.html"},{"revision":"cf3868643a0052030d2dd914399bb496","url":"./gallery/index.html"},{"revision":"41d1002c451bcc009c864a60b8164154","url":"./gallery/OHMYGIRL/index.html"},{"revision":"331028f3950fdbcf2b7c8a41697a5f4c","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"238b68a860637b56f592fc46ae4ebf74","url":"./img/siteicon/README.html"},{"revision":"bdbf8d3bef0dab33bccfe7142b36897b","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"d0fffe1bc16e75700325da0f72902280","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"83b91641c3fd9ef7e0f7992fea3339f3","url":"./js/wow_init.js"},{"revision":"034139c0b207e87fcb1330b8a1ad302e","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"2f5fe59e5923c263a099d35425d5f25f","url":"./movies/index.html"},{"revision":"6fef372e2a798114d18bd07f942eab24","url":"./tags/📁Hexo/index.html"},{"revision":"1b9e7953a83320b3ade738f844e614c2","url":"./tags/🦋Butterfly/index.html"},{"revision":"8e9debb433dd42b1aefbc3ac98380eb2","url":"./tags/Emoji表情/index.html"},{"revision":"cb5d54b0ef65715fdeaa798dad44cb0b","url":"./tags/index.html"},{"revision":"fb069f961524bc6875bd806e180b3bac","url":"./tags/Markdown/index.html"},{"revision":"636b9d9a49adb3f8a2b7f0c4ccea79bc","url":"./tags/Node/index.html"},{"revision":"02bf978fc3ba3c85071e7846713a282f","url":"./tags/npm/index.html"},{"revision":"3335940398af1d9d80820bc91ad52feb","url":"./tags/nrm/index.html"},{"revision":"ee02a9457b6ea1045c636f2bceb37752","url":"./tags/nvm/index.html"},{"revision":"1008a87cff16ef0eb371ad76573a1b8e","url":"./tags/Vue/index.html"},{"revision":"94bfdda000fa2a81d13460b246e86424","url":"./tags/后台管理/index.html"}], {
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