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

workbox.precaching.precacheAndRoute([{"revision":"4ed4ef395e63fb49c19809b8160391a4","url":"./2020/12/15/hello-world/index.html"},{"revision":"bb9207ba4543a40f547f46713e1d6fb7","url":"./2020/12/21/Vue后台管理系统模板推荐/index.html"},{"revision":"706f26dc27d860fc791c3e1e66bed57f","url":"./2020/12/28/Markdown语法支持的Emoji表情/index.html"},{"revision":"2d64a19ef12e059eaf731198ff358aab","url":"./2020/12/30/Node-js：nvm、npm与nrm/index.html"},{"revision":"6e687a1f98d97a32c37c1aa605614db1","url":"./404.html"},{"revision":"a7af625abb0f5f7a2de9da14c7a8b127","url":"./about/index.html"},{"revision":"ac748016d3dac3f8de32928dea3baad1","url":"./archives/2020/12/index.html"},{"revision":"8c1c81618a507c30cb647494dc788802","url":"./archives/2020/index.html"},{"revision":"279b6edfe583b7ffe9fc36c714d28f7b","url":"./archives/index.html"},{"revision":"2f113dc3e9d6c332f59b308f7cc7b164","url":"./bangumis/index.html"},{"revision":"481db0f23b5c0e348e1905e629ada3a9","url":"./books/index.html"},{"revision":"a33cdf7a1e2d57c83d5b64f8011baf87","url":"./categories/index.html"},{"revision":"9711b39224779eccedd529a3ebb9c4a9","url":"./categories/Markdown/index.html"},{"revision":"57896d8617119172aca6e1ee86787193","url":"./categories/Node-js/index.html"},{"revision":"9f44809a39b54ac71411f1c1854907e2","url":"./categories/Vue后台管理系统/index.html"},{"revision":"5bdac84b7d420b6f94110978838d9500","url":"./comments/index.html"},{"revision":"da811fb62e046fdd3b4b80ed647e49e8","url":"./css/ethan.css"},{"revision":"71bc88912e132ea1ebe6344fc2588766","url":"./css/gitcalendar.css"},{"revision":"1dfba3703ac503d1af1b26be355102ab","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cb53cb9fd359fabfc7727b0d7ea5b846","url":"./games/index.html"},{"revision":"044696ee751751a81d6d8ca3cac18d31","url":"./img/siteicon/manifest.json"},{"revision":"abd4e87bfa45796b8f14b0eb4b91b78e","url":"./img/siteicon/README.html"},{"revision":"e0933464504eca598093e40f9e489129","url":"./index.html"},{"revision":"c455a32b73d6472bb9dedd124617d578","url":"./js/chocolate.js"},{"revision":"d446b3b4f7616a4d085fd385fe3a51fa","url":"./js/cursor.js"},{"revision":"f70755d41763c338ec7534199d1f6637","url":"./js/ethan_tzy.js"},{"revision":"3cb8ef358d009f313aebf5421a56cc6a","url":"./js/gitcalendar.js"},{"revision":"313bd45ccc98c5c4982dbc3b07ab1a16","url":"./js/issues.js"},{"revision":"8ad1f57f8015af716e71dcfb7c0fe8f9","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"7dcbb18c28dd1a81dea0702b6495a3a5","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"dc4b2befc1ce8684dc6aa97c513ee2f2","url":"./link/index.html"},{"revision":"4b38364ee396965687387f825d4df762","url":"./live2dw/assets/exp/f01.exp.json"},{"revision":"118d9ff59c42844c06f8545502cab6bc","url":"./live2dw/assets/exp/f02.exp.json"},{"revision":"63cbee92a98c80a21ceab1b1439bdec6","url":"./live2dw/assets/exp/f03.exp.json"},{"revision":"51ecbcb83242e26877c42918dfabe303","url":"./live2dw/assets/exp/f04.exp.json"},{"revision":"cb9888a2ad292db28bf844ee699a3da6","url":"./live2dw/assets/shizuku.model.json"},{"revision":"d7e0ddb13b4318f6601570b2e1c03582","url":"./live2dw/assets/shizuku.physics.json"},{"revision":"7174fa67da90e37a83253886c8bc080d","url":"./live2dw/assets/shizuku.pose.json"},{"revision":"32973883fcac0a9ae6cc79c0ea25fda2","url":"./live2dw/lib/L2Dwidget.0.min.js"},{"revision":"094cbace49a39548bed64abff5988b05","url":"./live2dw/lib/L2Dwidget.min.js"},{"revision":"05c37471145f91f5040c70bc8771739d","url":"./manifest.json"},{"revision":"40a9aa2147b10a8d9a16a467ed3a3ada","url":"./movies/index.html"},{"revision":"39bcfb57190440e655989c0393a7ac74","url":"./tags/Emoji表情/index.html"},{"revision":"c1c5f8a290fbcc45fb0ce263995538b5","url":"./tags/index.html"},{"revision":"56f556af65c0b5bac3929924406f859b","url":"./tags/Markdown/index.html"},{"revision":"4fa46dc251c407cc5af3104bff368769","url":"./tags/Node-js/index.html"},{"revision":"a7c49afc61df07087aa26d6e556b601e","url":"./tags/npm/index.html"},{"revision":"f7207e509d4dbac251af320dd0437286","url":"./tags/nrm/index.html"},{"revision":"e8a5eae45e53aa4cda615d9439c05415","url":"./tags/nvm/index.html"},{"revision":"d8c1e9989025f747d9b886cc19b01415","url":"./tags/Vue/index.html"},{"revision":"5841ca1f6ae5bb3d5b4137581fd82ad7","url":"./tags/后台管理/index.html"}], {
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