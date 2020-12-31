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

workbox.precaching.precacheAndRoute([{"revision":"0054444aa09d896e37c08790f3efa81c","url":"./2020/12/15/hello-world/index.html"},{"revision":"5951ccd440d9093ef90286dbef36707c","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"95e5272c2e1497cd2b957f3217f66622","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"c80deebd57f062ae6aaadb3f0c80fbc3","url":"./2020/12/30/nvm,npm与nrm/index.html"},{"revision":"17d4b6629e8a5d2dfb6f4cdf18681d2e","url":"./404.html"},{"revision":"fccee726c7bf064525929f49632e7be1","url":"./about/index.html"},{"revision":"232b76f3ea794efca38efc60203324e3","url":"./archives/2020/12/index.html"},{"revision":"07f5b050b681e889d5cbb9621591de5c","url":"./archives/2020/index.html"},{"revision":"cb707eb5fbdc6ae60589b5cfbbc2001c","url":"./archives/index.html"},{"revision":"e8e2c7ba2500252ffde800be1ebecda2","url":"./bangumis/index.html"},{"revision":"c792e115265f06c951c559c029f143ea","url":"./books/index.html"},{"revision":"be404e0886ac2704df0de7e5a1b9b197","url":"./categories/index.html"},{"revision":"f8a988eaa9e63c38e5e462746513c0ad","url":"./categories/Markdown/index.html"},{"revision":"ff1ddf0e881adce098438a6048e7cb95","url":"./categories/Node/index.html"},{"revision":"a3a5696a9b7c5e0a1470f96b6135206a","url":"./categories/Vue后台管理系统/index.html"},{"revision":"4ad524be739d0d33661c7bbae1895a37","url":"./comments/index.html"},{"revision":"be32094d49ec0dd38dfd870922235cbd","url":"./css/ethan.css"},{"revision":"71bc88912e132ea1ebe6344fc2588766","url":"./css/gitcalendar.css"},{"revision":"1dfba3703ac503d1af1b26be355102ab","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"98f3f9855a63f7b879c6052290ffc1af","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"0483f14534e12305e490a42ae5b99c25","url":"./img/siteicon/README.html"},{"revision":"f78658eacec2854a07b8b1365ae09adc","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"f70755d41763c338ec7534199d1f6637","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"21c8ecf6eb96b987574507b1d6442eea","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"4fe5f478f711668128be68ca0976ee7b","url":"./movies/index.html"},{"revision":"506f52430e89926e37ffc72ef8682cda","url":"./tags/Emoji表情/index.html"},{"revision":"acb551bf7f128379eb514069cce4a8d8","url":"./tags/index.html"},{"revision":"7590c39def19336985241cb20bb53df8","url":"./tags/Markdown/index.html"},{"revision":"129f9fd85c691227928882cd82fe9aab","url":"./tags/Node/index.html"},{"revision":"2975f82c9c3fd2d7bafad6775dece8db","url":"./tags/npm/index.html"},{"revision":"b4d1331f8583e3b74a57008f20f2989a","url":"./tags/nrm/index.html"},{"revision":"ead819c9ac98d283b0294c82f4e513f5","url":"./tags/nvm/index.html"},{"revision":"1df6bce1ce065a33cb555cfab60b8b25","url":"./tags/Vue/index.html"},{"revision":"bbfc9c0cf42182eed0298ae35e5ce417","url":"./tags/后台管理/index.html"}], {
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